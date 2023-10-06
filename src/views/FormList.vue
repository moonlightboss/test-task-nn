<template>
  <div class="mainContent">
    <div class="form">
      <h2>Персональные даные</h2>
      <div class="input">
        <label class="inputPlaceholder" for="fullName">Имя</label>
        <input class="inputLegacy" v-model="fullName" type="text" id="fullName"/>
      </div>
      <div class="input">
        <label class="inputPlaceholder" for="age">Возраст</label>
        <input class="inputLegacy" v-model="age"  id="age"/>
      </div>
    </div>

    <div class="form">
      <h2 class="titleWithButton">Дети (макс.5)
        <button class="button add" v-if="children.length < 5" @click="addChild">+ Добавить ребёнка</button>
      </h2>

      <div class="formItem">
        <div class='item' v-for="(child, index) in children" :key="index">
          <div class="input">
            <input class="inputLegacy" v-model="child.name" type="text" id="childName"/>
            <label class="inputPlaceholder" for="childName">Имя</label>
          </div>

          <div class="input">
            <input class="inputLegacy" v-model="child.age" id="childAge"/>
            <label class="inputPlaceholder" for="childAge">Возраст</label>
          </div>

          <button @click="removeChild(index)" class="delete-button">Удалить</button>
        </div>
        
      </div>
<button class="button primaryButton" @click="saveData">Сохранить</button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'FormList',
  data() {
    return {
      fullName: localStorage.getItem('fullName') || '',
      age: localStorage.getItem('age') || '',
      children: JSON.parse(localStorage.getItem('children')) || []
    };
  },
  methods: {
    addChild() {
      if (this.children.length < 5) {
        this.children.push({name: '', age: ''});
      }
    },
    removeChild(index) {
      this.children.splice(index, 1);
    },
    saveData() {
      localStorage.setItem('fullName', this.fullName);
      localStorage.setItem('age', this.age);
      localStorage.setItem('children', JSON.stringify(this.children));
    }
  }
});
</script>

<style scoped>
.input {
  border-radius: 3px;
  height: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 16px;
  position: relative;
  border: 1px solid #F1F1F1;
  width: 100%;
}

.inputPlaceholder {
  color: #1111117A;
  font-size: 13px;
  position: absolute;
  pointer-events: none;
  left: 15px;
  right: 15px;
  top: 8px;
  white-space: nowrap;
  overflow: hidden;
  line-height: 40px;
  transition: .3s;
  top: -2px;
}

.inputLegacy {
  outline: none;
  border: none;
  font-size: 14px;
  padding-top: 15px;
}

/* read !!!*/
.inputLegacy:focus ~ .inputPlaceholder,
.inputLegacy:not(:focus):valid ~ .inputPlaceholder {
  top: -2px;
}

.button {
  padding: 10px 20px;
  max-width: fit-content;
  border-radius: 100px;
  cursor: pointer;
  line-height: 24px;
  font-size: 14px;
  font-weight: 400;
}

.button:active {
  transform: scale(0.95);
}

.add {
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  background-color: #fff;
  color: #01A7FD;
  border: 2px solid #01A7FD;
}

.primaryButton {
  background-color: #01A7FD;
  color: #fff;
}

.delete-button {
  color: var(--colors-primary, #01A7FD);
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
}
</style>
