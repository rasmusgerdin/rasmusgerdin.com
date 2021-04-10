<template>
  <section id="landing" class="content">
    <Landing />
  </section>
  <section id="portfolio" class="content">
    <Portfolio />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Landing from '@/components/Landing.vue'
import Portfolio from '@/components/Portfolio.vue'

export default defineComponent({
  name: 'Main',
  components: {
    Landing,
    Portfolio
  }
})
</script>
