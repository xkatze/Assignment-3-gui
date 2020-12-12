<template>
    
    <div class="makeExpense">
        <h2>Add expenses</h2>
        <label>JobID</label>
        <br />
        <input required v-model="jobID" type="number" />
        <br />
        <label>Day</label>
        <br />
        <input required v-model="day" type="text" />
        <br />
        <label>Month</label>
        <br />
        <input required v-model="month" type="text" />
        <br />
        <label>Year</label>
        <br />
        <input required v-model="year" type="text" />
        <br />
        <label>Comment</label>
        <br />
        <input type="text" required v-model="comment">
        <br />
        <label>Amount</label>
        <br />
        <input type="number" required v-model="expense">
        <br />
        <button v-on:click="postExpense" class="button">submit</button>
        <br />
        <br />

    </div>
</template>

<script>
export default {
    data: function(){
        return {
            jobID: "",
            day: "",
            month: "",
            year: "",
            comment: "",
            expense: "",

        }
    },
    methods: {
        async postExpense(){
            var modelIdnum = parseFloat(localStorage.getItem("modelID"));
            var jobIdnum = parseFloat(this.jobID);
            var amountnum = parseFloat(this.expense);
            var ExpenseForm = { "modelId": modelIdnum, "jobId": jobIdnum
            , "date": this.year + "-" + this.month + "-" + this.day
            , "text": this.comment
            , "amount": amountnum};

            this.msg = JSON.stringify(ExpenseForm);

            let url = "https://localhost:44368/api/Expenses";
            try {
            let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(ExpenseForm), // Assumes data is in an object called form
            headers: new Headers({
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
                "Content-Type": "application/json"
                })
            });
            if(response.ok){
                alert("succesful");
                
            }else{
                alert("something happened: "+ response.statusText);
            }
            }catch(err)
            {
                alert("error msg: " +err);
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
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }

    input[type=number], select {
        width: 25%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
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
</style>