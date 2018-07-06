<template>
  <div class="marketing">
  		<child></child>
  		
  </div>
  
</template>

<script>
import child from '../components/marketing/child'

export default {
  name: 'marketing',
  data () {
    return {
      msg: 'index'
    }
  },
  components:{
  	child
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
