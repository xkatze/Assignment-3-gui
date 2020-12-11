<template>
    <div class="makeExpense">
        <label>JobID</label>
        <br/>
        <input required v-model= "jobID" type="number"/>
        <br/>
        <label>Day</label>
        <input required v-model= "day" type="text"/>
        <label>Month</label>
        <input required v-model= "month" type="text"/>
        <label>Year</label>
        <input required v-model= "year" type="text"/>
        <br/>
        <label>Comment</label>
        <br/>
        <input type="text" required v-model="comment">
        <br/>
        <label>Amount</label>
        <br/>
        <input type="number" required v-model= "expense">
        <br/>
        <button v-on:click="postExpense">submit</button>
        <br/>
        <br/>
        <p>{{msg}}</p>
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
            msg: "hello"
        }
    },
    methods: {
        async postExpense(){
            var modelIdnum = parseInt(localStorage.getItem("modelID"));
            var jobIdnum = parseInt(this.jobID);
            var amountnum = parseInt(this.expense);
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