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
    AnalysisDimensionsTrait,
    AnalysisDimensionsTraitFromJSON,
    AnalysisDimensionsTraitFromJSONTyped,
    AnalysisDimensionsTraitToJSON,
} from './AnalysisDimensionsTrait';

/**
 * 
 * @export
 * @interface PersonaSetAnalysisDimensions
 */
export interface PersonaSetAnalysisDimensions {
    /**
     * 
     * @type {string}
     * @memberof PersonaSetAnalysisDimensions
     */
    persona_id: string;
    /**
     * A list of counts and percents about the persona set based on a predefined list of traits, including the traits used to model the persona set.
     * @type {Array<AnalysisDimensionsTrait>}
     * @memberof PersonaSetAnalysisDimensions
     */
    traits?: Array<AnalysisDimensionsTrait>;
}

export function PersonaSetAnalysisDimensionsFromJSON(json: any): PersonaSetAnalysisDimensions {
    return PersonaSetAnalysisDimensionsFromJSONTyped(json, false);
}

export function PersonaSetAnalysisDimensionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonaSetAnalysisDimensions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'persona_id': json['persona_id'],
        'traits': !exists(json, 'traits') ? undefined : ((json['traits'] as Array<any>).map(AnalysisDimensionsTraitFromJSON)),
    };
}

export function PersonaSetAnalysisDimensionsToJSON(value?: PersonaSetAnalysisDimensions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'persona_id': value.persona_id,
        'traits': value.traits === undefined ? undefined : ((value.traits as Array<any>).map(AnalysisDimensionsTraitToJSON)),
    };
}

