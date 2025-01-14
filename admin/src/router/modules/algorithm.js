/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const algorithmRouter = {
  path: '/algorithm',
  component: Layout,
  redirect: '/user/list',
  name: 'AlgorithmHome',
  meta: {
    title: 'algorithm',
    icon: 'component',
  },
  children: [
    {
      path: 'log',
      component: () => import('@/views/home/about/list'),
      name: 'AlgorithmLog',
      meta: { title: 'algorithmLog', affix: true },
    },
    // 异常行为
    {
      path: 'list',
      component: () => import('@/views/product/list'),
      name: 'AlgorithmBehavior',
      meta: { title: 'algorithmBehavior', affix: true },
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
      name: 'AlgorithmCreate',
      breadcrumb: false,
      meta: { title: 'homeAboutCreate', noCache: true },
    },
    {
      path: 'about/update',
      component: () => import('@/views/home/about/update'),
      hidden: true,
      name: 'AlgorithmUpdate',
      breadcrumb: false,
      meta: { title: 'homeAboutUpdate', noCache: true },
    },
  ],
}
export default algorithmRouter
