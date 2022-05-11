<template>
    <div class="Dashboard-home">
        <Navbar/>
        <main class="list">
          <a href="/inputpost"> <div class="tambah-event"><h1>+Tambah Event</h1></div></a>
          <ListEvent/>
        </main>
    </div>
</template>

<script>
import Navbar from "@/components/NavbarDashboard.vue"
import ListEvent from '@/components/listEventDashboard.vue'
export default {
    name:'dashboard-view',
    components:{
        Navbar,
        ListEvent
    }
}
</script>

<style>

</style>