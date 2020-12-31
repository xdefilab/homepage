<template>
  <div class="footer" height="78px">
    <div class="footerContent">
      <a href="/" class='logo'>
        <img src="../images/logo.png" alt="pebbles" height='30'>
      </a>
      <div class='contractIcons'>
        <a class='iconContent' href="ttps://www.chainnews.com/u/895866208677.htm" target="_blank">
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
        <a class='iconContent' href="https://t.me/xdefi" target="_blank">
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
    display: flex;
    align-items: center;
    justify-content: center;

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
      color: #999;
      margin: 0 2rem;
      display: flex;
      align-items: center;
    }

  .account {
    display: none;
  }

  .contractIcons {
    display: flex;
    justify-content: flex-end;
  }

  .iconContent {
    width: 40px;
    height: 40px;
    margin: 0 8px;
    background: rgba(83, 84, 132, 0.6);
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
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 3001;

    }
    .footer .footerContent {
      display: none !important;
    }

    .footer .account {
      display: block;
    }
  }
</style>
