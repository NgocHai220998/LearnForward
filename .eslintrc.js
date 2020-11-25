module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'block-spacing': 'error',
    'brace-style': 'error',
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'always'],
    'max-depth': ['error', 4],
    'eqeqeq': [2, 'smart'],
    'curly': 'error',
    'getter-return': ['error', { allowImplicit: true }],
    'key-spacing': ['error', { beforeColon: false }],
    'keyword-spacing': ['error', { before: true, after: true }],
    'no-cond-assign': ['error', 'always'],
    'no-console': ['error', { allow: ['warn'] }],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-dupe-args': 'error',
    'no-debugger': 'error',
    'no-extra-semi': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': ['error', {'exceptions': ['Object']}],
    'no-fallthrough': 'error',
    'no-new': 'error',
  },
}
