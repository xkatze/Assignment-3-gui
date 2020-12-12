<template>

    
    <div class="app">
        <h2>Current jobs</h2>
        <div>
            <table id="Thejobs">
                <tr>
                    <th>Customer</th>
                    <th>Start Date</th>
                    <th>Days</th>
                    <th>Location</th>
                    <th>Comment</th>
                </tr>
                <tr v-for="item in Jobsa" v-bind:key="item.id">
                    <td>{{item.customer}}</td>
                    <td>{{item.startDate}}</td>
                    <td>{{item.days}}</td>
                    <td>{{item.location}}</td>
                    <td>{{item.comments}}</td>
                </tr>
            </table>
            <h1>{{Jobsa.days}}</h1>
        </div>
    </div>
</template>

<script>


    export default {
        data: function () {
            return {
                Jobsa: []

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
                let Jobs = await response.json();
                var Jobstring = JSON.stringify(Jobs);
                console.log(Jobstring);
                this.Jobsa = Jobs;
            }
        }
    }

    </script>

<style>

    #Thejobs {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
        align-self:center;
    }

        #Thejobs td, #Thejobs th {
            border: 1px solid #ddd;
            padding: 8px;
        }

        #Thejobs tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        #Thejobs tr:hover {
            background-color: #ddd;
        }

        #Thejobs th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #4CAF50;
            color: white;
            margin-left: auto;
            margin-right: auto;
        }


</style>
