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
 * SQL Server dataset options
 * @export
 * @interface DatasetOptionsSqlServer
 */
export interface DatasetOptionsSqlServer {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsSqlServer
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSqlServer
     */
    type: string;
}
export declare function DatasetOptionsSqlServerFromJSON(json: any): DatasetOptionsSqlServer;
export declare function DatasetOptionsSqlServerFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetOptionsSqlServer;
export declare function DatasetOptionsSqlServerToJSON(value?: DatasetOptionsSqlServer | null): any;
