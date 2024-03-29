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
 * (Parameters used to PUT a value of the `ConnectionOptionsAzureSqlServer` type.)
 *
 * Azure SQL connection options
 * @export
 * @interface ConnectionOptionsAzureSqlServerPut
 */
export interface ConnectionOptionsAzureSqlServerPut {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPut
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPut
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPut
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPut
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAzureSqlServerPut
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPut
     */
    schema?: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPut
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPut
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPut
     */
    user: string;
}
export declare function ConnectionOptionsAzureSqlServerPutFromJSON(json: any): ConnectionOptionsAzureSqlServerPut;
export declare function ConnectionOptionsAzureSqlServerPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsAzureSqlServerPut;
export declare function ConnectionOptionsAzureSqlServerPutToJSON(value?: ConnectionOptionsAzureSqlServerPut | null): any;
