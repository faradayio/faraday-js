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
    DatasetOptionsMergeMerge,
    DatasetOptionsMergeMergeFromJSON,
    DatasetOptionsMergeMergeFromJSONTyped,
    DatasetOptionsMergeMergeToJSON,
} from './DatasetOptionsMergeMerge';

/**
 * Merge Dataset dataset options
 * @export
 * @interface DatasetOptionsMerge
 */
export interface DatasetOptionsMerge {
    /**
     * Which datasets should be merged, and what is the join column
     * @type {Array<DatasetOptionsMergeMerge>}
     * @memberof DatasetOptionsMerge
     */
    merge: Array<DatasetOptionsMergeMerge>;
    /**
     * If true, automatically move identity_sets, output_to_streams, and output_to_traits from input source tables to the merge dataset.
     * @type {boolean}
     * @memberof DatasetOptionsMerge
     */
    migrate?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsMerge
     */
    type: string;
}

export function DatasetOptionsMergeFromJSON(json: any): DatasetOptionsMerge {
    return DatasetOptionsMergeFromJSONTyped(json, false);
}

export function DatasetOptionsMergeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsMerge {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'merge': ((json['merge'] as Array<any>).map(DatasetOptionsMergeMergeFromJSON)),
        'migrate': !exists(json, 'migrate') ? undefined : json['migrate'],
        'type': json['type'],
    };
}

export function DatasetOptionsMergeToJSON(value?: DatasetOptionsMerge | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'merge': ((value.merge as Array<any>).map(DatasetOptionsMergeMergeToJSON)),
        'migrate': value.migrate,
        'type': value.type,
    };
}

