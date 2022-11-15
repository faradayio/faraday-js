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
 * (Parameters used to PATCH the `TargetOptionsSnowflake` type.)
 * 
 * Snowflake target options
 * @export
 * @interface TargetOptionsSnowflakeMergePatch
 */
export interface TargetOptionsSnowflakeMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsSnowflakeMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSnowflakeMergePatch
     */
    type: string;
    /**
     * Currently only supported on Referenced targets on GCP BigQuery and Snowflake, upsert allows Faraday to write multiple times to the same table from different Targets. It will use the reference_key_column on the referenced Dataset.
     * @type {boolean}
     * @memberof TargetOptionsSnowflakeMergePatch
     */
    upsert?: boolean | null;
}

export function TargetOptionsSnowflakeMergePatchFromJSON(json: any): TargetOptionsSnowflakeMergePatch {
    return TargetOptionsSnowflakeMergePatchFromJSONTyped(json, false);
}

export function TargetOptionsSnowflakeMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsSnowflakeMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': !exists(json, 'table_name') ? undefined : json['table_name'],
        'type': json['type'],
        'upsert': !exists(json, 'upsert') ? undefined : json['upsert'],
    };
}

export function TargetOptionsSnowflakeMergePatchToJSON(value?: TargetOptionsSnowflakeMergePatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'table_name': value.table_name,
        'type': value.type,
        'upsert': value.upsert,
    };
}

