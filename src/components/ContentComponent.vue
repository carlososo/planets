<script setup>
import { ref, computed, onMounted } from 'vue';
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
const content = computed(() => {
  return store.getSelectedDescription?.content || "";
})
const source = computed(() => {
  return store.getSelectedDescription?.source || "";
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
      <div class="text-container">
        <h2>{{planetName}}</h2>
        <p>{{ content }}</p>
        <div class="source-container">
          <span class="source">
            Source: 
          </span>
          <a target="_blank" :href="source" class="source-link">
            Wikipedia
            <img class="source-image" src="/public/images/icon-source.svg" alt="">
          </a>
        </div>
      </div> 
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/sizes.scss' as sizes;
@use '../styles/colors.scss' as colors;
@use '../styles/media-queries.scss' as media;

.content-section{
  font-size: 13px;
  height: 100%;
  .image-container{
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60vw;
    @include media.tablet{
      width: 35vw;
    }
    margin: 4rem auto ;
    height: 20rem;
    position: relative;
    img{
      max-width: 100%;
      object-fit: contain;
    }
    @each $planet, $size in sizes.$planets{
      .#{$planet}{
        max-width: $size;      }
    }
    .surface-image-container{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%);
      width: 30%;
      height: 30%;
      img{
        max-width: 100%;
        object-fit: contain;
      }
    }
  }
  .text-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 90%;
    margin: 0 auto;
    gap: 1.5rem;
    h1{
      color: colors.$white-color;
    }
    p{
      font-weight: 300;
    }
    .source{
      color: colors.$light-gray-color;
      margin-right: 5px;
    }
    .source-link{
      margin-right: 10px;
      font-weight:700 ;
      color: colors.$light-gray-color;  
      text-decoration: underline;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      .source-image{ 
      }
    }
  }
}
</style>