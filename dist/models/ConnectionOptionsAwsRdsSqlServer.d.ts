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
 * RDS (SQL Server) connection options
 * @export
 * @interface ConnectionOptionsAwsRdsSqlServer
 */
export interface ConnectionOptionsAwsRdsSqlServer {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServer
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServer
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServer
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServer
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsRdsSqlServer
     */
    port: number;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServer
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServer
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServer
     */
    user: string;
}
export declare function ConnectionOptionsAwsRdsSqlServerFromJSON(json: any): ConnectionOptionsAwsRdsSqlServer;
export declare function ConnectionOptionsAwsRdsSqlServerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsAwsRdsSqlServer;
export declare function ConnectionOptionsAwsRdsSqlServerToJSON(value?: ConnectionOptionsAwsRdsSqlServer | null): any;
