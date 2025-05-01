<template>
    <div class="container">
      <h2 class="title">Planetas</h2>
      <div v-if="loading">Cargando planetas...</div>
      <div v-else class="grid">
        <Card
          v-for="planet in planets"
          :key="planet.uid"
          :title="planet.name"
          :info="{
            Clima: planet.properties.climate,
            Terreno: planet.properties.terrain,
            Población: planet.properties.population
          }"
        />
      </div>
    </div>
  </template>
  
  <script>
  import Card from '../components/Card.vue'
  
  export default {
    components: { Card },
    data() {
      return {
        planets: [],
        loading: true,
      }
    },
    async mounted() {
      try {
        const res = await fetch('https://swapi.tech/api/planets?page=1&limit=10')
        const data = await res.json()
  
        const detailed = await Promise.all(
          data.results.map(async (planet) => {
            const resDetail = await fetch(planet.url)
            const detail = await resDetail.json()
            return {
              ...planet,
              properties: detail.result.properties
            }
          })
        )
  
        this.planets = detailed
        this.loading = false
      } catch (e) {
        console.error('Error al cargar planetas', e)
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    padding: 2rem;
  }
  .title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  </style>