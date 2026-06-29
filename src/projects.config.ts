export interface ProjectLink {
  type: string
  href: string
}

export interface ProjectItem {
  /** 可选：在 `/src/assets/projects/` 下的图片文件名，如 `1.avif` */
  image?: string
  name: string
  description: string
  links: ProjectLink[]
}

/** Programs 区块 */
export const programs: ProjectItem[] = [
  {
    name: 'T-DoList',
    description: '轻量级桌面任务清单应用 - 简洁高效的个人任务管理工具',
    links: [
      { type: 'github', href: 'https://github.com/HoshiSaneko/T-DoList' },
      { type: 'release', href: 'https://github.com/HoshiSaneko/T-DoList/releases' }
    ]
  },
  {
    name: 'cover-gen',
    description: '智能博客封面生成器',
    links: [
      { type: 'github', href: 'https://github.com/HoshiSaneko/cover-gen' },
    ]
  },
  {
    name: 'git-commit-gen',
    description: '利用LLM根据暂存区的代码变更自动生成符合 Conventional Commits 规范的提交信息',
    links: [
      { type: 'github', href: 'https://github.com/HoshiSaneko/git-commit-gen' },
      { type: 'release', href: 'https://github.com/HoshiSaneko/git-commit-gen/releases' }
    ]
  },
]

/** Learnings 区块 */
export const learnings: ProjectItem[] = [
]

/** Some old projects 区块（折叠里显示的老项目） */
export const oldProjects: ProjectItem[] = [
  {
    name: 'ATao-Blog',
    description: '一个基于 Astro 框架的简约个人博客主题，简单干净，专注于内容展示。',
    links: [
      { type: 'github', href: 'https://github.com/HoshiSaneko/ATao-Blog' },
    ]
  },
  {
    name: 'DeepSeek-Commit-Tool',
    description: '基于 DeepSeek API 的 Git 提交信息自动生成工具。',
    links: [
      { type: 'github', href: 'https://github.com/HoshiSaneko/DeepSeek-Commit-Tool' },
    ]
  },
  {
    name: 'T-DevTool',
    description: '现代化的Android设备信息管理工具',
    links: [
      { type: 'github', href: 'https://github.com/HoshiSaneko/T-DevTool' },
    ]
  },
]

/** Others 区块 */
export const others: ProjectItem[] = [
]

