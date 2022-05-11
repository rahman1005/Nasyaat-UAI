<template>
  <div class="form-input">
    <div class="mb-3">
      <label for="formGroupExampleInput" class="form-label">Nama Event</label>
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput"
        placeholder="Contoh: MILAD NASYAAT UAI"
      />
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label">Tempat</label>
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="Contoh: Auditorium Arifin Panigoro"
      />
    </div>
    <div class="row g-3">
      <div class="col">
        <label for="formGroupExampleInput2" class="form-label">Tanggal</label>
        <input
          type="text"
          class="form-control"
          placeholder="Contoh 2022-05-10"
          aria-label="First name"
        />
      </div>
      <div class="col">
        <label for="formGroupExampleInput2" class="form-label">Waktu</label>
        <input
          type="text"
          class="form-control"
          placeholder="08:00:00"
          aria-label="Last name"
        />
      </div>
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
      />
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label">Link Poster</label>
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="www.image.com"
      />
    </div>
    <div class="form-floating">
    <label for="floatingTextarea2">Deskripsi</label>
      <textarea
        class="form-control"
        placeholder=""
        id="floatingTextarea2"
        style="height: 100px"
      ></textarea>
     
    </div>
  </div>
</template>

<script>
export default {
  name: "input-post",
};
</script>

<style>
</style>