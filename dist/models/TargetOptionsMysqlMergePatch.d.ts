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
 * (Parameters used to PATCH the `TargetOptionsMysql` type.)
 *
 * MySQL target options
 * @export
 * @interface TargetOptionsMysqlMergePatch
 */
export interface TargetOptionsMysqlMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsMysqlMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsMysqlMergePatch
     */
    type: string;
}
export declare function TargetOptionsMysqlMergePatchFromJSON(json: any): TargetOptionsMysqlMergePatch;
export declare function TargetOptionsMysqlMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsMysqlMergePatch;
export declare function TargetOptionsMysqlMergePatchToJSON(value?: TargetOptionsMysqlMergePatch | null): any;
