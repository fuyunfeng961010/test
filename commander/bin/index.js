#!/usr/bin/env node
'use strict';

var program = require('commander');
var inquirer = require('inquirer');
// require('./enter')

program.version('0.0.1').command('create [app-name]').option('-r, --registry <registry>', 'use custom registry').option('-d, --dist-url <disturl>', 'use custom dist url').option('-l, --log-level <loglevel>', 'use custom log level').action(function (cmd, opt) {
  console.log('cmd', cmd);
  console.log('opt', opt);
  if (cmd) {
    console.log('your enter app-name is ' + cmd);
  }
  // inquirer.prompt([
  //   {
  //     type: 'password',
  //     name: 'pwd',
  //     message: `confirm your name is '${name}'? [Y/N]`
  //   }
  // ]).then((answers) => {
  //   console.log('结果为: ', answers)
  // })

  var conf = [[{
    type: 'list',
    name: 'data',
    message: '选择语言',
    choices: [{
      name: 'javascript', value: 0
    }, {
      name: 'go', value: 1
    }]
  }], [{
    type: 'list',
    name: 'data',
    message: '工作类型',
    choices: [{
      name: 'web', value: 0
    }, {
      name: 'node', value: 1
    }]
  }], [{
    type: 'number',
    name: 'data',
    message: '期望薪资'
  }]];

  var step = 0;
  var results = [];

  function select(value) {
    console.log('step =>', step);
    if (step < 3) {
      inquirer.prompt(conf[step]).then(function (res) {
        console.log('res', res);
        if (conf[step][0].type === 'list') {
          results.push(conf[step][0].message + ' => ' + conf[step][0].choices.find(function (item) {
            return item.value === res.data;
          }).name);
        } else {
          results.push(conf[step][0].message + ' => ' + res.data);
        }
        step++;
        return select(res.data);
      });
    } else {
      console.log('end: ', results);
    }
  }

  select();
});

program.on('--help', function () {
  console.log('');
  console.log('Examples:');
  console.log('  $ fuyf-cli create app-name');
  console.log('  $ fuyf-cli create -h');
});

program.parse(process.argv);
