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
 * (Parameters used to POST a new value of the `Persona` type.)
 * 
 * A set of people who have more in common with each other than they do with members of other personas in the persona set.
 * @export
 * @interface PersonaPost
 */
export interface PersonaPost {
    /**
     * A human-readable label for this persona.
     * @type {string}
     * @memberof PersonaPost
     */
    name: string;
}

export function PersonaPostFromJSON(json: any): PersonaPost {
    return PersonaPostFromJSONTyped(json, false);
}

export function PersonaPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonaPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function PersonaPostToJSON(value?: PersonaPost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}
