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
 *
 * @export
 * @interface TargetReferencedReference
 */
export interface TargetReferencedReference {
    /**
     * the name of the column in dataset_id that should be referenced
     * @type {string}
     * @memberof TargetReferencedReference
     */
    column_name: string;
    /**
     * dataset id to reference
     * @type {string}
     * @memberof TargetReferencedReference
     */
    dataset_id: string;
}
export declare function TargetReferencedReferenceFromJSON(json: any): TargetReferencedReference;
export declare function TargetReferencedReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): TargetReferencedReference;
export declare function TargetReferencedReferenceToJSON(value?: TargetReferencedReference | null): any;
