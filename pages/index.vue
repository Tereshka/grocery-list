<template>
  <div class="d-flex flex-column justify-center align-center">
    <div class="text-center ma-5">
      <h1 class="primary--text text-h1">
        Welcome<br>to<br>Grocery list
      </h1>
    </div>
    <v-list class="nav mt-5">
      <v-list-item-group color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.description }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import dataJSON from '../assets/data.json';

export default {
  computed: {
    ...mapGetters({
      menuIitems: 'getMenuItems',
    }),
    items() {
      return this.menuIitems.filter(el => el.id !== 0);
    },
  },
  created() {
    this.setGroceryLists(dataJSON.groceryLists);
    this.setFood(dataJSON.food);
  },
  methods: {
    ...mapMutations([
      'setGroceryLists',
      'setFood'
    ]),
  },
};
</script>
