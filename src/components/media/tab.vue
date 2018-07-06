<template>
  <div class="tab">
	  <ul class="tab_ul">
			<li @click="clicks(0)" :class="{'bf':show1}">
				<p class="num">
					<img src="../../../static/img/01.png" alt="">
				</p>
				<p class="num_sm">
					<span>
					96156北京市社区服务栏
				</span></p>
			</li>
			<li @click="clicks(1)" :class="{'bf':show2}">
				<p class="num">
					<img src="../../../static/img/02.png" alt="">
				</p>
				<p class="num_sm">
					<span>
					苹果型材高端社区灯箱
				</span></p>

			</li>
			<li @click="clicks(2)" :class="{'bf':show3}">
				<p class="num">
					<img src="../../../static/img/03.png" alt="">
				</p>
				<p class="num_sm">
					<span>
						道闸门
					</span>
				</p>

			</li>
		</ul>
		<ul class="tab_li">
			<li v-show="show1">
				<div style="overflow: hidden;">
					<div class="l_img">
						<img src="../../../static/images/fel.png">
					</div>
					<div class="r_sm">
						<ul>
							<li>尺&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;寸：148cm×148cm</li>
							<li>广 告 &nbsp;位：200cm×100cm</li>
							<li>公益橱窗：200cm×100cm</li>
							<li class="red">价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格：普通小区2200元/月 中高档小区4000元/月</li>
						</ul>
					</div>
				</div>
				<p class="p">这种规格的广告牌主要是分布在社区里面的主要出入口、主要交通路口、活动中心等社区内人流量最为密集的区域。上方为企业广告发布区，下方为社区公益宣传橱窗。</p>
				
			</li>
			<li  v-show="show2">
				<div style="overflow: hidden;">
					<div class="l_img">
						<img src="../../../static/images/gddx.png">

					</div>
					<div class="r_sm">
						<ul>
							<li>高清灯箱 / LED</li>
							<!--<li>规&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格：148cm×148cm</li>
							<li>广告面积：2.78m²</li>
							
							<li class="red">价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格：7000元/月</li>-->
							<li><span class="red">
								高清灯箱
							</span> 148cm×148cm 2.78m²  7000/月</li>
							<li><span class="red">LED&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 148cm×30cm 0.45m²&nbsp;&nbsp;2000/月</li>
						</ul>
					</div>
				</div>
				<p class="p">HP720高清灯箱片 内打灯效果 拉丝不锈钢—防止生锈 钢化玻璃面板-轻透无划痕</p>
				
			</li>
			<li v-show="show3">
				<div style="overflow: hidden;">
					<div class="l_img">
						<img src="../../../static/images/dzm.png">

					</div>
					<div class="r_sm">
						<ul>
							<li>规&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格：80cm*300cm / 50*380cm</li>
							<li>广 告 &nbsp;位：暂无</li>
							<li>公益橱窗：暂无</li>
							<li class="red">价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格：待定</li>
						</ul>
					</div>
				</div>
				<p class="p">这种规格的广告牌主要是分布在为写字楼、住宅、办公室、楼宇、公共通道等出入口。</p>
				
			</li>
		</ul>
		<publicSm china="产品展示" english="COMPANY INTRODUCTION"></publicSm>
		<ul class="show_is" v-show="show1">
			<li><img src="../../../static/images/4.png"></li>
			<li><img src="../../../static/images/5.png"></li>
			<li><img src="../../../static/images/6.png"></li>
			<li><img src="../../../static/images/7.png"></li>
			<li><img src="../../../static/images/8.png"></li>
			<li><img src="../../../static/images/9.png"></li>
			<li><img src="../../../static/images/10.png"></li>
			<li><img src="../../../static/images/30.png"></li>
			<li><img src="../../../static/images/31.png"></li>
			<li><img src="../../../static/images/32.png"></li>
			<!--<li><img src="../../../static/images/33.png"></li>-->
			<!--<li><img src="../../../static/images/4.png"></li>-->
		</ul>
		<ul class="show_is" v-show="show2">
			<li><img src="../../../static/images/dengxiang1.png"></li>
			<li><img src="../../../static/images/dengxiang2.png"></li>
			<li><img src="../../../static/images/dengxiang3.png"></li>
			<li><img src="../../../static/images/dengxiang4.png"></li>
			<li><img src="../../../static/images/dengxiang5.png"></li>
			<li><img src="../../../static/images/dengxiang6.png"></li>
			<li><img src="../../../static/images/dengxiang7.png"></li>
			<li><img src="../../../static/images/dengxiang8.png"></li>
			<li><img src="../../../static/images/dengxiang9.png"></li>
			<li><img src="../../../static/images/dengxiang10.png"></li>
			<!--<li><img src="../../../static/images/33.png"></li>-->
			<!--<li><img src="../../../static/images/4.png"></li>-->
		</ul>
		<ul class="show_is" v-show="show3">
			<li><img src="../../../static/images/dz1.png"></li>
			<li><img src="../../../static/images/dz2.png"></li>
			<li><img src="../../../static/images/dz3.png"></li>
			<li><img src="../../../static/images/dz4.png"></li>
			<li><img src="../../../static/images/dz5.png"></li>
			<li><img src="../../../static/images/dz6.png"></li>
			<li><img src="../../../static/images/dz7.png"></li>
			<li><img src="../../../static/images/dz8.png"></li>
			<li><img src="../../../static/images/dz9.png"></li>
			<li><img src="../../../static/images/dz10.png"></li>
			<!--<li><img src="../../../static/images/33.png"></li>-->
			<!--<li><img src="../../../static/images/4.png"></li>-->
		</ul>
		<p style="clear: both;"></p>
		
  </div>
  
