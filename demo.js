// Promise all
(() => {
  // 查找当前目录最大的文件
  var fs = require('fs');
  var path = require('path');

  function findLargest(dir, cb) {
    // 读取目录下的所有文件
    fs.readdir(dir, function (er, files) {
      if (er) return cb(er);

      var counter = files.length;
      var errored = false;
      var stats = [];

      files.forEach(function (file, index) {
        // 读取文件信息
        fs.stat(path.join(dir, file), function (er, stat) {

          if (errored) return;

          if (er) {
            errored = true;
            return cb(er);
          }

          stats[index] = stat;

          // 事先算好有多少个文件，读完 1 个文件信息，计数减 1，当为 0 时，说明读取完毕，此时执行最终的比较操作
          if (--counter == 0) {

            var largest = stats
              .filter(function (stat) { return stat.isFile() })
              .reduce(function (prev, next) {
                if (prev.size > next.size) return prev
                return next
              })

            cb(null, files[stats.indexOf(largest)])
          }
        })
      })
    })
  }

  findLargest('./', function (er, filename) {
    if (er) return console.error(er)
    console.log('largest file was:', filename)
  })
});

(() => {
  // 查找当前目录最大的文件 promise
  var fs = require('fs');
  var path = require('path');

  var readDir = function (dir) {
    return new Promise(function (resolve, reject) {
      fs.readdir(dir, function (err, files) {
        if (err) reject(err);
        resolve(files)
      })
    })
  }

  var stat = function (path) {
    return new Promise(function (resolve, reject) {
      fs.stat(path, function (err, stat) {
        if (err) reject(err)
        resolve(stat)
      })
    })
  }

  function findLargest(dir) {
    return readDir(dir)
      .then(function (files) {
        let promises = files.map(file => stat(path.join(dir, file)))
        return Promise.all(promises).then(function (stats) {
          return { stats, files }
        })
      })
      .then(data => {

        let largest = data.stats
          .filter(function (stat) { return stat.isFile() })
          .reduce((prev, next) => {
            if (prev.size > next.size) return prev
            return next
          })

        return data.files[data.stats.indexOf(largest)]
      })

  }

  findLargest('./')
    .then(res => {
      console.log('res', res)
    })
});

// Promist race
(() => {
  function foo(delay) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("foo!");
      }, delay);
    });
  }

  function timeoutPromise(delay) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        reject("Timeout!");
      }, delay);
    });
  }

  Promise.race([
    foo(4000),
    timeoutPromise(3000)
  ])
    .then(function (data) { console.log(data) }, function (err) { console.log(err) });
})()