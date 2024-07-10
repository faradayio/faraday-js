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
exports.CohortsApi = void 0;
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class CohortsApi extends runtime.BaseAPI {
    /**
     * Archive a cohort
     * Archive a cohort
     */
    archiveCohortRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.cohortId === null || requestParameters.cohortId === undefined) {
                throw new runtime.RequiredError('cohortId', 'Required parameter requestParameters.cohortId was null or undefined when calling archiveCohort.');
            }
            if (requestParameters.archiveConfig === null || requestParameters.archiveConfig === undefined) {
                throw new runtime.RequiredError('archiveConfig', 'Required parameter requestParameters.archiveConfig was null or undefined when calling archiveCohort.');
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
                path: `/cohorts/{cohort_id}/archive`.replace(`{${"cohort_id"}}`, encodeURIComponent(String(requestParameters.cohortId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.ArchiveConfigToJSON(requestParameters.archiveConfig),
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Archive a cohort
     * Archive a cohort
     */
    archiveCohort(cohortId, archiveConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.archiveCohortRaw({ cohortId: cohortId, archiveConfig: archiveConfig });
        });
    }
    /**
     * Add a new cohort (defined as people who have made qualifying emissions of certain events)
     * Create cohort
     */
    createCohortRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.cohortFields === null || requestParameters.cohortFields === undefined) {
                throw new runtime.RequiredError('cohortFields', 'Required parameter requestParameters.cohortFields was null or undefined when calling createCohort.');
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
                path: `/cohorts`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.CohortPostToJSON(requestParameters.cohortFields),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.CohortFromJSON(jsonValue));
        });
    }
    /**
     * Add a new cohort (defined as people who have made qualifying emissions of certain events)
     * Create cohort
     */
    createCohort(cohortFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createCohortRaw({ cohortFields: cohortFields });
            return yield response.value();
        });
    }
    /**
     * Delete a cohort
     */
    deleteCohortRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.cohortId === null || requestParameters.cohortId === undefined) {
                throw new runtime.RequiredError('cohortId', 'Required parameter requestParameters.cohortId was null or undefined when calling deleteCohort.');
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
                path: `/cohorts/{cohort_id}`.replace(`{${"cohort_id"}}`, encodeURIComponent(String(requestParameters.cohortId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Delete a cohort
     */
    deleteCohort(cohortId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteCohortRaw({ cohortId: cohortId });
        });
    }
    /**
     * Get details on a specific cohort
     * Retrieve a cohort
     */
    getCohortRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.cohortId === null || requestParameters.cohortId === undefined) {
                throw new runtime.RequiredError('cohortId', 'Required parameter requestParameters.cohortId was null or undefined when calling getCohort.');
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
                path: `/cohorts/{cohort_id}`.replace(`{${"cohort_id"}}`, encodeURIComponent(String(requestParameters.cohortId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.CohortFromJSON(jsonValue));
        });
    }
    /**
     * Get details on a specific cohort
     * Retrieve a cohort
     */
    getCohort(cohortId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCohortRaw({ cohortId: cohortId });
            return yield response.value();
        });
    }
    /**
     * Get the cohort membership counts over time.
     */
    getCohortAnalysisMembershipRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.cohortId === null || requestParameters.cohortId === undefined) {
                throw new runtime.RequiredError('cohortId', 'Required parameter requestParameters.cohortId was null or undefined when calling getCohortAnalysisMembership.');
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
                path: `/cohorts/{cohort_id}/analysis/membership`.replace(`{${"cohort_id"}}`, encodeURIComponent(String(requestParameters.cohortId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.CohortAnalysisMembershipFromJSON(jsonValue));
        });
    }
    /**
     * Get the cohort membership counts over time.
     */
    getCohortAnalysisMembership(cohortId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCohortAnalysisMembershipRaw({ cohortId: cohortId });
            return yield response.value();
        });
    }
    /**
     * Get a list of cohorts defined on the account
     * List cohorts
     */
    getCohortsRaw() {
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
                path: `/cohorts`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.CohortFromJSON));
        });
    }
    /**
     * Get a list of cohorts defined on the account
     * List cohorts
     */
    getCohorts() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCohortsRaw();
            return yield response.value();
        });
    }
    /**
     * Unarchive a cohort
     * Unarchive a cohort
     */
    unarchiveCohortRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.cohortId === null || requestParameters.cohortId === undefined) {
                throw new runtime.RequiredError('cohortId', 'Required parameter requestParameters.cohortId was null or undefined when calling unarchiveCohort.');
            }
            if (requestParameters.archiveConfig === null || requestParameters.archiveConfig === undefined) {
                throw new runtime.RequiredError('archiveConfig', 'Required parameter requestParameters.archiveConfig was null or undefined when calling unarchiveCohort.');
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
                path: `/cohorts/{cohort_id}/unarchive`.replace(`{${"cohort_id"}}`, encodeURIComponent(String(requestParameters.cohortId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.ArchiveConfigToJSON(requestParameters.archiveConfig),
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Unarchive a cohort
     * Unarchive a cohort
     */
    unarchiveCohort(cohortId, archiveConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.unarchiveCohortRaw({ cohortId: cohortId, archiveConfig: archiveConfig });
        });
    }
    /**
     * Edit configuration of a cohort
     * Edit a cohort
     */
    updateCohortRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.cohortId === null || requestParameters.cohortId === undefined) {
                throw new runtime.RequiredError('cohortId', 'Required parameter requestParameters.cohortId was null or undefined when calling updateCohort.');
            }
            if (requestParameters.cohortFields === null || requestParameters.cohortFields === undefined) {
                throw new runtime.RequiredError('cohortFields', 'Required parameter requestParameters.cohortFields was null or undefined when calling updateCohort.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json+merge-patch';
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("bearer", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/cohorts/{cohort_id}`.replace(`{${"cohort_id"}}`, encodeURIComponent(String(requestParameters.cohortId))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.CohortMergePatchToJSON(requestParameters.cohortFields),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.CohortFromJSON(jsonValue));
        });
    }
    /**
     * Edit configuration of a cohort
     * Edit a cohort
     */
    updateCohort(cohortId, cohortFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateCohortRaw({ cohortId: cohortId, cohortFields: cohortFields });
            return yield response.value();
        });
    }
}
exports.CohortsApi = CohortsApi;
