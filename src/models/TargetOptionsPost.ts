/* tslint:disable */
/* eslint-disable */
/**
 * Faraday REST API
 * The [Faraday](https://faraday.ai) SDK makes it easy to predict customer behavior using a simple API.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    TargetOptionsAwsAuroraMysqlPost,
    TargetOptionsAwsAuroraMysqlPostFromJSON,
    TargetOptionsAwsAuroraMysqlPostFromJSONTyped,
    TargetOptionsAwsAuroraMysqlPostToJSON,
} from './TargetOptionsAwsAuroraMysqlPost';
import {
    TargetOptionsAwsAuroraPostgresPost,
    TargetOptionsAwsAuroraPostgresPostFromJSON,
    TargetOptionsAwsAuroraPostgresPostFromJSONTyped,
    TargetOptionsAwsAuroraPostgresPostToJSON,
} from './TargetOptionsAwsAuroraPostgresPost';
import {
    TargetOptionsAwsRdsMysqlPost,
    TargetOptionsAwsRdsMysqlPostFromJSON,
    TargetOptionsAwsRdsMysqlPostFromJSONTyped,
    TargetOptionsAwsRdsMysqlPostToJSON,
} from './TargetOptionsAwsRdsMysqlPost';
import {
    TargetOptionsAwsRdsPostgresPost,
    TargetOptionsAwsRdsPostgresPostFromJSON,
    TargetOptionsAwsRdsPostgresPostFromJSONTyped,
    TargetOptionsAwsRdsPostgresPostToJSON,
} from './TargetOptionsAwsRdsPostgresPost';
import {
    TargetOptionsAwsRdsSqlServerPost,
    TargetOptionsAwsRdsSqlServerPostFromJSON,
    TargetOptionsAwsRdsSqlServerPostFromJSONTyped,
    TargetOptionsAwsRdsSqlServerPostToJSON,
} from './TargetOptionsAwsRdsSqlServerPost';
import {
    TargetOptionsAwsRedshiftServerlessPost,
    TargetOptionsAwsRedshiftServerlessPostFromJSON,
    TargetOptionsAwsRedshiftServerlessPostFromJSONTyped,
    TargetOptionsAwsRedshiftServerlessPostToJSON,
} from './TargetOptionsAwsRedshiftServerlessPost';
import {
    TargetOptionsAzureSqlServerPost,
    TargetOptionsAzureSqlServerPostFromJSON,
    TargetOptionsAzureSqlServerPostFromJSONTyped,
    TargetOptionsAzureSqlServerPostToJSON,
} from './TargetOptionsAzureSqlServerPost';
import {
    TargetOptionsBigQueryPost,
    TargetOptionsBigQueryPostFromJSON,
    TargetOptionsBigQueryPostFromJSONTyped,
    TargetOptionsBigQueryPostToJSON,
} from './TargetOptionsBigQueryPost';
import {
    TargetOptionsGcpCloudSqlMysqlPost,
    TargetOptionsGcpCloudSqlMysqlPostFromJSON,
    TargetOptionsGcpCloudSqlMysqlPostFromJSONTyped,
    TargetOptionsGcpCloudSqlMysqlPostToJSON,
} from './TargetOptionsGcpCloudSqlMysqlPost';
import {
    TargetOptionsGcpCloudSqlPostgresPost,
    TargetOptionsGcpCloudSqlPostgresPostFromJSON,
    TargetOptionsGcpCloudSqlPostgresPostFromJSONTyped,
    TargetOptionsGcpCloudSqlPostgresPostToJSON,
} from './TargetOptionsGcpCloudSqlPostgresPost';
import {
    TargetOptionsGcpCloudSqlSqlServerPost,
    TargetOptionsGcpCloudSqlSqlServerPostFromJSON,
    TargetOptionsGcpCloudSqlSqlServerPostFromJSONTyped,
    TargetOptionsGcpCloudSqlSqlServerPostToJSON,
} from './TargetOptionsGcpCloudSqlSqlServerPost';
import {
    TargetOptionsGcpGcsCsvPost,
    TargetOptionsGcpGcsCsvPostFromJSON,
    TargetOptionsGcpGcsCsvPostFromJSONTyped,
    TargetOptionsGcpGcsCsvPostToJSON,
} from './TargetOptionsGcpGcsCsvPost';
import {
    TargetOptionsHostedCsvPost,
    TargetOptionsHostedCsvPostFromJSON,
    TargetOptionsHostedCsvPostFromJSONTyped,
    TargetOptionsHostedCsvPostToJSON,
} from './TargetOptionsHostedCsvPost';
import {
    TargetOptionsMysqlPost,
    TargetOptionsMysqlPostFromJSON,
    TargetOptionsMysqlPostFromJSONTyped,
    TargetOptionsMysqlPostToJSON,
} from './TargetOptionsMysqlPost';
import {
    TargetOptionsPostgresPost,
    TargetOptionsPostgresPostFromJSON,
    TargetOptionsPostgresPostFromJSONTyped,
    TargetOptionsPostgresPostToJSON,
} from './TargetOptionsPostgresPost';
import {
    TargetOptionsRedshiftPost,
    TargetOptionsRedshiftPostFromJSON,
    TargetOptionsRedshiftPostFromJSONTyped,
    TargetOptionsRedshiftPostToJSON,
} from './TargetOptionsRedshiftPost';
import {
    TargetOptionsS3CsvPost,
    TargetOptionsS3CsvPostFromJSON,
    TargetOptionsS3CsvPostFromJSONTyped,
    TargetOptionsS3CsvPostToJSON,
} from './TargetOptionsS3CsvPost';
import {
    TargetOptionsSnowflakePost,
    TargetOptionsSnowflakePostFromJSON,
    TargetOptionsSnowflakePostFromJSONTyped,
    TargetOptionsSnowflakePostToJSON,
} from './TargetOptionsSnowflakePost';
import {
    TargetOptionsSqlServerPost,
    TargetOptionsSqlServerPostFromJSON,
    TargetOptionsSqlServerPostFromJSONTyped,
    TargetOptionsSqlServerPostToJSON,
} from './TargetOptionsSqlServerPost';

/**
 * @type TargetOptionsPost
 * The export target configuration options. These vary by connection type.
 * @export
 */
