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
 * (Parameters used to POST a new value of the `TargetOptionsBigQuery` type.)
 * 
 * BigQuery target options
 * @export
 * @interface TargetOptionsBigQueryPost
 */
export interface TargetOptionsBigQueryPost {
    /**
     * Date-based partitioning allows the data to be <a href ="https://cloud.google.com/bigquery/docs/partitioned-tables#date_timestamp_partitioned_tables">partitioned by date</a>. This will appear as a `fdy_batch_date` column.
     * @type {boolean}
     * @memberof TargetOptionsBigQueryPost
     */
    day_partitioned?: boolean;
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsBigQueryPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsBigQueryPost
     */
    type: string;
    /**
     * Currently only supported on Referenced targets for GCP BigQuery, upsert allows Faraday to write multiple times to the same table from different Targets. It will use the reference_key_column on the referenced Dataset.
     * @type {boolean}
     * @memberof TargetOptionsBigQueryPost
     */
    upsert?: boolean;
}

export function TargetOptionsBigQueryPostFromJSON(json: any): TargetOptionsBigQueryPost {
    return TargetOptionsBigQueryPostFromJSONTyped(json, false);
}

export function TargetOptionsBigQueryPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsBigQueryPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'day_partitioned': !exists(json, 'day_partitioned') ? undefined : json['day_partitioned'],
        'table_name': json['table_name'],
        'type': json['type'],
        'upsert': !exists(json, 'upsert') ? undefined : json['upsert'],
    };
}

export function TargetOptionsBigQueryPostToJSON(value?: TargetOptionsBigQueryPost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'day_partitioned': value.day_partitioned,
        'table_name': value.table_name,
        'type': value.type,
        'upsert': value.upsert,
    };
}

