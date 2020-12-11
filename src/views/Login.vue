<template>
  <div class="logindiv">
    <h1>Login In Page</h1>
    <form class="login" id="loginID">
        <label>email</label>
        <input required v-model= "email" type="text"/>
        <br/>
        <label>password</label>
        <input required v-model= "password" type="password"/>
        <button v-on:click="loginbutton" type="submit">Login</button>
    </form>
    <p>{{msg}}</p>
    <p>{{msg2}}</p>
    <p>{{msg3}}</p>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
    export default{
        data: function(){
            return{
                email: "",
                password: "",
                msg: "hello",
                msg2: "",
                msg3: ""
            }
        },
        methods: {
          async loginbutton() {
            var loginform = {"email": this.email, "password": this.password};
            let url = "https://localhost:44368/api/Account/login";
            try {
            let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(loginform), // Assumes data is in an object called form
            headers: new Headers({
                "Content-Type": "application/json"
                })
            });
            if (response.ok) {
            let token = await response.json();
            localStorage.setItem("token", token.jwt);
            var obj = VueJwtDecode.decode(token.jwt);
            this.msg2 = obj["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
            localStorage.setItem("isManager", obj["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"])
            this.msg = token.jwt
            this.msg3 = localStorage.getItem("token");
            this.$router.push("/hello");
            // Change view to some other component
            // …
            } else {
                alert("Server returned: " + response.statusText);
                this.msg = response.statusText;
            }
            } catch (err) {
                alert("Error: " + err);
                this.msg = err;
                }
            return;
        }
        
        /*methods: {
            post: function(){
                this.$http.post("https://localhost:44368/api/Account/login",{

                    email: this.email,
                    password: this.Password

                })
            }
        }*/
        }
    }
</script>