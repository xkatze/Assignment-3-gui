<template>
    <div class="about">
        <h2>Her kan der oprettes et job</h2>
        <form class="CreateJob" id="HobID">


            <label for="Fname">First Name</label>
            <input required v-model="firstName" id="Fname" type="text" />
            <br>
            <br />
            <label for="Lname">Last Name</label>
            <input required v-model="lastName" id="Lname" type="text" />
            <br>
            <br />
            <label for="Mail">Email</label>
            <input required v-model="email" id="Mail" type="text" />
            <br>
            <br />
            <label for="PhoneNo">phoneNo</label>
            <input required v-model="phoneNo" id="PhoneNo" type="text" />
            <br>
            <br />

            <label for="Addr1">Adresse 1</label>
            <input required v-model="addresLine1" id="Addr1" type="text" />
            <br>
            <br />

            <label for="Addr1">Adresse 1</label>
            <input required v-model="addresLine1" id="Addr1" type="text" />
            <br>
            <br />

            <label for="Addr1">Adresse 1</label>
            <input required v-model="addresLine1" id="Addr1" type="text" />

            <button v-on:click="createJob" class="button" type="submit">Create</button>
        </form>
    </div>


</template>

<script>
export default {
    data: function(){
        return {
            customer: "",
            startDate: "",
            days: "",
            location: "",
            comments: ""
        }
    },

    methods: {
        async createModel() {
            //var Height = parseFloat(this.height);
            //var Shoesize = parseInt(this.Shoesize);
            var Shoesize= parseFloat(this.Shoesize);
            var Height = parseInt(this.height);

            var ModelForm = {

                "firstName": this.firstName,
                "lastName": this.lastName,
                "email": this.email,
                "phoneNo": this.phoneNo,
                "addresLine1": this.addresLine1,
                "addresLine2": this.addresLine2,
                "zip": this.zip,
                "city": this.city,
                "country": this.country,
                "birthDate": this.year + "-" + this.month + "-" + this.day,
                "nationality": this.nationality,
                "height": Height,
                "shoeSize": Shoesize,
                "hairColor": this.hairColor,
                "eyeColor": this.eyeColor,
                "comments": this.comments,
                "password": this.password
            };
            let url = "https://localhost:44368/api/Models";
            try
            {
            let response = await fetch(url, {
            method: "POST",
                body: JSON.stringify(ModelForm), // Assumes data is in an object called form
            headers: new Headers({

                "Content-Type": "application/json"
                })
            });

            if(response.ok){
                alert("Succesful");
            }
            else{
                alert("unsuccesful server returned " + response.statusText);
                let Jobs = await response.json();
                var Jobstring = JSON.stringify(Jobs);
                console.log(Jobstring);
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
