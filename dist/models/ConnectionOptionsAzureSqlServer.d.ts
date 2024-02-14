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
 * Azure SQL connection options
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
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServer
     */
    load_balancer?: string;
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
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServer
     */
    schema?: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServer
     */
    ssh_bastion?: string;
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
export declare function ConnectionOptionsAzureSqlServerFromJSON(json: any): ConnectionOptionsAzureSqlServer;
export declare function ConnectionOptionsAzureSqlServerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsAzureSqlServer;
export declare function ConnectionOptionsAzureSqlServerToJSON(value?: ConnectionOptionsAzureSqlServer | null): any;