export type TargetOptionsPost = { type: 'aws_aurora_mysql' } & TargetOptionsAwsAuroraMysqlPost | { type: 'aws_aurora_postgres' } & TargetOptionsAwsAuroraPostgresPost | { type: 'aws_rds_mysql' } & TargetOptionsAwsRdsMysqlPost | { type: 'aws_rds_postgres' } & TargetOptionsAwsRdsPostgresPost | { type: 'aws_rds_sql_server' } & TargetOptionsAwsRdsSqlServerPost | { type: 'aws_redshift_serverless' } & TargetOptionsAwsRedshiftServerlessPost | { type: 'azure_sql_server' } & TargetOptionsAzureSqlServerPost | { type: 'bigquery' } & TargetOptionsBigQueryPost | { type: 'gcp_cloud_sql_mysql' } & TargetOptionsGcpCloudSqlMysqlPost | { type: 'gcp_cloud_sql_postgres' } & TargetOptionsGcpCloudSqlPostgresPost | { type: 'gcp_cloud_sql_sql_server' } & TargetOptionsGcpCloudSqlSqlServerPost | { type: 'gcp_gcs_csv' } & TargetOptionsGcpGcsCsvPost | { type: 'hosted_csv' } & TargetOptionsHostedCsvPost | { type: 'mysql' } & TargetOptionsMysqlPost | { type: 'postgres' } & TargetOptionsPostgresPost | { type: 'redshift' } & TargetOptionsRedshiftPost | { type: 's3_csv' } & TargetOptionsS3CsvPost | { type: 'snowflake' } & TargetOptionsSnowflakePost | { type: 'sql_server' } & TargetOptionsSqlServerPost;

export function TargetOptionsPostFromJSON(json: any): TargetOptionsPost {
    return TargetOptionsPostFromJSONTyped(json, false);
}

