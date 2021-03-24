<template>
  <div>
    <!-- EXERCICI 2:
      <button @click="getMovies">movies</button>
    <ul v-for="(item, index) of movies" :key="index">
      <li>{{ item.title }}</li>
    </ul> -->
    <!-- EXERCICI 3 -->
    <h1>Buscador 🔎 de Vuex</h1>
    <div class="d-flex flex-column align-items-center w-100 mt-3 mb-3">
      <input class="w-50" type="text" value="search" placeholder="introduce tu búsqueda" v-model="SearchForm"/>
      <div class="mt-3 mb-3">
        <input class="ml-2" type="radio" id="true" :value="true" v-model="Available"/>
        <label class="ml-2">Disponible</label>
        <input class="ml-2" type="radio" id="false" :value="false" v-model="Available"/>
        <label class="ml-2">No Disponible</label>
      </div>
    </div>
    <div class="d-flex">
      <ListFilms  />
    </div>
  </div>
</template>

<script src="../scripts/SearchFilm.js"></script>

<style scoped>
@import url("../styles/css/SearchFilm.css");
</style>
