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
  const entries = Object.entries(schema);
  const correspondent = entries.reduce((correspondent, [ right, left ]) => {
    path.set(correspondent, left, path.get(object, right));
    return correspondent;
  }, {});
  return correspondent;
}

export function correspondsToLeft (schema: CorrespondentSchema, object: Object): Object {
  const entries = Object.entries(schema);
  const correspondent = entries.reduce((correspondent, [ right, left ]) => {
    path.set(correspondent, right, path.get(object, left));
    return correspondent;
  }, {});
  return correspondent;
}