export function TargetOptionsPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'aws_aurora_mysql':
            return {...TargetOptionsAwsAuroraMysqlPostFromJSONTyped(json, true), type: 'aws_aurora_mysql'};
        case 'aws_aurora_postgres':
            return {...TargetOptionsAwsAuroraPostgresPostFromJSONTyped(json, true), type: 'aws_aurora_postgres'};
        case 'aws_rds_mysql':
            return {...TargetOptionsAwsRdsMysqlPostFromJSONTyped(json, true), type: 'aws_rds_mysql'};
        case 'aws_rds_postgres':
            return {...TargetOptionsAwsRdsPostgresPostFromJSONTyped(json, true), type: 'aws_rds_postgres'};
        case 'aws_rds_sql_server':
            return {...TargetOptionsAwsRdsSqlServerPostFromJSONTyped(json, true), type: 'aws_rds_sql_server'};
        case 'aws_redshift_serverless':
            return {...TargetOptionsAwsRedshiftServerlessPostFromJSONTyped(json, true), type: 'aws_redshift_serverless'};
        case 'azure_sql_server':
            return {...TargetOptionsAzureSqlServerPostFromJSONTyped(json, true), type: 'azure_sql_server'};
        case 'bigquery':
            return {...TargetOptionsBigQueryPostFromJSONTyped(json, true), type: 'bigquery'};
        case 'gcp_cloud_sql_mysql':
            return {...TargetOptionsGcpCloudSqlMysqlPostFromJSONTyped(json, true), type: 'gcp_cloud_sql_mysql'};
        case 'gcp_cloud_sql_postgres':
            return {...TargetOptionsGcpCloudSqlPostgresPostFromJSONTyped(json, true), type: 'gcp_cloud_sql_postgres'};
        case 'gcp_cloud_sql_sql_server':
            return {...TargetOptionsGcpCloudSqlSqlServerPostFromJSONTyped(json, true), type: 'gcp_cloud_sql_sql_server'};
        case 'gcp_gcs_csv':
            return {...TargetOptionsGcpGcsCsvPostFromJSONTyped(json, true), type: 'gcp_gcs_csv'};
        case 'hosted_csv':
            return {...TargetOptionsHostedCsvPostFromJSONTyped(json, true), type: 'hosted_csv'};
        case 'mysql':
            return {...TargetOptionsMysqlPostFromJSONTyped(json, true), type: 'mysql'};
        case 'postgres':
            return {...TargetOptionsPostgresPostFromJSONTyped(json, true), type: 'postgres'};
        case 'redshift':
            return {...TargetOptionsRedshiftPostFromJSONTyped(json, true), type: 'redshift'};
        case 's3_csv':
            return {...TargetOptionsS3CsvPostFromJSONTyped(json, true), type: 's3_csv'};
        case 'snowflake':
            return {...TargetOptionsSnowflakePostFromJSONTyped(json, true), type: 'snowflake'};
        case 'sql_server':
            return {...TargetOptionsSqlServerPostFromJSONTyped(json, true), type: 'sql_server'};
        default:
            throw new Error(`No variant of TargetOptionsPost exists with 'type=${json['type']}'`);
    }
}

export function TargetOptionsPostToJSON(value?: TargetOptionsPost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'aws_aurora_mysql':
            return TargetOptionsAwsAuroraMysqlPostToJSON(value);
        case 'aws_aurora_postgres':
            return TargetOptionsAwsAuroraPostgresPostToJSON(value);
        case 'aws_rds_mysql':
            return TargetOptionsAwsRdsMysqlPostToJSON(value);
        case 'aws_rds_postgres':
            return TargetOptionsAwsRdsPostgresPostToJSON(value);
        case 'aws_rds_sql_server':
            return TargetOptionsAwsRdsSqlServerPostToJSON(value);
        case 'aws_redshift_serverless':
            return TargetOptionsAwsRedshiftServerlessPostToJSON(value);
        case 'azure_sql_server':
            return TargetOptionsAzureSqlServerPostToJSON(value);
        case 'bigquery':
            return TargetOptionsBigQueryPostToJSON(value);
        case 'gcp_cloud_sql_mysql':
            return TargetOptionsGcpCloudSqlMysqlPostToJSON(value);
        case 'gcp_cloud_sql_postgres':
            return TargetOptionsGcpCloudSqlPostgresPostToJSON(value);
        case 'gcp_cloud_sql_sql_server':
            return TargetOptionsGcpCloudSqlSqlServerPostToJSON(value);
        case 'gcp_gcs_csv':
            return TargetOptionsGcpGcsCsvPostToJSON(value);
        case 'hosted_csv':
            return TargetOptionsHostedCsvPostToJSON(value);
        case 'mysql':
            return TargetOptionsMysqlPostToJSON(value);
        case 'postgres':
            return TargetOptionsPostgresPostToJSON(value);
        case 'redshift':
            return TargetOptionsRedshiftPostToJSON(value);
        case 's3_csv':
            return TargetOptionsS3CsvPostToJSON(value);
        case 'snowflake':
            return TargetOptionsSnowflakePostToJSON(value);
        case 'sql_server':
            return TargetOptionsSqlServerPostToJSON(value);
        default:
            throw new Error(`No variant of TargetOptionsPost exists with 'type=${value['type']}'`);
    }
}

