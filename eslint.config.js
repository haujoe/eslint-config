/* eslint-disable import/order */
import sortKeys from 'eslint-plugin-sort-keys'

import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
require('sucrase/register')
/** @type {typeof import('./src/index.ts')} */
const { syakod } = require('./src/index.ts')

// import { syakod } from './dist/index.js'

export default syakod([
  {
    files: ['src/**/*.ts'],
    plugins: {
      'sort-keys': sortKeys,
    },
    rules: {
      'sort-keys/sort-keys-fix': 'error',
    },
  },
])
