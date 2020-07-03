import Vue from 'vue';

Vue.mixin({
  computed: {
    // eslint-disable-next-line no-undef
    STATIC_PATH: () => STATIC_PATH,
  }
});
