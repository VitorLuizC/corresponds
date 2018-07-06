import test from 'ava';
import { corresponds, correspondsToLeft, correspondsToRight } from '../';

test('Module API', (context) => {
  context.is(typeof corresponds, 'function');
  context.is(typeof correspondsToLeft, 'function');
  context.is(typeof correspondsToRight, 'function');
});

const schema = {
  'name': 'user.name'
};

test('Corresponds returns .toLeft and .toRight functions', (context) => {
  const correspondent = corresponds(schema);

  context.is(typeof correspondent.toLeft, 'function');
  context.is(typeof correspondent.toRight, 'function');
});

const valueA = {
  name: 'Carlos'
};

const valueB = {
  user: {
    name: 'Carlos'
  }
};

test('Maps object to schema\'s left-side', (context) => {
  context.deepEqual(corresponds(schema).toLeft(valueA), valueB);
  context.deepEqual(correspondsToLeft(schema, valueA), valueB);
});

test('Maps object to schema\'s right-side', (context) => {
  context.deepEqual(corresponds(schema).toRight(valueB), valueA);
  context.deepEqual(correspondsToRight(schema, valueB), valueA);
});
