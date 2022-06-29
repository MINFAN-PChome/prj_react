module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    'linebreak-style': ['off', 'windows'],
    'import/no-extraneous-dependencies': ['off'],
    'import/prefer-default-export': ['off'],
    'import/no-unresolved': ['off'],
    'react/prop-types': ['off'],
    'no-param-reassign': ['off'],
    'no-trailing-spaces': ['off'],
    'comma-dangle': ['off'],
    indent: ['off'],
    'function-paren-newline': ['off'],
    'no-multi-spaces': ['off'],
    'jsx-quotes': ['off'],
    'object-curly-newline': ['off'],
    'implicit-arrow-linebreak': ['off'],
    'operator-linebreak': ['off'],
    'arrow-body-style': ['off'],
    'consistent-return': ['off'],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
  },
};
