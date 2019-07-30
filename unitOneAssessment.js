let assert = require('assert')

function testAssert() {
  return 10
}

try {
    assert.strictEqual(testAssert(), 9)
}
catch(error) {
  console.log(`Test failed.  Was expecting ${error.expected}, but got ${error.actual}`)
}
