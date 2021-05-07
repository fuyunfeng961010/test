module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    cordova: true,
    Toast: true
  },
  rules: {
    eqeqeq: 0,
    quotes: 1,
    camelcase: 0,
    semi: 1,
    'space-before-function-paren': 0,
    'no-prototype-builtins': 0,
    'quote-props': 0,
    'no-undef': 1,
    'no-unused-vars': 1
  }
}
