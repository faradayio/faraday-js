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
 * (Parameters used to POST a new value of the `TargetOptionsAwsAuroraMysql` type.)
 * 
 * AWS Aurora MySQL target options
 * @export
 * @interface TargetOptionsAwsAuroraMysqlPost
 */
export interface TargetOptionsAwsAuroraMysqlPost {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsAuroraMysqlPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsAuroraMysqlPost
     */
    type: string;
}

export function TargetOptionsAwsAuroraMysqlPostFromJSON(json: any): TargetOptionsAwsAuroraMysqlPost {
    return TargetOptionsAwsAuroraMysqlPostFromJSONTyped(json, false);
}

export function TargetOptionsAwsAuroraMysqlPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsAwsAuroraMysqlPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': json['table_name'],
        'type': json['type'],
    };
}

export function TargetOptionsAwsAuroraMysqlPostToJSON(value?: TargetOptionsAwsAuroraMysqlPost | null): any {
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
