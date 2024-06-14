<template>
<Header></Header>
<p>Update Restaurant</p>
<!-- 62 -->
<form class="update">
    <input type="text" v-model="restaurant.name" placeholder="Update Name" name="name">
    <input type="text" v-model="restaurant.price" placeholder="Update Name" name="name">
    <input type="text" v-model="restaurant.address" placeholder="Update Address" name="address">
    <input type="email" v-model="restaurant.contact" placeholder="Update Contact" name="contact">
    <button type="number" @click="updateRes" class="btn">Update Restaurant</button>
</form>
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
            restaurant: {
                name: '',
                price:'',
                address: '',
                contact: ''
            },
        }
    },

    methods:{
      //64
      updateRes(){
        console.log(this.restaurant);
        //http://localhost:4000/restaurant/
      }
    },

    // 52 Authentication
    async mounted() {
        // console.log("mount");
        let users = localStorage.getItem('UserInfo');
        //52 Authentication
        if (!users) {
            this.$router.push({
                name: 'Sign'
            });
        }

        //63 Update
        const result = await axios.get("http://localhost:4000/restaurant/"+this.$route.params.id);
        console.log(result.data);
        //Data Prefill
        this.restaurant = result.data;

        
        // console.log(this.$route.params.id);
    }
}
</script>
