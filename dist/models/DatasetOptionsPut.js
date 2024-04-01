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
exports.DatasetOptionsPutToJSON = exports.DatasetOptionsPutFromJSONTyped = exports.DatasetOptionsPutFromJSON = void 0;
const DatasetOptionsAwsAuroraMysqlPut_1 = require("./DatasetOptionsAwsAuroraMysqlPut");
const DatasetOptionsAwsAuroraPostgresPut_1 = require("./DatasetOptionsAwsAuroraPostgresPut");
const DatasetOptionsAwsRdsMysqlPut_1 = require("./DatasetOptionsAwsRdsMysqlPut");
const DatasetOptionsAwsRdsPostgresPut_1 = require("./DatasetOptionsAwsRdsPostgresPut");
const DatasetOptionsAwsRdsSqlServerPut_1 = require("./DatasetOptionsAwsRdsSqlServerPut");
const DatasetOptionsAwsRedshiftServerlessPut_1 = require("./DatasetOptionsAwsRedshiftServerlessPut");
const DatasetOptionsAzureSqlServerPut_1 = require("./DatasetOptionsAzureSqlServerPut");
const DatasetOptionsBigQueryPut_1 = require("./DatasetOptionsBigQueryPut");
const DatasetOptionsClassicPut_1 = require("./DatasetOptionsClassicPut");
const DatasetOptionsGcpCloudSqlMysqlPut_1 = require("./DatasetOptionsGcpCloudSqlMysqlPut");
const DatasetOptionsGcpCloudSqlPostgresPut_1 = require("./DatasetOptionsGcpCloudSqlPostgresPut");
const DatasetOptionsGcpCloudSqlSqlServerPut_1 = require("./DatasetOptionsGcpCloudSqlSqlServerPut");
const DatasetOptionsGcpGcsCsvPut_1 = require("./DatasetOptionsGcpGcsCsvPut");
const DatasetOptionsHostedCsvPut_1 = require("./DatasetOptionsHostedCsvPut");
const DatasetOptionsHubspotPut_1 = require("./DatasetOptionsHubspotPut");
const DatasetOptionsIterablePut_1 = require("./DatasetOptionsIterablePut");
const DatasetOptionsKlaviyoPut_1 = require("./DatasetOptionsKlaviyoPut");
const DatasetOptionsMergePut_1 = require("./DatasetOptionsMergePut");
const DatasetOptionsMysqlPut_1 = require("./DatasetOptionsMysqlPut");
const DatasetOptionsPostgresPut_1 = require("./DatasetOptionsPostgresPut");
const DatasetOptionsRechargePut_1 = require("./DatasetOptionsRechargePut");
const DatasetOptionsRedshiftPut_1 = require("./DatasetOptionsRedshiftPut");
const DatasetOptionsS3CsvPut_1 = require("./DatasetOptionsS3CsvPut");
const DatasetOptionsSalesforceMarketingCloudPut_1 = require("./DatasetOptionsSalesforceMarketingCloudPut");
const DatasetOptionsSalesforcePut_1 = require("./DatasetOptionsSalesforcePut");
const DatasetOptionsSftpPut_1 = require("./DatasetOptionsSftpPut");
const DatasetOptionsShopifyPut_1 = require("./DatasetOptionsShopifyPut");
const DatasetOptionsSnowflakePut_1 = require("./DatasetOptionsSnowflakePut");
const DatasetOptionsSqlServerPut_1 = require("./DatasetOptionsSqlServerPut");
const DatasetOptionsStripePut_1 = require("./DatasetOptionsStripePut");
function DatasetOptionsPutFromJSON(json) {
    return DatasetOptionsPutFromJSONTyped(json, false);
}
exports.DatasetOptionsPutFromJSON = DatasetOptionsPutFromJSON;
function DatasetOptionsPutFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'aws_aurora_mysql':
            return Object.assign(Object.assign({}, DatasetOptionsAwsAuroraMysqlPut_1.DatasetOptionsAwsAuroraMysqlPutFromJSONTyped(json, true)), { type: 'aws_aurora_mysql' });
        case 'aws_aurora_postgres':
            return Object.assign(Object.assign({}, DatasetOptionsAwsAuroraPostgresPut_1.DatasetOptionsAwsAuroraPostgresPutFromJSONTyped(json, true)), { type: 'aws_aurora_postgres' });
        case 'aws_rds_mysql':
            return Object.assign(Object.assign({}, DatasetOptionsAwsRdsMysqlPut_1.DatasetOptionsAwsRdsMysqlPutFromJSONTyped(json, true)), { type: 'aws_rds_mysql' });
        case 'aws_rds_postgres':
            return Object.assign(Object.assign({}, DatasetOptionsAwsRdsPostgresPut_1.DatasetOptionsAwsRdsPostgresPutFromJSONTyped(json, true)), { type: 'aws_rds_postgres' });
        case 'aws_rds_sql_server':
            return Object.assign(Object.assign({}, DatasetOptionsAwsRdsSqlServerPut_1.DatasetOptionsAwsRdsSqlServerPutFromJSONTyped(json, true)), { type: 'aws_rds_sql_server' });
        case 'aws_redshift_serverless':
            return Object.assign(Object.assign({}, DatasetOptionsAwsRedshiftServerlessPut_1.DatasetOptionsAwsRedshiftServerlessPutFromJSONTyped(json, true)), { type: 'aws_redshift_serverless' });
        case 'azure_sql_server':
            return Object.assign(Object.assign({}, DatasetOptionsAzureSqlServerPut_1.DatasetOptionsAzureSqlServerPutFromJSONTyped(json, true)), { type: 'azure_sql_server' });
        case 'bigquery':
            return Object.assign(Object.assign({}, DatasetOptionsBigQueryPut_1.DatasetOptionsBigQueryPutFromJSONTyped(json, true)), { type: 'bigquery' });
        case 'classic':
            return Object.assign(Object.assign({}, DatasetOptionsClassicPut_1.DatasetOptionsClassicPutFromJSONTyped(json, true)), { type: 'classic' });
        case 'gcp_cloud_sql_mysql':
            return Object.assign(Object.assign({}, DatasetOptionsGcpCloudSqlMysqlPut_1.DatasetOptionsGcpCloudSqlMysqlPutFromJSONTyped(json, true)), { type: 'gcp_cloud_sql_mysql' });
        case 'gcp_cloud_sql_postgres':
            return Object.assign(Object.assign({}, DatasetOptionsGcpCloudSqlPostgresPut_1.DatasetOptionsGcpCloudSqlPostgresPutFromJSONTyped(json, true)), { type: 'gcp_cloud_sql_postgres' });
        case 'gcp_cloud_sql_sql_server':
            return Object.assign(Object.assign({}, DatasetOptionsGcpCloudSqlSqlServerPut_1.DatasetOptionsGcpCloudSqlSqlServerPutFromJSONTyped(json, true)), { type: 'gcp_cloud_sql_sql_server' });
        case 'gcp_gcs_csv':
            return Object.assign(Object.assign({}, DatasetOptionsGcpGcsCsvPut_1.DatasetOptionsGcpGcsCsvPutFromJSONTyped(json, true)), { type: 'gcp_gcs_csv' });
        case 'hosted_csv':
            return Object.assign(Object.assign({}, DatasetOptionsHostedCsvPut_1.DatasetOptionsHostedCsvPutFromJSONTyped(json, true)), { type: 'hosted_csv' });
        case 'hubspot':
            return Object.assign(Object.assign({}, DatasetOptionsHubspotPut_1.DatasetOptionsHubspotPutFromJSONTyped(json, true)), { type: 'hubspot' });
        case 'iterable':
            return Object.assign(Object.assign({}, DatasetOptionsIterablePut_1.DatasetOptionsIterablePutFromJSONTyped(json, true)), { type: 'iterable' });
        case 'klaviyo':
            return Object.assign(Object.assign({}, DatasetOptionsKlaviyoPut_1.DatasetOptionsKlaviyoPutFromJSONTyped(json, true)), { type: 'klaviyo' });
        case 'merge':
            return Object.assign(Object.assign({}, DatasetOptionsMergePut_1.DatasetOptionsMergePutFromJSONTyped(json, true)), { type: 'merge' });
        case 'mysql':
            return Object.assign(Object.assign({}, DatasetOptionsMysqlPut_1.DatasetOptionsMysqlPutFromJSONTyped(json, true)), { type: 'mysql' });
        case 'postgres':
            return Object.assign(Object.assign({}, DatasetOptionsPostgresPut_1.DatasetOptionsPostgresPutFromJSONTyped(json, true)), { type: 'postgres' });
        case 'recharge':
            return Object.assign(Object.assign({}, DatasetOptionsRechargePut_1.DatasetOptionsRechargePutFromJSONTyped(json, true)), { type: 'recharge' });
        case 'redshift':
            return Object.assign(Object.assign({}, DatasetOptionsRedshiftPut_1.DatasetOptionsRedshiftPutFromJSONTyped(json, true)), { type: 'redshift' });
        case 's3_csv':
            return Object.assign(Object.assign({}, DatasetOptionsS3CsvPut_1.DatasetOptionsS3CsvPutFromJSONTyped(json, true)), { type: 's3_csv' });
        case 'salesforce':
            return Object.assign(Object.assign({}, DatasetOptionsSalesforcePut_1.DatasetOptionsSalesforcePutFromJSONTyped(json, true)), { type: 'salesforce' });
        case 'salesforce_marketing_cloud':
            return Object.assign(Object.assign({}, DatasetOptionsSalesforceMarketingCloudPut_1.DatasetOptionsSalesforceMarketingCloudPutFromJSONTyped(json, true)), { type: 'salesforce_marketing_cloud' });
        case 'sftp':
            return Object.assign(Object.assign({}, DatasetOptionsSftpPut_1.DatasetOptionsSftpPutFromJSONTyped(json, true)), { type: 'sftp' });
        case 'shopify':
            return Object.assign(Object.assign({}, DatasetOptionsShopifyPut_1.DatasetOptionsShopifyPutFromJSONTyped(json, true)), { type: 'shopify' });
        case 'snowflake':
            return Object.assign(Object.assign({}, DatasetOptionsSnowflakePut_1.DatasetOptionsSnowflakePutFromJSONTyped(json, true)), { type: 'snowflake' });
        case 'sql_server':
            return Object.assign(Object.assign({}, DatasetOptionsSqlServerPut_1.DatasetOptionsSqlServerPutFromJSONTyped(json, true)), { type: 'sql_server' });
        case 'stripe':
            return Object.assign(Object.assign({}, DatasetOptionsStripePut_1.DatasetOptionsStripePutFromJSONTyped(json, true)), { type: 'stripe' });
        default:
            throw new Error(`No variant of DatasetOptionsPut exists with 'type=${json['type']}'`);
    }
}
exports.DatasetOptionsPutFromJSONTyped = DatasetOptionsPutFromJSONTyped;
function DatasetOptionsPutToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'aws_aurora_mysql':
            return DatasetOptionsAwsAuroraMysqlPut_1.DatasetOptionsAwsAuroraMysqlPutToJSON(value);
        case 'aws_aurora_postgres':
            return DatasetOptionsAwsAuroraPostgresPut_1.DatasetOptionsAwsAuroraPostgresPutToJSON(value);
        case 'aws_rds_mysql':
            return DatasetOptionsAwsRdsMysqlPut_1.DatasetOptionsAwsRdsMysqlPutToJSON(value);
        case 'aws_rds_postgres':
            return DatasetOptionsAwsRdsPostgresPut_1.DatasetOptionsAwsRdsPostgresPutToJSON(value);
        case 'aws_rds_sql_server':
            return DatasetOptionsAwsRdsSqlServerPut_1.DatasetOptionsAwsRdsSqlServerPutToJSON(value);
        case 'aws_redshift_serverless':
            return DatasetOptionsAwsRedshiftServerlessPut_1.DatasetOptionsAwsRedshiftServerlessPutToJSON(value);
        case 'azure_sql_server':
            return DatasetOptionsAzureSqlServerPut_1.DatasetOptionsAzureSqlServerPutToJSON(value);
        case 'bigquery':
            return DatasetOptionsBigQueryPut_1.DatasetOptionsBigQueryPutToJSON(value);
        case 'classic':
            return DatasetOptionsClassicPut_1.DatasetOptionsClassicPutToJSON(value);
        case 'gcp_cloud_sql_mysql':
            return DatasetOptionsGcpCloudSqlMysqlPut_1.DatasetOptionsGcpCloudSqlMysqlPutToJSON(value);
        case 'gcp_cloud_sql_postgres':
            return DatasetOptionsGcpCloudSqlPostgresPut_1.DatasetOptionsGcpCloudSqlPostgresPutToJSON(value);
        case 'gcp_cloud_sql_sql_server':
            return DatasetOptionsGcpCloudSqlSqlServerPut_1.DatasetOptionsGcpCloudSqlSqlServerPutToJSON(value);
        case 'gcp_gcs_csv':
            return DatasetOptionsGcpGcsCsvPut_1.DatasetOptionsGcpGcsCsvPutToJSON(value);
        case 'hosted_csv':
            return DatasetOptionsHostedCsvPut_1.DatasetOptionsHostedCsvPutToJSON(value);
        case 'hubspot':
            return DatasetOptionsHubspotPut_1.DatasetOptionsHubspotPutToJSON(value);
        case 'iterable':
            return DatasetOptionsIterablePut_1.DatasetOptionsIterablePutToJSON(value);
        case 'klaviyo':
            return DatasetOptionsKlaviyoPut_1.DatasetOptionsKlaviyoPutToJSON(value);
        case 'merge':
            return DatasetOptionsMergePut_1.DatasetOptionsMergePutToJSON(value);
        case 'mysql':
            return DatasetOptionsMysqlPut_1.DatasetOptionsMysqlPutToJSON(value);
        case 'postgres':
            return DatasetOptionsPostgresPut_1.DatasetOptionsPostgresPutToJSON(value);
        case 'recharge':
            return DatasetOptionsRechargePut_1.DatasetOptionsRechargePutToJSON(value);
        case 'redshift':
            return DatasetOptionsRedshiftPut_1.DatasetOptionsRedshiftPutToJSON(value);
        case 's3_csv':
            return DatasetOptionsS3CsvPut_1.DatasetOptionsS3CsvPutToJSON(value);
        case 'salesforce':
            return DatasetOptionsSalesforcePut_1.DatasetOptionsSalesforcePutToJSON(value);
        case 'salesforce_marketing_cloud':
            return DatasetOptionsSalesforceMarketingCloudPut_1.DatasetOptionsSalesforceMarketingCloudPutToJSON(value);
        case 'sftp':
            return DatasetOptionsSftpPut_1.DatasetOptionsSftpPutToJSON(value);
        case 'shopify':
            return DatasetOptionsShopifyPut_1.DatasetOptionsShopifyPutToJSON(value);
        case 'snowflake':
            return DatasetOptionsSnowflakePut_1.DatasetOptionsSnowflakePutToJSON(value);
        case 'sql_server':
            return DatasetOptionsSqlServerPut_1.DatasetOptionsSqlServerPutToJSON(value);
        case 'stripe':
            return DatasetOptionsStripePut_1.DatasetOptionsStripePutToJSON(value);
        default:
            throw new Error(`No variant of DatasetOptionsPut exists with 'type=${value['type']}'`);
    }
}
exports.DatasetOptionsPutToJSON = DatasetOptionsPutToJSON;
