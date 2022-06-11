<template>

  <div class="input-lembaga" v-on:submit.prevent>
    <div>
        <label for="formGroupExampleInput" class="form-label">Category</label>
    </div>
    <div
      class="form-check form-check-inline"
      v-for="category in categorys"
      :key="category.CategoryId"
    >
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="inlineRadio2"
        :value="category.id"
        v-model="lembaga.categoryId"
        required
      />
      <label class="form-check-label" for="inlineRadio2">{{
        category.categoryName
      }}</label>
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput" class="form-label"
        >Nama Lemabaga</label
      >
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput"
        placeholder="Contoh: HMIF"
        v-model="lembaga.lembagaName"
        required
      />
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label"
        >Email Lembaga</label
      >
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="www.form.com"
        v-model="lembaga.emailLembaga"
        required
      />
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label">Password</label>
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="www.form.com"
        v-model="lembaga.password"
        required
      />
    </div>
    <button type="button" class="btn btn-primary" @click="lembagas">
      Simpan
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "input-lembaga",

  data() {
    return {
      categorys: {},
      lembaga: {
      lembagaName:null,
      categoryId:null,
      emailLembaga:null,
      password:null

      },
    };
  },
  methods: {
    setCategory(data) {
      this.categorys = data;
    },

    lembagas(e) {
      if(this.lembaga.lembagaName &&
      this.lembaga.categoryId &&
      this.lembaga.emailLembaga &&
      this.lembaga.password !=null){
      axios.post("http://localhost:5000/lembaga",this.lembaga);
          alert("data berhasil disimpan")
          this.$router.push({path: "/dashboard"})
      } else{
        alert("data tdak boleh kosong")
    }
      console.warn(this.lembaga);
      e.preventDefault();
 
    },
  },
  mounted() {
    axios
      .get("http://localhost:5000/category")
      .then((response) => this.setCategory(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>