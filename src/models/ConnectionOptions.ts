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
    ConnectionOptionsAzureSqlServer,
    ConnectionOptionsAzureSqlServerFromJSON,
    ConnectionOptionsAzureSqlServerFromJSONTyped,
    ConnectionOptionsAzureSqlServerToJSON,
} from './ConnectionOptionsAzureSqlServer';
import {
    ConnectionOptionsBigQuery,
    ConnectionOptionsBigQueryFromJSON,
    ConnectionOptionsBigQueryFromJSONTyped,
    ConnectionOptionsBigQueryToJSON,
} from './ConnectionOptionsBigQuery';
import {
    ConnectionOptionsClassic,
    ConnectionOptionsClassicFromJSON,
    ConnectionOptionsClassicFromJSONTyped,
    ConnectionOptionsClassicToJSON,
} from './ConnectionOptionsClassic';
import {
    ConnectionOptionsRedshift,
    ConnectionOptionsRedshiftFromJSON,
    ConnectionOptionsRedshiftFromJSONTyped,
    ConnectionOptionsRedshiftToJSON,
} from './ConnectionOptionsRedshift';
import {
    ConnectionOptionsS3Csv,
    ConnectionOptionsS3CsvFromJSON,
    ConnectionOptionsS3CsvFromJSONTyped,
    ConnectionOptionsS3CsvToJSON,
} from './ConnectionOptionsS3Csv';
import {
    ConnectionOptionsSnowflake,
    ConnectionOptionsSnowflakeFromJSON,
    ConnectionOptionsSnowflakeFromJSONTyped,
    ConnectionOptionsSnowflakeToJSON,
} from './ConnectionOptionsSnowflake';

/**
 * @type ConnectionOptions
 * The connection-specific options. These vary by connection type.
 * @export
 */
export type ConnectionOptions = { type: 'azure_sql_server' } & ConnectionOptionsAzureSqlServer | { type: 'bigquery' } & ConnectionOptionsBigQuery | { type: 'classic' } & ConnectionOptionsClassic | { type: 'redshift' } & ConnectionOptionsRedshift | { type: 's3_csv' } & ConnectionOptionsS3Csv | { type: 'snowflake' } & ConnectionOptionsSnowflake;

export function ConnectionOptionsFromJSON(json: any): ConnectionOptions {
    return ConnectionOptionsFromJSONTyped(json, false);
}

export function ConnectionOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'azure_sql_server':
            return {...ConnectionOptionsAzureSqlServerFromJSONTyped(json, true), type: 'azure_sql_server'};
        case 'bigquery':
            return {...ConnectionOptionsBigQueryFromJSONTyped(json, true), type: 'bigquery'};
        case 'classic':
            return {...ConnectionOptionsClassicFromJSONTyped(json, true), type: 'classic'};
        case 'redshift':
            return {...ConnectionOptionsRedshiftFromJSONTyped(json, true), type: 'redshift'};
        case 's3_csv':
            return {...ConnectionOptionsS3CsvFromJSONTyped(json, true), type: 's3_csv'};
        case 'snowflake':
            return {...ConnectionOptionsSnowflakeFromJSONTyped(json, true), type: 'snowflake'};
        default:
            throw new Error(`No variant of ConnectionOptions exists with 'type=${json['type']}'`);
    }
}

export function ConnectionOptionsToJSON(value?: ConnectionOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'azure_sql_server':
            return ConnectionOptionsAzureSqlServerToJSON(value);
        case 'bigquery':
            return ConnectionOptionsBigQueryToJSON(value);
        case 'classic':
            return ConnectionOptionsClassicToJSON(value);
        case 'redshift':
            return ConnectionOptionsRedshiftToJSON(value);
        case 's3_csv':
            return ConnectionOptionsS3CsvToJSON(value);
        case 'snowflake':
            return ConnectionOptionsSnowflakeToJSON(value);
        default:
            throw new Error(`No variant of ConnectionOptions exists with 'type=${value['type']}'`);
    }
}

