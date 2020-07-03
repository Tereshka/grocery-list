<template>
  <div row justify-center align-center>
    <div class="text-center">
      <h1>Grocery lists</h1>
    </div>
    <v-container>
      <v-row>
        <v-col>
          <v-select
            v-model="sortBy"
            :items="sortValues"
            label="sort by"
          />
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col
          v-for="list in sortedGroceryLists"
          :key="list.id"
          :xs="12"
          :sm="6"
          :md="6"
        >
          <NuxtLink :to="`/grocery-list/${list.id}`">
            <v-card class="ma-3">
              <GroceryListHeader :list="list" />
            </v-card>
          </NuxtLink>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import GroceryListHeader from '../../components/GroceryListHeader';

export default {
  components: {
    GroceryListHeader,
  },
  data() {
    return {
      sortBy: 'date',
      sortValues: [
        'date',
        'sum'
      ],
    };
  },
  computed: {
    ...mapGetters({
      groceryLists: 'getGroceryLists',
    }),
    sortedGroceryLists() {
      const array = [...this.groceryLists];
      return array.sort((a, b) => b[this.sortBy] - a[this.sortBy]);
    }
  },
};
</script>
