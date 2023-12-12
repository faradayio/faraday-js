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
exports.DatasetOptionsPostToJSON = exports.DatasetOptionsPostFromJSONTyped = exports.DatasetOptionsPostFromJSON = void 0;
const DatasetOptionsAwsAuroraMysqlPost_1 = require("./DatasetOptionsAwsAuroraMysqlPost");
const DatasetOptionsAwsAuroraPostgresPost_1 = require("./DatasetOptionsAwsAuroraPostgresPost");
const DatasetOptionsAwsRdsMysqlPost_1 = require("./DatasetOptionsAwsRdsMysqlPost");
const DatasetOptionsAwsRdsPostgresPost_1 = require("./DatasetOptionsAwsRdsPostgresPost");
const DatasetOptionsAwsRdsSqlServerPost_1 = require("./DatasetOptionsAwsRdsSqlServerPost");
const DatasetOptionsAwsRedshiftServerlessPost_1 = require("./DatasetOptionsAwsRedshiftServerlessPost");
const DatasetOptionsAzureSqlServerPost_1 = require("./DatasetOptionsAzureSqlServerPost");
const DatasetOptionsBigQueryPost_1 = require("./DatasetOptionsBigQueryPost");
const DatasetOptionsClassicPost_1 = require("./DatasetOptionsClassicPost");
const DatasetOptionsGcpCloudSqlMysqlPost_1 = require("./DatasetOptionsGcpCloudSqlMysqlPost");
const DatasetOptionsGcpCloudSqlPostgresPost_1 = require("./DatasetOptionsGcpCloudSqlPostgresPost");
const DatasetOptionsGcpCloudSqlSqlServerPost_1 = require("./DatasetOptionsGcpCloudSqlSqlServerPost");
const DatasetOptionsGcpGcsCsvPost_1 = require("./DatasetOptionsGcpGcsCsvPost");
const DatasetOptionsHostedCsvPost_1 = require("./DatasetOptionsHostedCsvPost");
const DatasetOptionsHubspotPost_1 = require("./DatasetOptionsHubspotPost");
const DatasetOptionsIterablePost_1 = require("./DatasetOptionsIterablePost");
const DatasetOptionsKlaviyoPost_1 = require("./DatasetOptionsKlaviyoPost");
const DatasetOptionsMysqlPost_1 = require("./DatasetOptionsMysqlPost");
const DatasetOptionsPostgresPost_1 = require("./DatasetOptionsPostgresPost");
const DatasetOptionsRechargePost_1 = require("./DatasetOptionsRechargePost");
const DatasetOptionsRedshiftPost_1 = require("./DatasetOptionsRedshiftPost");
const DatasetOptionsS3CsvPost_1 = require("./DatasetOptionsS3CsvPost");
const DatasetOptionsSalesforceMarketingCloudPost_1 = require("./DatasetOptionsSalesforceMarketingCloudPost");
const DatasetOptionsSalesforcePost_1 = require("./DatasetOptionsSalesforcePost");
const DatasetOptionsSftpPost_1 = require("./DatasetOptionsSftpPost");
const DatasetOptionsShopifyPost_1 = require("./DatasetOptionsShopifyPost");
const DatasetOptionsSnowflakePost_1 = require("./DatasetOptionsSnowflakePost");
const DatasetOptionsSqlServerPost_1 = require("./DatasetOptionsSqlServerPost");
const DatasetOptionsStripePost_1 = require("./DatasetOptionsStripePost");
function DatasetOptionsPostFromJSON(json) {
    return DatasetOptionsPostFromJSONTyped(json, false);
}
exports.DatasetOptionsPostFromJSON = DatasetOptionsPostFromJSON;
function DatasetOptionsPostFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'aws_aurora_mysql':
            return Object.assign(Object.assign({}, DatasetOptionsAwsAuroraMysqlPost_1.DatasetOptionsAwsAuroraMysqlPostFromJSONTyped(json, true)), { type: 'aws_aurora_mysql' });
        case 'aws_aurora_postgres':
            return Object.assign(Object.assign({}, DatasetOptionsAwsAuroraPostgresPost_1.DatasetOptionsAwsAuroraPostgresPostFromJSONTyped(json, true)), { type: 'aws_aurora_postgres' });
        case 'aws_rds_mysql':
            return Object.assign(Object.assign({}, DatasetOptionsAwsRdsMysqlPost_1.DatasetOptionsAwsRdsMysqlPostFromJSONTyped(json, true)), { type: 'aws_rds_mysql' });
        case 'aws_rds_postgres':
            return Object.assign(Object.assign({}, DatasetOptionsAwsRdsPostgresPost_1.DatasetOptionsAwsRdsPostgresPostFromJSONTyped(json, true)), { type: 'aws_rds_postgres' });
        case 'aws_rds_sql_server':
            return Object.assign(Object.assign({}, DatasetOptionsAwsRdsSqlServerPost_1.DatasetOptionsAwsRdsSqlServerPostFromJSONTyped(json, true)), { type: 'aws_rds_sql_server' });
        case 'aws_redshift_serverless':
            return Object.assign(Object.assign({}, DatasetOptionsAwsRedshiftServerlessPost_1.DatasetOptionsAwsRedshiftServerlessPostFromJSONTyped(json, true)), { type: 'aws_redshift_serverless' });
        case 'azure_sql_server':
            return Object.assign(Object.assign({}, DatasetOptionsAzureSqlServerPost_1.DatasetOptionsAzureSqlServerPostFromJSONTyped(json, true)), { type: 'azure_sql_server' });
        case 'bigquery':
            return Object.assign(Object.assign({}, DatasetOptionsBigQueryPost_1.DatasetOptionsBigQueryPostFromJSONTyped(json, true)), { type: 'bigquery' });
        case 'classic':
            return Object.assign(Object.assign({}, DatasetOptionsClassicPost_1.DatasetOptionsClassicPostFromJSONTyped(json, true)), { type: 'classic' });
        case 'gcp_cloud_sql_mysql':
            return Object.assign(Object.assign({}, DatasetOptionsGcpCloudSqlMysqlPost_1.DatasetOptionsGcpCloudSqlMysqlPostFromJSONTyped(json, true)), { type: 'gcp_cloud_sql_mysql' });
        case 'gcp_cloud_sql_postgres':
            return Object.assign(Object.assign({}, DatasetOptionsGcpCloudSqlPostgresPost_1.DatasetOptionsGcpCloudSqlPostgresPostFromJSONTyped(json, true)), { type: 'gcp_cloud_sql_postgres' });
        case 'gcp_cloud_sql_sql_server':
            return Object.assign(Object.assign({}, DatasetOptionsGcpCloudSqlSqlServerPost_1.DatasetOptionsGcpCloudSqlSqlServerPostFromJSONTyped(json, true)), { type: 'gcp_cloud_sql_sql_server' });
        case 'gcp_gcs_csv':
            return Object.assign(Object.assign({}, DatasetOptionsGcpGcsCsvPost_1.DatasetOptionsGcpGcsCsvPostFromJSONTyped(json, true)), { type: 'gcp_gcs_csv' });
        case 'hosted_csv':
            return Object.assign(Object.assign({}, DatasetOptionsHostedCsvPost_1.DatasetOptionsHostedCsvPostFromJSONTyped(json, true)), { type: 'hosted_csv' });
        case 'hubspot':
            return Object.assign(Object.assign({}, DatasetOptionsHubspotPost_1.DatasetOptionsHubspotPostFromJSONTyped(json, true)), { type: 'hubspot' });
        case 'iterable':
            return Object.assign(Object.assign({}, DatasetOptionsIterablePost_1.DatasetOptionsIterablePostFromJSONTyped(json, true)), { type: 'iterable' });
        case 'klaviyo':
            return Object.assign(Object.assign({}, DatasetOptionsKlaviyoPost_1.DatasetOptionsKlaviyoPostFromJSONTyped(json, true)), { type: 'klaviyo' });
        case 'mysql':
            return Object.assign(Object.assign({}, DatasetOptionsMysqlPost_1.DatasetOptionsMysqlPostFromJSONTyped(json, true)), { type: 'mysql' });
        case 'postgres':
            return Object.assign(Object.assign({}, DatasetOptionsPostgresPost_1.DatasetOptionsPostgresPostFromJSONTyped(json, true)), { type: 'postgres' });
        case 'recharge':
            return Object.assign(Object.assign({}, DatasetOptionsRechargePost_1.DatasetOptionsRechargePostFromJSONTyped(json, true)), { type: 'recharge' });
        case 'redshift':
            return Object.assign(Object.assign({}, DatasetOptionsRedshiftPost_1.DatasetOptionsRedshiftPostFromJSONTyped(json, true)), { type: 'redshift' });
        case 's3_csv':
            return Object.assign(Object.assign({}, DatasetOptionsS3CsvPost_1.DatasetOptionsS3CsvPostFromJSONTyped(json, true)), { type: 's3_csv' });
        case 'salesforce':
            return Object.assign(Object.assign({}, DatasetOptionsSalesforcePost_1.DatasetOptionsSalesforcePostFromJSONTyped(json, true)), { type: 'salesforce' });
        case 'salesforce_marketing_cloud':
            return Object.assign(Object.assign({}, DatasetOptionsSalesforceMarketingCloudPost_1.DatasetOptionsSalesforceMarketingCloudPostFromJSONTyped(json, true)), { type: 'salesforce_marketing_cloud' });
        case 'sftp':
            return Object.assign(Object.assign({}, DatasetOptionsSftpPost_1.DatasetOptionsSftpPostFromJSONTyped(json, true)), { type: 'sftp' });
        case 'shopify':
            return Object.assign(Object.assign({}, DatasetOptionsShopifyPost_1.DatasetOptionsShopifyPostFromJSONTyped(json, true)), { type: 'shopify' });
        case 'snowflake':
            return Object.assign(Object.assign({}, DatasetOptionsSnowflakePost_1.DatasetOptionsSnowflakePostFromJSONTyped(json, true)), { type: 'snowflake' });
        case 'sql_server':
            return Object.assign(Object.assign({}, DatasetOptionsSqlServerPost_1.DatasetOptionsSqlServerPostFromJSONTyped(json, true)), { type: 'sql_server' });
        case 'stripe':
            return Object.assign(Object.assign({}, DatasetOptionsStripePost_1.DatasetOptionsStripePostFromJSONTyped(json, true)), { type: 'stripe' });
        default:
            throw new Error(`No variant of DatasetOptionsPost exists with 'type=${json['type']}'`);
    }
}
exports.DatasetOptionsPostFromJSONTyped = DatasetOptionsPostFromJSONTyped;
function DatasetOptionsPostToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'aws_aurora_mysql':
            return DatasetOptionsAwsAuroraMysqlPost_1.DatasetOptionsAwsAuroraMysqlPostToJSON(value);
        case 'aws_aurora_postgres':
            return DatasetOptionsAwsAuroraPostgresPost_1.DatasetOptionsAwsAuroraPostgresPostToJSON(value);
        case 'aws_rds_mysql':
            return DatasetOptionsAwsRdsMysqlPost_1.DatasetOptionsAwsRdsMysqlPostToJSON(value);
        case 'aws_rds_postgres':
            return DatasetOptionsAwsRdsPostgresPost_1.DatasetOptionsAwsRdsPostgresPostToJSON(value);
        case 'aws_rds_sql_server':
            return DatasetOptionsAwsRdsSqlServerPost_1.DatasetOptionsAwsRdsSqlServerPostToJSON(value);
        case 'aws_redshift_serverless':
            return DatasetOptionsAwsRedshiftServerlessPost_1.DatasetOptionsAwsRedshiftServerlessPostToJSON(value);
        case 'azure_sql_server':
            return DatasetOptionsAzureSqlServerPost_1.DatasetOptionsAzureSqlServerPostToJSON(value);
        case 'bigquery':
            return DatasetOptionsBigQueryPost_1.DatasetOptionsBigQueryPostToJSON(value);
        case 'classic':
            return DatasetOptionsClassicPost_1.DatasetOptionsClassicPostToJSON(value);
        case 'gcp_cloud_sql_mysql':
            return DatasetOptionsGcpCloudSqlMysqlPost_1.DatasetOptionsGcpCloudSqlMysqlPostToJSON(value);
        case 'gcp_cloud_sql_postgres':
            return DatasetOptionsGcpCloudSqlPostgresPost_1.DatasetOptionsGcpCloudSqlPostgresPostToJSON(value);
        case 'gcp_cloud_sql_sql_server':
            return DatasetOptionsGcpCloudSqlSqlServerPost_1.DatasetOptionsGcpCloudSqlSqlServerPostToJSON(value);
        case 'gcp_gcs_csv':
            return DatasetOptionsGcpGcsCsvPost_1.DatasetOptionsGcpGcsCsvPostToJSON(value);
        case 'hosted_csv':
            return DatasetOptionsHostedCsvPost_1.DatasetOptionsHostedCsvPostToJSON(value);
        case 'hubspot':
            return DatasetOptionsHubspotPost_1.DatasetOptionsHubspotPostToJSON(value);
        case 'iterable':
            return DatasetOptionsIterablePost_1.DatasetOptionsIterablePostToJSON(value);
        case 'klaviyo':
            return DatasetOptionsKlaviyoPost_1.DatasetOptionsKlaviyoPostToJSON(value);
        case 'mysql':
            return DatasetOptionsMysqlPost_1.DatasetOptionsMysqlPostToJSON(value);
        case 'postgres':
            return DatasetOptionsPostgresPost_1.DatasetOptionsPostgresPostToJSON(value);
        case 'recharge':
            return DatasetOptionsRechargePost_1.DatasetOptionsRechargePostToJSON(value);
        case 'redshift':
            return DatasetOptionsRedshiftPost_1.DatasetOptionsRedshiftPostToJSON(value);
        case 's3_csv':
            return DatasetOptionsS3CsvPost_1.DatasetOptionsS3CsvPostToJSON(value);
        case 'salesforce':
            return DatasetOptionsSalesforcePost_1.DatasetOptionsSalesforcePostToJSON(value);
        case 'salesforce_marketing_cloud':
            return DatasetOptionsSalesforceMarketingCloudPost_1.DatasetOptionsSalesforceMarketingCloudPostToJSON(value);
        case 'sftp':
            return DatasetOptionsSftpPost_1.DatasetOptionsSftpPostToJSON(value);
        case 'shopify':
            return DatasetOptionsShopifyPost_1.DatasetOptionsShopifyPostToJSON(value);
        case 'snowflake':
            return DatasetOptionsSnowflakePost_1.DatasetOptionsSnowflakePostToJSON(value);
        case 'sql_server':
            return DatasetOptionsSqlServerPost_1.DatasetOptionsSqlServerPostToJSON(value);
        case 'stripe':
            return DatasetOptionsStripePost_1.DatasetOptionsStripePostToJSON(value);
        default:
            throw new Error(`No variant of DatasetOptionsPost exists with 'type=${value['type']}'`);
    }
}
exports.DatasetOptionsPostToJSON = DatasetOptionsPostToJSON;
