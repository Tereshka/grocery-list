export const state = () => ({
  groceryLists: [],
  newListId: 0,
});

export const getters = {
  getGroceryLists(state) {
    return state.groceryLists;
  },
  getNewListId(state) {
    return state.newListId;
  },
};

export const mutations = {
  setGroceryLists(state, groceryLists) {
    state.groceryLists = groceryLists;
  },

  updateGroceryLists(state, groceryList) {
    state.groceryLists = [
      ...state.groceryLists.filter(el => el.id !== groceryList.id),
      groceryList,
    ];
  },

  addFoodInList(state, { foodId, listId }) {
    const { food } = state.groceryLists.find(el => el.id === listId);
    food.push({
      id: foodId,
      check: false,
    });
  },

  toogleFoodInList(state, { foodId, listId }) {
    const { food } = state.groceryLists.find(el => el.id === listId);
    const foodItem = food.find(el => el.id === foodId);
    foodItem.check = !foodItem.check;
  },

  removeFoodFromList(state, { foodId, listId }) {
    const list = state.groceryLists.find(el => el.id === listId);
    const filteredFood = list.food.filter(el => el.id !== foodId);
    list.food = filteredFood;
  },

  createNewGroceryList(state) {
    const generateNewId = () => {
      if (state.groceryLists.length === 0) {
        return 1;
      }
      let id = Math.max(...state.groceryLists.map(el => el.id));
      return ++id;
    };

    const id = generateNewId();
    const list = {
      id,
      date: new Date().getTime(),
      sum: 0,
      food: [],
    };
    state.groceryLists.push(list);
    state.newListId = id;
  },
};

export const actions = {
  countSum({ state, rootGetters, commit }, listId) {
    const list = Object.assign({}, state.groceryLists.find(el => el.id === listId));
    let sum = 0;
    list.food.forEach((el) => {
      const fromState = rootGetters['food/getFood'].find(f => f.id === el.id);
      if (fromState) {
        sum += fromState.price;
      }
    });
    list.sum = sum;

    commit('updateGroceryLists', list);
  },
};
