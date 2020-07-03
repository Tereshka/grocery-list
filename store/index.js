export const state = () => ({
  food: [],
  groceryLists: [],
  newListId: 0,
  menuItems: [
    {
      id: 0,
      icon: 'mdi-apps',
      title: 'Welcome',
      description: '',
      to: '/',
    },
    {
      id: 1,
      icon: 'mdi-file-edit-outline',
      title: 'Create new list',
      description: 'Here you can create a new grocery list',
      to: '/grocery-list/new',
    },
    {
      id: 2,
      icon: 'mdi-format-list-bulleted-square',
      title: 'All grocery lists',
      description: 'Or you can check the previous one',
      to: '/grocery-list',
    },
    {
      id: 3,
      icon: 'mdi-food',
      title: 'Food list',
      description: 'Besides you can check all available food',
      to: '/food',
    },
  ],
});

export const getters = {
  getMenuItems(state) {
    return state.menuItems;
  },
  getFood(state) {
    return state.food;
  },
  getGroceryLists(state) {
    return state.groceryLists;
  },
  getNewListId(state) {
    return state.newListId;
  },
};

export const mutations = {
  setFood(state, food) {
    state.food = food;
  },

  addNewFood(state, value) {
    state.food.push(value);
  },

  setGroceryLists(state, groceryLists) {
    state.groceryLists = groceryLists;
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

  countSum(state, listId) {
    const list = state.groceryLists.find(el => el.id === listId);
    let sum = 0;
    list.food.forEach((el) => {
      const fromState = state.food.find(f => f.id === el.id);
      if (fromState) {
        sum += fromState.price;
      }
    });
    list.sum = sum;
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
