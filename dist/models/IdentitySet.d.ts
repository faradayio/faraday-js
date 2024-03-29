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
 * Information about how to extract personally identifiable information (name, contact, address) from the rows
 * in a dataset.
 *
 * At least one value must be provided.
 * @export
 * @interface IdentitySet
 */
export interface IdentitySet {
    /**
     *
     * @type {string}
     * @memberof IdentitySet
     */
    city?: string;
    /**
     *
     * @type {string}
     * @memberof IdentitySet
     */
    email?: string;
    /**
     * SHA-256 hash of the lowercase version of the email, with plus-addressing removed
     * @type {string}
     * @memberof IdentitySet
     */
    email_hash?: string;
    /**
     * House number and Street, City, State, and Zip all on one line if they are not available separately
     * @type {string}
     * @memberof IdentitySet
     */
    freeform_address?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof IdentitySet
     */
    house_number_and_street?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof IdentitySet
     */
    person_first_name?: string;
    /**
     * Only provide this if you don't have first name and last name separately
     * @type {string}
     * @memberof IdentitySet
     */
    person_full_name?: string;
    /**
     *
     * @type {string}
     * @memberof IdentitySet
     */
    person_last_name?: string;
    /**
     *
     * @type {string}
     * @memberof IdentitySet
     */
    phone?: string;
    /**
     *
     * @type {string}
     * @memberof IdentitySet
     */
    postcode?: string;
    /**
     *
     * @type {string}
     * @memberof IdentitySet
     */
    state?: string;
}
export declare function IdentitySetFromJSON(json: any): IdentitySet;
export declare function IdentitySetFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentitySet;
export declare function IdentitySetToJSON(value?: IdentitySet | null): any;
