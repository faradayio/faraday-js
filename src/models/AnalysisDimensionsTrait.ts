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
    AnalysisDimensionsTraitBin,
    AnalysisDimensionsTraitBinFromJSON,
    AnalysisDimensionsTraitBinFromJSONTyped,
    AnalysisDimensionsTraitBinToJSON,
} from './AnalysisDimensionsTraitBin';

/**
 * 
 * @export
 * @interface AnalysisDimensionsTrait
 */
export interface AnalysisDimensionsTrait {
    /**
     * The list of bins calculated for this persona set dimension.
     * @type {Array<AnalysisDimensionsTraitBin>}
     * @memberof AnalysisDimensionsTrait
     */
    bins: Array<AnalysisDimensionsTraitBin>;
    /**
     * The machine name of the trait used to calculate this dimension.
     * @type {string}
     * @memberof AnalysisDimensionsTrait
     */
    trait_name: string;
}

export function AnalysisDimensionsTraitFromJSON(json: any): AnalysisDimensionsTrait {
    return AnalysisDimensionsTraitFromJSONTyped(json, false);
}

export function AnalysisDimensionsTraitFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalysisDimensionsTrait {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bins': ((json['bins'] as Array<any>).map(AnalysisDimensionsTraitBinFromJSON)),
        'trait_name': json['trait_name'],
    };
}

export function AnalysisDimensionsTraitToJSON(value?: AnalysisDimensionsTrait | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bins': ((value.bins as Array<any>).map(AnalysisDimensionsTraitBinToJSON)),
        'trait_name': value.trait_name,
    };
}

