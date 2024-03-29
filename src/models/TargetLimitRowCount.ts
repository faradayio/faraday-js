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
 * Restrict the number of rows exported in a target by specifying an absolute row limit. Equivalent to `LIMIT` in SQL.
 * 
 * If an outcome is specified, the results are sorted by score before taking the limit. Otherwise the ordering is random.
 * @export
 * @interface TargetLimitRowCount
 */
export interface TargetLimitRowCount {
    /**
     * When an `outcome_id` is given, this parameter sets the sort direction: for the "top" scores, specify `descending`. For the "bottom" scores, specify `ascending`.
     * 
     * If not specified, defaults to `descending`.
     * @type {string}
     * @memberof TargetLimitRowCount
     */
    direction?: TargetLimitRowCountDirectionEnum;
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
    outcome_id?: string;
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
        
        'direction': !exists(json, 'direction') ? undefined : json['direction'],
        'method': json['method'],
        'outcome_id': !exists(json, 'outcome_id') ? undefined : json['outcome_id'],
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

