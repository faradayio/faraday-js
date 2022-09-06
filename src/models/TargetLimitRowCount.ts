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
 * Restrict the number of rows exported in a target by specifying an absolute row limit.
 * 
 * Equivalent to `LIMIT` in SQL.
 * @export
 * @interface TargetLimitRowCount
 */
export interface TargetLimitRowCount {
    /**
     * For the "top" number of records, specify `descending`. For the "bottom" number of records, specify `ascending`.
     * @type {string}
     * @memberof TargetLimitRowCount
     */
    direction: TargetLimitRowCountDirectionEnum;
    /**
     * The limit method
     * @type {string}
     * @memberof TargetLimitRowCount
     */
    method: string;
    /**
     * Use the ranking suggested by the outcome's scores.
     * @type {string}
     * @memberof TargetLimitRowCount
     */
    outcome_id: string;
    /**
     * Specify a whole number to restrict the target to a specific number of records.
     * @type {number}
     * @memberof TargetLimitRowCount
     */
    threshold: number;
}

/**
* @export
* @enum {string}
*/
export enum TargetLimitRowCountDirectionEnum {
    Ascending = 'ascending',
    Descending = 'descending'
}

export function TargetLimitRowCountFromJSON(json: any): TargetLimitRowCount {
    return TargetLimitRowCountFromJSONTyped(json, false);
}

export function TargetLimitRowCountFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetLimitRowCount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'direction': json['direction'],
        'method': json['method'],
        'outcome_id': json['outcome_id'],
        'threshold': json['threshold'],
    };
}

export function TargetLimitRowCountToJSON(value?: TargetLimitRowCount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'direction': value.direction,
        'method': value.method,
        'outcome_id': value.outcome_id,
        'threshold': value.threshold,
    };
}

