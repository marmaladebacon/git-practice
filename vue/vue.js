module.exports = {
  extends: [
    require.resolve('eslint-plugin-vue/lib/configs/recommended'),
  ],
  parserOptions: {
    extraFileExtensions: ['.vue'],
    parser: require.resolve('@typescript-eslint/parser'),
  },
  rules: {
    // Additions to Recommended
    'vue/component-name-in-template-casing': 'error',
  },
};
