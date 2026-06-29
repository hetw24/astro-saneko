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
    name: 'cover-gen',
    description: '智能博客封面生成器',
    links: [
      { type: 'github', href: 'https://github.com/afoim/easy_cover' },
    ]
  },
]

/** Learnings 区块 */
export const learnings: ProjectItem[] = [
  {
    name: '哪吒面板',
    description: 'Hugging Face部署哪吒面板v1（自动备份）',
    links: [
      { type: 'github', href: 'https://github.com/oyz8/nz' },
    ]
  },
]

/** Some old projects 区块（折叠里显示的老项目） */
 export const oldProjects: ProjectItem[] = [
]

/** Others 区块 */
export const others: ProjectItem[] = [
]

