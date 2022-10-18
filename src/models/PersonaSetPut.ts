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
 * (Parameters used to PUT a value of the `PersonaSet` type.)
 * 
 * A set of customer personas.
 * @export
 * @interface PersonaSetPut
 */
export interface PersonaSetPut {
    /**
     * Whether to show the persona set in Explore, the map view on https://app.faraday.ai.
     * 
     * This will slow down persona set builds.
     * @type {boolean}
     * @memberof PersonaSetPut
     */
    explore?: boolean;
    /**
     * Human-readable label for this persona set.
     * @type {string}
     * @memberof PersonaSetPut
     */
    name: string;
}

export function PersonaSetPutFromJSON(json: any): PersonaSetPut {
    return PersonaSetPutFromJSONTyped(json, false);
}

export function PersonaSetPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonaSetPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'explore': !exists(json, 'explore') ? undefined : json['explore'],
        'name': json['name'],
    };
}

export function PersonaSetPutToJSON(value?: PersonaSetPut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'explore': value.explore,
        'name': value.name,
    };
}

