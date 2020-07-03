module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'comma-dangle': [1, 'only-multiline'],
    semi: [1, 'always'],
    'space-before-function-paren': [1, 'never'],
  }
};
