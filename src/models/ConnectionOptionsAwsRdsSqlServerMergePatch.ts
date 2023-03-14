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
 * (Parameters used to PATCH the `ConnectionOptionsAwsRdsSqlServer` type.)
 * 
 * RDS (SQL Server) connection options
 * @export
 * @interface ConnectionOptionsAwsRdsSqlServerMergePatch
 */
export interface ConnectionOptionsAwsRdsSqlServerMergePatch {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerMergePatch
     */
    database?: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerMergePatch
     */
    host?: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerMergePatch
     */
    load_balancer?: string | null;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerMergePatch
     */
    password?: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsRdsSqlServerMergePatch
     */
    port?: number;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerMergePatch
     */
    ssh_bastion?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerMergePatch
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerMergePatch
     */
    user?: string;
}

export function ConnectionOptionsAwsRdsSqlServerMergePatchFromJSON(json: any): ConnectionOptionsAwsRdsSqlServerMergePatch {
    return ConnectionOptionsAwsRdsSqlServerMergePatchFromJSONTyped(json, false);
}

export function ConnectionOptionsAwsRdsSqlServerMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsAwsRdsSqlServerMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'database': !exists(json, 'database') ? undefined : json['database'],
        'host': !exists(json, 'host') ? undefined : json['host'],
        'load_balancer': !exists(json, 'load_balancer') ? undefined : json['load_balancer'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'port': !exists(json, 'port') ? undefined : json['port'],
        'ssh_bastion': !exists(json, 'ssh_bastion') ? undefined : json['ssh_bastion'],
        'type': json['type'],
        'user': !exists(json, 'user') ? undefined : json['user'],
    };
}

export function ConnectionOptionsAwsRdsSqlServerMergePatchToJSON(value?: ConnectionOptionsAwsRdsSqlServerMergePatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'database': value.database,
        'host': value.host,
        'load_balancer': value.load_balancer,
        'password': value.password,
        'port': value.port,
        'ssh_bastion': value.ssh_bastion,
        'type': value.type,
        'user': value.user,
    };
}

