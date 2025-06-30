const { metersToFeet, feetToMeters } = require('./converter');

test('metersToFeet converts meters to feet', () => {
  expect(metersToFeet(1)).toBeCloseTo(3.28084);
  expect(metersToFeet(0)).toBe(0);
  expect(metersToFeet(10)).toBeCloseTo(32.8084);
});

test('feetToMeters converts feet to meters', () => {
  expect(feetToMeters(3.28084)).toBeCloseTo(1);
  expect(feetToMeters(0)).toBe(0);
  expect(feetToMeters(32.8084)).toBeCloseTo(10);
});
