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
 * @interface DatasetStreamCondition
 */
export interface DatasetStreamCondition {
    /**
     * Equal to
     * @type {string}
     * @memberof DatasetStreamCondition
     */
    _eq?: string;
    /**
     * Greater than
     * @type {number}
     * @memberof DatasetStreamCondition
     */
    _gt?: number;
    /**
     * Greater than or equal to
     * @type {number}
     * @memberof DatasetStreamCondition
     */
    _gte?: number;
    /**
     * Value is one of
     * @type {Array<string>}
     * @memberof DatasetStreamCondition
     */
    _in?: Array<string>;
    /**
     * Less than
     * @type {number}
     * @memberof DatasetStreamCondition
     */
    _lt?: number;
    /**
     * Less than or equal to
     * @type {number}
     * @memberof DatasetStreamCondition
     */
    _lte?: number;
    /**
     * Value contains a match to the regex (re2) expression provided. For an exact regex match, use the ^ and $ characters as specified by the (re2 documentation)[https://github.com/google/re2/wiki/Syntax].
     * @type {string}
     * @memberof DatasetStreamCondition
     */
    _matches?: string;
    /**
     * Not equal to
     * @type {string}
     * @memberof DatasetStreamCondition
     */
    _neq?: string;
    /**
     * Value is not one of
     * @type {Array<string>}
     * @memberof DatasetStreamCondition
     */
    _nin?: Array<string>;
    /**
     * Value is not null
     * @type {boolean}
     * @memberof DatasetStreamCondition
     */
    _nnull?: boolean;
    /**
     * Value is null (nulls are otherwise excluded)
     * @type {boolean}
     * @memberof DatasetStreamCondition
     */
    _null?: boolean;
    /**
     * The column in the dataset that should be filtered on
     * @type {string}
     * @memberof DatasetStreamCondition
     */
    column_name: string;
    /**
     * Optional conditions are unioned together, when combined they define events that meet either condition.
     * @type {boolean}
     * @memberof DatasetStreamCondition
     */
    optional?: boolean;
}

export function DatasetStreamConditionFromJSON(json: any): DatasetStreamCondition {
    return DatasetStreamConditionFromJSONTyped(json, false);
}

export function DatasetStreamConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetStreamCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '_eq': !exists(json, '_eq') ? undefined : json['_eq'],
        '_gt': !exists(json, '_gt') ? undefined : json['_gt'],
        '_gte': !exists(json, '_gte') ? undefined : json['_gte'],
        '_in': !exists(json, '_in') ? undefined : json['_in'],
        '_lt': !exists(json, '_lt') ? undefined : json['_lt'],
        '_lte': !exists(json, '_lte') ? undefined : json['_lte'],
        '_matches': !exists(json, '_matches') ? undefined : json['_matches'],
        '_neq': !exists(json, '_neq') ? undefined : json['_neq'],
        '_nin': !exists(json, '_nin') ? undefined : json['_nin'],
        '_nnull': !exists(json, '_nnull') ? undefined : json['_nnull'],
        '_null': !exists(json, '_null') ? undefined : json['_null'],
        'column_name': json['column_name'],
        'optional': !exists(json, 'optional') ? undefined : json['optional'],
    };
}

export function DatasetStreamConditionToJSON(value?: DatasetStreamCondition | null): any {
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
        '_in': value._in,
        '_lt': value._lt,
        '_lte': value._lte,
        '_matches': value._matches,
        '_neq': value._neq,
        '_nin': value._nin,
        '_nnull': value._nnull,
        '_null': value._null,
        'column_name': value.column_name,
        'optional': value.optional,
    };
}
