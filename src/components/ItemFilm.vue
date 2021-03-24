<template>
      <div class="w-100">
        <b-card-group class="d-flex flex-column">
        <b-card-header>{{ film.title }}</b-card-header>
        <b-card >
          <b-card-body>
            <b-card-text>
              {{ film.available }}
            </b-card-text>
          </b-card-body>
        </b-card>
        </b-card-group>
      </div>
</template>

<script src="../scripts/ItemFilm.js"></script>

<style scoped>
@import url("../styles/css/SearchFilm.css");
</style>
