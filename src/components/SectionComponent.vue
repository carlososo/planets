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
function setPresentation(presentation) {
  presentationSelected.value = presentation;
  store.setSelectedPresentation(presentation);
  store.setSelectedImage();
  store.setSelectedDescription();
}


//computed
const planetName = computed(() => {
  return selectedPlanet.value && selectedPlanet.value.name.toLowerCase() + '-title';
})

//lifecycle
onMounted(() => {
  presentationSelected.value = 'OVERVIEW';
  store.setSelectedPresentation('OVERVIEW');
})

</script>
<template>
  <section class="section-container">
    <div v-for="(presentation, index) in presentations" :data-number="'0' + (index + 1)" class="presentation"
      :class="[planetName, { 'active': presentationSelected === presentation }]" @click="setPresentation(presentation)">
      <h3 class="presentation-title">
        {{ presentation }}
      </h3>
    </div>

  </section>
</template>


<style lang="scss" scoped>
@use '../styles/mixins.scss' as mixins;
@use '../styles/media-queries.scss' as media;
@use '../styles/colors.scss' as colors;

.section-container {
  @include mixins.border-bottom-default;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  .presentation {
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;

    @include media.tablet {
      padding: 0 1rem;
      border: 1px solid rgba(255, 255, 255, 0.5);
      height: 5.5rem;
      width: 80%;
      padding-left: 5rem;

      &::before {
        content: attr(data-number);
        position: absolute;
        left: 14px;
        opacity: 0.5;
      }
    }

    @include media.laptop {
      &:hover {
        background-color: colors.$dark-gray-color;
      }
    }
  }

  @each $planet,
  $color in colors.$planets {
    .#{$planet}-title.active {
      border-bottom: 3px solid $color;
      transition: all 0.1s ease-out;

      @include media.tablet {
        background-color: $color;
      }
    }
  }

  @include media.tablet {
    border: none;
    padding: 0;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    align-items: end;
    justify-content: flex-end;
  }
}
</style>