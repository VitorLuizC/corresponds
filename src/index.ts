import path from 'object-path';

/**
 * Schema used to map correspondent objects.
 */
export type CorrespondentSchema = {
  [ property: string ]: string;
};

export function corresponds (schema: CorrespondentSchema) {
  return {
    toLeft: (object: Object) => correspondsToLeft(schema, object),
    toRight: (object: Object) => correspondsToRight(schema, object)
  };
}

export function correspondsToRight (schema: CorrespondentSchema, object: Object): Object {
  const correspondent = {};

  Object.keys(schema).forEach(
    (property) => path.set(correspondent, schema[property], path.get(object, property)));

  return correspondent;
}

export function correspondsToLeft (schema: CorrespondentSchema, object: Object): Object {
  const correspondent = {};

  Object.keys(schema).forEach(
    (property) => path.set(correspondent, property, path.get(object, schema[property])));

  return correspondent;
}
