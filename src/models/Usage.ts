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
 * What day the scope was active, and how much PPD your account will be charged for.
 * @export
 * @interface Usage
 */
export interface Usage {
    /**
     * The date the scope was not in preview mode
     * @type {Date}
     * @memberof Usage
     */
    date: Date;
    /**
     * The unit of measurement faraday uses to bill scopes.
     * PPD stands for person-predictions-per-day, 
     * and represents the total volume of prediction data for a given scope.
     * The PPD of a scope for any given day is calculated with the following formula:
     * 
     * ```
     * PPD = the number of people in your scope * the number of outcomes and persona sets in the scope.
     * ```
     * 
     * The PPD of a scope can change over time if you
     * 1. The payload of the scope changes (either outcomes or persona sets are added or removed)
     * 2. One or more of the underlying datasets is updated
     * 
     * PPD = 0 if a scope is in preview mode. Your account is NOT charged for preview-mode scopes.
     * @type {number}
     * @memberof Usage
     */
    ppd: number;
    /**
     * The id of the scope
     * @type {string}
     * @memberof Usage
     */
    scope_id: string;
    /**
     * Human-readable label of the scope specified in scope_id.
     * @type {string}
     * @memberof Usage
     */
    scope_literate: string;
}

export function UsageFromJSON(json: any): Usage {
    return UsageFromJSONTyped(json, false);
}

export function UsageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Usage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'date': (new Date(json['date'])),
        'ppd': json['ppd'],
        'scope_id': json['scope_id'],
        'scope_literate': json['scope_literate'],
    };
}

export function UsageToJSON(value?: Usage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'date': (value.date.toISOString().substr(0,10)),
        'ppd': value.ppd,
        'scope_id': value.scope_id,
        'scope_literate': value.scope_literate,
    };
}

