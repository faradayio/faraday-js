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
import {
    OutcomePredictorsBlocked,
    OutcomePredictorsBlockedFromJSON,
    OutcomePredictorsBlockedFromJSONTyped,
    OutcomePredictorsBlockedToJSON,
} from './OutcomePredictorsBlocked';

/**
 * Provides control over the features used during modeling to predict an outcome.
 * @export
 * @interface OutcomePredictors
 */
export interface OutcomePredictors {
    /**
     * 
     * @type {OutcomePredictorsBlocked}
     * @memberof OutcomePredictors
     */
    blocked?: OutcomePredictorsBlocked;
}

export function OutcomePredictorsFromJSON(json: any): OutcomePredictors {
    return OutcomePredictorsFromJSONTyped(json, false);
}

export function OutcomePredictorsFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutcomePredictors {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blocked': !exists(json, 'blocked') ? undefined : OutcomePredictorsBlockedFromJSON(json['blocked']),
    };
}

export function OutcomePredictorsToJSON(value?: OutcomePredictors | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blocked': OutcomePredictorsBlockedToJSON(value.blocked),
    };
}

