<template>
  <v-container>
    <v-row justify="space-between">
      <v-col cols="auto">
        <h3>{{ getDateTime(list.date) }}</h3>
      </v-col>
      <v-col
        cols="auto"
        class="text-center pl-0"
      >
        <v-chip :ripple="false" class="deep-purple accent-4 white--text">
          {{ `$${list.sum}` }}
        </v-chip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    getDateTime(value) {
      const date = new Date(value);
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
      return date.toLocaleDateString('ru-Ru', options);
    },
  },
};
</script>
