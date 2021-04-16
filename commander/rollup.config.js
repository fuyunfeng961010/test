import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'test.js',
  output: {
    file: './bin/index.js',
    format: 'cjs',
    banner: '#!/usr/bin/env node',
  },
  plugins: [
    resolve(),
    replace({
      delimiters: ['', ''],
      '#!/usr/bin/env node': ''
    }),
    babel({
      // babelrc: false,
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
};