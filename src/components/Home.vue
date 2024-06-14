<template>
<Header></Header>

<p>Home User name:({{ name }})</p>

<table class="tb" border="1">
    <tr class="th">
        <td>Serial</td>
        <td>Name</td>
        <td>Price</td>
        <td>Address</td>
        <td>Contact</td>
        <td>Action</td>
    </tr>

    <tr v-for="item in restaurant" :key="item.id" class="info">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{item.price }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.contact }}</td>
        <!-- 62,63,64 -->
        <td class="link">
            <router-link :to="'/update/'+item.id">Update</router-link>

            <button @click="deleteRestro(item.id)">Delete</button>
        </td>
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
        // console.log(result);
        this.restaurant = result.data;
    },

    //65 Delete
    methods: {
        async deleteRestro(id) {
            let result = await axios.delete("http://localhost:4000/restaurant/" + id);
            if(result.status==200){
                window.location.reload();
            }
        }
    }
}
</script>

<style>
.th {
    font-weight: bold;
    font-size: larger;
}

.th td,
.info {
    padding: 10px 20px;
    text-decoration: none;
}

.tb {
    border: 1px solid black;
    margin-left: auto;
    margin-right: auto;
    padding: 5px;
    text-align: center;
}

.link {
    background-color: crimson;
    color: white;
    text-decoration: none;
}

.info a {
    color: white;
    text-align: center;
    text-decoration: none;
    padding: 4px 10px;
}

.link a:hover {
    background-color: white;
    color: crimson;
}
</style>
