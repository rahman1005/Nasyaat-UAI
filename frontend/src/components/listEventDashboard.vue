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
        
        <div class="list-item-event"  v-for="event in events.events" :key="event.id">
          <div>
            <h2 class="judul-event">{{event.nameEvent}}</h2>
          </div>
          <div>
             <router-link :to="'/putevent/'+event.id" class="btn btn-warning">EDIT</router-link>
            </div>
          <div>
          <button class="btn color-delete" type="submit" @click=" Delete(event.id)">DELETE</button>
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
         Delete(id){
          axios
          .delete("http://localhost:5000/events/"+id)
          .then(()=>{
            axios
            .get("http://localhost:5000/events")
            .then((response)=> this.setEvents(response.data));

        })
    },
    },
    mounted(){
        axios
        .get("http://localhost:5000/events")
        .then((response)=> this.setEvents(response.data))
        .catch((error)=> console.log(error));

    }

}

</script>

<style>

</style>