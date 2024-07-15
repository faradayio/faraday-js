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
exports.DatasetsApi = void 0;
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class DatasetsApi extends runtime.BaseAPI {
    /**
     * Archive a dataset
     * Archive a dataset
     */
    archiveDatasetRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.datasetId === null || requestParameters.datasetId === undefined) {
                throw new runtime.RequiredError('datasetId', 'Required parameter requestParameters.datasetId was null or undefined when calling archiveDataset.');
            }
            if (requestParameters.archiveConfig === null || requestParameters.archiveConfig === undefined) {
                throw new runtime.RequiredError('archiveConfig', 'Required parameter requestParameters.archiveConfig was null or undefined when calling archiveDataset.');
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
                path: `/datasets/{dataset_id}/archive`.replace(`{${"dataset_id"}}`, encodeURIComponent(String(requestParameters.datasetId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.ArchiveConfigToJSON(requestParameters.archiveConfig),
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Archive a dataset
     * Archive a dataset
     */
    archiveDataset(datasetId, archiveConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.archiveDatasetRaw({ datasetId: datasetId, archiveConfig: archiveConfig });
        });
    }
    /**
     * Create a new dataset
     * Create dataset
     */
    createDatasetRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.datasetFields === null || requestParameters.datasetFields === undefined) {
                throw new runtime.RequiredError('datasetFields', 'Required parameter requestParameters.datasetFields was null or undefined when calling createDataset.');
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
                path: `/datasets`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.DatasetPostToJSON(requestParameters.datasetFields),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.DatasetFromJSON(jsonValue));
        });
    }
    /**
     * Create a new dataset
     * Create dataset
     */
    createDataset(datasetFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createDatasetRaw({ datasetFields: datasetFields });
            return yield response.value();
        });
    }
    /**
     * Delete a dataset
     */
    deleteDatasetRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.datasetId === null || requestParameters.datasetId === undefined) {
                throw new runtime.RequiredError('datasetId', 'Required parameter requestParameters.datasetId was null or undefined when calling deleteDataset.');
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
                path: `/datasets/{dataset_id}`.replace(`{${"dataset_id"}}`, encodeURIComponent(String(requestParameters.datasetId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Delete a dataset
     */
    deleteDataset(datasetId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteDatasetRaw({ datasetId: datasetId });
        });
    }
    /**
     * Retrieve details on a specific dataset
     * Retrieve a dataset
     */
    getDatasetRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.datasetId === null || requestParameters.datasetId === undefined) {
                throw new runtime.RequiredError('datasetId', 'Required parameter requestParameters.datasetId was null or undefined when calling getDataset.');
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
                path: `/datasets/{dataset_id}`.replace(`{${"dataset_id"}}`, encodeURIComponent(String(requestParameters.datasetId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.DatasetFromJSON(jsonValue));
        });
    }
    /**
     * Retrieve details on a specific dataset
     * Retrieve a dataset
     */
    getDataset(datasetId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getDatasetRaw({ datasetId: datasetId });
            return yield response.value();
        });
    }
    /**
     * Get a list of the datasets available in the developer’s account
     * List datasets
     */
    getDatasetsRaw() {
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
                path: `/datasets`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.DatasetFromJSON));
        });
    }
    /**
     * Get a list of the datasets available in the developer’s account
     * List datasets
     */
    getDatasets() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getDatasetsRaw();
            return yield response.value();
        });
    }
    /**
     * Unarchive a dataset
     * Unarchive a dataset
     */
    unarchiveDatasetRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.datasetId === null || requestParameters.datasetId === undefined) {
                throw new runtime.RequiredError('datasetId', 'Required parameter requestParameters.datasetId was null or undefined when calling unarchiveDataset.');
            }
            if (requestParameters.archiveConfig === null || requestParameters.archiveConfig === undefined) {
                throw new runtime.RequiredError('archiveConfig', 'Required parameter requestParameters.archiveConfig was null or undefined when calling unarchiveDataset.');
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
                path: `/datasets/{dataset_id}/unarchive`.replace(`{${"dataset_id"}}`, encodeURIComponent(String(requestParameters.datasetId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.ArchiveConfigToJSON(requestParameters.archiveConfig),
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Unarchive a dataset
     * Unarchive a dataset
     */
    unarchiveDataset(datasetId, archiveConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.unarchiveDatasetRaw({ datasetId: datasetId, archiveConfig: archiveConfig });
        });
    }
    /**
     * Update an existing dataset
     * Update dataset
     */
    updateDatasetRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.datasetId === null || requestParameters.datasetId === undefined) {
                throw new runtime.RequiredError('datasetId', 'Required parameter requestParameters.datasetId was null or undefined when calling updateDataset.');
            }
            if (requestParameters.datasetFields === null || requestParameters.datasetFields === undefined) {
                throw new runtime.RequiredError('datasetFields', 'Required parameter requestParameters.datasetFields was null or undefined when calling updateDataset.');
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
                path: `/datasets/{dataset_id}`.replace(`{${"dataset_id"}}`, encodeURIComponent(String(requestParameters.datasetId))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.DatasetMergePatchToJSON(requestParameters.datasetFields),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.DatasetFromJSON(jsonValue));
        });
    }
    /**
     * Update an existing dataset
     * Update dataset
     */
    updateDataset(datasetId, datasetFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateDatasetRaw({ datasetId: datasetId, datasetFields: datasetFields });
            return yield response.value();
        });
    }
}
exports.DatasetsApi = DatasetsApi;
