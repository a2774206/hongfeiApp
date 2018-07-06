<template>
  <div class="index">
  		<banner></banner>
  		<videos></videos>
  		<cases></cases>
  		<service></service>
  		<friend></friend>
  </div>
  
</template>

<script>
import banner from '../components/index/banner'
import videos from '../components/index/video'
import cases from '../components/index/case'
import service from '../components/index/service'
import friend from '../components/index/friend'
export default {
  name: 'index',
  data () {
    return {
      msg: 'index'
    }
  },
  components:{
  	banner,videos,cases,service,friend
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}

</style>
