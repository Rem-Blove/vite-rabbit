const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/Layout/index.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/Layout/Home/index.vue')
      },
      {
        path: 'category/:id',
        name: 'category',
        component: () => import('@/views/Layout/Category/index.vue')
      },
      {
        path: 'category/sub/:id',
        name: 'subcategory',
        component: () => import('@/views/Layout/SubCategory/index.vue')
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('@/views/Detail/index.vue')
      },
      {
        path: '/cartlist',
        name: 'cartlist',
        component: () => import('@/views/cart/index.vue')
      },
      {
        path: '/checkout',
        name: 'checkout',
        component: () => import('@/views/Checkout/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue')
  },

  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue')
  }
]

export default routes
