<script setup>
import { usePlanetsStore } from '../store/PlanetsStore';
import { storeToRefs } from 'pinia';
import { ref, computed } from 'vue';

//store
const store = usePlanetsStore();
const { selectedPlanet } = storeToRefs(store);
//data
const sections = ref(['rotation time', 'revolution time', 'radius', 'average temp']);

//computed
const rotationTime = computed(() => {
  return selectedPlanet.value && selectedPlanet.value.rotation;
})
const revolutionTime = computed(() => {
  return selectedPlanet.value && selectedPlanet.value.revolution;
})
const radius = computed(() => {
  return selectedPlanet.value && selectedPlanet.value.radius;
})
const averageTemp = computed(() => {
  return selectedPlanet.value && selectedPlanet.value.temperature;
})

</script>
<template>
  <section class="data-container">
    <div v-for="(section, index) in sections" class="data-section">
      <span>{{section}} </span>
      <h2 class="smaller-h2">
        {{  index  === 0 ? rotationTime : index === 1 ? revolutionTime : index === 2 ? radius : averageTemp }}
      </h2>
      
    </div>
  </section>
</template>


<style lang="scss" scoped>
  .data-container{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 90%;
    margin: 3rem auto;
    .data-section{
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 13px;
      
      border: 1px solid rgba(255, 255, 255, 0.5);
      color: rgba(255, 255, 255, 0.5);
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 0 1rem;
      
      .smaller-h2{
        opacity: 2;
        color: white;
        font-size: 24px;
        font-weight: 400;
        letter-spacing: 0;
      }
    }
  }

</style>