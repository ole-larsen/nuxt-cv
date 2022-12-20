<script setup lang="ts">
import {onMounted, ref} from "vue";
const darkMode = ref(false);

const colorMode = useColorMode();

function setDarkMode(){
  darkMode.value = true;
  colorMode.preference = "dark";
}

function setLightMode(){
  darkMode.value = false;
  colorMode.preference = "light";
}
  
onMounted(() => {
  setLightMode();
});

</script>
<template>
  <div>
    <font-awesome-icon
        v-if="!darkMode"
        style="font-size:35px; color:white;"
        :icon="['fas', 'moon']"
        @click="setDarkMode"/>
    <font-awesome-icon
        v-else
        style="font-size:35px;"
        :icon="['fas', 'sun']"
        @click="setLightMode"/>
  </div>

</template>
<style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>

s