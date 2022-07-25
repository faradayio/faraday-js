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
 * AWS Redshift Serverless connection options
 * @export
 * @interface ConnectionOptionsAwsRedshiftServerless
 */
export interface ConnectionOptionsAwsRedshiftServerless {
    /**
     * Redshift tables exists inside of an AWS region, e.g. us-east-1
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerless
     */
    aws_region: string;
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerless
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerless
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerless
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerless
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsRedshiftServerless
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerless
     */
    schema: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerless
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerless
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerless
     */
    user: string;
}

export function ConnectionOptionsAwsRedshiftServerlessFromJSON(json: any): ConnectionOptionsAwsRedshiftServerless {
    return ConnectionOptionsAwsRedshiftServerlessFromJSONTyped(json, false);
}

export function ConnectionOptionsAwsRedshiftServerlessFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsAwsRedshiftServerless {
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

export function ConnectionOptionsAwsRedshiftServerlessToJSON(value?: ConnectionOptionsAwsRedshiftServerless | null): any {
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

