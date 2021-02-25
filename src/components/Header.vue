<template>
	<header class="header">
		<div class="max-w-6xl mx-auto px-5">
			<div class="h-14 flex justify-between items-center" style="position: relative;">
				<img src="../images/logo.png" alt="logo" class="h-8" />
				<div class="flex items-center space-x-10 wapStyle">
					<div v-for="(item,id) in nav" :key="id">

						<div class="language" v-show="id==len">
							<span @click="chang(false)"><img src="../images/ch-logo.png"></span>
							<span @click="chang(true)"><img src="../images/en-logo.png"></span>
						</div>
						<a :href="item.url" :class="id==len?`goapp`:''">
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
						<a v-for="(item,id) in nav" :key="id" :href="item.url" :class="id==len?`goapp`:''">
							{{item.name}}
						</a>
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
