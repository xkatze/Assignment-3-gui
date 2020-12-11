

<template>
    
    <div class="app">

        <h1>hey</h1>

        <h2>{{}}</h2>


    </div>
</template>

<script>

    
    export default {
        data: function () {
            return {

            }
        },


        async created() {
            let url = "https://localhost:44368/api/Jobs";

            let response = await fetch(url, {
                method: 'GET', // Or DELETE
                credentials: 'include',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'application/json'
                }

            });

            if (response.ok) {

                let Jobs = await response.json();                var Jobstring = JSON.stringify(Jobs);                console.warn(Jobstring);            }        }    }

    </script>