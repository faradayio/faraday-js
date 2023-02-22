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
 * (Parameters used to PUT a value of the `TargetOptionsAwsRedshiftServerless` type.)
 * 
 * Redshift Serverless target options
 * @export
 * @interface TargetOptionsAwsRedshiftServerlessPut
 */
export interface TargetOptionsAwsRedshiftServerlessPut {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsRedshiftServerlessPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsRedshiftServerlessPut
     */
    type: string;
}

export function TargetOptionsAwsRedshiftServerlessPutFromJSON(json: any): TargetOptionsAwsRedshiftServerlessPut {
    return TargetOptionsAwsRedshiftServerlessPutFromJSONTyped(json, false);
}

export function TargetOptionsAwsRedshiftServerlessPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsAwsRedshiftServerlessPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': json['table_name'],
        'type': json['type'],
    };
}

export function TargetOptionsAwsRedshiftServerlessPutToJSON(value?: TargetOptionsAwsRedshiftServerlessPut | null): any {
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

