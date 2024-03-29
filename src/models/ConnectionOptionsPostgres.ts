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
 * Postgres connection options
 * @export
 * @interface ConnectionOptionsPostgres
 */
export interface ConnectionOptionsPostgres {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsPostgres
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsPostgres
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsPostgres
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsPostgres
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsPostgres
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsPostgres
     */
    schema: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsPostgres
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsPostgres
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsPostgres
     */
    user: string;
}

export function ConnectionOptionsPostgresFromJSON(json: any): ConnectionOptionsPostgres {
    return ConnectionOptionsPostgresFromJSONTyped(json, false);
}

export function ConnectionOptionsPostgresFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsPostgres {
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

export function ConnectionOptionsPostgresToJSON(value?: ConnectionOptionsPostgres | null): any {
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

