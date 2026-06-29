import type { CardListData, Config, IntegrationUserConfig, ThemeUserConfig } from 'astro-pure/types'

export const theme: ThemeUserConfig = {
  // [Basic]
  /** Title for your website. Will be used in metadata and as browser tab title. */
  title: 'He-TWのCiallo～(∠・ω< )⌒★',
  /** Will be used in index page & copyright declaration */
  author: 'He-TW',
  /** Description metadata for your website. Can be used in page metadata. */
  description: '淡看云烟随风去,笑拥晨光自怡然。',
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
    email: 'lunarhackerbgg@gmail.com',
    website: 'https://astro.hetw24.dpdns.org', 
    region: 'Taiwan' 
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
    location: 'ChangShu'
  },

  /** Configure the footer of your site. */
  footer: {
    // Year format
    year: `© ${new Date().getFullYear()}`,
    // ICP 备案信息（可选），显示在版权行
    icp: {
      title: '萌ICP备0721号',
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
        github: 'hetw24', // GitHub 用户名
        bilibili: '3494365613787593', // Bilibili UID
        tiktok: '1559608755',
        email: 'lunarhackerbgg@gmail.com' // 邮箱账号
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
      intro: 'Information Technology Engineer',
      bio: '生死皆为旅途，当蝴蝶停落枝头，那凋零的又将新生。',
      motto: '淡看云烟随风去,笑拥晨光自怡然。',
      spoiler: '累了就歇歇吧，摸会儿鱼没关系的～',
      mbti: 'INFP',
      hobbies: [
        'Watching sunset',
        'Listening to lofi',
        'Enjoying coffee on a quiet afternoon',
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
      title: '实验中学',
      date: 'Sep 2020 - Jun 2023',
      image: '/src/assets/educations/1.avif'
    },
    {
      title: '海虞高级中学',
      date: 'Sep 2023 - Jun 2026',
      image: '/src/assets/educations/海虞.avif'
    }
  ],

  /** Certifications configuration */
  /* certifications: [
    {
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, vidit suscipit at mei.',
      date: 'July 2024',
      link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }
  ], */

  /** Website List configuration for homepage */
  /* websiteList: [
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
  ], */

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
      '学习Codex ing...(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧'
    ]
  }
] 

/** Blog history timeline configuration for About page */
export const blogHistory = {
  title: 'About Me:',
  events: [
    {
      date: '2026-06-09',
      content: '高考终于结束了(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧'
    },
    {
      date: '2024-07-17',
      content: '初步接触建站'
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
    name: 'iPhone 17',
    description: 'Primary Device',
    href: 'https://www.apple.com/iphone',
    icon: '@/assets/tools/phone.svg?raw'
  },
  {
    name: 'iPad Mini 5',
    description: 'Tablet',
    href: 'https://www.apple.com/ipad-mini/',
    icon: '@/assets/tools/tablet.svg?raw'
  },
  {
    name: 'Victus 8',
    description: 'Laptop',
    href: 'https://www.hp.com/cn-zh/gaming-pc/laptops.html',
    icon: '@/assets/tools/laptop.svg?raw'
  },
  {
    name: 'Edifer W820NB',
    description: 'Wireless Earbuds',
    href: 'https://www.edifier.com/cn/product/product-432.html',
    icon: '@/assets/tools/airpods.svg?raw'
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
      { name: '简介', val: '淡看云烟随风去,笑拥晨光自怡然。'}, 
      { name: '链接', val: 'https://astro.hetw24.dpdns.org' }, 
      { name: '头像', val: 'https://g.blfrp.cn/https://github.com/hetw24/imagebed/blob/main/Avatar/wechat%20icon.png' }
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
    enable: false,
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
