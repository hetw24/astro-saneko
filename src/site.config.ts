import type { CardListData, Config, IntegrationUserConfig, ThemeUserConfig } from 'astro-pure/types'

export const theme: ThemeUserConfig = {
  // [Basic]
  /** Title for your website. Will be used in metadata and as browser tab title. */
  title: '星屿浅奈 ✧ Saneko',
  /** Will be used in index page & copyright declaration */
  author: 'Saneko',
  /** Description metadata for your website. Can be used in page metadata. */
  description: '做自己喜欢的事',
  /** The default favicon for your site which should be a path to an image in the `public/` directory. */
  favicon: '/favicon/favicon.ico',
  /** The default social card image for your site which should be a path to an image in the `public/` directory. */
  socialCard: '/images/social-card.png',
  /** Specify the default language for this site. */
  locale: {
    lang: 'zh-CN',
    attrs: 'zh-CN',
    // Date locale
    dateLocale: 'en-US',
    dateOptions: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  },
  /** Contact information for legal documents */
  contact: {
    email: 'qiatao0305@163.com',
    website: 'https://saneko.me', 
    region: 'China' 
  },
  /** Set a logo image to show in the homepage. */
  logo: {
    src: '/src/assets/avatar.png',
    alt: 'Avatar'
  },

  titleDelimiter: '•',
  prerender: true, // pagefind search is not supported with prerendering disabled
  npmCDN: 'https://cdn.jsdelivr.net/npm',

  // Still in test
  head: [
    /* Telegram channel */
    // {
    //   tag: 'meta',
    //   attrs: { name: 'telegram:channel', content: '@cworld0_cn' },
    //   content: ''
    // }
  ],
  customCss: [],

  /** Configure the header of your site. */
  header: {
    menu: [
      { title: 'Blog', link: '/blog' },
      { title: 'Docs', link: '/docs' },
      { title: 'Projects', link: '/projects' },
      { title: 'Links', link: '/links' },
      { title: 'About', link: '/about' }
    ]
  },
  home: {
    location: 'Ningbo'
  },

  /** Configure the footer of your site. */
  footer: {
    // Year format
    year: `© ${new Date().getFullYear()}`,
    // ICP 备案信息（可选），显示在版权行
    icp: {
      title: '浙ICP备2024096834号-4',
      link: 'https://beian.miit.gov.cn/'
    },
    links: [
      // 站内政策等（pos: 2 会接在版权行后）
      {
        title: 'Site Policy',
        link: '/terms',
        pos: 2
      }
    ],
    /** Enable displaying a “Astro & Pure theme powered” link in your site’s footer. */
    credits: true,
    /** Optional details about the social media accounts for this site. */
    social: (() => {
      // 简化配置：只需填写 ID/用户名/邮箱
      const socialIds = {
        github: 'HoshiSaneko', // GitHub 用户名
        bilibili: '291198772', // Bilibili UID
        tiktok: '71134083952', // 抖音用户 ID
        email: 'qiatao0305@163.com' // 邮箱账号
      }
      
      // 自动转换为完整 URL（Footer 等组件需要）
      return {
        github: `https://github.com/${socialIds.github}`,
        bilibili: `https://space.bilibili.com/${socialIds.bilibili}`,
        tiktok: `https://www.douyin.com/user/${socialIds.tiktok}`,
        email: `mailto:${socialIds.email}`
      }
    })(),
    /** Optional details about the about section in homepage. */
    about: {
      intro: 'Automation Development Engineer',
      bio: 'Sharing experiences, code, and Minecraft-related content. Covering technical fields such as AI, Docker, WPF, Python, and Android, along with practical tools and tips.',
      motto: 'The road is long; I shall seek high and low.',
      spoiler: '累了就歇歇吧，摸会儿鱼没关系的～',
      mbti: 'INFJ-T',
      hobbies: [
        'Watching sunset by the sea.',
        'Listening to soft music alone.',
        'Reading books on a quiet afternoon.',
        'Taking photos of the sky.'
      ]
    }
  },

  // [Content]
  content: {
    /** External links configuration */
    externalLinks: {
      content: ' 🌊',
      /** Properties for the external links element */
      properties: {
        style: 'user-select:none'
      }
    },
    /** Blog page size for pagination (optional) */
    blogPageSize: 8,
    // Currently support weibo, x, bluesky
    share: ['weibo', 'x', 'bluesky']
  },

  /** Education configuration */
  education: [
    {
      title: '余姚市第八中学',
      date: 'August 2015 - July 2017',
      image: '/src/assets/educations/1.avif'
    },
    {
      title: '衡阳师范学院',
      date: 'August 2017 - July 2021',
      image: '/src/assets/educations/2.avif'
    }
  ],

  /** Certifications configuration */
  certifications: [
    {
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, vidit suscipit at mei.',
      date: 'July 2024',
      link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }
  ],

  /** Website List configuration for homepage */
  websiteList: [
    {
      title: 'T-DoList',
      description: '轻量级桌面任务清单应用 - 简洁高效的个人任务管理工具',
      link: 'https://github.com/HoshiSaneko/T-DoList',
      image: '/src/assets/projects/1.avif'
    },
    {
      title: 'cover-gen',
      description: '智能博客封面生成器',
      link: 'https://github.com/HoshiSaneko/cover-gen',
      image: '/src/assets/projects/2.avif'
    },
    {
      title: 'git-commit-gen',
      description: '一个自动生成符合提交信息的工具',
      link: 'https://github.com/HoshiSaneko/git-commit-gen',
      image: '/src/assets/projects/3.avif'
    },
  ],

} as ThemeUserConfig & {
  /** Social Networks configuration for About page */
  socialNetworks?: {
    description: string
    stats: Array<{
      platform: string
      icon: string
      link: string
      text: string
      api?: string
      color?: string
    }>
  },
  /** Website List type for homepage */
  websiteList?: {
    title: string
    description: string
    link: string
    image: string
  }[]
}

