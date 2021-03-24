import Vue from "vue";
import Vuex from "vuex";
import films from "./../public/assets/movies.json";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    films: films,
    filters: {
      search: '',
      available: true
    }
  },
  mutations: {
    SetSearch(state, search) {
      state.filters.search = search;
    },
    SetAvailable(state) {
      state.filters.available = !state.filters.available;
    },
  },
  getters: {
    FilteredFilms(state){
      let films = state.films;
      let filmsRefresh = [];

      if(state.filters.search.length > 2){
        for(const film of films){
          if(film.available === state.filters.available){
            if(film.title.toLocaleLowerCase().includes(state.filters.search)){
              filmsRefresh.push(film);
            }
          }
        }
        films = filmsRefresh;
        return films;
      } else {
        for(const film of films){
          if(film.available === state.filters.available){
            filmsRefresh.push(film);
          }
        }
        films = filmsRefresh;
        return films;
      }
    }
  }

  /* state: {
    movies: [],
    searchInput: "",
    available: 'all',
    filteredMovies: []
  },
  mutations: {
    setMovies: function(state, moviesAction) {
      state.movies = moviesAction;
    },
    setAvailable: function(state, boolean) {
        state.available = boolean;
    },
    setSearch: function(state, value) {
        state.searchInput = value;
    },
    sortedMovies: function(state, value) {
        let tempMovies = state.movies;
        if (value == "all") {
        state.filteredMovies = tempMovies;
        } else if( value === true) {
        tempMovies = tempMovies.filter((item) => {
        return (item.available === true)
        })
        state.filteredMovies = tempMovies;
        } else if( value === false) {
        tempMovies = tempMovies.filter((item) => {
        return (item.available === false)
        })
        state.filteredMovies = tempMovies;
        }
        console.log(state.filteredMovies)
    },
  },
  actions: {
    getMovies: async function({ commit }) {
      const data = await fetch("/assets/movies.json");
      const theMovies = await data.json();
      commit("setMovies", theMovies);
    },
    getAvailable: async function({ commit }, value) {
        commit("setAvailable", value);
    },
  } */
});

export default store;
