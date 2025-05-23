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
    AnalysisDimensionsTrait,
    ArchiveConfig,
    Trait,
    TraitMergePatch,
    TraitPost,
} from '../models';

export interface ArchiveTraitRequest {
    traitId: string;
    archiveConfig: ArchiveConfig;
}

export interface CreateTraitRequest {
    traitFields: TraitPost;
}

export interface DeleteTraitRequest {
    traitId: string;
}

export interface ForceUpdateTraitRequest {
    traitId: string;
}

export interface GetTraitRequest {
    traitId: string;
}

export interface GetTraitAnalysisDimensionsRequest {
    traitId: string;
}

export interface UnarchiveTraitRequest {
    traitId: string;
    archiveConfig: ArchiveConfig;
}

export interface UpdateTraitRequest {
    traitId: string;
    traitMergePatch: TraitMergePatch;
}

/**
 * 
 */
export class TraitsApi extends runtime.BaseAPI {

    /**
     * Archive a trait
     * Archive a trait
     */
    private async archiveTraitRaw(requestParameters: ArchiveTraitRequest, ): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.traitId === null || requestParameters.traitId === undefined) {
            throw new runtime.RequiredError('traitId','Required parameter requestParameters.traitId was null or undefined when calling archiveTrait.');
        }

        if (requestParameters.archiveConfig === null || requestParameters.archiveConfig === undefined) {
            throw new runtime.RequiredError('archiveConfig','Required parameter requestParameters.archiveConfig was null or undefined when calling archiveTrait.');
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
            path: `/traits/{trait_id}/archive`.replace(`{${"trait_id"}}`, encodeURIComponent(String(requestParameters.traitId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.archiveConfig,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Archive a trait
     * Archive a trait
     */
    async archiveTrait(traitId: string, archiveConfig: ArchiveConfig, ): Promise<void> {
        await this.archiveTraitRaw({ traitId: traitId, archiveConfig: archiveConfig }, );
    }

    /**
     * Create a new user-defined Trait. You can connect your uploaded data to this trait by sending a PATCH to the relevant dataset with `output_to_traits` defined. 
     * Create a Trait
     */
    private async createTraitRaw(requestParameters: CreateTraitRequest, ): Promise<runtime.ApiResponse<Trait>> {
        if (requestParameters.traitFields === null || requestParameters.traitFields === undefined) {
            throw new runtime.RequiredError('traitFields','Required parameter requestParameters.traitFields was null or undefined when calling createTrait.');
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
            path: `/traits`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.traitFields,
        });

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Create a new user-defined Trait. You can connect your uploaded data to this trait by sending a PATCH to the relevant dataset with `output_to_traits` defined. 
     * Create a Trait
     */
    async createTrait(traitFields: TraitPost, ): Promise<Trait> {
        const response = await this.createTraitRaw({ traitFields: traitFields }, );
        return await response.value();
    }

    /**
     * Delete all traits without a source dataset.
     * Delete all orphaned traits
     */
    private async deleteAllOrphanedTraitsRaw(): Promise<runtime.ApiResponse<void>> {
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
            path: `/traits`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete all traits without a source dataset.
     * Delete all orphaned traits
     */
    async deleteAllOrphanedTraits(): Promise<void> {
        await this.deleteAllOrphanedTraitsRaw();
    }

    /**
     * Delete a trait
     * Delete a trait
     */
    private async deleteTraitRaw(requestParameters: DeleteTraitRequest, ): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.traitId === null || requestParameters.traitId === undefined) {
            throw new runtime.RequiredError('traitId','Required parameter requestParameters.traitId was null or undefined when calling deleteTrait.');
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
            path: `/traits/{trait_id}`.replace(`{${"trait_id"}}`, encodeURIComponent(String(requestParameters.traitId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a trait
     * Delete a trait
     */
    async deleteTrait(traitId: string, ): Promise<void> {
        await this.deleteTraitRaw({ traitId: traitId }, );
    }

    /**
     * Trigger a rerun for this resource. Faraday automatically updates resources when their config changes, but this option is available in case of transient errors. 
     * Trigger a rerun for this resource.
     */
    private async forceUpdateTraitRaw(requestParameters: ForceUpdateTraitRequest, ): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.traitId === null || requestParameters.traitId === undefined) {
            throw new runtime.RequiredError('traitId','Required parameter requestParameters.traitId was null or undefined when calling forceUpdateTrait.');
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
            path: `/traits/{trait_id}/force_update`.replace(`{${"trait_id"}}`, encodeURIComponent(String(requestParameters.traitId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Trigger a rerun for this resource. Faraday automatically updates resources when their config changes, but this option is available in case of transient errors. 
     * Trigger a rerun for this resource.
     */
    async forceUpdateTrait(traitId: string, ): Promise<void> {
        await this.forceUpdateTraitRaw({ traitId: traitId }, );
    }

    /**
     * Get a specific trait by ID.
     * Get a specific trait
     */
    private async getTraitRaw(requestParameters: GetTraitRequest, ): Promise<runtime.ApiResponse<Trait>> {
        if (requestParameters.traitId === null || requestParameters.traitId === undefined) {
            throw new runtime.RequiredError('traitId','Required parameter requestParameters.traitId was null or undefined when calling getTrait.');
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
            path: `/traits/{trait_id}`.replace(`{${"trait_id"}}`, encodeURIComponent(String(requestParameters.traitId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get a specific trait by ID.
     * Get a specific trait
     */
    async getTrait(traitId: string, ): Promise<Trait> {
        const response = await this.getTraitRaw({ traitId: traitId }, );
        return await response.value();
    }

    /**
     * The percentage of the US population that falls into each category of this trait.
     */
    private async getTraitAnalysisDimensionsRaw(requestParameters: GetTraitAnalysisDimensionsRequest, ): Promise<runtime.ApiResponse<AnalysisDimensionsTrait>> {
        if (requestParameters.traitId === null || requestParameters.traitId === undefined) {
            throw new runtime.RequiredError('traitId','Required parameter requestParameters.traitId was null or undefined when calling getTraitAnalysisDimensions.');
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
            path: `/traits/{trait_id}/analysis/dimensions`.replace(`{${"trait_id"}}`, encodeURIComponent(String(requestParameters.traitId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response);
    }

    /**
     * The percentage of the US population that falls into each category of this trait.
     */
    async getTraitAnalysisDimensions(traitId: string, ): Promise<AnalysisDimensionsTrait> {
        const response = await this.getTraitAnalysisDimensionsRaw({ traitId: traitId }, );
        return await response.value();
    }

    /**
     * Get a list of all available traits, including those provided by Faraday and those defined by the user.
     * List all user-defined and Faraday-provided traits
     */
    private async getTraitsRaw(): Promise<runtime.ApiResponse<Array<Trait>>> {
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
            path: `/traits`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get a list of all available traits, including those provided by Faraday and those defined by the user.
     * List all user-defined and Faraday-provided traits
     */
    async getTraits(): Promise<Array<Trait>> {
        const response = await this.getTraitsRaw();
        return await response.value();
    }

    /**
     * Get a csv of all available traits, including those provided by Faraday and those defined by the user.
     * List all user-defined and Faraday-provided traits, in csv form
     */
    private async getTraitsCsvRaw(): Promise<runtime.ApiResponse<string>> {
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
            path: `/traits.csv`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Get a csv of all available traits, including those provided by Faraday and those defined by the user.
     * List all user-defined and Faraday-provided traits, in csv form
     */
    async getTraitsCsv(): Promise<string> {
        const response = await this.getTraitsCsvRaw();
        return await response.value();
    }

    /**
     * Unarchive a trait
     * Unarchive a trait
     */
    private async unarchiveTraitRaw(requestParameters: UnarchiveTraitRequest, ): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.traitId === null || requestParameters.traitId === undefined) {
            throw new runtime.RequiredError('traitId','Required parameter requestParameters.traitId was null or undefined when calling unarchiveTrait.');
        }

        if (requestParameters.archiveConfig === null || requestParameters.archiveConfig === undefined) {
            throw new runtime.RequiredError('archiveConfig','Required parameter requestParameters.archiveConfig was null or undefined when calling unarchiveTrait.');
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
            path: `/traits/{trait_id}/unarchive`.replace(`{${"trait_id"}}`, encodeURIComponent(String(requestParameters.traitId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.archiveConfig,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Unarchive a trait
     * Unarchive a trait
     */
    async unarchiveTrait(traitId: string, archiveConfig: ArchiveConfig, ): Promise<void> {
        await this.unarchiveTraitRaw({ traitId: traitId, archiveConfig: archiveConfig }, );
    }

    /**
     * Update the configuration of a trait
     * Update a trait
     */
    private async updateTraitRaw(requestParameters: UpdateTraitRequest, ): Promise<runtime.ApiResponse<Trait>> {
        if (requestParameters.traitId === null || requestParameters.traitId === undefined) {
            throw new runtime.RequiredError('traitId','Required parameter requestParameters.traitId was null or undefined when calling updateTrait.');
        }

        if (requestParameters.traitMergePatch === null || requestParameters.traitMergePatch === undefined) {
            throw new runtime.RequiredError('traitMergePatch','Required parameter requestParameters.traitMergePatch was null or undefined when calling updateTrait.');
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
            path: `/traits/{trait_id}`.replace(`{${"trait_id"}}`, encodeURIComponent(String(requestParameters.traitId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.traitMergePatch,
        });

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update the configuration of a trait
     * Update a trait
     */
    async updateTrait(traitId: string, traitMergePatch: TraitMergePatch, ): Promise<Trait> {
        const response = await this.updateTraitRaw({ traitId: traitId, traitMergePatch: traitMergePatch }, );
        return await response.value();
    }

}
