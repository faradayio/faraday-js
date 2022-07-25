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
 * (Parameters used to PUT a value of the `ConnectionOptionsRedshift` type.)
 * 
 * AWS Redshift connection options
 * @export
 * @interface ConnectionOptionsRedshiftPut
 */
export interface ConnectionOptionsRedshiftPut {
    /**
     * Redshift tables exists inside of an AWS region, e.g. us-east-1
     * @type {string}
     * @memberof ConnectionOptionsRedshiftPut
     */
    aws_region: string;
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsRedshiftPut
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsRedshiftPut
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsRedshiftPut
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsRedshiftPut
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsRedshiftPut
     */
    port: number;
    /**
     * Redshift tables exist inside of schemas, e.g. ANALYTICS or PUBLIC.
     * @type {string}
     * @memberof ConnectionOptionsRedshiftPut
     */
    schema: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsRedshiftPut
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsRedshiftPut
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsRedshiftPut
     */
    user: string;
}

export function ConnectionOptionsRedshiftPutFromJSON(json: any): ConnectionOptionsRedshiftPut {
    return ConnectionOptionsRedshiftPutFromJSONTyped(json, false);
}

export function ConnectionOptionsRedshiftPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsRedshiftPut {
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

export function ConnectionOptionsRedshiftPutToJSON(value?: ConnectionOptionsRedshiftPut | null): any {
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

