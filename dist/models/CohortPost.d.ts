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
import { CohortPlaceCondition } from './CohortPlaceCondition';
import { CohortStreamCondition } from './CohortStreamCondition';
import { CohortTrait } from './CohortTrait';
import { RecencyPost } from './RecencyPost';
/**
 * (Parameters used to POST a new value of the `Cohort` type.)
 *
 * A specific group of people, such as "Customers" or "Subscription customers".
 * @export
 * @interface CohortPost
 */
export interface CohortPost {
    /**
     * Whether to show the Cohort in Explore, the map view on https://app.faraday.ai.
     *
     * This will slow down Cohort builds.
     * @type {boolean}
     * @memberof CohortPost
     */
    explore?: boolean;
    /**
     * Max count for this cohort's config
     * @type {number}
     * @memberof CohortPost
     */
    max_count?: number;
    /**
     * Max value for this cohort's config
     * @type {number}
     * @memberof CohortPost
     */
    max_value?: number;
    /**
     * Min count for this cohort's config
     * @type {number}
     * @memberof CohortPost
     */
    min_count?: number;
    /**
     * Min value for this cohort's config
     * @type {number}
     * @memberof CohortPost
     */
    min_value?: number;
    /**
     * Human-readable label for this cohort.
     * @type {string}
     * @memberof CohortPost
     */
    name: string;
    /**
     * List of places to use to spatially filter Cohort membership.
     * @type {Array<CohortPlaceCondition>}
     * @memberof CohortPost
     */
    place_conditions?: Array<CohortPlaceCondition>;
    /**
     *
     * @type {RecencyPost}
     * @memberof CohortPost
     */
    recency?: RecencyPost;
    /**
     * List of stream properties to filter cohort membership on. The stream properties must be for the same stream set as the cohort `stream_name`.
     *
     * Nulls are excluded unless explicitly requested with `_null: true`.
     * @type {Array<CohortStreamCondition>}
     * @memberof CohortPost
     */
    stream_conditions?: Array<CohortStreamCondition>;
    /**
     * The `name` field of the stream from which to build this cohort.
     * @type {string}
     * @memberof CohortPost
     */
    stream_name?: string;
    /**
     * List of traits to filter cohort membership
     * @type {Array<CohortTrait>}
     * @memberof CohortPost
     */
    traits?: Array<CohortTrait>;
}
export declare function CohortPostFromJSON(json: any): CohortPost;
export declare function CohortPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): CohortPost;
export declare function CohortPostToJSON(value?: CohortPost | null): any;