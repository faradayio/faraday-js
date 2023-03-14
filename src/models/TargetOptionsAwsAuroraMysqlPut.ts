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
 * (Parameters used to PUT a value of the `TargetOptionsAwsAuroraMysql` type.)
 * 
 * Aurora (MySQL) target options
 * @export
 * @interface TargetOptionsAwsAuroraMysqlPut
 */
export interface TargetOptionsAwsAuroraMysqlPut {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsAuroraMysqlPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsAuroraMysqlPut
     */
    type: string;
}

export function TargetOptionsAwsAuroraMysqlPutFromJSON(json: any): TargetOptionsAwsAuroraMysqlPut {
    return TargetOptionsAwsAuroraMysqlPutFromJSONTyped(json, false);
}

export function TargetOptionsAwsAuroraMysqlPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsAwsAuroraMysqlPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': json['table_name'],
        'type': json['type'],
    };
}

export function TargetOptionsAwsAuroraMysqlPutToJSON(value?: TargetOptionsAwsAuroraMysqlPut | null): any {
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

