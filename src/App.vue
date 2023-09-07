<template>
  <MainVisual v-if="$route.name == 'PageHome'" />
  <Header />
  <router-view />
  <Footer />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import MainVisual from './components/MainVisual.vue';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

//import $ from 'jquery';
import '../src/scripts/common.js';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    MainVisual
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
.p-sub {
  min-height: calc(100vh - 124.984px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
