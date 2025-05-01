<template>
    <nav class="navbar">
      <!-- Título -->
      <h1>Portal SWAPI</h1>
  
      <!-- Lista de enlaces -->
      <ul>
        <li><router-link to="/">INICIO</router-link></li>
        <li><router-link to="/people">PERSONAJES</router-link></li>
        <li><router-link to="/starships">NAVES</router-link></li>
        <li><router-link to="/planets">PLANETAS</router-link></li>
      </ul>
  
      <!-- Controles de música -->
      <div class="audio-controls">
        <button @click="startAudio">Iniciar Música</button>
        <button @click="pauseAudio">Pausar Música</button>
        <input type="range" v-model="volume" @input="changeVolume" min="0" max="1" step="0.01" />
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        volume: 1, // Volumen inicial
      };
    },
    methods: {
      startAudio() {
        this.$emit('start-audio');
      },
      pauseAudio() {
        this.$emit('pause-audio');
      },
      changeVolume() {
        this.$emit('change-volume', this.volume);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Navbar general */
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap; /* Permite ajuste para pantallas pequeñas */
    justify-content: space-between;
    align-items: center;
    background: #222;
    padding: 1rem 2rem;
    color: white;
    z-index: 1000;
    box-sizing: border-box;
  }
  
  /* Lista de enlaces */
  .navbar ul {
    display: flex;
    gap: 1rem;
    list-style: none;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    justify-content: center;
  }
  
  .navbar li {
    text-align: center;
  }
  
  .navbar a {
    color: white;
    text-decoration: none;
    text-transform: uppercase; /* Mayúsculas */
  }
  
  .navbar a:hover {
    text-decoration: underline;
  }
  
  /* Controles de música */
  .audio-controls {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    min-width: 200px;
  }
  
  .audio-controls button {
    background-color: #444;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 1rem;
    border-radius: 5px;
  }
  
  .audio-controls button:hover {
    background-color: #666;
  }
  
  .audio-controls input[type="range"] {
    width: 120px;
    max-width: 100%;
    cursor: pointer;
  }
  </style>
  