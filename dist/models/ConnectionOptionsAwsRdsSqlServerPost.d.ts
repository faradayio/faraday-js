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
 * (Parameters used to POST a new value of the `ConnectionOptionsAwsRdsSqlServer` type.)
 *
 * RDS (SQL Server) connection options
 * @export
 * @interface ConnectionOptionsAwsRdsSqlServerPost
 */
export interface ConnectionOptionsAwsRdsSqlServerPost {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerPost
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerPost
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerPost
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerPost
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsRdsSqlServerPost
     */
    port: number;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerPost
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerPost
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerPost
     */
    user: string;
}
export declare function ConnectionOptionsAwsRdsSqlServerPostFromJSON(json: any): ConnectionOptionsAwsRdsSqlServerPost;
export declare function ConnectionOptionsAwsRdsSqlServerPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsAwsRdsSqlServerPost;
export declare function ConnectionOptionsAwsRdsSqlServerPostToJSON(value?: ConnectionOptionsAwsRdsSqlServerPost | null): any;
