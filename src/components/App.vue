<template>
	<div class="App">
		<Header :nav="language.nav" @changeLang="changeLang"/>
		
		<section class="hero relative overflow-hidden">
			<div class="hidden lg:block hero-bg w-full h-full text-center">
				<img src="../images/logoBg.png" class="inline-block -ml-20" alt="" />
			</div>
			<div class="max-w-6xl mx-auto h-full relative z-10 px-5">
				<div class="flex items-center h-full md:w-1/2">
					<div class="md:-mt-12">
						<div class="text-4xl md:text-6xl text-white font-medium leading-none" v-html="language.font1"></div>
						<div class="text-xl mt-12" v-html="language.font2"></div>
						<div class="text-xl mt-5" v-html="language.font3"></div>
						<br />
						<br />
						<a class="button" :href="language.font4Link">
							{{language.font4}}
							<svg class="w-6 h-6" width="1em" height="1em" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
								 clipRule="evenodd" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>

		<product-section v-for="(product, index) in language.products" :key="product.title" :font="product.font" :title="product.title"
		 :subtitle="product.subtitle" :image="product.image" :reverse="index % 2 === 1" :wave="index === 0 ? 'down' : index === 2 ? 'up' : null"
		 :link="product.link" />

		<div class="bg-gray-100 md:-mt-20 py-16 md:py-32">
			<div class="max-w-6xl mx-auto px-5 flex flex-col space-y-8 md:space-x-10 md:space-y-0 md:flex-row">
				<div v-for="card in language.productCards" :key="card.title" class="md:w-1/3">
					<product-card :title="card.title" :language="language" :subtitle="card.subtitle" :image="card.image" :ready="card.ready"
					 :link="card.link" :font="card.font"/>
				</div>
			</div>
		</div>

		<div class="bg-white text-gray-900 py-32">
			<div class="max-w-6xl mx-auto px-5">
				<h2 class="text-2xl md:text-4xl text-center font-medium flex items-center justify-center space-x-3 mb-12 md:mb-32">
					<img src="../images/title_stick.png" class="w-8 h-8" />
					<span>{{language.font5}}</span>
					<img src="../images/title_stick.png" class="w-8 h-8" />
				</h2>

				<div v-for="(stage, index) in language.stages" :key="stage.title" class="flex justify-center">
					<timeline-stage :stage="index + 1" :currentStage="1" :title="stage.title" :cardTitle="stage.cardTitle" :font="stage.font"
					 :cardDescription="stage.cardDescription" :image="stage.image" :reverse="index % 2 === 1" />
				</div>
			</div>
		</div>

		<Footer :footer="language.footer"/>
	</div>
</template>

