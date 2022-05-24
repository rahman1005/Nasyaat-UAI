<template>
  <div>
    <Navbar/>
      <div class="event-detail-body">
         <div class="detail-event">
            <div class="image-detail">
             <img :src="'http://localhost:3000/'+events.Image">
             </div>
             <div class="event-detail-text">
                 <h1>{{events.nameEvent}}</h1>
                 <div class="text-distance">
                     <h2><b-icon-calendar-date-fill variant="primary"></b-icon-calendar-date-fill> {{events.tanggal}}</h2>
                 </div>
                 <div class="text-distance">
                     <h2><b-icon-pin-map icon="exclamation-circle-fill" variant="danger"></b-icon-pin-map> {{events.tempat}}</h2>
                 </div>
                 <div class="text-distance">
                     <h2><b-icon-alarm-fill variant="info"></b-icon-alarm-fill>  {{events.waktu}}</h2>
                 </div>
                 <div class="text-distance instagram">
                     <a :href="events.link_instagram"><h2><b-icon-instagram variant="info"></b-icon-instagram> Instagram</h2></a>
                 </div>
                 <div class="text-distance">
                    <a class="btn btn-primary" :href="events.link_pendaftaran" role="button">Daftar</a>
                 </div>
                 <div class="text-distance deskripsi">
                     <p>{{events.deskripsi}}</p>
                 </div>

            </div>
         </div>
      </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import axios from 'axios';
export default {
    name:'event-detail',
    components:{
        Navbar,
    },
    data(){
        return{
            events:{},
        }
    },
    methods:{
        setEvent(data){
            this.events=data;
        }
    },
    mounted(){
        axios
        .get("http://localhost:3000/events/"+ this.$route.params.eventId)
        .then((response)=> this.setEvent(response.data))
        .catch((error)=>console.log(error));
        console.warn(this.events);
    },
}

</script>

<style>

</style>