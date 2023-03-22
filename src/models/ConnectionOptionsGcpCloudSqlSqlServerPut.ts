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
 * (Parameters used to PUT a value of the `ConnectionOptionsGcpCloudSqlSqlServer` type.)
 * 
 * Google Cloud SQL (SQL Server) connection options
 * @export
 * @interface ConnectionOptionsGcpCloudSqlSqlServerPut
 */
export interface ConnectionOptionsGcpCloudSqlSqlServerPut {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPut
     */
    database: string;
    /**
     * For use with Cloud SQL proxy. Client must enable Cloud SQL Admin API and give IAM role "Cloud SQL Client" to our service account faraday-incoming@production-237317.iam.gserviceaccount.com (Datasets) or faraday-outgoing@production-237317.iam.gserviceaccount.com (Targets).
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPut
     */
    instance_connection_name: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPut
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPut
     */
    password: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPut
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPut
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPut
     */
    user: string;
}

export function ConnectionOptionsGcpCloudSqlSqlServerPutFromJSON(json: any): ConnectionOptionsGcpCloudSqlSqlServerPut {
    return ConnectionOptionsGcpCloudSqlSqlServerPutFromJSONTyped(json, false);
}

export function ConnectionOptionsGcpCloudSqlSqlServerPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsGcpCloudSqlSqlServerPut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'database': json['database'],
        'instance_connection_name': json['instance_connection_name'],
        'load_balancer': !exists(json, 'load_balancer') ? undefined : json['load_balancer'],
        'password': json['password'],
        'ssh_bastion': !exists(json, 'ssh_bastion') ? undefined : json['ssh_bastion'],
        'type': json['type'],
        'user': json['user'],
    };
}

export function ConnectionOptionsGcpCloudSqlSqlServerPutToJSON(value?: ConnectionOptionsGcpCloudSqlSqlServerPut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'database': value.database,
        'instance_connection_name': value.instance_connection_name,
        'load_balancer': value.load_balancer,
        'password': value.password,
        'ssh_bastion': value.ssh_bastion,
        'type': value.type,
        'user': value.user,
    };
}

