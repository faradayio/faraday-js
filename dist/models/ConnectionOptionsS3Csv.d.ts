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
 * S3 connection options
 * @export
 * @interface ConnectionOptionsS3Csv
 */
export interface ConnectionOptionsS3Csv {
    /**
     * S3 buckets exists inside of an AWS region, e.g. us-east-1
     * @type {string}
     * @memberof ConnectionOptionsS3Csv
     */
    aws_region: string;
    /**
     * Bucket name
     * @type {string}
     * @memberof ConnectionOptionsS3Csv
     */
    bucket_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsS3Csv
     */
    type: string;
}
export declare function ConnectionOptionsS3CsvFromJSON(json: any): ConnectionOptionsS3Csv;
export declare function ConnectionOptionsS3CsvFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsS3Csv;
export declare function ConnectionOptionsS3CsvToJSON(value?: ConnectionOptionsS3Csv | null): any;
