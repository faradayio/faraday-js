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
 * (Parameters used to PUT a value of the `ConnectionOptionsRecharge` type.)
 *
 * Recharge connection options
 * @export
 * @interface ConnectionOptionsRechargePut
 */
export interface ConnectionOptionsRechargePut {
    /**
     * API Key for the Recharge connection
     * @type {string}
     * @memberof ConnectionOptionsRechargePut
     */
    api_key: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsRechargePut
     */
    type: string;
}
export declare function ConnectionOptionsRechargePutFromJSON(json: any): ConnectionOptionsRechargePut;
export declare function ConnectionOptionsRechargePutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsRechargePut;
export declare function ConnectionOptionsRechargePutToJSON(value?: ConnectionOptionsRechargePut | null): any;
