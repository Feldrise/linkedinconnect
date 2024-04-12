module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'google',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react'],
  rules: {
    'prefer-const': 'error',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-explicit-any': 'error',
		'no-tabs': 'off',
		'linebreak-style': 'off',
		'indent': ['error', 'tab'],
		'max-len': ['error', {'code': 160}],
  },
}
