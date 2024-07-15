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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraitToJSON = exports.TraitFromJSONTyped = exports.TraitFromJSON = void 0;
const runtime_1 = require("../runtime");
const PrimitiveDataType_1 = require("./PrimitiveDataType");
const ResourceStatus_1 = require("./ResourceStatus");
const ResourceType_1 = require("./ResourceType");
const TraitCategory_1 = require("./TraitCategory");
const TraitInputFromDatasets_1 = require("./TraitInputFromDatasets");
const TraitStatisticalType_1 = require("./TraitStatisticalType");
function TraitFromJSON(json) {
    return TraitFromJSONTyped(json, false);
}
exports.TraitFromJSON = TraitFromJSON;
function TraitFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'archived_at': !runtime_1.exists(json, 'archived_at') ? undefined : (new Date(json['archived_at'])),
        'breaks': !runtime_1.exists(json, 'breaks') ? undefined : json['breaks'],
        'categories': !runtime_1.exists(json, 'categories') ? undefined : json['categories'],
        'category': !runtime_1.exists(json, 'category') ? undefined : TraitCategory_1.TraitCategoryFromJSON(json['category']),
        'created_at': (new Date(json['created_at'])),
        'description': !runtime_1.exists(json, 'description') ? undefined : json['description'],
        'emitted_by_datasets': !runtime_1.exists(json, 'emitted_by_datasets') ? undefined : (json['emitted_by_datasets'].map(TraitInputFromDatasets_1.TraitInputFromDatasetsFromJSON)),
        'id': json['id'],
        'literate': !runtime_1.exists(json, 'literate') ? undefined : json['literate'],
        'lookup_table': !runtime_1.exists(json, 'lookup_table') ? undefined : json['lookup_table'],
        'name': json['name'],
        'resource_type': ResourceType_1.ResourceTypeFromJSON(json['resource_type']),
        'statistical_type': !runtime_1.exists(json, 'statistical_type') ? undefined : TraitStatisticalType_1.TraitStatisticalTypeFromJSON(json['statistical_type']),
        'status': ResourceStatus_1.ResourceStatusFromJSON(json['status']),
        'type': !runtime_1.exists(json, 'type') ? undefined : PrimitiveDataType_1.PrimitiveDataTypeFromJSON(json['type']),
        'unit': !runtime_1.exists(json, 'unit') ? undefined : json['unit'],
        'updated_at': (new Date(json['updated_at'])),
    };
}
exports.TraitFromJSONTyped = TraitFromJSONTyped;
function TraitToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'archived_at': value.archived_at === undefined ? undefined : (value.archived_at.toISOString()),
        'breaks': value.breaks,
        'categories': value.categories,
        'category': TraitCategory_1.TraitCategoryToJSON(value.category),
        'created_at': (value.created_at.toISOString()),
        'description': value.description,
        'emitted_by_datasets': value.emitted_by_datasets === undefined ? undefined : (value.emitted_by_datasets.map(TraitInputFromDatasets_1.TraitInputFromDatasetsToJSON)),
        'id': value.id,
        'literate': value.literate,
        'lookup_table': value.lookup_table,
        'name': value.name,
        'resource_type': ResourceType_1.ResourceTypeToJSON(value.resource_type),
        'statistical_type': TraitStatisticalType_1.TraitStatisticalTypeToJSON(value.statistical_type),
        'status': ResourceStatus_1.ResourceStatusToJSON(value.status),
        'type': PrimitiveDataType_1.PrimitiveDataTypeToJSON(value.type),
        'unit': value.unit,
        'updated_at': (value.updated_at.toISOString()),
    };
}
exports.TraitToJSON = TraitToJSON;