/** 平台配置映射 - 定义每个平台的默认属性 */
const platformConfig: Record<string, {
  platform: string
  icon: string
  color?: string
  linkTemplate: (id: string) => string // 根据 ID 生成完整链接
  apiTemplate: (id: string) => string | undefined
  text: string
  copyId?: boolean // 是否点击时复制 ID 而不是跳转
}> = {
  github: {
    platform: 'GitHub',
    icon: 'github',
    linkTemplate: (id) => `https://github.com/${id}`,
    apiTemplate: (id) => `github/${id}`,
    text: 'followers'
  },
  bilibili: {
    platform: 'Bilibili',
    icon: 'bilibili',
    color: '#FB7299',
    linkTemplate: (id) => `https://space.bilibili.com/${id}`,
    apiTemplate: (id) => `bilibili/${id}`,
    text: 'followers'
  },
  tiktok: { // 使用 tiktok 键名对应抖音
    platform: '抖音',
    icon: 'tiktok',
    color: '#000000',
    linkTemplate: (id) => `https://www.douyin.com/user/${id}`,
    apiTemplate: () => undefined, // 抖音 API 可能不支持
    text: 'followers',
    copyId: true // 点击时复制 ID
  }
}

/** Social Networks 配置 - 自动从 social IDs 生成配置 */
export const socialNetworks = {
  description: "Social media accounts as follow:",
  stats: (() => {
    // 从 social 配置中提取原始 ID（从 URL 中提取）
    const extractId = (url: string, type: 'github' | 'bilibili' | 'tiktok'): string | null => {
      if (type === 'github') {
        return url.replace('https://github.com/', '').split('/')[0] || null
      } else if (type === 'bilibili') {
        return url.match(/space\.bilibili\.com\/(\d+)/)?.[1] || null
      } else if (type === 'tiktok') {
        return url.match(/douyin\.com\/user\/(\d+)/)?.[1] || null
      }
      return null
    }

    const stats: Array<{
      platform: string
      icon: any
      color?: string
      link: string
      text: string
      api?: string
      copyId?: boolean // 是否点击时复制 ID
      id?: string // 存储原始 ID 用于复制
    }> = []

    // 从 theme.footer.social 中生成配置
    if (theme.footer.social) {
      // GitHub
      if (theme.footer.social.github) {
        const id = extractId(theme.footer.social.github, 'github')
        if (id) {
          stats.push({
            platform: platformConfig.github.platform,
            icon: platformConfig.github.icon as any,
            link: platformConfig.github.linkTemplate(id),
            text: platformConfig.github.text,
            api: platformConfig.github.apiTemplate(id)
          })
        }
      }

      // Bilibili
      if (theme.footer.social.bilibili) {
        const id = extractId(theme.footer.social.bilibili, 'bilibili')
        if (id) {
          stats.push({
            platform: platformConfig.bilibili.platform,
            icon: platformConfig.bilibili.icon as any,
            color: platformConfig.bilibili.color,
            link: platformConfig.bilibili.linkTemplate(id),
            text: platformConfig.bilibili.text,
            api: platformConfig.bilibili.apiTemplate(id)
          })
        }
      }

      // 抖音 (使用 tiktok 键名)
      if (theme.footer.social.tiktok) {
        const id = extractId(theme.footer.social.tiktok, 'tiktok')
        if (id) {
          stats.push({
            platform: platformConfig.tiktok.platform,
            icon: platformConfig.tiktok.icon as any,
            color: platformConfig.tiktok.color,
            link: platformConfig.tiktok.linkTemplate(id),
            text: platformConfig.tiktok.text,
            api: platformConfig.tiktok.apiTemplate(id),
            copyId: platformConfig.tiktok.copyId,
            id: id // 存储 ID 用于复制
          })
        }
      }
    }

    return stats
  })()
}

