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
 * (Parameters used to PATCH the `ConnectionOptionsGcpGcsCsv` type.)
 *
 * GCS connection options
 * @export
 * @interface ConnectionOptionsGcpGcsCsvMergePatch
 */
export interface ConnectionOptionsGcpGcsCsvMergePatch {
    /**
     * Bucket name
     * @type {string}
     * @memberof ConnectionOptionsGcpGcsCsvMergePatch
     */
    bucket_name?: string;
    /**
     * Project ID
     * @type {string}
     * @memberof ConnectionOptionsGcpGcsCsvMergePatch
     */
    project_id?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGcpGcsCsvMergePatch
     */
    type: string;
}
export declare function ConnectionOptionsGcpGcsCsvMergePatchFromJSON(json: any): ConnectionOptionsGcpGcsCsvMergePatch;
export declare function ConnectionOptionsGcpGcsCsvMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsGcpGcsCsvMergePatch;
export declare function ConnectionOptionsGcpGcsCsvMergePatchToJSON(value?: ConnectionOptionsGcpGcsCsvMergePatch | null): any;
