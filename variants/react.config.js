module.exports = {
  extends: ['plugin:react/recommended'],
  plugins: ['react'],
  rules: {
    'import/no-named-as-default': 0,
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};