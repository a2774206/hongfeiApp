<template>
  <div class="banner_media">
  		<banner></banner>
  		<tab></tab>
  </div>
  
</template>

<script>
import banner from '../components/media/banner'
import tab from '../components/media/tab'
export default {
  name: 'media_banner',
  data () {
    return {
      msg: 'index'
    }
  },
  components:{
  	banner,tab
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
