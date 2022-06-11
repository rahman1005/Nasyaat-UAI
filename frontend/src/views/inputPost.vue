<template>
  <div class="input-post-view">
        <Navbar/>
        <main class="form">
            <h1>Buat Event Baru</h1>
            <Input-post/>
        </main>
  </div>
</template>

<script>
import Navbar from "@/components/NavbarDashboard.vue"
import InputPost from '@/components/Form-post.vue'

export default {
    name: 'input-post-view',
    components:{
        Navbar,
        InputPost
    }
}
</script>

<style>

</style>