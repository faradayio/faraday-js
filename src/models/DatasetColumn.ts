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
    ComplexDataType,
    ComplexDataTypeFromJSON,
    ComplexDataTypeFromJSONTyped,
    ComplexDataTypeToJSON,
} from './ComplexDataType';

/**
 * Dataset column expressed in Avro datatypes
 * @export
 * @interface DatasetColumn
 */
export interface DatasetColumn {
    /**
     * 
     * @type {ComplexDataType}
     * @memberof DatasetColumn
     */
    data_type: ComplexDataType;
    /**
     * 
     * @type {boolean}
     * @memberof DatasetColumn
     */
    is_nullable: boolean;
    /**
     * Faraday's transformed version of the column name as a C-style ident
     * @type {string}
     * @memberof DatasetColumn
     */
    name: string;
}

export function DatasetColumnFromJSON(json: any): DatasetColumn {
    return DatasetColumnFromJSONTyped(json, false);
}

export function DatasetColumnFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetColumn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data_type': ComplexDataTypeFromJSON(json['data_type']),
        'is_nullable': json['is_nullable'],
        'name': json['name'],
    };
}

export function DatasetColumnToJSON(value?: DatasetColumn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data_type': ComplexDataTypeToJSON(value.data_type),
        'is_nullable': value.is_nullable,
        'name': value.name,
    };
}

