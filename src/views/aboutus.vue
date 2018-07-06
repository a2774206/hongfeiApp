<template>
  <div class="aboutus">
  		<banner></banner>
			<publicSm china="社区广告 五大优势" english="Community Advertisement 5 Big Superiority"></publicSm>
			<div class="five">
				<img src="../../static/img/y5.png">
			</div>
  </div>
  
</template>

<script>
import banner from '../components/aboutus/banner'

export default {
  name: 'index',
  data () {
    return {
      msg: 'index'
    }
  },
  components:{
  	banner
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
.five{
	width: 346px;
	height: 252px;
	margin: 15px auto;
}
.five img{
	width: 100%;
	height: 100%;
}
</style>
