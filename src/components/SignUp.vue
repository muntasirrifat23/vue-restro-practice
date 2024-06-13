<template>
    <Header></Header>
<div class="signUp">
    <img src="../assets/signup.png">
    <input v-model="name" type="text" placeholder="Enter Name">
    <input v-model="email" type="email" placeholder="Enter Email">
    <input v-model="password" type="password" placeholder="Enter Password">
    <button @click="sign" class="btn">
        Sign Up
    </button>
    <p>
        <router-link to="/login">Log In</router-link>
    </p>
</div>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'

export default {
    components:{
        Header
    },
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async sign() {
            console.log(this.name, this.email, this.password);
            let result = await axios.post('http://localhost:4000/users', {
                email: this.email,
                name: this.name,
                password: this.password
            });
            console.log(result);
            if (result.status == 201) {
                alert('Sign Up Done');
                //50
                localStorage.setItem ("UserInfo", JSON.stringify(result.data));
                //51
                this.$router.push({name:'Home'})
            }
          
        }
    },
    //52 Authentication
    // mounted(){
    //     let users = localStorage.getItem('UserInfo');
    //     if(users){
    //         this.$router.push({name:'Home'});
    //     }
    // }
}
</script>

<style scoped>
.signUp {
    height: 40px;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
}

.signUp input {
    padding: 15px;
    margin-top: 20px;
    border: 1px solid skyblue;
}

.btn {
    width: 100%;
    margin-top: 10px;
    background-color: skyblue;
    color: black;
    border: 1px solid black;
    border-radius: 7px;
    padding: 7px;
    font-weight: bold
}
p{
    text-align: center;
}
</style>
