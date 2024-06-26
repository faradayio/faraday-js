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
 * Directionality of a numeric feature
 * @export
 * @interface AnalysisFeatureDirectionalityNumber
 */
export interface AnalysisFeatureDirectionalityNumber {
    /**
     * 
     * @type {string}
     * @memberof AnalysisFeatureDirectionalityNumber
     */
    data_type: string;
    /**
     * The percentage of data that falls in that particular bin.
     * @type {number}
     * @memberof AnalysisFeatureDirectionalityNumber
     */
    density: number;
    /**
     * The impact the feature has on the model.
     * @type {number}
     * @memberof AnalysisFeatureDirectionalityNumber
     */
    impact: number;
    /**
     * 
     * @type {number}
     * @memberof AnalysisFeatureDirectionalityNumber
     */
    max?: number;
    /**
     * 
     * @type {number}
     * @memberof AnalysisFeatureDirectionalityNumber
     */
    min: number;
}

export function AnalysisFeatureDirectionalityNumberFromJSON(json: any): AnalysisFeatureDirectionalityNumber {
    return AnalysisFeatureDirectionalityNumberFromJSONTyped(json, false);
}

export function AnalysisFeatureDirectionalityNumberFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalysisFeatureDirectionalityNumber {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data_type': json['data_type'],
        'density': json['density'],
        'impact': json['impact'],
        'max': !exists(json, 'max') ? undefined : json['max'],
        'min': json['min'],
    };
}

export function AnalysisFeatureDirectionalityNumberToJSON(value?: AnalysisFeatureDirectionalityNumber | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data_type': value.data_type,
        'density': value.density,
        'impact': value.impact,
        'max': value.max,
        'min': value.min,
    };
}

