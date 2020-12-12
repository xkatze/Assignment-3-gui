<template>
    <div class="about">
        <h2>Create new model</h2>
        <form class="CreateModel" id="ModelID">


            <label for="Fname">First Name</label>
            <br />
            <input required v-model="firstName" id="Fname" type="text" />

            <br />
            <label for="Lname">Last Name</label>
            <br />
            <input required v-model="lastName" id="Lname" type="text" />

            <br />
            <label for="Mail">Email</label>
            <br />
            <input required v-model="email" id="Mail" type="text" />

            <br />
            <label for="PhoneNo">phoneNo</label>
            <br />
            <input required v-model="phoneNo" id="PhoneNo" type="text" />

            <br />

            <label for="Addr1">Adresse 1</label>
            <br />
            <input required v-model="addresLine1" id="Addr1" type="text" />

            <br />
            <label for="Addr1">Adresse 2</label>
            <br />
            <input required v-model="addresLine2" id="Addr2" type="text" />

            <br />
            <label for="ZipNr">Zip Number</label>
            <br />
            <input required v-model="zip" id="ZipNr" type="text" />

            <br />
            <label for="CityOfOccu">City</label>
            <br />
            <input required v-model="city" id="CityOfOccu" type="text" />

            <br />

            <label for="CountryOccu">Country</label>
            <br />
            <input required v-model="country" id="CountryOccu" type="text" />

            <br />
            <label for="Year">Year of birth</label>
            <br />
            <input required v-model="year" id="Year" type="text" />

            <br />
            <label for="Month">Month of birth</label>
            <br />
            <input required v-model="month" id="Month" type="text" />

            <br />
            <label for="Day">Day of birth</label>
            <br />
            <input required v-model="day" id="Day" type="text" />

            <br />
            <label for="NationalityOf">Nationality</label>
            <br />
            <input required v-model="nationality" id="NationalityOf" type="text" />

            <br />
            <label for="HeightOf">Height</label>
            <br />
            <input required v-model="height" id="HeightOf" type="text" />

            <br />
            <label for="ShoeSizeM">ShoeSize</label>
            <br />
            <input required v-model="shoeSize" id="ShoeSizeM" type="text" />

            <br />
            <label for="HairColorM">HairColor</label>
            <br />
            <input required v-model="hairColor" id="HairColorM" type="text" />

            <br />
            <label for="EyeColorM">EyeColor</label>
            <br />
            <input required v-model="eyeColor" id="EyeColorM" type="text" />

            <br />
            <label for="Comments">Comments</label>
            <br />
            <input required v-model="comments" id="Comments" type="text" />

            <br />
            <label for="Password">Password</label>
            <br />
            <input required v-model="password" id="Password" type="text" />

            <br />

            <button v-on:click="createModel" class="button" type="submit">Create</button>
        </form>
    </div>

    
</template>

<script>
export default {
    data: function(){
        return {
            firstName: "",
            lastName: "",
            email: "",
            phoneNo: "",
            addresLine1: "",
            addresLine2: "",
            zip: "",
            city: "",
            country: "",
            year: "",
            month: "",
            day: "",
            nationality: "",
            height: "",
            shoeSize: "",
            hairColor: "",
            eyeColor: "",
            comments: "",
            password: "",
        }
    },

    methods: {
        async createModel() {
            //var Height = parseFloat(this.height);
            //var Shoesize = parseInt(this.Shoesize);
            var ShoesizeOf = parseFloat(this.shoeSize);
            var HeightOf = parseFloat(this.height);

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
                "height": HeightOf,
                "shoeSize": ShoesizeOf,
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

                'Authorization': 'Bearer ' + localStorage.getItem("token"),
                "Content-Type": "application/json"
                })
            });

            if(response.ok){
                alert("Succesful");
            }
            else{
                alert("unsuccesful server returned " + response.statusText);
                console.warn(JSON.stringify(ModelForm))
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
        padding: 10px 30px;
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
