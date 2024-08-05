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
 * @interface LookupApiIdentifiers
 */
export interface LookupApiIdentifiers {
    /**
     *
     * @type {string}
     * @memberof LookupApiIdentifiers
     */
    city?: string;
    /**
     *
     * @type {string}
     * @memberof LookupApiIdentifiers
     */
    email?: string;
    /**
     *
     * @type {string}
     * @memberof LookupApiIdentifiers
     */
    email_hash?: string;
    /**
     *
     * @type {string}
     * @memberof LookupApiIdentifiers
     */
    house_number_and_street?: string;
    /**
     *
     * @type {string}
     * @memberof LookupApiIdentifiers
     */
    latitude?: string;
    /**
     *
     * @type {string}
     * @memberof LookupApiIdentifiers
     */
    longitude?: string;
    /**
     *
     * @type {string}
     * @memberof LookupApiIdentifiers
     */
    person_first_name?: string;
    /**
     *
     * @type {string}
     * @memberof LookupApiIdentifiers
     */
    person_last_name?: string;
    /**
     *
     * @type {string}
     * @memberof LookupApiIdentifiers
     */
    phone?: string;
    /**
     *
     * @type {string}
     * @memberof LookupApiIdentifiers
     */
    postcode?: string;
    /**
     *
     * @type {string}
     * @memberof LookupApiIdentifiers
     */
    search_radius?: string;
    /**
     *
     * @type {string}
     * @memberof LookupApiIdentifiers
     */
    state?: string;
}
export declare function LookupApiIdentifiersFromJSON(json: any): LookupApiIdentifiers;
export declare function LookupApiIdentifiersFromJSONTyped(json: any, ignoreDiscriminator: boolean): LookupApiIdentifiers;
export declare function LookupApiIdentifiersToJSON(value?: LookupApiIdentifiers | null): any;
