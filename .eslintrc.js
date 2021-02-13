module.exports = {
  extends: ['airbnb', 'plugin:cypress/recommended', 'prettier'],

  env: {
    jest: true,
  },

  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['/*.js', '**/*.test.js', '**/*.spec.js'] },
    ],
  },
};
