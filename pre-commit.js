#!/usr/bin/env node

var spawn = require('child_process').spawn;

function runMake() {
  var make = spawn('make', ['pre-commit']);
  make.stdout.setEncoding('utf8');
  make.stderr.setEncoding('utf8');

  make.stdout.on('data', function (data) {
    process.stdout.write(data);
  });

  make.stdout.on('error', function (data) {
    process.stderr.write('ERROR:', data);
  });

  make.on('close', function (code) {
    if (code) {
      console.log('make post-merge exited with code', code);
      process.exit(code);
    }
  });
}

console.log('Running pre-commit hook');
runMake();
