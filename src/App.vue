<script setup>
import NavBar from './components/NavBar.vue';
import SectionComponent from './components/SectionComponent.vue';
import ContentComponent from './components/ContentComponent.vue';
import DataComponent from './components/DataComponent.vue';
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia'
import { usePlanetsStore } from './store/PlanetsStore';

const store = usePlanetsStore();
const { planets, selectedPlanet } = storeToRefs(store);




onMounted(() => {
  store.setSelectedPlanet('Mercury');
  store.setSelectedImage();
  store.setSelectedDescription();
})


</script>

<template>
<main class="main-container">
  <div class="nav">
    <NavBar />
  </div>
  <div class="section">
    <SectionComponent/>
  </div>
  <div class="content">
    <ContentComponent/>
  </div>
  <div class="data">
    <DataComponent />
  </div>
  

</main>
</template>

<style scoped>
.main-container{
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px 70px repeat(2, 1fr);
  height: 100vh;
}
</style>
