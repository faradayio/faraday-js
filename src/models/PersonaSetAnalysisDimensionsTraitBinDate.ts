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
 * @interface PersonaSetAnalysisDimensionsTraitBinDate
 */
export interface PersonaSetAnalysisDimensionsTraitBinDate {
    /**
     * The numeric total of individuals found within this bin range.
     * @type {number}
     * @memberof PersonaSetAnalysisDimensionsTraitBinDate
     */
    count: number;
    /**
     * Oridinal dimensions are represented as a list of bins, where each bin is a range from X to Y and a resulting count of individuals that match within that range.
     * @type {string}
     * @memberof PersonaSetAnalysisDimensionsTraitBinDate
     */
    data_type: string;
    /**
     * The upper range of the bin for this dimension. Max can be null, meaning it is all values above the min range for this bin.
     * @type {string}
     * @memberof PersonaSetAnalysisDimensionsTraitBinDate
     */
    max?: string;
    /**
     * The starting numeric value this bin is counted by.
     * @type {string}
     * @memberof PersonaSetAnalysisDimensionsTraitBinDate
     */
    min: string;
    /**
     * The count represented as a percentage based on the sum of counts.
     * @type {number}
     * @memberof PersonaSetAnalysisDimensionsTraitBinDate
     */
    percent: number;
}

export function PersonaSetAnalysisDimensionsTraitBinDateFromJSON(json: any): PersonaSetAnalysisDimensionsTraitBinDate {
    return PersonaSetAnalysisDimensionsTraitBinDateFromJSONTyped(json, false);
}

export function PersonaSetAnalysisDimensionsTraitBinDateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonaSetAnalysisDimensionsTraitBinDate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': json['count'],
        'data_type': json['data_type'],
        'max': !exists(json, 'max') ? undefined : json['max'],
        'min': json['min'],
        'percent': json['percent'],
    };
}

export function PersonaSetAnalysisDimensionsTraitBinDateToJSON(value?: PersonaSetAnalysisDimensionsTraitBinDate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'data_type': value.data_type,
        'max': value.max,
        'min': value.min,
        'percent': value.percent,
    };
}
