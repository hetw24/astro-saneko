import { type CollectionEntry } from 'astro:content'

export const docCategories: Record<string, string> = {
  setup: '安装与配置',
  integrations: '主题文档',
  advanced: '进阶',
  'custom-components': '自定义组件',
  guides: '使用指南'
}

export function groupDocsByCategory(docsCollection: CollectionEntry<'docs'>[]) {
  return docsCollection.reduce((acc: Record<string, CollectionEntry<'docs'>[]>, doc) => {
    const id = doc.id.split('/')[0]
    if (!acc[id]) acc[id] = []
    acc[id].push(doc)
    return acc
  }, {})
}

export function sortDocsByOrder(docsCollection: CollectionEntry<'docs'>[]) {
  return [...docsCollection].sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0))
}

export function getFirstDocId(docsCollection: CollectionEntry<'docs'>[]) {
  const docsByCate = groupDocsByCategory(docsCollection)
  for (const id of Object.keys(docCategories)) {
    const docs = docsByCate[id]
    if (docs?.length) return sortDocsByOrder(docs)[0].id
  }
  return sortDocsByOrder(docsCollection)[0]?.id
}
