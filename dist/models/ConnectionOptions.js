"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionOptionsToJSON = exports.ConnectionOptionsFromJSONTyped = exports.ConnectionOptionsFromJSON = void 0;
const ConnectionOptionsAwsAuroraMysql_1 = require("./ConnectionOptionsAwsAuroraMysql");
const ConnectionOptionsAwsAuroraPostgres_1 = require("./ConnectionOptionsAwsAuroraPostgres");
const ConnectionOptionsAwsRdsMysql_1 = require("./ConnectionOptionsAwsRdsMysql");
const ConnectionOptionsAwsRdsPostgres_1 = require("./ConnectionOptionsAwsRdsPostgres");
const ConnectionOptionsAwsRdsSqlServer_1 = require("./ConnectionOptionsAwsRdsSqlServer");
const ConnectionOptionsAwsRedshiftServerless_1 = require("./ConnectionOptionsAwsRedshiftServerless");
const ConnectionOptionsAzureSqlServer_1 = require("./ConnectionOptionsAzureSqlServer");
const ConnectionOptionsBigQuery_1 = require("./ConnectionOptionsBigQuery");
const ConnectionOptionsClassic_1 = require("./ConnectionOptionsClassic");
const ConnectionOptionsFacebookCustomAudiences_1 = require("./ConnectionOptionsFacebookCustomAudiences");
const ConnectionOptionsGcpCloudSqlMysql_1 = require("./ConnectionOptionsGcpCloudSqlMysql");
const ConnectionOptionsGcpCloudSqlPostgres_1 = require("./ConnectionOptionsGcpCloudSqlPostgres");
const ConnectionOptionsGcpCloudSqlSqlServer_1 = require("./ConnectionOptionsGcpCloudSqlSqlServer");
const ConnectionOptionsGcpGcsCsv_1 = require("./ConnectionOptionsGcpGcsCsv");
const ConnectionOptionsGoogleAds_1 = require("./ConnectionOptionsGoogleAds");
const ConnectionOptionsHostedCsv_1 = require("./ConnectionOptionsHostedCsv");
const ConnectionOptionsHubspot_1 = require("./ConnectionOptionsHubspot");
const ConnectionOptionsIterable_1 = require("./ConnectionOptionsIterable");
const ConnectionOptionsKlaviyo_1 = require("./ConnectionOptionsKlaviyo");
const ConnectionOptionsLinkedinAds_1 = require("./ConnectionOptionsLinkedinAds");
const ConnectionOptionsLookupApi_1 = require("./ConnectionOptionsLookupApi");
const ConnectionOptionsMerge_1 = require("./ConnectionOptionsMerge");
const ConnectionOptionsMysql_1 = require("./ConnectionOptionsMysql");
const ConnectionOptionsPinterestAds_1 = require("./ConnectionOptionsPinterestAds");
const ConnectionOptionsPoplar_1 = require("./ConnectionOptionsPoplar");
const ConnectionOptionsPostgres_1 = require("./ConnectionOptionsPostgres");
const ConnectionOptionsRecharge_1 = require("./ConnectionOptionsRecharge");
const ConnectionOptionsRedshift_1 = require("./ConnectionOptionsRedshift");
const ConnectionOptionsS3Csv_1 = require("./ConnectionOptionsS3Csv");
const ConnectionOptionsSalesforce_1 = require("./ConnectionOptionsSalesforce");
const ConnectionOptionsSalesforceMarketingCloud_1 = require("./ConnectionOptionsSalesforceMarketingCloud");
const ConnectionOptionsSegment_1 = require("./ConnectionOptionsSegment");
const ConnectionOptionsSftp_1 = require("./ConnectionOptionsSftp");
const ConnectionOptionsShopify_1 = require("./ConnectionOptionsShopify");
const ConnectionOptionsSnowflake_1 = require("./ConnectionOptionsSnowflake");
const ConnectionOptionsSqlServer_1 = require("./ConnectionOptionsSqlServer");
const ConnectionOptionsStripe_1 = require("./ConnectionOptionsStripe");
const ConnectionOptionsTheTradeDesk_1 = require("./ConnectionOptionsTheTradeDesk");
const ConnectionOptionsTiktok_1 = require("./ConnectionOptionsTiktok");
function ConnectionOptionsFromJSON(json) {
    return ConnectionOptionsFromJSONTyped(json, false);
}
exports.ConnectionOptionsFromJSON = ConnectionOptionsFromJSON;
function ConnectionOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'aws_aurora_mysql':
            return Object.assign(Object.assign({}, ConnectionOptionsAwsAuroraMysql_1.ConnectionOptionsAwsAuroraMysqlFromJSONTyped(json, true)), { type: 'aws_aurora_mysql' });
        case 'aws_aurora_postgres':
            return Object.assign(Object.assign({}, ConnectionOptionsAwsAuroraPostgres_1.ConnectionOptionsAwsAuroraPostgresFromJSONTyped(json, true)), { type: 'aws_aurora_postgres' });
        case 'aws_rds_mysql':
            return Object.assign(Object.assign({}, ConnectionOptionsAwsRdsMysql_1.ConnectionOptionsAwsRdsMysqlFromJSONTyped(json, true)), { type: 'aws_rds_mysql' });
        case 'aws_rds_postgres':
            return Object.assign(Object.assign({}, ConnectionOptionsAwsRdsPostgres_1.ConnectionOptionsAwsRdsPostgresFromJSONTyped(json, true)), { type: 'aws_rds_postgres' });
        case 'aws_rds_sql_server':
            return Object.assign(Object.assign({}, ConnectionOptionsAwsRdsSqlServer_1.ConnectionOptionsAwsRdsSqlServerFromJSONTyped(json, true)), { type: 'aws_rds_sql_server' });
        case 'aws_redshift_serverless':
            return Object.assign(Object.assign({}, ConnectionOptionsAwsRedshiftServerless_1.ConnectionOptionsAwsRedshiftServerlessFromJSONTyped(json, true)), { type: 'aws_redshift_serverless' });
        case 'azure_sql_server':
            return Object.assign(Object.assign({}, ConnectionOptionsAzureSqlServer_1.ConnectionOptionsAzureSqlServerFromJSONTyped(json, true)), { type: 'azure_sql_server' });
        case 'bigquery':
            return Object.assign(Object.assign({}, ConnectionOptionsBigQuery_1.ConnectionOptionsBigQueryFromJSONTyped(json, true)), { type: 'bigquery' });
        case 'classic':
            return Object.assign(Object.assign({}, ConnectionOptionsClassic_1.ConnectionOptionsClassicFromJSONTyped(json, true)), { type: 'classic' });
        case 'facebook_custom_audiences':
            return Object.assign(Object.assign({}, ConnectionOptionsFacebookCustomAudiences_1.ConnectionOptionsFacebookCustomAudiencesFromJSONTyped(json, true)), { type: 'facebook_custom_audiences' });
        case 'gcp_cloud_sql_mysql':
            return Object.assign(Object.assign({}, ConnectionOptionsGcpCloudSqlMysql_1.ConnectionOptionsGcpCloudSqlMysqlFromJSONTyped(json, true)), { type: 'gcp_cloud_sql_mysql' });
        case 'gcp_cloud_sql_postgres':
            return Object.assign(Object.assign({}, ConnectionOptionsGcpCloudSqlPostgres_1.ConnectionOptionsGcpCloudSqlPostgresFromJSONTyped(json, true)), { type: 'gcp_cloud_sql_postgres' });
        case 'gcp_cloud_sql_sql_server':
            return Object.assign(Object.assign({}, ConnectionOptionsGcpCloudSqlSqlServer_1.ConnectionOptionsGcpCloudSqlSqlServerFromJSONTyped(json, true)), { type: 'gcp_cloud_sql_sql_server' });
        case 'gcp_gcs_csv':
            return Object.assign(Object.assign({}, ConnectionOptionsGcpGcsCsv_1.ConnectionOptionsGcpGcsCsvFromJSONTyped(json, true)), { type: 'gcp_gcs_csv' });
        case 'google_ads':
            return Object.assign(Object.assign({}, ConnectionOptionsGoogleAds_1.ConnectionOptionsGoogleAdsFromJSONTyped(json, true)), { type: 'google_ads' });
        case 'hosted_csv':
            return Object.assign(Object.assign({}, ConnectionOptionsHostedCsv_1.ConnectionOptionsHostedCsvFromJSONTyped(json, true)), { type: 'hosted_csv' });
        case 'hubspot':
            return Object.assign(Object.assign({}, ConnectionOptionsHubspot_1.ConnectionOptionsHubspotFromJSONTyped(json, true)), { type: 'hubspot' });
        case 'iterable':
            return Object.assign(Object.assign({}, ConnectionOptionsIterable_1.ConnectionOptionsIterableFromJSONTyped(json, true)), { type: 'iterable' });
        case 'klaviyo':
            return Object.assign(Object.assign({}, ConnectionOptionsKlaviyo_1.ConnectionOptionsKlaviyoFromJSONTyped(json, true)), { type: 'klaviyo' });
        case 'linkedin_ads':
            return Object.assign(Object.assign({}, ConnectionOptionsLinkedinAds_1.ConnectionOptionsLinkedinAdsFromJSONTyped(json, true)), { type: 'linkedin_ads' });
        case 'lookup_api':
            return Object.assign(Object.assign({}, ConnectionOptionsLookupApi_1.ConnectionOptionsLookupApiFromJSONTyped(json, true)), { type: 'lookup_api' });
        case 'merge':
            return Object.assign(Object.assign({}, ConnectionOptionsMerge_1.ConnectionOptionsMergeFromJSONTyped(json, true)), { type: 'merge' });
        case 'mysql':
            return Object.assign(Object.assign({}, ConnectionOptionsMysql_1.ConnectionOptionsMysqlFromJSONTyped(json, true)), { type: 'mysql' });
        case 'pinterest_ads':
            return Object.assign(Object.assign({}, ConnectionOptionsPinterestAds_1.ConnectionOptionsPinterestAdsFromJSONTyped(json, true)), { type: 'pinterest_ads' });
        case 'poplar':
            return Object.assign(Object.assign({}, ConnectionOptionsPoplar_1.ConnectionOptionsPoplarFromJSONTyped(json, true)), { type: 'poplar' });
        case 'postgres':
            return Object.assign(Object.assign({}, ConnectionOptionsPostgres_1.ConnectionOptionsPostgresFromJSONTyped(json, true)), { type: 'postgres' });
        case 'recharge':
            return Object.assign(Object.assign({}, ConnectionOptionsRecharge_1.ConnectionOptionsRechargeFromJSONTyped(json, true)), { type: 'recharge' });
        case 'redshift':
            return Object.assign(Object.assign({}, ConnectionOptionsRedshift_1.ConnectionOptionsRedshiftFromJSONTyped(json, true)), { type: 'redshift' });
        case 's3_csv':
            return Object.assign(Object.assign({}, ConnectionOptionsS3Csv_1.ConnectionOptionsS3CsvFromJSONTyped(json, true)), { type: 's3_csv' });
        case 'salesforce':
            return Object.assign(Object.assign({}, ConnectionOptionsSalesforce_1.ConnectionOptionsSalesforceFromJSONTyped(json, true)), { type: 'salesforce' });
        case 'salesforce_marketing_cloud':
            return Object.assign(Object.assign({}, ConnectionOptionsSalesforceMarketingCloud_1.ConnectionOptionsSalesforceMarketingCloudFromJSONTyped(json, true)), { type: 'salesforce_marketing_cloud' });
        case 'segment':
            return Object.assign(Object.assign({}, ConnectionOptionsSegment_1.ConnectionOptionsSegmentFromJSONTyped(json, true)), { type: 'segment' });
        case 'sftp':
            return Object.assign(Object.assign({}, ConnectionOptionsSftp_1.ConnectionOptionsSftpFromJSONTyped(json, true)), { type: 'sftp' });
        case 'shopify':
            return Object.assign(Object.assign({}, ConnectionOptionsShopify_1.ConnectionOptionsShopifyFromJSONTyped(json, true)), { type: 'shopify' });
        case 'snowflake':
            return Object.assign(Object.assign({}, ConnectionOptionsSnowflake_1.ConnectionOptionsSnowflakeFromJSONTyped(json, true)), { type: 'snowflake' });
        case 'sql_server':
            return Object.assign(Object.assign({}, ConnectionOptionsSqlServer_1.ConnectionOptionsSqlServerFromJSONTyped(json, true)), { type: 'sql_server' });
        case 'stripe':
            return Object.assign(Object.assign({}, ConnectionOptionsStripe_1.ConnectionOptionsStripeFromJSONTyped(json, true)), { type: 'stripe' });
        case 'the_trade_desk':
            return Object.assign(Object.assign({}, ConnectionOptionsTheTradeDesk_1.ConnectionOptionsTheTradeDeskFromJSONTyped(json, true)), { type: 'the_trade_desk' });
        case 'tiktok':
            return Object.assign(Object.assign({}, ConnectionOptionsTiktok_1.ConnectionOptionsTiktokFromJSONTyped(json, true)), { type: 'tiktok' });
        default:
            throw new Error(`No variant of ConnectionOptions exists with 'type=${json['type']}'`);
    }
}
exports.ConnectionOptionsFromJSONTyped = ConnectionOptionsFromJSONTyped;
function ConnectionOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'aws_aurora_mysql':
            return ConnectionOptionsAwsAuroraMysql_1.ConnectionOptionsAwsAuroraMysqlToJSON(value);
        case 'aws_aurora_postgres':
            return ConnectionOptionsAwsAuroraPostgres_1.ConnectionOptionsAwsAuroraPostgresToJSON(value);
        case 'aws_rds_mysql':
            return ConnectionOptionsAwsRdsMysql_1.ConnectionOptionsAwsRdsMysqlToJSON(value);
        case 'aws_rds_postgres':
            return ConnectionOptionsAwsRdsPostgres_1.ConnectionOptionsAwsRdsPostgresToJSON(value);
        case 'aws_rds_sql_server':
            return ConnectionOptionsAwsRdsSqlServer_1.ConnectionOptionsAwsRdsSqlServerToJSON(value);
        case 'aws_redshift_serverless':
            return ConnectionOptionsAwsRedshiftServerless_1.ConnectionOptionsAwsRedshiftServerlessToJSON(value);
        case 'azure_sql_server':
            return ConnectionOptionsAzureSqlServer_1.ConnectionOptionsAzureSqlServerToJSON(value);
        case 'bigquery':
            return ConnectionOptionsBigQuery_1.ConnectionOptionsBigQueryToJSON(value);
        case 'classic':
            return ConnectionOptionsClassic_1.ConnectionOptionsClassicToJSON(value);
        case 'facebook_custom_audiences':
            return ConnectionOptionsFacebookCustomAudiences_1.ConnectionOptionsFacebookCustomAudiencesToJSON(value);
        case 'gcp_cloud_sql_mysql':
            return ConnectionOptionsGcpCloudSqlMysql_1.ConnectionOptionsGcpCloudSqlMysqlToJSON(value);
        case 'gcp_cloud_sql_postgres':
            return ConnectionOptionsGcpCloudSqlPostgres_1.ConnectionOptionsGcpCloudSqlPostgresToJSON(value);
        case 'gcp_cloud_sql_sql_server':
            return ConnectionOptionsGcpCloudSqlSqlServer_1.ConnectionOptionsGcpCloudSqlSqlServerToJSON(value);
        case 'gcp_gcs_csv':
            return ConnectionOptionsGcpGcsCsv_1.ConnectionOptionsGcpGcsCsvToJSON(value);
        case 'google_ads':
            return ConnectionOptionsGoogleAds_1.ConnectionOptionsGoogleAdsToJSON(value);
        case 'hosted_csv':
            return ConnectionOptionsHostedCsv_1.ConnectionOptionsHostedCsvToJSON(value);
        case 'hubspot':
            return ConnectionOptionsHubspot_1.ConnectionOptionsHubspotToJSON(value);
        case 'iterable':
            return ConnectionOptionsIterable_1.ConnectionOptionsIterableToJSON(value);
        case 'klaviyo':
            return ConnectionOptionsKlaviyo_1.ConnectionOptionsKlaviyoToJSON(value);
        case 'linkedin_ads':
            return ConnectionOptionsLinkedinAds_1.ConnectionOptionsLinkedinAdsToJSON(value);
        case 'lookup_api':
            return ConnectionOptionsLookupApi_1.ConnectionOptionsLookupApiToJSON(value);
        case 'merge':
            return ConnectionOptionsMerge_1.ConnectionOptionsMergeToJSON(value);
        case 'mysql':
            return ConnectionOptionsMysql_1.ConnectionOptionsMysqlToJSON(value);
        case 'pinterest_ads':
            return ConnectionOptionsPinterestAds_1.ConnectionOptionsPinterestAdsToJSON(value);
        case 'poplar':
            return ConnectionOptionsPoplar_1.ConnectionOptionsPoplarToJSON(value);
        case 'postgres':
            return ConnectionOptionsPostgres_1.ConnectionOptionsPostgresToJSON(value);
        case 'recharge':
            return ConnectionOptionsRecharge_1.ConnectionOptionsRechargeToJSON(value);
        case 'redshift':
            return ConnectionOptionsRedshift_1.ConnectionOptionsRedshiftToJSON(value);
        case 's3_csv':
            return ConnectionOptionsS3Csv_1.ConnectionOptionsS3CsvToJSON(value);
        case 'salesforce':
            return ConnectionOptionsSalesforce_1.ConnectionOptionsSalesforceToJSON(value);
        case 'salesforce_marketing_cloud':
            return ConnectionOptionsSalesforceMarketingCloud_1.ConnectionOptionsSalesforceMarketingCloudToJSON(value);
        case 'segment':
            return ConnectionOptionsSegment_1.ConnectionOptionsSegmentToJSON(value);
        case 'sftp':
            return ConnectionOptionsSftp_1.ConnectionOptionsSftpToJSON(value);
        case 'shopify':
            return ConnectionOptionsShopify_1.ConnectionOptionsShopifyToJSON(value);
        case 'snowflake':
            return ConnectionOptionsSnowflake_1.ConnectionOptionsSnowflakeToJSON(value);
        case 'sql_server':
            return ConnectionOptionsSqlServer_1.ConnectionOptionsSqlServerToJSON(value);
        case 'stripe':
            return ConnectionOptionsStripe_1.ConnectionOptionsStripeToJSON(value);
        case 'the_trade_desk':
            return ConnectionOptionsTheTradeDesk_1.ConnectionOptionsTheTradeDeskToJSON(value);
        case 'tiktok':
            return ConnectionOptionsTiktok_1.ConnectionOptionsTiktokToJSON(value);
        default:
            throw new Error(`No variant of ConnectionOptions exists with 'type=${value['type']}'`);
    }
}
exports.ConnectionOptionsToJSON = ConnectionOptionsToJSON;
