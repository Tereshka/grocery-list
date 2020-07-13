<template>
  <div row justify-center align-center>
    <div class="text-center">
      <h1>Food list</h1>
    </div>
    <FoodContainer :food="food" :items-per-page="4" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import FoodContainer from '../../components/FoodContainer';

export default {
  components: {
    FoodContainer,
  },
  computed: {
    ...mapGetters('food', {
      food: 'getFood',
    }),
  },
};
</script>
