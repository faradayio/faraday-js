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

import {
    DatasetOptionsAwsAuroraMysql,
    DatasetOptionsAwsAuroraMysqlFromJSON,
    DatasetOptionsAwsAuroraMysqlFromJSONTyped,
    DatasetOptionsAwsAuroraMysqlToJSON,
} from './DatasetOptionsAwsAuroraMysql';
import {
    DatasetOptionsAwsAuroraPostgres,
    DatasetOptionsAwsAuroraPostgresFromJSON,
    DatasetOptionsAwsAuroraPostgresFromJSONTyped,
    DatasetOptionsAwsAuroraPostgresToJSON,
} from './DatasetOptionsAwsAuroraPostgres';
import {
    DatasetOptionsAwsRdsMysql,
    DatasetOptionsAwsRdsMysqlFromJSON,
    DatasetOptionsAwsRdsMysqlFromJSONTyped,
    DatasetOptionsAwsRdsMysqlToJSON,
} from './DatasetOptionsAwsRdsMysql';
import {
    DatasetOptionsAwsRdsPostgres,
    DatasetOptionsAwsRdsPostgresFromJSON,
    DatasetOptionsAwsRdsPostgresFromJSONTyped,
    DatasetOptionsAwsRdsPostgresToJSON,
} from './DatasetOptionsAwsRdsPostgres';
import {
    DatasetOptionsAwsRdsSqlServer,
    DatasetOptionsAwsRdsSqlServerFromJSON,
    DatasetOptionsAwsRdsSqlServerFromJSONTyped,
    DatasetOptionsAwsRdsSqlServerToJSON,
} from './DatasetOptionsAwsRdsSqlServer';
import {
    DatasetOptionsAwsRedshiftServerless,
    DatasetOptionsAwsRedshiftServerlessFromJSON,
    DatasetOptionsAwsRedshiftServerlessFromJSONTyped,
    DatasetOptionsAwsRedshiftServerlessToJSON,
} from './DatasetOptionsAwsRedshiftServerless';
import {
    DatasetOptionsAzureSqlServer,
    DatasetOptionsAzureSqlServerFromJSON,
    DatasetOptionsAzureSqlServerFromJSONTyped,
    DatasetOptionsAzureSqlServerToJSON,
} from './DatasetOptionsAzureSqlServer';
import {
    DatasetOptionsBigQuery,
    DatasetOptionsBigQueryFromJSON,
    DatasetOptionsBigQueryFromJSONTyped,
    DatasetOptionsBigQueryToJSON,
} from './DatasetOptionsBigQuery';
import {
    DatasetOptionsClassic,
    DatasetOptionsClassicFromJSON,
    DatasetOptionsClassicFromJSONTyped,
    DatasetOptionsClassicToJSON,
} from './DatasetOptionsClassic';
import {
    DatasetOptionsGcpCloudSqlMysql,
    DatasetOptionsGcpCloudSqlMysqlFromJSON,
    DatasetOptionsGcpCloudSqlMysqlFromJSONTyped,
    DatasetOptionsGcpCloudSqlMysqlToJSON,
} from './DatasetOptionsGcpCloudSqlMysql';
import {
    DatasetOptionsGcpCloudSqlPostgres,
    DatasetOptionsGcpCloudSqlPostgresFromJSON,
    DatasetOptionsGcpCloudSqlPostgresFromJSONTyped,
    DatasetOptionsGcpCloudSqlPostgresToJSON,
} from './DatasetOptionsGcpCloudSqlPostgres';
import {
    DatasetOptionsGcpCloudSqlSqlServer,
    DatasetOptionsGcpCloudSqlSqlServerFromJSON,
    DatasetOptionsGcpCloudSqlSqlServerFromJSONTyped,
    DatasetOptionsGcpCloudSqlSqlServerToJSON,
} from './DatasetOptionsGcpCloudSqlSqlServer';
import {
    DatasetOptionsGcpGcsCsv,
    DatasetOptionsGcpGcsCsvFromJSON,
    DatasetOptionsGcpGcsCsvFromJSONTyped,
    DatasetOptionsGcpGcsCsvToJSON,
} from './DatasetOptionsGcpGcsCsv';
import {
    DatasetOptionsHostedCsv,
    DatasetOptionsHostedCsvFromJSON,
    DatasetOptionsHostedCsvFromJSONTyped,
    DatasetOptionsHostedCsvToJSON,
} from './DatasetOptionsHostedCsv';
import {
    DatasetOptionsHubspot,
    DatasetOptionsHubspotFromJSON,
    DatasetOptionsHubspotFromJSONTyped,
    DatasetOptionsHubspotToJSON,
} from './DatasetOptionsHubspot';
import {
    DatasetOptionsIterable,
    DatasetOptionsIterableFromJSON,
    DatasetOptionsIterableFromJSONTyped,
    DatasetOptionsIterableToJSON,
} from './DatasetOptionsIterable';
import {
    DatasetOptionsKlaviyo,
    DatasetOptionsKlaviyoFromJSON,
    DatasetOptionsKlaviyoFromJSONTyped,
    DatasetOptionsKlaviyoToJSON,
} from './DatasetOptionsKlaviyo';
import {
    DatasetOptionsMerge,
    DatasetOptionsMergeFromJSON,
    DatasetOptionsMergeFromJSONTyped,
    DatasetOptionsMergeToJSON,
} from './DatasetOptionsMerge';
import {
    DatasetOptionsMysql,
    DatasetOptionsMysqlFromJSON,
    DatasetOptionsMysqlFromJSONTyped,
    DatasetOptionsMysqlToJSON,
} from './DatasetOptionsMysql';
import {
    DatasetOptionsPostgres,
    DatasetOptionsPostgresFromJSON,
    DatasetOptionsPostgresFromJSONTyped,
    DatasetOptionsPostgresToJSON,
} from './DatasetOptionsPostgres';
import {
    DatasetOptionsRecharge,
    DatasetOptionsRechargeFromJSON,
    DatasetOptionsRechargeFromJSONTyped,
    DatasetOptionsRechargeToJSON,
} from './DatasetOptionsRecharge';
import {
    DatasetOptionsRedshift,
    DatasetOptionsRedshiftFromJSON,
    DatasetOptionsRedshiftFromJSONTyped,
    DatasetOptionsRedshiftToJSON,
} from './DatasetOptionsRedshift';
import {
    DatasetOptionsS3Csv,
    DatasetOptionsS3CsvFromJSON,
    DatasetOptionsS3CsvFromJSONTyped,
    DatasetOptionsS3CsvToJSON,
} from './DatasetOptionsS3Csv';
import {
    DatasetOptionsSalesforce,
    DatasetOptionsSalesforceFromJSON,
    DatasetOptionsSalesforceFromJSONTyped,
    DatasetOptionsSalesforceToJSON,
} from './DatasetOptionsSalesforce';
import {
    DatasetOptionsSalesforceMarketingCloud,
    DatasetOptionsSalesforceMarketingCloudFromJSON,
    DatasetOptionsSalesforceMarketingCloudFromJSONTyped,
    DatasetOptionsSalesforceMarketingCloudToJSON,
} from './DatasetOptionsSalesforceMarketingCloud';
import {
    DatasetOptionsSftp,
    DatasetOptionsSftpFromJSON,
    DatasetOptionsSftpFromJSONTyped,
    DatasetOptionsSftpToJSON,
} from './DatasetOptionsSftp';
import {
    DatasetOptionsShopify,
    DatasetOptionsShopifyFromJSON,
    DatasetOptionsShopifyFromJSONTyped,
    DatasetOptionsShopifyToJSON,
} from './DatasetOptionsShopify';
import {
    DatasetOptionsSnowflake,
    DatasetOptionsSnowflakeFromJSON,
    DatasetOptionsSnowflakeFromJSONTyped,
    DatasetOptionsSnowflakeToJSON,
} from './DatasetOptionsSnowflake';
import {
    DatasetOptionsSqlServer,
    DatasetOptionsSqlServerFromJSON,
    DatasetOptionsSqlServerFromJSONTyped,
    DatasetOptionsSqlServerToJSON,
} from './DatasetOptionsSqlServer';
import {
    DatasetOptionsStripe,
    DatasetOptionsStripeFromJSON,
    DatasetOptionsStripeFromJSONTyped,
    DatasetOptionsStripeToJSON,
} from './DatasetOptionsStripe';

