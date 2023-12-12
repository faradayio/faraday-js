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
import { TraitDataMapColumnPost } from './TraitDataMapColumnPost';
/**
 * (Parameters used to POST a new value of the `OutputToTraits` type.)
 *
 * A mapping of trait name to trait definition, where the key is what the trait will be called in Faraday's system.
 *
 * Traits are characteristics about people, that are unrelated to particular events.
 * @export
 * @interface OutputToTraitsPost
 */
export interface OutputToTraitsPost {
    [key: string]: TraitDataMapColumnPost;
}
export declare function OutputToTraitsPostFromJSON(json: any): OutputToTraitsPost;
export declare function OutputToTraitsPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutputToTraitsPost;
export declare function OutputToTraitsPostToJSON(value?: OutputToTraitsPost | null): any;
