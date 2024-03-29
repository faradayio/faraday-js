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
 * Redshift target options
 * @export
 * @interface TargetOptionsRedshift
 */
export interface TargetOptionsRedshift {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsRedshift
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsRedshift
     */
    type: string;
}
export declare function TargetOptionsRedshiftFromJSON(json: any): TargetOptionsRedshift;
export declare function TargetOptionsRedshiftFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsRedshift;
export declare function TargetOptionsRedshiftToJSON(value?: TargetOptionsRedshift | null): any;
