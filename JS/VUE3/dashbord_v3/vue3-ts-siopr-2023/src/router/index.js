import { createRouter, createWebHistory } from 'vue-router'
import TestView from "@/views/TestView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }





    {
      path: "/dashboard/normirovanie/",
      name: "normirovanie",
      component: TestView,
      props: true
    },
    {
      path: "/dashboard/testreport/",
      name: "testreport",
      component: TestView,
      props: true
    },
    {
      path: "/dashboard/workflowdiagramcreator/",
      name: 'workflowDiagramCreator',
      component: TestView,
      props: true
    },
    {
      path: "/dashboard/workflowdiagram/:id",
      name: 'workflowDiagram',
      component: TestView,
      props: true
    },
    {
      path: "/dashboard/workflow/:id",
      name: 'workflow',
      component: TestView,
      props: true
    },
    {
      path: "/dashboard/table/:id",
      name: 'table',
      component: TestView,
      props: true
    },

      // for matching
    {
      path: "/dashboard/table/:id",
      name: 'map',
      component: TestView,
      props: true
    },

    {
      path: "/dashboard/document/:id",
      name: 'document',
      component: TestView,
      props: true
    },
    {
      path: "/dashboard/report/:id",
      name: 'report',
      component: TestView,
    },
    {
      path: "/dashboard/",
      name: 'dashboard',
      component: TestView
    },
    {
      path: "/dashboard/main/:id",
      name: 'report',
      component: TestView
    },
    {
      path: "/dashboard/test/",
      name: 'test',
      component: TestView
    },
    {
      path: "/dashboard/admin/",
      name: 'admin',
      component: TestView
    },
    {
      path: "/dashboard/adminbp/",
      name: 'adminbp',
      component: TestView
    },
    {
      path: "/dashboard/useradmin",
      name: 'useradmin',
      component: TestView,
    },
    {
      path: "/dashboard/userfilter/",
      name: 'userfilter',
      component: TestView
    },
    {
      path: "/dashboard/admindocument/",
      name: 'admindocument',
      component: TestView
    }
  ]
})

export default router