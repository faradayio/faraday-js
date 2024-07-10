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
import { ArchiveConfig, Cohort, Dataset, Outcome, PersonaSet, Recommender, Scope, ScopeMergePatch, ScopePost, Target } from '../models';
export interface ArchiveScopeRequest {
    scopeId: string;
    archiveConfig: ArchiveConfig;
}
export interface CreateScopeRequest {
    scopeFields: ScopePost;
}
export interface DeleteScopeRequest {
    scopeId: string;
}
export interface GetScopeRequest {
    scopeId: string;
}
export interface GetScopeDatasetsRequest {
    scopeId: string;
}
export interface GetScopePayloadCohortsRequest {
    scopeId: string;
}
export interface GetScopePayloadOutcomesRequest {
    scopeId: string;
}
export interface GetScopePayloadPersonaSetsRequest {
    scopeId: string;
}
export interface GetScopePayloadRecommendersRequest {
    scopeId: string;
}
export interface GetScopePopulationCohortsRequest {
    scopeId: string;
}
export interface GetScopePopulationExclusionCohortsRequest {
    scopeId: string;
}
export interface GetScopeTargetsRequest {
    scopeId: string;
}
export interface UnarchiveScopeRequest {
    scopeId: string;
    archiveConfig: ArchiveConfig;
}
export interface UpdateScopeRequest {
    scopeId: string;
    scopeMergePatch: ScopeMergePatch;
}
/**
 *
 */
export declare class ScopesApi extends runtime.BaseAPI {
    /**
     * Archive a scope
     * Archive a scope
     */
    private archiveScopeRaw;
    /**
     * Archive a scope
     * Archive a scope
     */
    archiveScope(scopeId: string, archiveConfig: ArchiveConfig): Promise<void>;
    /**
     * Add a new scope
     * Create scope
     */
    private createScopeRaw;
    /**
     * Add a new scope
     * Create scope
     */
    createScope(scopeFields: ScopePost): Promise<Scope>;
    /**
     * Delete a scope
     */
    private deleteScopeRaw;
    /**
     * Delete a scope
     */
    deleteScope(scopeId: string): Promise<void>;
    /**
     * Get details on a specific scope
     * Retrieve a scope
     */
    private getScopeRaw;
    /**
     * Get details on a specific scope
     * Retrieve a scope
     */
    getScope(scopeId: string): Promise<Scope>;
    /**
     * Retrieve all datasets associated with a scope. For example, if your scope has population_cohorts, you built those cohorts using data from one of your datasets. This endpoint gets all such datasets. This can be used with referenced targets, to figure out which source tables the target can reference.
     * Retrieve all datasets associated with a scope
     */
    private getScopeDatasetsRaw;
    /**
     * Retrieve all datasets associated with a scope. For example, if your scope has population_cohorts, you built those cohorts using data from one of your datasets. This endpoint gets all such datasets. This can be used with referenced targets, to figure out which source tables the target can reference.
     * Retrieve all datasets associated with a scope
     */
    getScopeDatasets(scopeId: string): Promise<Array<Dataset>>;
    /**
     * Get payload cohorts for a scope
     * Get payload cohorts for a scope
     */
    private getScopePayloadCohortsRaw;
    /**
     * Get payload cohorts for a scope
     * Get payload cohorts for a scope
     */
    getScopePayloadCohorts(scopeId: string): Promise<Array<Cohort>>;
    /**
     * Get payload outcomes for a scope
     * Get payload outcomes for a scope
     */
    private getScopePayloadOutcomesRaw;
    /**
     * Get payload outcomes for a scope
     * Get payload outcomes for a scope
     */
    getScopePayloadOutcomes(scopeId: string): Promise<Array<Outcome>>;
    /**
     * Get payload persona sets for a scope
     * Get payload persona sets for a scope
     */
    private getScopePayloadPersonaSetsRaw;
    /**
     * Get payload persona sets for a scope
     * Get payload persona sets for a scope
     */
    getScopePayloadPersonaSets(scopeId: string): Promise<Array<PersonaSet>>;
    /**
     * Get payload recommenders for a scope
     * Get payload recommenders for a scope
     */
    private getScopePayloadRecommendersRaw;
    /**
     * Get payload recommenders for a scope
     * Get payload recommenders for a scope
     */
    getScopePayloadRecommenders(scopeId: string): Promise<Array<Recommender>>;
    /**
     * Get population cohorts for a scope
     * Get population cohorts for a scope
     */
    private getScopePopulationCohortsRaw;
    /**
     * Get population cohorts for a scope
     * Get population cohorts for a scope
     */
    getScopePopulationCohorts(scopeId: string): Promise<Array<Cohort>>;
    /**
     * Get population exclusion cohorts for a scope
     * Get population exclusion cohorts for a scope
     */
    private getScopePopulationExclusionCohortsRaw;
    /**
     * Get population exclusion cohorts for a scope
     * Get population exclusion cohorts for a scope
     */
    getScopePopulationExclusionCohorts(scopeId: string): Promise<Array<Cohort>>;
    /**
     * Get targets for a scope
     * Get targets for a scope
     */
    private getScopeTargetsRaw;
    /**
     * Get targets for a scope
     * Get targets for a scope
     */
    getScopeTargets(scopeId: string): Promise<Array<Target>>;
    /**
     * Get a list of scopes defined on the account
     * List scopes
     */
    private getScopesRaw;
    /**
     * Get a list of scopes defined on the account
     * List scopes
     */
    getScopes(): Promise<Array<Scope>>;
    /**
     * Unarchive a scope
     * Unarchive a scope
     */
    private unarchiveScopeRaw;
    /**
     * Unarchive a scope
     * Unarchive a scope
     */
    unarchiveScope(scopeId: string, archiveConfig: ArchiveConfig): Promise<void>;
    /**
     * Update the configuration of a scope.
     * Update a scope
     */
    private updateScopeRaw;
    /**
     * Update the configuration of a scope.
     * Update a scope
     */
    updateScope(scopeId: string, scopeMergePatch: ScopeMergePatch): Promise<Scope>;
}
