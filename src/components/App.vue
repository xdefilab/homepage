<template>
  <div class="App">
    <Header />

    <section class="hero relative overflow-hidden">
      <div class="hero-bg w-full h-full text-center">
        <img src="../images/logoBg.png" class="w-8/12 inline-block" alt="" />
      </div>
      <div class="max-w-6xl mx-auto h-full relative z-10 px-5">
        <div class="flex items-center h-full md:w-1/2">
          <div class="-mt-12">
            <div class="text-6xl text-white font-medium leading-none">
              A Well Established <br />
              DeFi Protocol Stack
            </div>
            <div class="text-xl mt-12">
              The xDex, xFarm, xHalfLife and DAO Protocol has been audited and
              released on public Kovan Testnet.
            </div>
            <div class="text-xl mt-5">
              The xPerp and xNsure Protocol will release soon!
            </div>
            <br />
            <br />
            <a class="button" href="https://github.com/xdefilab/Whitepaper">
              WHITEPAPER
              <svg
                class="w-6 h-6"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <product-section
      v-for="(product, index) in products"
      :key="product.title"
      :title="product.title"
      :subtitle="product.subtitle"
      :image="product.image"
      :reverse="index % 2 === 1"
      :wave="index === 0 ? 'down' : index === 2 ? 'up' : null"
      :link="product.link"
    />

    <div class="bg-gray-100 -mt-20 py-32">
      <div
        class="max-w-6xl mx-auto px-5 flex flex-col space-y-8 md:space-x-10 md:space-y-0 md:flex-row"
      >
        <div v-for="card in productCards" :key="card.title" class="md:w-1/3">
          <product-card
            :title="card.title"
            :subtitle="card.subtitle"
            :image="card.image"
            :ready="card.ready"
            :link="card.link"
          />
        </div>
      </div>
    </div>

    <div class="bg-white text-gray-900 py-32">
      <div class="max-w-6xl mx-auto px-5">
        <h2
          class="text-4xl text-center font-medium flex items-center justify-center space-x-3 mb-32"
        >
          <img src="../images/title_stick.png" class="w-8 h-8" />
          <span>Farming Timetable</span>
          <img src="../images/title_stick.png" class="w-8 h-8" />
        </h2>

        <div
          v-for="(stage, index) in stages"
          :key="stage.title"
          class="flex justify-center"
        >
          <timeline-stage
            :stage="index + 1"
            :currentStage="1"
            :title="stage.title"
            :cardTitle="stage.cardTitle"
            :cardDescription="stage.cardDescription"
            :image="stage.image"
            :reverse="index % 2 === 1"
          />
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
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

const products = [
  {
    title: `XDex: Optimized Multi Asset AMM Dex`,
    subtitle: `Trustless and Permissionless. Accept any standard and
                non-deflating ERC20.`,
    image: productImage1,
    link: `https://swap.kovan.xdefi.com`,
  },
  {
    title: `XFarm: None for Pre-sale, Pre-mint`,
    subtitle: `Fair launch and Antifragile. XDEX token distributed 100% based on
              community consessus and participation.`,
    image: productImage2,
    link: `https://farm.kovan.xdefi.com`,
  },
  {
    title: `XHalfLife: Trustless Money Stream`,
    subtitle: `Any XDEX from XFarm voting pool, ordinary pool, and founder 
              <br />
              teams' fund, is rewarded through xHalfLife protocol. Withdrawable
              reward updated in every block.
              <br />`,
    image: productImage3,
    link: `https://stream.kovan.xdefi.com`,
  },
]

const productCards = [
  {
    title: `DAO`,
    subtitle: `Upvoting And Downvoting for Any<br/>Farming Pools`,
    image: productCardDao,
    ready: true,
    link: `https://vote.kovan.xdefi.com`,
  },
  {
    title: `XPerp`,
    subtitle: `Perpetual Protocol With<br/>Shadow AMM`,
    image: productCardXperp,
  },
  {
    title: `XNsure`,
    subtitle: `European Call And Put Option With<br/>AMM Pools`,
    image: productCardXnsure,
  },
]

const stages = [
  {
    title: `From Block #1 to #40000`,
    cardTitle: `Early Stage Farming Pools`,
    cardDescription: `DEX Indexes<br/>
Community Establishment<br/>
Medium Connections
`,
    image: stage1,
  },
  {
    title: `From Block #40001 to #120000`,
    cardTitle: `Target Specific User Groups`,
    cardDescription: `NFT Indexes<br/>
xPerp Audited`,
    image: stage2,
  },
  {
    title: `From Block #120001 to #280000`,
    cardTitle: `Permissionless Farming Pools`,
    cardDescription: `1st Stage Milestone Airdrop<br/>
xPERP launch<br/>
xNsure development`,
    image: stage3,
  },
  {
    title: `From Block #280001 to #600000`,
    cardTitle: `General User Groups`,
    cardDescription: `General DeFi / ETH Mining Users<br/>
xNsure Audited`,
    image: stage4,
  },
]

export default defineComponent({
  components: {
    Header,
    Footer,
    ProductSection,
    ProductCard,
    TimelineStage,
  },

  setup() {
    return {
      products,
      productCards,
      stages,
    }
  },
})
</script>

<style scoped>
.App {
}

.hero {
  background-image: linear-gradient(180deg, #8d10fb 0%, #0ec7bd 100%);
  height: 690px;
}

.hero-bg {
  height: 564px;
  padding-top: 120px;
  z-index: 1;
  position: absolute;
}
</style>
