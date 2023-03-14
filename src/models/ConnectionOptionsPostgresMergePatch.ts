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
 * (Parameters used to PATCH the `ConnectionOptionsPostgres` type.)
 * 
 * Postgres connection options
 * @export
 * @interface ConnectionOptionsPostgresMergePatch
 */
export interface ConnectionOptionsPostgresMergePatch {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsPostgresMergePatch
     */
    database?: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsPostgresMergePatch
     */
    host?: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsPostgresMergePatch
     */
    load_balancer?: string | null;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsPostgresMergePatch
     */
    password?: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsPostgresMergePatch
     */
    port?: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsPostgresMergePatch
     */
    schema?: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsPostgresMergePatch
     */
    ssh_bastion?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsPostgresMergePatch
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsPostgresMergePatch
     */
    user?: string;
}

export function ConnectionOptionsPostgresMergePatchFromJSON(json: any): ConnectionOptionsPostgresMergePatch {
    return ConnectionOptionsPostgresMergePatchFromJSONTyped(json, false);
}

export function ConnectionOptionsPostgresMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsPostgresMergePatch {
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

export function ConnectionOptionsPostgresMergePatchToJSON(value?: ConnectionOptionsPostgresMergePatch | null): any {
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

