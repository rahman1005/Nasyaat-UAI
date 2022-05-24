<template>
  <div class="list-event">
        <div class="list-item">
          <div>
            <h1 class="judul">Nama</h1>
          </div>
          <div>
            <h1 class="action">Action</h1>
          </div>
        </div>
        
        <div class="list-item-event"  v-for="event in events.data" :key="event.eventId">
          <div>
            <h2 class="judul-event">{{event.nameEvent}}</h2>
          </div>
          <div>
             <router-link :to="'/putevent/'+event.eventId" class="btn btn-warning">EDIT</router-link>
            </div>
          <div>
          <button class="btn color-delete" type="submit" @click=" Delete(event.eventId)">DELETE</button>
          </div>
        </div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'list-event',

        data(){
        return{
            events:{},
        };
    },
    methods:{
        setEvents(data){
            this.events=data;
        },
         Delete(eventId){
          axios
          .delete("http://localhost:3000/events/"+eventId)
          .then(()=>{
            axios
            .get("http://localhost:3000/allevents")
            .then((response)=> this.setEvents(response.data));

        })
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