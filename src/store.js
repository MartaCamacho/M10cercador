import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    movies: [],
  },
  mutations: {
    setMovies: function (state, moviesAction) {
      state.movies = moviesAction;
    },
  },
  actions: {
    getMovies: async function({ commit }) {
      const data = await fetch('/assets/movies.json', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
       });
      const theMovies = await data.json();
      console.log(theMovies)
      commit('setMovies', theMovies);
    },
  },
});

export default store;
