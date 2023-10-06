<template>
  <div class="mainContent">
    <div class="form">
      <h2>Персональные данные</h2>
      <div class="outline">
        {{ fullName }},
        {{ age }}
      </div>
      <h2>Дети</h2>
      <div class="children">
        <div class="text" v-for="(child, index) in children" :key="index">
          <strong></strong> {{ child.name }}, <strong></strong> {{ child.age }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'PreviewPage',
  computed: {
    fullName() {
      return localStorage.getItem('fullName') || '';
    },
    age() {
      return localStorage.getItem('age') || '';
    },
    children() {
      return JSON.parse(localStorage.getItem('children')) || [];
    }
  }
});
</script>
<style scoped>
.outline {
  background-color: #fff;
  border: none;
  border-radius: 5px;
  color: #000;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  max-width: fit-content;
  padding: 10px 20px;
}
.children{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}
.text{
  background: #f1f1f1;
  border-radius: 5px;
  color: #000;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  max-width: fit-content;
  padding: 10px 20px;
}
</style>
