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
 * Aurora (MySQL) connection options
 * @export
 * @interface ConnectionOptionsAwsAuroraMysql
 */
export interface ConnectionOptionsAwsAuroraMysql {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysql
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysql
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysql
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysql
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsAuroraMysql
     */
    port: number;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysql
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysql
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysql
     */
    user: string;
}
export declare function ConnectionOptionsAwsAuroraMysqlFromJSON(json: any): ConnectionOptionsAwsAuroraMysql;
export declare function ConnectionOptionsAwsAuroraMysqlFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsAwsAuroraMysql;
export declare function ConnectionOptionsAwsAuroraMysqlToJSON(value?: ConnectionOptionsAwsAuroraMysql | null): any;
