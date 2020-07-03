<template>
  <v-container>
    <v-row no-gutters>
      <v-col
        v-for="(product, i) in currentFoodList"
        :key="`food-${i}`"
        :xs="12"
        :sm="6"
        :md="6"
      >
        <FoodCard :product="product" :list-id="listId" />
      </v-col>
    </v-row>
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="pageLength"
        circle
      />
    </div>
  </v-container>
</template>

<script>
import FoodCard from './FoodCard';

export default {
  components: {
    FoodCard,
  },
  props: {
    food: {
      type: Array,
      default: () => [],
    },
    listId: {
      type: Number,
      default: null,
    },
    itemsPerPage: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    pageLength() {
      return Math.ceil(this.food.length / this.itemsPerPage);
    },
    currentFoodList() {
      const newFood = this.food.slice((this.page - 1) * this.itemsPerPage, this.page * this.itemsPerPage);
      return newFood;
    },
  },
};
</script>
