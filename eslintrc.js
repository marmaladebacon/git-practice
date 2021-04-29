module.exports = {
  root: true,
  extends: [
    require.resolve('./base'),
    require.resolve('./unicorn'),
    require.resolve('./typescript'),
    require.resolve('./prettier'),
  ],
  overrides: [
    {
      files: ['*.vue'],
      extends: [
        require.resolve('./vue'),
      ],
      rules: {
        // HANDLED BY PRETTIER
        'vue/html-self-closing': 0,
        'vue/max-len': 0,
        'vue/array-bracket-newline': 'off',
        'vue/array-bracket-spacing': 'off',
        'vue/arrow-spacing': 'off',
        'vue/block-spacing': 'off',
        'vue/block-tag-newline': 'off',
        'vue/brace-style': 'off',
        'vue/comma-dangle': 'off',
        'vue/comma-spacing': 'off',
        'vue/comma-style': 'off',
        'vue/dot-location': 'off',
        'vue/func-call-spacing': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/html-closing-bracket-spacing': 'off',
        'vue/html-end-tags': 'off',
        'vue/html-indent': 'off',
        'vue/html-quotes': 'off',
        'vue/key-spacing': 'off',
        'vue/keyword-spacing': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/script-indent': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/space-in-parens': 'off',
        'vue/space-infix-ops': 'off',
        'vue/space-unary-ops': 'off',
        'vue/template-curly-spacing': 'off',
      },
    },
  ],
};