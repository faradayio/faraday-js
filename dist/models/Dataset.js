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
exports.DatasetToJSON = exports.DatasetFromJSONTyped = exports.DatasetFromJSON = exports.DatasetPrivacyEnum = void 0;
const runtime_1 = require("../runtime");
const DatasetColumn_1 = require("./DatasetColumn");
const DatasetEnrichments_1 = require("./DatasetEnrichments");
const DatasetOptions_1 = require("./DatasetOptions");
const DatasetOutputAllColumnsAsTraits_1 = require("./DatasetOutputAllColumnsAsTraits");
const DatasetUpdateHistory_1 = require("./DatasetUpdateHistory");
const IdentitySets_1 = require("./IdentitySets");
const OutputToStreams_1 = require("./OutputToStreams");
const OutputToTraits_1 = require("./OutputToTraits");
const ResourceStatus_1 = require("./ResourceStatus");
/**
* @export
* @enum {string}
*/
var DatasetPrivacyEnum;
(function (DatasetPrivacyEnum) {
    DatasetPrivacyEnum["Suppress"] = "suppress";
    DatasetPrivacyEnum["Delete"] = "delete";
})(DatasetPrivacyEnum = exports.DatasetPrivacyEnum || (exports.DatasetPrivacyEnum = {}));
function DatasetFromJSON(json) {
    return DatasetFromJSONTyped(json, false);
}
exports.DatasetFromJSON = DatasetFromJSON;
function DatasetFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'connection_id': !runtime_1.exists(json, 'connection_id') ? undefined : json['connection_id'],
        'created_at': (new Date(json['created_at'])),
        'detected_columns': !runtime_1.exists(json, 'detected_columns') ? undefined : (json['detected_columns'].map(DatasetColumn_1.DatasetColumnFromJSON)),
        'enrichment': !runtime_1.exists(json, 'enrichment') ? undefined : DatasetEnrichments_1.DatasetEnrichmentsFromJSON(json['enrichment']),
        'id': json['id'],
        'identified_count': !runtime_1.exists(json, 'identified_count') ? undefined : json['identified_count'],
        'identity_sets': IdentitySets_1.IdentitySetsFromJSON(json['identity_sets']),
        'incremental_column': !runtime_1.exists(json, 'incremental_column') ? undefined : json['incremental_column'],
        'last_read_input_at': !runtime_1.exists(json, 'last_read_input_at') ? undefined : (new Date(json['last_read_input_at'])),
        'last_updated_config_at': !runtime_1.exists(json, 'last_updated_config_at') ? undefined : (new Date(json['last_updated_config_at'])),
        'last_updated_output_at': !runtime_1.exists(json, 'last_updated_output_at') ? undefined : (new Date(json['last_updated_output_at'])),
        'managed': !runtime_1.exists(json, 'managed') ? undefined : json['managed'],
        'matched_count': !runtime_1.exists(json, 'matched_count') ? undefined : json['matched_count'],
        'name': json['name'],
        'options': DatasetOptions_1.DatasetOptionsFromJSON(json['options']),
        'output_all_columns_as_traits': !runtime_1.exists(json, 'output_all_columns_as_traits') ? undefined : DatasetOutputAllColumnsAsTraits_1.DatasetOutputAllColumnsAsTraitsFromJSON(json['output_all_columns_as_traits']),
        'output_to_streams': !runtime_1.exists(json, 'output_to_streams') ? undefined : OutputToStreams_1.OutputToStreamsFromJSON(json['output_to_streams']),
        'output_to_traits': !runtime_1.exists(json, 'output_to_traits') ? undefined : OutputToTraits_1.OutputToTraitsFromJSON(json['output_to_traits']),
        'preview': !runtime_1.exists(json, 'preview') ? undefined : json['preview'],
        'privacy': !runtime_1.exists(json, 'privacy') ? undefined : json['privacy'],
        'reference_key_column': !runtime_1.exists(json, 'reference_key_column') ? undefined : json['reference_key_column'],
        'reference_key_columns': !runtime_1.exists(json, 'reference_key_columns') ? undefined : json['reference_key_columns'],
        'resource_type': json['resource_type'],
        'row_count': !runtime_1.exists(json, 'row_count') ? undefined : json['row_count'],
        'sample': !runtime_1.exists(json, 'sample') ? undefined : json['sample'],
        'status': ResourceStatus_1.ResourceStatusFromJSON(json['status']),
        'status_changed_at': !runtime_1.exists(json, 'status_changed_at') ? undefined : (new Date(json['status_changed_at'])),
        'status_error': !runtime_1.exists(json, 'status_error') ? undefined : json['status_error'],
        'updated_at': (new Date(json['updated_at'])),
        'updates': !runtime_1.exists(json, 'updates') ? undefined : (json['updates'].map(DatasetUpdateHistory_1.DatasetUpdateHistoryFromJSON)),
        'upsert_columns': !runtime_1.exists(json, 'upsert_columns') ? undefined : json['upsert_columns'],
    };
}
exports.DatasetFromJSONTyped = DatasetFromJSONTyped;
function DatasetToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'connection_id': value.connection_id,
        'created_at': (value.created_at.toISOString()),
        'detected_columns': value.detected_columns === undefined ? undefined : (value.detected_columns.map(DatasetColumn_1.DatasetColumnToJSON)),
        'enrichment': DatasetEnrichments_1.DatasetEnrichmentsToJSON(value.enrichment),
        'id': value.id,
        'identified_count': value.identified_count,
        'identity_sets': IdentitySets_1.IdentitySetsToJSON(value.identity_sets),
        'incremental_column': value.incremental_column,
        'last_read_input_at': value.last_read_input_at === undefined ? undefined : (value.last_read_input_at.toISOString()),
        'last_updated_config_at': value.last_updated_config_at === undefined ? undefined : (value.last_updated_config_at.toISOString()),
        'last_updated_output_at': value.last_updated_output_at === undefined ? undefined : (value.last_updated_output_at.toISOString()),
        'managed': value.managed,
        'matched_count': value.matched_count,
        'name': value.name,
        'options': DatasetOptions_1.DatasetOptionsToJSON(value.options),
        'output_all_columns_as_traits': DatasetOutputAllColumnsAsTraits_1.DatasetOutputAllColumnsAsTraitsToJSON(value.output_all_columns_as_traits),
        'output_to_streams': OutputToStreams_1.OutputToStreamsToJSON(value.output_to_streams),
        'output_to_traits': OutputToTraits_1.OutputToTraitsToJSON(value.output_to_traits),
        'preview': value.preview,
        'privacy': value.privacy,
        'reference_key_column': value.reference_key_column,
        'reference_key_columns': value.reference_key_columns,
        'resource_type': value.resource_type,
        'row_count': value.row_count,
        'sample': value.sample,
        'status': ResourceStatus_1.ResourceStatusToJSON(value.status),
        'status_changed_at': value.status_changed_at === undefined ? undefined : (value.status_changed_at.toISOString()),
        'status_error': value.status_error,
        'updated_at': (value.updated_at.toISOString()),
        'updates': value.updates === undefined ? undefined : (value.updates.map(DatasetUpdateHistory_1.DatasetUpdateHistoryToJSON)),
        'upsert_columns': value.upsert_columns,
    };
}
exports.DatasetToJSON = DatasetToJSON;
