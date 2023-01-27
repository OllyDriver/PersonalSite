module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'generator-star-spacing': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
