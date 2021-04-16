var program = require('commander')
var inquirer = require('inquirer')

program
  .version('0.0.1')
  .command('enter [app-name]')
  .option('-r, --registry <registry>', 'use custom registry')
  .option('-d, --dist-url <disturl>', 'use custom dist url')
  .option('-l, --log-level <loglevel>', 'use custom log level')
  .action((name) => {
    if (name) {
      console.log(`your enter app-name is ${name}`)
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

    const conf = [


      [

        {
          type: 'list',
          name: 'data',
          message: '选择语言',
          choices: [


            {
              name: 'javascript', value: 0
            },
            {
              name: 'go', value: 1
            },


          ]
        }

      ],

      [

        {
          type: 'list',
          name: 'data',
          message: '工作类型',
          choices: [
            {
              name: 'web', value: 0,
            },
            {
              name: 'node', value: 1
            }
          ]
        }

      ],
      [
        {
          type: 'number',
          name: 'data',
          message: '期望薪资',
        }
      ]

    ]


    let step = 0;
    let results = []

    function select(value) {
      console.log('step =>', step)
      if (step < 3) {
        inquirer.prompt(conf[step]).then(res => {
          console.log('res', res)
          if (conf[step][0].type === 'list') {
            results.push(`${conf[step][0].message} => ${conf[step][0].choices.find(item => item.value === res.data).name}`)
          } else {
            results.push(`${conf[step][0].message} => ${res.data}`)
          }
          step++
          return select(res.data)
        })
      } else {
        console.log('end: ', results)
      }

    }

    select(step)

  });

program.parse(process.argv)