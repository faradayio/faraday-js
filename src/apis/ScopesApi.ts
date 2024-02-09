/* tslint:disable */
/* eslint-disable */
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
import {
    Cohort,
    CohortFromJSON,
    CohortToJSON,
    Dataset,
    DatasetFromJSON,
    DatasetToJSON,
    Outcome,
    OutcomeFromJSON,
    OutcomeToJSON,
    PersonaSet,
    PersonaSetFromJSON,
    PersonaSetToJSON,
    Recommender,
    RecommenderFromJSON,
    RecommenderToJSON,
    Scope,
    ScopeFromJSON,
    ScopeToJSON,
    ScopeMergePatch,
    ScopeMergePatchFromJSON,
    ScopeMergePatchToJSON,
    ScopePost,
    ScopePostFromJSON,
    ScopePostToJSON,
    Target,
    TargetFromJSON,
    TargetToJSON,
} from '../models';

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

export interface UpdateScopeRequest {
    scopeId: string;
    scopeMergePatch: ScopeMergePatch;
}

/**
 * 
 */
export class ScopesApi extends runtime.BaseAPI {

    /**
     * Add a new scope
     * Create scope
     */
    private async createScopeRaw(requestParameters: CreateScopeRequest, ): Promise<runtime.ApiResponse<Scope>> {
        if (requestParameters.scopeFields === null || requestParameters.scopeFields === undefined) {
            throw new runtime.RequiredError('scopeFields','Required parameter requestParameters.scopeFields was null or undefined when calling createScope.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/scopes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ScopePostToJSON(requestParameters.scopeFields),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ScopeFromJSON(jsonValue));
    }

    /**
     * Add a new scope
     * Create scope
     */
    async createScope(scopeFields: ScopePost, ): Promise<Scope> {
        const response = await this.createScopeRaw({ scopeFields: scopeFields }, );
        return await response.value();
    }

    /**
     * Delete a scope
     */
    private async deleteScopeRaw(requestParameters: DeleteScopeRequest, ): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.scopeId === null || requestParameters.scopeId === undefined) {
            throw new runtime.RequiredError('scopeId','Required parameter requestParameters.scopeId was null or undefined when calling deleteScope.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/scopes/{scope_id}`.replace(`{${"scope_id"}}`, encodeURIComponent(String(requestParameters.scopeId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a scope
     */
    async deleteScope(scopeId: string, ): Promise<void> {
        await this.deleteScopeRaw({ scopeId: scopeId }, );
    }

    /**
     * Get details on a specific scope
     * Retrieve a scope
     */
    private async getScopeRaw(requestParameters: GetScopeRequest, ): Promise<runtime.ApiResponse<Scope>> {
        if (requestParameters.scopeId === null || requestParameters.scopeId === undefined) {
            throw new runtime.RequiredError('scopeId','Required parameter requestParameters.scopeId was null or undefined when calling getScope.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/scopes/{scope_id}`.replace(`{${"scope_id"}}`, encodeURIComponent(String(requestParameters.scopeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ScopeFromJSON(jsonValue));
    }

    /**
     * Get details on a specific scope
     * Retrieve a scope
     */
    async getScope(scopeId: string, ): Promise<Scope> {
        const response = await this.getScopeRaw({ scopeId: scopeId }, );
        return await response.value();
    }

    /**
     * Retrieve all datasets associated with a scope. For example, if your scope has population_cohorts, you built those cohorts using data from one of your datasets. This endpoint gets all such datasets. This can be used with referenced targets, to figure out which source tables the target can reference.
     * Retrieve all datasets associated with a scope
     */
    private async getScopeDatasetsRaw(requestParameters: GetScopeDatasetsRequest, ): Promise<runtime.ApiResponse<Array<Dataset>>> {
        if (requestParameters.scopeId === null || requestParameters.scopeId === undefined) {
            throw new runtime.RequiredError('scopeId','Required parameter requestParameters.scopeId was null or undefined when calling getScopeDatasets.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/scopes/{scope_id}/datasets`.replace(`{${"scope_id"}}`, encodeURIComponent(String(requestParameters.scopeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(DatasetFromJSON));
    }

    /**
     * Retrieve all datasets associated with a scope. For example, if your scope has population_cohorts, you built those cohorts using data from one of your datasets. This endpoint gets all such datasets. This can be used with referenced targets, to figure out which source tables the target can reference.
     * Retrieve all datasets associated with a scope
     */
    async getScopeDatasets(scopeId: string, ): Promise<Array<Dataset>> {
        const response = await this.getScopeDatasetsRaw({ scopeId: scopeId }, );
        return await response.value();
    }

    /**
     * Get payload cohorts for a scope
     * Get payload cohorts for a scope
     */
    private async getScopePayloadCohortsRaw(requestParameters: GetScopePayloadCohortsRequest, ): Promise<runtime.ApiResponse<Array<Cohort>>> {
        if (requestParameters.scopeId === null || requestParameters.scopeId === undefined) {
            throw new runtime.RequiredError('scopeId','Required parameter requestParameters.scopeId was null or undefined when calling getScopePayloadCohorts.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/scopes/{scope_id}/payload/cohorts`.replace(`{${"scope_id"}}`, encodeURIComponent(String(requestParameters.scopeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CohortFromJSON));
    }

    /**
     * Get payload cohorts for a scope
     * Get payload cohorts for a scope
     */
    async getScopePayloadCohorts(scopeId: string, ): Promise<Array<Cohort>> {
        const response = await this.getScopePayloadCohortsRaw({ scopeId: scopeId }, );
        return await response.value();
    }

    /**
     * Get payload outcomes for a scope
     * Get payload outcomes for a scope
     */
    private async getScopePayloadOutcomesRaw(requestParameters: GetScopePayloadOutcomesRequest, ): Promise<runtime.ApiResponse<Array<Outcome>>> {
        if (requestParameters.scopeId === null || requestParameters.scopeId === undefined) {
            throw new runtime.RequiredError('scopeId','Required parameter requestParameters.scopeId was null or undefined when calling getScopePayloadOutcomes.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/scopes/{scope_id}/payload/outcomes`.replace(`{${"scope_id"}}`, encodeURIComponent(String(requestParameters.scopeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OutcomeFromJSON));
    }

    /**
     * Get payload outcomes for a scope
     * Get payload outcomes for a scope
     */
    async getScopePayloadOutcomes(scopeId: string, ): Promise<Array<Outcome>> {
        const response = await this.getScopePayloadOutcomesRaw({ scopeId: scopeId }, );
        return await response.value();
    }

    /**
     * Get payload persona sets for a scope
     * Get payload persona sets for a scope
     */
    private async getScopePayloadPersonaSetsRaw(requestParameters: GetScopePayloadPersonaSetsRequest, ): Promise<runtime.ApiResponse<Array<PersonaSet>>> {
        if (requestParameters.scopeId === null || requestParameters.scopeId === undefined) {
            throw new runtime.RequiredError('scopeId','Required parameter requestParameters.scopeId was null or undefined when calling getScopePayloadPersonaSets.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/scopes/{scope_id}/payload/persona_sets`.replace(`{${"scope_id"}}`, encodeURIComponent(String(requestParameters.scopeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PersonaSetFromJSON));
    }

    /**
     * Get payload persona sets for a scope
     * Get payload persona sets for a scope
     */
    async getScopePayloadPersonaSets(scopeId: string, ): Promise<Array<PersonaSet>> {
        const response = await this.getScopePayloadPersonaSetsRaw({ scopeId: scopeId }, );
        return await response.value();
    }

    /**
     * Get payload recommenders for a scope
     * Get payload recommenders for a scope
     */
    private async getScopePayloadRecommendersRaw(requestParameters: GetScopePayloadRecommendersRequest, ): Promise<runtime.ApiResponse<Array<Recommender>>> {
        if (requestParameters.scopeId === null || requestParameters.scopeId === undefined) {
            throw new runtime.RequiredError('scopeId','Required parameter requestParameters.scopeId was null or undefined when calling getScopePayloadRecommenders.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/scopes/{scope_id}/payload/recommenders`.replace(`{${"scope_id"}}`, encodeURIComponent(String(requestParameters.scopeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RecommenderFromJSON));
    }

    /**
     * Get payload recommenders for a scope
     * Get payload recommenders for a scope
     */
    async getScopePayloadRecommenders(scopeId: string, ): Promise<Array<Recommender>> {
        const response = await this.getScopePayloadRecommendersRaw({ scopeId: scopeId }, );
        return await response.value();
    }

    /**
     * Get population cohorts for a scope
     * Get population cohorts for a scope
     */
    private async getScopePopulationCohortsRaw(requestParameters: GetScopePopulationCohortsRequest, ): Promise<runtime.ApiResponse<Array<Cohort>>> {
        if (requestParameters.scopeId === null || requestParameters.scopeId === undefined) {
            throw new runtime.RequiredError('scopeId','Required parameter requestParameters.scopeId was null or undefined when calling getScopePopulationCohorts.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/scopes/{scope_id}/population/cohorts`.replace(`{${"scope_id"}}`, encodeURIComponent(String(requestParameters.scopeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CohortFromJSON));
    }

    /**
     * Get population cohorts for a scope
     * Get population cohorts for a scope
     */
    async getScopePopulationCohorts(scopeId: string, ): Promise<Array<Cohort>> {
        const response = await this.getScopePopulationCohortsRaw({ scopeId: scopeId }, );
        return await response.value();
    }

    /**
     * Get population exclusion cohorts for a scope
     * Get population exclusion cohorts for a scope
     */
    private async getScopePopulationExclusionCohortsRaw(requestParameters: GetScopePopulationExclusionCohortsRequest, ): Promise<runtime.ApiResponse<Array<Cohort>>> {
        if (requestParameters.scopeId === null || requestParameters.scopeId === undefined) {
            throw new runtime.RequiredError('scopeId','Required parameter requestParameters.scopeId was null or undefined when calling getScopePopulationExclusionCohorts.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/scopes/{scope_id}/population/exclusion_cohorts`.replace(`{${"scope_id"}}`, encodeURIComponent(String(requestParameters.scopeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CohortFromJSON));
    }

    /**
     * Get population exclusion cohorts for a scope
     * Get population exclusion cohorts for a scope
     */
    async getScopePopulationExclusionCohorts(scopeId: string, ): Promise<Array<Cohort>> {
        const response = await this.getScopePopulationExclusionCohortsRaw({ scopeId: scopeId }, );
        return await response.value();
    }

    /**
     * Get targets for a scope
     * Get targets for a scope
     */
    private async getScopeTargetsRaw(requestParameters: GetScopeTargetsRequest, ): Promise<runtime.ApiResponse<Array<Target>>> {
        if (requestParameters.scopeId === null || requestParameters.scopeId === undefined) {
            throw new runtime.RequiredError('scopeId','Required parameter requestParameters.scopeId was null or undefined when calling getScopeTargets.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/scopes/{scope_id}/targets`.replace(`{${"scope_id"}}`, encodeURIComponent(String(requestParameters.scopeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TargetFromJSON));
    }

    /**
     * Get targets for a scope
     * Get targets for a scope
     */
    async getScopeTargets(scopeId: string, ): Promise<Array<Target>> {
        const response = await this.getScopeTargetsRaw({ scopeId: scopeId }, );
        return await response.value();
    }

    /**
     * Get a list of scopes defined on the account
     * List scopes
     */
    private async getScopesRaw(): Promise<runtime.ApiResponse<Array<Scope>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/scopes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ScopeFromJSON));
    }

    /**
     * Get a list of scopes defined on the account
     * List scopes
     */
    async getScopes(): Promise<Array<Scope>> {
        const response = await this.getScopesRaw();
        return await response.value();
    }

    /**
     * Update the configuration of a scope.
     * Update a scope
     */
    private async updateScopeRaw(requestParameters: UpdateScopeRequest, ): Promise<runtime.ApiResponse<Scope>> {
        if (requestParameters.scopeId === null || requestParameters.scopeId === undefined) {
            throw new runtime.RequiredError('scopeId','Required parameter requestParameters.scopeId was null or undefined when calling updateScope.');
        }

        if (requestParameters.scopeMergePatch === null || requestParameters.scopeMergePatch === undefined) {
            throw new runtime.RequiredError('scopeMergePatch','Required parameter requestParameters.scopeMergePatch was null or undefined when calling updateScope.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json+merge-patch';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/scopes/{scope_id}`.replace(`{${"scope_id"}}`, encodeURIComponent(String(requestParameters.scopeId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ScopeMergePatchToJSON(requestParameters.scopeMergePatch),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ScopeFromJSON(jsonValue));
    }

    /**
     * Update the configuration of a scope.
     * Update a scope
     */
    async updateScope(scopeId: string, scopeMergePatch: ScopeMergePatch, ): Promise<Scope> {
        const response = await this.updateScopeRaw({ scopeId: scopeId, scopeMergePatch: scopeMergePatch }, );
        return await response.value();
    }

}
