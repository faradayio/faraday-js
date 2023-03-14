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
 * (Parameters used to PATCH the `DatasetOptionsSnowflake` type.)
 * 
 * Snowflake dataset options
 * @export
 * @interface DatasetOptionsSnowflakeMergePatch
 */
export interface DatasetOptionsSnowflakeMergePatch {
    /**
     * If the table was created with case sensitive columns, this setting may be required.
     * @type {boolean}
     * @memberof DatasetOptionsSnowflakeMergePatch
     */
    case_sensitive_columns?: boolean | null;
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsSnowflakeMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSnowflakeMergePatch
     */
    type: string;
}

export function DatasetOptionsSnowflakeMergePatchFromJSON(json: any): DatasetOptionsSnowflakeMergePatch {
    return DatasetOptionsSnowflakeMergePatchFromJSONTyped(json, false);
}

export function DatasetOptionsSnowflakeMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsSnowflakeMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'case_sensitive_columns': !exists(json, 'case_sensitive_columns') ? undefined : json['case_sensitive_columns'],
        'table_name': !exists(json, 'table_name') ? undefined : json['table_name'],
        'type': json['type'],
    };
}

export function DatasetOptionsSnowflakeMergePatchToJSON(value?: DatasetOptionsSnowflakeMergePatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'case_sensitive_columns': value.case_sensitive_columns,
        'table_name': value.table_name,
        'type': value.type,
    };
}

