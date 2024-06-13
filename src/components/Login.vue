<template>
    <Header></Header>
<div class="login">
    <img src="../assets/images.png">
    <input v-model="email" type="email" placeholder="Enter Email">
    <input v-model="password" type="password" placeholder="Enter Password">
    <button @click="log" class="btn">
        Login
    </button>
    <p>
        <router-link to="/sign">Sign Up</router-link>
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
            email: '',
            password: ''
        }
    },
    //54
    methods: {
        async log() {
            let result = await axios.get(`http://localhost:4000/users?email=${this.email}&password=${this.password}`);
            //http://localhost:4000/users?email=user9@example.com&password=password9
            if (result.status == 200 && result.data.length > 0) {
                alert('Login Done');
                //50
                localStorage.setItem("UserInfo", JSON.stringify(result.data[0]));
                //51
                this.$router.push({
                    name: 'Home'
                })
            }
        }
    }
}
</script>

<style scoped>
.login {
    height: 40px;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
}

.login input {
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
    font-weight: bold;
}

p {
    text-align: center;
}
</style>
