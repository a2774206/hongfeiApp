<template>
  <div class="service">
 	 	 <publicSm china="服务流程" english="SERVICE FLOW"></publicSm>
 	 	 <div>
			<ul class="service_list ser1" style="justify-content: space-between;margin:0 auto;">
				<li style="margin:0">
					<p><img src="../../../static/img/hzqt1.png"></p>
					<p>合作洽谈</p>
				</li>
				<li>
					<p><img src="../../../static/img/ddde1.png"></p>
					<p>定点定位</p>
				</li>
				<li>
					<p><img src="../../../static/img/qdht1.png"></p>
					<p>签订合同</p>
				</li>
			</ul>
 	 	 	<ul class="service_list">
 	 	 		
 	 	 		<li>
 	 	 			<p><img src="../../../static/img/hmsj1.png"></p>
 	 	 			<p>画面设计</p>
 	 	 		</li>
 	 	 		<li>
 	 	 			<p><img src="../../../static/img/dysk1.png"></p>
 	 	 			<p>打印上刊</p>
 	 	 		</li>
 	 	 		<li>
 	 	 			<p><img src="../../../static/img/hmwh1.png"></p>
 	 	 			<p>画面维护</p>
 	 	 		</li>
 	 	 		<li>
 	 	 			<p><img src="../../../static/img/skbg1.png"></p>
 	 	 			<p>下刊报告</p>
 	 	 		</li>
 	 	 		
 	 	 	</ul>
 	 	 </div>
  </div>
  
</template>

<script>
export default {
  name: 'service',
  data () {
    return {
      msg: 'service'
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
.service_list{
	display: flex;
	flex-flow:wrap;
	margin-bottom: 14px;
}
.service_list li{
	width:80px;
	height:90px;
	background: #d2261e;
	margin-left: 11px;
	display: block;
	float: left;
	margin-bottom: 9px;

}
.service_list{
	clear: both;
	
	overflow: hidden;
	color: #fff;
}
.service_list li p:first-child{
	margin-top: 12px;
	margin-bottom: 5px;
}
.service_list li img{
	width: 40px;
	height: 39px;
	transform: scale(0.8);
}
.ser1{
	width:273px !important;
}
</style>
