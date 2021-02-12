module.exports = {
  extends: 'airbnb',

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
