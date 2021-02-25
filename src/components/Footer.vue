<template>
  <div class="footer" height="78px">
	  <div class="footerTop">
		  <a href="/" class='logo'>
		    <img src="../images/logo.png" alt="pebbles" height='30'>
		  </a>
		  <div class="right">
			  <div v-for="(item,id) in footer" :key="id" :class="id==2?'p0':'p1'">
				  <a class="goapp" v-if="id==2" :href="item.url">{{item.name}}</a>
				  <h3 v-else>{{item.name}}</h3>
				  <a v-for="(url,oid) in item.list" :href="url.link" :key="oid" v-if="id<2">{{url.name}}</a>
			  </div>
			  
			
		  </div>
	  </div>
    <div class="footerContent">
      <p>
        Copyright © 2021 xDeFi
      </p>
      <div class='contactIcons'>
        <a class='iconContent' href="https://www.chainnews.com/u/895866208677.htm" target="_blank">
          <div class='chainNews'></div>
        </a>
        <a class='iconContent' href="https://xdefilab.medium.com/" target="_blank">
          <font-awesome-icon :icon="['fab', 'medium-m']" size="lg"/>
        </a>
        <a class='iconContent' href="https://twitter.com/xdefilab" target="_blank">
          <font-awesome-icon :icon="['fab', 'twitter']" size="lg"/>
        </a>
        <a class='iconContent' href="https://github.com/xdefilab" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" size="lg"/>
        </a>
        <a class='iconContent' href="https://discord.gg/SuXhDHbAN3" target="_blank">
          <font-awesome-icon :icon="['fab', 'discord']" size="lg"/>
        </a>
        <a class='iconContent' href="https://t.me/xdeficn" target="_blank">
          <font-awesome-icon :icon="['fab', 'telegram-plane']" size="lg"/>
          <span class='lang'>中</span>
        </a>
        <a class='iconContent' href="https://t.me/xdefilab" target="_blank">
          <font-awesome-icon :icon="['fab', 'telegram-plane']" size="lg"/>
          <span class='lang'>EN</span>
        </a>
        <div class='weixin'>
          <div class='iconContent' slot="reference" @click="showWeixin">
            <font-awesome-icon :icon="['fab', 'weixin']" size="lg"/>
          </div>
          <div :class="['popover', weixin ? 'show' : 'hide']">
            <img src='../images/wechat.png' alt='' width='150'/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  props:['footer'],
  data(){
    return {
      weixin: false
    }
  },
  methods: {
    showWeixin(){
      this.weixin = !this.weixin;
    }
  }
}
</script>


<style scoped>
  .weixin{
    position: relative;
  }
  .popover{
    position: absolute;
    bottom: 50px;
    left: 10px;
    background: #000;
    width: 200px;
    padding: 20px;
    text-align:center;
    
  }
  .popover.show{
    display: block;
  }
  .popover.hide{
    display: none;
  }
  .popover img{
    display: inline;
  }

  .logo img{
    height: 30px;
  }
  .footer {
    background: #161638;
    width: 100%;
    

  }
  .footerTop{
	  position: relative;
	  width: 100%;
	  box-sizing: border-box;
	  padding: 30px;
	
	  display: flex !important;
	  justify-content: space-around;

  }
  .right{
	  width: 800px;
	  max-width: 80%;
	  display: flex;
	  justify-content: flex-end;
	  text-align: left;
  }
  .p1{
	  width: 40%;
  }
  .right a{
	  display: block;
	  font-size: 14px;
	  color: rgba(83, 84, 132, 1);
  }
  .right h3{
	  font-size: 16px;
	  margin-bottom: 20px;
	  color: rgba(83, 84, 132, 1);
  }
  a.goapp{
	  color: rgb(219, 46, 124);
  }
  .footerContent {
    padding: 10px 0;
    width: 100%;
    text-align: center;
    display: flex !important;
    justify-content: space-around;
    align-items: center !important;

  }
  .footerContent  p {
      color: rgba(83, 84, 132, 1);
      margin: 0 2rem;
      display: flex;
      align-items: center;
    }

  .account {
    display: none;
  }

  .contactIcons {
	  width: 800px;
    display: flex;
    justify-content: flex-end;
  }

  .iconContent {
    width: 40px;
    height: 40px;
    margin: 0 8px;
    background: rgba(83, 84, 132, 1);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    text-align: center;
    position: relative;

  }
  .iconContent  .chainNews {
      width: 35px;
      height: 18px;
      background: url('../images/chainNews.svg') 105% center no-repeat;
      background-size: cover;
      overflow: hidden;
    }

  .iconContent  .lang {
      position: absolute;
      bottom: 5px;
      left: 5px;
      font-size: 6px !important;
      transform: scale(0.6);
    }
  @media (max-width: 768px) {
    .footer {

    }
    .footerContent{
      width: 100%;
      flex-wrap: wrap;
    }
    .contactIcons{
      width: 100%;
      flex-wrap: wrap;
      margin-top: 10px;
      justify-content: center;
    }
    .iconContent{
      width: 1.5rem;
      height: 1.5rem;
      margin-bottom: 1rem;
    }

    .iconContent .lang{
      left: 1px;
      bottom: 1px;
    }
    .popover{
      left: -300%;
    }
	.p0{
		position: absolute;
		left: 20px;
		top:80px;
		z-index: 9;
	}
	.goapp {
	    display: block;
	    height: 32px;
	    line-height: 28px;
	    margin-right: 16px;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    box-sizing: border-box;
	    border-radius: 30px;
	    padding: 0px 10px;
	    font-weight: 500;
	    color: rgb(219, 46, 124);
	    border: 2px solid rgb(219, 46, 124);
	}
	
  }
</style>
