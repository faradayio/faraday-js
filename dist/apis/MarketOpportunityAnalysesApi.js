"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketOpportunityAnalysesApi = void 0;
const runtime = require("../runtime");
/**
 *
 */
class MarketOpportunityAnalysesApi extends runtime.BaseAPI {
    /**
     * Archive a specific market opportunity analysis
     */
    archiveMarketOpportunityAnalysisRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.marketOpportunityAnalysisId === null || requestParameters.marketOpportunityAnalysisId === undefined) {
                throw new runtime.RequiredError('marketOpportunityAnalysisId', 'Required parameter requestParameters.marketOpportunityAnalysisId was null or undefined when calling archiveMarketOpportunityAnalysis.');
            }
            if (requestParameters.archiveConfig === null || requestParameters.archiveConfig === undefined) {
                throw new runtime.RequiredError('archiveConfig', 'Required parameter requestParameters.archiveConfig was null or undefined when calling archiveMarketOpportunityAnalysis.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("bearer", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/market_opportunity_analyses/{market_opportunity_analysis_id}/archive`.replace(`{${"market_opportunity_analysis_id"}}`, encodeURIComponent(String(requestParameters.marketOpportunityAnalysisId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.archiveConfig,
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Archive a specific market opportunity analysis
     */
    archiveMarketOpportunityAnalysis(marketOpportunityAnalysisId, archiveConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.archiveMarketOpportunityAnalysisRaw({ marketOpportunityAnalysisId: marketOpportunityAnalysisId, archiveConfig: archiveConfig });
        });
    }
    /**
     * Create a new market opportunity analysis
     */
    createMarketOpportunityAnalysisRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.marketOpportunityAnalysisFields === null || requestParameters.marketOpportunityAnalysisFields === undefined) {
                throw new runtime.RequiredError('marketOpportunityAnalysisFields', 'Required parameter requestParameters.marketOpportunityAnalysisFields was null or undefined when calling createMarketOpportunityAnalysis.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("bearer", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/market_opportunity_analyses`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.marketOpportunityAnalysisFields,
            });
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * Create a new market opportunity analysis
     */
    createMarketOpportunityAnalysis(marketOpportunityAnalysisFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createMarketOpportunityAnalysisRaw({ marketOpportunityAnalysisFields: marketOpportunityAnalysisFields });
            return yield response.value();
        });
    }
    /**
     * Delete a specific market opportunity analysis
     */
    deleteMarketOpportunityAnalysisRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.marketOpportunityAnalysisId === null || requestParameters.marketOpportunityAnalysisId === undefined) {
                throw new runtime.RequiredError('marketOpportunityAnalysisId', 'Required parameter requestParameters.marketOpportunityAnalysisId was null or undefined when calling deleteMarketOpportunityAnalysis.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("bearer", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/market_opportunity_analyses/{market_opportunity_analysis_id}`.replace(`{${"market_opportunity_analysis_id"}}`, encodeURIComponent(String(requestParameters.marketOpportunityAnalysisId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Delete a specific market opportunity analysis
     */
    deleteMarketOpportunityAnalysis(marketOpportunityAnalysisId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteMarketOpportunityAnalysisRaw({ marketOpportunityAnalysisId: marketOpportunityAnalysisId });
        });
    }
    /**
     * Trigger a rerun for this resource.
     * Trigger a rerun for this resource.
     */
    forceUpdateMarketOpportunityAnalysisRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.marketOpportunityAnalysisId === null || requestParameters.marketOpportunityAnalysisId === undefined) {
                throw new runtime.RequiredError('marketOpportunityAnalysisId', 'Required parameter requestParameters.marketOpportunityAnalysisId was null or undefined when calling forceUpdateMarketOpportunityAnalysis.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("bearer", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/market_opportunity_analyses/{market_opportunity_analysis_id}/force_update`.replace(`{${"market_opportunity_analysis_id"}}`, encodeURIComponent(String(requestParameters.marketOpportunityAnalysisId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Trigger a rerun for this resource.
     * Trigger a rerun for this resource.
     */
    forceUpdateMarketOpportunityAnalysis(marketOpportunityAnalysisId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.forceUpdateMarketOpportunityAnalysisRaw({ marketOpportunityAnalysisId: marketOpportunityAnalysisId });
        });
    }
    /**
     * Get all market opportunity analyses
     */
    getMarketOpportunityAnalysesRaw() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("bearer", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/market_opportunity_analyses`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * Get all market opportunity analyses
     */
    getMarketOpportunityAnalyses() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getMarketOpportunityAnalysesRaw();
            return yield response.value();
        });
    }
    /**
     * Get a specific market opportunity analysis
     */
    getMarketOpportunityAnalysisRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.marketOpportunityAnalysisId === null || requestParameters.marketOpportunityAnalysisId === undefined) {
                throw new runtime.RequiredError('marketOpportunityAnalysisId', 'Required parameter requestParameters.marketOpportunityAnalysisId was null or undefined when calling getMarketOpportunityAnalysis.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("bearer", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/market_opportunity_analyses/{market_opportunity_analysis_id}`.replace(`{${"market_opportunity_analysis_id"}}`, encodeURIComponent(String(requestParameters.marketOpportunityAnalysisId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * Get a specific market opportunity analysis
     */
    getMarketOpportunityAnalysis(marketOpportunityAnalysisId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getMarketOpportunityAnalysisRaw({ marketOpportunityAnalysisId: marketOpportunityAnalysisId });
            return yield response.value();
        });
    }
    /**
     * Unarchive a specific market opportunity analysis
     */
    unarchiveMarketOpportunityAnalysisRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.marketOpportunityAnalysisId === null || requestParameters.marketOpportunityAnalysisId === undefined) {
                throw new runtime.RequiredError('marketOpportunityAnalysisId', 'Required parameter requestParameters.marketOpportunityAnalysisId was null or undefined when calling unarchiveMarketOpportunityAnalysis.');
            }
            if (requestParameters.archiveConfig === null || requestParameters.archiveConfig === undefined) {
                throw new runtime.RequiredError('archiveConfig', 'Required parameter requestParameters.archiveConfig was null or undefined when calling unarchiveMarketOpportunityAnalysis.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("bearer", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/market_opportunity_analyses/{market_opportunity_analysis_id}/unarchive`.replace(`{${"market_opportunity_analysis_id"}}`, encodeURIComponent(String(requestParameters.marketOpportunityAnalysisId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.archiveConfig,
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Unarchive a specific market opportunity analysis
     */
    unarchiveMarketOpportunityAnalysis(marketOpportunityAnalysisId, archiveConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.unarchiveMarketOpportunityAnalysisRaw({ marketOpportunityAnalysisId: marketOpportunityAnalysisId, archiveConfig: archiveConfig });
        });
    }
    /**
     * Update a specific market opportunity analysis
     */
    updateMarketOpportunityAnalysisRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.marketOpportunityAnalysisId === null || requestParameters.marketOpportunityAnalysisId === undefined) {
                throw new runtime.RequiredError('marketOpportunityAnalysisId', 'Required parameter requestParameters.marketOpportunityAnalysisId was null or undefined when calling updateMarketOpportunityAnalysis.');
            }
            if (requestParameters.marketOpportunityAnalysisFields === null || requestParameters.marketOpportunityAnalysisFields === undefined) {
                throw new runtime.RequiredError('marketOpportunityAnalysisFields', 'Required parameter requestParameters.marketOpportunityAnalysisFields was null or undefined when calling updateMarketOpportunityAnalysis.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("bearer", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/market_opportunity_analyses/{market_opportunity_analysis_id}`.replace(`{${"market_opportunity_analysis_id"}}`, encodeURIComponent(String(requestParameters.marketOpportunityAnalysisId))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: requestParameters.marketOpportunityAnalysisFields,
            });
            return new runtime.JSONApiResponse(response);
        });
    }
    /**
     * Update a specific market opportunity analysis
     */
    updateMarketOpportunityAnalysis(marketOpportunityAnalysisId, marketOpportunityAnalysisFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateMarketOpportunityAnalysisRaw({ marketOpportunityAnalysisId: marketOpportunityAnalysisId, marketOpportunityAnalysisFields: marketOpportunityAnalysisFields });
            return yield response.value();
        });
    }
}
exports.MarketOpportunityAnalysesApi = MarketOpportunityAnalysesApi;
