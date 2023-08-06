<script setup>
import { computed } from 'vue';
import { usePlanetsStore } from '../store/PlanetsStore';
import { storeToRefs } from 'pinia';

//store
const store = usePlanetsStore();
const { selectedPlanet, selectedImage, getSelectedPresentation } = storeToRefs(store);

//computed
const imageSource = computed(() => {
  return selectedImage.value && selectedImage.value;
})
const planetName = computed(() => {
  return selectedPlanet.value && selectedPlanet.value.name;
})


</script>
<template>
  <section class="content-section">
    <div class="image-container">
      <img :src="imageSource" alt="" :class="planetName">
      <div v-if="getSelectedPresentation === 'SURFACE'" class="surface-image-container">
        <img :src="selectedPlanet.images.geology" alt="" class="surface-image">
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/sizes.scss' as sizes;
@use '../styles/colors.scss' as colors;
@use '../styles/media-queries.scss' as media;

.content-section {
  font-size: 13px;
  height: 100%;

  @include media.tablet {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-container {
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60vw;
    margin: 4rem auto;
    height: 20rem;
    position: relative;

    @include media.tablet {
      width: 40vw;
      height: 100%;
      margin: 0;
    }

    img {
      max-width: 100%;
      object-fit: contain;
    }

    @each $planet,
    $size in sizes.$planets {
      .#{$planet} {
        max-width: $size;
      }
    }

    .surface-image-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%);
      width: 30%;
      height: 30%;

      img {
        max-width: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>