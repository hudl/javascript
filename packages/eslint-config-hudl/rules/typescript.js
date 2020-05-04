module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/explicit-function-return-type': [2, { 'allowExpressions': true }],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/typedef': [2, {
      'parameter': true,
      'arrowParameter': false,
    }],
    '@typescript-eslint/no-inferrable-types': [2, { 'ignoreParameters': true, 'ignoreProperties': true }],
    '@typescript-eslint/ban-ts-ignore': 0,
  },
};
