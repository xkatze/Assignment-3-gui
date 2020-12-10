import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Login from "@/views/Login";

Vue.config.productionTip = false;

Vue.component("login-field", Login);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
