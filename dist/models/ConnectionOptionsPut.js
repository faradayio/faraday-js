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
exports.ConnectionOptionsPutToJSON = exports.ConnectionOptionsPutFromJSONTyped = exports.ConnectionOptionsPutFromJSON = void 0;
const ConnectionOptionsAwsAuroraMysqlPut_1 = require("./ConnectionOptionsAwsAuroraMysqlPut");
const ConnectionOptionsAwsAuroraPostgresPut_1 = require("./ConnectionOptionsAwsAuroraPostgresPut");
const ConnectionOptionsAwsRdsMysqlPut_1 = require("./ConnectionOptionsAwsRdsMysqlPut");
const ConnectionOptionsAwsRdsPostgresPut_1 = require("./ConnectionOptionsAwsRdsPostgresPut");
const ConnectionOptionsAwsRdsSqlServerPut_1 = require("./ConnectionOptionsAwsRdsSqlServerPut");
const ConnectionOptionsAwsRedshiftServerlessPut_1 = require("./ConnectionOptionsAwsRedshiftServerlessPut");
const ConnectionOptionsAzureSqlServerPut_1 = require("./ConnectionOptionsAzureSqlServerPut");
const ConnectionOptionsBigQueryPut_1 = require("./ConnectionOptionsBigQueryPut");
const ConnectionOptionsClassicPut_1 = require("./ConnectionOptionsClassicPut");
const ConnectionOptionsFacebookCustomAudiencesPut_1 = require("./ConnectionOptionsFacebookCustomAudiencesPut");
const ConnectionOptionsGcpCloudSqlMysqlPut_1 = require("./ConnectionOptionsGcpCloudSqlMysqlPut");
const ConnectionOptionsGcpCloudSqlPostgresPut_1 = require("./ConnectionOptionsGcpCloudSqlPostgresPut");
const ConnectionOptionsGcpCloudSqlSqlServerPut_1 = require("./ConnectionOptionsGcpCloudSqlSqlServerPut");
const ConnectionOptionsGcpGcsCsvPut_1 = require("./ConnectionOptionsGcpGcsCsvPut");
const ConnectionOptionsGoogleAdsPut_1 = require("./ConnectionOptionsGoogleAdsPut");
const ConnectionOptionsHostedCsvPut_1 = require("./ConnectionOptionsHostedCsvPut");
const ConnectionOptionsHubspotPut_1 = require("./ConnectionOptionsHubspotPut");
const ConnectionOptionsIterablePut_1 = require("./ConnectionOptionsIterablePut");
const ConnectionOptionsKlaviyoPut_1 = require("./ConnectionOptionsKlaviyoPut");
const ConnectionOptionsLinkedinAdsPut_1 = require("./ConnectionOptionsLinkedinAdsPut");
const ConnectionOptionsLookupApiPut_1 = require("./ConnectionOptionsLookupApiPut");
const ConnectionOptionsMysqlPut_1 = require("./ConnectionOptionsMysqlPut");
const ConnectionOptionsPinterestAdsPut_1 = require("./ConnectionOptionsPinterestAdsPut");
const ConnectionOptionsPoplarPut_1 = require("./ConnectionOptionsPoplarPut");
const ConnectionOptionsPostgresPut_1 = require("./ConnectionOptionsPostgresPut");
const ConnectionOptionsRechargePut_1 = require("./ConnectionOptionsRechargePut");
const ConnectionOptionsRedshiftPut_1 = require("./ConnectionOptionsRedshiftPut");
const ConnectionOptionsS3CsvPut_1 = require("./ConnectionOptionsS3CsvPut");
const ConnectionOptionsSalesforceMarketingCloudPut_1 = require("./ConnectionOptionsSalesforceMarketingCloudPut");
const ConnectionOptionsSalesforcePut_1 = require("./ConnectionOptionsSalesforcePut");
const ConnectionOptionsSegmentPut_1 = require("./ConnectionOptionsSegmentPut");
const ConnectionOptionsSftpPut_1 = require("./ConnectionOptionsSftpPut");
const ConnectionOptionsShopifyPut_1 = require("./ConnectionOptionsShopifyPut");
const ConnectionOptionsSnowflakePut_1 = require("./ConnectionOptionsSnowflakePut");
const ConnectionOptionsSqlServerPut_1 = require("./ConnectionOptionsSqlServerPut");
const ConnectionOptionsStripePut_1 = require("./ConnectionOptionsStripePut");
const ConnectionOptionsTheTradeDeskPut_1 = require("./ConnectionOptionsTheTradeDeskPut");
const ConnectionOptionsTiktokPut_1 = require("./ConnectionOptionsTiktokPut");
function ConnectionOptionsPutFromJSON(json) {
    return ConnectionOptionsPutFromJSONTyped(json, false);
}
exports.ConnectionOptionsPutFromJSON = ConnectionOptionsPutFromJSON;
function ConnectionOptionsPutFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'aws_aurora_mysql':
            return Object.assign(Object.assign({}, ConnectionOptionsAwsAuroraMysqlPut_1.ConnectionOptionsAwsAuroraMysqlPutFromJSONTyped(json, true)), { type: 'aws_aurora_mysql' });
        case 'aws_aurora_postgres':
            return Object.assign(Object.assign({}, ConnectionOptionsAwsAuroraPostgresPut_1.ConnectionOptionsAwsAuroraPostgresPutFromJSONTyped(json, true)), { type: 'aws_aurora_postgres' });
        case 'aws_rds_mysql':
            return Object.assign(Object.assign({}, ConnectionOptionsAwsRdsMysqlPut_1.ConnectionOptionsAwsRdsMysqlPutFromJSONTyped(json, true)), { type: 'aws_rds_mysql' });
        case 'aws_rds_postgres':
            return Object.assign(Object.assign({}, ConnectionOptionsAwsRdsPostgresPut_1.ConnectionOptionsAwsRdsPostgresPutFromJSONTyped(json, true)), { type: 'aws_rds_postgres' });
        case 'aws_rds_sql_server':
            return Object.assign(Object.assign({}, ConnectionOptionsAwsRdsSqlServerPut_1.ConnectionOptionsAwsRdsSqlServerPutFromJSONTyped(json, true)), { type: 'aws_rds_sql_server' });
        case 'aws_redshift_serverless':
            return Object.assign(Object.assign({}, ConnectionOptionsAwsRedshiftServerlessPut_1.ConnectionOptionsAwsRedshiftServerlessPutFromJSONTyped(json, true)), { type: 'aws_redshift_serverless' });
        case 'azure_sql_server':
            return Object.assign(Object.assign({}, ConnectionOptionsAzureSqlServerPut_1.ConnectionOptionsAzureSqlServerPutFromJSONTyped(json, true)), { type: 'azure_sql_server' });
        case 'bigquery':
            return Object.assign(Object.assign({}, ConnectionOptionsBigQueryPut_1.ConnectionOptionsBigQueryPutFromJSONTyped(json, true)), { type: 'bigquery' });
        case 'classic':
            return Object.assign(Object.assign({}, ConnectionOptionsClassicPut_1.ConnectionOptionsClassicPutFromJSONTyped(json, true)), { type: 'classic' });
        case 'facebook_custom_audiences':
            return Object.assign(Object.assign({}, ConnectionOptionsFacebookCustomAudiencesPut_1.ConnectionOptionsFacebookCustomAudiencesPutFromJSONTyped(json, true)), { type: 'facebook_custom_audiences' });
        case 'gcp_cloud_sql_mysql':
            return Object.assign(Object.assign({}, ConnectionOptionsGcpCloudSqlMysqlPut_1.ConnectionOptionsGcpCloudSqlMysqlPutFromJSONTyped(json, true)), { type: 'gcp_cloud_sql_mysql' });
        case 'gcp_cloud_sql_postgres':
            return Object.assign(Object.assign({}, ConnectionOptionsGcpCloudSqlPostgresPut_1.ConnectionOptionsGcpCloudSqlPostgresPutFromJSONTyped(json, true)), { type: 'gcp_cloud_sql_postgres' });
        case 'gcp_cloud_sql_sql_server':
            return Object.assign(Object.assign({}, ConnectionOptionsGcpCloudSqlSqlServerPut_1.ConnectionOptionsGcpCloudSqlSqlServerPutFromJSONTyped(json, true)), { type: 'gcp_cloud_sql_sql_server' });
        case 'gcp_gcs_csv':
            return Object.assign(Object.assign({}, ConnectionOptionsGcpGcsCsvPut_1.ConnectionOptionsGcpGcsCsvPutFromJSONTyped(json, true)), { type: 'gcp_gcs_csv' });
        case 'google_ads':
            return Object.assign(Object.assign({}, ConnectionOptionsGoogleAdsPut_1.ConnectionOptionsGoogleAdsPutFromJSONTyped(json, true)), { type: 'google_ads' });
        case 'hosted_csv':
            return Object.assign(Object.assign({}, ConnectionOptionsHostedCsvPut_1.ConnectionOptionsHostedCsvPutFromJSONTyped(json, true)), { type: 'hosted_csv' });
        case 'hubspot':
            return Object.assign(Object.assign({}, ConnectionOptionsHubspotPut_1.ConnectionOptionsHubspotPutFromJSONTyped(json, true)), { type: 'hubspot' });
        case 'iterable':
            return Object.assign(Object.assign({}, ConnectionOptionsIterablePut_1.ConnectionOptionsIterablePutFromJSONTyped(json, true)), { type: 'iterable' });
        case 'klaviyo':
            return Object.assign(Object.assign({}, ConnectionOptionsKlaviyoPut_1.ConnectionOptionsKlaviyoPutFromJSONTyped(json, true)), { type: 'klaviyo' });
        case 'linkedin_ads':
            return Object.assign(Object.assign({}, ConnectionOptionsLinkedinAdsPut_1.ConnectionOptionsLinkedinAdsPutFromJSONTyped(json, true)), { type: 'linkedin_ads' });
        case 'lookup_api':
            return Object.assign(Object.assign({}, ConnectionOptionsLookupApiPut_1.ConnectionOptionsLookupApiPutFromJSONTyped(json, true)), { type: 'lookup_api' });
        case 'mysql':
            return Object.assign(Object.assign({}, ConnectionOptionsMysqlPut_1.ConnectionOptionsMysqlPutFromJSONTyped(json, true)), { type: 'mysql' });
        case 'pinterest_ads':
            return Object.assign(Object.assign({}, ConnectionOptionsPinterestAdsPut_1.ConnectionOptionsPinterestAdsPutFromJSONTyped(json, true)), { type: 'pinterest_ads' });
        case 'poplar':
            return Object.assign(Object.assign({}, ConnectionOptionsPoplarPut_1.ConnectionOptionsPoplarPutFromJSONTyped(json, true)), { type: 'poplar' });
        case 'postgres':
            return Object.assign(Object.assign({}, ConnectionOptionsPostgresPut_1.ConnectionOptionsPostgresPutFromJSONTyped(json, true)), { type: 'postgres' });
        case 'recharge':
            return Object.assign(Object.assign({}, ConnectionOptionsRechargePut_1.ConnectionOptionsRechargePutFromJSONTyped(json, true)), { type: 'recharge' });
        case 'redshift':
            return Object.assign(Object.assign({}, ConnectionOptionsRedshiftPut_1.ConnectionOptionsRedshiftPutFromJSONTyped(json, true)), { type: 'redshift' });
        case 's3_csv':
            return Object.assign(Object.assign({}, ConnectionOptionsS3CsvPut_1.ConnectionOptionsS3CsvPutFromJSONTyped(json, true)), { type: 's3_csv' });
        case 'salesforce':
            return Object.assign(Object.assign({}, ConnectionOptionsSalesforcePut_1.ConnectionOptionsSalesforcePutFromJSONTyped(json, true)), { type: 'salesforce' });
        case 'salesforce_marketing_cloud':
            return Object.assign(Object.assign({}, ConnectionOptionsSalesforceMarketingCloudPut_1.ConnectionOptionsSalesforceMarketingCloudPutFromJSONTyped(json, true)), { type: 'salesforce_marketing_cloud' });
        case 'segment':
            return Object.assign(Object.assign({}, ConnectionOptionsSegmentPut_1.ConnectionOptionsSegmentPutFromJSONTyped(json, true)), { type: 'segment' });
        case 'sftp':
            return Object.assign(Object.assign({}, ConnectionOptionsSftpPut_1.ConnectionOptionsSftpPutFromJSONTyped(json, true)), { type: 'sftp' });
        case 'shopify':
            return Object.assign(Object.assign({}, ConnectionOptionsShopifyPut_1.ConnectionOptionsShopifyPutFromJSONTyped(json, true)), { type: 'shopify' });
        case 'snowflake':
            return Object.assign(Object.assign({}, ConnectionOptionsSnowflakePut_1.ConnectionOptionsSnowflakePutFromJSONTyped(json, true)), { type: 'snowflake' });
        case 'sql_server':
            return Object.assign(Object.assign({}, ConnectionOptionsSqlServerPut_1.ConnectionOptionsSqlServerPutFromJSONTyped(json, true)), { type: 'sql_server' });
        case 'stripe':
            return Object.assign(Object.assign({}, ConnectionOptionsStripePut_1.ConnectionOptionsStripePutFromJSONTyped(json, true)), { type: 'stripe' });
        case 'the_trade_desk':
            return Object.assign(Object.assign({}, ConnectionOptionsTheTradeDeskPut_1.ConnectionOptionsTheTradeDeskPutFromJSONTyped(json, true)), { type: 'the_trade_desk' });
        case 'tiktok':
            return Object.assign(Object.assign({}, ConnectionOptionsTiktokPut_1.ConnectionOptionsTiktokPutFromJSONTyped(json, true)), { type: 'tiktok' });
        default:
            throw new Error(`No variant of ConnectionOptionsPut exists with 'type=${json['type']}'`);
    }
}
exports.ConnectionOptionsPutFromJSONTyped = ConnectionOptionsPutFromJSONTyped;
function ConnectionOptionsPutToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'aws_aurora_mysql':
            return ConnectionOptionsAwsAuroraMysqlPut_1.ConnectionOptionsAwsAuroraMysqlPutToJSON(value);
        case 'aws_aurora_postgres':
            return ConnectionOptionsAwsAuroraPostgresPut_1.ConnectionOptionsAwsAuroraPostgresPutToJSON(value);
        case 'aws_rds_mysql':
            return ConnectionOptionsAwsRdsMysqlPut_1.ConnectionOptionsAwsRdsMysqlPutToJSON(value);
        case 'aws_rds_postgres':
            return ConnectionOptionsAwsRdsPostgresPut_1.ConnectionOptionsAwsRdsPostgresPutToJSON(value);
        case 'aws_rds_sql_server':
            return ConnectionOptionsAwsRdsSqlServerPut_1.ConnectionOptionsAwsRdsSqlServerPutToJSON(value);
        case 'aws_redshift_serverless':
            return ConnectionOptionsAwsRedshiftServerlessPut_1.ConnectionOptionsAwsRedshiftServerlessPutToJSON(value);
        case 'azure_sql_server':
            return ConnectionOptionsAzureSqlServerPut_1.ConnectionOptionsAzureSqlServerPutToJSON(value);
        case 'bigquery':
            return ConnectionOptionsBigQueryPut_1.ConnectionOptionsBigQueryPutToJSON(value);
        case 'classic':
            return ConnectionOptionsClassicPut_1.ConnectionOptionsClassicPutToJSON(value);
        case 'facebook_custom_audiences':
            return ConnectionOptionsFacebookCustomAudiencesPut_1.ConnectionOptionsFacebookCustomAudiencesPutToJSON(value);
        case 'gcp_cloud_sql_mysql':
            return ConnectionOptionsGcpCloudSqlMysqlPut_1.ConnectionOptionsGcpCloudSqlMysqlPutToJSON(value);
        case 'gcp_cloud_sql_postgres':
            return ConnectionOptionsGcpCloudSqlPostgresPut_1.ConnectionOptionsGcpCloudSqlPostgresPutToJSON(value);
        case 'gcp_cloud_sql_sql_server':
            return ConnectionOptionsGcpCloudSqlSqlServerPut_1.ConnectionOptionsGcpCloudSqlSqlServerPutToJSON(value);
        case 'gcp_gcs_csv':
            return ConnectionOptionsGcpGcsCsvPut_1.ConnectionOptionsGcpGcsCsvPutToJSON(value);
        case 'google_ads':
            return ConnectionOptionsGoogleAdsPut_1.ConnectionOptionsGoogleAdsPutToJSON(value);
        case 'hosted_csv':
            return ConnectionOptionsHostedCsvPut_1.ConnectionOptionsHostedCsvPutToJSON(value);
        case 'hubspot':
            return ConnectionOptionsHubspotPut_1.ConnectionOptionsHubspotPutToJSON(value);
        case 'iterable':
            return ConnectionOptionsIterablePut_1.ConnectionOptionsIterablePutToJSON(value);
        case 'klaviyo':
            return ConnectionOptionsKlaviyoPut_1.ConnectionOptionsKlaviyoPutToJSON(value);
        case 'linkedin_ads':
            return ConnectionOptionsLinkedinAdsPut_1.ConnectionOptionsLinkedinAdsPutToJSON(value);
        case 'lookup_api':
            return ConnectionOptionsLookupApiPut_1.ConnectionOptionsLookupApiPutToJSON(value);
        case 'mysql':
            return ConnectionOptionsMysqlPut_1.ConnectionOptionsMysqlPutToJSON(value);
        case 'pinterest_ads':
            return ConnectionOptionsPinterestAdsPut_1.ConnectionOptionsPinterestAdsPutToJSON(value);
        case 'poplar':
            return ConnectionOptionsPoplarPut_1.ConnectionOptionsPoplarPutToJSON(value);
        case 'postgres':
            return ConnectionOptionsPostgresPut_1.ConnectionOptionsPostgresPutToJSON(value);
        case 'recharge':
            return ConnectionOptionsRechargePut_1.ConnectionOptionsRechargePutToJSON(value);
        case 'redshift':
            return ConnectionOptionsRedshiftPut_1.ConnectionOptionsRedshiftPutToJSON(value);
        case 's3_csv':
            return ConnectionOptionsS3CsvPut_1.ConnectionOptionsS3CsvPutToJSON(value);
        case 'salesforce':
            return ConnectionOptionsSalesforcePut_1.ConnectionOptionsSalesforcePutToJSON(value);
        case 'salesforce_marketing_cloud':
            return ConnectionOptionsSalesforceMarketingCloudPut_1.ConnectionOptionsSalesforceMarketingCloudPutToJSON(value);
        case 'segment':
            return ConnectionOptionsSegmentPut_1.ConnectionOptionsSegmentPutToJSON(value);
        case 'sftp':
            return ConnectionOptionsSftpPut_1.ConnectionOptionsSftpPutToJSON(value);
        case 'shopify':
            return ConnectionOptionsShopifyPut_1.ConnectionOptionsShopifyPutToJSON(value);
        case 'snowflake':
            return ConnectionOptionsSnowflakePut_1.ConnectionOptionsSnowflakePutToJSON(value);
        case 'sql_server':
            return ConnectionOptionsSqlServerPut_1.ConnectionOptionsSqlServerPutToJSON(value);
        case 'stripe':
            return ConnectionOptionsStripePut_1.ConnectionOptionsStripePutToJSON(value);
        case 'the_trade_desk':
            return ConnectionOptionsTheTradeDeskPut_1.ConnectionOptionsTheTradeDeskPutToJSON(value);
        case 'tiktok':
            return ConnectionOptionsTiktokPut_1.ConnectionOptionsTiktokPutToJSON(value);
        default:
            throw new Error(`No variant of ConnectionOptionsPut exists with 'type=${value['type']}'`);
    }
}
exports.ConnectionOptionsPutToJSON = ConnectionOptionsPutToJSON;