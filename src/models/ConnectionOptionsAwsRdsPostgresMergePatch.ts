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
 * (Parameters used to PATCH the `ConnectionOptionsAwsRdsPostgres` type.)
 * 
 * aws_rds_postgres connection options
 * @export
 * @interface ConnectionOptionsAwsRdsPostgresMergePatch
 */
export interface ConnectionOptionsAwsRdsPostgresMergePatch {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresMergePatch
     */
    database?: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresMergePatch
     */
    host?: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresMergePatch
     */
    load_balancer?: string | null;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresMergePatch
     */
    password?: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsRdsPostgresMergePatch
     */
    port?: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresMergePatch
     */
    schema?: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresMergePatch
     */
    ssh_bastion?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresMergePatch
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresMergePatch
     */
    user?: string;
}

export function ConnectionOptionsAwsRdsPostgresMergePatchFromJSON(json: any): ConnectionOptionsAwsRdsPostgresMergePatch {
    return ConnectionOptionsAwsRdsPostgresMergePatchFromJSONTyped(json, false);
}

export function ConnectionOptionsAwsRdsPostgresMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsAwsRdsPostgresMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'database': !exists(json, 'database') ? undefined : json['database'],
        'host': !exists(json, 'host') ? undefined : json['host'],
        'load_balancer': !exists(json, 'load_balancer') ? undefined : json['load_balancer'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'port': !exists(json, 'port') ? undefined : json['port'],
        'schema': !exists(json, 'schema') ? undefined : json['schema'],
        'ssh_bastion': !exists(json, 'ssh_bastion') ? undefined : json['ssh_bastion'],
        'type': json['type'],
        'user': !exists(json, 'user') ? undefined : json['user'],
    };
}

export function ConnectionOptionsAwsRdsPostgresMergePatchToJSON(value?: ConnectionOptionsAwsRdsPostgresMergePatch | null): any {
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
        'schema': value.schema,
        'ssh_bastion': value.ssh_bastion,
        'type': value.type,
        'user': value.user,
    };
}

