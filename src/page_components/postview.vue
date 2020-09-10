<template>
<div id = 'postview'>
<Header/>
<Viewcontent />
<Comments />
</div>
</template>

<script>
//hand edit/delete comment

import Header from '../layout/header'
import Viewcontent from "../components/viewpost_body"
import Comments from '../components/viewpost_comments'

export default {
    name:'postview',
    components:{
        Header,
        Viewcontent,
        Comments
    },
    mounted: function () {
        this.check_loggedin()
    },
    methods: {
        check_loggedin: function () {
            if (window.$cookies.get("logged_in") != "true"){
                this.$router.push("/")
            }

        }
    }
    
}
</script>

<style scoped>
#postview {
      font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>