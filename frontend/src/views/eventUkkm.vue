<template>
    <div class="event">
        <Navbar/>
        <h1>Events UAI</h1>
        <div class= "Card row ">
            <div class="card-list col-md-3 mt-4 "  v-for="event in events.events" :key="event.id">
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
        .get("http://localhost:5000/eventsukkm")
        .then((response)=> this.setEvents(response.data))
        .catch((error)=> console.log(error));

    }
}
</script>

<style>

</style>