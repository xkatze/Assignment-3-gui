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
    path: "/showJob",
    name: "ShowJobs",
    component: () =>
    import("../views/ShowJobs.vue"),
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
    import("../views/Login.vue"),
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem("isManager") == null){
        next();
      }else{
        next('/')
      } 
    }
  },
  {
    path: "/createManager",
    name: "Managing",
    component: () =>
    import("../views/CreateManager.vue"),
    beforeEnter: (to, from, next) => {
      let role = localStorage.getItem("isManager");
      if(role == "Manager"){
      next();
      }else next('/login')
    }
  },
  {
    path: "/makeExpense",
    name: "MakeExpense",
    component: () =>
    import("../views/MakeExpense.vue"),
    beforeEnter: (to, from, next) => {
      let role = localStorage.getItem("isManager");
      if(role == "Model"){
      next();
      }else next('/login')  
    }
  },
  {
    path: "/modelToJob",
    name: "ModelToJob",
    component: () =>
    import("../views/ModelToJob.vue"),
    beforeEnter: (to, from, next) => {
      let role = localStorage.getItem("isManager");
      if(role == "Manager"){
      next();
      }else next('/login')  
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
