<template>
  <div class="put-event">
       <Navbar/>
        <main class="form">
            <h1>Edit Event</h1>
            <Formput/>
        </main>
  </div>
</template>

<script>
import Navbar from '@/components/NavbarDashboard.vue'
import Formput from '@/components/form-put.vue'
export default {
    name:'put-event',
    components:{
        Navbar,
        Formput
    }
}
</script>

<style>

</style>