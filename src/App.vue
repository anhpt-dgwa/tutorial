<template>
  <div class="main-visual">
    <figure class="slider-item item01"><img src="./assets/mv01.jpg" alt=""></figure>
    <figure class="slider-item item02"><img src="./assets/mv02.jpg" alt=""></figure>
    <div class="main-copy">
      <h1 class="site-head">ベストオフショアパートナー</h1>
      <p class="site-description">国内トップクラスのデジタル制作会社出身者とシステ<br class="only-sp">ムベンター出身者の<br class="only-pc">
        タッグにより、<br class="only-sp">「制作者視点」でのWeb領域のトータルソリューションを<br>「ジャパンクオリティ」で提供しております。</p>
    </div>
  </div>
  <Header />
  <router-view />
  <Footer />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

//import $ from 'jquery';
import '../src/scripts/common.js';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    //HelloWorld
  },
}
</script>

<style lang="scss">
@import "./styles/global.scss";
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
