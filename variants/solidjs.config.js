module.exports = {
  extends: ['plugin:react/recommended'],
  plugins: ['react'],
  rules: {
    'import/no-named-as-default': 0,
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    'import/extensions': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
