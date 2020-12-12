<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home </router-link>
      <router-link to="/createModel">| Create Model </router-link>
      <router-link to="/createJob">| Create Job </router-link>
      <router-link to="/showJobs">| Hello World </router-link>
      <router-link to="/login" v-if="canSee()">| Login </router-link>
      <router-link to="/createManager" v-if="managerOnly()">| Create new Manager </router-link>
      <router-link to="/makeExpense" v-if="modelOnly()">| Make Expense </router-link>
      <router-link to="/modelToJob" v-if="managerOnly()">| Add/Delete Model To Job </router-link>
      <button v-if="loggedin()" v-on:click="logout">Logout</button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    canSee(){
      if(localStorage.getItem("isManager") == "Manager" || localStorage.getItem("isManager") == "Model"){
        return false;
      }
      else{
        return true;
      }
    },
    loggedin(){
      if(localStorage.getItem("isManager") == "Manager" || localStorage.getItem("isManager") == "Model"){
        return true;
      }
      else{
        return false;
      }
    },
    managerOnly(){
      if(localStorage.getItem("isManager") == "Manager"){
        return true;
      }
      else{
        return false;
      }
    },
    modelOnly(){
      if(localStorage.getItem("isManager") == "Model"){
        return true;
      }
      else{
        return false;
      }
    },
    logout(){
        localStorage.removeItem("isManager");
        localStorage.removeItem("token");
        localStorage.removeItem("modelID");
        location.reload();
      }
  }

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
