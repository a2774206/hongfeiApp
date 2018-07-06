<template>
	<div>
		<div class="banners">
			<div class="banImg">
				<img src="../../../static/img/4.png">
			</div>
		</div>
		
	</div>
</template>

<script>
	//import banner from '../components/index/banner'

	export default {
		name: 'index',
		data() {
			return {
				msg: 'index'
			}
		},
		components: {

		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
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