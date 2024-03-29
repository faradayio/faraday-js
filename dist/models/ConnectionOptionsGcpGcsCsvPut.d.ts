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
 * (Parameters used to PUT a value of the `ConnectionOptionsGcpGcsCsv` type.)
 *
 * GCS connection options
 * @export
 * @interface ConnectionOptionsGcpGcsCsvPut
 */
export interface ConnectionOptionsGcpGcsCsvPut {
    /**
     * Bucket name
     * @type {string}
     * @memberof ConnectionOptionsGcpGcsCsvPut
     */
    bucket_name: string;
    /**
     * Project ID
     * @type {string}
     * @memberof ConnectionOptionsGcpGcsCsvPut
     */
    project_id: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGcpGcsCsvPut
     */
    type: string;
}
export declare function ConnectionOptionsGcpGcsCsvPutFromJSON(json: any): ConnectionOptionsGcpGcsCsvPut;
export declare function ConnectionOptionsGcpGcsCsvPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsGcpGcsCsvPut;
export declare function ConnectionOptionsGcpGcsCsvPutToJSON(value?: ConnectionOptionsGcpGcsCsvPut | null): any;
