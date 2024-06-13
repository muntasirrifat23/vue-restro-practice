<template>
<Header></Header>

<p>Home User name:({{ name }})</p>

<table class="tb" border="1" >
    <tr class="th">
        <td>Serial</td>
        <td>Name</td>
        <td>Price</td>
        <td>Address</td>
        <td>Contact</td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id" class="info">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{item.price }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.contact }}</td>
    </tr>
</table>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';
export default {
    components: {
        Header
    },

    data() {
        return {
            name: '',
            restaurant: []
        }
    },

    //52 Authentication
    async mounted() {
        console.log("mount"); 
        let users = localStorage.getItem('UserInfo');
        //57
        this.name = JSON.parse(users).name;
        //52 Authentication
        if (users) {
            this.$router.push({
                name: 'Home'
            });
        }
        //59 
        let result = await axios.get("http://localhost:4000/restaurant");
        console.log(result);
        this.restaurant = result.data;
    }
}
</script>

<style>
.th{
  font-weight: bold;
  font-size: larger;
}
.th td,info{
  padding: 10px 20px;
}
.tb{
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
  text-align: center;
}
</style>
