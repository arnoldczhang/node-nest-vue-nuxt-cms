/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const waterRouter = {
  path: '/water',
  component: Layout,
  redirect: '/user/list',
  name: 'waterHome',
  meta: {
    title: 'water',
    icon: 'component',
  },
  children: [
    {
      path: 'log',
      component: () => import('@/views/home/about/list'),
      name: 'waterLog',
      meta: { title: 'waterLog', affix: true },
    },
    {
      path: 'list',
      component: () => import('@/views/product/category/list'),
      name: 'waterBehavior',
      meta: { title: 'waterBehavior', affix: true },
    },
    // {
    //   path: 'banner/list',
    //   component: () => import('@/views/home/banner/list'),
    //   name: 'BannerManagement',
    //   meta: { title: 'bannerManagement', noCache: true },
    // },
    // {
    //   path: 'about/list',
    //   component: () => import('@/views/home/about/list'),
    //   name: 'AboutManagement',
    //   meta: { title: 'aboutManagement', noCache: true },
    // },
    // {
    //   path: 'banner/create',
    //   hidden: true,
    //   component: () => import('@/views/home/banner/create'),
    //   name: 'BannerCreate',
    //   breadcrumb: false,
    //   meta: { title: 'bannerCreate', noCache: true },
    // },
    // {
    //   path: 'banner/update',
    //   component: () => import('@/views/home/banner/update'),
    //   hidden: true,
    //   name: 'BannerUpdate',
    //   breadcrumb: false,
    //   meta: { title: 'bannerUpdate', noCache: true },
    // },
    {
      path: 'about/create',
      hidden: true,
      component: () => import('@/views/home/about/create'),
      name: 'waterCreate',
      breadcrumb: false,
      meta: { title: 'homeAboutCreate', noCache: true },
    },
    {
      path: 'about/update',
      component: () => import('@/views/home/about/update'),
      hidden: true,
      name: 'waterUpdate',
      breadcrumb: false,
      meta: { title: 'homeAboutUpdate', noCache: true },
    },
  ],
}
export default waterRouter
