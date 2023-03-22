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

import { exists, mapValues } from '../runtime';
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsGcpCloudSqlPostgres` type.)
 * 
 * Google Cloud SQL (Postgres) connection options
 * @export
 * @interface ConnectionOptionsGcpCloudSqlPostgresPost
 */
export interface ConnectionOptionsGcpCloudSqlPostgresPost {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresPost
     */
    database: string;
    /**
     * For use with Cloud SQL proxy. Client must enable Cloud SQL Admin API and give IAM role "Cloud SQL Client" to our service account faraday-incoming@production-237317.iam.gserviceaccount.com (Datasets) or faraday-outgoing@production-237317.iam.gserviceaccount.com (Targets).
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresPost
     */
    instance_connection_name: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresPost
     */
    password: string;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresPost
     */
    schema: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresPost
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresPost
     */
    user: string;
}

export function ConnectionOptionsGcpCloudSqlPostgresPostFromJSON(json: any): ConnectionOptionsGcpCloudSqlPostgresPost {
    return ConnectionOptionsGcpCloudSqlPostgresPostFromJSONTyped(json, false);
}

export function ConnectionOptionsGcpCloudSqlPostgresPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsGcpCloudSqlPostgresPost {
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

export function ConnectionOptionsGcpCloudSqlPostgresPostToJSON(value?: ConnectionOptionsGcpCloudSqlPostgresPost | null): any {
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

