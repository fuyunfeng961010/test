module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    eqeqeq: 'off',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'space-before-function-paren': ['warn', 'never'],
    'space-before-function-paren': 'off',
    quotes: 'off',
    camelcase: ['warn'],
    semi: 1,
    'prefer-const': 'off',
    'dot-notation': 'off'
  }
};
