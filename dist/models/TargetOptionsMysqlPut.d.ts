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
 * (Parameters used to PUT a value of the `TargetOptionsMysql` type.)
 *
 * MySQL target options
 * @export
 * @interface TargetOptionsMysqlPut
 */
export interface TargetOptionsMysqlPut {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsMysqlPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsMysqlPut
     */
    type: string;
}
export declare function TargetOptionsMysqlPutFromJSON(json: any): TargetOptionsMysqlPut;
export declare function TargetOptionsMysqlPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsMysqlPut;
export declare function TargetOptionsMysqlPutToJSON(value?: TargetOptionsMysqlPut | null): any;
