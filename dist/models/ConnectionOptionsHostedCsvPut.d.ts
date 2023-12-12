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
 * (Parameters used to PUT a value of the `ConnectionOptionsHostedCsv` type.)
 *
 * CSV connection options
 * @export
 * @interface ConnectionOptionsHostedCsvPut
 */
export interface ConnectionOptionsHostedCsvPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsHostedCsvPut
     */
    type: string;
}
export declare function ConnectionOptionsHostedCsvPutFromJSON(json: any): ConnectionOptionsHostedCsvPut;
export declare function ConnectionOptionsHostedCsvPutFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionOptionsHostedCsvPut;
export declare function ConnectionOptionsHostedCsvPutToJSON(value?: ConnectionOptionsHostedCsvPut | null): any;