</template>

<script>
export default {
  name: 'tab',
  data () {
    return {
      msg: 'index',
			show:[true,false,false],
			show1:true,
			show2:false,
			show3:false
    }
  },
	methods:{
		clicks(i){
			
			for(var j = 0 ;j<this.show.length;j++){
				if(i!=j){
					this.show[j] = false;
				}
			}
			this.show[i] = true;
			this.show1 = this.show[0];
			this.show2 = this.show[1];
			this.show3 = this.show[2];
			// console.log(this.show)//
			
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
.tab_ul{
	width: 355px;
	margin: 13px auto;
	display: flex;
	display: -webkit-flex;
	display: -ms-flexbox;
	/*overflow: hidden;*/
	flex-direction: row;
	justify-content:space-between;
	margin-bottom:30px;
	
}

.tab_ul li{
	background: #d2261e;
	width: 107px;
	height: 90px;
	position: relative;
/*	flex: 3;*/
}
.bf{
	box-shadow: 1px 3px 7px 1px rgba(210,38,30,.35);
}
.tab_ul li.bf:before{
	  content: " ";
    display: block;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #d2261e;
    position: absolute;
    bottom: -7px;
    left:43px;
		/*background: red;*/
}

.num{
	width: 22px;
	height: 16px;
	margin: 0 auto;
	margin-top: 17.5px;
	margin-bottom: 8px;
}
.num img{
	width: 100%;
	height: 100%;
}
.num_sm{
	
	color: #fff;
	text-align: center;
	width: 75px;
	margin: 0 auto;
	
	/*line-height: 1.2em;*/
}
.num_sm span{
	font-size: 9px;
/*	transform: scale(0.9);*/
	display: inline-block;
	line-height: 1.3em;
	
}
.l_img{
	width: 178px;
	height: 134px;
	float: left;
	margin-left: 10px;
}
.l_img img{
	width: 100%;
	height: 100%;
}
.r_sm{
	width: 146px;
	float: left;
	margin-left: 10px;
	/*clear: both;*/
}
.r_sm li{
	margin: 0px 0;
	text-align: left;
	line-height: 27px;
	color: #333;
}
.red{
	color:#d2261e !important;
}
.p{
	clear: both;
	margin: 0 auto;
	margin-top: 24px;
	text-align: left;
	width: 355px;
	font-size: 12px;
	line-height: 18px;
	
}
.show_is{
	width: 348px;
	margin: 0 auto;
	
}
.show_is li{
	height: 119px;
	width: 156px;
	box-shadow: 0 3px 7px 0 rgba(35,24,21,.2);
	margin-right: 10px;
	float: left;
	margin-bottom: 10px;
	padding:6px;
}
.show_is li:nth-child(2n){
	margin-right: 0;
}
.show_is li img{
	width: 100%;
	height: 100%;
}
</style>
