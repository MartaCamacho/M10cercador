<template>
  <div>
    <button @click="getMovies">movies</button>
    <ul v-for="(item, index) of movies" :key="index">
      <li>{{ item.title }}</li>
    </ul>
  </div>
</template>

<script src="../scripts/SearchFilm.js"></script>

<style scoped>
@import url("../styles/css/SearchFilm.css");
</style>