/** Gossips configuration for About page */
export const gossips = [
  {
    title: '最近在忙些什么...',
    content: [
      '最近疯狂在刷"下一个是谁"，真的觉得是B站上最棒的节目了！(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧'
    ]
  },
  {
    title: '一些有趣的想法...',
    content: [
      '想尝试开发一个"下一个是谁"的档案网站，把每个关卡的信息都整理出来～这样大家就可以更方便地查看关卡详情(｡◕‿◕｡)',
    ]
  }
]

/** Blog history timeline configuration for About page */
export const blogHistory = {
  title: 'Website history:',
  events: [
    {
      date: '2026-02-26',
      content: '发现了 <a href="https://github.com/cworld1/astro-theme-pure" target="_blank">Astro Theme Pure</a> 主题，第一反应就是：这就是我想要的！(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧'
    },
    {
      date: '2025-12-01',
      content: '受到一些启发，尝试通过 Gemini 设计自己的站点 <a href="https://github.com/HoshiSaneko/ATao-Blog" target="_blank">ATao-Blog</a>～虽然还在摸索阶段，但感觉还挺有意思的~'
    },
    {
      date: '2025-09-05',
      content: '改为使用纸鹿的 <a href="https://github.com/L33Z22L11/blog-v3" target="_blank">Clarity</a> 主题，尝试客制化了一些页面'
    },
    {
      date: '2024-05-12',
      content: '使用 <a href="https://github.com/anzhiyu-c/hexo-theme-anzhiyu" target="_blank">anzhiyu</a> 主题创建博客，第一次了解建站相关内容'
    }
  ],
  resources: {
    description: 'The smooth operation and personalized customization of website also rely on the resources and technical support provided by the following excellent projects/service providers:',
    items: [
      {
        label: 'Domain',
        content: '<a href="https://www.aliyun.com/" target="_blank">Aliyun</a>'
      },
      {
        label: 'Framework & Theme',
        content: '<a href="https://astro.build/" target="_blank">Astro</a> + <a href="https://github.com/cworld1/astro-theme-pure" target="_blank">Astro Theme Pure</a>'
      },
      {
        label: 'Hosting',
        content: '<a href="https://www.aliyun.com/product/ecs" target="_blank">Aliyun ECS</a>'
      },
      {
        label: 'CI/CD',
        content: '<a href="https://github.com/features/actions" target="_blank">GitHub Actions</a>'
      },
      {
        label: 'Comment',
        content: '<a href="https://waline.js.org" target="_blank">Waline</a>'
      },
      {
        label: 'Visits',
        content: '<a href="https://supabase.com/" target="_blank">Supabase</a> + <a href="https://waline.js.org/" target="_blank">Waline</a>'
      },
      {
        label: 'Statistics',
        content: '<a href="https://github.com/spencerwooo/substats" target="_blank">Substats</a>'
      }
    ]
  }
}

