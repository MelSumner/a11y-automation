---
title: Potential Accessibility Violations
sidebar: false
aside: false
prev: false
next: false
footer: true
---

<script setup>
import { ref, computed } from 'vue'
import SearchInput from '../components/SearchInput.vue'

const sortKey = ref('title')
const sortDirection = ref('asc')
const searchQuery = ref('')

const pages = import.meta.glob('./*.md', { eager: true })

const normalize = (value) => {
  const v = (value || '').toLowerCase()
  if (v === 'exists') return 'Exists'
  if (v === 'couldexist') return 'Could Exist'
  if (v === 'cannotexist') return 'Cannot Exist'
  if (v === 'shouldexist') return 'Should Exist'
  if (v === 'mustexist') return 'Must Exist'
  return '—'
}

const normalizeClass = (value) => {
  return (value || '').toLowerCase().replace(/\s+/g, '')
}

const rawViolations = Object.entries(pages)
  .filter(([path]) => path !== './index.md')
  .map(([path, page]) => {
    const fm = page.__pageData?.frontmatter || {}
    return {
      title: fm.title || 'No title',
      path: path.replace('./', '/violations/').replace(/\.md$/, ''),
      linting: normalize(fm.linting),
      testing: normalize(fm.testing),
      author: normalize(fm.author),
      manual: normalize(fm.manual),
    }
  })

const filteredViolations = computed(() => {
  return rawViolations.filter(v =>
    v.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const sortedViolations = computed(() => {
  return [...filteredViolations.value].sort((a, b) => {
    const dir = sortDirection.value === 'asc' ? 1 : -1
    return a[sortKey.value].localeCompare(b[sortKey.value]) * dir
  })
})

function toggleSort(key) {
  if (sortKey.value === key) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortDirection.value = 'asc'
  }
}
</script>

# {{ $frontmatter.title }}

<SearchInput v-model="searchQuery" />

<div class="table-container">
  <table class="table-violations">
    <thead>
      <tr>
        <th>
          <button
            class="button-sort"
            @click="toggleSort('title')"
            :aria-description="sortKey === 'title' ? `Sorted by title in ${sortDirection} order` : 'Sort by title'"
          >
            Title
            <span aria-hidden="true">
              {{ sortKey === 'title' ? (sortDirection === 'asc' ? ' ▲' : ' ▼') : ' ⇅' }}
            </span>
          </button>
        </th>
        <th>
          <button
            class="button-sort"
            @click="toggleSort('linting')"
            :aria-description="sortKey === 'linting' ? `Sorted by linting in ${sortDirection} order` : 'Sort by linting'"
          >
            Linting
            <span aria-hidden="true">
              {{ sortKey === 'linting' ? (sortDirection === 'asc' ? ' ▲' : ' ▼') : ' ⇅' }}
            </span>
          </button>
        </th>
        <th>
          <button
            class="button-sort"
            @click="toggleSort('testing')"
            :aria-description="sortKey === 'testing' ? `Sorted by testing in ${sortDirection} order` : 'Sort by testing'"
          >
            Testing
            <span aria-hidden="true">
              {{ sortKey === 'testing' ? (sortDirection === 'asc' ? ' ▲' : ' ▼') : ' ⇅' }}
            </span>
          </button>
        </th>
        <th>
          <button
            class="button-sort"
            @click="toggleSort('author')"
            :aria-description="sortKey === 'author' ? `Sorted by author in ${sortDirection} order` : 'Sort by author'"
          >
            Author
            <span aria-hidden="true">
              {{ sortKey === 'author' ? (sortDirection === 'asc' ? ' ▲' : ' ▼') : ' ⇅' }}
            </span>
          </button>
        </th>
        <th>
          <button
            class="button-sort"
            @click="toggleSort('manual')"
            :aria-description="sortKey === 'manual' ? `Sorted by manual in ${sortDirection} order` : 'Sort by manual'"
          >
            Manual
            <span aria-hidden="true">
              {{ sortKey === 'manual' ? (sortDirection === 'asc' ? ' ▲' : ' ▼') : ' ⇅' }}
            </span>
          </button>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="violation in sortedViolations" :key="violation.path">
        <td><a :href="violation.path">{{ violation.title }}</a></td>
        <td>
          <span :class="['badge', normalizeClass(violation.linting)]">{{ violation.linting }}</span>
        </td>
        <td>
          <span :class="['badge', normalizeClass(violation.testing)]">{{ violation.testing }}</span>
        </td>
        <td>
          <span :class="['badge', normalizeClass(violation.author)]">{{ violation.author }}</span>
        </td>
        <td>
          <span :class="['badge', normalizeClass(violation.manual)]">{{ violation.manual }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
