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
 * (Parameters used to POST a new value of the `ConnectionOptionsAzureSqlServer` type.)
 * 
 * Microsoft Azure SQL Server connection options
 * @export
 * @interface ConnectionOptionsAzureSqlServerPost
 */
export interface ConnectionOptionsAzureSqlServerPost {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPost
     */
    database: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPost
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAzureSqlServerPost
     */
    port: number;
    /**
     * Server
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPost
     */
    server: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPost
     */
    type: string;
    /**
     * Username
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPost
     */
    username: string;
}

export function ConnectionOptionsAzureSqlServerPostFromJSON(json: any): ConnectionOptionsAzureSqlServerPost {
    return ConnectionOptionsAzureSqlServerPostFromJSONTyped(json, false);
}

export function ConnectionOptionsAzureSqlServerPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsAzureSqlServerPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'database': json['database'],
        'password': json['password'],
        'port': json['port'],
        'server': json['server'],
        'type': json['type'],
        'username': json['username'],
    };
}

export function ConnectionOptionsAzureSqlServerPostToJSON(value?: ConnectionOptionsAzureSqlServerPost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'database': value.database,
        'password': value.password,
        'port': value.port,
        'server': value.server,
        'type': value.type,
        'username': value.username,
    };
}

