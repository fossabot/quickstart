module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.json'],
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
    },
  },
  plugins: [
    'progress',
    '@typescript-eslint',
    'jsx-a11y',
    'css-modules',
    'simple-import-sort',
    'compat',
    'security',
    'react-hooks',
    'i18next',
    'prettier',
  ],
  extends: [
    'standard-react',
    'standard-with-typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:css-modules/recommended',
    'plugin:compat/recommended',
    'plugin:security/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    'progress/activate': 1,
    'compat/compat': 1,
    'simple-import-sort/sort': 'error',
    'import/order': 'off',
    'prettier/prettier': 'error',
    'i18next/no-literal-string': ['error', { markupOnly: true }],
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    'react/prop-types': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/triple-slash-reference': 0,
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        vars: 'local',
        argsIgnorePattern: '^_',
      },
    ],
    'no-console': [
      2,
      {
        allow: ['warn', 'error'],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.spec.js', '**/*.spec.jsx'],
      parserOptions: {
        project: './tsconfig.json',
        extraFileExtensions: ['.json'],
      },
      extends: [
        'plugin:cypress/recommended',
        'plugin:chai-friendly/recommended',
      ],
      plugins: ['cypress', 'chai-friendly'],
    },
    {
      files: ['**/*.test.ts', '**/*.test.tsx', '**/*.test.js', '**/*.test.jsx'],
      parserOptions: {
        project: './tsconfig.test.json',
        extraFileExtensions: ['.json'],
      },
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      plugins: ['jest'],
    },
    {
      files: [
        '**/*.stories.ts',
        '**/*.stories.tsx',
        '**/*.stories.js',
        '**/*.stories.jsx',
      ],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
    {
      files: ['**/*.json'],
      plugins: ['json'],
      extends: ['plugin:json/recommended'],
      rules: {
        'json/undefined': 'error',
        'json/enum-value-mismatch': 'error',
        'json/unexpected-end-of-comment': 'error',
        'json/unexpected-end-of-string': 'error',
        'json/unexpected-end-of-number': 'error',
        'json/invalid-unicode': 'error',
        'json/invalid-escape-character': 'error',
        'json/invalid-character': 'error',
        'json/property-expected': 'error',
        'json/comma-expected': 'error',
        'json/colon-expected': 'error',
        'json/value-expected': 'error',
        'json/comma-or-close-backet-expected': 'error',
        'json/comma-or-close-brace-expected': 'error',
        'json/trailing-comma': 'error',
        'json/duplicate-key': 'error',
        'json/comment-not-permitted': 'error',
        'json/schema-resolve-error': 'error',
        'json/unknown': 'error',
      },
    },
  ],
}
