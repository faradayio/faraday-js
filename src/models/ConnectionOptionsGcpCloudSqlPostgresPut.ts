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

import { exists, mapValues } from '../runtime';
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsGcpCloudSqlPostgres` type.)
 * 
 * gcp_cloud_sql_postgres connection options
 * @export
 * @interface ConnectionOptionsGcpCloudSqlPostgresPut
 */
export interface ConnectionOptionsGcpCloudSqlPostgresPut {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresPut
     */
    database: string;
    /**
     * For use with Cloud SQL proxy. Client must enable Cloud SQL Admin API and give IAM role "Cloud SQL Client" to our service account faraday-incoming@production-237317.iam.gserviceaccount.com (Datasets) or faraday-outgoing@production-237317.iam.gserviceaccount.com (Targets).
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresPut
     */
    instance_connection_name: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresPut
     */
    password: string;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresPut
     */
    schema: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresPut
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresPut
     */
    user: string;
}

export function ConnectionOptionsGcpCloudSqlPostgresPutFromJSON(json: any): ConnectionOptionsGcpCloudSqlPostgresPut {
    return ConnectionOptionsGcpCloudSqlPostgresPutFromJSONTyped(json, false);
}

export function ConnectionOptionsGcpCloudSqlPostgresPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsGcpCloudSqlPostgresPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'database': json['database'],
        'instance_connection_name': json['instance_connection_name'],
        'password': json['password'],
        'schema': json['schema'],
        'type': json['type'],
        'user': json['user'],
    };
}

export function ConnectionOptionsGcpCloudSqlPostgresPutToJSON(value?: ConnectionOptionsGcpCloudSqlPostgresPut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'database': value.database,
        'instance_connection_name': value.instance_connection_name,
        'password': value.password,
        'schema': value.schema,
        'type': value.type,
        'user': value.user,
    };
}
