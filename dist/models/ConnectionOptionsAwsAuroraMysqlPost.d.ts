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
 * (Parameters used to POST a new value of the `ConnectionOptionsAwsAuroraMysql` type.)
 *
 * Aurora (MySQL) connection options
 * @export
 * @interface ConnectionOptionsAwsAuroraMysqlPost
 */
export interface ConnectionOptionsAwsAuroraMysqlPost {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysqlPost
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysqlPost
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysqlPost
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysqlPost
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsAuroraMysqlPost
     */
    port: number;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysqlPost
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysqlPost
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysqlPost
     */
    user: string;
}
export declare function ConnectionOptionsAwsAuroraMysqlPostFromJSON(json: any): ConnectionOptionsAwsAuroraMysqlPost;
export declare function ConnectionOptionsAwsAuroraMysqlPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsAwsAuroraMysqlPost;
export declare function ConnectionOptionsAwsAuroraMysqlPostToJSON(value?: ConnectionOptionsAwsAuroraMysqlPost | null): any;
