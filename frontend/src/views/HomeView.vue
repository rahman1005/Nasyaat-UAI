<template>
  <div class="home">
    <Navbar/>
    <Hero/>
    <categories/>
    <fitur/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import categories from '@/components/categories.vue'
import fitur from '@/components/fitur.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Hero,
    categories,
    fitur
  }
}
</script>
