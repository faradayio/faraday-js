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
/**
 * (Parameters used to PUT a value of the `TargetLimitPercentile` type.)
 * 
 * **Deprecated: use `filter.outcome_percentile` instead.**
 * 
 * Restrict the number of rows exported in a target by specifying a score percentile range.
 * @export
 * @interface TargetLimitPercentilePut
 */
export interface TargetLimitPercentilePut {
    /**
     * The limit method
     * @type {string}
     * @memberof TargetLimitPercentilePut
     */
    method: string;
    /**
     * Use the ranking suggested by the outcome's scores.
     * @type {string}
     * @memberof TargetLimitPercentilePut
     */
    outcome_id: string;
    /**
     * Specify a whole number to restrict the target to a maximum percentile score (inclusive).
     * @type {number}
     * @memberof TargetLimitPercentilePut
     */
    percentile_max: number;
    /**
     * Specify a whole number to restrict the target to a minimum percentile score (inclusive).
     * @type {number}
     * @memberof TargetLimitPercentilePut
     */
    percentile_min: number;
}

export function TargetLimitPercentilePutFromJSON(json: any): TargetLimitPercentilePut {
    return TargetLimitPercentilePutFromJSONTyped(json, false);
}

export function TargetLimitPercentilePutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetLimitPercentilePut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'method': json['method'],
        'outcome_id': json['outcome_id'],
        'percentile_max': json['percentile_max'],
        'percentile_min': json['percentile_min'],
    };
}

export function TargetLimitPercentilePutToJSON(value?: TargetLimitPercentilePut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'method': value.method,
        'outcome_id': value.outcome_id,
        'percentile_max': value.percentile_max,
        'percentile_min': value.percentile_min,
    };
}

