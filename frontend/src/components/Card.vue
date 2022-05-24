<template>
  <div class="card  " style="width: 18rem">
  <img
      class="card-img-top"
      :src="'http://localhost:3000/'+event.Image"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title"> <router-link class="routerlink" :to="'/detailevent/' +event.eventId">{{event.nameEvent}}</router-link></h5>
      <p class="card-text">
        Penyelenggara :
        {{event.lembagaName}}
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><b-icon-pin-map icon="exclamation-circle-fill" variant="danger"></b-icon-pin-map>  {{event.tempat}}</li>
      <li class="list-group-item"><b-icon-calendar icon="exclamation-circle-fill" variant="primary"></b-icon-calendar> {{event.tanggal}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "All-Events",
  props: ["event"],
};
</script>

<style>
</style>