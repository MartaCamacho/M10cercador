import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
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
    searchResult: function(state, value) {
        let tempMovies
        if(state.filteredMovies !== []){
          tempMovies = state.filteredMovies;
        } else {
          tempMovies = state.movies;
        }
        console.log(tempMovies)
        if (value != '' && value.length > 3) {
            tempMovies = tempMovies.filter((item) => {
                return item.title
                    .toUpperCase()
                    .includes(value.toUpperCase())
                })
            }
            
        state.filteredMovies = tempMovies;
    }
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
    getFiltered: async function({ commit }, value) {
      console.log(value)
        commit("searchResult", value);
    },
  }
});

export default store;
