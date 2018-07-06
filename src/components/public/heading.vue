<template>
  <div class="heading">
  	<div class="img96156">
  		<img src="../../../static/img/96156.png" alt=""/>
  	</div>
  	<div class="hongfei">
  		<img src="../../../static/img/hunfei.png" alt="" />
  	</div>
  	<ul class="icon_list" @click="openList" :class="{distor:distatus}">
  		<li class="icon_list_1"></li>
  		<li class="icon_list_2"></li>
  		<li class="icon_list_3"></li>
  	</ul>
  	
  	<transition name="fade">
	  	<ul class="list_selcet" v-if="distatus" @click="openList">
	  		<div class="opacitys"></div>
	  			
  	  		<li class="mdui-ripple" v-for="(i,item) in tablist" :key='item' :class="{'active':$route.path==i.route||item==0}">
	  	  			<router-link :to="i.route">
	  	  				{{i.title}}
	  	  			</router-link>
  	  		</li>
	  			<!--<li class="mdui-ripple"><route-link>首页</route-link></li>
	  			<li class="mdui-ripple"><a>关于我们</a></li>
	  			<li class="mdui-ripple"><a>社区媒体</a></li>
	  			<li class="mdui-ripple"><a>户外招商</a></li>
	  			<li class="mdui-ripple"><a>整合营销</a></li>
	  			<li class="mdui-ripple"><a>人才招聘</a></li>
	  			<li class="mdui-ripple"><a>联系我们</a></li>-->
	  	</ul>
  	</transition>

  </div>
  
</template>

<script>
export default {
  name: 'heading',
  data () {
    return {
      distatus: false,
      tablist:[
      	{title:'首页',route:'/index'},
      	{title:'关于我们',route:'/aboutus'},
      	{title:'社区媒体',route:'/media'},
      	{title:'户外招商',route:'/investment'},
      	{title:'整合营销',route:'/marketing'},
      	{title:'人才招聘',route:'/talent'},
      	{title:'联系我们',route:'/contactus'},
      ]
    }
  },
  methods:{
  	openList(e){
 			this.distatus = !this.distatus;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{
		
	}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
  text-decoration: none;
}
.heading{
	width: 100%;
	height: 55px;
	background: #fff;
}
.img96156{
	margin-top: 16.5px;
	overflow: hidden;
	float: left;
	margin-left: 7.5px;
	margin-right: 18px;
}
.hongfei{
	margin-top: 21.5px;
	overflow: hidden;
	float: left;
}
.img96156 img{
	width: 85px;
	height: 30px;
	
}
.hongfei img{
	width: 120px;
	height: 20.5px;
}
.icon_list{
	width: 22px;
	height: 20px;
	float: right;
	margin-top: 20px;
	margin-right: 11px;
}
.icon_list li{
	width: 100%;
	height: 3px; 
	background: #666;
	margin-bottom: 4px;
}
.icon_list li:last-child{
	margin-bottom: 0;
}
.distor .icon_list_1{
	transition: transform 0.5s; 
	transform-origin: 6px;
	transform:rotate(40deg);
}
.distor .icon_list_2{
	display: none;
	/*transition: display 0.3s; */
}
.distor .icon_list_3{
	transform:rotate(-40deg);
	transform-origin: 6px;
	transition: transform 0.5s; 
}
.list_selcet{
	clear: left;
	overflow: hidden;
	background: #fff;
	position: relative;
	transition: height 0.5s; 
	z-index: 999;
	
}
.list_selcet li{
	
	width: 375px;
	height: 61px;
	line-height: 61px;
	font-size: 16px;
	padding-left: 27px;
	text-align: left;	
	background: #efefef;
}
.list_selcet li a{
	color: #666;
	display: inline-block;
	width: 100%;
	height: 100%;
}
.list_selcet li:hover{
	background: #fff;
}
.fade-enter-active, .fade-leave-active {
     transition: opacity 0.5s
}
.fade-enter, .fade-leave-active {
     opacity: 0;
}
.opacitys{
	width: 100%;
	height: 800px;
	position: fixed;
	
	background: #333;
	opacity: 0.8;
	top:0;
	display: none;
}
.active{
	background: #fff !important;
}
</style>
