module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:@typescript-eslint/recommended'],
  ignorePatterns: ['.eslintrc.js', 'metro.config.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
