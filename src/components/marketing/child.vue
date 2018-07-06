<template>
 <div id="child">
 	 <div class="banners">
 	 	 <div class="banImg">
 	 	 		<img src="../../../static/img/5.png">
 	 	 </div>
 	 	</div>
		<div class="child-sm">
			我们不仅提供社区媒体广告服务，还提供一站式整合营销传播服务，如社区巡展、社区讲座、社区路演等消费互动活动。针对北京2600个社区目标人群，以多种传播方式为广告客户和受众实现点对点的信息交互，让传播直达终端。
		</div>
		<div class="img_1">
			<img src="../../../static/img/1_0.png" />
		</div>
		<h3 style="font-size: 18px;margin: 20px 0;">社区巡展活动</h3>
		<p class="child_p">社区巡展活动是指产品/服务以现场互动的形式出现在小区大门口或活动中心等人流集中处，以中高收入、年龄段、地理位置等为依据甄选楼盘，对广大业主家庭开展的一种综合推广方式。既具有传统广告宣传的作用，又因其特有的易接近性而形成良好现场互动，能够清晰的了解目标市场需求。</p>
		<p class="child_p">周期性的小区巡展活动不但可以强化产品在目标人群中的形象，同时可增加目标人群对于产品的熟悉程度，促使其购买行为由尝试性向固定购买转化。</p>
		<p class="child_p">服务内容：结合宣传栏广告发布，甄选住宅区、活动策划、租赁场地、活动场地布置、展览展示服务、活动宣传、提供监测报告。</p>
		 <div class="img_2">
			<img src="../../../static/img/2_0.png" />
		 </div>
		 <h3 style="font-size: 18px;margin: 20px 0;">社区讲座活动</h3>
		 <p class="child_p">
			 活动形式：社区人流集中区设大型会议区，多个住宅区做主题性讲演或讲座活动，针对大量目标家庭用户对企业产品或服务做主题宣传、说明。
		</p>
		<p class="child_p">
			服务内容：结合宣传栏广告发布，甄选住宅区、活动策划、租赁场地、提供会务展示活动服务、提供监测报告。
		</p>
		
		<div class="img_3">
			<img src="../../../static/img/3_0.png" />
		</div>
		<h3 style="font-size: 18px;margin: 20px 0;">消费互动活动</h3>
		<p class="child_p">
			活动形式：住宅中心活动区或中心广场设大型活动互动区，单个或联合多个商家举办，组织家庭用户参与的主题活动，针对大量目标家庭用户定向宣传促销。例如业主见面会、社区文化节等形式。
		</p>
		<p class="child_p">
			服务内容：结合宣传栏广告发布，甄选住宅区、活动策划、租赁场地、活动场地布置、家庭用户组织、互动活动组织、活动宣传、提供监测报告。
		</p>
 </div>
 
</template>

<script>


export default {
  name: 'child',
  data () {
    return {
      msg: 'child'
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
.pre_title p{
	color: #333;
	font-size: 14px;
	text-indent: 2em;
	line-height: 2em;
	text-align: left;
	width: 355px;
	margin:0 auto;
	margin-bottom: 25px;
}
.child-sm{
	 width: 354px;
	height: 114px;
	line-height: 1.8em;
	margin: 21px auto 19px auto;
	color: #d1251e;
	font-size: 14px;
	text-indent: 2em;
	
	text-align: left;
}
.img_1 img,.img_2 img,.img_3 img{
	width: 100%;
	height: 100%;
}
.img_1{
	width: 260px;
	height: 191px;
	margin: 0 auto;
}
.img_2{
	width: 317px;
	height: 292px;
	margin: 0 auto;
}
.img_3{
	width: 350px;
	height: 291px;
	margin: 0 auto;
}
.child_p{
	text-align: left;
	text-indent: 2em;
	line-height: 2em;
	font-size: 14px;
	width: 350px;
	margin: 0 auto;
	margin-bottom: 10px;
}
</style>
