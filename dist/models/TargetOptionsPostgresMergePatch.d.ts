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
 * (Parameters used to PATCH the `TargetOptionsPostgres` type.)
 *
 * Postgres target options
 * @export
 * @interface TargetOptionsPostgresMergePatch
 */
export interface TargetOptionsPostgresMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsPostgresMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsPostgresMergePatch
     */
    type: string;
}
export declare function TargetOptionsPostgresMergePatchFromJSON(json: any): TargetOptionsPostgresMergePatch;
export declare function TargetOptionsPostgresMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsPostgresMergePatch;
export declare function TargetOptionsPostgresMergePatchToJSON(value?: TargetOptionsPostgresMergePatch | null): any;
