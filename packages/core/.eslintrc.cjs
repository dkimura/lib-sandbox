/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  extends: ['@repo/eslint-config'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['react-refresh'],
  parserOptions: {
    ecmaVersion: 'latest',
    tsconfigRootDir: __dirname,
    project: 'tsconfig.lint.json',
    sourceType: 'module',
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/jsx-props-no-spreading': 'off',
  },
}

module.exports = config
