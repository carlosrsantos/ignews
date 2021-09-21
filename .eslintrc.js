module.exports = {
    root: true,
    env: {
      node: true,
      es6: true,
    },
    parserOptions: { ecmaVersion: 12, sourceType: "module" }, // to enable features such as async/await
    ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
    extends: ['eslint:recommended'],
    overrides: [
      // This configuration will apply only to TypeScript files
      {
        files: ['**/*.ts', '**/*.tsx'],
        parser: '@typescript-eslint/parser',
        settings: { react: { version: 'detect' } },
        env: {
          browser: true,
          node: true,
          es2021: true,
        },
        extends: [
                  'prettier/prettier',
          'eslint:recommended',
          'plugin:@typescript-eslint/recommended', // TypeScript rules
          'plugin:react/recommended', // React rules
          'plugin:react-hooks/recommended', // React hooks rules
          'plugin:jsx-a11y/recommended', // Accessibility rules
          'plugin:prettier/recommended', // Prettier plugin
          'plugin:import/recommended',
          'plugin:import/typescript'
        ],
        rules: {
          // We will use TypeScript's types for component props instead
          'react/prop-types': 'off',
                  "react/jsx-uses-react": "off",
                  "react/react-in-jsx-scope": "off", 
                  "react-hooks/rules-of-hooks": "error",
                  "react-hooks/exhaustive-deps": "warn",
                  // Includes .prettierrc.js rules
          'prettier/prettier': ['warn', {}, { usePrettierrc: true }], 
          '@typescript-eslint/no-unused-vars': ['warn'],
  
          // This rule is not compatible with Next.js's <Link /> components
          'jsx-a11y/anchor-is-valid': 'off',
          'jsx-a11y/click-events-have-key-events': 'off',
          'jsx-a11y/no-noninteractive-element-interactions': 'off',
  
                  "jsx-a11y/label-has-associated-control": "warn",
  
          // I suggest this setting for requiring return types on functions only where useful
          "@typescript-eslint/explicit-module-boundary-types": "off",
  
          '@typescript-eslint/explicit-function-return-type': [
            'off',
            {
              allowExpressions: true,
              allowConciseArrowFunctionExpressionsStartingWithVoid: true,
            },
          ],
          "import/order": [
            "warn",
            {
                          "newlines-between": "always",
              "groups": ["builtin", "external", "internal"],
              "pathGroups": [
                {
                  "pattern": "react",
                  "group": "external",
                  "position": "before"
                }
              ],
              "pathGroupsExcludedImportTypes": ["react"],
              "alphabetize": {
                "order": "asc",
                "caseInsensitive": true
              }
            }
          ],
        },
      },
    ],
    
  }