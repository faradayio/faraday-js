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
    TraitStatisticalType,
    TraitStatisticalTypeFromJSON,
    TraitStatisticalTypeFromJSONTyped,
    TraitStatisticalTypeToJSON,
} from './TraitStatisticalType';

/**
 * (Parameters used to PUT a value of the `Trait` type.)
 * 
 * A fact about a person. 
 * 
 * The fact could be provided by Faraday, or alternatively could be defined by the client using data they have uploaded to Faraday.
 * 
 * These traits can be used by name in any of modeling, analysis, and reporting.
 * @export
 * @interface TraitPut
 */
export interface TraitPut {
    /**
     * 
     * @type {TraitStatisticalType}
     * @memberof TraitPut
     */
    statistical_type?: TraitStatisticalType;
}

export function TraitPutFromJSON(json: any): TraitPut {
    return TraitPutFromJSONTyped(json, false);
}

export function TraitPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TraitPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'statistical_type': !exists(json, 'statistical_type') ? undefined : TraitStatisticalTypeFromJSON(json['statistical_type']),
    };
}

export function TraitPutToJSON(value?: TraitPut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'statistical_type': TraitStatisticalTypeToJSON(value.statistical_type),
    };
}
