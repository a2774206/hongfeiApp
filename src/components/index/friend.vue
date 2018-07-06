<template>
  <div class="friend">
 	  <publicSm china="品牌案例" english="BRAND CASE"></publicSm>
 	  <div class="marquees">
 	  	<mt-swipe :auto="5000" :show-indicators="false">
			  <mt-swipe-item>
			  	<ul class="case_img">
			  		<li class="mdui-ripple"><img src="../../../static/logo/zgrs.png"></li>
			  		<li class="mdui-ripple"><img src="../../../static/logo/zgdx.png"></li>
			  		<li class="mdui-ripple"><img src="../../../static/logo/fzkd.png"></li>
			  		<li class="mdui-ripple"><img src="../../../static/logo/snyg.png"></li>
			  	</ul>
			  </mt-swipe-item>
			  
			  <mt-swipe-item>
			  	<ul class="case_img">
			  		<li class="mdui-ripple"><img src="../../../static/logo/lwjy.png"></li>
			  		<li class="mdui-ripple"><img src="../../../static/logo/mlc.png"></li>
			  		<li class="mdui-ripple"><img src="../../../static/logo/mtfc.png"></li>
			  		<li class="mdui-ripple"><img src="../../../static/logo/wfjbh.png"></li>
			  	</ul>
			  </mt-swipe-item>
			  
			  <mt-swipe-item>
			  	<ul class="case_img">
			  		<li class="mdui-ripple"><img src="../../../static/logo/xfl.png"></li>
			  		<li class="mdui-ripple"><img src="../../../static/logo/byd.png"></li>
			  		<li class="mdui-ripple"><img src="../../../static/logo/bjyh.png"></li>
			  		<li class="mdui-ripple"><img src="../../../static/logo/wawj.png"></li>
			  	</ul>
			  </mt-swipe-item>
			 
			  <mt-swipe-item>
			  	<ul class="case_img">
			  		<li class="mdui-ripple"><img src="../../../static/logo/cdbssz.png"></li>
			  		<li class="mdui-ripple"><img src="../../../static/logo/wm.png"></li>
			  		<li class="mdui-ripple"><img src="../../../static/logo/xgdq.png"></li>
			  		<li class="mdui-ripple"><img src="../../../static/logo/zgtj.png"></li>
			  	</ul>
			  </mt-swipe-item>
			  
			  <mt-swipe-item>
			  	<ul class="case_img">
			  		<li class="mdui-ripple"><img src="../../../static/logo/gsjy.png"></li>
			  		<li class="mdui-ripple"><img src="../../../static/logo/jlf.png"></li>
			  		<li class="mdui-ripple"><img src="../../../static/logo/Kcoo.png"></li>
			  		<li class="mdui-ripple"><img src="../../../static/logo/lj.png"></li>
			  	</ul>
			  </mt-swipe-item>
			 
			  
			</mt-swipe>
 	 </div>
 	  
  </div>
  
</template>

<script>

export default {
  name: 'friend',
  data () {
    return {
      msg: 'friend',
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
.friend{
	width: 325px;
	overflow: hidden;
	margin: 0 auto;
	margin-bottom: 18px;
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
	width: 151px;
	height: 55px;
	display: block;
	margin-left: 11px;
	margin-bottom: 26px;
	box-shadow:  1px 1px 1px rgba(35, 24, 21, 0.35);
}
.case_img li img{
	width: 100%;
	height: 100%;
}
.friend .mint-swipe-indicators{
	margin-bottom: 20px;
}
</style>
