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
 * S3 target options
 * @export
 * @interface TargetOptionsS3Csv
 */
export interface TargetOptionsS3Csv {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use \t`.
     * @type {string}
     * @memberof TargetOptionsS3Csv
     */
    delimiter?: string;
    /**
     * Whether files are gzipped.
     * @type {boolean}
     * @memberof TargetOptionsS3Csv
     */
    gzip?: boolean;
    /**
     * The object key inside of the bucket. For example, path/to/my/file.csv. If you enable gzip, best practice is to add .gz to the end. Note: strftime substitutions like %Y-%m-%d are supported.
     * @type {string}
     * @memberof TargetOptionsS3Csv
     */
    object_key: string;
    /**
     * Whether to always quote all fields, even if they don't require it. Some systems require this.
     * @type {boolean}
     * @memberof TargetOptionsS3Csv
     */
    quote_all?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsS3Csv
     */
    type: string;
}
export declare function TargetOptionsS3CsvFromJSON(json: any): TargetOptionsS3Csv;
export declare function TargetOptionsS3CsvFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsS3Csv;
export declare function TargetOptionsS3CsvToJSON(value?: TargetOptionsS3Csv | null): any;
