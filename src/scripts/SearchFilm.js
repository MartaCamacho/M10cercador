import { mapActions, mapState } from 'vuex';

export default {
  name: "SearchFilm",
  props: {},
  methods: {
      ...mapActions(['getMovies'])
  },
  computed: {
      ...mapState(['movies'])
  }
};
