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
exports.TargetsApi = void 0;
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class TargetsApi extends runtime.BaseAPI {
    /**
     * Add a new target.  Targets are configuration for exporting data from Faraday, possibly to an external environment (with <a href=\"https://faraday.ai/developers/reference/createconnection\">/connections</a>).  There are three types of targets: <table> <thead> <tr><th>Target type</th><th>Description</th><th>API requirement</th></tr> </thead> <tbody> <tr><td><strong>Publication</strong></td><td>Faraday <em>hosts</em> your predictions for convenient retrieval as needed.</td><td>Specify a <code>type</code> of <code>hosted_csv</code> in <code>options</code>. Omit <code>connection_id</code>.</td></tr> <tr><td><strong>Replication</strong></td><td>Faraday copies your predictions to systems <em>you</em> control. You may then push them to third parties like Facebook, Google Ads, etc.</td><td>Specify a valid <code>connection_id</code> and the corresponding <code>type</code> of the connection in <code>options</code>.</td></tr> <tr><td><strong>Managed</strong></td><td>Faraday manages a push to third parties like Facebook, Google Ads, and more.</td><td>Must be on an enterprise plan. Contact Customer Success to set up.</td></tr> </tbody> </table>
     * Create target
     */
    createTargetRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.targetFields === null || requestParameters.targetFields === undefined) {
                throw new runtime.RequiredError('targetFields', 'Required parameter requestParameters.targetFields was null or undefined when calling createTarget.');
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
                path: `/targets`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.TargetPostToJSON(requestParameters.targetFields),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.TargetFromJSON(jsonValue));
        });
    }
    /**
     * Add a new target.  Targets are configuration for exporting data from Faraday, possibly to an external environment (with <a href=\"https://faraday.ai/developers/reference/createconnection\">/connections</a>).  There are three types of targets: <table> <thead> <tr><th>Target type</th><th>Description</th><th>API requirement</th></tr> </thead> <tbody> <tr><td><strong>Publication</strong></td><td>Faraday <em>hosts</em> your predictions for convenient retrieval as needed.</td><td>Specify a <code>type</code> of <code>hosted_csv</code> in <code>options</code>. Omit <code>connection_id</code>.</td></tr> <tr><td><strong>Replication</strong></td><td>Faraday copies your predictions to systems <em>you</em> control. You may then push them to third parties like Facebook, Google Ads, etc.</td><td>Specify a valid <code>connection_id</code> and the corresponding <code>type</code> of the connection in <code>options</code>.</td></tr> <tr><td><strong>Managed</strong></td><td>Faraday manages a push to third parties like Facebook, Google Ads, and more.</td><td>Must be on an enterprise plan. Contact Customer Success to set up.</td></tr> </tbody> </table>
     * Create target
     */
    createTarget(targetFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createTargetRaw({ targetFields: targetFields });
            return yield response.value();
        });
    }
    /**
     * Trigger a preview delivery (first 1000 results) of a target
     * Start a preview delivery
     */
    createTargetPreviewRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.targetId === null || requestParameters.targetId === undefined) {
                throw new runtime.RequiredError('targetId', 'Required parameter requestParameters.targetId was null or undefined when calling createTargetPreview.');
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
                path: `/targets/{target_id}/preview`.replace(`{${"target_id"}}`, encodeURIComponent(String(requestParameters.targetId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.InlineResponse200FromJSON(jsonValue));
        });
    }
    /**
     * Trigger a preview delivery (first 1000 results) of a target
     * Start a preview delivery
     */
    createTargetPreview(targetId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createTargetPreviewRaw({ targetId: targetId });
            return yield response.value();
        });
    }
    /**
     * Delete a target
     * Delete a target
     */
    deleteTargetRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.targetId === null || requestParameters.targetId === undefined) {
                throw new runtime.RequiredError('targetId', 'Required parameter requestParameters.targetId was null or undefined when calling deleteTarget.');
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
                path: `/targets/{target_id}`.replace(`{${"target_id"}}`, encodeURIComponent(String(requestParameters.targetId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Delete a target
     * Delete a target
     */
    deleteTarget(targetId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteTargetRaw({ targetId: targetId });
        });
    }
    /**
     * Download the default output of a target
     */
    downloadTargetRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.targetId === null || requestParameters.targetId === undefined) {
                throw new runtime.RequiredError('targetId', 'Required parameter requestParameters.targetId was null or undefined when calling downloadTarget.');
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
                path: `/targets/{target_id}/download.csv`.replace(`{${"target_id"}}`, encodeURIComponent(String(requestParameters.targetId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.TextApiResponse(response);
        });
    }
    /**
     * Download the default output of a target
     */
    downloadTarget(targetId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.downloadTargetRaw({ targetId: targetId });
            return yield response.value();
        });
    }
    /**
     * Get details on a specific target
     * Retrieve a target
     */
    getTargetRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.targetId === null || requestParameters.targetId === undefined) {
                throw new runtime.RequiredError('targetId', 'Required parameter requestParameters.targetId was null or undefined when calling getTarget.');
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
                path: `/targets/{target_id}`.replace(`{${"target_id"}}`, encodeURIComponent(String(requestParameters.targetId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.TargetFromJSON(jsonValue));
        });
    }
    /**
     * Get details on a specific target
     * Retrieve a target
     */
    getTarget(targetId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getTargetRaw({ targetId: targetId });
            return yield response.value();
        });
    }
    /**
     * Get a list of targets defined on the account
     * List targets
     */
    getTargetsRaw() {
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
                path: `/targets`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.TargetFromJSON));
        });
    }
    /**
     * Get a list of targets defined on the account
     * List targets
     */
    getTargets() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getTargetsRaw();
            return yield response.value();
        });
    }
    /**
     * Use either PII or a spatial aggregate to retrieve the payload of a Hosted API target.
     * Perform a lookup on the target, if its type is Hosted API.
     */
    lookupOnTargetRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.targetId === null || requestParameters.targetId === undefined) {
                throw new runtime.RequiredError('targetId', 'Required parameter requestParameters.targetId was null or undefined when calling lookupOnTarget.');
            }
            if (requestParameters.targetLookupRequest === null || requestParameters.targetLookupRequest === undefined) {
                throw new runtime.RequiredError('targetLookupRequest', 'Required parameter requestParameters.targetLookupRequest was null or undefined when calling lookupOnTarget.');
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
                path: `/targets/{target_id}/lookup`.replace(`{${"target_id"}}`, encodeURIComponent(String(requestParameters.targetId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.TargetLookupRequestToJSON(requestParameters.targetLookupRequest),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.TargetLookupResponseFromJSON(jsonValue));
        });
    }
    /**
     * Use either PII or a spatial aggregate to retrieve the payload of a Hosted API target.
     * Perform a lookup on the target, if its type is Hosted API.
     */
    lookupOnTarget(targetId, targetLookupRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.lookupOnTargetRaw({ targetId: targetId, targetLookupRequest: targetLookupRequest });
            return yield response.value();
        });
    }
    /**
     * Update the configuration of a target.
     * Update a target
     */
    updateTargetRaw(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.targetId === null || requestParameters.targetId === undefined) {
                throw new runtime.RequiredError('targetId', 'Required parameter requestParameters.targetId was null or undefined when calling updateTarget.');
            }
            if (requestParameters.targetMergePatch === null || requestParameters.targetMergePatch === undefined) {
                throw new runtime.RequiredError('targetMergePatch', 'Required parameter requestParameters.targetMergePatch was null or undefined when calling updateTarget.');
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
                path: `/targets/{target_id}`.replace(`{${"target_id"}}`, encodeURIComponent(String(requestParameters.targetId))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: models_1.TargetMergePatchToJSON(requestParameters.targetMergePatch),
            });
            return new runtime.JSONApiResponse(response, (jsonValue) => models_1.TargetFromJSON(jsonValue));
        });
    }
    /**
     * Update the configuration of a target.
     * Update a target
     */
    updateTarget(targetId, targetMergePatch) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateTargetRaw({ targetId: targetId, targetMergePatch: targetMergePatch });
            return yield response.value();
        });
    }
}
exports.TargetsApi = TargetsApi;