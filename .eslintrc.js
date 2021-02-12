module.exports = {
  extends: 'airbnb',

  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['/*.js', '**/*.test.js', '**/*.spec.js'] },
    ],
  },
};
