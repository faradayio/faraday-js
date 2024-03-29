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
 * (Parameters used to PUT a value of the `ConnectionOptionsMysql` type.)
 *
 * MySQL connection options
 * @export
 * @interface ConnectionOptionsMysqlPut
 */
export interface ConnectionOptionsMysqlPut {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsMysqlPut
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsMysqlPut
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsMysqlPut
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsMysqlPut
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsMysqlPut
     */
    port: number;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsMysqlPut
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsMysqlPut
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsMysqlPut
     */
    user: string;
}
export declare function ConnectionOptionsMysqlPutFromJSON(json: any): ConnectionOptionsMysqlPut;
export declare function ConnectionOptionsMysqlPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsMysqlPut;
export declare function ConnectionOptionsMysqlPutToJSON(value?: ConnectionOptionsMysqlPut | null): any;
