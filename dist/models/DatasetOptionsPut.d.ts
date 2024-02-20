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
import { DatasetOptionsAwsAuroraMysqlPut } from './DatasetOptionsAwsAuroraMysqlPut';
import { DatasetOptionsAwsAuroraPostgresPut } from './DatasetOptionsAwsAuroraPostgresPut';
import { DatasetOptionsAwsRdsMysqlPut } from './DatasetOptionsAwsRdsMysqlPut';
import { DatasetOptionsAwsRdsPostgresPut } from './DatasetOptionsAwsRdsPostgresPut';
import { DatasetOptionsAwsRdsSqlServerPut } from './DatasetOptionsAwsRdsSqlServerPut';
import { DatasetOptionsAwsRedshiftServerlessPut } from './DatasetOptionsAwsRedshiftServerlessPut';
import { DatasetOptionsAzureSqlServerPut } from './DatasetOptionsAzureSqlServerPut';
import { DatasetOptionsBigQueryPut } from './DatasetOptionsBigQueryPut';
import { DatasetOptionsClassicPut } from './DatasetOptionsClassicPut';
import { DatasetOptionsGcpCloudSqlMysqlPut } from './DatasetOptionsGcpCloudSqlMysqlPut';
import { DatasetOptionsGcpCloudSqlPostgresPut } from './DatasetOptionsGcpCloudSqlPostgresPut';
import { DatasetOptionsGcpCloudSqlSqlServerPut } from './DatasetOptionsGcpCloudSqlSqlServerPut';
import { DatasetOptionsGcpGcsCsvPut } from './DatasetOptionsGcpGcsCsvPut';
import { DatasetOptionsHostedCsvPut } from './DatasetOptionsHostedCsvPut';
import { DatasetOptionsHubspotPut } from './DatasetOptionsHubspotPut';
import { DatasetOptionsIterablePut } from './DatasetOptionsIterablePut';
import { DatasetOptionsKlaviyoPut } from './DatasetOptionsKlaviyoPut';
import { DatasetOptionsMysqlPut } from './DatasetOptionsMysqlPut';
import { DatasetOptionsPostgresPut } from './DatasetOptionsPostgresPut';
import { DatasetOptionsRechargePut } from './DatasetOptionsRechargePut';
import { DatasetOptionsRedshiftPut } from './DatasetOptionsRedshiftPut';
import { DatasetOptionsS3CsvPut } from './DatasetOptionsS3CsvPut';
import { DatasetOptionsSalesforceMarketingCloudPut } from './DatasetOptionsSalesforceMarketingCloudPut';
import { DatasetOptionsSalesforcePut } from './DatasetOptionsSalesforcePut';
import { DatasetOptionsSftpPut } from './DatasetOptionsSftpPut';
import { DatasetOptionsShopifyPut } from './DatasetOptionsShopifyPut';
import { DatasetOptionsSnowflakePut } from './DatasetOptionsSnowflakePut';
import { DatasetOptionsSqlServerPut } from './DatasetOptionsSqlServerPut';
import { DatasetOptionsStripePut } from './DatasetOptionsStripePut';
/**
 * @type DatasetOptionsPut
 * Dataset connection options
 * @export
 */
export declare type DatasetOptionsPut = {
    type: 'aws_aurora_mysql';
} & DatasetOptionsAwsAuroraMysqlPut | {
    type: 'aws_aurora_postgres';
} & DatasetOptionsAwsAuroraPostgresPut | {
    type: 'aws_rds_mysql';
} & DatasetOptionsAwsRdsMysqlPut | {
    type: 'aws_rds_postgres';
} & DatasetOptionsAwsRdsPostgresPut | {
    type: 'aws_rds_sql_server';
} & DatasetOptionsAwsRdsSqlServerPut | {
    type: 'aws_redshift_serverless';
} & DatasetOptionsAwsRedshiftServerlessPut | {
    type: 'azure_sql_server';
} & DatasetOptionsAzureSqlServerPut | {
    type: 'bigquery';
} & DatasetOptionsBigQueryPut | {
    type: 'classic';
} & DatasetOptionsClassicPut | {
    type: 'gcp_cloud_sql_mysql';
} & DatasetOptionsGcpCloudSqlMysqlPut | {
    type: 'gcp_cloud_sql_postgres';
} & DatasetOptionsGcpCloudSqlPostgresPut | {
    type: 'gcp_cloud_sql_sql_server';
} & DatasetOptionsGcpCloudSqlSqlServerPut | {
    type: 'gcp_gcs_csv';
} & DatasetOptionsGcpGcsCsvPut | {
    type: 'hosted_csv';
} & DatasetOptionsHostedCsvPut | {
    type: 'hubspot';
} & DatasetOptionsHubspotPut | {
    type: 'iterable';
} & DatasetOptionsIterablePut | {
    type: 'klaviyo';
} & DatasetOptionsKlaviyoPut | {
    type: 'mysql';
} & DatasetOptionsMysqlPut | {
    type: 'postgres';
} & DatasetOptionsPostgresPut | {
    type: 'recharge';
} & DatasetOptionsRechargePut | {
    type: 'redshift';
} & DatasetOptionsRedshiftPut | {
    type: 's3_csv';
} & DatasetOptionsS3CsvPut | {
    type: 'salesforce';
} & DatasetOptionsSalesforcePut | {
    type: 'salesforce_marketing_cloud';
} & DatasetOptionsSalesforceMarketingCloudPut | {
    type: 'sftp';
} & DatasetOptionsSftpPut | {
    type: 'shopify';
} & DatasetOptionsShopifyPut | {
    type: 'snowflake';
} & DatasetOptionsSnowflakePut | {
    type: 'sql_server';
} & DatasetOptionsSqlServerPut | {
    type: 'stripe';
} & DatasetOptionsStripePut;
export declare function DatasetOptionsPutFromJSON(json: any): DatasetOptionsPut;
export declare function DatasetOptionsPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsPut;
export declare function DatasetOptionsPutToJSON(value?: DatasetOptionsPut | null): any;