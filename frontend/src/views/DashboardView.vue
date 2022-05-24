<template>
    <div class="Dashboard-home">
        <Navbar/>
        <main class="list">
        <div class="button-lembaga">
            <a href="/inputpost"> <div class="tambah-event"><h1>+Tambah Event</h1></div></a>
            <a href="/postlembaga"> <div class="tambah-event"><h1>+TambagLembaga</h1></div></a>
        </div>
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