<script lang="ts">
	import {
		defineComponent,
		data,
		methods
	} from 'vue'
	import ProductSection from './ProductSection.vue'
	import Header from './Header.vue'
	import Footer from './Footer.vue'
	import productImage1 from '../images/product_image_1.png'
	import productImage2 from '../images/product_image_2.png'
	import productImage3 from '../images/product_image_3.png'
	import productCardDao from '../images/product_card_dao.png'
	import productCardXperp from '../images/product_card_xperp.png'
	import productCardXnsure from '../images/product_card_xnsure.png'
	import stage1 from '../images/stage_1.png'
	import stage2 from '../images/stage_2.png'
	import stage3 from '../images/stage_3.png'
	import stage4 from '../images/stage_4.png'
	import ProductCard from './ProductCard.vue'
	import TimelineStage from './TimelineStage.vue'
	const lan = {
		zh: {
			footer:[
				{
					name:'协议',
					list:[
						{
							name:'xDex',
							link:'https://swap.kovan.xdefi.com/#/swap'
						},{
							name:'xHalfLife',
							link:'https://halflife.kovan.xdefi.com/#/'
						}
					]
				},{
					name:'关于我们',
					list:[
						{
							name:'白皮书',
							link:'https://docs.xdefi.com/en/whitepaper'
						},{
							name:'Medium',
							link:'https://xdefilab.medium.com/'
						}
					]
				},{
					name:'开始挖矿',
					url:"https://swap.kovan.xdefi.com/#/swap"
				}
			],
			nav:[
				{
					name:'首页',
					url:"https://xdefi.com"
				},{
					name:'风险提示',
					url:"https://docs.xdefi.com/cn/gong-gao/risk"
				},{
					name:'审计报告',
					url:"https://github.com/xdefilab/xdefi-base/tree/master/audits"
				},{
					name:'知识库',
					url:"https://docs.xdefi.com/cn"
				},{
					name:'开始挖矿',
					url:"https://swap.kovan.xdefi.com/#/swap"
				}
			],
			font1: '完善的去中心化金融协议栈',
			font2: 'xDex，xFarm，xHalfLife和DAO协议已经通过审计，并将很快在以太坊主网上发布。',
			font3: 'xPerp和xOption协议也即将发布！',
			font4: '白皮书',
			font4Link: 'https://docs.xdefi.com/cn/whitepaper',
			font5: '挖矿时间表',
			stages :[{
						title: `从区块#1-60000将共计挖出9600000个XDEX代币，每个区块160个`,
						cardTitle: `早期挖矿池`,
						cardDescription: `DEX指数<br/>社区建立<br/>Medium宣发`,
						image: stage1,
						font:'阶段'
					},
					{
						title: `从区块# 60001-180000将共计挖出9600000个XDEX代币，每个区块80个`,
						cardTitle: `特定目标用户群`,
						cardDescription: `NFT指数<br/>xOption审计`,
						image: stage2,
						font:'阶段'
					},
					{
						title: `从区块# 180001-420000将共计挖出9600000个XDEX代币，每个区块40个`,
						cardTitle: `无需许可的挖矿池`,
						cardDescription: `第一阶段里程碑空投<br/>xOption启动/ xSTA开发`,
						image: stage3,
						font:'阶段'
					},
					{
						title: `从区块# 420001-900000将共计挖出9600000个XDEX代币，每个区块20个`,
						cardTitle: `普通用户群`,
						cardDescription: `普通DeFi / ETH挖矿用户<br/>xSTA审计`,
						image: stage4,
						font:'阶段'
					},
				],
			productCards: [{
					title: `DAO`,
					subtitle: `赞成和反对任何社区提案的挖矿池`,
					image: productCardDao,
					ready: true,
					link: `https://vote.kovan.xdefi.com`,
					font:'登录DAO,即将发布'
				},
				{
					title: `xPerp`,
					subtitle: `AMM形式的永续合约`,
					image: productCardXperp,
					font:'登录XPerp,即将发布'
				},
				{
					title: `xOption`,
					subtitle: `AMM挖矿池形式的欧式看涨和看跌期权`,
					image: productCardXnsure,
					font:'登录XOption,即将发布'
				},
			],
			products: [{
					title: `优化的多资产AMM Dex`,
					subtitle: `无需信任和无需许可的，接受任何标准的且非通缩型ERC20代币。`,
					image: productImage1,
					link: `https://swap.kovan.xdefi.com`,
					font:'登录'
				},
				{
					title: `xFarm : 无预售，无预挖`,
					subtitle: `公平启动和抗脆弱性。XDEX代币基于社区的共识和参与度进行了100％的分配。`,
					image: productImage2,
					link: `https://farm.kovan.xdefi.com`,
					font:'登录'
				},
				{
					title: `xHalfLife : 无需授信的资金流`,
					subtitle: `来自xFarm投票池、普通池和创始团队的任何XDEX代币都是通过xHalfLife协议进行解锁，可解锁奖励在每个区块中都会更新`,
					image: productImage3,
					link: `https://halflife.kovan.xdefi.com`,
					font:'登录'
				},
			],
		},
		en: {
			footer:[
				{
					name:'Protocol',
					list:[
						{
							name:'xDex',
							link:'https://swap.kovan.xdefi.com/#/swap'
						},{
							name:'xHalfLife',
							link:'https://halflife.kovan.xdefi.com/#/'
						}
					]
				},{
					name:'About Us',
					list:[
						{
							name:'Whitepaper',
							link:'https://docs.xdefi.com/en/whitepaper'
						},{
							name:'Medium',
							link:'https://xdefilab.medium.com/'
						}
					]
				},{
					name:'Enter App',
					url:"https://swap.kovan.xdefi.com/#/swap"
				}
			],
			nav:[
				{
					name:'Home',
					url:"https://xdefi.com"
				},{
					name:'Risk Disclosure',
					url:"https://docs.xdefi.com/en/announcements/risk-disclosure"
				},{
					name:'Audit Report',
					url:"https://github.com/xdefilab/xdefi-base/tree/master/audits"
				},{
					name:'Docs',
					url:"https://docs.xdefi.com/en"
				},{
					name:'Enter App',
					url:"https://swap.kovan.xdefi.com/#/swap"
				}
			],
			font1: 'A Well Established <br />DeFi Protocol Stack',
			font2: 'The xDex, xFarm, xHalfLife and DAO Protocols have been audited and released on Ethereum mainnet.',
			font3: 'The xPerp and xOption Protocols will release soon!',
			font4: 'WHITEPAPER',
			font4Link: 'https://docs.xdefi.com/en/whitepaper',
			font5: 'Farming Timetable',
			stages: [{
						title: `9600000 tokens for block # 1-60000, 160 each`,
						cardTitle: `Early Stage Farming Pools`,
						cardDescription: `DEX Indexes<br/>
			Community Establishment<br/>
			Medium Connections
			`,
						image: stage1,
						font:'Stage'
					},
					{
						title: `9600000 tokens for block # 60001-180000, 80 each`,
						cardTitle: `Target Specific User Groups`,
						cardDescription: `NFT Indexes<br/>
			xOption Audited`,
						image: stage2,
						font:'Stage'
					},
					{
						title: `9600000 tokens for block # 180001-420000, 40 each`,
						cardTitle: `Permissionless Farming Pools`,
						cardDescription: `1st Stage Milestone Airdrop<br/>
			xOption launch / xSTA development`,
						image: stage3,
						font:'Stage'
					},
					{
						title: `9600000 tokens for block # 420001-900000, 20 each`,
						cardTitle: `General User Groups`,
						cardDescription: `General DeFi / ETH Mining Users<br/>
			xSTA Audited`,
						image: stage4,
						font:'Stage'
					},
				],
			productCards: [{
					title: `DAO`,
					subtitle: `Upvoting And Downvoting for Any<br/>Farming Pools`,
					image: productCardDao,
					ready: true,
					link: `https://vote.kovan.xdefi.com`,
					font:'LAUNCH DAO,RELEASE SOON'
				},
				{
					title: `xPerp`,
					subtitle: `Perpetual Protocol With<br/>Shadow AMM`,
					image: productCardXperp,
					font:'LAUNCH XPerp,RELEASE SOON'
				},
				{
					title: `xOption`,
					subtitle: `European Call And Put Option With<br/>AMM Pools`,
					image: productCardXnsure,
					font:'LAUNCH XOption,RELEASE SOON'
				},
			],
			products: [{
					title: `xDex: Optimized Multi Asset AMM Dex`,
					subtitle: `Trustless and Permissionless. Accept any standard and
			    non-deflating ERC20.`,
					image: productImage1,
					link: `https://swap.kovan.xdefi.com`,
					font:'Launch'
				},
				{
					title: `xFarm: None for Pre-sale, Pre-mint`,
					subtitle: `Fair launch and Antifragile. XDEX token distributed 100% based on
			  community consessus and participation.`,
					image: productImage2,
					link: `https://farm.kovan.xdefi.com`,
					font:'Launch'
				},
				{
					title: `xHalfLife: Trustless Money Stream`,
					subtitle: `Any XDEX from xFarm voting pool, ordinary pool, and founder 
			  <br />
			  teams' fund, is rewarded through xHalfLife protocol. Withdrawable reward will update in every block
			  <br />`,
					image: productImage3,
					link: `https://halflife.kovan.xdefi.com`,
					font:'Launch'
				},
			],
		}
	}


	export default {
		name: 'index',
		components: {
			Header,
			Footer,
			ProductSection,
			ProductCard,
			TimelineStage,
		},
		data() {
			return {
				language: lan.en,//true en,false zh
		
			}
		},
		methods: {
			changeLang(type) {
				this.language = type ? lan.en : lan.zh
			}
		}
	}
</script>

<style scoped>
	.App {}

	.hero {
		background-image: linear-gradient(180deg, #8d10fb 0%, #0ec7bd 100%);
		@apply py-20;
	}

	@screen md {
		.hero {
			@apply py-0;
			height: 690px;
		}
	}

	.hero-bg {
		height: 564px;
		z-index: 1;
		position: absolute;
		bottom: 0px;
	}

	.hero-bg img {}
</style>
