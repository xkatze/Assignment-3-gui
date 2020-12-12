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


    { path: "/createModel",
        name: "CreateModel",
        component: () =>
            import("../views/CreateModel.vue"),
        //beforeEnter: (to, from, next) => {
        //    let role = localStorage.getItem("isManager");
        //    if (role == "Model") {
        //        next();
        //    } else next('/login')
        //}
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
  }
];

const router = new VueRouter({
  //mode: "history",
  routes
});

export default router;
