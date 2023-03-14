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
 * Redshift connection options
 * @export
 * @interface ConnectionOptionsRedshift
 */
export interface ConnectionOptionsRedshift {
    /**
     * Redshift tables exists inside of an AWS region, e.g. us-east-1
     * @type {string}
     * @memberof ConnectionOptionsRedshift
     */
    aws_region: string;
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsRedshift
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsRedshift
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsRedshift
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsRedshift
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsRedshift
     */
    port: number;
    /**
     * Redshift tables exist inside of schemas, e.g. ANALYTICS or PUBLIC.
     * @type {string}
     * @memberof ConnectionOptionsRedshift
     */
    schema: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsRedshift
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsRedshift
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsRedshift
     */
    user: string;
}

export function ConnectionOptionsRedshiftFromJSON(json: any): ConnectionOptionsRedshift {
    return ConnectionOptionsRedshiftFromJSONTyped(json, false);
}

export function ConnectionOptionsRedshiftFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsRedshift {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aws_region': json['aws_region'],
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

export function ConnectionOptionsRedshiftToJSON(value?: ConnectionOptionsRedshift | null): any {
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

