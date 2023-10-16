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
 * @interface TraitInputFromDatasets
 */
export interface TraitInputFromDatasets {
    /**
     * The column used used to populate this trait.
     * @type {string}
     * @memberof TraitInputFromDatasets
     */
    column_name: string;
    /**
     * The dataset the column comes from.
     * @type {string}
     * @memberof TraitInputFromDatasets
     */
    dataset_id: string;
    /**
     * Transformations that are applied to the source table to unify distinct values for modeling.
     * @type {object}
     * @memberof TraitInputFromDatasets
     */
    transformation_table?: object;
}

export function TraitInputFromDatasetsFromJSON(json: any): TraitInputFromDatasets {
    return TraitInputFromDatasetsFromJSONTyped(json, false);
}

export function TraitInputFromDatasetsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TraitInputFromDatasets {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'column_name': json['column_name'],
        'dataset_id': json['dataset_id'],
        'transformation_table': !exists(json, 'transformation_table') ? undefined : json['transformation_table'],
    };
}

export function TraitInputFromDatasetsToJSON(value?: TraitInputFromDatasets | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'column_name': value.column_name,
        'dataset_id': value.dataset_id,
        'transformation_table': value.transformation_table,
    };
}
