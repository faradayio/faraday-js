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
 * SQL Server connection options
 * @export
 * @interface ConnectionOptionsSqlServer
 */
export interface ConnectionOptionsSqlServer {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsSqlServer
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsSqlServer
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsSqlServer
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsSqlServer
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsSqlServer
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsSqlServer
     */
    schema?: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsSqlServer
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSqlServer
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsSqlServer
     */
    user: string;
}
export declare function ConnectionOptionsSqlServerFromJSON(json: any): ConnectionOptionsSqlServer;
export declare function ConnectionOptionsSqlServerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsSqlServer;
export declare function ConnectionOptionsSqlServerToJSON(value?: ConnectionOptionsSqlServer | null): any;