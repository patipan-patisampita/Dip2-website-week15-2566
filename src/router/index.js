import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: 'หน้าแรก' },
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      meta: { title: 'ลงทะเบียน' },
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      meta: { title: 'เข้าสู่ระบบ' },
      component: () => import('../views/SignIn.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: { title: 'เกี่ยวกับเรา' },
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // document.title = to.meta?.title ?? 'น้อยน่า'
  const titleFromParams = to.params.pageTitle
  if (titleFromParams !== null) {
    document.title = ` ${to.home} | ${to.meta?.title} | ${to.params?.pageTitle} `
  } else {
    document.title = to.meta?.title
  }
  next()
})
export default router
