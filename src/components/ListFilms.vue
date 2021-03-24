<template>
  <div>
    <div class="d-flex" v-if="films.length > 0" >
        <div class="d-flex justify-content-center row" v-for="film in films" :key="film.id" >
            <ItemFilm class="col-6" :film="film"  />
        </div>
    </div>
    <div v-else>
        <b-alert variant="danger" show>No hay películas disponibles</b-alert>
    </div>
  </div>
</template>

<script src="../scripts/ListFilms.js"></script>

<style scoped>
@import url("../styles/css/SearchFilm.css");
</style>