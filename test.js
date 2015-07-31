import isTruthy from './module';

const test = require('tape-catch');

test('Returns `true` for truthy values', ({end, equal}) => {
  equal(
    true::isTruthy(),
    true,
    '`true`'
  );

  equal(
    5::isTruthy(),
    true,
    'a number other than `0`'
  );

  equal(
    'a'::isTruthy(),
    true,
    'a non-empty string'
  );

  equal(
    []::isTruthy(),
    true,
    'an array'
  );

  equal(
    {}::isTruthy(),
    true,
    'an object'
  );

  equal(
    () => {}::isTruthy(),
    true,
    'a function'
  );

  end();
});

test('Returns `false` for truthy values', ({end, equal}) => {
  equal(
    false::isTruthy(),
    false,
    '`false`'
  );

  equal(
    null::isTruthy(),
    false,
    '`null`'
  );

  equal(
    undefined::isTruthy(),
    false,
    '`undefined`'
  );

  equal(
    0::isTruthy(),
    false,
    '`0`'
  );

  equal(
    NaN::isTruthy(),
    false,
    '`NaN`'
  );

  equal(
    ''::isTruthy(),
    false,
    'an empty string'
  );

  end();
});
