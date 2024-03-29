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
 * RDS (Postgres) connection options
 * @export
 * @interface ConnectionOptionsAwsRdsPostgres
 */
export interface ConnectionOptionsAwsRdsPostgres {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgres
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgres
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgres
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgres
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsRdsPostgres
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgres
     */
    schema: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgres
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgres
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgres
     */
    user: string;
}

export function ConnectionOptionsAwsRdsPostgresFromJSON(json: any): ConnectionOptionsAwsRdsPostgres {
    return ConnectionOptionsAwsRdsPostgresFromJSONTyped(json, false);
}

export function ConnectionOptionsAwsRdsPostgresFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsAwsRdsPostgres {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'database': json['database'],
        'host': json['host'],
        'load_balancer': !exists(json, 'load_balancer') ? undefined : json['load_balancer'],
        'password': json['password'],
        'port': json['port'],
        'schema': json['schema'],
        'ssh_bastion': !exists(json, 'ssh_bastion') ? undefined : json['ssh_bastion'],
        'type': json['type'],
        'user': json['user'],
    };
}

export function ConnectionOptionsAwsRdsPostgresToJSON(value?: ConnectionOptionsAwsRdsPostgres | null): any {
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

