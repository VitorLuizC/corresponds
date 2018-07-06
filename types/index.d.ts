/**
 * Schema used to map correspondent objects.
 */
export declare type CorrespondentSchema = {
    [property: string]: string;
};
export declare function corresponds(schema: CorrespondentSchema): {
    toLeft: (object: Object) => Object;
    toRight: (object: Object) => Object;
};
export declare function correspondsToRight(schema: CorrespondentSchema, object: Object): Object;
export declare function correspondsToLeft(schema: CorrespondentSchema, object: Object): Object;
