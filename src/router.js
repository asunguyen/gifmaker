import Vue from "vue";
import Router from "vue-router";
import login from "./views/login/login.vue";
import register from "./views/register/register.vue";
import dashboard from "./views/dashboard/dashboard.vue";
Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: "/",
      component: dashboard
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: dashboard
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/register",
      name: "register",
      component: register
    }
  ]
});

function hasQueryParams(route) {
  return !!Object.keys(route.query).length;
}

router.beforeEach((to, from, next) => {
  // if (to.name != "login" && to.name != "register") {
  //   if (!localStorage.getItem("Authorization") || localStorage.getItem("Authorization") === "undefined") {
  //     next({name: "dashboard"});
  //   }
  // }
  // if (to.name != "dashboard") {
  //   clearInterval();
  // }
  if (!hasQueryParams(to) && hasQueryParams(from)) {
    next({ name: to.name, query: from.query });
  } else {
    next();
  }
});

export default router;
