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
import { ConnectionOptionsAwsAuroraMysqlMergePatch } from './ConnectionOptionsAwsAuroraMysqlMergePatch';
import { ConnectionOptionsAwsAuroraPostgresMergePatch } from './ConnectionOptionsAwsAuroraPostgresMergePatch';
import { ConnectionOptionsAwsRdsMysqlMergePatch } from './ConnectionOptionsAwsRdsMysqlMergePatch';
import { ConnectionOptionsAwsRdsPostgresMergePatch } from './ConnectionOptionsAwsRdsPostgresMergePatch';
import { ConnectionOptionsAwsRdsSqlServerMergePatch } from './ConnectionOptionsAwsRdsSqlServerMergePatch';
import { ConnectionOptionsAwsRedshiftServerlessMergePatch } from './ConnectionOptionsAwsRedshiftServerlessMergePatch';
import { ConnectionOptionsAzureSqlServerMergePatch } from './ConnectionOptionsAzureSqlServerMergePatch';
import { ConnectionOptionsBigQueryMergePatch } from './ConnectionOptionsBigQueryMergePatch';
import { ConnectionOptionsClassicMergePatch } from './ConnectionOptionsClassicMergePatch';
import { ConnectionOptionsFacebookCustomAudiencesMergePatch } from './ConnectionOptionsFacebookCustomAudiencesMergePatch';
import { ConnectionOptionsGcpCloudSqlMysqlMergePatch } from './ConnectionOptionsGcpCloudSqlMysqlMergePatch';
import { ConnectionOptionsGcpCloudSqlPostgresMergePatch } from './ConnectionOptionsGcpCloudSqlPostgresMergePatch';
import { ConnectionOptionsGcpCloudSqlSqlServerMergePatch } from './ConnectionOptionsGcpCloudSqlSqlServerMergePatch';
import { ConnectionOptionsGcpGcsCsvMergePatch } from './ConnectionOptionsGcpGcsCsvMergePatch';
import { ConnectionOptionsGoogleAdsMergePatch } from './ConnectionOptionsGoogleAdsMergePatch';
import { ConnectionOptionsHostedCsvMergePatch } from './ConnectionOptionsHostedCsvMergePatch';
import { ConnectionOptionsHubspotMergePatch } from './ConnectionOptionsHubspotMergePatch';
import { ConnectionOptionsIterableMergePatch } from './ConnectionOptionsIterableMergePatch';
import { ConnectionOptionsKlaviyoMergePatch } from './ConnectionOptionsKlaviyoMergePatch';
import { ConnectionOptionsLinkedinAdsMergePatch } from './ConnectionOptionsLinkedinAdsMergePatch';
import { ConnectionOptionsLookupApiMergePatch } from './ConnectionOptionsLookupApiMergePatch';
import { ConnectionOptionsMergeMergePatch } from './ConnectionOptionsMergeMergePatch';
import { ConnectionOptionsMysqlMergePatch } from './ConnectionOptionsMysqlMergePatch';
import { ConnectionOptionsPinterestAdsMergePatch } from './ConnectionOptionsPinterestAdsMergePatch';
import { ConnectionOptionsPoplarMergePatch } from './ConnectionOptionsPoplarMergePatch';
import { ConnectionOptionsPostgresMergePatch } from './ConnectionOptionsPostgresMergePatch';
import { ConnectionOptionsRechargeMergePatch } from './ConnectionOptionsRechargeMergePatch';
import { ConnectionOptionsRedshiftMergePatch } from './ConnectionOptionsRedshiftMergePatch';
import { ConnectionOptionsS3CsvMergePatch } from './ConnectionOptionsS3CsvMergePatch';
import { ConnectionOptionsSalesforceMarketingCloudMergePatch } from './ConnectionOptionsSalesforceMarketingCloudMergePatch';
import { ConnectionOptionsSalesforceMergePatch } from './ConnectionOptionsSalesforceMergePatch';
import { ConnectionOptionsSegmentMergePatch } from './ConnectionOptionsSegmentMergePatch';
import { ConnectionOptionsSftpMergePatch } from './ConnectionOptionsSftpMergePatch';
import { ConnectionOptionsShopifyMergePatch } from './ConnectionOptionsShopifyMergePatch';
import { ConnectionOptionsSnowflakeMergePatch } from './ConnectionOptionsSnowflakeMergePatch';
import { ConnectionOptionsSqlServerMergePatch } from './ConnectionOptionsSqlServerMergePatch';
import { ConnectionOptionsStripeMergePatch } from './ConnectionOptionsStripeMergePatch';
import { ConnectionOptionsTheTradeDeskMergePatch } from './ConnectionOptionsTheTradeDeskMergePatch';
import { ConnectionOptionsTiktokMergePatch } from './ConnectionOptionsTiktokMergePatch';
/**
 * @type ConnectionOptionsMergePatch
 * The connection-specific options. These vary by connection type.
 * @export
 */
