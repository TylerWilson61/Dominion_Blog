<!-- html -->
<template>
  <div id="app">
    <!-- <img alt="dominion logo" src="./assets/logo.jpeg"> -->
    <!-- <login_content msg="Dominion Blog"/> -->
    <router-view></router-view>
  </div>

  <!-- <router-view></router-view> -->
</template>


<!--javscript -->
<script>
// import login_content from './components/login_content'
// import axios from 'axios';
// console.log(axios.get("http://localhost:3000/comments"))


export default {
  name: 'App',
  components: {
    // login_content
  }
}
</script>

<!-- style sheet-->
<style scoped>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
