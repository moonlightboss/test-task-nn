<template>
  <div class="tabViewContainer">
    <div class="tabViewWrap">
      <div class="logo"><img src="../assets/alef.svg"></div>
      <div class="tabViewTabs">
        <router-link class="tabViewTab" to="/" :class="{ activeTab: $route.path === '/' }">Форма</router-link>
        <router-link class="tabViewTab" to="/preview" :class="{ activeTab: $route.path === '/preview' }">Превью</router-link>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<style scoped>
.tabViewContainer {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #e7e7e7;
  padding: 22px 0;
}

.tabViewWrap {
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 1200px;
}

.tabViewTabs {
  display: flex;
  gap: 24px;
  width: 100%;
  justify-content: center;
}

.tabViewTab {
  font-size: 14px;
  color: #1111117A;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
}
.tabViewTab:active {
  transform: scale(0.95);
}
.activeTab {
  color: #01A7FD;
}

</style>

<script setup>
</script>
