/* tslint:disable */
/* eslint-disable */
/**
 * Faraday REST API
 * The [Faraday](https://faraday.ai) SDK makes it easy to predict customer behavior using a simple API.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * More information about the error.
 * @export
 * @interface ValidationErrorContext
 */
export interface ValidationErrorContext {
    /**
     * The type of validation error which occurred.
     * @type {string}
     * @memberof ValidationErrorContext
     */
    errorType: string;
}

export function ValidationErrorContextFromJSON(json: any): ValidationErrorContext {
    return ValidationErrorContextFromJSONTyped(json, false);
}

export function ValidationErrorContextFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidationErrorContext {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errorType': json['errorType'],
    };
}

export function ValidationErrorContextToJSON(value?: ValidationErrorContext | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errorType': value.errorType,
    };
}

