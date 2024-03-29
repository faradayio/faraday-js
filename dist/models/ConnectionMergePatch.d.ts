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
import { ConnectionOptionsMergePatch } from './ConnectionOptionsMergePatch';
/**
 * (Parameters used to PATCH the `Connection` type.)
 *
 * Configuration for connecting data between Faraday and an external location.
 *
 * Connections are required when working with **replication targets**.
 * @export
 * @interface ConnectionMergePatch
 */
export interface ConnectionMergePatch {
    /**
     * A user-friendly name of the connection.
     * @type {string}
     * @memberof ConnectionMergePatch
     */
    name?: string;
    /**
     *
     * @type {ConnectionOptionsMergePatch}
     * @memberof ConnectionMergePatch
     */
    options?: ConnectionOptionsMergePatch;
}
export declare function ConnectionMergePatchFromJSON(json: any): ConnectionMergePatch;
export declare function ConnectionMergePatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionMergePatch;
export declare function ConnectionMergePatchToJSON(value?: ConnectionMergePatch | null): any;
