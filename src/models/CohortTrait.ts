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
 * 
 * @export
 * @interface CohortTrait
 */
export interface CohortTrait {
    /**
     * Equal to
     * @type {string}
     * @memberof CohortTrait
     */
    _eq?: string;
    /**
     * Greater than
     * @type {number}
     * @memberof CohortTrait
     */
    _gt?: number;
    /**
     * Greater than or equal to
     * @type {number}
     * @memberof CohortTrait
     */
    _gte?: number;
    /**
     * Value is one of
     * @type {Array<string>}
     * @memberof CohortTrait
     */
    _in?: Array<string>;
    /**
     * Less than
     * @type {number}
     * @memberof CohortTrait
     */
    _lt?: number;
    /**
     * Less than or equal to
     * @type {number}
     * @memberof CohortTrait
     */
    _lte?: number;
    /**
     * Value is not one of
     * @type {Array<string>}
     * @memberof CohortTrait
     */
    _nin?: Array<string>;
    /**
     * Value is not null
     * @type {boolean}
     * @memberof CohortTrait
     */
    _nnull?: boolean;
    /**
     * Value is null
     * @type {boolean}
     * @memberof CohortTrait
     */
    _null?: boolean;
    /**
     * The name of the trait.
     * @type {string}
     * @memberof CohortTrait
     */
    name: string;
    /**
     * Optional trait conditions are unioned together, when combined they define cohorts that meet either trait condition - i.e. state = WA OR metro = Portland
     * @type {boolean}
     * @memberof CohortTrait
     */
    optional?: boolean;
}

export function CohortTraitFromJSON(json: any): CohortTrait {
    return CohortTraitFromJSONTyped(json, false);
}

export function CohortTraitFromJSONTyped(json: any, ignoreDiscriminator: boolean): CohortTrait {
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
        '_nin': !exists(json, '_nin') ? undefined : json['_nin'],
        '_nnull': !exists(json, '_nnull') ? undefined : json['_nnull'],
        '_null': !exists(json, '_null') ? undefined : json['_null'],
        'name': json['name'],
        'optional': !exists(json, 'optional') ? undefined : json['optional'],
    };
}

export function CohortTraitToJSON(value?: CohortTrait | null): any {
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
        '_nin': value._nin,
        '_nnull': value._nnull,
        '_null': value._null,
        'name': value.name,
        'optional': value.optional,
    };
}
