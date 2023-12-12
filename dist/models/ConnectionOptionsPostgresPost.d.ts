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
 * (Parameters used to POST a new value of the `ConnectionOptionsPostgres` type.)
 *
 * Postgres connection options
 * @export
 * @interface ConnectionOptionsPostgresPost
 */
export interface ConnectionOptionsPostgresPost {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsPostgresPost
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsPostgresPost
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsPostgresPost
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsPostgresPost
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsPostgresPost
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsPostgresPost
     */
    schema: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsPostgresPost
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsPostgresPost
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsPostgresPost
     */
    user: string;
}
export declare function ConnectionOptionsPostgresPostFromJSON(json: any): ConnectionOptionsPostgresPost;
export declare function ConnectionOptionsPostgresPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsPostgresPost;
export declare function ConnectionOptionsPostgresPostToJSON(value?: ConnectionOptionsPostgresPost | null): any;
