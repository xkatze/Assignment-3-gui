<template>
  <div class="hello">
    <h1>Hello World</h1>
    <button v-on:click = "logout">logout</button>
  </div>
</template>

<script>
// @ is an alias to /src
  export default{
    methods: {
      logout(){
        localStorage.removeItem("isManager");
        localStorage.removeItem("token");
        location.reload();
      }
    }
  }


</script>