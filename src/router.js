import Vue from 'vue'
import Router from 'vue-router'
// import login from './views/login/login.vue'
// import register from './views/register/register.vue'
import dashboard from '@/views/dashboard/dashboard.vue'
import NotFoundComponent from '@/views/404/404.vue'

import feature from '@/components/dashboard/feature/feature.vue'
import upload from '@/components/dashboard/upload/upload.vue'
import editor from '@/components/dashboard/editor/editor.vue'

import resize from '@/components/dashboard/editor/resize/resize.vue'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: login
    // },
    // {
    //   path: '/register',
    //   name: 'register',
    //   component: register
    // },
    {
      path: '/dashboard',
      component: dashboard,
      children: [
        {
          path: '/',
          redirect: 'feature'
        },
        {
          path: 'feature',
          name: 'feature',
          component: feature
        },
        {
          path: 'upload',
          name: 'upload',
          component: upload
        },
        {
          path: 'editor',
          name: 'editor',
          component: editor,
          children: [
            {
              path: 'resize',
              name: 'resize',
              component: resize
            }
          ]
        },
      ]
    },
    {
      path: '*',
      component: NotFoundComponent
    }
  ]
})

// function hasQueryParams(route) {
//   return !!Object.keys(route.query).length;
// }

// router.beforeEach((to, from, next) => {
//   // if (to.name != 'login' && to.name != 'register') {
//   //   if (!localStorage.getItem('Authorization') || localStorage.getItem('Authorization') === 'undefined') {
//   //     next({name: 'dashboard'});
//   //   }
//   // }
//   // if (to.name != 'dashboard') {
//   //   clearInterval();
//   // }
//   if (!hasQueryParams(to) && hasQueryParams(from)) {
//     next({ name: to.name, query: from.query });
//   } else {
//     next();
//   }
// });

export default router
