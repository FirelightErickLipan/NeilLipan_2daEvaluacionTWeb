<template>
  <div id="app" class="starfield">
    <!-- Reproductor de audio con controles -->
    <audio ref="audio" loop>
      <source src="/assets/cantina.mp3" type="audio/mpeg" />
      <source src="/assets/cantina.ogg" type="audio/ogg" />
      <source src="/assets/cantina.wav" type="audio/wav" />
      Tu navegador no soporta la reproducción de audio.
    </audio>

    <!-- Navbar -->
    <Navbar @start-audio="startAudio" @pause-audio="pauseAudio" @change-volume="changeVolume" />

    <!-- Vista del Router -->
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  methods: {
    // Iniciar la música
    startAudio() {
      const audio = this.$refs.audio;
      audio.play();
    },
    // Pausar la música
    pauseAudio() {
      const audio = this.$refs.audio;
      audio.pause();
    },
    // Cambiar el volumen
    changeVolume(volume) {
      const audio = this.$refs.audio;
      audio.volume = volume;
    }
  }
}
</script>

<style>
/* Fondo animado de estrellas */
.starfield {
  background-image: url('/assets/starfield.gif');
  background-size: cover;
  background-repeat: repeat;
  background-position: center;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

/* Fuente tipo Star Wars */
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

body {
  margin: 0;
  font-family: 'Press Start 2P', cursive; /* Fuente estilo Star Wars */
  background-color: #000; 
  color: #fff; 
}

/* Estilo para el contenedor principal */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Estilo para el contenedor del router-view */
router-view {
  flex-grow: 1;
}

/* Aseguramos que los componentes como Navbar y Footer tengan el mismo estilo */
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
