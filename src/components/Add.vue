<template>
<Header></Header>
<p>Add Restaurant</p>
<!-- 60 , 61 -->
<form class="add">
    <input type="text" v-model="restaurant.name" placeholder="Add Name" name="name">
    <input type="text" v-model="restaurant.price" placeholder="Add price" name="price">
    <input type="text" v-model="restaurant.address" placeholder="Add Address" name="address">
    <input type="text" v-model="restaurant.contact" placeholder="Add Contact" name="contact">
    <button type="text" @click="addRes" class="btn">Add New Restaurant</button>
</form>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue'
export default {
    components: {
        Header
    },

    data() {
        return {
            restaurant: {
                name: '',
                price: '',
                address: '',
                contact: ''
            },
        }
    },
    methods: {
        async addRes() {
            // console.log(this.restaurant);
            const result = await axios.post("http://localhost:4000/restaurant", {
                name: this.restaurant.name,
                price: this.restaurant.price,
                address: this.restaurant.address,
                contact: this.restaurant.contact,
            });
            if (result.status == 200) {
                this.$router.push({
                    name: 'Home'
                })
            }
        }
    },

    //52 Authentication
    mounted() {
        console.log("mount");
        let users = localStorage.getItem('UserInfo');
        if (!users) {
            this.$router.push({
                name: 'Sign'
            });
        }
    }
}
</script>
