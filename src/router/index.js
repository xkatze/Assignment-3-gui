import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/hello",
    name: "Hello",
    component: () =>
    import("../views/Hello.vue"),
    beforeEnter: (to, from, next) => {
      let role = localStorage.getItem("isManager");
      if(role){
      next();
      }else next('/login')
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
    import("../views/Login")
  },
  {
    path: "/createManager",
    name: "Managing",
    component: () =>
    import("../views/CreateManager")

  }
];

const router = new VueRouter({
  //mode: "history",
  routes
});

export default router;
