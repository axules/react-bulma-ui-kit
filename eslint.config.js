import babelParser from '@babel/eslint-parser';
// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'eslint/config';
import {
  jsConfig,
  reactConfig,
} from 'eslint-presets';
import globals from 'globals';


const customConfig = {
  name: 'project-custom-config',
  files: ['**/*.mjs', '**/*.js', '**/*.jsx'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: babelParser,
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
        spread: true,
      },
    },
    globals: {
      ...globals.jest,
      ...globals.browser,
      ...globals.node,
      ...globals.commonjs,
    },
  },
  settings: {
    react: { version: '19' },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  linterOptions: {
    reportUnusedDisableDirectives: true,
  },
};

const globalIgnores = {
  name: 'project-global-ignores',
  ignores: ['node_modules/**', 'build/**', 'coverage/**', 'lib/**', 'docs/**'],
};

export default defineConfig([
  globalIgnores,
  customConfig,
  jsConfig,
  reactConfig,
  {
    rules: {
      eqeqeq: 0,
    },
  },
]);
