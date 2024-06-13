<template>
<Header></Header>
<p>Add restro</p>

</template>


<script>
import Header from './Header.vue'
 export default{
  components:{
    Header
  },

  data(){
    return{

    }
  }
}

//52 Authentication
//   mounted(){
//         console.log("mount");
//         let users = localStorage.getItem('UserInfo');
//         //52 Authentication
//         if(users){
//             this.$router.push({name:'Sign'});
//         }
//     }
</script>
