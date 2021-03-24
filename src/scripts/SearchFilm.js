/* import { mapActions, mapState, mapMutations } from "vuex"; */
import store from "./../store";
import ListFilms from "./../components/ListFilms.vue"

export default {
    components: { ListFilms },
    computed: {
        SearchForm: {
            get() {
                return store.state.filters.search;
            },
            set(value) {
                store.commit("SetSearch", value)
            }
        },
        Available: {
            get() {
                return store.state.filters.available;
            },
            set(value) {
                store.commit("SetAvailable", value)
            }
        }
    }

  /* computed: {
      ...mapState(["movies", "searchInput", "available", "filteredMovies"]),
      available: {
          get() {
              return this.$store.state.available
          },
          set(value) {
              this.$store.commit("setAvailable", value)
          }
      },
      searchInput: {
        get() {
            return this.$store.state.searchInput;
        },
        set(value) {
            this.$store.commit("setSearch", value)
        }
    },
    filteredData() {
        if(this.$store.state.searchInput.length > 2) {
            return this.$store.state.movies.filter((movie) => movie.title.toLowerCase().match(this.$store.state.searchInput.toLowerCase()))
        } else {
            return this.$store.state.filteredMovies
        }
    }
  },
  methods: {
      ...mapActions(["getMovies", "getAvailable", "getFiltered"]),
      ...mapMutations(["setMovies", "setAvailable", "sortedMovies", "searchResult"])
  },
  mounted: async function(){
    await this.$store.dispatch('getMovies');
  },
   */
};
