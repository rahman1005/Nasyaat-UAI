<template>
  <div class="form-input" v-on:submit.prevent>
      <label for="formGroupExampleInput" class="form-label">Lembaga</label>
    <div>
     <div
      class="form-check form-check-inline"
      v-for="lembaga in lembagas"
      :key="lembaga.LembagaId"
    >
      <input
        class="form-check-input"
        type="radio"
        name="lembaga"
        id="inlineRadio2"
        :value="lembaga.LembagaId"
        v-model="event.lembagaId"
        required
        action="/action_page.php"
      />
      <label class="form-check-label" for="inlineRadio2">{{lembaga.lembagaName}}</label>
    </div>
  </div> 
   <label for="formGroupExampleInput" class="form-label">Category</label>
  <div>
    
    <div
      class="form-check form-check-inline"
      v-for="category in categorys"
      :key="category.CategoryId"
    >
      <input
        class="form-check-input"
        type="radio"
        name="category"
        id="inlineRadio2"
        :value="category.CategoryId"
        v-model="event.CategoryId"
        required
        action="/action_page.php"
      />
      <label class="form-check-label" for="inlineRadio2">{{
        category.categoryName
      }}</label>
    </div>
  </div>
  <div class="mb-3">
      <label for="formGroupExampleInput" class="form-label">Nama Penyelengara</label>
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput"
        placeholder="Contoh: PANITIA HISTORIZ"
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
        placeholder="Contoh: HISTORIZ"
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
        action="/action_page.php" @click="events">Simpan</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "input-post",

  data() {
    return {
      Image:null,
      categorys: {},
      lembagas:{},
      
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
    };
  },
  methods: {
    setLembaga(data){
      this.lembagas=data;
    },
     setCategory(data) {
      this.categorys = data;
    },
    onImageselect(image){
      this.Image= image.target.files[0]
    },
    events(e) {
      if(this.Image && 
    this.event.lembagaId &&
    this.event.CategoryId &&
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
      fd.append('lembagaId', this.event.lembagaId)
      fd.append('CategoryId', this.event.CategoryId)
      fd.append('nameEvent', this.event.nameEvent)
      fd.append('lembagaName', this.event.lembagaName)
      fd.append('link_pendaftaran', this.event.link_pendaftaran)
      fd.append('link_instagram', this.event.link_instagram)
      fd.append('tanggal', this.event.tanggal)
      fd.append('waktu', this.event.waktu)
      fd.append('tempat', this.event.tempat)
      fd.append('deskripsi', this.event.deskripsi)
      
      axios.post("http://localhost:3000/events", fd,  {
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
    .get("http://localhost:3000/lembaga")
    .then((response)=> this.setLembaga(response.data))
    .catch((error)=> console.log(error));
    
     axios
      .get("http://localhost:3000/category")
      .then((response) => this.setCategory(response.data))
      .catch((error) => console.log(error));
  }
  
  
};
</script>

<style>
</style>