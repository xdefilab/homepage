<template>
	<header class="header">
		<div class="max-w-6xl mx-auto px-5">
			<div class="h-14 flex justify-between items-center" style="position: relative;">
				<img src="../images/logo.png" alt="logo" class="h-8" />
				<div class="flex items-center space-x-10 wapStyle">
					<div v-for="(item,id) in nav" :key="id">

						<div class="language" v-if="id==len">
							<span @click="chang(false)"><img src="../images/ch-logo.png"></span>
							<span @click="chang(true)"><img src="../images/en-logo.png"></span>
						</div>
						<a :href="item.url" v-if="id==2" @click="pop=!pop" class="hover">
							{{item.name}} <em><img src="../images/down.png"></em>
							<div class="float">
								<a v-for="(obj,oid) in item.list" :href="obj.url">{{obj.title}}</a>
							</div>
						</a>
						<a :href="item.url" v-else :class="id==len?`goapp`:''">
							{{item.name}}
						</a>
						

					</div>
				</div>

				<div class="language languagewap">
					<span @click="chang(false)"><img src="../images/ch-logo.png"></span>
					<span @click="chang(true)"><img src="../images/en-logo.png"></span>
				</div>
				<div class="navIcon" @click='show=true'><i class="el-icon-more"></i></div>
				<div class="mask" v-show="show">
					<div class="draw">
						<i class="el-icon-close" @click='show=false'></i>
						<div v-for="(item,id) in nav" :key="id" :class="id==len?`goapp`:''">
							<a :href="item.url" :class="pop?'fn fn1':'fn'" v-if="id==2" @click="pop=!pop">
							<img src="../images/down.png" >
							{{item.name}}
							</a>
							<a :href="item.url" v-else>
							{{item.name}}
							</a>
							<div class="wfloat" v-show="pop">
								<a v-for="(obj,oid) in item.list" :href="obj.url">{{obj.title}}</a>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</header>
</template>
<script>
	import 'element-ui/lib/theme-chalk/index.css';
	export default {
		props: ['nav', 'changeLang'],
		data() {
			let len = this.nav.length - 1
			return {
				len,
				pop:false,
				show:false
			}
		},
		methods: {
			chang(type) {
				this.$emit('changeLang', type)
			}
		}
	}
</script>
<style>
	
	.float{
		display: none;
		position: absolute;
		    top: 45px;
		    color: #333;
		    line-height: 30px;
		    box-sizing: border-box;
		    padding: 20px 0;
		    background-color: rgb(255, 255, 255);
		    z-index: 9999;
		    text-align: center;
		    border-radius: 10px;
		box-shadow: 0 0 10px #000;
	}
	.float a{
		display: block;
		width: 100%;
		padding: 0 20px;
		height: 30px!important;
		line-height: 30px!important;
	}
	.float a:hover{
		background-color: rgba(219, 46, 124,0.1);
	}
	.goapp {
		display: block;
		height: 38px;
		line-height: 38px;
		margin-right: 16px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		box-sizing: border-box;
		border-radius: 30px;
		padding: 0 16px;

		font-weight: 500;
		color: #fff;
		background-color: #db2e7c;
	}
	.goapp:hover{
		opacity: 0.8;
	}

	.language {
		float: left;
		width: 60px;
		margin-right: 20px;
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
	}

	.languagewap {
		display: none;
	}

	.language span {
		display: block;
		width: 25px;
		height: 25px;
		color: #db2e7c;
		cursor: pointer;
		font-size: 12px;
		border-radius: 50%;
		text-align: center;
		line-height: 25px;
		
	}
	.language span img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.wfloat{
		position: relative;
		width: 100%;
		box-sizing: border-box;
		padding-left: 20px;
		font-size: 0.26rem;
	}
	.mask{
		position: fixed;
		    top: 0;
		    left: 0;
		    width: 100%;
		    height: 100vh;
		    z-index: 99;
		    background: rgba(0,0,0,0.6);
	}
	.draw{
		position: absolute;
		    right: 0;
		    height: 100vh;
		    width: 170px;
		    box-sizing: border-box;
		    padding: 80px 20px;
		    background: rgb(22, 22, 56);
	}
	.draw a{
		display: block;
		margin-bottom: 20px;
	}
	.draw i{
		position: absolute;
		right: 20px;
		top: 20px;
	}
	.navIcon{
		display: none;
	}
	.wapStyle a{
		height: 38px;
		line-height: 38px;
	}
	
	.wapStyle a img{
		width: 13px;
		margin-left: 10px;
	}
	.hover{
		display: flex;
		align-items: center;
		cursor: pointer;
	}
	.hover:hover .float{
		display: block;
	}
	.hover:hover em img{
		
		transform: rotate(180deg);
	}
	.fn{
		display: flex!important;
		align-items: center;
	}
	.fn img{
		
		margin-right: 10px;
		width: 13px;
	}
	.fn1 img{
		transform: rotate(180deg);
	}
	@media screen and (max-width:900px) {
		.wapStyle {
			display: none;
		}
.navIcon{
		display: block;
	}
		.languagewap {
			margin-top: 0px;
			display: flex;
			position: absolute;
			right: 10px;
		}
	}
</style>
