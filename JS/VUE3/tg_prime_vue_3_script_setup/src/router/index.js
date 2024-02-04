import { createRouter, createWebHistory } from 'vue-router'
import indexPage from "@/views/indexPage/IndexPage.vue";

const routes = [
  {
    path: '/',
    name: 'indexPage',
    component: indexPage
  },
  {
    path: '/personalCabinet',
    name: 'personalCabinet',
    component: () => import(/* webpackChunkName: "PersonalCabinet" */ '../views/personalCabinet/PersonalCabinet.vue')
  },
  {
    path: "/adminpanel/accounts",
    name: 'adminPanelAccounts',
    component: () => import(/* webpackChunkName: "AdminPanelAccounts" */ '../views/adminPanel/AdminPanelAccounts.vue')
  },
  {
    path: "/adminpanel/account",
    name: 'adminPanelAccount',
    component: () => import(/* webpackChunkName: "AdminPanelAccount" */ '../views/adminPanel/AdminPanelAccount.vue')
  },
  {
    path: "/adminpanel/stats",
    name: 'adminPanelStats',
    component: () => import(/* webpackChunkName: "AdminPanelStats" */ '../views/adminPanel/AdminPanelStats.vue')
  },
  {
    path: "/adminpanel/messages",
    name: 'adminPanelMessages',
    component: () => import(/* webpackChunkName: "AdminPanelMessages" */ '../views/adminPanel/AdminPanelMessages.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
