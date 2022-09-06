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
    TargetLimitPercentile,
    TargetLimitPercentileFromJSON,
    TargetLimitPercentileFromJSONTyped,
    TargetLimitPercentileToJSON,
} from './TargetLimitPercentile';
import {
    TargetLimitRowCount,
    TargetLimitRowCountFromJSON,
    TargetLimitRowCountFromJSONTyped,
    TargetLimitRowCountToJSON,
} from './TargetLimitRowCount';

/**
 * @type TargetLimit
 * Restrict the number of rows exported in a target.
 * - To filter by percentile scores, use `percentile`.
 * - To apply an absolute row limit, use `row_count`.
 * @export
 */
export type TargetLimit = { method: 'percentile' } & TargetLimitPercentile | { method: 'row_count' } & TargetLimitRowCount;

export function TargetLimitFromJSON(json: any): TargetLimit {
    return TargetLimitFromJSONTyped(json, false);
}

export function TargetLimitFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetLimit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['method']) {
        case 'percentile':
            return {...TargetLimitPercentileFromJSONTyped(json, true), method: 'percentile'};
        case 'row_count':
            return {...TargetLimitRowCountFromJSONTyped(json, true), method: 'row_count'};
        default:
            throw new Error(`No variant of TargetLimit exists with 'method=${json['method']}'`);
    }
}

export function TargetLimitToJSON(value?: TargetLimit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['method']) {
        case 'percentile':
            return TargetLimitPercentileToJSON(value);
        case 'row_count':
            return TargetLimitRowCountToJSON(value);
        default:
            throw new Error(`No variant of TargetLimit exists with 'method=${value['method']}'`);
    }
}

