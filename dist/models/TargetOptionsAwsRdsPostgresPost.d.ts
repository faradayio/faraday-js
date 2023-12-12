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
 * (Parameters used to POST a new value of the `TargetOptionsAwsRdsPostgres` type.)
 *
 * RDS (Postgres) target options
 * @export
 * @interface TargetOptionsAwsRdsPostgresPost
 */
export interface TargetOptionsAwsRdsPostgresPost {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsRdsPostgresPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsRdsPostgresPost
     */
    type: string;
}
export declare function TargetOptionsAwsRdsPostgresPostFromJSON(json: any): TargetOptionsAwsRdsPostgresPost;
export declare function TargetOptionsAwsRdsPostgresPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsAwsRdsPostgresPost;
export declare function TargetOptionsAwsRdsPostgresPostToJSON(value?: TargetOptionsAwsRdsPostgresPost | null): any;
