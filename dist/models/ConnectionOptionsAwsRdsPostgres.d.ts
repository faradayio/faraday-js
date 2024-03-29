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
 * RDS (Postgres) connection options
 * @export
 * @interface ConnectionOptionsAwsRdsPostgres
 */
export interface ConnectionOptionsAwsRdsPostgres {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgres
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgres
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgres
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgres
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsRdsPostgres
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgres
     */
    schema: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgres
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgres
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgres
     */
    user: string;
}
export declare function ConnectionOptionsAwsRdsPostgresFromJSON(json: any): ConnectionOptionsAwsRdsPostgres;
export declare function ConnectionOptionsAwsRdsPostgresFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsAwsRdsPostgres;
export declare function ConnectionOptionsAwsRdsPostgresToJSON(value?: ConnectionOptionsAwsRdsPostgres | null): any;
