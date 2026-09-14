const { spawn } = require('child_process');
const path = require('path');

require('./node-file-polyfill.cjs');

const remixCli = require.resolve('@remix-run/dev/dist/cli.js');
const nodeFilePolyfill = path.resolve(__dirname, 'node-file-polyfill.cjs');

const proc = spawn(process.execPath, ['-r', nodeFilePolyfill, remixCli, 'vite:dev'], {
  stdio: 'inherit',
  shell: false,
});

proc.on('exit', (code) => {
  process.exit(code);
});

proc.on('error', (error) => {
  console.error('Failed to start Remix dev server:', error);
  process.exit(1);
});
