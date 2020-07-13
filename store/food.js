export const state = () => ({
  food: [],
});

export const getters = {
  getFood(state) {
    return state.food;
  },
};

export const mutations = {
  setFood(state, food) {
    state.food = food;
  },

  addNewFood(state, value) {
    state.food.push(value);
  },
};
