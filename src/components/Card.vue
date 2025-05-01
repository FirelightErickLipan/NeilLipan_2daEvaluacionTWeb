<template>
    <div class="card">
      <h3>{{ title }}</h3>
      <ul>
        <li v-for="(value, key) in info" :key="key">
          <strong>{{ key }}:</strong> {{ value }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      info: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .card {
    background: #2e2e2e;
    color: white;
    padding: 1.2rem;
    margin: 0.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    width: 280px;
    transition: transform 0.2s ease;
  }
  .card:hover {
    transform: scale(1.03);
  }
  .card h3 {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
    color: #ffd700;
  }
  .card ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .card li {
    margin-bottom: 0.4rem;
  }
  </style>
  