export declare type ConnectionOptionsMergePatch = {
    type: 'aws_aurora_mysql';
} & ConnectionOptionsAwsAuroraMysqlMergePatch | {
    type: 'aws_aurora_postgres';
} & ConnectionOptionsAwsAuroraPostgresMergePatch | {
    type: 'aws_rds_mysql';
} & ConnectionOptionsAwsRdsMysqlMergePatch | {
    type: 'aws_rds_postgres';
} & ConnectionOptionsAwsRdsPostgresMergePatch | {
    type: 'aws_rds_sql_server';
} & ConnectionOptionsAwsRdsSqlServerMergePatch | {
    type: 'aws_redshift_serverless';
} & ConnectionOptionsAwsRedshiftServerlessMergePatch | {
    type: 'azure_sql_server';
} & ConnectionOptionsAzureSqlServerMergePatch | {
    type: 'bigquery';
} & ConnectionOptionsBigQueryMergePatch | {
    type: 'classic';
} & ConnectionOptionsClassicMergePatch | {
    type: 'facebook_custom_audiences';
} & ConnectionOptionsFacebookCustomAudiencesMergePatch | {
    type: 'gcp_cloud_sql_mysql';
} & ConnectionOptionsGcpCloudSqlMysqlMergePatch | {
    type: 'gcp_cloud_sql_postgres';
} & ConnectionOptionsGcpCloudSqlPostgresMergePatch | {
    type: 'gcp_cloud_sql_sql_server';
} & ConnectionOptionsGcpCloudSqlSqlServerMergePatch | {
    type: 'gcp_gcs_csv';
} & ConnectionOptionsGcpGcsCsvMergePatch | {
    type: 'google_ads';
} & ConnectionOptionsGoogleAdsMergePatch | {
    type: 'hosted_csv';
} & ConnectionOptionsHostedCsvMergePatch | {
    type: 'hubspot';
} & ConnectionOptionsHubspotMergePatch | {
    type: 'iterable';
} & ConnectionOptionsIterableMergePatch | {
    type: 'klaviyo';
} & ConnectionOptionsKlaviyoMergePatch | {
    type: 'linkedin_ads';
} & ConnectionOptionsLinkedinAdsMergePatch | {
    type: 'lookup_api';
} & ConnectionOptionsLookupApiMergePatch | {
    type: 'merge';
} & ConnectionOptionsMergeMergePatch | {
    type: 'mysql';
} & ConnectionOptionsMysqlMergePatch | {
    type: 'pinterest_ads';
} & ConnectionOptionsPinterestAdsMergePatch | {
    type: 'poplar';
} & ConnectionOptionsPoplarMergePatch | {
    type: 'postgres';
} & ConnectionOptionsPostgresMergePatch | {
    type: 'recharge';
} & ConnectionOptionsRechargeMergePatch | {
    type: 'redshift';
} & ConnectionOptionsRedshiftMergePatch | {
    type: 's3_csv';
} & ConnectionOptionsS3CsvMergePatch | {
    type: 'salesforce';
} & ConnectionOptionsSalesforceMergePatch | {
    type: 'salesforce_marketing_cloud';
} & ConnectionOptionsSalesforceMarketingCloudMergePatch | {
    type: 'segment';
} & ConnectionOptionsSegmentMergePatch | {
    type: 'sftp';
} & ConnectionOptionsSftpMergePatch | {
    type: 'shopify';
} & ConnectionOptionsShopifyMergePatch | {
    type: 'snowflake';
} & ConnectionOptionsSnowflakeMergePatch | {
    type: 'sql_server';
} & ConnectionOptionsSqlServerMergePatch | {
    type: 'stripe';
} & ConnectionOptionsStripeMergePatch | {
    type: 'the_trade_desk';
} & ConnectionOptionsTheTradeDeskMergePatch | {
    type: 'tiktok';
} & ConnectionOptionsTiktokMergePatch;
export declare function ConnectionOptionsMergePatchFromJSON(json: any): ConnectionOptionsMergePatch;
export declare function ConnectionOptionsMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsMergePatch;
export declare function ConnectionOptionsMergePatchToJSON(value?: ConnectionOptionsMergePatch | null): any;
