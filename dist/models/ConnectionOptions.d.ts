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
import { ConnectionOptionsAwsAuroraMysql } from './ConnectionOptionsAwsAuroraMysql';
import { ConnectionOptionsAwsAuroraPostgres } from './ConnectionOptionsAwsAuroraPostgres';
import { ConnectionOptionsAwsRdsMysql } from './ConnectionOptionsAwsRdsMysql';
import { ConnectionOptionsAwsRdsPostgres } from './ConnectionOptionsAwsRdsPostgres';
import { ConnectionOptionsAwsRdsSqlServer } from './ConnectionOptionsAwsRdsSqlServer';
import { ConnectionOptionsAwsRedshiftServerless } from './ConnectionOptionsAwsRedshiftServerless';
import { ConnectionOptionsAzureSqlServer } from './ConnectionOptionsAzureSqlServer';
import { ConnectionOptionsBigQuery } from './ConnectionOptionsBigQuery';
import { ConnectionOptionsClassic } from './ConnectionOptionsClassic';
import { ConnectionOptionsFacebookCustomAudiences } from './ConnectionOptionsFacebookCustomAudiences';
import { ConnectionOptionsGcpCloudSqlMysql } from './ConnectionOptionsGcpCloudSqlMysql';
import { ConnectionOptionsGcpCloudSqlPostgres } from './ConnectionOptionsGcpCloudSqlPostgres';
import { ConnectionOptionsGcpCloudSqlSqlServer } from './ConnectionOptionsGcpCloudSqlSqlServer';
import { ConnectionOptionsGcpGcsCsv } from './ConnectionOptionsGcpGcsCsv';
import { ConnectionOptionsGoogleAds } from './ConnectionOptionsGoogleAds';
import { ConnectionOptionsHostedCsv } from './ConnectionOptionsHostedCsv';
import { ConnectionOptionsHubspot } from './ConnectionOptionsHubspot';
import { ConnectionOptionsIterable } from './ConnectionOptionsIterable';
import { ConnectionOptionsKlaviyo } from './ConnectionOptionsKlaviyo';
import { ConnectionOptionsLinkedinAds } from './ConnectionOptionsLinkedinAds';
import { ConnectionOptionsLookupApi } from './ConnectionOptionsLookupApi';
import { ConnectionOptionsMysql } from './ConnectionOptionsMysql';
import { ConnectionOptionsPinterestAds } from './ConnectionOptionsPinterestAds';
import { ConnectionOptionsPoplar } from './ConnectionOptionsPoplar';
import { ConnectionOptionsPostgres } from './ConnectionOptionsPostgres';
import { ConnectionOptionsRecharge } from './ConnectionOptionsRecharge';
import { ConnectionOptionsRedshift } from './ConnectionOptionsRedshift';
import { ConnectionOptionsS3Csv } from './ConnectionOptionsS3Csv';
import { ConnectionOptionsSalesforce } from './ConnectionOptionsSalesforce';
import { ConnectionOptionsSalesforceMarketingCloud } from './ConnectionOptionsSalesforceMarketingCloud';
import { ConnectionOptionsSegment } from './ConnectionOptionsSegment';
import { ConnectionOptionsSftp } from './ConnectionOptionsSftp';
import { ConnectionOptionsShopify } from './ConnectionOptionsShopify';
import { ConnectionOptionsSnowflake } from './ConnectionOptionsSnowflake';
import { ConnectionOptionsSqlServer } from './ConnectionOptionsSqlServer';
import { ConnectionOptionsStripe } from './ConnectionOptionsStripe';
import { ConnectionOptionsTheTradeDesk } from './ConnectionOptionsTheTradeDesk';
import { ConnectionOptionsTiktok } from './ConnectionOptionsTiktok';
/**
 * @type ConnectionOptions
 * The connection-specific options. These vary by connection type.
 * @export
 */
export declare type ConnectionOptions = {
    type: 'aws_aurora_mysql';
} & ConnectionOptionsAwsAuroraMysql | {
    type: 'aws_aurora_postgres';
} & ConnectionOptionsAwsAuroraPostgres | {
    type: 'aws_rds_mysql';
} & ConnectionOptionsAwsRdsMysql | {
    type: 'aws_rds_postgres';
} & ConnectionOptionsAwsRdsPostgres | {
    type: 'aws_rds_sql_server';
} & ConnectionOptionsAwsRdsSqlServer | {
    type: 'aws_redshift_serverless';
} & ConnectionOptionsAwsRedshiftServerless | {
    type: 'azure_sql_server';
} & ConnectionOptionsAzureSqlServer | {
    type: 'bigquery';
} & ConnectionOptionsBigQuery | {
    type: 'classic';
} & ConnectionOptionsClassic | {
    type: 'facebook_custom_audiences';
} & ConnectionOptionsFacebookCustomAudiences | {
    type: 'gcp_cloud_sql_mysql';
} & ConnectionOptionsGcpCloudSqlMysql | {
    type: 'gcp_cloud_sql_postgres';
} & ConnectionOptionsGcpCloudSqlPostgres | {
    type: 'gcp_cloud_sql_sql_server';
} & ConnectionOptionsGcpCloudSqlSqlServer | {
    type: 'gcp_gcs_csv';
} & ConnectionOptionsGcpGcsCsv | {
    type: 'google_ads';
} & ConnectionOptionsGoogleAds | {
    type: 'hosted_csv';
} & ConnectionOptionsHostedCsv | {
    type: 'hubspot';
} & ConnectionOptionsHubspot | {
    type: 'iterable';
} & ConnectionOptionsIterable | {
    type: 'klaviyo';
} & ConnectionOptionsKlaviyo | {
    type: 'linkedin_ads';
} & ConnectionOptionsLinkedinAds | {
    type: 'lookup_api';
} & ConnectionOptionsLookupApi | {
    type: 'mysql';
} & ConnectionOptionsMysql | {
    type: 'pinterest_ads';
} & ConnectionOptionsPinterestAds | {
    type: 'poplar';
} & ConnectionOptionsPoplar | {
    type: 'postgres';
} & ConnectionOptionsPostgres | {
    type: 'recharge';
} & ConnectionOptionsRecharge | {
    type: 'redshift';
} & ConnectionOptionsRedshift | {
    type: 's3_csv';
} & ConnectionOptionsS3Csv | {
    type: 'salesforce';
} & ConnectionOptionsSalesforce | {
    type: 'salesforce_marketing_cloud';
} & ConnectionOptionsSalesforceMarketingCloud | {
    type: 'segment';
} & ConnectionOptionsSegment | {
    type: 'sftp';
} & ConnectionOptionsSftp | {
    type: 'shopify';
} & ConnectionOptionsShopify | {
    type: 'snowflake';
} & ConnectionOptionsSnowflake | {
    type: 'sql_server';
} & ConnectionOptionsSqlServer | {
    type: 'stripe';
} & ConnectionOptionsStripe | {
    type: 'the_trade_desk';
} & ConnectionOptionsTheTradeDesk | {
    type: 'tiktok';
} & ConnectionOptionsTiktok;
export declare function ConnectionOptionsFromJSON(json: any): ConnectionOptions;
export declare function ConnectionOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptions;
export declare function ConnectionOptionsToJSON(value?: ConnectionOptions | null): any;