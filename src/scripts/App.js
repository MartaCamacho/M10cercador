import Vuex from "vuex";
import SearchFilm from "../components/SearchFilm.vue";


export default {
  name: "App",
  components: {
    SearchFilm,
  },
  computed: {
    ...Vuex.mapState(["movies"]),
  },
};
