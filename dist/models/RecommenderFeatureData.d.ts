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
import { AnalysisFeatureDirectionality } from './AnalysisFeatureDirectionality';
/**
 *
 * @export
 * @interface RecommenderFeatureData
 */
export interface RecommenderFeatureData {
    /**
     *
     * @type {string}
     * @memberof RecommenderFeatureData
     */
    category: string;
    /**
     *
     * @type {Array<AnalysisFeatureDirectionality>}
     * @memberof RecommenderFeatureData
     */
    directionality: Array<AnalysisFeatureDirectionality>;
    /**
     *
     * @type {number}
     * @memberof RecommenderFeatureData
     */
    importance: number;
    /**
     *
     * @type {string}
     * @memberof RecommenderFeatureData
     */
    literate: string;
    /**
     *
     * @type {string}
     * @memberof RecommenderFeatureData
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof RecommenderFeatureData
     */
    type: string;
}
export declare function RecommenderFeatureDataFromJSON(json: any): RecommenderFeatureData;
export declare function RecommenderFeatureDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecommenderFeatureData;
export declare function RecommenderFeatureDataToJSON(value?: RecommenderFeatureData | null): any;
