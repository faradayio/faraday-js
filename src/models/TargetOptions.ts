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

import {
    TargetOptionsAzureSqlServer,
    TargetOptionsAzureSqlServerFromJSON,
    TargetOptionsAzureSqlServerFromJSONTyped,
    TargetOptionsAzureSqlServerToJSON,
} from './TargetOptionsAzureSqlServer';
import {
    TargetOptionsBigQuery,
    TargetOptionsBigQueryFromJSON,
    TargetOptionsBigQueryFromJSONTyped,
    TargetOptionsBigQueryToJSON,
} from './TargetOptionsBigQuery';
import {
    TargetOptionsHostedCsv,
    TargetOptionsHostedCsvFromJSON,
    TargetOptionsHostedCsvFromJSONTyped,
    TargetOptionsHostedCsvToJSON,
} from './TargetOptionsHostedCsv';
import {
    TargetOptionsRedshift,
    TargetOptionsRedshiftFromJSON,
    TargetOptionsRedshiftFromJSONTyped,
    TargetOptionsRedshiftToJSON,
} from './TargetOptionsRedshift';
import {
    TargetOptionsS3Csv,
    TargetOptionsS3CsvFromJSON,
    TargetOptionsS3CsvFromJSONTyped,
    TargetOptionsS3CsvToJSON,
} from './TargetOptionsS3Csv';
import {
    TargetOptionsSnowflake,
    TargetOptionsSnowflakeFromJSON,
    TargetOptionsSnowflakeFromJSONTyped,
    TargetOptionsSnowflakeToJSON,
} from './TargetOptionsSnowflake';

/**
 * @type TargetOptions
 * The export target configuration options. These vary by connection type.
 * For **replication targets** (self-hosted), the following connection types are supported:
 *   * azure_sql_server
 *   * bigquery
 *   * redshift
 *   * snowflake
 *   * s3_csv
 * 
 * For **publication targets** (Faraday-hosted), the following connection type is supported:
 *   * `hosted_csv` - Faraday hosts a CSV for you to retrieve by your choice of protocol: HTTPS, S3, GCS, or SFTP.
 * @export
 */
export type TargetOptions = { type: 'azure_sql_server' } & TargetOptionsAzureSqlServer | { type: 'bigquery' } & TargetOptionsBigQuery | { type: 'hosted_csv' } & TargetOptionsHostedCsv | { type: 'redshift' } & TargetOptionsRedshift | { type: 's3_csv' } & TargetOptionsS3Csv | { type: 'snowflake' } & TargetOptionsSnowflake;

export function TargetOptionsFromJSON(json: any): TargetOptions {
    return TargetOptionsFromJSONTyped(json, false);
}

export function TargetOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'azure_sql_server':
            return {...TargetOptionsAzureSqlServerFromJSONTyped(json, true), type: 'azure_sql_server'};
        case 'bigquery':
            return {...TargetOptionsBigQueryFromJSONTyped(json, true), type: 'bigquery'};
        case 'hosted_csv':
            return {...TargetOptionsHostedCsvFromJSONTyped(json, true), type: 'hosted_csv'};
        case 'redshift':
            return {...TargetOptionsRedshiftFromJSONTyped(json, true), type: 'redshift'};
        case 's3_csv':
            return {...TargetOptionsS3CsvFromJSONTyped(json, true), type: 's3_csv'};
        case 'snowflake':
            return {...TargetOptionsSnowflakeFromJSONTyped(json, true), type: 'snowflake'};
        default:
            throw new Error(`No variant of TargetOptions exists with 'type=${json['type']}'`);
    }
}

export function TargetOptionsToJSON(value?: TargetOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'azure_sql_server':
            return TargetOptionsAzureSqlServerToJSON(value);
        case 'bigquery':
            return TargetOptionsBigQueryToJSON(value);
        case 'hosted_csv':
            return TargetOptionsHostedCsvToJSON(value);
        case 'redshift':
            return TargetOptionsRedshiftToJSON(value);
        case 's3_csv':
            return TargetOptionsS3CsvToJSON(value);
        case 'snowflake':
            return TargetOptionsSnowflakeToJSON(value);
        default:
            throw new Error(`No variant of TargetOptions exists with 'type=${value['type']}'`);
    }
}