/**
 * @type DatasetOptions
 * Dataset connection options
 * @export
 */
export type DatasetOptions = { type: 'aws_aurora_mysql' } & DatasetOptionsAwsAuroraMysql | { type: 'aws_aurora_postgres' } & DatasetOptionsAwsAuroraPostgres | { type: 'aws_rds_mysql' } & DatasetOptionsAwsRdsMysql | { type: 'aws_rds_postgres' } & DatasetOptionsAwsRdsPostgres | { type: 'aws_rds_sql_server' } & DatasetOptionsAwsRdsSqlServer | { type: 'aws_redshift_serverless' } & DatasetOptionsAwsRedshiftServerless | { type: 'azure_sql_server' } & DatasetOptionsAzureSqlServer | { type: 'bigquery' } & DatasetOptionsBigQuery | { type: 'classic' } & DatasetOptionsClassic | { type: 'gcp_cloud_sql_mysql' } & DatasetOptionsGcpCloudSqlMysql | { type: 'gcp_cloud_sql_postgres' } & DatasetOptionsGcpCloudSqlPostgres | { type: 'gcp_cloud_sql_sql_server' } & DatasetOptionsGcpCloudSqlSqlServer | { type: 'gcp_gcs_csv' } & DatasetOptionsGcpGcsCsv | { type: 'hosted_csv' } & DatasetOptionsHostedCsv | { type: 'hubspot' } & DatasetOptionsHubspot | { type: 'iterable' } & DatasetOptionsIterable | { type: 'klaviyo' } & DatasetOptionsKlaviyo | { type: 'merge' } & DatasetOptionsMerge | { type: 'mysql' } & DatasetOptionsMysql | { type: 'postgres' } & DatasetOptionsPostgres | { type: 'recharge' } & DatasetOptionsRecharge | { type: 'redshift' } & DatasetOptionsRedshift | { type: 's3_csv' } & DatasetOptionsS3Csv | { type: 'salesforce' } & DatasetOptionsSalesforce | { type: 'salesforce_marketing_cloud' } & DatasetOptionsSalesforceMarketingCloud | { type: 'sftp' } & DatasetOptionsSftp | { type: 'shopify' } & DatasetOptionsShopify | { type: 'snowflake' } & DatasetOptionsSnowflake | { type: 'sql_server' } & DatasetOptionsSqlServer | { type: 'stripe' } & DatasetOptionsStripe;

