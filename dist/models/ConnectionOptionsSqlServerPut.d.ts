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
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsSqlServer` type.)
 *
 * SQL Server connection options
 * @export
 * @interface ConnectionOptionsSqlServerPut
 */
export interface ConnectionOptionsSqlServerPut {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsSqlServerPut
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsSqlServerPut
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsSqlServerPut
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsSqlServerPut
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsSqlServerPut
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsSqlServerPut
     */
    schema?: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsSqlServerPut
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSqlServerPut
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsSqlServerPut
     */
    user: string;
}
export declare function ConnectionOptionsSqlServerPutFromJSON(json: any): ConnectionOptionsSqlServerPut;
export declare function ConnectionOptionsSqlServerPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsSqlServerPut;
export declare function ConnectionOptionsSqlServerPutToJSON(value?: ConnectionOptionsSqlServerPut | null): any;