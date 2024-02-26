module.exports = {
  root: true,
  env: { es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@stylistic'],
  rules: {
    '@stylistic/arrow-parens': ['error', 'as-needed'],
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/eol-last': ['error', 'always'],
    '@stylistic/indent': ['error', 2],
    '@stylistic/linebreak-style': ['error', 'unix'],
    '@stylistic/max-len': ['error', { code: 120 }],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/quote-props': ['error', 'consistent-as-needed'],
    '@stylistic/semi': 'error',
  },
};
