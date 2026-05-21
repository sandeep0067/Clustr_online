import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores([
    'dist',
    'node_modules',
    'backend/node_modules_bak',
    'backend/node_modules_unused',
    'SkillSwap/dist',
    'SkillSwap/node_modules',
    '**/dist*.{js,jsx}',
  ]),
  js.configs.recommended,
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
  {
    files: ['server.js', 'express-demo.js', 'test-*.js', 'test-*.cjs', 'scratch/**/*.js', 'backend/**/*.js', 'src/fileHandling/**/*.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
])