/** Devices configuration for About page */
export const devices = [
  {
    name: 'iPhone 15 Pro',
    description: 'Primary Device',
    href: 'https://www.apple.com/iphone-15-pro/',
    icon: '@/assets/tools/phone.svg?raw'
  },
  {
    name: 'iPad Air 5',
    description: 'Tablet',
    href: 'https://www.apple.com/ipad-air/',
    icon: '@/assets/tools/tablet.svg?raw'
  },
  {
    name: 'HUAWEI MateBook 14',
    description: 'Laptop',
    href: 'https://consumer.huawei.com/cn/laptops/matebook-14/',
    icon: '@/assets/tools/laptop.svg?raw'
  },
  {
    name: 'AirPods',
    description: 'Wireless Earbuds',
    href: 'https://www.apple.com/airpods/',
    icon: '@/assets/tools/airpods.svg?raw'
  },
  {
    name: 'HUAWEI Sound X4',
    description: 'Smart Speaker',
    href: 'https://consumer.huawei.com/cn/audio/sound-x/',
    icon: '@/assets/tools/speaker.svg?raw'
  },
  {
    name: 'ILCE-6400L',
    description: 'Sony Alpha 6400 Camera',
    href: 'https://www.sony.com/electronics/interchangeable-lens-cameras/ilce-6400',
    icon: '@/assets/tools/camera.svg?raw'
  },
  {
    name: 'Tamron 17-70mm F/2.8',
    description: 'Camera Lens',
    href: 'https://www.tamron.com/global/consumer/products/lenses/b070.html',
    icon: '@/assets/tools/lens.svg?raw'
  }
]

/** Tools configuration for About page */
export const tools = [
    {
      title: 'Design',
      items: [
        {
          name: 'Photoshop',
          description: 'Picture Editing',
          href: 'https://www.adobe.com/products/photoshop',
          icon: '@/assets/tools/photoshop.svg?raw' // 可选，如果为空则显示文字
        },
        {
          name: 'Premiere Pro',
          description: 'Video Editing',
          href: 'https://www.adobe.com/products/premiere',
          icon: '@/assets/tools/premiere.svg?raw'
        },
        {
          name: 'Figma',
          description: 'Design Tool',
          href: 'https://www.figma.com/',
          icon: '@/assets/tools/figma.svg?raw'
        }
      ]
    },
    {
      title: 'Productivity',
      items: [
        {
          name: 'Chrome',
          description: 'Browser',
          href: 'https://www.google.com/chrome/',
          icon: '@/assets/tools/chrome.svg?raw'
        },
        {
          name: 'Typora',
          description: 'Markdown Editor',
          href: 'https://typora.io/',
          icon: '@/assets/tools/typora.svg?raw'
        },
        {
          name: 'Sourcetree',
          description: 'Git Client',
          href: 'https://www.sourcetreeapp.com/',
          icon: '@/assets/tools/sourcetree.svg?raw'
        }
      ]
    },
    {
      title: 'Development',
      items: [
        {
          name: 'VS Code',
          description: 'IDE',
          href: 'https://code.visualstudio.com/',
          icon: '@/assets/tools/vscode.svg?raw'
        },
        {
          name: 'Visual Studio',
          description: 'IDE',
          href: 'https://visualstudio.microsoft.com/',
          icon: '@/assets/tools/visualstudio.svg?raw'
        },
        {
          name: 'Android Studio',
          description: 'IDE',
          href: 'https://developer.android.com/studio?hl=zh-cn',
          icon: '@/assets/tools/androidstudio.svg?raw'
        },
        {
          name: 'Docker',
          description: 'Container Platform',
          href: 'https://www.docker.com/',
          icon: '@/assets/tools/docker.svg?raw'
        },
        {
          name: 'Cursor',
          description: 'AI Code Editor',
          href: 'https://cursor.com/',
          icon: '@/assets/tools/cursor.svg?raw'
        }
      ]
    },
    {
      title: 'Environment',
      items: [
        {
          name: 'Windows 11',
          description: 'Framework Laptop 16',
          href: 'https://news.microsoft.com/windows11-general-availability/',
          icon: '@/assets/tools/windows11.svg?raw'
        },
        {
          name: 'Ubuntu 24.04 LTS',
          description: 'Linux Distribution',
          href: 'https://ubuntu.com/',
          icon: '@/assets/tools/ubuntu.svg?raw'
        }
      ]
    }
  ]

