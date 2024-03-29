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
 * @interface StreamPropertyInputFromDatasets
 */
export interface StreamPropertyInputFromDatasets {
    /**
     * the column used to populate this property on the event stream
     * @type {string}
     * @memberof StreamPropertyInputFromDatasets
     */
    column_name: string;
    /**
     * the dataset the column comes from
     * @type {string}
     * @memberof StreamPropertyInputFromDatasets
     */
    dataset_id: string;
}
export declare function StreamPropertyInputFromDatasetsFromJSON(json: any): StreamPropertyInputFromDatasets;
export declare function StreamPropertyInputFromDatasetsFromJSONTyped(json: any, ignoreDiscriminator: boolean): StreamPropertyInputFromDatasets;
export declare function StreamPropertyInputFromDatasetsToJSON(value?: StreamPropertyInputFromDatasets | null): any;
