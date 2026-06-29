/**
 * Create a new post in the content directory
 *
 * Usage: astro-pure new [options] <post-title>
 *
 * Options:
 *   -l, --lang <en|zh>   Set the language (default: en)
 *   -d, --draft          Create a draft post (default: false)
 *   -m, --mdx            Use MDX format (default: false)
 *   -f, --folder         Create the post in a folder (default: false)
 *   -y, --year           Organize by year and month folder (e.g., 2026/02/) (default: false)
 *   --date <YYYY-MM-DD>  Specify publish date (format: 2026-02-28) (default: current date)
 *   -h, --help           Show this help message
 *
 * Example:
 *   astro-pure new "Hello World"
 *   astro-pure new -l zh "你好，世界"
 *   astro-pure new -y -m "我的文章"  # 按当前年月创建 blog/2026/03/我的文章/index.mdx，并复制默认封面
 *   astro-pure new -y --date 2025-12-25 "圣诞节文章"  # 指定日期创建
 */

import fs from 'node:fs'
import path from 'node:path'

import minimist from './libs/minimist.cjs'
import slugify from './libs/slugify.cjs'

function getDate(dateString = null) {
  const date = dateString ? new Date(dateString) : new Date()
  
  // 验证日期是否有效
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date format: ${dateString}. Please use YYYY-MM-DD format.`)
  }
  
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0') // Month is 0-based
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

/** Parse date string and return Date object */
function parseDate(dateString) {
  if (!dateString) return new Date()
  
  // 支持多种格式：2026-02-28, 2026/02/28, 2026-2-28
  const normalized = dateString.replace(/\//g, '-')
  const date = new Date(normalized)
  
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date format: ${dateString}. Please use YYYY-MM-DD format.`)
  }
  
  return date
}

/** get blog title slug (for single-file name) */
function getPostSlug(postTitle) {
  let slug = slugify(postTitle).toLocaleLowerCase()
  if (slug === '') {
    slug = 'untitled'
  }
  return slug
}

/** 文件夹名与标题一致，仅移除文件系统非法字符 */
function getFolderName(postTitle) {
  const name = postTitle.trim()
  if (!name) return 'untitled'
  return name.replace(/[\\/:*?"<>|]/g, '')
}

const HELP_INFO = `Usage: astro-pure new [options] <post-title>

Options:
  -l, --lang           Set the language (default: null)
  -d, --draft          Create a draft post (default: false)
  -m, --mdx            Use MDX format (default: false)
  -f, --folder         Create the post in a folder (default: false)
  -y, --year           Organize by year and month folder (e.g., 2026/02/) (default: false)
  --date <YYYY-MM-DD>  Specify publish date (format: 2026-02-28) (default: current date)
  -h, --help           Show this help message

Example:
  astro-pure new "Hello World"
  astro-pure new -l zh "你好，世界"
  astro-pure new -y -m "我的文章"  # 创建 blog/2026/03/我的文章/index.mdx + 默认封面
  astro-pure new -y --date 2025-12-25 "圣诞节文章"  # 指定日期创建
`
const TARGET_DIR = 'src/content/blog/'
/** 默认封面图路径（相对于项目根目录） */
const DEFAULT_THUMBNAIL = 'src/assets/blogs/thumbnail.jpg'

export default function main(args) {
  // 先手动提取 --date 参数，避免 minimist 解析错误
  let dateValue = null
  const filteredArgs = []
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--date' && i + 1 < args.length) {
      dateValue = args[i + 1]
      i++ // 跳过日期值
    } else if (args[i].startsWith('--date=')) {
      dateValue = args[i].split('=')[1]
    } else {
      filteredArgs.push(args[i])
    }
  }
  
  const parsedArgs = minimist(filteredArgs, {
    string: ['lang'],
    boolean: ['draft', 'mdx', 'help', 'folder', 'year'],
    default: {
      lang: null,
      draft: false,
      mdx: false,
      folder: false,
      year: false
    },
    alias: {
      l: 'lang',
      d: 'draft',
      m: 'mdx',
      h: 'help',
      f: 'folder',
      y: 'year'
    }
  })
  
  // 添加日期值到 parsedArgs
  parsedArgs.date = dateValue

  if (parsedArgs.help) {
    console.log(HELP_INFO)
    process.exit(0)
  }

  let postTitle = parsedArgs._.join(' ') // join the rest of the arguments
  if (!postTitle || postTitle.trim() === '') {
    postTitle = 'Untitled'
  }
  console.log('Creating new post:', postTitle)

  // 解析日期（如果指定了）
  let targetDate
  try {
    targetDate = parseDate(parsedArgs.date)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }

  const fileExtension = parsedArgs.mdx ? '.mdx' : '.md'
  const fileName = getPostSlug(postTitle) + fileExtension

  let fullPath
  /** 是否为「文件夹模式」（会生成 index 并可选复制封面） */
  let folderPathForThumbnail = null
  if (parsedArgs.year) {
    // 按年份和月份分类：创建 2026/03/文章标题/index.md，文件夹名与标题一致
    const year = targetDate.getFullYear()
    const month = String(targetDate.getMonth() + 1).padStart(2, '0') // 月份从 0 开始，需要 +1
    const folderName = getFolderName(postTitle)
    const folderPath = path.join(TARGET_DIR, String(year), month, folderName)
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true })
    }
    const fileName = `index${fileExtension}`
    fullPath = path.join(folderPath, fileName)
    folderPathForThumbnail = path.join(process.cwd(), folderPath)
  } else if (parsedArgs.folder) {
    const folderName = getFolderName(postTitle)
    const folderPath = path.join(TARGET_DIR, folderName)
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true })
    }
    const fileName = `index${fileExtension}`
    fullPath = path.join(folderPath, fileName)
    folderPathForThumbnail = path.join(process.cwd(), folderPath)
  } else {
    fullPath = path.join(TARGET_DIR, fileName)
  }

  console.log('Full path:', fullPath)

  if (fs.existsSync(fullPath)) {
    console.error(`ERROR: File ${fullPath} already exists`)
    process.exit(1)
  }

  // 生成日期字符串（使用指定日期或当前日期）
  const dateString = parsedArgs.date ? getDate(parsedArgs.date) : getDate()
  const useThumbnail = folderPathForThumbnail != null

  let content = `---
title: ${postTitle}
description: 'Write your description here.'
publishDate: ${dateString}
`
  content += parsedArgs.draft ? 'draft: true\n' : ''
  content += parsedArgs.lang ? `lang: ${parsedArgs.lang}\n` : ''
  if (useThumbnail) {
    content += `heroImage: { src: './thumbnail.jpg', color: '#A0A0A0' }
`
  }
  content += `tags:
  - Uncategorized
---

Write your content here.
`

  fs.writeFileSync(fullPath, content)

  // 文件夹模式下复制默认封面图
  if (folderPathForThumbnail) {
    const srcThumb = path.join(process.cwd(), DEFAULT_THUMBNAIL)
    const destThumb = path.join(folderPathForThumbnail, 'thumbnail.jpg')
    if (fs.existsSync(srcThumb)) {
      fs.copyFileSync(srcThumb, destThumb)
      console.log('Default thumbnail copied to', path.relative(process.cwd(), destThumb))
    } else {
      console.warn(`Default thumbnail not found: ${DEFAULT_THUMBNAIL}, skip copy.`)
    }
  }

  console.log(`Post "${postTitle}" created at ${fullPath}`)
}
