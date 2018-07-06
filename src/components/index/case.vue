<template>
  <div class="videos">
 	  <publicSm china="品牌案例" english="BRAND CASE"></publicSm>
 	  <div class="marquees">
 	  	<mt-swipe :auto="4000">
			  <mt-swipe-item>
			  	<ul class="case_img">
			  		<li><img src="../../../static/img/tp2.png"></li>
			  		<li><img src="../../../static/img/2_2.png"></li>
			  		<li><img src="../../../static/img/1_1.png"></li>
			  	</ul>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<ul class="case_img">
			  		<li><img src="../../../static/img/3_3.png"></li>
			  		<li><img src="../../../static/img/tp1.png"></li>
			  		<li><img src="../../../static/img/11.png"></li>
			  	</ul>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<ul class="case_img">
			  		<li><img src="../../../static/img/12.png"></li>
			  		<li><img src="../../../static/img/13.png"></li>
			  		<li><img src="../../../static/img/14.png"></li>
			  	</ul>
			  </mt-swipe-item>
			   <mt-swipe-item>
			  	<ul class="case_img">
			  		<li><img src="../../../static/img/15.png"></li>
			  		<li><img src="../../../static/img/16.png"></li>
			  		<li><img src="../../../static/img/17.png"></li>
			  	</ul>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<ul class="case_img">
			  		<li><img src="../../../static/img/18.png"></li>
			  		<li><img src="../../../static/img/19.png"></li>
			  		<li><img src="../../../static/img/20.png"></li>
			  	</ul>
			  </mt-swipe-item>
			</mt-swipe>
 	 </div>
 	  
  </div>
  
</template>

<script>

export default {
  name: 'case',
  data () {
    return {
      msg: 'case',
      imgList:[
					{
						'img':'tp2','title':'社区高端灯箱','pinpai':'兴创屹墅'
					},
					{
						'img':'2_2','title':'社区高端灯箱','pinpai':'美墅杉房地产'
					},
					{
						'img':'1_1','title':'社区高端灯箱','pinpai':'TATA木门'
					},
					{
						'img':'3_3','title':'社区高端灯箱','pinpai':'链家房地产'
					},
					{
						'img':'tp1','title':'社区高端灯箱','pinpai':'美联臣'
					},
					{
						'img':'11','title':'96156社区服务宣传栏','pinpai':'十八酒坊'
					},{
						'img':'12','title':'96156社区服务宣传栏','pinpai':'苏宁易购'
					},{
						'img':'13','title':'96156社区服务宣传栏','pinpai':'长城宽带'
					},{
						'img':'14','title':'96156社区服务宣传栏','pinpai':'方太电器'
					},{
						'img':'16','title':'96156社区服务宣传栏','pinpai':'大中电器'
					},{
						'img':'17','title':'96156社区服务宣传栏','pinpai':'美的空调'
					},{
						'img':'18','title':'96156社区服务宣传栏','pinpai':'北京现代'
					},{
						'img':'20','title':'道闸门','pinpai':'依诺瓷砖'
					},{
						'img':'21','title':'道闸门','pinpai':'格力电器'
					},{
						'img':'22','title':'道闸门','pinpai':'TATA木门'
					},{
						'img':'23','title':'道闸门','pinpai':'梦天水漆木门'
					}
					
				]
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
.marquees{
	overflow: hidden;
	width: 100%;
	height: 130px;
}
.case_img{
	width:375px;
	height: 123px;
	margin: 0;
	padding: 0;
}

.case_img li{
	float: left;
	width: 111px;
	height: 123px;
	display: block;
	margin-left: 11px;
}
.case_img li img{
	width: 100%;
	height: 100%;
}
</style>
