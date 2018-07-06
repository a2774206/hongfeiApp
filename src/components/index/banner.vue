<template>
  <div class="banners">
 	 	 <div class="banImg">
 	 	 		<mt-swipe :auto="4000">
				  <mt-swipe-item>
				  		<img src="../../../static/img/1.png" />
				  </mt-swipe-item>
				  <mt-swipe-item>
				 			 <img src="../../../static/img/2.png" />
				  </mt-swipe-item>
				 </mt-swipe>
 	 	 </div>
  </div>
  
</template>

<script>
//import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  name: 'banner',
  data () {
    return {
      msg: 'banner'
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
  
}
.banners{
	width: 375px;
	height: 132px;
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
