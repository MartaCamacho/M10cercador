import { mapActions, mapState, mapMutations } from 'vuex';

export default {
  name: "SearchFilm",
  computed: {
      ...mapState(['movies'])
  },
  methods: {
      ...mapActions(['getMovies']),
      ...mapMutations(['setMovies'])
  }
};
