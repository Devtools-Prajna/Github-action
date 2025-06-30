const assert = require('assert');
const convertUnits = require('./index');

try {
  assert.strictEqual(convertUnits(1000, 'm', 'km'), 1);
  assert.strictEqual(convertUnits(1, 'km', 'm'), 1000);
  assert.strictEqual(convertUnits(100, 'cm', 'm'), 1);
  assert.strictEqual(convertUnits(1000, 'mm', 'm'), 1);
  console.log('All tests passed!');
} catch (err) {
  console.error('Test failed:', err.message);
  process.exit(1);
}
