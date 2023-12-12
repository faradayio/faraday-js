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
import { IdentitySetPut } from './IdentitySetPut';
/**
 * (Parameters used to PUT a value of the `IdentitySets` type.)
 *
 * A mapping of {identity set name} (ex. shipping) -> {identity set object}.
 *
 * Describes all the logical groupings of personally-identifiable information present in the dataset.
 *
 * Identity set objects map canonical names to dataset column names. The following keys are supported:
 *   * `email`
 *   * `email_hash`
 *   * `phone`
 *   * `person_full_name`
 *   * `person_last_name`
 *   * `person_first_name`
 *   * `house_number_and_street`
 *   * `city`
 *   * `state`
 *   * `postcode`
 *   * `freeform_address`
 *
 * All keys must correspond to a single column name except `house_number_and_street` which must be an array of column names.
 * @export
 * @interface IdentitySetsPut
 */
export interface IdentitySetsPut {
    [key: string]: IdentitySetPut;
}
export declare function IdentitySetsPutFromJSON(json: any): IdentitySetsPut;
export declare function IdentitySetsPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentitySetsPut;
export declare function IdentitySetsPutToJSON(value?: IdentitySetsPut | null): any;
