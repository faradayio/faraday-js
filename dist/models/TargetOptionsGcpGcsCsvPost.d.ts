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
 * (Parameters used to POST a new value of the `TargetOptionsGcpGcsCsv` type.)
 *
 * GCS target options
 * @export
 * @interface TargetOptionsGcpGcsCsvPost
 */
export interface TargetOptionsGcpGcsCsvPost {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof TargetOptionsGcpGcsCsvPost
     */
    delimiter?: string;
    /**
     * Whether files are gzipped.
     * @type {boolean}
     * @memberof TargetOptionsGcpGcsCsvPost
     */
    gzip?: boolean;
    /**
     * The object key inside of the bucket. For example, path/to/my/file.csv. If you enable gzip, best practice is to add .gz to the end. Note: strftime substitutions like %Y-%m-%d are supported.
     * @type {string}
     * @memberof TargetOptionsGcpGcsCsvPost
     */
    object_key: string;
    /**
     * Whether to always quote all fields, even if they don't require it. Some systems require this.
     * @type {boolean}
     * @memberof TargetOptionsGcpGcsCsvPost
     */
    quote_all?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpGcsCsvPost
     */
    type: string;
}
export declare function TargetOptionsGcpGcsCsvPostFromJSON(json: any): TargetOptionsGcpGcsCsvPost;
export declare function TargetOptionsGcpGcsCsvPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsGcpGcsCsvPost;
export declare function TargetOptionsGcpGcsCsvPostToJSON(value?: TargetOptionsGcpGcsCsvPost | null): any;
