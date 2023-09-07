<template>
  <section id="service" class="section section-service">
    <div class="container">
      <div class="section-title animation">
        <h2 class="section-title_ttl">service</h2>
        <span class="section-title_sub">サービス</span>
      </div>
      <p class="service-head animation">今やオフショア開発は、ほとんどすべての<br class="only-sp">デジタル制作に対応可能です。</p>
      <ul class="service">
        <li v-for="item in services" :key="item.id" class="service-item animation">
          <div class="service-item_inner">
              <h3 class="service-item_title">{{ item.title }}</h3>
              <img v-bind:src="item.img" v-bind:alt="item.title">
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        { title: 'Webサイト制作', img: require('@/assets/icon01.png') },
        { title: 'Webサービス開発', img: require('@/assets/icon02.png') },
        { title: 'アプリ開発', img: require('@/assets/icon03.png') },
        { title: 'ECサイト運用', img: require('@/assets/icon04.png') },
        { title: 'ゲームの検証・デバック', img: require('@/assets/icon05.png') },
        { title: 'BPO', img: require('@/assets/icon06.png') },
        { title: 'バナー作成', img: require('@/assets/icon07.png') },
        { title: 'SNS運用', img: require('@/assets/icon08.png') },
      ],
    }
  },
  computed: {
    serviceList() {
      return this.services
    }
  }
}
</script>