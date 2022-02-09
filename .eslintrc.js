const plugins = [
  'prettier',
  '@typescript-eslint',
  'simple-import-sort',
  'import',
  'jsx-a11y',
];
if (process.env.WARN_ONLY === 'true') {
  plugins.push('only-warn');
}
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: plugins,
  extends: [
    'react-app',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  rules: {
    'no-console': 'warn',
    'no-nested-ternary': 'warn',
    eqeqeq: 'warn',
    curly: 'warn',
    'no-else-return': 'warn',
    'react/jsx-key': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-prop-types': 'off',
    'react/display-name': 'off',
    'comma-dangle': 'off',
    'prefer-destructuring': 'off',
    'object-shorthand': 'off',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'sort-imports': 'off',
    'import/first': 'warn',
    'import/order': 'off',
    'import/extensions': 'off',
    'import/newline-after-import': 'warn',
    'import/no-duplicates': 'error',
    'jsx-a11y/label-has-associated-control': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
};
