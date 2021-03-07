import Vue from 'vue';
import Vuex from 'vuex';
import movies from './Modules/movies'

Vue.use(Vuex)

const store = new Vuex.Store({
        state: {
            movies: []
        },
        mutations: {
            setMovies(state, moviesAction) {
                state.movies = moviesAction
            }
        },
        actions: {
            getMovies: async function({ commit }) {
                const data = await fetch('./assets/movies.json')
                const theMovies = await data.json();
                console.log(data, 'movies')
                commit('setMovies', theMovies)
            }
        },
        modules: {
            movies
        }
    }
)

export default store;