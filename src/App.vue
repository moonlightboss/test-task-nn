<script setup lang="ts">
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

</script>

<template>
  <Header></Header>
  <div class="page">
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<style>

</style>
