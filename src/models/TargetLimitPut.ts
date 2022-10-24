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

import {
    TargetLimitPercentilePut,
    TargetLimitPercentilePutFromJSON,
    TargetLimitPercentilePutFromJSONTyped,
    TargetLimitPercentilePutToJSON,
} from './TargetLimitPercentilePut';
import {
    TargetLimitRowCountPut,
    TargetLimitRowCountPutFromJSON,
    TargetLimitRowCountPutFromJSONTyped,
    TargetLimitRowCountPutToJSON,
} from './TargetLimitRowCountPut';

/**
 * @type TargetLimitPut
 * Restrict the number of rows exported in a target.
 * - To filter by percentile scores, use `percentile`.
 * - To apply an absolute row limit, use `row_count`.
 * @export
 */
export type TargetLimitPut = { method: 'percentile' } & TargetLimitPercentilePut | { method: 'row_count' } & TargetLimitRowCountPut;

export function TargetLimitPutFromJSON(json: any): TargetLimitPut {
    return TargetLimitPutFromJSONTyped(json, false);
}

export function TargetLimitPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetLimitPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['method']) {
        case 'percentile':
            return {...TargetLimitPercentilePutFromJSONTyped(json, true), method: 'percentile'};
        case 'row_count':
            return {...TargetLimitRowCountPutFromJSONTyped(json, true), method: 'row_count'};
        default:
            throw new Error(`No variant of TargetLimitPut exists with 'method=${json['method']}'`);
    }
}

export function TargetLimitPutToJSON(value?: TargetLimitPut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['method']) {
        case 'percentile':
            return TargetLimitPercentilePutToJSON(value);
        case 'row_count':
            return TargetLimitRowCountPutToJSON(value);
        default:
            throw new Error(`No variant of TargetLimitPut exists with 'method=${value['method']}'`);
    }
}
