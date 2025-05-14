<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'

// Dynamic import of all tags
const tagModules = import.meta.glob('/tags/*.md', { eager: true })

const { frontmatter } = useData()

// Match the tags from frontmatter to the imported tag files
const resolvedTags = computed(() => {
  if (!frontmatter.value.tags || !Array.isArray(frontmatter.value.tags)) return []
  
  return frontmatter.value.tags
    .map(tag => {
      const path = `/tags/${tag}.md`
      return tagModules[path]
    })
    .filter(Boolean) // Filter out any unmatched tags
})
</script>

<template>
  <div v-if="resolvedTags.length">
    <h2 id="title-references">References</h2>
    <ul aria-labelledby="title-references">
      <li v-for="tag in resolvedTags" :key="tag.__pageData.frontmatter.title">
        <a :href="tag.__pageData.frontmatter.url" rel="external">
          {{ tag.__pageData.title }}
          <template v-if="tag.__pageData.frontmatter.level"> ({{ tag.__pageData.frontmatter.level }})</template>
        </a>
      </li>
    </ul>
  </div>
</template>