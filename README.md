# 🌌 SWAPI Portal - Segunda Evaluación Tecnologías Web

Este proyecto es un portal web desarrollado en **Vue 3 + Vite** que consume la [API pública de Star Wars (SWAPI)](https://swapi.dev/). Muestra información de personajes, planetas y naves en una interfaz temática con navegación y componentes reutilizables.

## 🚀 Características

- 🌠 Consulta de **personajes**, **planetas** y **naves** espaciales de Star Wars.
- 🖼️ Estética personalizada con imágenes, música y fondos espaciales.
- ⚙️ Navegación con Vue Router y componentes reutilizables (Navbar, Footer, Cards).
- 🔄 Carga dinámica de datos desde SWAPI.
- 🔢 Muestra solo los **primeros 20 personajes** para mejorar el rendimiento.
- 🎞️ Muestra el **título de la película** en cada vista correspondiente.

## 🛠️ Tecnologías usadas

- Vue 3 + Vite
- Vue Router
- HTML/CSS
- JavaScript (ES6)
- API SWAPI

## 📷 Vista previa

![Preview](./public/assets/people.jpg)

## 📂 Estructura de carpetas

```plaintext
portal-swapi/
├── public/
│   └── assets/ (imágenes, música y fondo)
├── src/
│   ├── components/ (Navbar, Footer, Card)
│   ├── views/ (People.vue, Planets.vue, Starships.vue, Home.vue)
│   └── assets/
├── App.vue
├── main.js
└── README.md

# Clona el repositorio
git clone https://github.com/FirelightErickLipan/NeiliLipan_2daEvaluacionTWeb.git

# Entra en la carpeta del proyecto
cd NeiliLipan_2daEvaluacionTWeb

# Instala las dependencias
npm install

# Ejecuta el servidor de desarrollo
npm run dev


🎬 Créditos

    Proyecto realizado por: Neil Erick Lipan Valdez

    Segunda Evaluación - Tecnologías Web

    Inspirado en el universo de Star Wars 🌠
