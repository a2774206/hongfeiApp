<template>
  <div class="contactus">
  		<div class="banners">
  			<div class="banImg">
  					<img src="../../static/img/7.png">
  			</div>
  		</div>
			<div class="list">
				<ul>
					<li class="list1">
						<p><img src="../../static/images/ywlx.png" width="25" height="30"></p>
						<p class="h3">业务联系</p>
						<div>TEL:15321149700 </div>  
						<div>固话:400-0098-987</div>
					</li>
					<li  class="list2">
						<p><img src="../../static/images/hfyx.png" width="31" height="23"></p>
						<p class="h3">鸿飞邮箱</p>
						<div>xubin@bjxxw.com </div>  
						<div>510255206@qq.com</div>
					</li>
					<li  class="list3">
						<p><img src="../../static/images/QQ.png" width="28" height="30"></p>
						<p class="h3">客服QQ</p>
						<div>QQ：510255206</div>  
						<div>QQ：2107472851</div>
					</li>
					<li  class="list4">
						<p><img src="../../static/images/gsdz.png" width="29" height="32"></p>
						<p class="h3">公司地址</p>
						<div>北京市丰台区石榴庄西街232号联宏大厦6层<br>
北京信息网</div>  
						
					</li>
				</ul>
			</div>
			<div>
				<publicSm china="给我留言" english="LEAVE US A MESSAGE"></publicSm>
				<form action="http://www.bjxxw.com/hongfei/sent_mail.php" method="post">
					<ul class="subimt">
						<li>
							<input type="text" placeholder="邮箱" class="txt" name="email">
							<i class="mdui-icon material-icons">&#xe0be;</i>
						</li>
						<li><input type="text" placeholder="姓名" class="txt" name="name">
						<i class="mdui-icon material-icons">&#xe7fd;</i></li>
						<li>
							<input type="text" placeholder="电话" class="txt" name="tel">
							<i class="mdui-icon material-icons">&#xe551;</i>
						</li>
						<li>
							<textarea placeholder="留言" name="xuqiu"></textarea>
							<i class="mdui-icon material-icons">&#xe0c9;</i>
							</li>
						<li><input type="submit" value="提 交" class="btntj mdui-ripple"></li>
					</ul>
				</form>
			</div>
			<div style="clear: both;"></div>
  </div>
  
</template>

<script>


export default {
  name: 'contactus',
  data () {
    return {
      msg: 'contactus'
    }
  },
  components:{
  	
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
.list ul{
	width: 336px;
	margin: 0 auto;
	margin-top: 16px;
	overflow: hidden;
}
.list ul li{
	width: 155px;
	height: 137px;
	float: left;
	background: #d1251d;
	margin-bottom: 24px;
	padding-top: 18px;
	
}
.list ul li:nth-child(2n){
	float: right;
}
.list ul li p{
	width: 148.5px;
	margin: 0 auto;
	font-size: 12px;
	/*transform: scale(0.9);*/
	color: #fff;
	
}
.h3{
	font-size: 15px;
	color: #fff;
	margin-bottom: 22px;
	margin: 10px 0 !important;
}
.list li div{
	color: #fff;
	text-align: left;
	width: 120px;
	margin: 0 auto;
	line-height: 1.5em;
}
.list1 div{
	/*line-height: 2em;*/
	width: 95% !important;
	text-align: center !important;
	}
.list2 div{
	width: 120px;
	text-align: center !important; 
	line-height: 2em !important;
}
.list3 div{
	line-height: 2em !important;
	text-align: center !important; 

}
.list4 div{
	width: 95% !important;
	text-align: center !important; 
	line-height: 1.5em !important;
}
.subimt{
	width: 355px;
	margin: 0 auto;
}
.txt{
	width: 305px;
	height: 63px;
	padding-left: 50px;
	
}
.subimt li {
	font-size: 18px !important;
	color: #aaa;
	margin-bottom: 22px;
	position: relative;
}
.subimt li i{
	position: absolute;
	left: 22px;
	top: 20px;
}
textarea{
	width: 305px;
	height: 105px;
	padding-left: 50px;
	padding-top: 20px;
}
.btntj{
	width: 355px;
	height: 44px;
	line-height: 44px;
	color: #fff;
	font-size: 18px;
	background: #d1251d;
	outline: none;
}
</style>
