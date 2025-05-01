<template>
    <div class="container">
      <div class="controls">
        <button class="prev" @click="prevPage" :disabled="page === 1">Página Anterior</button>
        <h2 class="title">Naves de Star Wars</h2>
        <button class="next" @click="nextPage" :disabled="!hasMore">Siguiente Página</button>
      </div>
  
      <div v-if="loading" class="loading">Cargando naves...</div>
  
      <div v-else class="grid">
        <Card
          v-for="s in starships"
          :key="s.uid"
          :title="s.name"
          :info="{
            Modelo: s.model,
            'Clase Nave': s.starship_class,
            Pasajeros: s.passengers
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
        starships: [],
        loading: true,
        page: 1,
        hasMore: true
      }
    },
    methods: {
      async fetchStarships() {
        this.loading = true
        this.starships = []
  
        try {
          const res = await fetch(`https://www.swapi.tech/api/starships?page=${this.page}&limit=20`)
          const data = await res.json()
  
          if (!data || !data.results) {
            console.error('No se encontraron naves.')
            this.hasMore = false
            return
          }
  
          const detailed = await Promise.all(
            data.results.map(async (ship) => {
              try {
                const resDetail = await fetch(ship.url)
                const detail = await resDetail.json()
                const props = detail.result.properties
                return {
                  uid: detail.result.uid,
                  name: props.name,
                  model: props.model,
                  starship_class: props.starship_class,
                  passengers: props.passengers
                }
              } catch (err) {
                console.error('Error al cargar nave:', err)
                return null
              }
            })
          )
  
          this.starships = detailed.filter(s => s !== null)
          this.hasMore = data.total_records > this.page * 20
        } catch (e) {
          console.error('Error al cargar naves', e)
        } finally {
          this.loading = false
        }
      },
      nextPage() {
        if (this.hasMore) {
          this.page++
          this.fetchStarships()
        }
      },
      prevPage() {
        if (this.page > 1) {
          this.page--
          this.fetchStarships()
        }
      }
    },
    mounted() {
      this.fetchStarships()
    }
  }
  </script>
  
  <style scoped>
  .container {
    padding: 2rem;
    padding-top: 6rem;
    padding-bottom: 5rem;
  }
  
  .loading {
    text-align: center;
    font-size: 1.2rem;
    color: white;
  }
  
  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  
  .controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }
  
  .title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    font-family: 'Star Jedi', sans-serif;
    text-align: center;
    white-space: nowrap;
  }
  
  button {
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .next {
    background-color: #7a5cc1;
    color: white;
  }
  
  .next:hover {
    background-color: #6b4bb3;
  }
  
  .prev {
    background-color: #4caf50;
    color: white;
  }
  
  .prev:hover {
    background-color: #449d48;
  }
  </style>
  