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
 * (Parameters used to PUT a value of the `TargetOptionsBigQuery` type.)
 * 
 * Google BigQuery target options
 * @export
 * @interface TargetOptionsBigQueryPut
 */
export interface TargetOptionsBigQueryPut {
    /**
     * Dataset name
     * @type {string}
     * @memberof TargetOptionsBigQueryPut
     */
    dataset_name: string;
    /**
     * Date-based partitioning allows the data to be <a href ="https://cloud.google.com/bigquery/docs/partitioned-tables#date_timestamp_partitioned_tables">partitioned by date</a>. This will appear as a `fdy_batch_date` column.
     * @type {boolean}
     * @memberof TargetOptionsBigQueryPut
     */
    day_partitioned?: boolean;
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsBigQueryPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsBigQueryPut
     */
    type: string;
}

export function TargetOptionsBigQueryPutFromJSON(json: any): TargetOptionsBigQueryPut {
    return TargetOptionsBigQueryPutFromJSONTyped(json, false);
}

export function TargetOptionsBigQueryPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsBigQueryPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dataset_name': json['dataset_name'],
        'day_partitioned': !exists(json, 'day_partitioned') ? undefined : json['day_partitioned'],
        'table_name': json['table_name'],
        'type': json['type'],
    };
}

export function TargetOptionsBigQueryPutToJSON(value?: TargetOptionsBigQueryPut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dataset_name': value.dataset_name,
        'day_partitioned': value.day_partitioned,
        'table_name': value.table_name,
        'type': value.type,
    };
}
