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
import {
    PersonaSetAnalysisFlowPersonaDate,
    PersonaSetAnalysisFlowPersonaDateFromJSON,
    PersonaSetAnalysisFlowPersonaDateFromJSONTyped,
    PersonaSetAnalysisFlowPersonaDateToJSON,
} from './PersonaSetAnalysisFlowPersonaDate';

/**
 * 
 * @export
 * @interface PersonaSetAnalysisFlowPersona
 */
export interface PersonaSetAnalysisFlowPersona {
    /**
     * A series of dates each with a count for the invidiuals that match that persona.
     * @type {Array<PersonaSetAnalysisFlowPersonaDate>}
     * @memberof PersonaSetAnalysisFlowPersona
     */
    days: Array<PersonaSetAnalysisFlowPersonaDate>;
    /**
     * 
     * @type {string}
     * @memberof PersonaSetAnalysisFlowPersona
     */
    persona_id: string;
}

export function PersonaSetAnalysisFlowPersonaFromJSON(json: any): PersonaSetAnalysisFlowPersona {
    return PersonaSetAnalysisFlowPersonaFromJSONTyped(json, false);
}

export function PersonaSetAnalysisFlowPersonaFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonaSetAnalysisFlowPersona {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'days': ((json['days'] as Array<any>).map(PersonaSetAnalysisFlowPersonaDateFromJSON)),
        'persona_id': json['persona_id'],
    };
}

export function PersonaSetAnalysisFlowPersonaToJSON(value?: PersonaSetAnalysisFlowPersona | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'days': ((value.days as Array<any>).map(PersonaSetAnalysisFlowPersonaDateToJSON)),
        'persona_id': value.persona_id,
    };
}