export const integ: IntegrationUserConfig = {
  // [Links]
  // https://astro-pure.js.org/docs/integrations/links
  links: {
    // Friend logbook
    logbook: [
      { date: '2025-03-16', content: 'Is there a leakage?' },
      { date: '2025-03-16', content: 'A leakage of what?' },
      { date: '2025-03-16', content: 'I have a full seat of water, like, full of water!' },
      { date: '2025-03-16', content: 'Must be the water.' },
      { date: '2025-03-16', content: "Let's add that to the words of wisdom." }
    ],
    // Yourself link info
    applyTip: [
      { name: '名称', val: theme.author }, 
      { name: '简介', val: 'Do the things that I like.'}, 
      { name: '链接', val: 'https://saneko.me' }, 
      { name: '头像', val: 'https://cdn.blog.saneko.me/Web/Avatar.png' }
    ],
    // Cache avatars in `public/avatars/` to improve user experience.
    cacheAvatar: false
  },
  // [Search]
  pagefind: true,
  // Add a random quote to the footer (default on homepage footer)
  // See: https://astro-pure.js.org/docs/integrations/advanced#web-content-render
  // [Quote]
  quote: {
    // - Hitokoto
    // https://developer.hitokoto.cn/sentence/#%E8%AF%B7%E6%B1%82%E5%9C%B0%E5%9D%80
    // server: 'https://v1.hitokoto.cn/?c=i',
    // target: `(data) => (data.hitokoto || 'Error')`
    // - Quoteable
    // https://github.com/lukePeavey/quotable
    // server: 'http://api.quotable.io/quotes/random?maxLength=60',
    // target: `(data) => data[0].content || 'Error'`
    // - DummyJSON
    server: 'https://v1.hitokoto.cn/?c=f', // c=f是影视类，更贴合治愈系中文文案
    target: `(data) => (data.hitokoto.length > 80 ? \`\${data.hitokoto.slice(0, 80)}...\` : data.hitokoto || '星光小岛，浅海潮汐✨')`
  },
  // [Typography]
  // https://unocss.dev/presets/typography
  typography: {
    class: 'prose text-base',
    // The style of blockquote font `normal` / `italic` (default to italic in typography)
    blockquoteStyle: 'normal',
    // The style of inline code block `code` / `modern` (default to code in typography)
    inlineCodeBlockStyle: 'modern'
  },
  // [Lightbox]
  // A lightbox library that can add zoom effect
  // https://astro-pure.js.org/docs/integrations/others#medium-zoom
  mediumZoom: {
    enable: true, // disable it will not load the whole library
    selector: '.prose .zoomable, .wechat-chat .zoomable',
    options: {
      className: 'zoomable'
    }
  },
  // Comment system
  waline: {
    enable: true,
    // Server service link
    server: 'https://waline.saneko.me',
    // Show meta info for comments
    showMeta: false,
    // Refer https://waline.js.org/en/guide/features/emoji.html
    emoji: ['bmoji', 'weibo', 'bilibili', 'qq', 'tw-emoji'],
    // Refer https://waline.js.org/en/reference/client/props.html
    additionalConfigs: {
      // search: false,
      pageview: true,
      comment: true,
      locale: {
        reaction0: 'Like',
        placeholder: 'Welcome to comment. (Email to receive replies. Login is unnecessary)'
      },
      imageUploader: false
    }
  }
}

export const terms: CardListData = {
  title: 'Terms content',
  list: [
    {
      title: 'Privacy Policy',
      link: '/terms/privacy-policy'
    },
    {
      title: 'Terms and Conditions',
      link: '/terms/terms-and-conditions'
    },
    {
      title: 'Copyright',
      link: '/terms/copyright'
    },
    {
      title: 'Disclaimer',
      link: '/terms/disclaimer'
    }
  ]
}

const config = { ...theme, integ } as Config
export default config
