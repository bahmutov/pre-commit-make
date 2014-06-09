#!/usr/bin/env node

var spawn = require('child_process').spawn;

function runMake() {
  var make = spawn('make', ['post-merge']);
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

function hasNoChanges() {
  // args - see http://www.manpagez.com/man/5/githooks/
  console.log(process.argv);
  var wasSquash = process.argv[2] === '1';
  return wasSquash;
}

if (hasNoChanges()) {
  process.exit(0);
} else {
  console.log('Running post-merge hook');
  runMake();
}

