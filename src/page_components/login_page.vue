
<template>
  <div id="login_page">
    <img alt="dominion logo" src="../assets/logo.jpeg">
    <login_content msg="Dominion Blog"/>
    <router-view></router-view>
  </div>


</template>



<script>
import login_content from '../components/login_content'



export default {
  name: 'login_page',
  components: {
    login_content
  }
}
</script>


<style scoped>
#login_page {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}



</style>
