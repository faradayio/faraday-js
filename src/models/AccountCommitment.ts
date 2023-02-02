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
 * @interface AccountCommitment
 */
export interface AccountCommitment {
    /**
     * The amount billed to the account per month
     * @type {number}
     * @memberof AccountCommitment
     */
    monthly_cost?: number;
    /**
     * The date at which the account's contract with Faraday renews.
     * @type {Date}
     * @memberof AccountCommitment
     */
    renewal_date?: Date;
}

export function AccountCommitmentFromJSON(json: any): AccountCommitment {
    return AccountCommitmentFromJSONTyped(json, false);
}

export function AccountCommitmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountCommitment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'monthly_cost': !exists(json, 'monthly_cost') ? undefined : json['monthly_cost'],
        'renewal_date': !exists(json, 'renewal_date') ? undefined : (new Date(json['renewal_date'])),
    };
}

export function AccountCommitmentToJSON(value?: AccountCommitment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'monthly_cost': value.monthly_cost,
        'renewal_date': value.renewal_date === undefined ? undefined : (value.renewal_date.toISOString()),
    };
}
