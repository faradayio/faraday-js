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
import { TraitDataMapColumn } from './TraitDataMapColumn';
/**
 * A mapping of trait name to trait definition, where the key is what the trait will be called in Faraday's system.
 *
 * Traits are characteristics about people, that are unrelated to particular events.
 *
 * When specifying or modifying this parameter, bulk trait declarations specified with `output_all_columns_as_traits` must be null.
 * @export
 * @interface OutputToTraits
 */
export interface OutputToTraits {
    [key: string]: TraitDataMapColumn;
}
export declare function OutputToTraitsFromJSON(json: any): OutputToTraits;
export declare function OutputToTraitsFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutputToTraits;
export declare function OutputToTraitsToJSON(value?: OutputToTraits | null): any;
