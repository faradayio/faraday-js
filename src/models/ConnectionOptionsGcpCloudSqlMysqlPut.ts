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
 * (Parameters used to PUT a value of the `ConnectionOptionsGcpCloudSqlMysql` type.)
 * 
 * Google Cloud SQL (MySQL) connection options
 * @export
 * @interface ConnectionOptionsGcpCloudSqlMysqlPut
 */
export interface ConnectionOptionsGcpCloudSqlMysqlPut {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysqlPut
     */
    database: string;
    /**
     * For use with Cloud SQL proxy. Client must enable Cloud SQL Admin API and give IAM role "Cloud SQL Client" to our service account faraday-incoming@production-237317.iam.gserviceaccount.com (Datasets) or faraday-outgoing@production-237317.iam.gserviceaccount.com (Targets).
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysqlPut
     */
    instance_connection_name: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysqlPut
     */
    password: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysqlPut
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysqlPut
     */
    user: string;
}

export function ConnectionOptionsGcpCloudSqlMysqlPutFromJSON(json: any): ConnectionOptionsGcpCloudSqlMysqlPut {
    return ConnectionOptionsGcpCloudSqlMysqlPutFromJSONTyped(json, false);
}

export function ConnectionOptionsGcpCloudSqlMysqlPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsGcpCloudSqlMysqlPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'database': json['database'],
        'instance_connection_name': json['instance_connection_name'],
        'password': json['password'],
        'type': json['type'],
        'user': json['user'],
    };
}

export function ConnectionOptionsGcpCloudSqlMysqlPutToJSON(value?: ConnectionOptionsGcpCloudSqlMysqlPut | null): any {
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
        'type': value.type,
        'user': value.user,
    };
}

