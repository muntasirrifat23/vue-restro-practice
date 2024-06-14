<template>
 <div class="head">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurant</router-link>
    <router-link to="/update">Update Restaurant</router-link>
    <!-- <router-link @click="logout" to="#">Logout</router-link> -->
    <router-link to="/sign">Sign Up</router-link>
    <router-view></router-view>

 </div>
</template>


<script>
export default{
    data(){
        return{

        }
    },
    //56 
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'Login'})
        }
    }
}

</script>

<style>
.head{
   background-color: black;
   overflow: hidden; 
   text-align: center;
   padding: 20px;
}

.head a{
    color: white;
    padding: 20px ;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
}

.head a:hover{
    background-color: rgb(88, 77, 77);
}
</style>
