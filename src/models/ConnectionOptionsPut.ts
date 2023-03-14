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

import {
    ConnectionOptionsAwsAuroraMysqlPut,
    ConnectionOptionsAwsAuroraMysqlPutFromJSON,
    ConnectionOptionsAwsAuroraMysqlPutFromJSONTyped,
    ConnectionOptionsAwsAuroraMysqlPutToJSON,
} from './ConnectionOptionsAwsAuroraMysqlPut';
import {
    ConnectionOptionsAwsAuroraPostgresPut,
    ConnectionOptionsAwsAuroraPostgresPutFromJSON,
    ConnectionOptionsAwsAuroraPostgresPutFromJSONTyped,
    ConnectionOptionsAwsAuroraPostgresPutToJSON,
} from './ConnectionOptionsAwsAuroraPostgresPut';
import {
    ConnectionOptionsAwsRdsMysqlPut,
    ConnectionOptionsAwsRdsMysqlPutFromJSON,
    ConnectionOptionsAwsRdsMysqlPutFromJSONTyped,
    ConnectionOptionsAwsRdsMysqlPutToJSON,
} from './ConnectionOptionsAwsRdsMysqlPut';
import {
    ConnectionOptionsAwsRdsPostgresPut,
    ConnectionOptionsAwsRdsPostgresPutFromJSON,
    ConnectionOptionsAwsRdsPostgresPutFromJSONTyped,
    ConnectionOptionsAwsRdsPostgresPutToJSON,
} from './ConnectionOptionsAwsRdsPostgresPut';
import {
    ConnectionOptionsAwsRdsSqlServerPut,
    ConnectionOptionsAwsRdsSqlServerPutFromJSON,
    ConnectionOptionsAwsRdsSqlServerPutFromJSONTyped,
    ConnectionOptionsAwsRdsSqlServerPutToJSON,
} from './ConnectionOptionsAwsRdsSqlServerPut';
import {
    ConnectionOptionsAwsRedshiftServerlessPut,
    ConnectionOptionsAwsRedshiftServerlessPutFromJSON,
    ConnectionOptionsAwsRedshiftServerlessPutFromJSONTyped,
    ConnectionOptionsAwsRedshiftServerlessPutToJSON,
} from './ConnectionOptionsAwsRedshiftServerlessPut';
import {
    ConnectionOptionsAzureSqlServerPut,
    ConnectionOptionsAzureSqlServerPutFromJSON,
    ConnectionOptionsAzureSqlServerPutFromJSONTyped,
    ConnectionOptionsAzureSqlServerPutToJSON,
} from './ConnectionOptionsAzureSqlServerPut';
import {
    ConnectionOptionsBigQueryPut,
    ConnectionOptionsBigQueryPutFromJSON,
    ConnectionOptionsBigQueryPutFromJSONTyped,
    ConnectionOptionsBigQueryPutToJSON,
} from './ConnectionOptionsBigQueryPut';
import {
    ConnectionOptionsClassicPut,
    ConnectionOptionsClassicPutFromJSON,
    ConnectionOptionsClassicPutFromJSONTyped,
    ConnectionOptionsClassicPutToJSON,
} from './ConnectionOptionsClassicPut';
import {
    ConnectionOptionsGcpCloudSqlMysqlPut,
    ConnectionOptionsGcpCloudSqlMysqlPutFromJSON,
    ConnectionOptionsGcpCloudSqlMysqlPutFromJSONTyped,
    ConnectionOptionsGcpCloudSqlMysqlPutToJSON,
} from './ConnectionOptionsGcpCloudSqlMysqlPut';
import {
    ConnectionOptionsGcpCloudSqlPostgresPut,
    ConnectionOptionsGcpCloudSqlPostgresPutFromJSON,
    ConnectionOptionsGcpCloudSqlPostgresPutFromJSONTyped,
    ConnectionOptionsGcpCloudSqlPostgresPutToJSON,
} from './ConnectionOptionsGcpCloudSqlPostgresPut';
import {
    ConnectionOptionsGcpCloudSqlSqlServerPut,
    ConnectionOptionsGcpCloudSqlSqlServerPutFromJSON,
    ConnectionOptionsGcpCloudSqlSqlServerPutFromJSONTyped,
    ConnectionOptionsGcpCloudSqlSqlServerPutToJSON,
} from './ConnectionOptionsGcpCloudSqlSqlServerPut';
import {
    ConnectionOptionsGcpGcsCsvPut,
    ConnectionOptionsGcpGcsCsvPutFromJSON,
    ConnectionOptionsGcpGcsCsvPutFromJSONTyped,
    ConnectionOptionsGcpGcsCsvPutToJSON,
} from './ConnectionOptionsGcpGcsCsvPut';
import {
    ConnectionOptionsMysqlPut,
    ConnectionOptionsMysqlPutFromJSON,
    ConnectionOptionsMysqlPutFromJSONTyped,
    ConnectionOptionsMysqlPutToJSON,
} from './ConnectionOptionsMysqlPut';
import {
    ConnectionOptionsPostgresPut,
    ConnectionOptionsPostgresPutFromJSON,
    ConnectionOptionsPostgresPutFromJSONTyped,
    ConnectionOptionsPostgresPutToJSON,
} from './ConnectionOptionsPostgresPut';
import {
    ConnectionOptionsRedshiftPut,
    ConnectionOptionsRedshiftPutFromJSON,
    ConnectionOptionsRedshiftPutFromJSONTyped,
    ConnectionOptionsRedshiftPutToJSON,
} from './ConnectionOptionsRedshiftPut';
import {
    ConnectionOptionsS3CsvPut,
    ConnectionOptionsS3CsvPutFromJSON,
    ConnectionOptionsS3CsvPutFromJSONTyped,
    ConnectionOptionsS3CsvPutToJSON,
} from './ConnectionOptionsS3CsvPut';
import {
    ConnectionOptionsSnowflakePut,
    ConnectionOptionsSnowflakePutFromJSON,
    ConnectionOptionsSnowflakePutFromJSONTyped,
    ConnectionOptionsSnowflakePutToJSON,
} from './ConnectionOptionsSnowflakePut';
import {
    ConnectionOptionsSqlServerPut,
    ConnectionOptionsSqlServerPutFromJSON,
    ConnectionOptionsSqlServerPutFromJSONTyped,
    ConnectionOptionsSqlServerPutToJSON,
} from './ConnectionOptionsSqlServerPut';

