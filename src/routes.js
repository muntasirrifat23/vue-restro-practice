import Home from './components/Home.vue'
import Sign from './components/SignUp.vue'
import Login from './components/Login.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
import {createRouter, createWebHistory } from 'vue-router'
// 51
const routes =[
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'Sign',
        component: Sign,
        path: '/sign'
    },
    {
        name: 'Login',
        component: Login,
        path: '/login'
    },
    {
        name: 'Add',
        component: Add,
        path: '/add'
    },
    {
        name: 'Update',
        component: Update,
        path: '/update'
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;
