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
 * 
 * @export
 * @interface TargetFilterOutcomePercentileConditions
 */
export interface TargetFilterOutcomePercentileConditions {
    /**
     * Equal to
     * @type {number}
     * @memberof TargetFilterOutcomePercentileConditions
     */
    _eq?: number;
    /**
     * Greater than
     * @type {number}
     * @memberof TargetFilterOutcomePercentileConditions
     */
    _gt?: number;
    /**
     * Greater than or equal to
     * @type {number}
     * @memberof TargetFilterOutcomePercentileConditions
     */
    _gte?: number;
    /**
     * Less than
     * @type {number}
     * @memberof TargetFilterOutcomePercentileConditions
     */
    _lt?: number;
    /**
     * Less than or equal to
     * @type {number}
     * @memberof TargetFilterOutcomePercentileConditions
     */
    _lte?: number;
    /**
     * Value is not null
     * @type {boolean}
     * @memberof TargetFilterOutcomePercentileConditions
     */
    _nnull?: boolean;
    /**
     * Value is null
     * @type {boolean}
     * @memberof TargetFilterOutcomePercentileConditions
     */
    _null?: boolean;
    /**
     * Outcome id to filter on.
     * @type {string}
     * @memberof TargetFilterOutcomePercentileConditions
     */
    outcome_id: string;
}

export function TargetFilterOutcomePercentileConditionsFromJSON(json: any): TargetFilterOutcomePercentileConditions {
    return TargetFilterOutcomePercentileConditionsFromJSONTyped(json, false);
}

export function TargetFilterOutcomePercentileConditionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetFilterOutcomePercentileConditions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '_eq': !exists(json, '_eq') ? undefined : json['_eq'],
        '_gt': !exists(json, '_gt') ? undefined : json['_gt'],
        '_gte': !exists(json, '_gte') ? undefined : json['_gte'],
        '_lt': !exists(json, '_lt') ? undefined : json['_lt'],
        '_lte': !exists(json, '_lte') ? undefined : json['_lte'],
        '_nnull': !exists(json, '_nnull') ? undefined : json['_nnull'],
        '_null': !exists(json, '_null') ? undefined : json['_null'],
        'outcome_id': json['outcome_id'],
    };
}

export function TargetFilterOutcomePercentileConditionsToJSON(value?: TargetFilterOutcomePercentileConditions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_eq': value._eq,
        '_gt': value._gt,
        '_gte': value._gte,
        '_lt': value._lt,
        '_lte': value._lte,
        '_nnull': value._nnull,
        '_null': value._null,
        'outcome_id': value.outcome_id,
    };
}

