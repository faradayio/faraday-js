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
 * (Parameters used to PATCH the `ConnectionOptionsRedshift` type.)
 * 
 * Redshift connection options
 * @export
 * @interface ConnectionOptionsRedshiftMergePatch
 */
export interface ConnectionOptionsRedshiftMergePatch {
    /**
     * Redshift tables exists inside of an AWS region, e.g. us-east-1
     * @type {string}
     * @memberof ConnectionOptionsRedshiftMergePatch
     */
    aws_region?: string;
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsRedshiftMergePatch
     */
    database?: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsRedshiftMergePatch
     */
    host?: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsRedshiftMergePatch
     */
    load_balancer?: string | null;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsRedshiftMergePatch
     */
    password?: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsRedshiftMergePatch
     */
    port?: number;
    /**
     * Redshift tables exist inside of schemas, e.g. ANALYTICS or PUBLIC.
     * @type {string}
     * @memberof ConnectionOptionsRedshiftMergePatch
     */
    schema?: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsRedshiftMergePatch
     */
    ssh_bastion?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsRedshiftMergePatch
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsRedshiftMergePatch
     */
    user?: string;
}

export function ConnectionOptionsRedshiftMergePatchFromJSON(json: any): ConnectionOptionsRedshiftMergePatch {
    return ConnectionOptionsRedshiftMergePatchFromJSONTyped(json, false);
}

export function ConnectionOptionsRedshiftMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsRedshiftMergePatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aws_region': !exists(json, 'aws_region') ? undefined : json['aws_region'],
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

export function ConnectionOptionsRedshiftMergePatchToJSON(value?: ConnectionOptionsRedshiftMergePatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'aws_region': value.aws_region,
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

