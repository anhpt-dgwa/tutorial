<template>
  <header class="page-header">
    <div class="site-logo">
      <a :href="'../'"><img src="../assets/logo.png" alt="IF Vietnam Co.,Ltd"></a>
    </div>
    <nav class="gnav">
      <ul class="menu">
        <li><router-link to="/service">SERVICE<span>サービス</span></router-link></li>
        <li><router-link to="/service">ABOUT<span>ネットサポートについて</span></router-link></li>
        <li><router-link to="/service">PARTNER<span>ビジネスパートナー</span></router-link></li>
        <li><router-link to="/service">RECRUIT<span>採用情報</span></router-link></li>
        <li><router-link to="/service">CONTACT<span>お問い合わせ</span></router-link></li>
      </ul>
    </nav>
    <div id="hambuger" class="nav-icon">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>