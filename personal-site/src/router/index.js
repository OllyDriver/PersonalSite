import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/content/Home/HomePage'
import About from '@/components/content/About/AboutPage'
import Projects from '@/components/content/Projects/ProjectPage'

export const router = new createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        pagetitle: 'Home'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        pagetitle: 'About'
      }
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
      meta: {
        pagetitle: 'Projects'
      }
    },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})

router.beforeEach((to) => {
  let pagetitle = getPagetitle(to)
  document.title = pagetitle
})

const getPagetitle = (to) => {
  let pagetitle = to.meta.pagetitle || 'Olly Driver'
  return pagetitle
}
