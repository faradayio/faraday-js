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
 * (Parameters used to PATCH the `IdentitySet` type.)
 *
 * Information about how to extract personally identifiable information (name, contact, address) from the rows
 * in a dataset.
 *
 * At least one value must be provided.
 * @export
 * @interface IdentitySetMergePatch
 */
export interface IdentitySetMergePatch {
    /**
     *
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    city?: string | null;
    /**
     *
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    email?: string | null;
    /**
     * SHA-256 hash of the lowercase version of the email, with plus-addressing removed
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    email_hash?: string | null;
    /**
     * House number and Street, City, State, and Zip all on one line if they are not available separately
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    freeform_address?: string | null;
    /**
     *
     * @type {Array<string>}
     * @memberof IdentitySetMergePatch
     */
    house_number_and_street?: Array<string> | null;
    /**
     *
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    person_first_name?: string | null;
    /**
     * Only provide this if you don't have first name and last name separately
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    person_full_name?: string | null;
    /**
     *
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    person_last_name?: string | null;
    /**
     *
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    phone?: string | null;
    /**
     *
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    postcode?: string | null;
    /**
     *
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    state?: string | null;
}
export declare function IdentitySetMergePatchFromJSON(json: any): IdentitySetMergePatch;
export declare function IdentitySetMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentitySetMergePatch;
export declare function IdentitySetMergePatchToJSON(value?: IdentitySetMergePatch | null): any;
