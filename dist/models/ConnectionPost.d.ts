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
import { ConnectionOptionsPost } from './ConnectionOptionsPost';
/**
 * (Parameters used to POST a new value of the `Connection` type.)
 *
 * Configuration for connecting data between Faraday and an external location.
 *
 * Connections are required when working with **replication targets**.
 * @export
 * @interface ConnectionPost
 */
export interface ConnectionPost {
    /**
     * A user-friendly name of the connection.
     * @type {string}
     * @memberof ConnectionPost
     */
    name: string;
    /**
     *
     * @type {ConnectionOptionsPost}
     * @memberof ConnectionPost
     */
    options: ConnectionOptionsPost;
}
export declare function ConnectionPostFromJSON(json: any): ConnectionPost;
export declare function ConnectionPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionPost;
export declare function ConnectionPostToJSON(value?: ConnectionPost | null): any;
