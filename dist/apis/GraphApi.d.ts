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
import * as runtime from '../runtime';
import { GraphEdge } from '../models';
/**
 *
 */
export declare class GraphApi extends runtime.BaseAPI {
    /**
     * Each object in the list is an edge in the dependency graph.
     * Retrieve a dependency graph for all resources on an account
     */
    private getGraphRaw;
    /**
     * Each object in the list is an edge in the dependency graph.
     * Retrieve a dependency graph for all resources on an account
     */
    getGraph(): Promise<Array<GraphEdge>>;
}
