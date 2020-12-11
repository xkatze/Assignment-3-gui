<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home </router-link>
      <router-link to="/about">| About </router-link>
      <router-link to="/hello">| Hello World </router-link>
      <router-link to="/login" v-if="canSee()">| Login </router-link>
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
    logout(){
        localStorage.removeItem("isManager");
        localStorage.removeItem("token");
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
