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
 * (Parameters used to PUT a value of the `ConnectionOptionsAwsRdsPostgres` type.)
 *
 * RDS (Postgres) connection options
 * @export
 * @interface ConnectionOptionsAwsRdsPostgresPut
 */
export interface ConnectionOptionsAwsRdsPostgresPut {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresPut
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresPut
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresPut
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresPut
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsRdsPostgresPut
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresPut
     */
    schema: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresPut
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresPut
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresPut
     */
    user: string;
}
export declare function ConnectionOptionsAwsRdsPostgresPutFromJSON(json: any): ConnectionOptionsAwsRdsPostgresPut;
export declare function ConnectionOptionsAwsRdsPostgresPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsAwsRdsPostgresPut;
export declare function ConnectionOptionsAwsRdsPostgresPutToJSON(value?: ConnectionOptionsAwsRdsPostgresPut | null): any;