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
import { OutcomePredictorsBlockedMergePatch } from './OutcomePredictorsBlockedMergePatch';
/**
 * (Parameters used to PATCH the `OutcomePredictors` type.)
 *
 * Provides control over the features used during modeling to predict an outcome.
 * @export
 * @interface OutcomePredictorsMergePatch
 */
export interface OutcomePredictorsMergePatch {
    /**
     *
     * @type {OutcomePredictorsBlockedMergePatch}
     * @memberof OutcomePredictorsMergePatch
     */
    blocked?: OutcomePredictorsBlockedMergePatch | null;
}
export declare function OutcomePredictorsMergePatchFromJSON(json: any): OutcomePredictorsMergePatch;
export declare function OutcomePredictorsMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutcomePredictorsMergePatch;
export declare function OutcomePredictorsMergePatchToJSON(value?: OutcomePredictorsMergePatch | null): any;
