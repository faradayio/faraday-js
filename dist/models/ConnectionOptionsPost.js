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
exports.ConnectionOptionsPostToJSON = exports.ConnectionOptionsPostFromJSONTyped = exports.ConnectionOptionsPostFromJSON = void 0;
const ConnectionOptionsAwsAuroraMysqlPost_1 = require("./ConnectionOptionsAwsAuroraMysqlPost");
const ConnectionOptionsAwsAuroraPostgresPost_1 = require("./ConnectionOptionsAwsAuroraPostgresPost");
const ConnectionOptionsAwsRdsMysqlPost_1 = require("./ConnectionOptionsAwsRdsMysqlPost");
const ConnectionOptionsAwsRdsPostgresPost_1 = require("./ConnectionOptionsAwsRdsPostgresPost");
const ConnectionOptionsAwsRdsSqlServerPost_1 = require("./ConnectionOptionsAwsRdsSqlServerPost");
const ConnectionOptionsAwsRedshiftServerlessPost_1 = require("./ConnectionOptionsAwsRedshiftServerlessPost");
const ConnectionOptionsAzureSqlServerPost_1 = require("./ConnectionOptionsAzureSqlServerPost");
const ConnectionOptionsBigQueryPost_1 = require("./ConnectionOptionsBigQueryPost");
const ConnectionOptionsClassicPost_1 = require("./ConnectionOptionsClassicPost");
const ConnectionOptionsFacebookCustomAudiencesPost_1 = require("./ConnectionOptionsFacebookCustomAudiencesPost");
const ConnectionOptionsGcpCloudSqlMysqlPost_1 = require("./ConnectionOptionsGcpCloudSqlMysqlPost");
const ConnectionOptionsGcpCloudSqlPostgresPost_1 = require("./ConnectionOptionsGcpCloudSqlPostgresPost");
const ConnectionOptionsGcpCloudSqlSqlServerPost_1 = require("./ConnectionOptionsGcpCloudSqlSqlServerPost");
const ConnectionOptionsGcpGcsCsvPost_1 = require("./ConnectionOptionsGcpGcsCsvPost");
const ConnectionOptionsGoogleAdsPost_1 = require("./ConnectionOptionsGoogleAdsPost");
const ConnectionOptionsHostedCsvPost_1 = require("./ConnectionOptionsHostedCsvPost");
const ConnectionOptionsHubspotPost_1 = require("./ConnectionOptionsHubspotPost");
const ConnectionOptionsIterablePost_1 = require("./ConnectionOptionsIterablePost");
const ConnectionOptionsKlaviyoPost_1 = require("./ConnectionOptionsKlaviyoPost");
const ConnectionOptionsLinkedinAdsPost_1 = require("./ConnectionOptionsLinkedinAdsPost");
const ConnectionOptionsLookupApiPost_1 = require("./ConnectionOptionsLookupApiPost");
const ConnectionOptionsMysqlPost_1 = require("./ConnectionOptionsMysqlPost");
const ConnectionOptionsPinterestAdsPost_1 = require("./ConnectionOptionsPinterestAdsPost");
const ConnectionOptionsPoplarPost_1 = require("./ConnectionOptionsPoplarPost");
const ConnectionOptionsPostgresPost_1 = require("./ConnectionOptionsPostgresPost");
const ConnectionOptionsRechargePost_1 = require("./ConnectionOptionsRechargePost");
const ConnectionOptionsRedshiftPost_1 = require("./ConnectionOptionsRedshiftPost");
const ConnectionOptionsS3CsvPost_1 = require("./ConnectionOptionsS3CsvPost");
const ConnectionOptionsSalesforceMarketingCloudPost_1 = require("./ConnectionOptionsSalesforceMarketingCloudPost");
const ConnectionOptionsSalesforcePost_1 = require("./ConnectionOptionsSalesforcePost");
const ConnectionOptionsSegmentPost_1 = require("./ConnectionOptionsSegmentPost");
const ConnectionOptionsSftpPost_1 = require("./ConnectionOptionsSftpPost");
const ConnectionOptionsShopifyPost_1 = require("./ConnectionOptionsShopifyPost");
const ConnectionOptionsSnowflakePost_1 = require("./ConnectionOptionsSnowflakePost");
const ConnectionOptionsSqlServerPost_1 = require("./ConnectionOptionsSqlServerPost");
const ConnectionOptionsStripePost_1 = require("./ConnectionOptionsStripePost");
const ConnectionOptionsTheTradeDeskPost_1 = require("./ConnectionOptionsTheTradeDeskPost");
const ConnectionOptionsTiktokPost_1 = require("./ConnectionOptionsTiktokPost");
function ConnectionOptionsPostFromJSON(json) {
    return ConnectionOptionsPostFromJSONTyped(json, false);
}
exports.ConnectionOptionsPostFromJSON = ConnectionOptionsPostFromJSON;
function ConnectionOptionsPostFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'aws_aurora_mysql':
            return Object.assign(Object.assign({}, ConnectionOptionsAwsAuroraMysqlPost_1.ConnectionOptionsAwsAuroraMysqlPostFromJSONTyped(json, true)), { type: 'aws_aurora_mysql' });
        case 'aws_aurora_postgres':
            return Object.assign(Object.assign({}, ConnectionOptionsAwsAuroraPostgresPost_1.ConnectionOptionsAwsAuroraPostgresPostFromJSONTyped(json, true)), { type: 'aws_aurora_postgres' });
        case 'aws_rds_mysql':
            return Object.assign(Object.assign({}, ConnectionOptionsAwsRdsMysqlPost_1.ConnectionOptionsAwsRdsMysqlPostFromJSONTyped(json, true)), { type: 'aws_rds_mysql' });
        case 'aws_rds_postgres':
            return Object.assign(Object.assign({}, ConnectionOptionsAwsRdsPostgresPost_1.ConnectionOptionsAwsRdsPostgresPostFromJSONTyped(json, true)), { type: 'aws_rds_postgres' });
        case 'aws_rds_sql_server':
            return Object.assign(Object.assign({}, ConnectionOptionsAwsRdsSqlServerPost_1.ConnectionOptionsAwsRdsSqlServerPostFromJSONTyped(json, true)), { type: 'aws_rds_sql_server' });
        case 'aws_redshift_serverless':
            return Object.assign(Object.assign({}, ConnectionOptionsAwsRedshiftServerlessPost_1.ConnectionOptionsAwsRedshiftServerlessPostFromJSONTyped(json, true)), { type: 'aws_redshift_serverless' });
        case 'azure_sql_server':
            return Object.assign(Object.assign({}, ConnectionOptionsAzureSqlServerPost_1.ConnectionOptionsAzureSqlServerPostFromJSONTyped(json, true)), { type: 'azure_sql_server' });
        case 'bigquery':
            return Object.assign(Object.assign({}, ConnectionOptionsBigQueryPost_1.ConnectionOptionsBigQueryPostFromJSONTyped(json, true)), { type: 'bigquery' });
        case 'classic':
            return Object.assign(Object.assign({}, ConnectionOptionsClassicPost_1.ConnectionOptionsClassicPostFromJSONTyped(json, true)), { type: 'classic' });
        case 'facebook_custom_audiences':
            return Object.assign(Object.assign({}, ConnectionOptionsFacebookCustomAudiencesPost_1.ConnectionOptionsFacebookCustomAudiencesPostFromJSONTyped(json, true)), { type: 'facebook_custom_audiences' });
        case 'gcp_cloud_sql_mysql':
            return Object.assign(Object.assign({}, ConnectionOptionsGcpCloudSqlMysqlPost_1.ConnectionOptionsGcpCloudSqlMysqlPostFromJSONTyped(json, true)), { type: 'gcp_cloud_sql_mysql' });
        case 'gcp_cloud_sql_postgres':
            return Object.assign(Object.assign({}, ConnectionOptionsGcpCloudSqlPostgresPost_1.ConnectionOptionsGcpCloudSqlPostgresPostFromJSONTyped(json, true)), { type: 'gcp_cloud_sql_postgres' });
        case 'gcp_cloud_sql_sql_server':
            return Object.assign(Object.assign({}, ConnectionOptionsGcpCloudSqlSqlServerPost_1.ConnectionOptionsGcpCloudSqlSqlServerPostFromJSONTyped(json, true)), { type: 'gcp_cloud_sql_sql_server' });
        case 'gcp_gcs_csv':
            return Object.assign(Object.assign({}, ConnectionOptionsGcpGcsCsvPost_1.ConnectionOptionsGcpGcsCsvPostFromJSONTyped(json, true)), { type: 'gcp_gcs_csv' });
        case 'google_ads':
            return Object.assign(Object.assign({}, ConnectionOptionsGoogleAdsPost_1.ConnectionOptionsGoogleAdsPostFromJSONTyped(json, true)), { type: 'google_ads' });
        case 'hosted_csv':
            return Object.assign(Object.assign({}, ConnectionOptionsHostedCsvPost_1.ConnectionOptionsHostedCsvPostFromJSONTyped(json, true)), { type: 'hosted_csv' });
        case 'hubspot':
            return Object.assign(Object.assign({}, ConnectionOptionsHubspotPost_1.ConnectionOptionsHubspotPostFromJSONTyped(json, true)), { type: 'hubspot' });
        case 'iterable':
            return Object.assign(Object.assign({}, ConnectionOptionsIterablePost_1.ConnectionOptionsIterablePostFromJSONTyped(json, true)), { type: 'iterable' });
        case 'klaviyo':
            return Object.assign(Object.assign({}, ConnectionOptionsKlaviyoPost_1.ConnectionOptionsKlaviyoPostFromJSONTyped(json, true)), { type: 'klaviyo' });
        case 'linkedin_ads':
            return Object.assign(Object.assign({}, ConnectionOptionsLinkedinAdsPost_1.ConnectionOptionsLinkedinAdsPostFromJSONTyped(json, true)), { type: 'linkedin_ads' });
        case 'lookup_api':
            return Object.assign(Object.assign({}, ConnectionOptionsLookupApiPost_1.ConnectionOptionsLookupApiPostFromJSONTyped(json, true)), { type: 'lookup_api' });
        case 'mysql':
            return Object.assign(Object.assign({}, ConnectionOptionsMysqlPost_1.ConnectionOptionsMysqlPostFromJSONTyped(json, true)), { type: 'mysql' });
        case 'pinterest_ads':
            return Object.assign(Object.assign({}, ConnectionOptionsPinterestAdsPost_1.ConnectionOptionsPinterestAdsPostFromJSONTyped(json, true)), { type: 'pinterest_ads' });
        case 'poplar':
            return Object.assign(Object.assign({}, ConnectionOptionsPoplarPost_1.ConnectionOptionsPoplarPostFromJSONTyped(json, true)), { type: 'poplar' });
        case 'postgres':
            return Object.assign(Object.assign({}, ConnectionOptionsPostgresPost_1.ConnectionOptionsPostgresPostFromJSONTyped(json, true)), { type: 'postgres' });
        case 'recharge':
            return Object.assign(Object.assign({}, ConnectionOptionsRechargePost_1.ConnectionOptionsRechargePostFromJSONTyped(json, true)), { type: 'recharge' });
        case 'redshift':
            return Object.assign(Object.assign({}, ConnectionOptionsRedshiftPost_1.ConnectionOptionsRedshiftPostFromJSONTyped(json, true)), { type: 'redshift' });
        case 's3_csv':
            return Object.assign(Object.assign({}, ConnectionOptionsS3CsvPost_1.ConnectionOptionsS3CsvPostFromJSONTyped(json, true)), { type: 's3_csv' });
        case 'salesforce':
            return Object.assign(Object.assign({}, ConnectionOptionsSalesforcePost_1.ConnectionOptionsSalesforcePostFromJSONTyped(json, true)), { type: 'salesforce' });
        case 'salesforce_marketing_cloud':
            return Object.assign(Object.assign({}, ConnectionOptionsSalesforceMarketingCloudPost_1.ConnectionOptionsSalesforceMarketingCloudPostFromJSONTyped(json, true)), { type: 'salesforce_marketing_cloud' });
        case 'segment':
            return Object.assign(Object.assign({}, ConnectionOptionsSegmentPost_1.ConnectionOptionsSegmentPostFromJSONTyped(json, true)), { type: 'segment' });
        case 'sftp':
            return Object.assign(Object.assign({}, ConnectionOptionsSftpPost_1.ConnectionOptionsSftpPostFromJSONTyped(json, true)), { type: 'sftp' });
        case 'shopify':
            return Object.assign(Object.assign({}, ConnectionOptionsShopifyPost_1.ConnectionOptionsShopifyPostFromJSONTyped(json, true)), { type: 'shopify' });
        case 'snowflake':
            return Object.assign(Object.assign({}, ConnectionOptionsSnowflakePost_1.ConnectionOptionsSnowflakePostFromJSONTyped(json, true)), { type: 'snowflake' });
        case 'sql_server':
            return Object.assign(Object.assign({}, ConnectionOptionsSqlServerPost_1.ConnectionOptionsSqlServerPostFromJSONTyped(json, true)), { type: 'sql_server' });
        case 'stripe':
            return Object.assign(Object.assign({}, ConnectionOptionsStripePost_1.ConnectionOptionsStripePostFromJSONTyped(json, true)), { type: 'stripe' });
        case 'the_trade_desk':
            return Object.assign(Object.assign({}, ConnectionOptionsTheTradeDeskPost_1.ConnectionOptionsTheTradeDeskPostFromJSONTyped(json, true)), { type: 'the_trade_desk' });
        case 'tiktok':
            return Object.assign(Object.assign({}, ConnectionOptionsTiktokPost_1.ConnectionOptionsTiktokPostFromJSONTyped(json, true)), { type: 'tiktok' });
        default:
            throw new Error(`No variant of ConnectionOptionsPost exists with 'type=${json['type']}'`);
    }
}
exports.ConnectionOptionsPostFromJSONTyped = ConnectionOptionsPostFromJSONTyped;
function ConnectionOptionsPostToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'aws_aurora_mysql':
            return ConnectionOptionsAwsAuroraMysqlPost_1.ConnectionOptionsAwsAuroraMysqlPostToJSON(value);
        case 'aws_aurora_postgres':
            return ConnectionOptionsAwsAuroraPostgresPost_1.ConnectionOptionsAwsAuroraPostgresPostToJSON(value);
        case 'aws_rds_mysql':
            return ConnectionOptionsAwsRdsMysqlPost_1.ConnectionOptionsAwsRdsMysqlPostToJSON(value);
        case 'aws_rds_postgres':
            return ConnectionOptionsAwsRdsPostgresPost_1.ConnectionOptionsAwsRdsPostgresPostToJSON(value);
        case 'aws_rds_sql_server':
            return ConnectionOptionsAwsRdsSqlServerPost_1.ConnectionOptionsAwsRdsSqlServerPostToJSON(value);
        case 'aws_redshift_serverless':
            return ConnectionOptionsAwsRedshiftServerlessPost_1.ConnectionOptionsAwsRedshiftServerlessPostToJSON(value);
        case 'azure_sql_server':
            return ConnectionOptionsAzureSqlServerPost_1.ConnectionOptionsAzureSqlServerPostToJSON(value);
        case 'bigquery':
            return ConnectionOptionsBigQueryPost_1.ConnectionOptionsBigQueryPostToJSON(value);
        case 'classic':
            return ConnectionOptionsClassicPost_1.ConnectionOptionsClassicPostToJSON(value);
        case 'facebook_custom_audiences':
            return ConnectionOptionsFacebookCustomAudiencesPost_1.ConnectionOptionsFacebookCustomAudiencesPostToJSON(value);
        case 'gcp_cloud_sql_mysql':
            return ConnectionOptionsGcpCloudSqlMysqlPost_1.ConnectionOptionsGcpCloudSqlMysqlPostToJSON(value);
        case 'gcp_cloud_sql_postgres':
            return ConnectionOptionsGcpCloudSqlPostgresPost_1.ConnectionOptionsGcpCloudSqlPostgresPostToJSON(value);
        case 'gcp_cloud_sql_sql_server':
            return ConnectionOptionsGcpCloudSqlSqlServerPost_1.ConnectionOptionsGcpCloudSqlSqlServerPostToJSON(value);
        case 'gcp_gcs_csv':
            return ConnectionOptionsGcpGcsCsvPost_1.ConnectionOptionsGcpGcsCsvPostToJSON(value);
        case 'google_ads':
            return ConnectionOptionsGoogleAdsPost_1.ConnectionOptionsGoogleAdsPostToJSON(value);
        case 'hosted_csv':
            return ConnectionOptionsHostedCsvPost_1.ConnectionOptionsHostedCsvPostToJSON(value);
        case 'hubspot':
            return ConnectionOptionsHubspotPost_1.ConnectionOptionsHubspotPostToJSON(value);
        case 'iterable':
            return ConnectionOptionsIterablePost_1.ConnectionOptionsIterablePostToJSON(value);
        case 'klaviyo':
            return ConnectionOptionsKlaviyoPost_1.ConnectionOptionsKlaviyoPostToJSON(value);
        case 'linkedin_ads':
            return ConnectionOptionsLinkedinAdsPost_1.ConnectionOptionsLinkedinAdsPostToJSON(value);
        case 'lookup_api':
            return ConnectionOptionsLookupApiPost_1.ConnectionOptionsLookupApiPostToJSON(value);
        case 'mysql':
            return ConnectionOptionsMysqlPost_1.ConnectionOptionsMysqlPostToJSON(value);
        case 'pinterest_ads':
            return ConnectionOptionsPinterestAdsPost_1.ConnectionOptionsPinterestAdsPostToJSON(value);
        case 'poplar':
            return ConnectionOptionsPoplarPost_1.ConnectionOptionsPoplarPostToJSON(value);
        case 'postgres':
            return ConnectionOptionsPostgresPost_1.ConnectionOptionsPostgresPostToJSON(value);
        case 'recharge':
            return ConnectionOptionsRechargePost_1.ConnectionOptionsRechargePostToJSON(value);
        case 'redshift':
            return ConnectionOptionsRedshiftPost_1.ConnectionOptionsRedshiftPostToJSON(value);
        case 's3_csv':
            return ConnectionOptionsS3CsvPost_1.ConnectionOptionsS3CsvPostToJSON(value);
        case 'salesforce':
            return ConnectionOptionsSalesforcePost_1.ConnectionOptionsSalesforcePostToJSON(value);
        case 'salesforce_marketing_cloud':
            return ConnectionOptionsSalesforceMarketingCloudPost_1.ConnectionOptionsSalesforceMarketingCloudPostToJSON(value);
        case 'segment':
            return ConnectionOptionsSegmentPost_1.ConnectionOptionsSegmentPostToJSON(value);
        case 'sftp':
            return ConnectionOptionsSftpPost_1.ConnectionOptionsSftpPostToJSON(value);
        case 'shopify':
            return ConnectionOptionsShopifyPost_1.ConnectionOptionsShopifyPostToJSON(value);
        case 'snowflake':
            return ConnectionOptionsSnowflakePost_1.ConnectionOptionsSnowflakePostToJSON(value);
        case 'sql_server':
            return ConnectionOptionsSqlServerPost_1.ConnectionOptionsSqlServerPostToJSON(value);
        case 'stripe':
            return ConnectionOptionsStripePost_1.ConnectionOptionsStripePostToJSON(value);
        case 'the_trade_desk':
            return ConnectionOptionsTheTradeDeskPost_1.ConnectionOptionsTheTradeDeskPostToJSON(value);
        case 'tiktok':
            return ConnectionOptionsTiktokPost_1.ConnectionOptionsTiktokPostToJSON(value);
        default:
            throw new Error(`No variant of ConnectionOptionsPost exists with 'type=${value['type']}'`);
    }
}
exports.ConnectionOptionsPostToJSON = ConnectionOptionsPostToJSON;
