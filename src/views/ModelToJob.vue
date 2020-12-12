<template>
    <div class="modelTojob">
        <h1>Add Model To Job</h1>
        <form class="login" id="loginID">
            <label>ModelID</label>
            <input required v-model="mID" type="number" />
            <br />
            <label>JobID</label>
            <input required v-model="jID" type="number" />
            <br />
            <button v-on:click="addModel" class="button" type="submit">add</button>
            <button v-on:click="deleteModel" class="buttondelete" type="submit">delete</button>
        </form>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                mID: "",
                jID: ""
            }
        },
        methods: {
            async addModel() {
                var modelID = parseInt(this.mID);
                var jobID = parseInt(this.jID);
                var postForm = { "jobId": jobID, "modelId": modelID };

                let url = "https://localhost:44368/api/Jobs/" + this.jID + "/model/" + this.mID;

                try {
                    let response = await fetch(url, {
                        method: "POST",
                        body: JSON.stringify(postForm), // Assumes data is in an object called form
                        headers: new Headers({
                            'Authorization': 'Bearer ' + localStorage.getItem("token"),
                            "Content-Type": "application/json"
                        })
                    });
                    if (response.ok) {
                        alert("succesful");
                    } else {
                        alert("something happened: " + response.statusText);
                    }
                }
                catch (err) {
                    alert("error happened: " + err);
                }
            },
            async deleteModel() {
                var modelID = parseInt(this.mID);
                var jobID = parseInt(this.jID);
                var postForm = { "jobId": jobID, "modelId": modelID };

                let url = "https://localhost:44368/api/Jobs/" + this.jID + "/model/" + this.mID;

                try {
                    let response = await fetch(url, {
                        method: "DELETE",
                        body: JSON.stringify(postForm), // Assumes data is in an object called form
                        headers: new Headers({
                            'Authorization': 'Bearer ' + localStorage.getItem("token"),
                            "Content-Type": "application/json"
                        })
                    });
                    if (response.ok) {
                        alert("succesful");
                    } else {
                        alert("something happened: " + response.statusText);
                    }
                }
                catch (err) {
                    alert("error happened: " + err);
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

    .buttondelete {
        background-color: #FF0000;
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


    input[type=number], select {
        width: 25%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }


</style>