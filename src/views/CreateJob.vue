<template>
    <div class="about">
        <h2>Her kan der oprettes et job</h2>
        <form class="CreateJob" id="HobID">


            <label for="Customer">Costumer</label>
            <input required v-model="customer" id="Customer" type="text" />
            <br>
            <br />
            <label for="yearstart">Year of start</label>
            <input required v-model="year" id="yearstart" type="text" />
            <br>
            <br />
            <label for="monthstart">Start month</label>
            <input required v-model="month" id="monthstart" type="text" />
            <br>
            <br />
            <label for="daystart">Start day</label>
            <input required v-model="day" id="daystart" type="text" />
            <br>
            <br />

            <label for="Amountofday">Amount of days </label>
            <input required v-model="days" id="Amountofday" type="text" />
            <br>
            <br />

            <label for="locations">Location</label>
            <input required v-model="location" id="locations" type="text" />
            <br>
            <br />

            <label for="Comments">Comments</label>
            <input required v-model="comments" id="Comments" type="text" />

            <button v-on:click="createJob" class="button" type="submit">Create</button>
        </form>
    </div>


</template>

<script>
export default {
    data: function(){
        return {
            customer: "",
            year: "",
            month: "",
            day: "",
            days: "",
            location: "",
            comments: ""
        }
    },

    methods: {
        async createJob() {

            var JobForm = {

                "customer": this.customer,
                "startDate": this.year + "-" + this.month + "-" + this.day,
                "days": this.Days,
                "location": this.location,
                "comments": this.comments
            
            };
            let url = "https://localhost:44368/api/Jobs";
            try
            {
            let response = await fetch(url, {
            method: "POST",
                body: JSON.stringify(JobForm), // Assumes data is in an object called form
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
                console.warn(JSON.stringify(JobForm))
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
