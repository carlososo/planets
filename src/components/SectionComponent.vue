<script setup>
import { ref, computed, onMounted } from 'vue';
import { usePlanetsStore } from '../store/PlanetsStore';
import { storeToRefs } from 'pinia';

//data
const presentations = ref(['OVERVIEW', 'INTERNAL', 'SURFACE',])
const presentationSelected = ref();
//store
const store = usePlanetsStore();
const { selectedPlanet } = storeToRefs(store);


//methods
function setPresentation(presentation){
  presentationSelected.value = presentation;
  store.setSelectedPresentation(presentation);
  store.setSelectedImage();
  store.setSelectedDescription();
}


//computed
const planetName = computed(() => {
  return selectedPlanet.value && selectedPlanet.value.name.toLowerCase()+'-title';
})

//lifecycle
onMounted(() => {
  presentationSelected.value = 'OVERVIEW';
  store.setSelectedPresentation('OVERVIEW');
})

</script>
<template>
  <section class="section-container">
    <div   
      v-for="presentation in presentations"
      class="presentation"
      :class="[planetName, {'active' : presentationSelected === presentation} ]"
      @click="setPresentation(presentation)"
    >
      <h3 
        class="presentation-title"
      >
          {{ presentation }}
      </h3>
    </div>

  </section>
</template>


<style lang="scss" scoped>
  @use '../styles/mixins.scss' as mixins;
  @use '../styles/media-queries.scss' as media;
  @use '../styles/colors.scss' as colors;
  .section-container{
    @include mixins.border-bottom-default;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    .presentation{
      height: 100%;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    
    @each $planet, $color in colors.$planets {
        .#{$planet}-title.active {
            border-bottom: 3px solid $color;
            transition: all 0.1s ease-out;
        }
      }
    @include media.tablet{
     border: none;
      padding: 0;
    }
  }
</style>