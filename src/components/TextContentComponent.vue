<script setup>
import { usePlanetsStore } from '../store/PlanetsStore';
import { computed } from 'vue';

const store = usePlanetsStore();

const content = computed(() => {
  return store.getSelectedDescription?.content || "";
})
const source = computed(() => {
  return store.getSelectedDescription?.source || "";
})
const planetName = computed(() => {
  return store.getSelectedPlanet && store.getSelectedPlanet.name;
})
</script>

<template>
  <div class="text-container">
    <h2>{{ planetName }}</h2>
    <h1>{{ planetName }}</h1>
    <p>{{ content }}</p>
    <div class="source-container">
      <span class="source">
        Source:
      </span>
      <a target="_blank" :href="source" class="source-link">
        Wikipedia
        <img class="source-image" src="/images/icon-source.svg" alt="">
      </a>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../styles/colors.scss' as colors;
@use '../styles/media-queries.scss' as media;

.text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 90%;
  margin: 0 auto;
  gap: 1.5rem;

  @include media.tablet {
    max-width: 100%;
    align-items: flex-start;
  }

  @include media.laptop {
    max-width: 80%;
    margin: 0;
  }

  h2 {
    color: colors.$white-color;

    @include media.tablet {
      display: inline-flex;
    }

    @include media.laptop {
      font-size: 8rem;
      display: none;
    }
  }

  h1 {
    display: none;

    @include media.laptop {
      display: inline-flex;
    }
  }

  p {
    font-weight: 300;

    @include media.tablet {
      display: inline-flex;
      text-align: left;
    }
  }

  .source {
    color: colors.$light-gray-color;
    margin-right: 5px;
  }

  .source-link {
    margin-right: 10px;
    font-weight: 700;
    color: colors.$light-gray-color;
    text-decoration: underline;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    .source-image {}
  }
}
</style>