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
 * GCS connection options
 * @export
 * @interface ConnectionOptionsGcpGcsCsv
 */
export interface ConnectionOptionsGcpGcsCsv {
    /**
     * Bucket name
     * @type {string}
     * @memberof ConnectionOptionsGcpGcsCsv
     */
    bucket_name: string;
    /**
     * Project ID
     * @type {string}
     * @memberof ConnectionOptionsGcpGcsCsv
     */
    project_id: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGcpGcsCsv
     */
    type: string;
}
export declare function ConnectionOptionsGcpGcsCsvFromJSON(json: any): ConnectionOptionsGcpGcsCsv;
export declare function ConnectionOptionsGcpGcsCsvFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsGcpGcsCsv;
export declare function ConnectionOptionsGcpGcsCsvToJSON(value?: ConnectionOptionsGcpGcsCsv | null): any;
