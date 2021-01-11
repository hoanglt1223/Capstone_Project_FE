module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier warns as ESLint warns. Make sure this is always the last configuration in the extends array.
    'plugin:react-hooks/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'unused-imports', 'react-hooks'],
  rules: {
    'react-hooks/exhaustive-deps': 0,
    'array-callback-return': 'warn',
    'consistent-return': 'warn',
    'no-else-return': ['warn', { allowElseIf: false }],
    'no-return-assign': ['warn', 'always'],
    'no-shadow': ['warn', { builtinGlobals: false, hoist: 'all', allow: [] }],
    camelcase: ['warn', { allow: ['^UNSAFE_'] }],
    eqeqeq: 'warn',
    // 'no-explicit-any': 'warn',
    'no-floating-decimal': 'warn',
    // 'no-empty-function': 'warn',
    'no-multi-spaces': 'warn',
    'no-return-await': 'warn',
    'no-self-compare': 'warn',
    'no-throw-literal': 'warn',
    'no-useless-return': 'warn',
    'max-lines': ['error', 250],
    'no-undef': 'off',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'lf'
      }
    ],
    '@typescript-eslint/no-unused-vars': 0,
    'unused-imports/no-unused-imports-ts': 0,
    '@typescript-eslint/no-unused-vars-experimental': 0,
    'unused-imports/no-unused-vars-ts': [
      0,
      { vars: 'all', varsIgnorePattern: '[I]\\w+', args: 'after-used', argsIgnorePattern: '^_' }
    ]
  },
  overrides: [
    {
      files: ['*/**/*.{js,ts,tsx}'],
      excludedFiles: 'stores',
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-inferrable-types': 'off'
      }
    }
  ],
  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect' // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' }
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' }
    ]
  }
}