export function DatasetOptionsFromJSON(json: any): DatasetOptions {
    return DatasetOptionsFromJSONTyped(json, false);
}

export function DatasetOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'aws_aurora_mysql':
            return {...DatasetOptionsAwsAuroraMysqlFromJSONTyped(json, true), type: 'aws_aurora_mysql'};
        case 'aws_aurora_postgres':
            return {...DatasetOptionsAwsAuroraPostgresFromJSONTyped(json, true), type: 'aws_aurora_postgres'};
        case 'aws_rds_mysql':
            return {...DatasetOptionsAwsRdsMysqlFromJSONTyped(json, true), type: 'aws_rds_mysql'};
        case 'aws_rds_postgres':
            return {...DatasetOptionsAwsRdsPostgresFromJSONTyped(json, true), type: 'aws_rds_postgres'};
        case 'aws_rds_sql_server':
            return {...DatasetOptionsAwsRdsSqlServerFromJSONTyped(json, true), type: 'aws_rds_sql_server'};
        case 'aws_redshift_serverless':
            return {...DatasetOptionsAwsRedshiftServerlessFromJSONTyped(json, true), type: 'aws_redshift_serverless'};
        case 'azure_sql_server':
            return {...DatasetOptionsAzureSqlServerFromJSONTyped(json, true), type: 'azure_sql_server'};
        case 'bigquery':
            return {...DatasetOptionsBigQueryFromJSONTyped(json, true), type: 'bigquery'};
        case 'classic':
            return {...DatasetOptionsClassicFromJSONTyped(json, true), type: 'classic'};
        case 'gcp_cloud_sql_mysql':
            return {...DatasetOptionsGcpCloudSqlMysqlFromJSONTyped(json, true), type: 'gcp_cloud_sql_mysql'};
        case 'gcp_cloud_sql_postgres':
            return {...DatasetOptionsGcpCloudSqlPostgresFromJSONTyped(json, true), type: 'gcp_cloud_sql_postgres'};
        case 'gcp_cloud_sql_sql_server':
            return {...DatasetOptionsGcpCloudSqlSqlServerFromJSONTyped(json, true), type: 'gcp_cloud_sql_sql_server'};
        case 'gcp_gcs_csv':
            return {...DatasetOptionsGcpGcsCsvFromJSONTyped(json, true), type: 'gcp_gcs_csv'};
        case 'hosted_csv':
            return {...DatasetOptionsHostedCsvFromJSONTyped(json, true), type: 'hosted_csv'};
        case 'hubspot':
            return {...DatasetOptionsHubspotFromJSONTyped(json, true), type: 'hubspot'};
        case 'iterable':
            return {...DatasetOptionsIterableFromJSONTyped(json, true), type: 'iterable'};
        case 'klaviyo':
            return {...DatasetOptionsKlaviyoFromJSONTyped(json, true), type: 'klaviyo'};
        case 'merge':
            return {...DatasetOptionsMergeFromJSONTyped(json, true), type: 'merge'};
        case 'mysql':
            return {...DatasetOptionsMysqlFromJSONTyped(json, true), type: 'mysql'};
        case 'postgres':
            return {...DatasetOptionsPostgresFromJSONTyped(json, true), type: 'postgres'};
        case 'recharge':
            return {...DatasetOptionsRechargeFromJSONTyped(json, true), type: 'recharge'};
        case 'redshift':
            return {...DatasetOptionsRedshiftFromJSONTyped(json, true), type: 'redshift'};
        case 's3_csv':
            return {...DatasetOptionsS3CsvFromJSONTyped(json, true), type: 's3_csv'};
        case 'salesforce':
            return {...DatasetOptionsSalesforceFromJSONTyped(json, true), type: 'salesforce'};
        case 'salesforce_marketing_cloud':
            return {...DatasetOptionsSalesforceMarketingCloudFromJSONTyped(json, true), type: 'salesforce_marketing_cloud'};
        case 'sftp':
            return {...DatasetOptionsSftpFromJSONTyped(json, true), type: 'sftp'};
        case 'shopify':
            return {...DatasetOptionsShopifyFromJSONTyped(json, true), type: 'shopify'};
        case 'snowflake':
            return {...DatasetOptionsSnowflakeFromJSONTyped(json, true), type: 'snowflake'};
        case 'sql_server':
            return {...DatasetOptionsSqlServerFromJSONTyped(json, true), type: 'sql_server'};
        case 'stripe':
            return {...DatasetOptionsStripeFromJSONTyped(json, true), type: 'stripe'};
        default:
            throw new Error(`No variant of DatasetOptions exists with 'type=${json['type']}'`);
    }
}

