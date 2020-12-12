<template>
    <div class="managerCreatediv">
        <h1>Create new Managers!</h1>
        <form class="managercreation" id="ManagerID">
            <label>email</label>
            <br />
            <input required v-model="email" type="text" />
            <br />
            <label>password</label>
            <br />
            <input required v-model="password" type="password" />
            <br />
            <label>First name</label>
            <br />
            <input required v-model="firstName" type="text" />
            <br />
            <label>Last name</label>
            <br />
            <input required v-model="lastName" type="text" />
            <br />
            <button v-on:click="createManager" class="button" type="submit">Create</button>
        </form>
        
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                password: "",
                email: "",
                firstName: "",
                lastName: ""
            }
        },

        methods: {
            async createManager() {
                var Managerform = { "email": this.email, "password": this.password, "firstName": this.firstName, "lastName": this.lastName };
                let url = "https://localhost:44368/api/Managers";
                try {
                    let response = await fetch(url, {
                        method: "POST",
                        body: JSON.stringify(Managerform), // Assumes data is in an object called form
                        headers: new Headers({
                            'Authorization': 'Bearer ' + localStorage.getItem("token"),
                            "Content-Type": "application/json"
                        })
                    });
                    if (response.ok) {
                        alert("Succesful");
                    }
                    else {
                        alert("unsuccesful server returned " + response.statusText);
                    }
                }
                catch (error) {
                    alert("error happened: " + error);
                }
            }
        }
    }
</script>


<style scoped>
    .button {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 10px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }


    input[type=text], select {
        width: 25%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    input[type=password], select {
        width: 25%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }


</style>
