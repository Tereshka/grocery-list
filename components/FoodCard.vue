<template>
  <v-card class="ma-3">
    <NuxtLink :to="'/food/'+product.id">
      <v-img class="white--text align-end" height="auto" :src="product.img" />
    </NuxtLink>
    <v-container>
      <v-row justify="space-between">
        <v-col cols="auto">
          <h3>{{ product.name }}</h3>
        </v-col>
        <v-col
          cols="auto"
          class="text-center pl-0"
        >
          <v-chip :ripple="false" class="deep-purple accent-4 white--text">
            {{ `$${product.price}` }}
          </v-chip>
        </v-col>
      </v-row>

      <v-row v-if="listId !== null" justify="space-between">
        <v-col cols="auto">
          <v-icon :color="cartColor" @click="toogleCart">
            mdi-cart
          </v-icon>
        </v-col>
        <v-col cols="auto">
          <v-icon @click="removeFromList">
            mdi-delete
          </v-icon>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    product: {
      type: Object,
      default: () => {},
    },
    listId: {
      type: Number,
      default: null,
    },
  },
  computed: {
    cartColor() {
      if (this.product.check) {
        return 'primary';
      }
      return 'default';
    },
  },
  methods: {
    ...mapMutations([
      'toogleFoodInList',
      'removeFoodFromList',
      'countSum',
    ]),
    toogleCart() {
      this.toogleFoodInList({ foodId: this.product.id, listId: this.listId });
    },
    removeFromList() {
      this.removeFoodFromList({ foodId: this.product.id, listId: this.listId });
      this.countSum(this.listId);
    },
  }
};
</script>
