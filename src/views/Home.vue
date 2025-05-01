<template>
    <div class="home">
      <div class="content">
        <h2>Bienvenido al Portal de Star Wars</h2>
        <p>Explora personajes, naves y planetas del universo de Star Wars usando la API de SWAPI.</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" alt="Star Wars Logo" class="logo" />
  
        <h3 class="subtitle">SELECCIONE UNA CATEGORÍA A EXPLORAR</h3>
  
        <div class="button-grid">
          <div class="category" @click="goTo('/people')">
            <img src="/assets/people.jpg" alt="Personajes" />
            <span>PERSONAJES</span>
          </div>
          <div class="category" @click="goTo('/starships')">
            <img src="/assets/starships.jpg" alt="Naves" />
            <span>NAVES</span>
          </div>
          <div class="category" @click="goTo('/planets')">
            <img src="/assets/planets.jpg" alt="Planetas" />
            <span>PLANETAS</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goTo(route) {
        // Animación tipo Star Wars antes de navegar
        const body = document.body
        body.classList.add('fade-out')
        setTimeout(() => {
          this.$router.push(route)
          body.classList.remove('fade-out')
        }, 500)
      }
    }
  }
  </script>
  
  <style scoped>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding-top: 5rem;
    text-align: center;
  }
  
  .content {
    max-width: 90%;
  }
  
  .logo {
    width: 40%;
    max-width: 300px;
    margin: 2rem auto;
  }
  
  .subtitle {
    font-size: 1.2rem;
    margin: 1.5rem 0;
    color: #ffd700;
    letter-spacing: 2px;
  }
  
  .button-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .category {
    position: relative;
    cursor: pointer;
    width: 250px;
    height: 150px;
    overflow: hidden;
    border-radius: 10px;
    transition: transform 0.3s ease;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  }
  
  .category img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.6);
    transition: filter 0.3s ease;
  }
  
  .category span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.2rem;
    color: #fff;
    font-weight: bold;
    text-shadow: 2px 2px 4px #000;
    z-index: 1;
  }
  
  .category:hover {
    transform: scale(1.05);
  }
  
  .category:hover img {
    filter: brightness(0.8);
  }
  
  /* Animación estilo Star Wars */
  .fade-out {
    animation: fadeOut 0.5s ease forwards;
  }
  
  @keyframes fadeOut {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0.95);
    }
  }
  </style>
  