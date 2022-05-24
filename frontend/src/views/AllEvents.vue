<template>
    <div class="All-Events">
        <Navbar/>
        <h1>All Events</h1>
        <div class= "Card row ">
            <div class="card-list col-md-3 mt-4 "  v-for="event in events.data" :key="event.eventId">
                <Card :event="event"/>
            </div>
            
        </div> 
    </div>
</template>

<script>
import Navbar from'@/components/Navbar.vue'
import Card from '@/components/Card.vue'
import axios from 'axios';
export default {
    name: "All-Events",
    components:{
        Navbar,
        Card
    },
    data(){
        return{
            events:{},
        };
    },
    methods:{
        setEvents(data){
            this.events=data;
        },
    },
    mounted(){
        axios
        .get("http://localhost:3000/allevents")
        .then((response)=> this.setEvents(response.data))
        .catch((error)=> console.log(error));

    }
}
</script>

<style>

</style>