/** @type {import("eslint").Linter.Config} */
const config = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'prettier',
  ],
  plugins: ['testing-library'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*{.,_}{test,spec}.{js,jsx,ts,tsx}',
          '**/*{.,_}config.{js,jsx,ts,tsx}',
          '**/.eslintrc.{js,cjs}',
        ],
        optionalDependencies: false,
      },
    ],
  },
}

module.exports = config
