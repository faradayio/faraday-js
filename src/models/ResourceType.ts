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

/**
 * The type of a resource which is available via the REST SDK.
 * @export
 * @enum {string}
 */
export enum ResourceType {
    Cohorts = 'cohorts',
    Connections = 'connections',
    Datasets = 'datasets',
    Accounts = 'accounts',
    Outcomes = 'outcomes',
    PersonaSets = 'persona_sets',
    Recommenders = 'recommenders',
    Scopes = 'scopes',
    Streams = 'streams',
    Targets = 'targets',
    Traits = 'traits',
    Places = 'places'
}

export function ResourceTypeFromJSON(json: any): ResourceType {
    return ResourceTypeFromJSONTyped(json, false);
}

export function ResourceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceType {
    return json as ResourceType;
}

export function ResourceTypeToJSON(value?: ResourceType | null): any {
    return value as any;
}

