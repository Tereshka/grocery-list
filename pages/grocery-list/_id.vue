<template>
  <div>
    <div v-if="$fetchState.pending">
      Fetching grocery list #{{ $route.params.id }}...
    </div>
    <div v-else>
      <GroceryListHeader :list="list" />
      <AddNewFood :list-id="list.id" />
      <FoodContainer :food="currentFood" :list-id="list.id" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import GroceryListHeader from '../../components/GroceryListHeader';
import FoodContainer from '../../components/FoodContainer';
import AddNewFood from '../../components/AddNewFood';

export default {
  components: {
    GroceryListHeader,
    FoodContainer,
    AddNewFood,
  },
  fetch() {
    this.list = this.groceryLists.find(el => el.id === +this.$route.params.id);
  },
  data() {
    return {
      list: null,
    };
  },
  computed: {
    ...mapGetters({
      groceryLists: 'getGroceryLists',
      food: 'getFood',
    }),
    currentFood() {
      const foods = this.list.food.map((f) => {
        const checkFood = this.food.find(el => el.id === f.id);
        if (checkFood) {
          const foodInList = { ...checkFood };
          foodInList.check = f.check;
          return foodInList;
        }
      });
      return foods;
    },
  },
};
</script>
