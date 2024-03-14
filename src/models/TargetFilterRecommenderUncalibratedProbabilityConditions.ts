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
 * @interface TargetFilterRecommenderUncalibratedProbabilityConditions
 */
export interface TargetFilterRecommenderUncalibratedProbabilityConditions {
    /**
     * Equal to
     * @type {number}
     * @memberof TargetFilterRecommenderUncalibratedProbabilityConditions
     */
    _eq?: number;
    /**
     * Greater than
     * @type {number}
     * @memberof TargetFilterRecommenderUncalibratedProbabilityConditions
     */
    _gt?: number;
    /**
     * Greater than or equal to
     * @type {number}
     * @memberof TargetFilterRecommenderUncalibratedProbabilityConditions
     */
    _gte?: number;
    /**
     * Less than
     * @type {number}
     * @memberof TargetFilterRecommenderUncalibratedProbabilityConditions
     */
    _lt?: number;
    /**
     * Less than or equal to
     * @type {number}
     * @memberof TargetFilterRecommenderUncalibratedProbabilityConditions
     */
    _lte?: number;
    /**
     * Value is not null
     * @type {boolean}
     * @memberof TargetFilterRecommenderUncalibratedProbabilityConditions
     */
    _nnull?: boolean;
    /**
     * Value is null
     * @type {boolean}
     * @memberof TargetFilterRecommenderUncalibratedProbabilityConditions
     */
    _null?: boolean;
    /**
     * Recommender id to filter on.
     * @type {string}
     * @memberof TargetFilterRecommenderUncalibratedProbabilityConditions
     */
    recommender_id: string;
}

export function TargetFilterRecommenderUncalibratedProbabilityConditionsFromJSON(json: any): TargetFilterRecommenderUncalibratedProbabilityConditions {
    return TargetFilterRecommenderUncalibratedProbabilityConditionsFromJSONTyped(json, false);
}

export function TargetFilterRecommenderUncalibratedProbabilityConditionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetFilterRecommenderUncalibratedProbabilityConditions {
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
        'recommender_id': json['recommender_id'],
    };
}

export function TargetFilterRecommenderUncalibratedProbabilityConditionsToJSON(value?: TargetFilterRecommenderUncalibratedProbabilityConditions | null): any {
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
        'recommender_id': value.recommender_id,
    };
}

