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
 * @interface PersonaSetAnalysisFlowPersonaDate
 */
export interface PersonaSetAnalysisFlowPersonaDate {
    /**
     * The number of members of this persona on this date
     * @type {number}
     * @memberof PersonaSetAnalysisFlowPersonaDate
     */
    count: number;
    /**
     * 
     * @type {Date}
     * @memberof PersonaSetAnalysisFlowPersonaDate
     */
    date: Date;
}

export function PersonaSetAnalysisFlowPersonaDateFromJSON(json: any): PersonaSetAnalysisFlowPersonaDate {
    return PersonaSetAnalysisFlowPersonaDateFromJSONTyped(json, false);
}

export function PersonaSetAnalysisFlowPersonaDateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonaSetAnalysisFlowPersonaDate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': json['count'],
        'date': (new Date(json['date'])),
    };
}

export function PersonaSetAnalysisFlowPersonaDateToJSON(value?: PersonaSetAnalysisFlowPersonaDate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'date': (value.date.toISOString().substr(0,10)),
    };
}