/**
 * @type ConnectionOptionsPut
 * The connection-specific options. These vary by connection type.
 * @export
 */
export type ConnectionOptionsPut = { type: 'aws_aurora_mysql' } & ConnectionOptionsAwsAuroraMysqlPut | { type: 'aws_aurora_postgres' } & ConnectionOptionsAwsAuroraPostgresPut | { type: 'aws_rds_mysql' } & ConnectionOptionsAwsRdsMysqlPut | { type: 'aws_rds_postgres' } & ConnectionOptionsAwsRdsPostgresPut | { type: 'aws_rds_sql_server' } & ConnectionOptionsAwsRdsSqlServerPut | { type: 'aws_redshift_serverless' } & ConnectionOptionsAwsRedshiftServerlessPut | { type: 'azure_sql_server' } & ConnectionOptionsAzureSqlServerPut | { type: 'bigquery' } & ConnectionOptionsBigQueryPut | { type: 'classic' } & ConnectionOptionsClassicPut | { type: 'gcp_cloud_sql_mysql' } & ConnectionOptionsGcpCloudSqlMysqlPut | { type: 'gcp_cloud_sql_postgres' } & ConnectionOptionsGcpCloudSqlPostgresPut | { type: 'gcp_cloud_sql_sql_server' } & ConnectionOptionsGcpCloudSqlSqlServerPut | { type: 'gcp_gcs_csv' } & ConnectionOptionsGcpGcsCsvPut | { type: 'mysql' } & ConnectionOptionsMysqlPut | { type: 'postgres' } & ConnectionOptionsPostgresPut | { type: 'redshift' } & ConnectionOptionsRedshiftPut | { type: 's3_csv' } & ConnectionOptionsS3CsvPut | { type: 'snowflake' } & ConnectionOptionsSnowflakePut | { type: 'sql_server' } & ConnectionOptionsSqlServerPut;

export function ConnectionOptionsPutFromJSON(json: any): ConnectionOptionsPut {
    return ConnectionOptionsPutFromJSONTyped(json, false);
}

