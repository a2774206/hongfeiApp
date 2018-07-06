<template>
  <div class="banner_media">
	  	<div class="banners">
			 	 	 <div class="banImg">
			 	 	 		<img src="../../../static/img/3.png">
			 	 	 </div>
			 	 		
		  </div>
  		
  </div>
  
</template>

<script>
export default {
  name: 'media_banner',
  data () {
    return {
      msg: 'index'
    }
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
.banners{
	width: 375px;
	height: 82px;
}
.banners .banImg{
	width: 100%;
	height: 100%;
}
.banners .banImg img{
	width: 100%;
	height: 100%;
}

</style>
