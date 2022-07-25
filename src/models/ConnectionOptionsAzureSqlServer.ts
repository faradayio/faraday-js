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
 * Microsoft Azure SQL Server connection options
 * @export
 * @interface ConnectionOptionsAzureSqlServer
 */
export interface ConnectionOptionsAzureSqlServer {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServer
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServer
     */
    host: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServer
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAzureSqlServer
     */
    port: number;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServer
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServer
     */
    user: string;
}

export function ConnectionOptionsAzureSqlServerFromJSON(json: any): ConnectionOptionsAzureSqlServer {
    return ConnectionOptionsAzureSqlServerFromJSONTyped(json, false);
}

export function ConnectionOptionsAzureSqlServerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsAzureSqlServer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'database': json['database'],
        'host': json['host'],
        'password': json['password'],
        'port': json['port'],
        'type': json['type'],
        'user': json['user'],
    };
}

export function ConnectionOptionsAzureSqlServerToJSON(value?: ConnectionOptionsAzureSqlServer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'database': value.database,
        'host': value.host,
        'password': value.password,
        'port': value.port,
        'type': value.type,
        'user': value.user,
    };
}

