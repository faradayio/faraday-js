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
 * AWS Aurora Postgres connection options
 * @export
 * @interface ConnectionOptionsAwsAuroraPostgres
 */
export interface ConnectionOptionsAwsAuroraPostgres {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgres
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgres
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgres
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgres
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsAuroraPostgres
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgres
     */
    schema: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgres
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgres
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgres
     */
    user: string;
}

export function ConnectionOptionsAwsAuroraPostgresFromJSON(json: any): ConnectionOptionsAwsAuroraPostgres {
    return ConnectionOptionsAwsAuroraPostgresFromJSONTyped(json, false);
}

export function ConnectionOptionsAwsAuroraPostgresFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsAwsAuroraPostgres {
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

export function ConnectionOptionsAwsAuroraPostgresToJSON(value?: ConnectionOptionsAwsAuroraPostgres | null): any {
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

