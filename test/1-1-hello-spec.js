const test = require('tape')
const exec = require('child_process').exec

test('1-1-hello', function (t) {
  exec('./build/1-1-hello', (err, stdout, stderr) => {
    if (err) {}
    t.equal(stdout, 'hello world\n', 'stdout matches')
    t.end()
  })
})
