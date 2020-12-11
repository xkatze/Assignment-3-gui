<template>
  <div class="managerCreatediv">
    <h1>Create new Managers!</h1>
    <form class="managercreation" id="ManagerID">
        <label>email</label>
        <br/>
        <input required v-model= "email" type="text"/>
        <br/>
        <label>password</label>
        <br/>
        <input required v-model= "password" type="password"/>
        <br/>
        <label>First name</label>
        <br/>
        <input required v-model = "firstName" type="text"/>
        <br/>
        <label>Last name</label>
        <br/>
        <input required v-model = "lastName" type="text"/>
        <br/>
        <button v-on:click="createManager" type="submit">Create</button>
    </form>
  </div>
</template>

<script>
export default {
    data: function(){
        return {
            password: "",
            email: "",
            firstName: "",
            lastName: ""
        }
    },

    methods: {
        async createManager(){
            var Managerform = {"email": this.email, "password": this.password, "firstName": this.firstName, "lastName": this.lastName};
            let url = "https://localhost:44368/api/Managers";
            try
            {
            let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(Managerform), // Assumes data is in an object called form
            headers: new Headers({
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
                "Content-Type": "application/json"
                })
            }); 
            if(response.ok){
                alert("Succesful");
            }  
            else{
                alert("unsuccesful server returned " + response.statusText);
            }
            }
            catch(error)
            {
                alert("error happened: "+error);
            }
        }
    }
}
</script>