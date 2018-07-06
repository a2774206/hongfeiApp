<template>
  <div class="videos">
 	  <publicSm china="视频介绍" english="VIDEO INTRODUCTION"></publicSm>
 	  <div class="video_source">
 	  	<video poster="../../../static/img/bjxxw_j.jpg" autoplay="autoplay" webkit-playsinline x5-playsinline x5-video-player-type='h5'  controls="controls"  v-if="msg">
 	  		<source src="../../../static/video/bjxxw.mp4" type="video/mp4"></source>
 	  	</video>
 	  </div>
  </div>
  
</template>

<script>
//import publicSm from '../public/public_sm'
export default {
  name: 'videos',
  data () {
    return {
      msg: 'true'
    }
  },
  components:{
//	publicSm
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
.video_source{
	width: 375px;
	height: 215px;
}
.video_source video{
	width: 375px;
	height: 215px;
}

</style>
