<template>
  <nav class="white-color nav-bar">
    <h2> The PLanets</h2>
    <div class="navbar-toggle" :class="{ opaque: menuActive }" @click="toggleMenu">
      <i class="fas fa-bars"></i>
    </div>
    <Transition name="slide-fade">
      <div v-if="menuActive" class="nav-bar__right-side-elements">
        <ul>
          <li v-for="planet in planets" class="list-item">
            <div class="list-item-left" :class="{ [planet.toLowerCase() + '-top']: planet.toLowerCase() }"
              @click="setPlanet(planet)">
              <RouterLink :to="'/planet/' + planet">
                <div class="circle" :class="{ [planet.toLowerCase() + '-bg']: planet.toLowerCase() }"></div>
                <span>{{ planet }}</span>
              </RouterLink>
            </div>
            <div class="list-item-right">
              <i class="fas fa-chevron-right"></i>
            </div>
          </li>

        </ul>
      </div>
    </Transition>
  </nav>
</template>

<script>
import { usePlanetsStore } from '../store/PlanetsStore';
import { RouterLink } from 'vue-router';
import { mapStores } from 'pinia'
export default {
  name: 'NavBar',
  components: {
  },
  props: {
  },
  data() {
    return {
      planets: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
      menuActive: false
    }
  },
  computed: {
    ...mapStores(usePlanetsStore)

  },
  watch: {
  },
  created() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  mounted() {
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
    onResize() {
      this.menuActive = window.innerWidth >= 768 ? true : false;
    },
    setPlanet(planet) {
      console.log(planet)
      if (window.innerWidth < 768) {
        this.toggleMenu();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_NavBar.scss';
</style>