<script setup>
import NavBar from './components/NavBar.vue';
import SectionComponent from './components/SectionComponent.vue';
import ContentComponent from './components/ContentComponent.vue';
import DataComponent from './components/DataComponent.vue';
import TextContentComponent from './components/TextContentComponent.vue';
import { onMounted } from 'vue';
import { usePlanetsStore } from './store/PlanetsStore';

const store = usePlanetsStore();




onMounted(() => {
  store.setSelectedPlanet('Mercury');
  store.setSelectedImage();
  store.setSelectedDescription();
})


</script>

<template>
  <div class="nav">
    <NavBar />
  </div>
  <main class="main-container">
    <div class="section">
      <SectionComponent />
    </div>
    <div class="content">
      <ContentComponent />
    </div>
    <div class="text-content">
      <TextContentComponent />
    </div>
    <div class="data">
      <DataComponent />
    </div>


  </main>
</template>

<style scoped lang="scss">
@use './styles/media-queries.scss' as media;

.main-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px 2fr 1fr 2fr;
  height: calc(100vh - 53px);

  @include media.tablet {

    .section {
      grid-area: section;
      display: flex;
    }

    .content {
      grid-area: content;
    }

    .data {
      grid-area: data;
    }

    .text-content {
      grid-area: text;

      @include media.laptop {
        grid-area: text;
        display: grid;
        align-items: end;
        justify-items: end;
        width: 100%;
      }
    }

    grid-template-rows: 2fr 1fr 1fr;

    grid-template-areas: "content content content content"
    "text text section section"
    "data data data data";
    row-gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1rem;
    max-width: 90%;
    margin: 0 auto;
    height: calc(100vh - 120px);
  }

  @include media.laptop {
    max-width: 73%;
    margin: 0 auto;
    grid-template-areas:
      "content content text text"
      "content content section section"
      "data data data data";
    height: calc(100vh - 70px);
  }
}
</style>
