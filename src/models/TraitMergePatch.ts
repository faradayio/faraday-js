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
    TraitStatisticalType,
    TraitStatisticalTypeFromJSON,
    TraitStatisticalTypeFromJSONTyped,
    TraitStatisticalTypeToJSON,
} from './TraitStatisticalType';

/**
 * (Parameters used to PATCH the `Trait` type.)
 * 
 * A fact about a person. 
 * 
 * The fact could be provided by Faraday, or alternatively could be defined by the client using data they have uploaded to Faraday.
 * 
 * These traits can be used by name in any of modeling, analysis, and reporting.
 * @export
 * @interface TraitMergePatch
 */
export interface TraitMergePatch {
    /**
     * Information about this field.
     * @type {string}
     * @memberof TraitMergePatch
     */
    description?: string | null;
    /**
     * A more human-consumable version of the name of this field.
     * @type {string}
     * @memberof TraitMergePatch
     */
    literate?: string;
    /**
     * A mapping of the input values used in modeling, to how they should be displayed in reports.
     * @type {object}
     * @memberof TraitMergePatch
     */
    lookup_table?: object | null;
    /**
     * 
     * @type {TraitStatisticalType}
     * @memberof TraitMergePatch
     */
    statistical_type?: TraitStatisticalType | null;
    /**
     * For numeric types, in what units is the data stored.
     * @type {string}
     * @memberof TraitMergePatch
     */
    unit?: string | null;
}

export function TraitMergePatchFromJSON(json: any): TraitMergePatch {
    return TraitMergePatchFromJSONTyped(json, false);
}

export function TraitMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TraitMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'literate': !exists(json, 'literate') ? undefined : json['literate'],
        'lookup_table': !exists(json, 'lookup_table') ? undefined : json['lookup_table'],
        'statistical_type': !exists(json, 'statistical_type') ? undefined : TraitStatisticalTypeFromJSON(json['statistical_type']),
        'unit': !exists(json, 'unit') ? undefined : json['unit'],
    };
}

export function TraitMergePatchToJSON(value?: TraitMergePatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'literate': value.literate,
        'lookup_table': value.lookup_table,
        'statistical_type': TraitStatisticalTypeToJSON(value.statistical_type),
        'unit': value.unit,
    };
}

