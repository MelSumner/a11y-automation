---
title: Automated Tools
editLink: true
lastUpdated: true
sidebar: false
aside: false
---

<script setup>
import { ref, computed } from 'vue'

const pages = import.meta.glob('./*.md', { eager: true })

const rawTools = Object.entries(pages)
  .filter(([path]) => path !== './index.md')
  .map(([path, page]) => {
    const fm = page.__pageData?.frontmatter || {}
    return {
      title: fm.title || 'No title',
      description: fm.description || 'No description',
      link: fm.link || 'No link',
      category: fm.category || 'No category',
    }
  })
</script>

# {{ $frontmatter.title }}

<div class="automated-tools-container">
  <div class="cards-container">
    <article>
      <p>These are some of the automated tools available, no endorsement implied. If you know of one that exists but is not listed here, please <a href="https://github.com/MelSumner/a11y-automation/issues/new" rel="external">file an issue</a> and let us know!</p>
      <ul role="list" class="cards">
        <li v-for="tool in rawTools" :key="tool.title" class="card">
          <div class="card-content">
            <a :href="tool.link" class="card-link">{{ tool.title }}</a>
            <p class="card-description">{{ tool.description }}</p>
          </div>
          <div class="card-footer">
            <Badge type="tip" :text="tool.category" />
          </div>
        </li>
      </ul>
    </article>
  </div>
</div>
