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
 * The data to include for each person in this scope.
 * @export
 * @interface ScopePayload
 */
export interface ScopePayload {
    /**
     * Include additional attributes from Faraday's Internal Graph (FIG).
     * @type {Array<string>}
     * @memberof ScopePayload
     */
    attributes?: Array<string>;
    /**
     * Include the propensity score(s) from the specified outcome(s).
     * @type {Array<string>}
     * @memberof ScopePayload
     */
    outcome_ids?: Array<string>;
    /**
     * Include the persona assignment(s) from the specified persona set(s).
     * @type {Array<string>}
     * @memberof ScopePayload
     */
    persona_set_ids?: Array<string>;
}

export function ScopePayloadFromJSON(json: any): ScopePayload {
    return ScopePayloadFromJSONTyped(json, false);
}

export function ScopePayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScopePayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributes': !exists(json, 'attributes') ? undefined : json['attributes'],
        'outcome_ids': !exists(json, 'outcome_ids') ? undefined : json['outcome_ids'],
        'persona_set_ids': !exists(json, 'persona_set_ids') ? undefined : json['persona_set_ids'],
    };
}

export function ScopePayloadToJSON(value?: ScopePayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributes': value.attributes,
        'outcome_ids': value.outcome_ids,
        'persona_set_ids': value.persona_set_ids,
    };
}

