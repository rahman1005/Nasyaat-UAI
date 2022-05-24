<template>
<div class="form-input" v-on:submit.prevent>
  <div class="mb-3">
      <label for="formGroupExampleInput" class="form-label">Nama Lembaga</label>
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput"
        placeholder="Contoh: MILAD NASYAAT UAI"
        v-model="event.lembagaName"
        required
        action="/action_page.php"
      />
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput" class="form-label">Nama Event</label>
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput"
        placeholder="Contoh: MILAD NASYAAT UAI"
        v-model="event.nameEvent"
        required
        action="/action_page.php"
      />
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label">Tempat</label>
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="Contoh: Auditorium Arifin Panigoro"
        v-model="event.tempat"
        required
        action="/action_page.php"
      />
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label"
        >Tanggal</label
      >
      <input
        type="date"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="www.form.com"
        v-model="event.tanggal"
        required
        action="/action_page.php"
      />
    </div>
      <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label"
        >Waktu</label
      >
      <input
        type="time"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="www.form.com"
        v-model="event.waktu"
        required
        action="/action_page.php"
      />
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label"
        >Link Pendaftaran</label
      >
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="www.form.com"
        v-model="event.link_pendaftaran"
        required
        action="/action_page.php"
      />
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label">Poster</label>
      <input
        type="file"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="www.image.com"
        @change="onImageselect"
        required
        action="/action_page.php"
      />
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label"
        >Link Instagram</label
      >
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="www.instagram/nasyaat.com"
        v-model="event.link_instagram"
        required
        action="/action_page.php"
      />
    </div>
    <div class="form-floating">
      <label for="floatingTextarea2">Deskripsi</label>
      <textarea
        class="form-control"
        placeholder=""
        id="floatingTextarea2"
        style="height: 100px"
        v-model="event.deskripsi"
        required
        action="/action_page.php"
      ></textarea>
    </div>
    <button type="button" class="btn btn-primary"   required
        action="/action_page.php" @click="Events">Simpan</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'form-put',

    data(){
    return{
        events:{},
        event: {
           lembagaId:null,
           CategoryId:null,
           nameEvent:null,
           lembagaName:null,
           link_pendaftaran:null,
           link_instagram:null,
           tanggal:null,
           waktu:null,
           tempat:null,
           deskripsi:null,
      },
    }
   
    },
    methods:{
        setEvent(data){
            this.events=data;
        },
         onImageselect(image){
      this.Image= image.target.files[0]
    },
    Events(e) {
    if(this.Image && 
    this.event.nameEvent && 
    this.event.lembagaName && 
    this.event.tanggal &&
    this.event.waktu &&
    this.event.link_pendaftaran &&
    this.event.link_instagram &&
    this.event.tempat &&
    this.event.deskripsi
    !=null ){
      let fd = new FormData();
      fd.append('Image', this.Image);
      fd.append('nameEvent', this.event.nameEvent)
      fd.append('lembagaName', this.event.lembagaName)
      fd.append('link_pendaftaran', this.event.link_pendaftaran)
      fd.append('link_instagram', this.event.link_instagram)
      fd.append('tanggal', this.event.tanggal)
      fd.append('waktu', this.event.waktu)
      fd.append('tempat', this.event.tempat)
      fd.append('deskripsi', this.event.deskripsi)
     
      axios.put("http://localhost:3000/events/"+this.$route.params.eventId, fd,  {
              headers: {
                  "Content-Type": "multipart/form-data",
        },
      })
    }else{
        alert("data tdak boleh kosong")
    }
      console.warn(this.event)
      e.preventDefault();
    }
    },
    mounted(){
        axios
        .get("http://localhost:3000/events/" )
        .then((response)=> this.setEvent(response.data))
        .catch((error)=>console.log(error));
        console.warn(this.events);
    },
}
</script>

<style>

</style>