export function DatasetOptionsToJSON(value?: DatasetOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'aws_aurora_mysql':
            return DatasetOptionsAwsAuroraMysqlToJSON(value);
        case 'aws_aurora_postgres':
            return DatasetOptionsAwsAuroraPostgresToJSON(value);
        case 'aws_rds_mysql':
            return DatasetOptionsAwsRdsMysqlToJSON(value);
        case 'aws_rds_postgres':
            return DatasetOptionsAwsRdsPostgresToJSON(value);
        case 'aws_rds_sql_server':
            return DatasetOptionsAwsRdsSqlServerToJSON(value);
        case 'aws_redshift_serverless':
            return DatasetOptionsAwsRedshiftServerlessToJSON(value);
        case 'azure_sql_server':
            return DatasetOptionsAzureSqlServerToJSON(value);
        case 'bigquery':
            return DatasetOptionsBigQueryToJSON(value);
        case 'classic':
            return DatasetOptionsClassicToJSON(value);
        case 'gcp_cloud_sql_mysql':
            return DatasetOptionsGcpCloudSqlMysqlToJSON(value);
        case 'gcp_cloud_sql_postgres':
            return DatasetOptionsGcpCloudSqlPostgresToJSON(value);
        case 'gcp_cloud_sql_sql_server':
            return DatasetOptionsGcpCloudSqlSqlServerToJSON(value);
        case 'gcp_gcs_csv':
            return DatasetOptionsGcpGcsCsvToJSON(value);
        case 'hosted_csv':
            return DatasetOptionsHostedCsvToJSON(value);
        case 'hubspot':
            return DatasetOptionsHubspotToJSON(value);
        case 'iterable':
            return DatasetOptionsIterableToJSON(value);
        case 'klaviyo':
            return DatasetOptionsKlaviyoToJSON(value);
        case 'merge':
            return DatasetOptionsMergeToJSON(value);
        case 'mysql':
            return DatasetOptionsMysqlToJSON(value);
        case 'postgres':
            return DatasetOptionsPostgresToJSON(value);
        case 'recharge':
            return DatasetOptionsRechargeToJSON(value);
        case 'redshift':
            return DatasetOptionsRedshiftToJSON(value);
        case 's3_csv':
            return DatasetOptionsS3CsvToJSON(value);
        case 'salesforce':
            return DatasetOptionsSalesforceToJSON(value);
        case 'salesforce_marketing_cloud':
            return DatasetOptionsSalesforceMarketingCloudToJSON(value);
        case 'sftp':
            return DatasetOptionsSftpToJSON(value);
        case 'shopify':
            return DatasetOptionsShopifyToJSON(value);
        case 'snowflake':
            return DatasetOptionsSnowflakeToJSON(value);
        case 'sql_server':
            return DatasetOptionsSqlServerToJSON(value);
        case 'stripe':
            return DatasetOptionsStripeToJSON(value);
        default:
            throw new Error(`No variant of DatasetOptions exists with 'type=${value['type']}'`);
    }
}

