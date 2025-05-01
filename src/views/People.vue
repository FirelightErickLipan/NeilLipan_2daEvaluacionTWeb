<template>
    <div class="container">
      <div class="controls">
        <button class="prev" @click="prevPage" :disabled="page === 1">Página Anterior</button>
        <h2 class="title">Personajes de Star Wars</h2>
        <button class="next" @click="nextPage" :disabled="!hasMore">Siguiente Página</button>
      </div>
  
      <div v-if="loading" class="loading">Cargando personajes...</div>
  
      <div v-else class="grid">
        <Card
          v-for="p in people"
          :key="p.uid"
          :title="p.name"
          :info="{
            Altura: p.height + ' cm',
            Género: p.gender,
            'Fecha Nacimiento': p.birth_year
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
        people: [],
        loading: true,
        page: 1,
        hasMore: true
      }
    },
    methods: {
      async fetchCharacters() {
        this.loading = true
        this.people = []
  
        try {
          const res = await fetch(`https://www.swapi.tech/api/people?page=${this.page}&limit=20`)
          const data = await res.json()
  
          if (!data || !data.results) {
            console.error('No se encontraron personajes.')
            this.hasMore = false
            return
          }
  
          const characterData = await Promise.all(
            data.results.map(async (p) => {
              try {
                const res = await fetch(p.url)
                const fullData = await res.json()
                const props = fullData.result.properties
                return {
                  uid: fullData.result.uid,
                  name: props.name,
                  height: props.height,
                  gender: props.gender,
                  birth_year: props.birth_year
                }
              } catch (err) {
                console.error('Error al cargar personaje:', err)
                return null
              }
            })
          )
  
          this.people = characterData.filter(p => p !== null)
          this.hasMore = data.total_records > this.page * 20
        } catch (err) {
          console.error('Error al cargar personajes:', err)
        } finally {
          this.loading = false
        }
      },
      nextPage() {
        if (this.hasMore) {
          this.page++
          this.fetchCharacters()
        }
      },
      prevPage() {
        if (this.page > 1) {
          this.page--
          this.fetchCharacters()
        }
      }
    },
    mounted() {
      this.fetchCharacters()
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
  