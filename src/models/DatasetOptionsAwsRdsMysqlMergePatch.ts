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
 * (Parameters used to PATCH the `DatasetOptionsAwsRdsMysql` type.)
 * 
 * RDS (MySQL) dataset options
 * @export
 * @interface DatasetOptionsAwsRdsMysqlMergePatch
 */
export interface DatasetOptionsAwsRdsMysqlMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsRdsMysqlMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsRdsMysqlMergePatch
     */
    type: string;
}

export function DatasetOptionsAwsRdsMysqlMergePatchFromJSON(json: any): DatasetOptionsAwsRdsMysqlMergePatch {
    return DatasetOptionsAwsRdsMysqlMergePatchFromJSONTyped(json, false);
}

export function DatasetOptionsAwsRdsMysqlMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsAwsRdsMysqlMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': !exists(json, 'table_name') ? undefined : json['table_name'],
        'type': json['type'],
    };
}

export function DatasetOptionsAwsRdsMysqlMergePatchToJSON(value?: DatasetOptionsAwsRdsMysqlMergePatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'table_name': value.table_name,
        'type': value.type,
    };
}

