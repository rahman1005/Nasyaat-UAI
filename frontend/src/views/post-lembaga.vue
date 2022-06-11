<template>
  <div class="post-lembaga-view">
      <Navbar/>
         <main class="form">
            <h1>Buat Lembaga Baru</h1>
            <InputLembaga/>
        </main>
  </div>
</template>

<script>
import Navbar from "@/components/NavbarDashboard.vue"
import InputLembaga from '@/components/form-post-lembaga.vue'
export default {
    name: 'post-lembaga',
    components:{ 
        InputLembaga,
        Navbar
    }
}
</script>

<style>

</style>