export function ConnectionOptionsPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'aws_aurora_mysql':
            return {...ConnectionOptionsAwsAuroraMysqlPutFromJSONTyped(json, true), type: 'aws_aurora_mysql'};
        case 'aws_aurora_postgres':
            return {...ConnectionOptionsAwsAuroraPostgresPutFromJSONTyped(json, true), type: 'aws_aurora_postgres'};
        case 'aws_rds_mysql':
            return {...ConnectionOptionsAwsRdsMysqlPutFromJSONTyped(json, true), type: 'aws_rds_mysql'};
        case 'aws_rds_postgres':
            return {...ConnectionOptionsAwsRdsPostgresPutFromJSONTyped(json, true), type: 'aws_rds_postgres'};
        case 'aws_rds_sql_server':
            return {...ConnectionOptionsAwsRdsSqlServerPutFromJSONTyped(json, true), type: 'aws_rds_sql_server'};
        case 'aws_redshift_serverless':
            return {...ConnectionOptionsAwsRedshiftServerlessPutFromJSONTyped(json, true), type: 'aws_redshift_serverless'};
        case 'azure_sql_server':
            return {...ConnectionOptionsAzureSqlServerPutFromJSONTyped(json, true), type: 'azure_sql_server'};
        case 'bigquery':
            return {...ConnectionOptionsBigQueryPutFromJSONTyped(json, true), type: 'bigquery'};
        case 'classic':
            return {...ConnectionOptionsClassicPutFromJSONTyped(json, true), type: 'classic'};
        case 'gcp_cloud_sql_mysql':
            return {...ConnectionOptionsGcpCloudSqlMysqlPutFromJSONTyped(json, true), type: 'gcp_cloud_sql_mysql'};
        case 'gcp_cloud_sql_postgres':
            return {...ConnectionOptionsGcpCloudSqlPostgresPutFromJSONTyped(json, true), type: 'gcp_cloud_sql_postgres'};
        case 'gcp_cloud_sql_sql_server':
            return {...ConnectionOptionsGcpCloudSqlSqlServerPutFromJSONTyped(json, true), type: 'gcp_cloud_sql_sql_server'};
        case 'gcp_gcs_csv':
            return {...ConnectionOptionsGcpGcsCsvPutFromJSONTyped(json, true), type: 'gcp_gcs_csv'};
        case 'mysql':
            return {...ConnectionOptionsMysqlPutFromJSONTyped(json, true), type: 'mysql'};
        case 'postgres':
            return {...ConnectionOptionsPostgresPutFromJSONTyped(json, true), type: 'postgres'};
        case 'redshift':
            return {...ConnectionOptionsRedshiftPutFromJSONTyped(json, true), type: 'redshift'};
        case 's3_csv':
            return {...ConnectionOptionsS3CsvPutFromJSONTyped(json, true), type: 's3_csv'};
        case 'snowflake':
            return {...ConnectionOptionsSnowflakePutFromJSONTyped(json, true), type: 'snowflake'};
        case 'sql_server':
            return {...ConnectionOptionsSqlServerPutFromJSONTyped(json, true), type: 'sql_server'};
        default:
            throw new Error(`No variant of ConnectionOptionsPut exists with 'type=${json['type']}'`);
    }
}

export function ConnectionOptionsPutToJSON(value?: ConnectionOptionsPut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'aws_aurora_mysql':
            return ConnectionOptionsAwsAuroraMysqlPutToJSON(value);
        case 'aws_aurora_postgres':
            return ConnectionOptionsAwsAuroraPostgresPutToJSON(value);
        case 'aws_rds_mysql':
            return ConnectionOptionsAwsRdsMysqlPutToJSON(value);
        case 'aws_rds_postgres':
            return ConnectionOptionsAwsRdsPostgresPutToJSON(value);
        case 'aws_rds_sql_server':
            return ConnectionOptionsAwsRdsSqlServerPutToJSON(value);
        case 'aws_redshift_serverless':
            return ConnectionOptionsAwsRedshiftServerlessPutToJSON(value);
        case 'azure_sql_server':
            return ConnectionOptionsAzureSqlServerPutToJSON(value);
        case 'bigquery':
            return ConnectionOptionsBigQueryPutToJSON(value);
        case 'classic':
            return ConnectionOptionsClassicPutToJSON(value);
        case 'gcp_cloud_sql_mysql':
            return ConnectionOptionsGcpCloudSqlMysqlPutToJSON(value);
        case 'gcp_cloud_sql_postgres':
            return ConnectionOptionsGcpCloudSqlPostgresPutToJSON(value);
        case 'gcp_cloud_sql_sql_server':
            return ConnectionOptionsGcpCloudSqlSqlServerPutToJSON(value);
        case 'gcp_gcs_csv':
            return ConnectionOptionsGcpGcsCsvPutToJSON(value);
        case 'mysql':
            return ConnectionOptionsMysqlPutToJSON(value);
        case 'postgres':
            return ConnectionOptionsPostgresPutToJSON(value);
        case 'redshift':
            return ConnectionOptionsRedshiftPutToJSON(value);
        case 's3_csv':
            return ConnectionOptionsS3CsvPutToJSON(value);
        case 'snowflake':
            return ConnectionOptionsSnowflakePutToJSON(value);
        case 'sql_server':
            return ConnectionOptionsSqlServerPutToJSON(value);
        default:
            throw new Error(`No variant of ConnectionOptionsPut exists with 'type=${value['type']}'`);
    }
}

