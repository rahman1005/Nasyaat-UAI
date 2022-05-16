<template>
    <div class="All-Events">
        <Navbar/>
        <h1>All Events</h1>
        <div class= "Card">
        <Card/>
        </div> 
    </div>
</template>

<script>
import Navbar from'@/components/Navbar.vue'
import Card from'@/components/Card.vue'
export default {
    name: "All-Events",
    components:{
        Navbar,
        Card,
    }
}
</script>

<style>
</style>