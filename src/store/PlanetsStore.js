import { defineStore } from "pinia";
import planets from "../assets/data.json";

export const usePlanetsStore =  defineStore("PlanetsStore", {
  state: () => ({
    planets,
    selectedPlanet: null,
    selectedPresentation: null,
    selectedImage: null,
    selectedDescription: null
  }),
  getters: {
    getSelectedPlanet(state) {
      return state.selectedPlanet;
    },
    getSelectedPresentation(state) {
      return state.selectedPresentation;
    },
    getSelectedDescription(state) {
      return state.selectedDescription;
    }
  },
  actions: {
    setSelectedPlanet(name) {
      this.selectedPlanet = this.planets.find((planet) => planet.name === name);
    },
    setSelectedPresentation(presentation) {
      this.selectedPresentation = presentation
    },
    setSelectedImage() {
      this.selectedImage =
      this.selectedPlanet?.images[this.selectedPresentation === 'OVERVIEW' ? 'planet' : 'internal']
    },
    setSelectedDescription(){
      this.selectedDescription = 
      this.selectedPlanet[this.selectedPresentation === 'OVERVIEW' ? 'overview' 
      : this.selectedPresentation === 'INTERNAL' ? 'structure' : 'geology']
    }
  },

    
  
})