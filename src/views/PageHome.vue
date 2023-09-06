<template>
  <main class="page-main">
    <SectionService />
    <SectionAbout />
    <SectionPartners />
    <SectionRecruit />
    <SectionContact />
  </main>
</template>

<script>
import SectionService from '../components/SectionService.vue'
import SectionAbout from '../components/SectionAbout.vue'
import SectionPartners from '../components/SectionPartners.vue'
import SectionRecruit from '../components/SectionRecruit.vue'
import SectionContact from '../components/SectionContact.vue'
//import axios from 'axios';
export default {
  //name: 'HelloWorld',
  components: {
    SectionService,
    SectionAbout,
    SectionPartners,
    SectionRecruit,
    SectionContact
  },
  data() {
    
  },
  computed: {
    
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>

</style>