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
exports.TargetOptionsToJSON = exports.TargetOptionsFromJSONTyped = exports.TargetOptionsFromJSON = void 0;
const TargetOptionsAwsAuroraMysql_1 = require("./TargetOptionsAwsAuroraMysql");
const TargetOptionsAwsAuroraPostgres_1 = require("./TargetOptionsAwsAuroraPostgres");
const TargetOptionsAwsRdsMysql_1 = require("./TargetOptionsAwsRdsMysql");
const TargetOptionsAwsRdsPostgres_1 = require("./TargetOptionsAwsRdsPostgres");
const TargetOptionsAwsRdsSqlServer_1 = require("./TargetOptionsAwsRdsSqlServer");
const TargetOptionsAwsRedshiftServerless_1 = require("./TargetOptionsAwsRedshiftServerless");
const TargetOptionsAzureSqlServer_1 = require("./TargetOptionsAzureSqlServer");
const TargetOptionsBigQuery_1 = require("./TargetOptionsBigQuery");
const TargetOptionsFacebookCustomAudiences_1 = require("./TargetOptionsFacebookCustomAudiences");
const TargetOptionsGcpCloudSqlMysql_1 = require("./TargetOptionsGcpCloudSqlMysql");
const TargetOptionsGcpCloudSqlPostgres_1 = require("./TargetOptionsGcpCloudSqlPostgres");
const TargetOptionsGcpCloudSqlSqlServer_1 = require("./TargetOptionsGcpCloudSqlSqlServer");
const TargetOptionsGcpGcsCsv_1 = require("./TargetOptionsGcpGcsCsv");
const TargetOptionsGoogleAds_1 = require("./TargetOptionsGoogleAds");
const TargetOptionsHostedCsv_1 = require("./TargetOptionsHostedCsv");
const TargetOptionsHubspot_1 = require("./TargetOptionsHubspot");
const TargetOptionsIterable_1 = require("./TargetOptionsIterable");
const TargetOptionsKlaviyo_1 = require("./TargetOptionsKlaviyo");
const TargetOptionsLinkedinAds_1 = require("./TargetOptionsLinkedinAds");
const TargetOptionsLookupApi_1 = require("./TargetOptionsLookupApi");
const TargetOptionsMysql_1 = require("./TargetOptionsMysql");
const TargetOptionsPinterestAds_1 = require("./TargetOptionsPinterestAds");
const TargetOptionsPoplar_1 = require("./TargetOptionsPoplar");
const TargetOptionsPostgres_1 = require("./TargetOptionsPostgres");
const TargetOptionsRedshift_1 = require("./TargetOptionsRedshift");
const TargetOptionsS3Csv_1 = require("./TargetOptionsS3Csv");
const TargetOptionsSalesforce_1 = require("./TargetOptionsSalesforce");
const TargetOptionsSalesforceMarketingCloud_1 = require("./TargetOptionsSalesforceMarketingCloud");
const TargetOptionsSegment_1 = require("./TargetOptionsSegment");
const TargetOptionsSftp_1 = require("./TargetOptionsSftp");
const TargetOptionsSnowflake_1 = require("./TargetOptionsSnowflake");
const TargetOptionsSqlServer_1 = require("./TargetOptionsSqlServer");
const TargetOptionsTheTradeDesk_1 = require("./TargetOptionsTheTradeDesk");
const TargetOptionsTiktok_1 = require("./TargetOptionsTiktok");
function TargetOptionsFromJSON(json) {
    return TargetOptionsFromJSONTyped(json, false);
}
exports.TargetOptionsFromJSON = TargetOptionsFromJSON;
function TargetOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'aws_aurora_mysql':
            return Object.assign(Object.assign({}, TargetOptionsAwsAuroraMysql_1.TargetOptionsAwsAuroraMysqlFromJSONTyped(json, true)), { type: 'aws_aurora_mysql' });
        case 'aws_aurora_postgres':
            return Object.assign(Object.assign({}, TargetOptionsAwsAuroraPostgres_1.TargetOptionsAwsAuroraPostgresFromJSONTyped(json, true)), { type: 'aws_aurora_postgres' });
        case 'aws_rds_mysql':
            return Object.assign(Object.assign({}, TargetOptionsAwsRdsMysql_1.TargetOptionsAwsRdsMysqlFromJSONTyped(json, true)), { type: 'aws_rds_mysql' });
        case 'aws_rds_postgres':
            return Object.assign(Object.assign({}, TargetOptionsAwsRdsPostgres_1.TargetOptionsAwsRdsPostgresFromJSONTyped(json, true)), { type: 'aws_rds_postgres' });
        case 'aws_rds_sql_server':
            return Object.assign(Object.assign({}, TargetOptionsAwsRdsSqlServer_1.TargetOptionsAwsRdsSqlServerFromJSONTyped(json, true)), { type: 'aws_rds_sql_server' });
        case 'aws_redshift_serverless':
            return Object.assign(Object.assign({}, TargetOptionsAwsRedshiftServerless_1.TargetOptionsAwsRedshiftServerlessFromJSONTyped(json, true)), { type: 'aws_redshift_serverless' });
        case 'azure_sql_server':
            return Object.assign(Object.assign({}, TargetOptionsAzureSqlServer_1.TargetOptionsAzureSqlServerFromJSONTyped(json, true)), { type: 'azure_sql_server' });
        case 'bigquery':
            return Object.assign(Object.assign({}, TargetOptionsBigQuery_1.TargetOptionsBigQueryFromJSONTyped(json, true)), { type: 'bigquery' });
        case 'facebook_custom_audiences':
            return Object.assign(Object.assign({}, TargetOptionsFacebookCustomAudiences_1.TargetOptionsFacebookCustomAudiencesFromJSONTyped(json, true)), { type: 'facebook_custom_audiences' });
        case 'gcp_cloud_sql_mysql':
            return Object.assign(Object.assign({}, TargetOptionsGcpCloudSqlMysql_1.TargetOptionsGcpCloudSqlMysqlFromJSONTyped(json, true)), { type: 'gcp_cloud_sql_mysql' });
        case 'gcp_cloud_sql_postgres':
            return Object.assign(Object.assign({}, TargetOptionsGcpCloudSqlPostgres_1.TargetOptionsGcpCloudSqlPostgresFromJSONTyped(json, true)), { type: 'gcp_cloud_sql_postgres' });
        case 'gcp_cloud_sql_sql_server':
            return Object.assign(Object.assign({}, TargetOptionsGcpCloudSqlSqlServer_1.TargetOptionsGcpCloudSqlSqlServerFromJSONTyped(json, true)), { type: 'gcp_cloud_sql_sql_server' });
        case 'gcp_gcs_csv':
            return Object.assign(Object.assign({}, TargetOptionsGcpGcsCsv_1.TargetOptionsGcpGcsCsvFromJSONTyped(json, true)), { type: 'gcp_gcs_csv' });
        case 'google_ads':
            return Object.assign(Object.assign({}, TargetOptionsGoogleAds_1.TargetOptionsGoogleAdsFromJSONTyped(json, true)), { type: 'google_ads' });
        case 'hosted_csv':
            return Object.assign(Object.assign({}, TargetOptionsHostedCsv_1.TargetOptionsHostedCsvFromJSONTyped(json, true)), { type: 'hosted_csv' });
        case 'hubspot':
            return Object.assign(Object.assign({}, TargetOptionsHubspot_1.TargetOptionsHubspotFromJSONTyped(json, true)), { type: 'hubspot' });
        case 'iterable':
            return Object.assign(Object.assign({}, TargetOptionsIterable_1.TargetOptionsIterableFromJSONTyped(json, true)), { type: 'iterable' });
        case 'klaviyo':
            return Object.assign(Object.assign({}, TargetOptionsKlaviyo_1.TargetOptionsKlaviyoFromJSONTyped(json, true)), { type: 'klaviyo' });
        case 'linkedin_ads':
            return Object.assign(Object.assign({}, TargetOptionsLinkedinAds_1.TargetOptionsLinkedinAdsFromJSONTyped(json, true)), { type: 'linkedin_ads' });
        case 'lookup_api':
            return Object.assign(Object.assign({}, TargetOptionsLookupApi_1.TargetOptionsLookupApiFromJSONTyped(json, true)), { type: 'lookup_api' });
        case 'mysql':
            return Object.assign(Object.assign({}, TargetOptionsMysql_1.TargetOptionsMysqlFromJSONTyped(json, true)), { type: 'mysql' });
        case 'pinterest_ads':
            return Object.assign(Object.assign({}, TargetOptionsPinterestAds_1.TargetOptionsPinterestAdsFromJSONTyped(json, true)), { type: 'pinterest_ads' });
        case 'poplar':
            return Object.assign(Object.assign({}, TargetOptionsPoplar_1.TargetOptionsPoplarFromJSONTyped(json, true)), { type: 'poplar' });
        case 'postgres':
            return Object.assign(Object.assign({}, TargetOptionsPostgres_1.TargetOptionsPostgresFromJSONTyped(json, true)), { type: 'postgres' });
        case 'redshift':
            return Object.assign(Object.assign({}, TargetOptionsRedshift_1.TargetOptionsRedshiftFromJSONTyped(json, true)), { type: 'redshift' });
        case 's3_csv':
            return Object.assign(Object.assign({}, TargetOptionsS3Csv_1.TargetOptionsS3CsvFromJSONTyped(json, true)), { type: 's3_csv' });
        case 'salesforce':
            return Object.assign(Object.assign({}, TargetOptionsSalesforce_1.TargetOptionsSalesforceFromJSONTyped(json, true)), { type: 'salesforce' });
        case 'salesforce_marketing_cloud':
            return Object.assign(Object.assign({}, TargetOptionsSalesforceMarketingCloud_1.TargetOptionsSalesforceMarketingCloudFromJSONTyped(json, true)), { type: 'salesforce_marketing_cloud' });
        case 'segment':
            return Object.assign(Object.assign({}, TargetOptionsSegment_1.TargetOptionsSegmentFromJSONTyped(json, true)), { type: 'segment' });
        case 'sftp':
            return Object.assign(Object.assign({}, TargetOptionsSftp_1.TargetOptionsSftpFromJSONTyped(json, true)), { type: 'sftp' });
        case 'snowflake':
            return Object.assign(Object.assign({}, TargetOptionsSnowflake_1.TargetOptionsSnowflakeFromJSONTyped(json, true)), { type: 'snowflake' });
        case 'sql_server':
            return Object.assign(Object.assign({}, TargetOptionsSqlServer_1.TargetOptionsSqlServerFromJSONTyped(json, true)), { type: 'sql_server' });
        case 'the_trade_desk':
            return Object.assign(Object.assign({}, TargetOptionsTheTradeDesk_1.TargetOptionsTheTradeDeskFromJSONTyped(json, true)), { type: 'the_trade_desk' });
        case 'tiktok':
            return Object.assign(Object.assign({}, TargetOptionsTiktok_1.TargetOptionsTiktokFromJSONTyped(json, true)), { type: 'tiktok' });
        default:
            throw new Error(`No variant of TargetOptions exists with 'type=${json['type']}'`);
    }
}
exports.TargetOptionsFromJSONTyped = TargetOptionsFromJSONTyped;
function TargetOptionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'aws_aurora_mysql':
            return TargetOptionsAwsAuroraMysql_1.TargetOptionsAwsAuroraMysqlToJSON(value);
        case 'aws_aurora_postgres':
            return TargetOptionsAwsAuroraPostgres_1.TargetOptionsAwsAuroraPostgresToJSON(value);
        case 'aws_rds_mysql':
            return TargetOptionsAwsRdsMysql_1.TargetOptionsAwsRdsMysqlToJSON(value);
        case 'aws_rds_postgres':
            return TargetOptionsAwsRdsPostgres_1.TargetOptionsAwsRdsPostgresToJSON(value);
        case 'aws_rds_sql_server':
            return TargetOptionsAwsRdsSqlServer_1.TargetOptionsAwsRdsSqlServerToJSON(value);
        case 'aws_redshift_serverless':
            return TargetOptionsAwsRedshiftServerless_1.TargetOptionsAwsRedshiftServerlessToJSON(value);
        case 'azure_sql_server':
            return TargetOptionsAzureSqlServer_1.TargetOptionsAzureSqlServerToJSON(value);
        case 'bigquery':
            return TargetOptionsBigQuery_1.TargetOptionsBigQueryToJSON(value);
        case 'facebook_custom_audiences':
            return TargetOptionsFacebookCustomAudiences_1.TargetOptionsFacebookCustomAudiencesToJSON(value);
        case 'gcp_cloud_sql_mysql':
            return TargetOptionsGcpCloudSqlMysql_1.TargetOptionsGcpCloudSqlMysqlToJSON(value);
        case 'gcp_cloud_sql_postgres':
            return TargetOptionsGcpCloudSqlPostgres_1.TargetOptionsGcpCloudSqlPostgresToJSON(value);
        case 'gcp_cloud_sql_sql_server':
            return TargetOptionsGcpCloudSqlSqlServer_1.TargetOptionsGcpCloudSqlSqlServerToJSON(value);
        case 'gcp_gcs_csv':
            return TargetOptionsGcpGcsCsv_1.TargetOptionsGcpGcsCsvToJSON(value);
        case 'google_ads':
            return TargetOptionsGoogleAds_1.TargetOptionsGoogleAdsToJSON(value);
        case 'hosted_csv':
            return TargetOptionsHostedCsv_1.TargetOptionsHostedCsvToJSON(value);
        case 'hubspot':
            return TargetOptionsHubspot_1.TargetOptionsHubspotToJSON(value);
        case 'iterable':
            return TargetOptionsIterable_1.TargetOptionsIterableToJSON(value);
        case 'klaviyo':
            return TargetOptionsKlaviyo_1.TargetOptionsKlaviyoToJSON(value);
        case 'linkedin_ads':
            return TargetOptionsLinkedinAds_1.TargetOptionsLinkedinAdsToJSON(value);
        case 'lookup_api':
            return TargetOptionsLookupApi_1.TargetOptionsLookupApiToJSON(value);
        case 'mysql':
            return TargetOptionsMysql_1.TargetOptionsMysqlToJSON(value);
        case 'pinterest_ads':
            return TargetOptionsPinterestAds_1.TargetOptionsPinterestAdsToJSON(value);
        case 'poplar':
            return TargetOptionsPoplar_1.TargetOptionsPoplarToJSON(value);
        case 'postgres':
            return TargetOptionsPostgres_1.TargetOptionsPostgresToJSON(value);
        case 'redshift':
            return TargetOptionsRedshift_1.TargetOptionsRedshiftToJSON(value);
        case 's3_csv':
            return TargetOptionsS3Csv_1.TargetOptionsS3CsvToJSON(value);
        case 'salesforce':
            return TargetOptionsSalesforce_1.TargetOptionsSalesforceToJSON(value);
        case 'salesforce_marketing_cloud':
            return TargetOptionsSalesforceMarketingCloud_1.TargetOptionsSalesforceMarketingCloudToJSON(value);
        case 'segment':
            return TargetOptionsSegment_1.TargetOptionsSegmentToJSON(value);
        case 'sftp':
            return TargetOptionsSftp_1.TargetOptionsSftpToJSON(value);
        case 'snowflake':
            return TargetOptionsSnowflake_1.TargetOptionsSnowflakeToJSON(value);
        case 'sql_server':
            return TargetOptionsSqlServer_1.TargetOptionsSqlServerToJSON(value);
        case 'the_trade_desk':
            return TargetOptionsTheTradeDesk_1.TargetOptionsTheTradeDeskToJSON(value);
        case 'tiktok':
            return TargetOptionsTiktok_1.TargetOptionsTiktokToJSON(value);
        default:
            throw new Error(`No variant of TargetOptions exists with 'type=${value['type']}'`);
    }
}
exports.TargetOptionsToJSON = TargetOptionsToJSON;