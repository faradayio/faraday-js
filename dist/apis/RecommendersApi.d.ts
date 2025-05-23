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
import { ArchiveConfig, Recommender, RecommenderAnalysis, RecommenderMergePatch, RecommenderPost } from '../models';
export interface ArchiveRecommenderRequest {
    recommenderId: string;
    archiveConfig: ArchiveConfig;
}
export interface CreateRecommenderRequest {
    recommenderFields: RecommenderPost;
}
export interface DeleteRecommenderRequest {
    recommenderId: string;
}
export interface ForceUpdateRecommenderRequest {
    recommenderId: string;
}
export interface GetRecommenderRequest {
    recommenderId: string;
}
export interface GetRecommenderAnalysisRequest {
    recommenderId: string;
}
export interface UnarchiveRecommenderRequest {
    recommenderId: string;
    archiveConfig: ArchiveConfig;
}
export interface UpdateRecommenderRequest {
    recommenderId: string;
    recommenderFields: RecommenderMergePatch;
}
/**
 *
 */
export declare class RecommendersApi extends runtime.BaseAPI {
    /**
     * Archive a recommender
     * Archive a recommender
     */
    private archiveRecommenderRaw;
    /**
     * Archive a recommender
     * Archive a recommender
     */
    archiveRecommender(recommenderId: string, archiveConfig: ArchiveConfig): Promise<void>;
    /**
     * Add a new recommender.  This feature is experimental and subject to change. To enable this feature, contact your account manager.
     * Create recommender
     */
    private createRecommenderRaw;
    /**
     * Add a new recommender.  This feature is experimental and subject to change. To enable this feature, contact your account manager.
     * Create recommender
     */
    createRecommender(recommenderFields: RecommenderPost): Promise<Recommender>;
    /**
     * Delete a recommender
     */
    private deleteRecommenderRaw;
    /**
     * Delete a recommender
     */
    deleteRecommender(recommenderId: string): Promise<void>;
    /**
     * Trigger a rerun for this resource.
     * Trigger a rerun for this resource.
     */
    private forceUpdateRecommenderRaw;
    /**
     * Trigger a rerun for this resource.
     * Trigger a rerun for this resource.
     */
    forceUpdateRecommender(recommenderId: string): Promise<void>;
    /**
     * Get details on a specific recommender
     * Retrieve a recommender
     */
    private getRecommenderRaw;
    /**
     * Get details on a specific recommender
     * Retrieve a recommender
     */
    getRecommender(recommenderId: string): Promise<Recommender>;
    /**
     * Get details on a specific recommender\'s analysis report on model performance, bias, etc.
     * Retrieve a recommenders\'s analysis
     */
    private getRecommenderAnalysisRaw;
    /**
     * Get details on a specific recommender\'s analysis report on model performance, bias, etc.
     * Retrieve a recommenders\'s analysis
     */
    getRecommenderAnalysis(recommenderId: string): Promise<RecommenderAnalysis>;
    /**
     * Get a list of recommenders defined on the account
     * List recommenders
     */
    private getRecommendersRaw;
    /**
     * Get a list of recommenders defined on the account
     * List recommenders
     */
    getRecommenders(): Promise<Array<Recommender>>;
    /**
     * Unarchive a recommender
     * Unarchive a recommender
     */
    private unarchiveRecommenderRaw;
    /**
     * Unarchive a recommender
     * Unarchive a recommender
     */
    unarchiveRecommender(recommenderId: string, archiveConfig: ArchiveConfig): Promise<void>;
    /**
     * Edit configuration of a recommender
     * Edit a recommender
     */
    private updateRecommenderRaw;
    /**
     * Edit configuration of a recommender
     * Edit a recommender
     */
    updateRecommender(recommenderId: string, recommenderFields: RecommenderMergePatch): Promise<Recommender>;
}
