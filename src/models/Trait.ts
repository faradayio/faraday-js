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

import { exists, mapValues } from '../runtime';
import {
    PrimitiveDataType,
    PrimitiveDataTypeFromJSON,
    PrimitiveDataTypeFromJSONTyped,
    PrimitiveDataTypeToJSON,
} from './PrimitiveDataType';
import {
    TraitCategory,
    TraitCategoryFromJSON,
    TraitCategoryFromJSONTyped,
    TraitCategoryToJSON,
} from './TraitCategory';
import {
    TraitInputFromDatasets,
    TraitInputFromDatasetsFromJSON,
    TraitInputFromDatasetsFromJSONTyped,
    TraitInputFromDatasetsToJSON,
} from './TraitInputFromDatasets';
import {
    TraitStatisticalType,
    TraitStatisticalTypeFromJSON,
    TraitStatisticalTypeFromJSONTyped,
    TraitStatisticalTypeToJSON,
} from './TraitStatisticalType';

/**
 * A fact about a person. 
 * 
 * The fact could be provided by Faraday, or alternatively could be defined by the client using data they have uploaded to Faraday.
 * 
 * These traits can be used by name in any of modeling, analysis, and reporting.
 * @export
 * @interface Trait
 */
export interface Trait {
    /**
     * For continuous data types, list of reasonable cutoff values.
     * @type {Array<number>}
     * @memberof Trait
     */
    breaks?: Array<number>;
    /**
     * For STRING type, list of allowed values.
     * @type {Array<string>}
     * @memberof Trait
     */
    categories?: Array<string>;
    /**
     * 
     * @type {TraitCategory}
     * @memberof Trait
     */
    category?: TraitCategory;
    /**
     * When this resource was created.
     * @type {Date}
     * @memberof Trait
     */
    created_at: Date;
    /**
     * Information about this field.
     * @type {string}
     * @memberof Trait
     */
    description?: string;
    /**
     * 
     * @type {Array<TraitInputFromDatasets>}
     * @memberof Trait
     */
    emitted_by_datasets?: Array<TraitInputFromDatasets>;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof Trait
     */
    id: string;
    /**
     * A more human-consumable version of the name of this field.
     * @type {string}
     * @memberof Trait
     */
    literate?: string;
    /**
     * A mapping of the input values used in modeling, to how they should be displayed in reports.
     * @type {object}
     * @memberof Trait
     */
    lookup_table?: object;
    /**
     * How to refer to this Trait in other API calls to Faraday.
     * @type {string}
     * @memberof Trait
     */
    name: string;
    /**
     * 
     * @type {TraitStatisticalType}
     * @memberof Trait
     */
    statistical_type?: TraitStatisticalType;
    /**
     * 
     * @type {PrimitiveDataType}
     * @memberof Trait
     */
    type?: PrimitiveDataType;
    /**
     * For numeric types, in what units is the data stored.
     * @type {string}
     * @memberof Trait
     */
    unit?: string;
    /**
     * When this resource was last updated.
     * @type {Date}
     * @memberof Trait
     */
    updated_at: Date;
}

export function TraitFromJSON(json: any): Trait {
    return TraitFromJSONTyped(json, false);
}

export function TraitFromJSONTyped(json: any, ignoreDiscriminator: boolean): Trait {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'breaks': !exists(json, 'breaks') ? undefined : json['breaks'],
        'categories': !exists(json, 'categories') ? undefined : json['categories'],
        'category': !exists(json, 'category') ? undefined : TraitCategoryFromJSON(json['category']),
        'created_at': (new Date(json['created_at'])),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'emitted_by_datasets': !exists(json, 'emitted_by_datasets') ? undefined : ((json['emitted_by_datasets'] as Array<any>).map(TraitInputFromDatasetsFromJSON)),
        'id': json['id'],
        'literate': !exists(json, 'literate') ? undefined : json['literate'],
        'lookup_table': !exists(json, 'lookup_table') ? undefined : json['lookup_table'],
        'name': json['name'],
        'statistical_type': !exists(json, 'statistical_type') ? undefined : TraitStatisticalTypeFromJSON(json['statistical_type']),
        'type': !exists(json, 'type') ? undefined : PrimitiveDataTypeFromJSON(json['type']),
        'unit': !exists(json, 'unit') ? undefined : json['unit'],
        'updated_at': (new Date(json['updated_at'])),
    };
}

export function TraitToJSON(value?: Trait | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'breaks': value.breaks,
        'categories': value.categories,
        'category': TraitCategoryToJSON(value.category),
        'created_at': (value.created_at.toISOString()),
        'description': value.description,
        'emitted_by_datasets': value.emitted_by_datasets === undefined ? undefined : ((value.emitted_by_datasets as Array<any>).map(TraitInputFromDatasetsToJSON)),
        'id': value.id,
        'literate': value.literate,
        'lookup_table': value.lookup_table,
        'name': value.name,
        'statistical_type': TraitStatisticalTypeToJSON(value.statistical_type),
        'type': PrimitiveDataTypeToJSON(value.type),
        'unit': value.unit,
        'updated_at': (value.updated_at.toISOString()),
    };
}

