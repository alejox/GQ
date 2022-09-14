import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'App',
    component: () => import('@/layouts/App.vue'),
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/Index'),
      },
      {
        path: 'setting',
        name: 'Setting',
        component: () => import('@/views/setting/Index'),
      },
      {
        path: 'purchase',
        name: 'Purchase',
        component: () => import('@/views/purchase/Index'),
      },
      {
        path: 'staking',
        name: 'Staking',
        component: () => import('@/views/staking/Index'),
      },
      {
        path: 'staking/create',
        name: 'Create-Staking',
        component: () => import('@/views/staking/create/Index'),
      },
      {
        path: 'calculator',
        name: 'Calculator',
        component: () => import('@/views/calculator/Index'),
      },
      {
        path: 'academy',
        name: 'Academy',
        component: () => import('@/views/academy/Index'),
      },
      {
        path: 'academy/:id/view/:name',
        name: 'View-Course',
        component: () => import('@/views/academy/view/Index'),
        props: true
      },
      {
        path: 'academy/:id/take/:name',
        name: 'Take-Course',
        component: () => import('@/views/academy/take/Index'),
        props: true
      },
      {
        path: 'streaming',
        name: 'Streaming',
        component: () => import('@/views/streaming/Index')
      },
      {
        path: 'swap',
        name: 'Swap',
        component: () => import('@/views/swap/Index'),
      },
      {
        path: 'team/:username',
        name: 'Team',
        component: () => import('@/views/team/Index'),
        props: true
      },
      {
        path: 'packages',
        name: 'Packages',
        component: () => import('@/views/membership/Index'),
      },
      {
        path: 'signals',
        name: 'Signal',
        component: () => import('@/views/signal/Index'),
      },
      {
        path: 'wallet',
        name: 'Wallet',
        component: () => import('@/views/wallet/Index'),
      },
      {
        path: 'comissions',
        name: 'Comissions',
        component: () => import('@/views/transactions/Index'),
      },
      {
        path: 'purchase/:id/payment',
        name: 'Cart',
        component: () => import('@/views/cart/Index'),
        props: true
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('@/views/profile/Index'),
      },
      
      {
        path: 'privacy',
        name: 'Privacy',
        component: () => import('@/views/pages/Privacy'),
      },
      {
        path: 'terms',
        name: 'Terms',
        component: () => import('@/views/pages/Terms'),
      },
      {
        path: 'fees',
        name: 'Fees',
        component: () => import('@/views/pages/Fees'),
      },
      {
        path: 'information',
        name: 'Information',
        component: () => import('@/views/pages/Information'),
      },
      {
        path: 'support',
        name: 'Support',
        component: () => import('@/views/pages/Support'),
      },
    ]
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/layouts/Auth.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/auth/QrCode'),
      },
      {
        path: 'signin',
        name: 'Signin',
        component: () => import('@/views/auth/Signin'),
      },
      {
        path: 'signup/:username?',
        name: 'Signup',
        component: () => import('@/views/auth/Signup'),
        props: true
      },
      {
        path: 'recover-password',
        name: 'RecoverPassword',
        component: () => import('@/views/auth/RecoverPassword'),
      },
      {
        path: 'recover/:id/:hash',
        name: 'RestorePassword',
        component: () => import('@/views/auth/RestorePassword'),
        props: true
      },
      {
        path: 'validation',
        name: 'Validation',
        component: () => import('@/views/auth/Validation')
      }
    ]
  },
  {
    path: '/manage',
    name: 'Manage',
    component: () => import('@/layouts/App.vue'),
    children: [
      {
        path: '',
        name: 'Manage-Dashboard',
        component: () => import('@/views/dashboard/Index'),
      },
      {
        path: 'membership',
        name: 'Manage-Membership',
        component: () => import('@/views/manage/membership/Index'),
      },
      {
        path: 'academy',
        name: 'Manage-Academy',
        component: () => import('@/views/manage/academy/Index'),
      },
      {
        path: 'academy/sections/:id/:name',
        name: 'Manage-Course',
        component: () => import('@/views/manage/academy/manage/Index'),
        props: true
      },
      {
        path: 'comissions',
        name: 'Manage-Comissions',
        component: () => import('@/views/manage/comissions/Index'),
      },
      {
        path: 'staking',
        name: 'Manage-Staking',
        component: () => import('@/views/manage/staking/Index'),
      },
      {
        path: 'swap',
        name: 'Manage-Swap',
        component: () => import('@/views/manage/swap/Index'),
      },
      {
        path: 'signals',
        name: 'Manage-Signal',
        component: () => import('@/views/manage/signal/Index'),
      },
      {
        path: 'transactions',
        name: 'Manage-Transactions',
        component: () => import('@/views/transactions/Index'),
      },
      {
        path: 'users',
        name: 'Manage-Users',
        component: () => import('@/views/manage/users/Index'),
      },
      {
        path: 'purchases',
        name: 'Manage-Purchases',
        component: () => import('@/views/manage/purchases/Index'),
      },
    ]
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = store.state.auth.user

  const publicPages = ['Signin', 'RecoverPassword', 'Signup', 'RestorePassword', 'Home']

  const authRequired = !publicPages.includes(to.name)

  if (authRequired && loggedIn === null) {
    next({
      path: '/auth/signin',
      replace: true
    })
  } else {
    next()
  }
})

export default router
