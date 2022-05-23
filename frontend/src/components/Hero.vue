<template>
  <div>
      <!-- desktop -->
    <div class="d-none d-md-block ">
        <div class="Hero" >
          <div class="Hero-item-1">
              <h1>Cari Events </h1>
              <h1>Favorite Kamu</h1>
              <h1>Disini!</h1>
          </div>
          <div class="Hero-item-2 ">
              <img src="../assets/img/hero.png" alt="">
          </div>
        </div>
    </div>
      <!-- mobile -->
    <div class="d-sm-block d-md-none Hero">
        <div class="Hero-item-2">
          <img src="../assets/img/hero.png" alt="">
        </div>
         <div class="Hero-item-1">
          <h1>Cari Events </h1>
          <h1>Favorite Kamu</h1>
          <h1>Disini!</h1>
        </div>
    </div>
     
  </div>

    
</template>

<script>
export default {
    name: 'Hero-view'
}
</script>

<style>

</style>