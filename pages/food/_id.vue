<template>
  <div>
    <div v-if="product === undefined || product === null">
      Fetching product #{{ $route.params.id }}...
    </div>
    <div v-else row justify-center align-center>
      <div class="text-center">
        <h1>{{ product.name }}</h1>
      </div>
      <v-container>
        <v-row no-gutters>
          <v-col>
            <v-card class="ma-3">
              <v-img class="white--text align-end" height="auto" :src="`${STATIC_PATH}/${product.img}`" />
              <v-container>
                <v-row justify="space-between">
                  <v-col cols="auto">
                    <h3>{{ product.description }}</h3>
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
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('food', {
      food: 'getFood',
    }),
    product() {
      return this.food.find(el => el.id === +this.$route.params.id);
    },
  },
  head() {
    return {
      title: this.product ? this.product.name : '',
    };
  },
};
</script>
