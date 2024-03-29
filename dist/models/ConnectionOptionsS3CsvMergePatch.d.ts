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
 * (Parameters used to PATCH the `ConnectionOptionsS3Csv` type.)
 *
 * S3 connection options
 * @export
 * @interface ConnectionOptionsS3CsvMergePatch
 */
export interface ConnectionOptionsS3CsvMergePatch {
    /**
     * S3 buckets exists inside of an AWS region, e.g. us-east-1
     * @type {string}
     * @memberof ConnectionOptionsS3CsvMergePatch
     */
    aws_region?: string;
    /**
     * Bucket name
     * @type {string}
     * @memberof ConnectionOptionsS3CsvMergePatch
     */
    bucket_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsS3CsvMergePatch
     */
    type: string;
}
export declare function ConnectionOptionsS3CsvMergePatchFromJSON(json: any): ConnectionOptionsS3CsvMergePatch;
export declare function ConnectionOptionsS3CsvMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsS3CsvMergePatch;
export declare function ConnectionOptionsS3CsvMergePatchToJSON(value?: ConnectionOptionsS3CsvMergePatch | null): any;
