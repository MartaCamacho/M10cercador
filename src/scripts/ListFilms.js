import ItemFilm from "./../components/ItemFilm";
import Vuex from "vuex";

export default {
    components: { ItemFilm },
    computed: {
        ...Vuex.mapGetters({films: "FilteredFilms"})
    }
}