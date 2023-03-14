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

import {
    PersonaSetAnalysisDimensionsTraitBinBoolean,
    PersonaSetAnalysisDimensionsTraitBinBooleanFromJSON,
    PersonaSetAnalysisDimensionsTraitBinBooleanFromJSONTyped,
    PersonaSetAnalysisDimensionsTraitBinBooleanToJSON,
} from './PersonaSetAnalysisDimensionsTraitBinBoolean';
import {
    PersonaSetAnalysisDimensionsTraitBinDate,
    PersonaSetAnalysisDimensionsTraitBinDateFromJSON,
    PersonaSetAnalysisDimensionsTraitBinDateFromJSONTyped,
    PersonaSetAnalysisDimensionsTraitBinDateToJSON,
} from './PersonaSetAnalysisDimensionsTraitBinDate';
import {
    PersonaSetAnalysisDimensionsTraitBinNumber,
    PersonaSetAnalysisDimensionsTraitBinNumberFromJSON,
    PersonaSetAnalysisDimensionsTraitBinNumberFromJSONTyped,
    PersonaSetAnalysisDimensionsTraitBinNumberToJSON,
} from './PersonaSetAnalysisDimensionsTraitBinNumber';
import {
    PersonaSetAnalysisDimensionsTraitBinText,
    PersonaSetAnalysisDimensionsTraitBinTextFromJSON,
    PersonaSetAnalysisDimensionsTraitBinTextFromJSONTyped,
    PersonaSetAnalysisDimensionsTraitBinTextToJSON,
} from './PersonaSetAnalysisDimensionsTraitBinText';

/**
 * @type PersonaSetAnalysisDimensionsTraitBin
 * 
 * @export
 */
export type PersonaSetAnalysisDimensionsTraitBin = { data_type: 'boolean' } & PersonaSetAnalysisDimensionsTraitBinBoolean | { data_type: 'date' } & PersonaSetAnalysisDimensionsTraitBinDate | { data_type: 'number' } & PersonaSetAnalysisDimensionsTraitBinNumber | { data_type: 'text' } & PersonaSetAnalysisDimensionsTraitBinText;

export function PersonaSetAnalysisDimensionsTraitBinFromJSON(json: any): PersonaSetAnalysisDimensionsTraitBin {
    return PersonaSetAnalysisDimensionsTraitBinFromJSONTyped(json, false);
}

export function PersonaSetAnalysisDimensionsTraitBinFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonaSetAnalysisDimensionsTraitBin {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['data_type']) {
        case 'boolean':
            return {...PersonaSetAnalysisDimensionsTraitBinBooleanFromJSONTyped(json, true), data_type: 'boolean'};
        case 'date':
            return {...PersonaSetAnalysisDimensionsTraitBinDateFromJSONTyped(json, true), data_type: 'date'};
        case 'number':
            return {...PersonaSetAnalysisDimensionsTraitBinNumberFromJSONTyped(json, true), data_type: 'number'};
        case 'text':
            return {...PersonaSetAnalysisDimensionsTraitBinTextFromJSONTyped(json, true), data_type: 'text'};
        default:
            throw new Error(`No variant of PersonaSetAnalysisDimensionsTraitBin exists with 'data_type=${json['data_type']}'`);
    }
}

export function PersonaSetAnalysisDimensionsTraitBinToJSON(value?: PersonaSetAnalysisDimensionsTraitBin | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['data_type']) {
        case 'boolean':
            return PersonaSetAnalysisDimensionsTraitBinBooleanToJSON(value);
        case 'date':
            return PersonaSetAnalysisDimensionsTraitBinDateToJSON(value);
        case 'number':
            return PersonaSetAnalysisDimensionsTraitBinNumberToJSON(value);
        case 'text':
            return PersonaSetAnalysisDimensionsTraitBinTextToJSON(value);
        default:
            throw new Error(`No variant of PersonaSetAnalysisDimensionsTraitBin exists with 'data_type=${value['data_type']}'`);
    }
}

