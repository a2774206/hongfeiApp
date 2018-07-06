<template>
  <div class="public_sm">
 	 		<h2>{{china}}</h2>
 	 		<p class="english">
 	 			{{english}}
 	 		</p>
 	 		<p class="biao"></p>
  </div>
  
</template>

<script>
export default {
  name: 'public_sm',
  data () {
    return {
      msg: 'public_sm'
    }
  },
  props:['china','english']
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

.public_sm{
	padding-top: 20px;
	padding-bottom: 13px;
	text-align: center;
}
.public_sm h2{
	font-size: 18px;
	color: #333;
	margin-bottom: 4.5px;
}
.public_sm .english{
	font-size: 10px;
	color: #666;
	margin-bottom: 10px;
}
.public_sm .biao{
	width: 35px;
	height: 3px;
	background: #d2261e;
	display: inline-block;
}
</style>
