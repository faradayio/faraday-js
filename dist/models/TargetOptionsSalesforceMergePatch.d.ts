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
 * (Parameters used to PATCH the `TargetOptionsSalesforce` type.)
 *
 * Salesforce target options
 * @export
 * @interface TargetOptionsSalesforceMergePatch
 */
export interface TargetOptionsSalesforceMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSalesforceMergePatch
     */
    type: string;
}
export declare function TargetOptionsSalesforceMergePatchFromJSON(json: any): TargetOptionsSalesforceMergePatch;
export declare function TargetOptionsSalesforceMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetOptionsSalesforceMergePatch;
export declare function TargetOptionsSalesforceMergePatchToJSON(value?: TargetOptionsSalesforceMergePatch | null): any;
