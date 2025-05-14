import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

// Helper to auto-generate sidebar for /violations/
function getViolationSidebar() {
  if (typeof process === 'undefined' || typeof fs === 'undefined') {
    return []
  }

  const violationsDir = path.resolve(__dirname, '../violations')
  if (!fs.existsSync(violationsDir)) return []

  const files = fs.readdirSync(violationsDir)

  return files
    .filter(file => file.endsWith('.md') && file !== 'index.md')
    .map(file => {
      const name = file.replace(/\.md$/, '')
      return {
        text: formatTitle(name),
        link: `/violations/${name}`
      }
    })
    .sort((a, b) => a.text.localeCompare(b.text))
}


// Optional: format slugs into more readable titles
function formatTitle(slug) {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase()) // Capitalize first letter of each word
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: '.',
  title: "A11y Automation",
  description: "Tracking available automation",
  markdown: {
    vueEnabled: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { 
      src: '/a-logo.svg',
      alt: 'A11y Automation Tracker'
    },
    siteTitle: false,
    editLink: {
      pattern: 'https://github.com/melsumner/a11y-automation/edit/main/:path',
      text: 'Edit this page on GitHub'
    },
    lastUpdated: true,
    nav: [
      { text: 'Potential Violations', link: '/violations/' },
      { text: 'Automated Tools', link: '/automated-tools/'}
    ],

    sidebar: {
      '/violations/': [
        {
          text: 'Potential Violations',
          items: getViolationSidebar()
        }
      ]
    },
    footer: {
      message: 'Created with ❤️ and ☕️ by Melanie Sumner. Hosted by Netlify.',
      'aria-label': 'site information'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/melsumner/a11y-automation' }
    ]
  }
})
