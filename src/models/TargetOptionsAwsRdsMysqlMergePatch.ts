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
 * (Parameters used to PATCH the `TargetOptionsAwsRdsMysql` type.)
 * 
 * aws_rds_mysql target options
 * @export
 * @interface TargetOptionsAwsRdsMysqlMergePatch
 */
export interface TargetOptionsAwsRdsMysqlMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsRdsMysqlMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsRdsMysqlMergePatch
     */
    type: string;
}

export function TargetOptionsAwsRdsMysqlMergePatchFromJSON(json: any): TargetOptionsAwsRdsMysqlMergePatch {
    return TargetOptionsAwsRdsMysqlMergePatchFromJSONTyped(json, false);
}

export function TargetOptionsAwsRdsMysqlMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsAwsRdsMysqlMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': !exists(json, 'table_name') ? undefined : json['table_name'],
        'type': json['type'],
    };
}

export function TargetOptionsAwsRdsMysqlMergePatchToJSON(value?: TargetOptionsAwsRdsMysqlMergePatch | null): any {
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

