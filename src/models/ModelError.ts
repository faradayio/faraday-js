/* tslint:disable */
/* eslint-disable */
/**
 * Faraday REST API
 * The [Faraday](https://faraday.ai) API makes it easy to predict customer behavior programmatically.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@faraday.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ErrorCode,
    ErrorCodeFromJSON,
    ErrorCodeFromJSONTyped,
    ErrorCodeToJSON,
} from './ErrorCode';
import {
    ValidationError,
    ValidationErrorFromJSON,
    ValidationErrorFromJSONTyped,
    ValidationErrorToJSON,
} from './ValidationError';

/**
 * Information about an error.
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * 
     * @type {ErrorCode}
     * @memberof ModelError
     */
    error: ErrorCode;
    /**
     * A unique ID for this error. Please include this in bug reports.
     * @type {string}
     * @memberof ModelError
     */
    id: string;
    /**
     * A human-readable description of the error.
     * @type {string}
     * @memberof ModelError
     */
    note: string;
    /**
     * JSON Schema validation errors, if any.
     * @type {Array<ValidationError>}
     * @memberof ModelError
     */
    validationErrors?: Array<ValidationError>;
}

export function ModelErrorFromJSON(json: any): ModelError {
    return ModelErrorFromJSONTyped(json, false);
}

export function ModelErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': ErrorCodeFromJSON(json['error']),
        'id': json['id'],
        'note': json['note'],
        'validationErrors': !exists(json, 'validationErrors') ? undefined : ((json['validationErrors'] as Array<any>).map(ValidationErrorFromJSON)),
    };
}

export function ModelErrorToJSON(value?: ModelError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ErrorCodeToJSON(value.error),
        'id': value.id,
        'note': value.note,
        'validationErrors': value.validationErrors === undefined ? undefined : ((value.validationErrors as Array<any>).map(ValidationErrorToJSON)),
    };
}

