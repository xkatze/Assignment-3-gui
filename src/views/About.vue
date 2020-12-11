<template>
    <div class="about">
        <h2>Her kan der oprettes</h2>

        <form class="login" id="loginID">

            <label for="Fname">First Name</label>
            <input required v-model="FirstName" id="Fname" type="text" />
            <br>
            <br />
            <label for="Lname">Last Name</label>
            <input required v-model="LastName" id="Lname" type="text" />
            <br>
            <br />
            <label for="Mail">Email</label>
            <input required v-model="Email" id="Mail" type="text" />
            <br>
            <br />
            <label for="Addr1">Adresse 1</label>
            <input required v-model="AddresLine1" id="Addr1" type="text" />
            <br>
            <br />
            <label for="Addr1">Adresse 1</label>
            <input required v-model="AddresLine1" id="Addr1" type="text" />
            <br>
            <br />
            <label for="ZipNr">Zip Number</label>
            <input required v-model="Zip" id="ZipNr" type="text" />
            <br>
            <br />
            <label for="CityOfOccu">City</label>
            <input required v-model="City" id="CityOfOccu" type="text" />
            <br>
            <br />
            <label for="CityOfOccu">City</label>
            <input required v-model="City" id="CityOfOccu" type="text" />
            <br>
            <br />
            <label for="CountryOccu">Country</label>
            <input required v-model="Country" id="CountryOccu" type="text" />
            <br>
            <br />
            <label for="BirthDates">BirthDate</label>
            <input required v-model="BirthDate" id="BirthDates" type="text" />
            <br>
            <br />
            <label for="NationalityOf">Nationality</label>
            <input required v-model="Nationality" id="NationalityOf" type="text" />
            <br>
            <br />
            <label for="HeightOf">Height</label>
            <input required v-model="Height" id="HeightOf" type="text" />
            <br>
            <br />
            <label for="ShoeSizeM">ShoeSize</label>
            <input required v-model="ShoeSize" id="ShoeSizeM" type="text" />
            <br>
            <br />
            <label for="HairColorM">HairColor</label>
            <input required v-model="HairColor" id="HairColorM" type="text" />
            <br>
            <br />
            <label for="EyeColorM">EyeColor</label>
            <input required v-model="EyeColor" id="EyeColorM" type="text" />
            <br>
            <br />


            <button v-on:click="loginbutton" class="button" type="submit">Login</button>
        </form>
    </div>
</template>

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
