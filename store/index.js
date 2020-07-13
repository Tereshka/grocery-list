export const state = () => ({
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
};
