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
 * (Parameters used to POST a new value of the `TargetOptionsPostgres` type.)
 *
 * Postgres target options
 * @export
 * @interface TargetOptionsPostgresPost
 */
export interface TargetOptionsPostgresPost {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsPostgresPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsPostgresPost
     */
    type: string;
}
export declare function TargetOptionsPostgresPostFromJSON(json: any): TargetOptionsPostgresPost;
export declare function TargetOptionsPostgresPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsPostgresPost;
export declare function TargetOptionsPostgresPostToJSON(value?: TargetOptionsPostgresPost | null): any;