<template>
  <v-container>
    <v-row align="center">
      <v-col cols="11">
        <v-select
          v-model="selectedItem"
          :items="food"
          item-text="name"
          item-value="id"
          label="Add one more food"
        />
      </v-col>
      <v-col cols="1">
        <v-icon color="primary" @click="addToList">
          mdi-plus
        </v-icon>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  props: {
    listId: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      selectedItem: null,
    };
  },
  computed: {
    ...mapGetters({
      food: 'getFood',
    }),
  },
  methods: {
    ...mapMutations([
      'addFoodInList',
      'countSum',
    ]),
    addToList() {
      this.addFoodInList({ foodId: this.selectedItem, listId: this.listId });
      this.countSum(this.listId);
      this.selectedItem = null;
    },
  },
};
</script>
