/* tslint:disable */
/* eslint-disable */
/**
 * The top-level organizing abstraction at Faraday. Data cannot be shared among accounts, 
 * even if they are controlled by the same entity.
 * @export
 * @interface Account
 */
export interface Account {
    /**
     * The API key for the account. Use this to authenticate API calls.
     * @type {string}
     * @memberof Account
     */
    api_key?: string;
    /**
     * If not null, this resource will no longer receive updates, but will still be visable.
     * @type {string}
     * @memberof Account
     */
    archived_at?: string;
    /**
     * 
     * @type {AccountBranding}
     * @memberof Account
     */
    branding?: AccountBranding;
    /**
     * 
     * @type {AccountCommitment}
     * @memberof Account
     */
    commitment?: AccountCommitment;
    /**
     * When this resource was created.
     * @type {string}
     * @memberof Account
     */
    created_at: string;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof Account
     */
    id: string;
    /**
     * The last time this resource's input was read.
     * @type {string}
     * @memberof Account
     */
    last_read_input_at?: string;
    /**
     * The last time this resource's configuration was updated. If this is more recent than last_updated_output_at, the resource will be rebuilt.
     * @type {string}
     * @memberof Account
     */
    last_updated_config_at?: string;
    /**
     * The last time this resource successfully built.
     * @type {string}
     * @memberof Account
     */
    last_updated_output_at?: string;
    /**
     * The name of the account.
     * @type {string}
     * @memberof Account
     */
    name: string;
    /**
     * If this is a subaccount, the id of its parent account.
     * @type {string}
     * @memberof Account
     */
    parent_account_id?: string;
    /**
     * The type of this resource.
     * @type {string}
     * @memberof Account
     */
    resource_type: string;
    /**
     * 
     * @type {ResourceStatus}
     * @memberof Account
     */
    status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {string}
     * @memberof Account
     */
    status_changed_at?: string;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof Account
     */
    status_error?: string;
    /**
     * The stripe ID for billing purposes.
     * @type {string}
     * @memberof Account
     */
    stripe_customer_id?: string;
    /**
     * When this resource was last updated.
     * @type {string}
     * @memberof Account
     */
    updated_at: string;
}
/**
 * 
 * @export
 * @interface AccountBilling
 */
export interface AccountBilling {
    /**
     * 
     * @type {Array<Invoice>}
     * @memberof AccountBilling
     */
    invoices?: Array<Invoice>;
    /**
     * 
     * @type {Array<Payment>}
     * @memberof AccountBilling
     */
    payments?: Array<Payment>;
    /**
     * 
     * @type {Array<AccountUsage>}
     * @memberof AccountBilling
     */
    usages?: Array<AccountUsage>;
}
/**
 * Whitelabel branding for the account.
 * @export
 * @interface AccountBranding
 */
export interface AccountBranding {
    /**
     * Suppress all branding from all reports. If not specified, defaults to false.
     * @type {boolean}
     * @memberof AccountBranding
     */
    suppress_from_reports?: boolean;
}
/**
 * 
 * @export
 * @interface AccountCommitment
 */
export interface AccountCommitment {
    /**
     * The amount billed to the account per month
     * @type {number}
     * @memberof AccountCommitment
     */
    monthly_cost?: number;
    /**
     * The date at which the account's contract with Faraday renews.
     * @type {string}
     * @memberof AccountCommitment
     */
    renewal_date?: string;
}
/**
 * (Parameters used to PATCH the `Account` type.)
 * 
 * The top-level organizing abstraction at Faraday. Data cannot be shared among accounts, 
 * even if they are controlled by the same entity.
 * @export
 * @interface AccountMergePatch
 */
export interface AccountMergePatch {
    /**
     * 
     * @type {AccountMergePatchBranding}
     * @memberof AccountMergePatch
     */
    branding?: AccountMergePatchBranding | null;
    /**
     * The name of the account.
     * @type {string}
     * @memberof AccountMergePatch
     */
    name?: string;
}
/**
 * Whitelabel branding for the account.
 * @export
 * @interface AccountMergePatchBranding
 */
export interface AccountMergePatchBranding {
    /**
     * Suppress all branding from all reports. If not specified, defaults to false.
     * @type {boolean}
     * @memberof AccountMergePatchBranding
     */
    suppress_from_reports?: boolean;
}
/**
 * (Parameters used to POST a new value of the `Account` type.)
 * 
 * The top-level organizing abstraction at Faraday. Data cannot be shared among accounts, 
 * even if they are controlled by the same entity.
 * @export
 * @interface AccountPost
 */
export interface AccountPost {
    /**
     * 
     * @type {AccountBranding}
     * @memberof AccountPost
     */
    branding?: AccountBranding;
    /**
     * The name of the account.
     * @type {string}
     * @memberof AccountPost
     */
    name: string;
}
/**
 * (Parameters used to PUT a value of the `Account` type.)
 * 
 * The top-level organizing abstraction at Faraday. Data cannot be shared among accounts, 
 * even if they are controlled by the same entity.
 * @export
 * @interface AccountPut
 */
export interface AccountPut {
    /**
     * 
     * @type {AccountBranding}
     * @memberof AccountPut
     */
    branding?: AccountBranding;
    /**
     * The name of the account.
     * @type {string}
     * @memberof AccountPut
     */
    name: string;
}
/**
 * Your account's usage of various Faraday features.
 * @export
 * @interface AccountUsage
 */
export interface AccountUsage {
    /**
     * The feature being used by the account
     * @type {string}
     * @memberof AccountUsage
     */
    description?: string;
    /**
     * How many instances of this feature that the account is allowed to use as part of its current plan.
     * @type {number}
     * @memberof AccountUsage
     */
    limit?: number;
    /**
     * A machine-friendly description of the feature being used by the account
     * @type {string}
     * @memberof AccountUsage
     */
    name?: string;
    /**
     * How many instances of this feature that the account uses
     * @type {number}
     * @memberof AccountUsage
     */
    usage?: number;
}
/**
 * An address to be geocoded.
 * @export
 * @interface AddressInfo
 */
export interface AddressInfo {
    /**
     * 
     * @type {string}
     * @memberof AddressInfo
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressInfo
     */
    house_number_and_street?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressInfo
     */
    postcode?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressInfo
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressInfo
     */
    unit_number?: string;
}
/**
 * 
 * @export
 * @interface AnalysisDimensionsTrait
 */
export interface AnalysisDimensionsTrait {
    /**
     * The list of bins calculated for this persona set dimension.
     * @type {Array<AnalysisDimensionsTraitBin>}
     * @memberof AnalysisDimensionsTrait
     */
    bins: Array<AnalysisDimensionsTraitBin>;
    /**
     * Whether the trait distinguishes the persona from the rest of the persona set.
     * @type {boolean}
     * @memberof AnalysisDimensionsTrait
     */
    salient?: boolean;
    /**
     * The machine name of the trait used to calculate this dimension.
     * @type {string}
     * @memberof AnalysisDimensionsTrait
     */
    trait_name: string;
}
/**
 * @type AnalysisDimensionsTraitBin
 * 
 * @export
 */
export type AnalysisDimensionsTraitBin = { data_type: 'boolean' } & AnalysisDimensionsTraitBinBoolean | { data_type: 'date' } & AnalysisDimensionsTraitBinDate | { data_type: 'number' } & AnalysisDimensionsTraitBinNumber | { data_type: 'text' } & AnalysisDimensionsTraitBinText;
/**
 * 
 * @export
 * @interface AnalysisDimensionsTraitBinBoolean
 */
export interface AnalysisDimensionsTraitBinBoolean {
    /**
     * The numeric total of individuals found by this status.
     * @type {number}
     * @memberof AnalysisDimensionsTraitBinBoolean
     */
    count: number;
    /**
     * Nominal dimensions are represented as a list of bins, where each bin is a boolean or no value (to represent null) and a resulting count that is the individuals found that match that value.
     * @type {string}
     * @memberof AnalysisDimensionsTraitBinBoolean
     */
    data_type: string;
    /**
     * The count represented as a percentage based on the sum of counts.
     * @type {number}
     * @memberof AnalysisDimensionsTraitBinBoolean
     */
    percent: number;
    /**
     * The status used to count individuals by. No value means an invidiual with neither true or false value i.e. null.
     * @type {boolean}
     * @memberof AnalysisDimensionsTraitBinBoolean
     */
    value?: boolean;
}
/**
 * 
 * @export
 * @interface AnalysisDimensionsTraitBinDate
 */
export interface AnalysisDimensionsTraitBinDate {
    /**
     * The numeric total of individuals found within this bin range.
     * @type {number}
     * @memberof AnalysisDimensionsTraitBinDate
     */
    count: number;
    /**
     * Ordinal dimensions are represented as a list of bins, where each bin is a range from X to Y and a resulting count of individuals that match within that range.
     * @type {string}
     * @memberof AnalysisDimensionsTraitBinDate
     */
    data_type: string;
    /**
     * The upper range of the bin for this dimension. Max can be null, meaning it is all values above the min range for this bin.
     * @type {string}
     * @memberof AnalysisDimensionsTraitBinDate
     */
    max?: string;
    /**
     * The starting numeric value this bin is counted by.
     * @type {string}
     * @memberof AnalysisDimensionsTraitBinDate
     */
    min: string;
    /**
     * The count represented as a percentage based on the sum of counts.
     * @type {number}
     * @memberof AnalysisDimensionsTraitBinDate
     */
    percent: number;
}
/**
 * 
 * @export
 * @interface AnalysisDimensionsTraitBinNumber
 */
export interface AnalysisDimensionsTraitBinNumber {
    /**
     * The numeric total of individuals found within this bin range.
     * @type {number}
     * @memberof AnalysisDimensionsTraitBinNumber
     */
    count: number;
    /**
     * Ordinal dimensions are represented as a list of bins, where each bin is a range from X to Y and a resulting count of individuals that match within that range.
     * @type {string}
     * @memberof AnalysisDimensionsTraitBinNumber
     */
    data_type: string;
    /**
     * The upper range of the bin for this dimension. Max can be null, meaning it is all values above the min range for this bin.
     * @type {number}
     * @memberof AnalysisDimensionsTraitBinNumber
     */
    max?: number;
    /**
     * The starting numeric value this bin is counted by.
     * @type {number}
     * @memberof AnalysisDimensionsTraitBinNumber
     */
    min: number;
    /**
     * The count represented as a percentage based on the sum of counts.
     * @type {number}
     * @memberof AnalysisDimensionsTraitBinNumber
     */
    percent: number;
}
/**
 * 
 * @export
 * @interface AnalysisDimensionsTraitBinText
 */
export interface AnalysisDimensionsTraitBinText {
    /**
     * The numeric total of individuals found by this category.
     * @type {number}
     * @memberof AnalysisDimensionsTraitBinText
     */
    count: number;
    /**
     * Text dimensions are represented as a list of bins, where each bin is a single category (from a list of categories for the given trait) and a resulting count that is the individuals found that match the category.
     * @type {string}
     * @memberof AnalysisDimensionsTraitBinText
     */
    data_type: string;
    /**
     * The count represented as a percentage based on the sum of counts.
     * @type {number}
     * @memberof AnalysisDimensionsTraitBinText
     */
    percent: number;
    /**
     * The category used to count individuals by.
     * @type {string}
     * @memberof AnalysisDimensionsTraitBinText
     */
    value: string;
}
/**
 * @type AnalysisFeatureDirectionality
 * 
 * @export
 */
export type AnalysisFeatureDirectionality = { data_type: 'boolean' } & AnalysisFeatureDirectionalityBoolean | { data_type: 'date' } & AnalysisFeatureDirectionalityDate | { data_type: 'number' } & AnalysisFeatureDirectionalityNumber | { data_type: 'text' } & AnalysisFeatureDirectionalityText;
/**
 * Directionality of a boolean feature
 * @export
 * @interface AnalysisFeatureDirectionalityBoolean
 */
export interface AnalysisFeatureDirectionalityBoolean {
    /**
     * 
     * @type {string}
     * @memberof AnalysisFeatureDirectionalityBoolean
     */
    data_type: string;
    /**
     * The percentage of data that falls in that particular bin.
     * @type {number}
     * @memberof AnalysisFeatureDirectionalityBoolean
     */
    density: number;
    /**
     * The impact the feature has on the model.
     * @type {number}
     * @memberof AnalysisFeatureDirectionalityBoolean
     */
    impact: number;
    /**
     * 
     * @type {boolean}
     * @memberof AnalysisFeatureDirectionalityBoolean
     */
    value: boolean;
}
/**
 * Directionality of a date feature
 * @export
 * @interface AnalysisFeatureDirectionalityDate
 */
export interface AnalysisFeatureDirectionalityDate {
    /**
     * 
     * @type {string}
     * @memberof AnalysisFeatureDirectionalityDate
     */
    data_type: string;
    /**
     * The percentage of data that falls in that particular bin.
     * @type {number}
     * @memberof AnalysisFeatureDirectionalityDate
     */
    density: number;
    /**
     * The impact the feature has on the model.
     * @type {number}
     * @memberof AnalysisFeatureDirectionalityDate
     */
    impact: number;
    /**
     * 
     * @type {string}
     * @memberof AnalysisFeatureDirectionalityDate
     */
    max?: string;
    /**
     * 
     * @type {string}
     * @memberof AnalysisFeatureDirectionalityDate
     */
    min: string;
}
/**
 * Directionality of a numeric feature
 * @export
 * @interface AnalysisFeatureDirectionalityNumber
 */
export interface AnalysisFeatureDirectionalityNumber {
    /**
     * 
     * @type {string}
     * @memberof AnalysisFeatureDirectionalityNumber
     */
    data_type: string;
    /**
     * The percentage of data that falls in that particular bin.
     * @type {number}
     * @memberof AnalysisFeatureDirectionalityNumber
     */
    density: number;
    /**
     * The impact the feature has on the model.
     * @type {number}
     * @memberof AnalysisFeatureDirectionalityNumber
     */
    impact: number;
    /**
     * 
     * @type {number}
     * @memberof AnalysisFeatureDirectionalityNumber
     */
    max?: number;
    /**
     * 
     * @type {number}
     * @memberof AnalysisFeatureDirectionalityNumber
     */
    min: number;
}
/**
 * Directionality of a text feature
 * @export
 * @interface AnalysisFeatureDirectionalityText
 */
export interface AnalysisFeatureDirectionalityText {
    /**
     * 
     * @type {string}
     * @memberof AnalysisFeatureDirectionalityText
     */
    data_type: string;
    /**
     * The percentage of data that falls in that particular bin.
     * @type {number}
     * @memberof AnalysisFeatureDirectionalityText
     */
    density: number;
    /**
     * The impact the feature has on the model.
     * @type {number}
     * @memberof AnalysisFeatureDirectionalityText
     */
    impact: number;
    /**
     * 
     * @type {string}
     * @memberof AnalysisFeatureDirectionalityText
     */
    value: string;
}
/**
 * Data to construct a ROC curve. Each point consists of a false positive rate `x`, an estimated true positive rate `y_mean` corresponding to `x`, and error bounds on the true positive rate `y_min` and `y_max`.
 * @export
 * @interface AnalysisRocCurvePoint
 */
export interface AnalysisRocCurvePoint {
    /**
     * A given false positive rate.
     * @type {number}
     * @memberof AnalysisRocCurvePoint
     */
    x: number;
    /**
     * The estimated true positive rate corresponding to `x`.
     * @type {number}
     * @memberof AnalysisRocCurvePoint
     */
    y: number;
}
/**
 * 
 * @export
 * @interface ArchiveConfig
 */
export interface ArchiveConfig {
    /**
     * Only allow the following resources to be archived/unarchived.
     * If a downstream or upstream resource would be archived/unarchived, and is not in this list, throw an error.
     * @type {Array<string>}
     * @memberof ArchiveConfig
     */
    cascade_to?: Array<string>;
    /**
     * When archiving a resource, if this is set to true, archive the resource and all its downstream resources. 
     * When unarchiving a resource, if this is set to true, unarchive the resource and all its upstream resources.
     * If false, and there are downstream/upstream resource that would be archived/unarchived, throw an error.
     * @type {boolean}
     * @memberof ArchiveConfig
     */
    cascade_to_all?: boolean;
}
/**
 * An attribute wraps a stream of assertions with configuration for aggregation and selection. 
 * Attributes specify how to handle multiple qualifying assertions and provide hints for consumers.
 * @export
 * @interface Attribute
 */
export interface Attribute {
    /**
     * 
     * @type {AttributeAggregation}
     * @memberof Attribute
     */
    aggregation?: AttributeAggregation;
    /**
     * If not null, this resource will no longer receive updates, but will still be visable.
     * @type {string}
     * @memberof Attribute
     */
    archived_at?: string;
    /**
     * 
     * @type {StreamPropertyCategory}
     * @memberof Attribute
     */
    category: StreamPropertyCategory;
    /**
     * When this resource was created.
     * @type {string}
     * @memberof Attribute
     */
    created_at: string;
    /**
     * 
     * @type {AttributeSelectorsByPurpose}
     * @memberof Attribute
     */
    default_selector_by_purpose?: AttributeSelectorsByPurpose;
    /**
     * Whether this attribute is deprecated.
     * @type {boolean}
     * @memberof Attribute
     */
    deprecated?: boolean;
    /**
     * Notes about the deprecation of the attribute. Should be present if and only if deprecated is true.
     * @type {string}
     * @memberof Attribute
     */
    deprecation_notes?: string;
    /**
     * A description of the attribute.
     * @type {string}
     * @memberof Attribute
     */
    description: string;
    /**
     * If applicable, describes the meaning of any directionality in the values.
     * @type {string}
     * @memberof Attribute
     */
    directionality_interpretation?: string;
    /**
     * The UUID of the feature store this attribute belongs to.
     * @type {string}
     * @memberof Attribute
     */
    feature_store_id: string;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof Attribute
     */
    id: string;
    /**
     * For enumerable attributes, a mapping from values to their interpretations. The key type matches the attribute's data type, and the value is always a string interpretation.
     * @type {{ [key: string]: string; }}
     * @memberof Attribute
     */
    interpretation_map?: { [key: string]: string; };
    /**
     * The last time this resource's input was read.
     * @type {string}
     * @memberof Attribute
     */
    last_read_input_at?: string;
    /**
     * The last time this resource's configuration was updated. If this is more recent than last_updated_output_at, the resource will be rebuilt.
     * @type {string}
     * @memberof Attribute
     */
    last_updated_config_at?: string;
    /**
     * The last time this resource successfully built.
     * @type {string}
     * @memberof Attribute
     */
    last_updated_output_at?: string;
    /**
     * A human-readable name for the attribute.
     * @type {string}
     * @memberof Attribute
     */
    literate: string;
    /**
     * The slug name of the attribute. Must start with a letter and contain only lowercase letters, numbers, and underscores.
     * @type {string}
     * @memberof Attribute
     */
    name: string;
    /**
     * If a unary null replacement isn't applicable or viable, this describes how NULLs should be interpreted when encountered.
     * @type {string}
     * @memberof Attribute
     */
    null_value_interpretation?: string;
    /**
     * If set, null values should be coalesced with this replacement to avoid any NULLs.
     * @type {boolean | number | string}
     * @memberof Attribute
     */
    null_value_replacement?: boolean | number | string | null;
    /**
     * The type of this resource.
     * @type {string}
     * @memberof Attribute
     */
    resource_type: string;
    /**
     * 
     * @type {ResourceStatus}
     * @memberof Attribute
     */
    status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {string}
     * @memberof Attribute
     */
    status_changed_at?: string;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof Attribute
     */
    status_error?: string;
    /**
     * The name of the stream containing the assertions for this attribute.
     * @type {string}
     * @memberof Attribute
     */
    stream_name: string;
    /**
     * 
     * @type {StreamPropertyTier}
     * @memberof Attribute
     */
    tier: StreamPropertyTier;
    /**
     * When this resource was last updated.
     * @type {string}
     * @memberof Attribute
     */
    updated_at: string;
    /**
     * The name of the property in the stream that contains the assertion value. This indicates which property is special and represents the attribute's value.
     * @type {string}
     * @memberof Attribute
     */
    value_property_name: string;
}
/**
 * Configuration for how to aggregate multiple qualifying assertions under a single attribute.
 * @export
 * @interface AttributeAggregation
 */
export interface AttributeAggregation {
    /**
     * 
     * @type {AttributeAggregationMethod}
     * @memberof AttributeAggregation
     */
    method: AttributeAggregationMethod;
    /**
     * Sort configuration used by the coalesce method. Applied in order - first by the first sort, then by the second, etc. Only used when method is 'coalesce'.
     * @type {Array<AttributeAggregationSort>}
     * @memberof AttributeAggregation
     */
    sort?: Array<AttributeAggregationSort>;
}
/**
 * Method for aggregating multiple assertions for an attribute.
 * @export
 * @enum {string}
 */
export enum AttributeAggregationMethod {
    Or = 'or',
    Min = 'min',
    Max = 'max',
    Mean = 'mean',
    Median = 'median',
    Mode = 'mode',
    Coalesce = 'coalesce'
}
/**
 * Sort configuration for attribute aggregation. Used by the coalesce method to determine which assertion to use when multiple are present.
 * @export
 * @interface AttributeAggregationSort
 */
export interface AttributeAggregationSort {
    /**
     * 
     * @type {AttributeSortDirection}
     * @memberof AttributeAggregationSort
     */
    direction?: AttributeSortDirection;
    /**
     * Explicit priority order for categorical values.
     * @type {Array<boolean | number | string>}
     * @memberof AttributeAggregationSort
     */
    priority?: Array<boolean | number | string>;
    /**
     * The property name to sort by.
     * @type {string}
     * @memberof AttributeAggregationSort
     */
    property_name: string;
}
/**
 * (Parameters used to PATCH the `Attribute` type.)
 * 
 * An attribute wraps a stream of assertions with configuration for aggregation and selection. 
 * Attributes specify how to handle multiple qualifying assertions and provide hints for consumers.
 * @export
 * @interface AttributeMergePatch
 */
export interface AttributeMergePatch {
    /**
     * 
     * @type {AttributeAggregation}
     * @memberof AttributeMergePatch
     */
    aggregation?: AttributeAggregation | null;
    /**
     * 
     * @type {StreamPropertyCategory}
     * @memberof AttributeMergePatch
     */
    category?: StreamPropertyCategory;
    /**
     * 
     * @type {AttributeSelectorsByPurpose}
     * @memberof AttributeMergePatch
     */
    default_selector_by_purpose?: AttributeSelectorsByPurpose | null;
    /**
     * Whether this attribute is deprecated.
     * @type {boolean}
     * @memberof AttributeMergePatch
     */
    deprecated?: boolean | null;
    /**
     * Notes about the deprecation of the attribute. Should be present if and only if deprecated is true.
     * @type {string}
     * @memberof AttributeMergePatch
     */
    deprecation_notes?: string | null;
    /**
     * A description of the attribute.
     * @type {string}
     * @memberof AttributeMergePatch
     */
    description?: string;
    /**
     * If applicable, describes the meaning of any directionality in the values.
     * @type {string}
     * @memberof AttributeMergePatch
     */
    directionality_interpretation?: string | null;
    /**
     * The UUID of the feature store this attribute belongs to.
     * @type {string}
     * @memberof AttributeMergePatch
     */
    feature_store_id?: string;
    /**
     * For enumerable attributes, a mapping from values to their interpretations. The key type matches the attribute's data type, and the value is always a string interpretation.
     * @type {{ [key: string]: string; }}
     * @memberof AttributeMergePatch
     */
    interpretation_map?: { [key: string]: string; } | null;
    /**
     * A human-readable name for the attribute.
     * @type {string}
     * @memberof AttributeMergePatch
     */
    literate?: string;
    /**
     * The slug name of the attribute. Must start with a letter and contain only lowercase letters, numbers, and underscores.
     * @type {string}
     * @memberof AttributeMergePatch
     */
    name?: string;
    /**
     * If a unary null replacement isn't applicable or viable, this describes how NULLs should be interpreted when encountered.
     * @type {string}
     * @memberof AttributeMergePatch
     */
    null_value_interpretation?: string | null;
    /**
     * If set, null values should be coalesced with this replacement to avoid any NULLs.
     * @type {boolean | number | string}
     * @memberof AttributeMergePatch
     */
    null_value_replacement?: boolean | number | string | null;
    /**
     * The name of the stream containing the assertions for this attribute.
     * @type {string}
     * @memberof AttributeMergePatch
     */
    stream_name?: string;
    /**
     * 
     * @type {StreamPropertyTier}
     * @memberof AttributeMergePatch
     */
    tier?: StreamPropertyTier;
    /**
     * The name of the property in the stream that contains the assertion value. This indicates which property is special and represents the attribute's value.
     * @type {string}
     * @memberof AttributeMergePatch
     */
    value_property_name?: string;
}
/**
 * (Parameters used to POST a new value of the `Attribute` type.)
 * 
 * An attribute wraps a stream of assertions with configuration for aggregation and selection. 
 * Attributes specify how to handle multiple qualifying assertions and provide hints for consumers.
 * @export
 * @interface AttributePost
 */
export interface AttributePost {
    /**
     * 
     * @type {AttributeAggregation}
     * @memberof AttributePost
     */
    aggregation?: AttributeAggregation;
    /**
     * 
     * @type {StreamPropertyCategory}
     * @memberof AttributePost
     */
    category: StreamPropertyCategory;
    /**
     * 
     * @type {AttributeSelectorsByPurpose}
     * @memberof AttributePost
     */
    default_selector_by_purpose?: AttributeSelectorsByPurpose;
    /**
     * Whether this attribute is deprecated.
     * @type {boolean}
     * @memberof AttributePost
     */
    deprecated?: boolean;
    /**
     * Notes about the deprecation of the attribute. Should be present if and only if deprecated is true.
     * @type {string}
     * @memberof AttributePost
     */
    deprecation_notes?: string;
    /**
     * A description of the attribute.
     * @type {string}
     * @memberof AttributePost
     */
    description: string;
    /**
     * If applicable, describes the meaning of any directionality in the values.
     * @type {string}
     * @memberof AttributePost
     */
    directionality_interpretation?: string;
    /**
     * The UUID of the feature store this attribute belongs to.
     * @type {string}
     * @memberof AttributePost
     */
    feature_store_id: string;
    /**
     * For enumerable attributes, a mapping from values to their interpretations. The key type matches the attribute's data type, and the value is always a string interpretation.
     * @type {{ [key: string]: string; }}
     * @memberof AttributePost
     */
    interpretation_map?: { [key: string]: string; };
    /**
     * A human-readable name for the attribute.
     * @type {string}
     * @memberof AttributePost
     */
    literate: string;
    /**
     * The slug name of the attribute. Must start with a letter and contain only lowercase letters, numbers, and underscores.
     * @type {string}
     * @memberof AttributePost
     */
    name: string;
    /**
     * If a unary null replacement isn't applicable or viable, this describes how NULLs should be interpreted when encountered.
     * @type {string}
     * @memberof AttributePost
     */
    null_value_interpretation?: string;
    /**
     * If set, null values should be coalesced with this replacement to avoid any NULLs.
     * @type {boolean | number | string}
     * @memberof AttributePost
     */
    null_value_replacement?: boolean | number | string | null;
    /**
     * The name of the stream containing the assertions for this attribute.
     * @type {string}
     * @memberof AttributePost
     */
    stream_name: string;
    /**
     * 
     * @type {StreamPropertyTier}
     * @memberof AttributePost
     */
    tier: StreamPropertyTier;
    /**
     * The name of the property in the stream that contains the assertion value. This indicates which property is special and represents the attribute's value.
     * @type {string}
     * @memberof AttributePost
     */
    value_property_name: string;
}
/**
 * (Parameters used to PUT a value of the `Attribute` type.)
 * 
 * An attribute wraps a stream of assertions with configuration for aggregation and selection. 
 * Attributes specify how to handle multiple qualifying assertions and provide hints for consumers.
 * @export
 * @interface AttributePut
 */
export interface AttributePut {
    /**
     * 
     * @type {AttributeAggregation}
     * @memberof AttributePut
     */
    aggregation?: AttributeAggregation;
    /**
     * 
     * @type {StreamPropertyCategory}
     * @memberof AttributePut
     */
    category: StreamPropertyCategory;
    /**
     * 
     * @type {AttributeSelectorsByPurpose}
     * @memberof AttributePut
     */
    default_selector_by_purpose?: AttributeSelectorsByPurpose;
    /**
     * Whether this attribute is deprecated.
     * @type {boolean}
     * @memberof AttributePut
     */
    deprecated?: boolean;
    /**
     * Notes about the deprecation of the attribute. Should be present if and only if deprecated is true.
     * @type {string}
     * @memberof AttributePut
     */
    deprecation_notes?: string;
    /**
     * A description of the attribute.
     * @type {string}
     * @memberof AttributePut
     */
    description: string;
    /**
     * If applicable, describes the meaning of any directionality in the values.
     * @type {string}
     * @memberof AttributePut
     */
    directionality_interpretation?: string;
    /**
     * The UUID of the feature store this attribute belongs to.
     * @type {string}
     * @memberof AttributePut
     */
    feature_store_id: string;
    /**
     * For enumerable attributes, a mapping from values to their interpretations. The key type matches the attribute's data type, and the value is always a string interpretation.
     * @type {{ [key: string]: string; }}
     * @memberof AttributePut
     */
    interpretation_map?: { [key: string]: string; };
    /**
     * A human-readable name for the attribute.
     * @type {string}
     * @memberof AttributePut
     */
    literate: string;
    /**
     * The slug name of the attribute. Must start with a letter and contain only lowercase letters, numbers, and underscores.
     * @type {string}
     * @memberof AttributePut
     */
    name: string;
    /**
     * If a unary null replacement isn't applicable or viable, this describes how NULLs should be interpreted when encountered.
     * @type {string}
     * @memberof AttributePut
     */
    null_value_interpretation?: string;
    /**
     * If set, null values should be coalesced with this replacement to avoid any NULLs.
     * @type {boolean | number | string}
     * @memberof AttributePut
     */
    null_value_replacement?: boolean | number | string | null;
    /**
     * The name of the stream containing the assertions for this attribute.
     * @type {string}
     * @memberof AttributePut
     */
    stream_name: string;
    /**
     * 
     * @type {StreamPropertyTier}
     * @memberof AttributePut
     */
    tier: StreamPropertyTier;
    /**
     * The name of the property in the stream that contains the assertion value. This indicates which property is special and represents the attribute's value.
     * @type {string}
     * @memberof AttributePut
     */
    value_property_name: string;
}
/**
 * Selector configuration for filtering assertions. The attribute system doesn't automatically apply these hints, but consumers can retrieve them from the attribute.
 * @export
 * @interface AttributeSelector
 */
export interface AttributeSelector {
    /**
     * List of allowed authorities.
     * @type {Array<string>}
     * @memberof AttributeSelector
     */
    authority?: Array<string>;
    /**
     * List of allowed derivation methods.
     * @type {Array<string>}
     * @memberof AttributeSelector
     */
    derivations?: Array<string>;
    /**
     * List of allowed precision levels.
     * @type {Array<string>}
     * @memberof AttributeSelector
     */
    precision?: Array<string>;
    /**
     * List of allowed quality levels.
     * @type {Array<string>}
     * @memberof AttributeSelector
     */
    quality?: Array<string>;
}
/**
 * Default selector hints organized by purpose. These provide guidance to consumers on how to filter assertions for different use cases (modeling, inference, append).
 * @export
 * @interface AttributeSelectorsByPurpose
 */
export interface AttributeSelectorsByPurpose {
    /**
     * 
     * @type {AttributeSelector}
     * @memberof AttributeSelectorsByPurpose
     */
    append?: AttributeSelector;
    /**
     * 
     * @type {AttributeSelector}
     * @memberof AttributeSelectorsByPurpose
     */
    inference?: AttributeSelector;
    /**
     * 
     * @type {AttributeSelector}
     * @memberof AttributeSelectorsByPurpose
     */
    modeling?: AttributeSelector;
}
/**
 * Sort direction for attribute aggregation.
 * @export
 * @enum {string}
 */
export enum AttributeSortDirection {
    Asc = 'asc',
    Desc = 'desc'
}
/**
 * A specific group of people, such as "Customers" or "Subscription customers".
 * @export
 * @interface Cohort
 */
export interface Cohort {
    /**
     * If not null, this resource will no longer receive updates, but will still be visable.
     * @type {string}
     * @memberof Cohort
     */
    archived_at?: string;
    /**
     * A Managed Cohort.
     * @type {boolean}
     * @memberof Cohort
     */
    classic?: boolean;
    /**
     * When this resource was created.
     * @type {string}
     * @memberof Cohort
     */
    created_at: string;
    /**
     * Whether to show the Cohort in Explore, the map view on https://app.faraday.ai.
     * 
     * This will slow down Cohort builds.
     * @type {boolean}
     * @memberof Cohort
     */
    explore?: boolean;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof Cohort
     */
    id: string;
    /**
     * The last time this resource's input was read.
     * @type {string}
     * @memberof Cohort
     */
    last_read_input_at?: string;
    /**
     * The last time this resource's configuration was updated. If this is more recent than last_updated_output_at, the resource will be rebuilt.
     * @type {string}
     * @memberof Cohort
     */
    last_updated_config_at?: string;
    /**
     * The last time this resource successfully built.
     * @type {string}
     * @memberof Cohort
     */
    last_updated_output_at?: string;
    /**
     * Max count for this cohort's config
     * @type {number}
     * @memberof Cohort
     */
    max_count?: number;
    /**
     * Max value for this cohort's config
     * @type {number}
     * @memberof Cohort
     */
    max_value?: number;
    /**
     * Min count for this cohort's config
     * @type {number}
     * @memberof Cohort
     */
    min_count?: number;
    /**
     * Min value for this cohort's config
     * @type {number}
     * @memberof Cohort
     */
    min_value?: number;
    /**
     * Human-readable label for this cohort.
     * @type {string}
     * @memberof Cohort
     */
    name: string;
    /**
     * List of places to use to spatially filter Cohort membership.
     * @type {Array<CohortPlaceCondition>}
     * @memberof Cohort
     */
    place_conditions?: Array<CohortPlaceCondition>;
    /**
     * Count of unique individuals.
     * @type {number}
     * @memberof Cohort
     */
    population_count?: number;
    /**
     * 
     * @type {Recency}
     * @memberof Cohort
     */
    recency?: Recency;
    /**
     * Count of unique residences.
     * @type {number}
     * @memberof Cohort
     */
    residence_count?: number;
    /**
     * The type of this resource.
     * @type {string}
     * @memberof Cohort
     */
    resource_type: string;
    /**
     * 
     * @type {ResourceStatus}
     * @memberof Cohort
     */
    status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {string}
     * @memberof Cohort
     */
    status_changed_at?: string;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof Cohort
     */
    status_error?: string;
    /**
     * List of stream properties to filter cohort membership on. The stream properties must be for the same stream set as the cohort `stream_name`.
     * 
     * Nulls are excluded unless explicitly requested with `_null: true`.
     * @type {Array<CohortStreamCondition>}
     * @memberof Cohort
     */
    stream_conditions?: Array<CohortStreamCondition>;
    /**
     * The `name` field of the stream from which to build this cohort.
     * @type {string}
     * @memberof Cohort
     */
    stream_name?: string;
    /**
     * List of traits to filter cohort membership
     * @type {Array<CohortTrait>}
     * @memberof Cohort
     */
    traits?: Array<CohortTrait>;
    /**
     * When this resource was last updated.
     * @type {string}
     * @memberof Cohort
     */
    updated_at: string;
}
/**
 * 
 * @export
 * @interface CohortAnalysisMembership
 */
export interface CohortAnalysisMembership {
    /**
     * 
     * @type {Array<CohortAnalysisMembershipDatum>}
     * @memberof CohortAnalysisMembership
     */
    days: Array<CohortAnalysisMembershipDatum>;
    /**
     * 
     * @type {Array<CohortAnalysisMembershipDatum>}
     * @memberof CohortAnalysisMembership
     */
    months: Array<CohortAnalysisMembershipDatum>;
    /**
     * The total unique members within the cohort.
     * @type {number}
     * @memberof CohortAnalysisMembership
     */
    population_count?: number;
    /**
     * The total unique residences within the cohort.
     * @type {number}
     * @memberof CohortAnalysisMembership
     */
    residence_count?: number;
    /**
     * 
     * @type {Array<CohortAnalysisMembershipDatum>}
     * @memberof CohortAnalysisMembership
     */
    weeks: Array<CohortAnalysisMembershipDatum>;
}
/**
 * 
 * @export
 * @interface CohortAnalysisMembershipDatum
 */
export interface CohortAnalysisMembershipDatum {
    /**
     * The total members within the cohort for the given date.
     * @type {number}
     * @memberof CohortAnalysisMembershipDatum
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof CohortAnalysisMembershipDatum
     */
    date: string;
}
/**
 * (Parameters used to PATCH the `Cohort` type.)
 * 
 * A specific group of people, such as "Customers" or "Subscription customers".
 * @export
 * @interface CohortMergePatch
 */
export interface CohortMergePatch {
    /**
     * Whether to show the Cohort in Explore, the map view on https://app.faraday.ai.
     * 
     * This will slow down Cohort builds.
     * @type {boolean}
     * @memberof CohortMergePatch
     */
    explore?: boolean | null;
    /**
     * Max count for this cohort's config
     * @type {number}
     * @memberof CohortMergePatch
     */
    max_count?: number | null;
    /**
     * Max value for this cohort's config
     * @type {number}
     * @memberof CohortMergePatch
     */
    max_value?: number | null;
    /**
     * Min count for this cohort's config
     * @type {number}
     * @memberof CohortMergePatch
     */
    min_count?: number | null;
    /**
     * Min value for this cohort's config
     * @type {number}
     * @memberof CohortMergePatch
     */
    min_value?: number | null;
    /**
     * Human-readable label for this cohort.
     * @type {string}
     * @memberof CohortMergePatch
     */
    name?: string;
    /**
     * List of places to use to spatially filter Cohort membership.
     * @type {Array<CohortPlaceCondition>}
     * @memberof CohortMergePatch
     */
    place_conditions?: Array<CohortPlaceCondition> | null;
    /**
     * 
     * @type {RecencyMergePatch}
     * @memberof CohortMergePatch
     */
    recency?: RecencyMergePatch | null;
    /**
     * List of stream properties to filter cohort membership on. The stream properties must be for the same stream set as the cohort `stream_name`.
     * 
     * Nulls are excluded unless explicitly requested with `_null: true`.
     * @type {Array<CohortStreamCondition>}
     * @memberof CohortMergePatch
     */
    stream_conditions?: Array<CohortStreamCondition> | null;
    /**
     * The `name` field of the stream from which to build this cohort.
     * @type {string}
     * @memberof CohortMergePatch
     */
    stream_name?: string | null;
    /**
     * List of traits to filter cohort membership
     * @type {Array<CohortTrait>}
     * @memberof CohortMergePatch
     */
    traits?: Array<CohortTrait> | null;
}
/**
 * 
 * @export
 * @interface CohortPlaceCondition
 */
export interface CohortPlaceCondition {
    /**
     * A distance in meters which will be used to expand the Place's geometry. By default, the distance is set to 0 which means using the geometry itself, explicitly set your own value to override this. If the place is a set of addresses,
     * then each geocoded address point will be buffered by this amount. If the place is a geometry, the entire geometry will be expanded by this amount.
     * If the place is a GeometryCollect, each geometry will be expanded by this amount.
     * 
     * See the [PostGIS documentation](https://postgis.net/docs/ST_Buffer.html) for visual descriptions of how this expansion, called buffering, works.
     * @type {number}
     * @memberof CohortPlaceCondition
     */
    distance?: number;
    /**
     * By default, Place conditions will select people who intersect the place's geometry. If `invert` is set to `true`, then
     * instead, select people who *do not* intersect the Place's geometry.
     * @type {boolean}
     * @memberof CohortPlaceCondition
     */
    invert?: boolean;
    /**
     * The ID of a Place which should be used to filter this Cohort's membership spatially.
     * @type {string}
     * @memberof CohortPlaceCondition
     */
    place_id: string;
}
/**
 * (Parameters used to POST a new value of the `Cohort` type.)
 * 
 * A specific group of people, such as "Customers" or "Subscription customers".
 * @export
 * @interface CohortPost
 */
export interface CohortPost {
    /**
     * Whether to show the Cohort in Explore, the map view on https://app.faraday.ai.
     * 
     * This will slow down Cohort builds.
     * @type {boolean}
     * @memberof CohortPost
     */
    explore?: boolean;
    /**
     * Max count for this cohort's config
     * @type {number}
     * @memberof CohortPost
     */
    max_count?: number;
    /**
     * Max value for this cohort's config
     * @type {number}
     * @memberof CohortPost
     */
    max_value?: number;
    /**
     * Min count for this cohort's config
     * @type {number}
     * @memberof CohortPost
     */
    min_count?: number;
    /**
     * Min value for this cohort's config
     * @type {number}
     * @memberof CohortPost
     */
    min_value?: number;
    /**
     * Human-readable label for this cohort.
     * @type {string}
     * @memberof CohortPost
     */
    name: string;
    /**
     * List of places to use to spatially filter Cohort membership.
     * @type {Array<CohortPlaceCondition>}
     * @memberof CohortPost
     */
    place_conditions?: Array<CohortPlaceCondition>;
    /**
     * 
     * @type {RecencyPost}
     * @memberof CohortPost
     */
    recency?: RecencyPost;
    /**
     * List of stream properties to filter cohort membership on. The stream properties must be for the same stream set as the cohort `stream_name`.
     * 
     * Nulls are excluded unless explicitly requested with `_null: true`.
     * @type {Array<CohortStreamCondition>}
     * @memberof CohortPost
     */
    stream_conditions?: Array<CohortStreamCondition>;
    /**
     * The `name` field of the stream from which to build this cohort.
     * @type {string}
     * @memberof CohortPost
     */
    stream_name?: string;
    /**
     * List of traits to filter cohort membership
     * @type {Array<CohortTrait>}
     * @memberof CohortPost
     */
    traits?: Array<CohortTrait>;
}
/**
 * (Parameters used to PUT a value of the `Cohort` type.)
 * 
 * A specific group of people, such as "Customers" or "Subscription customers".
 * @export
 * @interface CohortPut
 */
export interface CohortPut {
    /**
     * Whether to show the Cohort in Explore, the map view on https://app.faraday.ai.
     * 
     * This will slow down Cohort builds.
     * @type {boolean}
     * @memberof CohortPut
     */
    explore?: boolean;
    /**
     * Max count for this cohort's config
     * @type {number}
     * @memberof CohortPut
     */
    max_count?: number;
    /**
     * Max value for this cohort's config
     * @type {number}
     * @memberof CohortPut
     */
    max_value?: number;
    /**
     * Min count for this cohort's config
     * @type {number}
     * @memberof CohortPut
     */
    min_count?: number;
    /**
     * Min value for this cohort's config
     * @type {number}
     * @memberof CohortPut
     */
    min_value?: number;
    /**
     * Human-readable label for this cohort.
     * @type {string}
     * @memberof CohortPut
     */
    name: string;
    /**
     * List of places to use to spatially filter Cohort membership.
     * @type {Array<CohortPlaceCondition>}
     * @memberof CohortPut
     */
    place_conditions?: Array<CohortPlaceCondition>;
    /**
     * 
     * @type {RecencyPut}
     * @memberof CohortPut
     */
    recency?: RecencyPut;
    /**
     * List of stream properties to filter cohort membership on. The stream properties must be for the same stream set as the cohort `stream_name`.
     * 
     * Nulls are excluded unless explicitly requested with `_null: true`.
     * @type {Array<CohortStreamCondition>}
     * @memberof CohortPut
     */
    stream_conditions?: Array<CohortStreamCondition>;
    /**
     * The `name` field of the stream from which to build this cohort.
     * @type {string}
     * @memberof CohortPut
     */
    stream_name?: string;
    /**
     * List of traits to filter cohort membership
     * @type {Array<CohortTrait>}
     * @memberof CohortPut
     */
    traits?: Array<CohortTrait>;
}
/**
 * 
 * @export
 * @interface CohortStreamCondition
 */
export interface CohortStreamCondition {
    /**
     * Equal to
     * @type {string}
     * @memberof CohortStreamCondition
     */
    _eq?: string;
    /**
     * Greater than
     * @type {number}
     * @memberof CohortStreamCondition
     */
    _gt?: number;
    /**
     * Greater than or equal to
     * @type {number}
     * @memberof CohortStreamCondition
     */
    _gte?: number;
    /**
     * Value is one of
     * @type {Array<string>}
     * @memberof CohortStreamCondition
     */
    _in?: Array<string>;
    /**
     * Less than
     * @type {number}
     * @memberof CohortStreamCondition
     */
    _lt?: number;
    /**
     * Less than or equal to
     * @type {number}
     * @memberof CohortStreamCondition
     */
    _lte?: number;
    /**
     * Value contains a match to the regex (re2) expression provided. For an exact regex match, use the ^ and $ characters as specified by the (re2 documentation)[https://github.com/google/re2/wiki/Syntax].
     * @type {string}
     * @memberof CohortStreamCondition
     */
    _matches?: string;
    /**
     * Value is not one of
     * @type {Array<string>}
     * @memberof CohortStreamCondition
     */
    _nin?: Array<string>;
    /**
     * Value is not null
     * @type {boolean}
     * @memberof CohortStreamCondition
     */
    _nnull?: boolean;
    /**
     * Value is null (nulls are otherwise excluded)
     * @type {boolean}
     * @memberof CohortStreamCondition
     */
    _null?: boolean;
    /**
     * Optional stream conditions are unioned together, when combined they define cohorts that meet either stream condition. At least one optional condition must be satisfied.
     * @type {boolean}
     * @memberof CohortStreamCondition
     */
    optional?: boolean;
    /**
     * Stream property name.
     * @type {string}
     * @memberof CohortStreamCondition
     */
    property: string;
}
/**
 * 
 * @export
 * @interface CohortTrait
 */
export interface CohortTrait {
    /**
     * Equal to
     * @type {string}
     * @memberof CohortTrait
     */
    _eq?: string;
    /**
     * Greater than
     * @type {number}
     * @memberof CohortTrait
     */
    _gt?: number;
    /**
     * Greater than or equal to
     * @type {number}
     * @memberof CohortTrait
     */
    _gte?: number;
    /**
     * Value is one of
     * @type {Array<string>}
     * @memberof CohortTrait
     */
    _in?: Array<string>;
    /**
     * Less than
     * @type {number}
     * @memberof CohortTrait
     */
    _lt?: number;
    /**
     * Less than or equal to
     * @type {number}
     * @memberof CohortTrait
     */
    _lte?: number;
    /**
     * Value contains a match to the regex (re2) expression provided. For an exact regex match, use the ^ and $ characters as specified by the (re2 documentation)[https://github.com/google/re2/wiki/Syntax].
     * @type {string}
     * @memberof CohortTrait
     */
    _matches?: string;
    /**
     * Value is not one of
     * @type {Array<string>}
     * @memberof CohortTrait
     */
    _nin?: Array<string>;
    /**
     * Value is not null
     * @type {boolean}
     * @memberof CohortTrait
     */
    _nnull?: boolean;
    /**
     * Value is null (nulls are otherwise excluded)
     * @type {boolean}
     * @memberof CohortTrait
     */
    _null?: boolean;
    /**
     * The name of the trait.
     * @type {string}
     * @memberof CohortTrait
     */
    name: string;
    /**
     * Optional trait conditions are unioned together, when combined they define cohorts that meet either trait condition - i.e. state = WA OR metro = Portland. At least one optional condition must be satisfied.
     * @type {boolean}
     * @memberof CohortTrait
     */
    optional?: boolean;
}
/**
 * @type ComplexDataType
 * The data type of a column in table, or of a trait. Types are expressed using a subset of
 * [Avro](https://avro.apache.org/docs/current/spec.html). Possible values include all the types
 * in `PrimitiveDataType`, plus more complex types like dates, timestamps and JSON.
 * @export
 */
export type ComplexDataType = ComplexDataTypeOneOf | PrimitiveDataType;
/**
 * 
 * @export
 * @interface ComplexDataTypeOneOf
 */
export interface ComplexDataTypeOneOf {
    /**
     * 
     * @type {string}
     * @memberof ComplexDataTypeOneOf
     */
    logicalType?: ComplexDataTypeOneOfLogicalTypeEnum;
    /**
     * 
     * @type {PrimitiveDataType}
     * @memberof ComplexDataTypeOneOf
     */
    type: PrimitiveDataType;
}

/**
* @export
* @enum {string}
*/
export enum ComplexDataTypeOneOfLogicalTypeEnum {
    Date = 'date',
    TimestampMillis = 'timestamp-millis',
    LocalTimestampMillis = 'local-timestamp-millis',
    Json = 'json',
    Uuid = 'uuid',
    Unknown = 'unknown'
}
/**
 * Configuration for connecting data between Faraday and an external location.
 * 
 * Connections are required when working with **replication targets**.
 * @export
 * @interface Connection
 */
export interface Connection {
    /**
     * If not null, this resource will no longer receive updates, but will still be visable.
     * @type {string}
     * @memberof Connection
     */
    archived_at?: string;
    /**
     * 
     * @type {Array<ContentsRow>}
     * @memberof Connection
     */
    contents?: Array<ContentsRow>;
    /**
     * The error encountered when trying to connect, if any
     * @type {string}
     * @memberof Connection
     */
    contents_error?: string;
    /**
     * When this resource was created.
     * @type {string}
     * @memberof Connection
     */
    created_at: string;
    /**
     * Whether the connection can be used as a source (for datasets), a destination (for targets), or both.
     * @type {string}
     * @memberof Connection
     */
    directionality: ConnectionDirectionalityEnum;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof Connection
     */
    id: string;
    /**
     * The last time this resource's input was read.
     * @type {string}
     * @memberof Connection
     */
    last_read_input_at?: string;
    /**
     * The last time this resource's configuration was updated. If this is more recent than last_updated_output_at, the resource will be rebuilt.
     * @type {string}
     * @memberof Connection
     */
    last_updated_config_at?: string;
    /**
     * The last time this resource successfully built.
     * @type {string}
     * @memberof Connection
     */
    last_updated_output_at?: string;
    /**
     * A managed connection requires special configuration from a Faraday admin, and is read-only.
     * @type {boolean}
     * @memberof Connection
     */
    managed?: boolean;
    /**
     * A user-friendly name of the connection.
     * @type {string}
     * @memberof Connection
     */
    name: string;
    /**
     * 
     * @type {ConnectionOptions}
     * @memberof Connection
     */
    options: ConnectionOptions;
    /**
     * The type of this resource.
     * @type {string}
     * @memberof Connection
     */
    resource_type: string;
    /**
     * 
     * @type {ResourceStatus}
     * @memberof Connection
     */
    status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {string}
     * @memberof Connection
     */
    status_changed_at?: string;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof Connection
     */
    status_error?: string;
    /**
     * When this resource was last updated.
     * @type {string}
     * @memberof Connection
     */
    updated_at: string;
}

/**
* @export
* @enum {string}
*/
export enum ConnectionDirectionalityEnum {
    Bidirectional = 'bidirectional',
    SourceOnly = 'source_only',
    DestinationOnly = 'destination_only'
}
/**
 * (Parameters used to PATCH the `Connection` type.)
 * 
 * Configuration for connecting data between Faraday and an external location.
 * 
 * Connections are required when working with **replication targets**.
 * @export
 * @interface ConnectionMergePatch
 */
export interface ConnectionMergePatch {
    /**
     * A user-friendly name of the connection.
     * @type {string}
     * @memberof ConnectionMergePatch
     */
    name?: string;
    /**
     * 
     * @type {ConnectionOptionsMergePatch}
     * @memberof ConnectionMergePatch
     */
    options?: ConnectionOptionsMergePatch;
}
/**
 * @type ConnectionOptions
 * The connection-specific options. These vary by connection type.
 * @export
 */
export type ConnectionOptions = { type: 'aws_aurora_mysql' } & ConnectionOptionsAwsAuroraMysql | { type: 'aws_aurora_postgres' } & ConnectionOptionsAwsAuroraPostgres | { type: 'aws_rds_mysql' } & ConnectionOptionsAwsRdsMysql | { type: 'aws_rds_postgres' } & ConnectionOptionsAwsRdsPostgres | { type: 'aws_rds_sql_server' } & ConnectionOptionsAwsRdsSqlServer | { type: 'aws_redshift_serverless' } & ConnectionOptionsAwsRedshiftServerless | { type: 'azure_sql_server' } & ConnectionOptionsAzureSqlServer | { type: 'bigquery' } & ConnectionOptionsBigQuery | { type: 'classic' } & ConnectionOptionsClassic | { type: 'facebook_custom_audiences' } & ConnectionOptionsFacebookCustomAudiences | { type: 'gcp_cloud_sql_mysql' } & ConnectionOptionsGcpCloudSqlMysql | { type: 'gcp_cloud_sql_postgres' } & ConnectionOptionsGcpCloudSqlPostgres | { type: 'gcp_cloud_sql_sql_server' } & ConnectionOptionsGcpCloudSqlSqlServer | { type: 'gcp_gcs_csv' } & ConnectionOptionsGcpGcsCsv | { type: 'google_ads' } & ConnectionOptionsGoogleAds | { type: 'hosted_csv' } & ConnectionOptionsHostedCsv | { type: 'hubspot' } & ConnectionOptionsHubspot | { type: 'iterable' } & ConnectionOptionsIterable | { type: 'klaviyo' } & ConnectionOptionsKlaviyo | { type: 'linkedin_ads' } & ConnectionOptionsLinkedinAds | { type: 'lookup_api' } & ConnectionOptionsLookupApi | { type: 'merge' } & ConnectionOptionsMerge | { type: 'motherduck' } & ConnectionOptionsMotherduck | { type: 'mysql' } & ConnectionOptionsMysql | { type: 'pinterest_ads' } & ConnectionOptionsPinterestAds | { type: 'poplar' } & ConnectionOptionsPoplar | { type: 'postgres' } & ConnectionOptionsPostgres | { type: 'recharge' } & ConnectionOptionsRecharge | { type: 'redshift' } & ConnectionOptionsRedshift | { type: 's3_csv' } & ConnectionOptionsS3Csv | { type: 'salesforce' } & ConnectionOptionsSalesforce | { type: 'salesforce_marketing_cloud' } & ConnectionOptionsSalesforceMarketingCloud | { type: 'segment' } & ConnectionOptionsSegment | { type: 'sftp' } & ConnectionOptionsSftp | { type: 'shopify' } & ConnectionOptionsShopify | { type: 'snowflake' } & ConnectionOptionsSnowflake | { type: 'sql_server' } & ConnectionOptionsSqlServer | { type: 'stripe' } & ConnectionOptionsStripe | { type: 'the_trade_desk' } & ConnectionOptionsTheTradeDesk | { type: 'tiktok' } & ConnectionOptionsTiktok;
/**
 * Aurora (MySQL) connection options
 * @export
 * @interface ConnectionOptionsAwsAuroraMysql
 */
export interface ConnectionOptionsAwsAuroraMysql {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysql
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysql
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysql
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysql
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsAuroraMysql
     */
    port: number;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysql
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysql
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysql
     */
    user: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsAwsAuroraMysql` type.)
 * 
 * Aurora (MySQL) connection options
 * @export
 * @interface ConnectionOptionsAwsAuroraMysqlMergePatch
 */
export interface ConnectionOptionsAwsAuroraMysqlMergePatch {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysqlMergePatch
     */
    database?: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysqlMergePatch
     */
    host?: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysqlMergePatch
     */
    load_balancer?: string | null;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysqlMergePatch
     */
    password?: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsAuroraMysqlMergePatch
     */
    port?: number;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysqlMergePatch
     */
    ssh_bastion?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysqlMergePatch
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysqlMergePatch
     */
    user?: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsAwsAuroraMysql` type.)
 * 
 * Aurora (MySQL) connection options
 * @export
 * @interface ConnectionOptionsAwsAuroraMysqlPost
 */
export interface ConnectionOptionsAwsAuroraMysqlPost {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysqlPost
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysqlPost
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysqlPost
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysqlPost
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsAuroraMysqlPost
     */
    port: number;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysqlPost
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysqlPost
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysqlPost
     */
    user: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsAwsAuroraMysql` type.)
 * 
 * Aurora (MySQL) connection options
 * @export
 * @interface ConnectionOptionsAwsAuroraMysqlPut
 */
export interface ConnectionOptionsAwsAuroraMysqlPut {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysqlPut
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysqlPut
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysqlPut
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysqlPut
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsAuroraMysqlPut
     */
    port: number;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysqlPut
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysqlPut
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraMysqlPut
     */
    user: string;
}
/**
 * AWS Aurora Postgres connection options
 * @export
 * @interface ConnectionOptionsAwsAuroraPostgres
 */
export interface ConnectionOptionsAwsAuroraPostgres {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgres
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgres
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgres
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgres
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsAuroraPostgres
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgres
     */
    schema: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgres
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgres
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgres
     */
    user: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsAwsAuroraPostgres` type.)
 * 
 * AWS Aurora Postgres connection options
 * @export
 * @interface ConnectionOptionsAwsAuroraPostgresMergePatch
 */
export interface ConnectionOptionsAwsAuroraPostgresMergePatch {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgresMergePatch
     */
    database?: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgresMergePatch
     */
    host?: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgresMergePatch
     */
    load_balancer?: string | null;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgresMergePatch
     */
    password?: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsAuroraPostgresMergePatch
     */
    port?: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgresMergePatch
     */
    schema?: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgresMergePatch
     */
    ssh_bastion?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgresMergePatch
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgresMergePatch
     */
    user?: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsAwsAuroraPostgres` type.)
 * 
 * AWS Aurora Postgres connection options
 * @export
 * @interface ConnectionOptionsAwsAuroraPostgresPost
 */
export interface ConnectionOptionsAwsAuroraPostgresPost {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgresPost
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgresPost
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgresPost
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgresPost
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsAuroraPostgresPost
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgresPost
     */
    schema: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgresPost
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgresPost
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgresPost
     */
    user: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsAwsAuroraPostgres` type.)
 * 
 * AWS Aurora Postgres connection options
 * @export
 * @interface ConnectionOptionsAwsAuroraPostgresPut
 */
export interface ConnectionOptionsAwsAuroraPostgresPut {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgresPut
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgresPut
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgresPut
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgresPut
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsAuroraPostgresPut
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgresPut
     */
    schema: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgresPut
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgresPut
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsAuroraPostgresPut
     */
    user: string;
}
/**
 * RDS (MySQL) connection options
 * @export
 * @interface ConnectionOptionsAwsRdsMysql
 */
export interface ConnectionOptionsAwsRdsMysql {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsMysql
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsMysql
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsMysql
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsMysql
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsRdsMysql
     */
    port: number;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsMysql
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsMysql
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsMysql
     */
    user: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsAwsRdsMysql` type.)
 * 
 * RDS (MySQL) connection options
 * @export
 * @interface ConnectionOptionsAwsRdsMysqlMergePatch
 */
export interface ConnectionOptionsAwsRdsMysqlMergePatch {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsMysqlMergePatch
     */
    database?: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsMysqlMergePatch
     */
    host?: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsMysqlMergePatch
     */
    load_balancer?: string | null;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsMysqlMergePatch
     */
    password?: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsRdsMysqlMergePatch
     */
    port?: number;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsMysqlMergePatch
     */
    ssh_bastion?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsMysqlMergePatch
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsMysqlMergePatch
     */
    user?: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsAwsRdsMysql` type.)
 * 
 * RDS (MySQL) connection options
 * @export
 * @interface ConnectionOptionsAwsRdsMysqlPost
 */
export interface ConnectionOptionsAwsRdsMysqlPost {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsMysqlPost
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsMysqlPost
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsMysqlPost
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsMysqlPost
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsRdsMysqlPost
     */
    port: number;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsMysqlPost
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsMysqlPost
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsMysqlPost
     */
    user: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsAwsRdsMysql` type.)
 * 
 * RDS (MySQL) connection options
 * @export
 * @interface ConnectionOptionsAwsRdsMysqlPut
 */
export interface ConnectionOptionsAwsRdsMysqlPut {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsMysqlPut
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsMysqlPut
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsMysqlPut
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsMysqlPut
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsRdsMysqlPut
     */
    port: number;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsMysqlPut
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsMysqlPut
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsMysqlPut
     */
    user: string;
}
/**
 * RDS (Postgres) connection options
 * @export
 * @interface ConnectionOptionsAwsRdsPostgres
 */
export interface ConnectionOptionsAwsRdsPostgres {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgres
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgres
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgres
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgres
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsRdsPostgres
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgres
     */
    schema: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgres
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgres
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgres
     */
    user: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsAwsRdsPostgres` type.)
 * 
 * RDS (Postgres) connection options
 * @export
 * @interface ConnectionOptionsAwsRdsPostgresMergePatch
 */
export interface ConnectionOptionsAwsRdsPostgresMergePatch {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresMergePatch
     */
    database?: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresMergePatch
     */
    host?: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresMergePatch
     */
    load_balancer?: string | null;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresMergePatch
     */
    password?: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsRdsPostgresMergePatch
     */
    port?: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresMergePatch
     */
    schema?: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresMergePatch
     */
    ssh_bastion?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresMergePatch
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresMergePatch
     */
    user?: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsAwsRdsPostgres` type.)
 * 
 * RDS (Postgres) connection options
 * @export
 * @interface ConnectionOptionsAwsRdsPostgresPost
 */
export interface ConnectionOptionsAwsRdsPostgresPost {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresPost
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresPost
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresPost
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresPost
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsRdsPostgresPost
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresPost
     */
    schema: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresPost
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresPost
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresPost
     */
    user: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsAwsRdsPostgres` type.)
 * 
 * RDS (Postgres) connection options
 * @export
 * @interface ConnectionOptionsAwsRdsPostgresPut
 */
export interface ConnectionOptionsAwsRdsPostgresPut {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresPut
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresPut
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresPut
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresPut
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsRdsPostgresPut
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresPut
     */
    schema: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresPut
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresPut
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsPostgresPut
     */
    user: string;
}
/**
 * RDS (SQL Server) connection options
 * @export
 * @interface ConnectionOptionsAwsRdsSqlServer
 */
export interface ConnectionOptionsAwsRdsSqlServer {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServer
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServer
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServer
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServer
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsRdsSqlServer
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServer
     */
    schema?: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServer
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServer
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServer
     */
    user: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsAwsRdsSqlServer` type.)
 * 
 * RDS (SQL Server) connection options
 * @export
 * @interface ConnectionOptionsAwsRdsSqlServerMergePatch
 */
export interface ConnectionOptionsAwsRdsSqlServerMergePatch {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerMergePatch
     */
    database?: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerMergePatch
     */
    host?: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerMergePatch
     */
    load_balancer?: string | null;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerMergePatch
     */
    password?: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsRdsSqlServerMergePatch
     */
    port?: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerMergePatch
     */
    schema?: string | null;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerMergePatch
     */
    ssh_bastion?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerMergePatch
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerMergePatch
     */
    user?: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsAwsRdsSqlServer` type.)
 * 
 * RDS (SQL Server) connection options
 * @export
 * @interface ConnectionOptionsAwsRdsSqlServerPost
 */
export interface ConnectionOptionsAwsRdsSqlServerPost {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerPost
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerPost
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerPost
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerPost
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsRdsSqlServerPost
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerPost
     */
    schema?: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerPost
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerPost
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerPost
     */
    user: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsAwsRdsSqlServer` type.)
 * 
 * RDS (SQL Server) connection options
 * @export
 * @interface ConnectionOptionsAwsRdsSqlServerPut
 */
export interface ConnectionOptionsAwsRdsSqlServerPut {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerPut
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerPut
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerPut
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerPut
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsRdsSqlServerPut
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerPut
     */
    schema?: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerPut
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerPut
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsRdsSqlServerPut
     */
    user: string;
}
/**
 * Redshift Serverless connection options
 * @export
 * @interface ConnectionOptionsAwsRedshiftServerless
 */
export interface ConnectionOptionsAwsRedshiftServerless {
    /**
     * Redshift tables exists inside of an AWS region, e.g. us-east-1
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerless
     */
    aws_region: string;
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerless
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerless
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerless
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerless
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsRedshiftServerless
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerless
     */
    schema: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerless
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerless
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerless
     */
    user: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsAwsRedshiftServerless` type.)
 * 
 * Redshift Serverless connection options
 * @export
 * @interface ConnectionOptionsAwsRedshiftServerlessMergePatch
 */
export interface ConnectionOptionsAwsRedshiftServerlessMergePatch {
    /**
     * Redshift tables exists inside of an AWS region, e.g. us-east-1
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerlessMergePatch
     */
    aws_region?: string;
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerlessMergePatch
     */
    database?: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerlessMergePatch
     */
    host?: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerlessMergePatch
     */
    load_balancer?: string | null;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerlessMergePatch
     */
    password?: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsRedshiftServerlessMergePatch
     */
    port?: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerlessMergePatch
     */
    schema?: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerlessMergePatch
     */
    ssh_bastion?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerlessMergePatch
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerlessMergePatch
     */
    user?: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsAwsRedshiftServerless` type.)
 * 
 * Redshift Serverless connection options
 * @export
 * @interface ConnectionOptionsAwsRedshiftServerlessPost
 */
export interface ConnectionOptionsAwsRedshiftServerlessPost {
    /**
     * Redshift tables exists inside of an AWS region, e.g. us-east-1
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerlessPost
     */
    aws_region: string;
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerlessPost
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerlessPost
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerlessPost
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerlessPost
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsRedshiftServerlessPost
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerlessPost
     */
    schema: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerlessPost
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerlessPost
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerlessPost
     */
    user: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsAwsRedshiftServerless` type.)
 * 
 * Redshift Serverless connection options
 * @export
 * @interface ConnectionOptionsAwsRedshiftServerlessPut
 */
export interface ConnectionOptionsAwsRedshiftServerlessPut {
    /**
     * Redshift tables exists inside of an AWS region, e.g. us-east-1
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerlessPut
     */
    aws_region: string;
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerlessPut
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerlessPut
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerlessPut
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerlessPut
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAwsRedshiftServerlessPut
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerlessPut
     */
    schema: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerlessPut
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerlessPut
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAwsRedshiftServerlessPut
     */
    user: string;
}
/**
 * Azure SQL connection options
 * @export
 * @interface ConnectionOptionsAzureSqlServer
 */
export interface ConnectionOptionsAzureSqlServer {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServer
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServer
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServer
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServer
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAzureSqlServer
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServer
     */
    schema?: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServer
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServer
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServer
     */
    user: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsAzureSqlServer` type.)
 * 
 * Azure SQL connection options
 * @export
 * @interface ConnectionOptionsAzureSqlServerMergePatch
 */
export interface ConnectionOptionsAzureSqlServerMergePatch {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerMergePatch
     */
    database?: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerMergePatch
     */
    host?: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerMergePatch
     */
    load_balancer?: string | null;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerMergePatch
     */
    password?: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAzureSqlServerMergePatch
     */
    port?: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerMergePatch
     */
    schema?: string | null;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerMergePatch
     */
    ssh_bastion?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerMergePatch
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerMergePatch
     */
    user?: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsAzureSqlServer` type.)
 * 
 * Azure SQL connection options
 * @export
 * @interface ConnectionOptionsAzureSqlServerPost
 */
export interface ConnectionOptionsAzureSqlServerPost {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPost
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPost
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPost
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPost
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAzureSqlServerPost
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPost
     */
    schema?: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPost
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPost
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPost
     */
    user: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsAzureSqlServer` type.)
 * 
 * Azure SQL connection options
 * @export
 * @interface ConnectionOptionsAzureSqlServerPut
 */
export interface ConnectionOptionsAzureSqlServerPut {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPut
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPut
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPut
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPut
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsAzureSqlServerPut
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPut
     */
    schema?: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPut
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPut
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsAzureSqlServerPut
     */
    user: string;
}
/**
 * BigQuery connection options
 * @export
 * @interface ConnectionOptionsBigQuery
 */
export interface ConnectionOptionsBigQuery {
    /**
     * Dataset name
     * @type {string}
     * @memberof ConnectionOptionsBigQuery
     */
    dataset_name: string;
    /**
     * Project ID
     * @type {string}
     * @memberof ConnectionOptionsBigQuery
     */
    project_id: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsBigQuery
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsBigQuery` type.)
 * 
 * BigQuery connection options
 * @export
 * @interface ConnectionOptionsBigQueryMergePatch
 */
export interface ConnectionOptionsBigQueryMergePatch {
    /**
     * Dataset name
     * @type {string}
     * @memberof ConnectionOptionsBigQueryMergePatch
     */
    dataset_name?: string;
    /**
     * Project ID
     * @type {string}
     * @memberof ConnectionOptionsBigQueryMergePatch
     */
    project_id?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsBigQueryMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsBigQuery` type.)
 * 
 * BigQuery connection options
 * @export
 * @interface ConnectionOptionsBigQueryPost
 */
export interface ConnectionOptionsBigQueryPost {
    /**
     * Dataset name
     * @type {string}
     * @memberof ConnectionOptionsBigQueryPost
     */
    dataset_name: string;
    /**
     * Project ID
     * @type {string}
     * @memberof ConnectionOptionsBigQueryPost
     */
    project_id: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsBigQueryPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsBigQuery` type.)
 * 
 * BigQuery connection options
 * @export
 * @interface ConnectionOptionsBigQueryPut
 */
export interface ConnectionOptionsBigQueryPut {
    /**
     * Dataset name
     * @type {string}
     * @memberof ConnectionOptionsBigQueryPut
     */
    dataset_name: string;
    /**
     * Project ID
     * @type {string}
     * @memberof ConnectionOptionsBigQueryPut
     */
    project_id: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsBigQueryPut
     */
    type: string;
}
/**
 * Classic Faraday Sources connection options
 * @export
 * @interface ConnectionOptionsClassic
 */
export interface ConnectionOptionsClassic {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsClassic
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsClassic` type.)
 * 
 * Classic Faraday Sources connection options
 * @export
 * @interface ConnectionOptionsClassicMergePatch
 */
export interface ConnectionOptionsClassicMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsClassicMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsClassic` type.)
 * 
 * Classic Faraday Sources connection options
 * @export
 * @interface ConnectionOptionsClassicPost
 */
export interface ConnectionOptionsClassicPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsClassicPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsClassic` type.)
 * 
 * Classic Faraday Sources connection options
 * @export
 * @interface ConnectionOptionsClassicPut
 */
export interface ConnectionOptionsClassicPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsClassicPut
     */
    type: string;
}
/**
 * Facebook Custom Audiences connection options
 * @export
 * @interface ConnectionOptionsFacebookCustomAudiences
 */
export interface ConnectionOptionsFacebookCustomAudiences {
    /**
     * The Facebook ad account ID (numeric).
     * @type {string}
     * @memberof ConnectionOptionsFacebookCustomAudiences
     */
    account_id: string;
    /**
     * The Facebook ad account literate.
     * @type {string}
     * @memberof ConnectionOptionsFacebookCustomAudiences
     */
    account_literate?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsFacebookCustomAudiences
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsFacebookCustomAudiences` type.)
 * 
 * Facebook Custom Audiences connection options
 * @export
 * @interface ConnectionOptionsFacebookCustomAudiencesMergePatch
 */
export interface ConnectionOptionsFacebookCustomAudiencesMergePatch {
    /**
     * The Facebook ad account ID (numeric).
     * @type {string}
     * @memberof ConnectionOptionsFacebookCustomAudiencesMergePatch
     */
    account_id?: string;
    /**
     * The Facebook ad account literate.
     * @type {string}
     * @memberof ConnectionOptionsFacebookCustomAudiencesMergePatch
     */
    account_literate?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsFacebookCustomAudiencesMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsFacebookCustomAudiences` type.)
 * 
 * Facebook Custom Audiences connection options
 * @export
 * @interface ConnectionOptionsFacebookCustomAudiencesPost
 */
export interface ConnectionOptionsFacebookCustomAudiencesPost {
    /**
     * The Facebook ad account ID (numeric).
     * @type {string}
     * @memberof ConnectionOptionsFacebookCustomAudiencesPost
     */
    account_id: string;
    /**
     * The Facebook ad account literate.
     * @type {string}
     * @memberof ConnectionOptionsFacebookCustomAudiencesPost
     */
    account_literate?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsFacebookCustomAudiencesPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsFacebookCustomAudiences` type.)
 * 
 * Facebook Custom Audiences connection options
 * @export
 * @interface ConnectionOptionsFacebookCustomAudiencesPut
 */
export interface ConnectionOptionsFacebookCustomAudiencesPut {
    /**
     * The Facebook ad account ID (numeric).
     * @type {string}
     * @memberof ConnectionOptionsFacebookCustomAudiencesPut
     */
    account_id: string;
    /**
     * The Facebook ad account literate.
     * @type {string}
     * @memberof ConnectionOptionsFacebookCustomAudiencesPut
     */
    account_literate?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsFacebookCustomAudiencesPut
     */
    type: string;
}
/**
 * Google Cloud SQL (MySQL) connection options
 * @export
 * @interface ConnectionOptionsGcpCloudSqlMysql
 */
export interface ConnectionOptionsGcpCloudSqlMysql {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysql
     */
    database: string;
    /**
     * For use with Cloud SQL proxy. Client must enable Cloud SQL Admin API and give IAM role "Cloud SQL Client" to our service account faraday-incoming@production-237317.iam.gserviceaccount.com (Datasets) or faraday-outgoing@production-237317.iam.gserviceaccount.com (Targets).
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysql
     */
    instance_connection_name: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysql
     */
    password: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysql
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysql
     */
    user: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsGcpCloudSqlMysql` type.)
 * 
 * Google Cloud SQL (MySQL) connection options
 * @export
 * @interface ConnectionOptionsGcpCloudSqlMysqlMergePatch
 */
export interface ConnectionOptionsGcpCloudSqlMysqlMergePatch {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysqlMergePatch
     */
    database?: string;
    /**
     * For use with Cloud SQL proxy. Client must enable Cloud SQL Admin API and give IAM role "Cloud SQL Client" to our service account faraday-incoming@production-237317.iam.gserviceaccount.com (Datasets) or faraday-outgoing@production-237317.iam.gserviceaccount.com (Targets).
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysqlMergePatch
     */
    instance_connection_name?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysqlMergePatch
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysqlMergePatch
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysqlMergePatch
     */
    user?: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsGcpCloudSqlMysql` type.)
 * 
 * Google Cloud SQL (MySQL) connection options
 * @export
 * @interface ConnectionOptionsGcpCloudSqlMysqlPost
 */
export interface ConnectionOptionsGcpCloudSqlMysqlPost {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysqlPost
     */
    database: string;
    /**
     * For use with Cloud SQL proxy. Client must enable Cloud SQL Admin API and give IAM role "Cloud SQL Client" to our service account faraday-incoming@production-237317.iam.gserviceaccount.com (Datasets) or faraday-outgoing@production-237317.iam.gserviceaccount.com (Targets).
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysqlPost
     */
    instance_connection_name: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysqlPost
     */
    password: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysqlPost
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysqlPost
     */
    user: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsGcpCloudSqlMysql` type.)
 * 
 * Google Cloud SQL (MySQL) connection options
 * @export
 * @interface ConnectionOptionsGcpCloudSqlMysqlPut
 */
export interface ConnectionOptionsGcpCloudSqlMysqlPut {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysqlPut
     */
    database: string;
    /**
     * For use with Cloud SQL proxy. Client must enable Cloud SQL Admin API and give IAM role "Cloud SQL Client" to our service account faraday-incoming@production-237317.iam.gserviceaccount.com (Datasets) or faraday-outgoing@production-237317.iam.gserviceaccount.com (Targets).
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysqlPut
     */
    instance_connection_name: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysqlPut
     */
    password: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysqlPut
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlMysqlPut
     */
    user: string;
}
/**
 * Google Cloud SQL (Postgres) connection options
 * @export
 * @interface ConnectionOptionsGcpCloudSqlPostgres
 */
export interface ConnectionOptionsGcpCloudSqlPostgres {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgres
     */
    database: string;
    /**
     * For use with Cloud SQL proxy. Client must enable Cloud SQL Admin API and give IAM role "Cloud SQL Client" to our service account faraday-incoming@production-237317.iam.gserviceaccount.com (Datasets) or faraday-outgoing@production-237317.iam.gserviceaccount.com (Targets).
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgres
     */
    instance_connection_name: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgres
     */
    password: string;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgres
     */
    schema: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgres
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgres
     */
    user: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsGcpCloudSqlPostgres` type.)
 * 
 * Google Cloud SQL (Postgres) connection options
 * @export
 * @interface ConnectionOptionsGcpCloudSqlPostgresMergePatch
 */
export interface ConnectionOptionsGcpCloudSqlPostgresMergePatch {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresMergePatch
     */
    database?: string;
    /**
     * For use with Cloud SQL proxy. Client must enable Cloud SQL Admin API and give IAM role "Cloud SQL Client" to our service account faraday-incoming@production-237317.iam.gserviceaccount.com (Datasets) or faraday-outgoing@production-237317.iam.gserviceaccount.com (Targets).
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresMergePatch
     */
    instance_connection_name?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresMergePatch
     */
    password?: string;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresMergePatch
     */
    schema?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresMergePatch
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresMergePatch
     */
    user?: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsGcpCloudSqlPostgres` type.)
 * 
 * Google Cloud SQL (Postgres) connection options
 * @export
 * @interface ConnectionOptionsGcpCloudSqlPostgresPost
 */
export interface ConnectionOptionsGcpCloudSqlPostgresPost {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresPost
     */
    database: string;
    /**
     * For use with Cloud SQL proxy. Client must enable Cloud SQL Admin API and give IAM role "Cloud SQL Client" to our service account faraday-incoming@production-237317.iam.gserviceaccount.com (Datasets) or faraday-outgoing@production-237317.iam.gserviceaccount.com (Targets).
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresPost
     */
    instance_connection_name: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresPost
     */
    password: string;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresPost
     */
    schema: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresPost
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresPost
     */
    user: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsGcpCloudSqlPostgres` type.)
 * 
 * Google Cloud SQL (Postgres) connection options
 * @export
 * @interface ConnectionOptionsGcpCloudSqlPostgresPut
 */
export interface ConnectionOptionsGcpCloudSqlPostgresPut {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresPut
     */
    database: string;
    /**
     * For use with Cloud SQL proxy. Client must enable Cloud SQL Admin API and give IAM role "Cloud SQL Client" to our service account faraday-incoming@production-237317.iam.gserviceaccount.com (Datasets) or faraday-outgoing@production-237317.iam.gserviceaccount.com (Targets).
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresPut
     */
    instance_connection_name: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresPut
     */
    password: string;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresPut
     */
    schema: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresPut
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlPostgresPut
     */
    user: string;
}
/**
 * Google Cloud SQL (SQL Server) connection options
 * @export
 * @interface ConnectionOptionsGcpCloudSqlSqlServer
 */
export interface ConnectionOptionsGcpCloudSqlSqlServer {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServer
     */
    database: string;
    /**
     * For use with Cloud SQL proxy. Client must enable Cloud SQL Admin API and give IAM role "Cloud SQL Client" to our service account faraday-incoming@production-237317.iam.gserviceaccount.com (Datasets) or faraday-outgoing@production-237317.iam.gserviceaccount.com (Targets).
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServer
     */
    instance_connection_name: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServer
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServer
     */
    password: string;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServer
     */
    schema?: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServer
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServer
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServer
     */
    user: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsGcpCloudSqlSqlServer` type.)
 * 
 * Google Cloud SQL (SQL Server) connection options
 * @export
 * @interface ConnectionOptionsGcpCloudSqlSqlServerMergePatch
 */
export interface ConnectionOptionsGcpCloudSqlSqlServerMergePatch {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerMergePatch
     */
    database?: string;
    /**
     * For use with Cloud SQL proxy. Client must enable Cloud SQL Admin API and give IAM role "Cloud SQL Client" to our service account faraday-incoming@production-237317.iam.gserviceaccount.com (Datasets) or faraday-outgoing@production-237317.iam.gserviceaccount.com (Targets).
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerMergePatch
     */
    instance_connection_name?: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerMergePatch
     */
    load_balancer?: string | null;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerMergePatch
     */
    password?: string;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerMergePatch
     */
    schema?: string | null;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerMergePatch
     */
    ssh_bastion?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerMergePatch
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerMergePatch
     */
    user?: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsGcpCloudSqlSqlServer` type.)
 * 
 * Google Cloud SQL (SQL Server) connection options
 * @export
 * @interface ConnectionOptionsGcpCloudSqlSqlServerPost
 */
export interface ConnectionOptionsGcpCloudSqlSqlServerPost {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPost
     */
    database: string;
    /**
     * For use with Cloud SQL proxy. Client must enable Cloud SQL Admin API and give IAM role "Cloud SQL Client" to our service account faraday-incoming@production-237317.iam.gserviceaccount.com (Datasets) or faraday-outgoing@production-237317.iam.gserviceaccount.com (Targets).
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPost
     */
    instance_connection_name: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPost
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPost
     */
    password: string;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPost
     */
    schema?: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPost
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPost
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPost
     */
    user: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsGcpCloudSqlSqlServer` type.)
 * 
 * Google Cloud SQL (SQL Server) connection options
 * @export
 * @interface ConnectionOptionsGcpCloudSqlSqlServerPut
 */
export interface ConnectionOptionsGcpCloudSqlSqlServerPut {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPut
     */
    database: string;
    /**
     * For use with Cloud SQL proxy. Client must enable Cloud SQL Admin API and give IAM role "Cloud SQL Client" to our service account faraday-incoming@production-237317.iam.gserviceaccount.com (Datasets) or faraday-outgoing@production-237317.iam.gserviceaccount.com (Targets).
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPut
     */
    instance_connection_name: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPut
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPut
     */
    password: string;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPut
     */
    schema?: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPut
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPut
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsGcpCloudSqlSqlServerPut
     */
    user: string;
}
/**
 * GCS connection options
 * @export
 * @interface ConnectionOptionsGcpGcsCsv
 */
export interface ConnectionOptionsGcpGcsCsv {
    /**
     * Bucket name
     * @type {string}
     * @memberof ConnectionOptionsGcpGcsCsv
     */
    bucket_name: string;
    /**
     * Project ID
     * @type {string}
     * @memberof ConnectionOptionsGcpGcsCsv
     */
    project_id: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGcpGcsCsv
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsGcpGcsCsv` type.)
 * 
 * GCS connection options
 * @export
 * @interface ConnectionOptionsGcpGcsCsvMergePatch
 */
export interface ConnectionOptionsGcpGcsCsvMergePatch {
    /**
     * Bucket name
     * @type {string}
     * @memberof ConnectionOptionsGcpGcsCsvMergePatch
     */
    bucket_name?: string;
    /**
     * Project ID
     * @type {string}
     * @memberof ConnectionOptionsGcpGcsCsvMergePatch
     */
    project_id?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGcpGcsCsvMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsGcpGcsCsv` type.)
 * 
 * GCS connection options
 * @export
 * @interface ConnectionOptionsGcpGcsCsvPost
 */
export interface ConnectionOptionsGcpGcsCsvPost {
    /**
     * Bucket name
     * @type {string}
     * @memberof ConnectionOptionsGcpGcsCsvPost
     */
    bucket_name: string;
    /**
     * Project ID
     * @type {string}
     * @memberof ConnectionOptionsGcpGcsCsvPost
     */
    project_id: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGcpGcsCsvPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsGcpGcsCsv` type.)
 * 
 * GCS connection options
 * @export
 * @interface ConnectionOptionsGcpGcsCsvPut
 */
export interface ConnectionOptionsGcpGcsCsvPut {
    /**
     * Bucket name
     * @type {string}
     * @memberof ConnectionOptionsGcpGcsCsvPut
     */
    bucket_name: string;
    /**
     * Project ID
     * @type {string}
     * @memberof ConnectionOptionsGcpGcsCsvPut
     */
    project_id: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGcpGcsCsvPut
     */
    type: string;
}
/**
 * Google Ads connection options
 * @export
 * @interface ConnectionOptionsGoogleAds
 */
export interface ConnectionOptionsGoogleAds {
    /**
     * Customer ID for the Google Ads connection
     * @type {string}
     * @memberof ConnectionOptionsGoogleAds
     */
    customer_id?: string;
    /**
     * Password for the Google Ads connection
     * @type {string}
     * @memberof ConnectionOptionsGoogleAds
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGoogleAds
     */
    type: string;
    /**
     * Username for the Google Ads connection
     * @type {string}
     * @memberof ConnectionOptionsGoogleAds
     */
    username?: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsGoogleAds` type.)
 * 
 * Google Ads connection options
 * @export
 * @interface ConnectionOptionsGoogleAdsMergePatch
 */
export interface ConnectionOptionsGoogleAdsMergePatch {
    /**
     * Customer ID for the Google Ads connection
     * @type {string}
     * @memberof ConnectionOptionsGoogleAdsMergePatch
     */
    customer_id?: string | null;
    /**
     * Password for the Google Ads connection
     * @type {string}
     * @memberof ConnectionOptionsGoogleAdsMergePatch
     */
    password?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGoogleAdsMergePatch
     */
    type: string;
    /**
     * Username for the Google Ads connection
     * @type {string}
     * @memberof ConnectionOptionsGoogleAdsMergePatch
     */
    username?: string | null;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsGoogleAds` type.)
 * 
 * Google Ads connection options
 * @export
 * @interface ConnectionOptionsGoogleAdsPost
 */
export interface ConnectionOptionsGoogleAdsPost {
    /**
     * Customer ID for the Google Ads connection
     * @type {string}
     * @memberof ConnectionOptionsGoogleAdsPost
     */
    customer_id?: string;
    /**
     * Password for the Google Ads connection
     * @type {string}
     * @memberof ConnectionOptionsGoogleAdsPost
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGoogleAdsPost
     */
    type: string;
    /**
     * Username for the Google Ads connection
     * @type {string}
     * @memberof ConnectionOptionsGoogleAdsPost
     */
    username?: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsGoogleAds` type.)
 * 
 * Google Ads connection options
 * @export
 * @interface ConnectionOptionsGoogleAdsPut
 */
export interface ConnectionOptionsGoogleAdsPut {
    /**
     * Customer ID for the Google Ads connection
     * @type {string}
     * @memberof ConnectionOptionsGoogleAdsPut
     */
    customer_id?: string;
    /**
     * Password for the Google Ads connection
     * @type {string}
     * @memberof ConnectionOptionsGoogleAdsPut
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsGoogleAdsPut
     */
    type: string;
    /**
     * Username for the Google Ads connection
     * @type {string}
     * @memberof ConnectionOptionsGoogleAdsPut
     */
    username?: string;
}
/**
 * CSV connection options
 * @export
 * @interface ConnectionOptionsHostedCsv
 */
export interface ConnectionOptionsHostedCsv {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsHostedCsv
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsHostedCsv` type.)
 * 
 * CSV connection options
 * @export
 * @interface ConnectionOptionsHostedCsvMergePatch
 */
export interface ConnectionOptionsHostedCsvMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsHostedCsvMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsHostedCsv` type.)
 * 
 * CSV connection options
 * @export
 * @interface ConnectionOptionsHostedCsvPost
 */
export interface ConnectionOptionsHostedCsvPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsHostedCsvPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsHostedCsv` type.)
 * 
 * CSV connection options
 * @export
 * @interface ConnectionOptionsHostedCsvPut
 */
export interface ConnectionOptionsHostedCsvPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsHostedCsvPut
     */
    type: string;
}
/**
 * HubSpot connection options
 * @export
 * @interface ConnectionOptionsHubspot
 */
export interface ConnectionOptionsHubspot {
    /**
     * Password for the HubSpot connection
     * @type {string}
     * @memberof ConnectionOptionsHubspot
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsHubspot
     */
    type: string;
    /**
     * Username for the HubSpot connection
     * @type {string}
     * @memberof ConnectionOptionsHubspot
     */
    username?: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsHubspot` type.)
 * 
 * HubSpot connection options
 * @export
 * @interface ConnectionOptionsHubspotMergePatch
 */
export interface ConnectionOptionsHubspotMergePatch {
    /**
     * Password for the HubSpot connection
     * @type {string}
     * @memberof ConnectionOptionsHubspotMergePatch
     */
    password?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsHubspotMergePatch
     */
    type: string;
    /**
     * Username for the HubSpot connection
     * @type {string}
     * @memberof ConnectionOptionsHubspotMergePatch
     */
    username?: string | null;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsHubspot` type.)
 * 
 * HubSpot connection options
 * @export
 * @interface ConnectionOptionsHubspotPost
 */
export interface ConnectionOptionsHubspotPost {
    /**
     * Password for the HubSpot connection
     * @type {string}
     * @memberof ConnectionOptionsHubspotPost
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsHubspotPost
     */
    type: string;
    /**
     * Username for the HubSpot connection
     * @type {string}
     * @memberof ConnectionOptionsHubspotPost
     */
    username?: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsHubspot` type.)
 * 
 * HubSpot connection options
 * @export
 * @interface ConnectionOptionsHubspotPut
 */
export interface ConnectionOptionsHubspotPut {
    /**
     * Password for the HubSpot connection
     * @type {string}
     * @memberof ConnectionOptionsHubspotPut
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsHubspotPut
     */
    type: string;
    /**
     * Username for the HubSpot connection
     * @type {string}
     * @memberof ConnectionOptionsHubspotPut
     */
    username?: string;
}
/**
 * Iterable connection options
 * @export
 * @interface ConnectionOptionsIterable
 */
export interface ConnectionOptionsIterable {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsIterable
     */
    type: string;
    /**
     * Webhook URL for the Iterable connection
     * @type {string}
     * @memberof ConnectionOptionsIterable
     */
    webhook_url?: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsIterable` type.)
 * 
 * Iterable connection options
 * @export
 * @interface ConnectionOptionsIterableMergePatch
 */
export interface ConnectionOptionsIterableMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsIterableMergePatch
     */
    type: string;
    /**
     * Webhook URL for the Iterable connection
     * @type {string}
     * @memberof ConnectionOptionsIterableMergePatch
     */
    webhook_url?: string | null;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsIterable` type.)
 * 
 * Iterable connection options
 * @export
 * @interface ConnectionOptionsIterablePost
 */
export interface ConnectionOptionsIterablePost {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsIterablePost
     */
    type: string;
    /**
     * Webhook URL for the Iterable connection
     * @type {string}
     * @memberof ConnectionOptionsIterablePost
     */
    webhook_url?: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsIterable` type.)
 * 
 * Iterable connection options
 * @export
 * @interface ConnectionOptionsIterablePut
 */
export interface ConnectionOptionsIterablePut {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsIterablePut
     */
    type: string;
    /**
     * Webhook URL for the Iterable connection
     * @type {string}
     * @memberof ConnectionOptionsIterablePut
     */
    webhook_url?: string;
}
/**
 * Klaviyo connection options
 * @export
 * @interface ConnectionOptionsKlaviyo
 */
export interface ConnectionOptionsKlaviyo {
    /**
     * The public API key associated with your account. Also referred to as the Site ID.
     * @type {string}
     * @memberof ConnectionOptionsKlaviyo
     */
    api_key: string;
    /**
     * A private API key associated with your account. These can be generated as needed using Klaviyo's settings pages.
     * @type {string}
     * @memberof ConnectionOptionsKlaviyo
     */
    private_api_key: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsKlaviyo
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsKlaviyo` type.)
 * 
 * Klaviyo connection options
 * @export
 * @interface ConnectionOptionsKlaviyoMergePatch
 */
export interface ConnectionOptionsKlaviyoMergePatch {
    /**
     * The public API key associated with your account. Also referred to as the Site ID.
     * @type {string}
     * @memberof ConnectionOptionsKlaviyoMergePatch
     */
    api_key?: string;
    /**
     * A private API key associated with your account. These can be generated as needed using Klaviyo's settings pages.
     * @type {string}
     * @memberof ConnectionOptionsKlaviyoMergePatch
     */
    private_api_key?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsKlaviyoMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsKlaviyo` type.)
 * 
 * Klaviyo connection options
 * @export
 * @interface ConnectionOptionsKlaviyoPost
 */
export interface ConnectionOptionsKlaviyoPost {
    /**
     * The public API key associated with your account. Also referred to as the Site ID.
     * @type {string}
     * @memberof ConnectionOptionsKlaviyoPost
     */
    api_key: string;
    /**
     * A private API key associated with your account. These can be generated as needed using Klaviyo's settings pages.
     * @type {string}
     * @memberof ConnectionOptionsKlaviyoPost
     */
    private_api_key: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsKlaviyoPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsKlaviyo` type.)
 * 
 * Klaviyo connection options
 * @export
 * @interface ConnectionOptionsKlaviyoPut
 */
export interface ConnectionOptionsKlaviyoPut {
    /**
     * The public API key associated with your account. Also referred to as the Site ID.
     * @type {string}
     * @memberof ConnectionOptionsKlaviyoPut
     */
    api_key: string;
    /**
     * A private API key associated with your account. These can be generated as needed using Klaviyo's settings pages.
     * @type {string}
     * @memberof ConnectionOptionsKlaviyoPut
     */
    private_api_key: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsKlaviyoPut
     */
    type: string;
}
/**
 * LinkedIn Ads connection options
 * @export
 * @interface ConnectionOptionsLinkedinAds
 */
export interface ConnectionOptionsLinkedinAds {
    /**
     * Password for the LinkedIn Ads connection
     * @type {string}
     * @memberof ConnectionOptionsLinkedinAds
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsLinkedinAds
     */
    type: string;
    /**
     * Username for the LinkedIn Ads connection
     * @type {string}
     * @memberof ConnectionOptionsLinkedinAds
     */
    username?: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsLinkedinAds` type.)
 * 
 * LinkedIn Ads connection options
 * @export
 * @interface ConnectionOptionsLinkedinAdsMergePatch
 */
export interface ConnectionOptionsLinkedinAdsMergePatch {
    /**
     * Password for the LinkedIn Ads connection
     * @type {string}
     * @memberof ConnectionOptionsLinkedinAdsMergePatch
     */
    password?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsLinkedinAdsMergePatch
     */
    type: string;
    /**
     * Username for the LinkedIn Ads connection
     * @type {string}
     * @memberof ConnectionOptionsLinkedinAdsMergePatch
     */
    username?: string | null;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsLinkedinAds` type.)
 * 
 * LinkedIn Ads connection options
 * @export
 * @interface ConnectionOptionsLinkedinAdsPost
 */
export interface ConnectionOptionsLinkedinAdsPost {
    /**
     * Password for the LinkedIn Ads connection
     * @type {string}
     * @memberof ConnectionOptionsLinkedinAdsPost
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsLinkedinAdsPost
     */
    type: string;
    /**
     * Username for the LinkedIn Ads connection
     * @type {string}
     * @memberof ConnectionOptionsLinkedinAdsPost
     */
    username?: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsLinkedinAds` type.)
 * 
 * LinkedIn Ads connection options
 * @export
 * @interface ConnectionOptionsLinkedinAdsPut
 */
export interface ConnectionOptionsLinkedinAdsPut {
    /**
     * Password for the LinkedIn Ads connection
     * @type {string}
     * @memberof ConnectionOptionsLinkedinAdsPut
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsLinkedinAdsPut
     */
    type: string;
    /**
     * Username for the LinkedIn Ads connection
     * @type {string}
     * @memberof ConnectionOptionsLinkedinAdsPut
     */
    username?: string;
}
/**
 * Lookup API connection options
 * @export
 * @interface ConnectionOptionsLookupApi
 */
export interface ConnectionOptionsLookupApi {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsLookupApi
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsLookupApi` type.)
 * 
 * Lookup API connection options
 * @export
 * @interface ConnectionOptionsLookupApiMergePatch
 */
export interface ConnectionOptionsLookupApiMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsLookupApiMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsLookupApi` type.)
 * 
 * Lookup API connection options
 * @export
 * @interface ConnectionOptionsLookupApiPost
 */
export interface ConnectionOptionsLookupApiPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsLookupApiPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsLookupApi` type.)
 * 
 * Lookup API connection options
 * @export
 * @interface ConnectionOptionsLookupApiPut
 */
export interface ConnectionOptionsLookupApiPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsLookupApiPut
     */
    type: string;
}
/**
 * Merge Dataset connection options
 * @export
 * @interface ConnectionOptionsMerge
 */
export interface ConnectionOptionsMerge {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsMerge
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsMerge` type.)
 * 
 * Merge Dataset connection options
 * @export
 * @interface ConnectionOptionsMergeMergePatch
 */
export interface ConnectionOptionsMergeMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsMergeMergePatch
     */
    type: string;
}
/**
 * @type ConnectionOptionsMergePatch
 * The connection-specific options. These vary by connection type.
 * @export
 */
export type ConnectionOptionsMergePatch = { type: 'aws_aurora_mysql' } & ConnectionOptionsAwsAuroraMysqlMergePatch | { type: 'aws_aurora_postgres' } & ConnectionOptionsAwsAuroraPostgresMergePatch | { type: 'aws_rds_mysql' } & ConnectionOptionsAwsRdsMysqlMergePatch | { type: 'aws_rds_postgres' } & ConnectionOptionsAwsRdsPostgresMergePatch | { type: 'aws_rds_sql_server' } & ConnectionOptionsAwsRdsSqlServerMergePatch | { type: 'aws_redshift_serverless' } & ConnectionOptionsAwsRedshiftServerlessMergePatch | { type: 'azure_sql_server' } & ConnectionOptionsAzureSqlServerMergePatch | { type: 'bigquery' } & ConnectionOptionsBigQueryMergePatch | { type: 'classic' } & ConnectionOptionsClassicMergePatch | { type: 'facebook_custom_audiences' } & ConnectionOptionsFacebookCustomAudiencesMergePatch | { type: 'gcp_cloud_sql_mysql' } & ConnectionOptionsGcpCloudSqlMysqlMergePatch | { type: 'gcp_cloud_sql_postgres' } & ConnectionOptionsGcpCloudSqlPostgresMergePatch | { type: 'gcp_cloud_sql_sql_server' } & ConnectionOptionsGcpCloudSqlSqlServerMergePatch | { type: 'gcp_gcs_csv' } & ConnectionOptionsGcpGcsCsvMergePatch | { type: 'google_ads' } & ConnectionOptionsGoogleAdsMergePatch | { type: 'hosted_csv' } & ConnectionOptionsHostedCsvMergePatch | { type: 'hubspot' } & ConnectionOptionsHubspotMergePatch | { type: 'iterable' } & ConnectionOptionsIterableMergePatch | { type: 'klaviyo' } & ConnectionOptionsKlaviyoMergePatch | { type: 'linkedin_ads' } & ConnectionOptionsLinkedinAdsMergePatch | { type: 'lookup_api' } & ConnectionOptionsLookupApiMergePatch | { type: 'merge' } & ConnectionOptionsMergeMergePatch | { type: 'motherduck' } & ConnectionOptionsMotherduckMergePatch | { type: 'mysql' } & ConnectionOptionsMysqlMergePatch | { type: 'pinterest_ads' } & ConnectionOptionsPinterestAdsMergePatch | { type: 'poplar' } & ConnectionOptionsPoplarMergePatch | { type: 'postgres' } & ConnectionOptionsPostgresMergePatch | { type: 'recharge' } & ConnectionOptionsRechargeMergePatch | { type: 'redshift' } & ConnectionOptionsRedshiftMergePatch | { type: 's3_csv' } & ConnectionOptionsS3CsvMergePatch | { type: 'salesforce' } & ConnectionOptionsSalesforceMergePatch | { type: 'salesforce_marketing_cloud' } & ConnectionOptionsSalesforceMarketingCloudMergePatch | { type: 'segment' } & ConnectionOptionsSegmentMergePatch | { type: 'sftp' } & ConnectionOptionsSftpMergePatch | { type: 'shopify' } & ConnectionOptionsShopifyMergePatch | { type: 'snowflake' } & ConnectionOptionsSnowflakeMergePatch | { type: 'sql_server' } & ConnectionOptionsSqlServerMergePatch | { type: 'stripe' } & ConnectionOptionsStripeMergePatch | { type: 'the_trade_desk' } & ConnectionOptionsTheTradeDeskMergePatch | { type: 'tiktok' } & ConnectionOptionsTiktokMergePatch;
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsMerge` type.)
 * 
 * Merge Dataset connection options
 * @export
 * @interface ConnectionOptionsMergePost
 */
export interface ConnectionOptionsMergePost {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsMergePost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsMerge` type.)
 * 
 * Merge Dataset connection options
 * @export
 * @interface ConnectionOptionsMergePut
 */
export interface ConnectionOptionsMergePut {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsMergePut
     */
    type: string;
}
/**
 * MotherDuck connection options
 * @export
 * @interface ConnectionOptionsMotherduck
 */
export interface ConnectionOptionsMotherduck {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsMotherduck
     */
    database: string;
    /**
     * Access token from MotherDuck Settings. Used to authenticate with MotherDuck.
     * @type {string}
     * @memberof ConnectionOptionsMotherduck
     */
    token: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsMotherduck
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsMotherduck` type.)
 * 
 * MotherDuck connection options
 * @export
 * @interface ConnectionOptionsMotherduckMergePatch
 */
export interface ConnectionOptionsMotherduckMergePatch {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsMotherduckMergePatch
     */
    database?: string;
    /**
     * Access token from MotherDuck Settings. Used to authenticate with MotherDuck.
     * @type {string}
     * @memberof ConnectionOptionsMotherduckMergePatch
     */
    token?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsMotherduckMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsMotherduck` type.)
 * 
 * MotherDuck connection options
 * @export
 * @interface ConnectionOptionsMotherduckPost
 */
export interface ConnectionOptionsMotherduckPost {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsMotherduckPost
     */
    database: string;
    /**
     * Access token from MotherDuck Settings. Used to authenticate with MotherDuck.
     * @type {string}
     * @memberof ConnectionOptionsMotherduckPost
     */
    token: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsMotherduckPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsMotherduck` type.)
 * 
 * MotherDuck connection options
 * @export
 * @interface ConnectionOptionsMotherduckPut
 */
export interface ConnectionOptionsMotherduckPut {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsMotherduckPut
     */
    database: string;
    /**
     * Access token from MotherDuck Settings. Used to authenticate with MotherDuck.
     * @type {string}
     * @memberof ConnectionOptionsMotherduckPut
     */
    token: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsMotherduckPut
     */
    type: string;
}
/**
 * MySQL connection options
 * @export
 * @interface ConnectionOptionsMysql
 */
export interface ConnectionOptionsMysql {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsMysql
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsMysql
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsMysql
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsMysql
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsMysql
     */
    port: number;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsMysql
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsMysql
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsMysql
     */
    user: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsMysql` type.)
 * 
 * MySQL connection options
 * @export
 * @interface ConnectionOptionsMysqlMergePatch
 */
export interface ConnectionOptionsMysqlMergePatch {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsMysqlMergePatch
     */
    database?: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsMysqlMergePatch
     */
    host?: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsMysqlMergePatch
     */
    load_balancer?: string | null;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsMysqlMergePatch
     */
    password?: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsMysqlMergePatch
     */
    port?: number;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsMysqlMergePatch
     */
    ssh_bastion?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsMysqlMergePatch
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsMysqlMergePatch
     */
    user?: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsMysql` type.)
 * 
 * MySQL connection options
 * @export
 * @interface ConnectionOptionsMysqlPost
 */
export interface ConnectionOptionsMysqlPost {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsMysqlPost
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsMysqlPost
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsMysqlPost
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsMysqlPost
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsMysqlPost
     */
    port: number;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsMysqlPost
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsMysqlPost
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsMysqlPost
     */
    user: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsMysql` type.)
 * 
 * MySQL connection options
 * @export
 * @interface ConnectionOptionsMysqlPut
 */
export interface ConnectionOptionsMysqlPut {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsMysqlPut
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsMysqlPut
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsMysqlPut
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsMysqlPut
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsMysqlPut
     */
    port: number;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsMysqlPut
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsMysqlPut
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsMysqlPut
     */
    user: string;
}
/**
 * Pinterest Ads connection options
 * @export
 * @interface ConnectionOptionsPinterestAds
 */
export interface ConnectionOptionsPinterestAds {
    /**
     * The business ID is located below your business name on your Business Access page.
     * @type {string}
     * @memberof ConnectionOptionsPinterestAds
     */
    business_id?: string;
    /**
     * Password for the Pinterest Ads connection
     * @type {string}
     * @memberof ConnectionOptionsPinterestAds
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsPinterestAds
     */
    type: string;
    /**
     * Username for the Pinterest Ads connection
     * @type {string}
     * @memberof ConnectionOptionsPinterestAds
     */
    username?: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsPinterestAds` type.)
 * 
 * Pinterest Ads connection options
 * @export
 * @interface ConnectionOptionsPinterestAdsMergePatch
 */
export interface ConnectionOptionsPinterestAdsMergePatch {
    /**
     * The business ID is located below your business name on your Business Access page.
     * @type {string}
     * @memberof ConnectionOptionsPinterestAdsMergePatch
     */
    business_id?: string | null;
    /**
     * Password for the Pinterest Ads connection
     * @type {string}
     * @memberof ConnectionOptionsPinterestAdsMergePatch
     */
    password?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsPinterestAdsMergePatch
     */
    type: string;
    /**
     * Username for the Pinterest Ads connection
     * @type {string}
     * @memberof ConnectionOptionsPinterestAdsMergePatch
     */
    username?: string | null;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsPinterestAds` type.)
 * 
 * Pinterest Ads connection options
 * @export
 * @interface ConnectionOptionsPinterestAdsPost
 */
export interface ConnectionOptionsPinterestAdsPost {
    /**
     * The business ID is located below your business name on your Business Access page.
     * @type {string}
     * @memberof ConnectionOptionsPinterestAdsPost
     */
    business_id?: string;
    /**
     * Password for the Pinterest Ads connection
     * @type {string}
     * @memberof ConnectionOptionsPinterestAdsPost
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsPinterestAdsPost
     */
    type: string;
    /**
     * Username for the Pinterest Ads connection
     * @type {string}
     * @memberof ConnectionOptionsPinterestAdsPost
     */
    username?: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsPinterestAds` type.)
 * 
 * Pinterest Ads connection options
 * @export
 * @interface ConnectionOptionsPinterestAdsPut
 */
export interface ConnectionOptionsPinterestAdsPut {
    /**
     * The business ID is located below your business name on your Business Access page.
     * @type {string}
     * @memberof ConnectionOptionsPinterestAdsPut
     */
    business_id?: string;
    /**
     * Password for the Pinterest Ads connection
     * @type {string}
     * @memberof ConnectionOptionsPinterestAdsPut
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsPinterestAdsPut
     */
    type: string;
    /**
     * Username for the Pinterest Ads connection
     * @type {string}
     * @memberof ConnectionOptionsPinterestAdsPut
     */
    username?: string;
}
/**
 * Poplar connection options
 * @export
 * @interface ConnectionOptionsPoplar
 */
export interface ConnectionOptionsPoplar {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsPoplar
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsPoplar` type.)
 * 
 * Poplar connection options
 * @export
 * @interface ConnectionOptionsPoplarMergePatch
 */
export interface ConnectionOptionsPoplarMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsPoplarMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsPoplar` type.)
 * 
 * Poplar connection options
 * @export
 * @interface ConnectionOptionsPoplarPost
 */
export interface ConnectionOptionsPoplarPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsPoplarPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsPoplar` type.)
 * 
 * Poplar connection options
 * @export
 * @interface ConnectionOptionsPoplarPut
 */
export interface ConnectionOptionsPoplarPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsPoplarPut
     */
    type: string;
}
/**
 * @type ConnectionOptionsPost
 * The connection-specific options. These vary by connection type.
 * @export
 */
export type ConnectionOptionsPost = { type: 'aws_aurora_mysql' } & ConnectionOptionsAwsAuroraMysqlPost | { type: 'aws_aurora_postgres' } & ConnectionOptionsAwsAuroraPostgresPost | { type: 'aws_rds_mysql' } & ConnectionOptionsAwsRdsMysqlPost | { type: 'aws_rds_postgres' } & ConnectionOptionsAwsRdsPostgresPost | { type: 'aws_rds_sql_server' } & ConnectionOptionsAwsRdsSqlServerPost | { type: 'aws_redshift_serverless' } & ConnectionOptionsAwsRedshiftServerlessPost | { type: 'azure_sql_server' } & ConnectionOptionsAzureSqlServerPost | { type: 'bigquery' } & ConnectionOptionsBigQueryPost | { type: 'classic' } & ConnectionOptionsClassicPost | { type: 'facebook_custom_audiences' } & ConnectionOptionsFacebookCustomAudiencesPost | { type: 'gcp_cloud_sql_mysql' } & ConnectionOptionsGcpCloudSqlMysqlPost | { type: 'gcp_cloud_sql_postgres' } & ConnectionOptionsGcpCloudSqlPostgresPost | { type: 'gcp_cloud_sql_sql_server' } & ConnectionOptionsGcpCloudSqlSqlServerPost | { type: 'gcp_gcs_csv' } & ConnectionOptionsGcpGcsCsvPost | { type: 'google_ads' } & ConnectionOptionsGoogleAdsPost | { type: 'hosted_csv' } & ConnectionOptionsHostedCsvPost | { type: 'hubspot' } & ConnectionOptionsHubspotPost | { type: 'iterable' } & ConnectionOptionsIterablePost | { type: 'klaviyo' } & ConnectionOptionsKlaviyoPost | { type: 'linkedin_ads' } & ConnectionOptionsLinkedinAdsPost | { type: 'lookup_api' } & ConnectionOptionsLookupApiPost | { type: 'merge' } & ConnectionOptionsMergePost | { type: 'motherduck' } & ConnectionOptionsMotherduckPost | { type: 'mysql' } & ConnectionOptionsMysqlPost | { type: 'pinterest_ads' } & ConnectionOptionsPinterestAdsPost | { type: 'poplar' } & ConnectionOptionsPoplarPost | { type: 'postgres' } & ConnectionOptionsPostgresPost | { type: 'recharge' } & ConnectionOptionsRechargePost | { type: 'redshift' } & ConnectionOptionsRedshiftPost | { type: 's3_csv' } & ConnectionOptionsS3CsvPost | { type: 'salesforce' } & ConnectionOptionsSalesforcePost | { type: 'salesforce_marketing_cloud' } & ConnectionOptionsSalesforceMarketingCloudPost | { type: 'segment' } & ConnectionOptionsSegmentPost | { type: 'sftp' } & ConnectionOptionsSftpPost | { type: 'shopify' } & ConnectionOptionsShopifyPost | { type: 'snowflake' } & ConnectionOptionsSnowflakePost | { type: 'sql_server' } & ConnectionOptionsSqlServerPost | { type: 'stripe' } & ConnectionOptionsStripePost | { type: 'the_trade_desk' } & ConnectionOptionsTheTradeDeskPost | { type: 'tiktok' } & ConnectionOptionsTiktokPost;
/**
 * Postgres connection options
 * @export
 * @interface ConnectionOptionsPostgres
 */
export interface ConnectionOptionsPostgres {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsPostgres
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsPostgres
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsPostgres
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsPostgres
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsPostgres
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsPostgres
     */
    schema: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsPostgres
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsPostgres
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsPostgres
     */
    user: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsPostgres` type.)
 * 
 * Postgres connection options
 * @export
 * @interface ConnectionOptionsPostgresMergePatch
 */
export interface ConnectionOptionsPostgresMergePatch {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsPostgresMergePatch
     */
    database?: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsPostgresMergePatch
     */
    host?: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsPostgresMergePatch
     */
    load_balancer?: string | null;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsPostgresMergePatch
     */
    password?: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsPostgresMergePatch
     */
    port?: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsPostgresMergePatch
     */
    schema?: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsPostgresMergePatch
     */
    ssh_bastion?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsPostgresMergePatch
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsPostgresMergePatch
     */
    user?: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsPostgres` type.)
 * 
 * Postgres connection options
 * @export
 * @interface ConnectionOptionsPostgresPost
 */
export interface ConnectionOptionsPostgresPost {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsPostgresPost
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsPostgresPost
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsPostgresPost
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsPostgresPost
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsPostgresPost
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsPostgresPost
     */
    schema: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsPostgresPost
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsPostgresPost
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsPostgresPost
     */
    user: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsPostgres` type.)
 * 
 * Postgres connection options
 * @export
 * @interface ConnectionOptionsPostgresPut
 */
export interface ConnectionOptionsPostgresPut {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsPostgresPut
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsPostgresPut
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsPostgresPut
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsPostgresPut
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsPostgresPut
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsPostgresPut
     */
    schema: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsPostgresPut
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsPostgresPut
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsPostgresPut
     */
    user: string;
}
/**
 * @type ConnectionOptionsPut
 * The connection-specific options. These vary by connection type.
 * @export
 */
export type ConnectionOptionsPut = { type: 'aws_aurora_mysql' } & ConnectionOptionsAwsAuroraMysqlPut | { type: 'aws_aurora_postgres' } & ConnectionOptionsAwsAuroraPostgresPut | { type: 'aws_rds_mysql' } & ConnectionOptionsAwsRdsMysqlPut | { type: 'aws_rds_postgres' } & ConnectionOptionsAwsRdsPostgresPut | { type: 'aws_rds_sql_server' } & ConnectionOptionsAwsRdsSqlServerPut | { type: 'aws_redshift_serverless' } & ConnectionOptionsAwsRedshiftServerlessPut | { type: 'azure_sql_server' } & ConnectionOptionsAzureSqlServerPut | { type: 'bigquery' } & ConnectionOptionsBigQueryPut | { type: 'classic' } & ConnectionOptionsClassicPut | { type: 'facebook_custom_audiences' } & ConnectionOptionsFacebookCustomAudiencesPut | { type: 'gcp_cloud_sql_mysql' } & ConnectionOptionsGcpCloudSqlMysqlPut | { type: 'gcp_cloud_sql_postgres' } & ConnectionOptionsGcpCloudSqlPostgresPut | { type: 'gcp_cloud_sql_sql_server' } & ConnectionOptionsGcpCloudSqlSqlServerPut | { type: 'gcp_gcs_csv' } & ConnectionOptionsGcpGcsCsvPut | { type: 'google_ads' } & ConnectionOptionsGoogleAdsPut | { type: 'hosted_csv' } & ConnectionOptionsHostedCsvPut | { type: 'hubspot' } & ConnectionOptionsHubspotPut | { type: 'iterable' } & ConnectionOptionsIterablePut | { type: 'klaviyo' } & ConnectionOptionsKlaviyoPut | { type: 'linkedin_ads' } & ConnectionOptionsLinkedinAdsPut | { type: 'lookup_api' } & ConnectionOptionsLookupApiPut | { type: 'merge' } & ConnectionOptionsMergePut | { type: 'motherduck' } & ConnectionOptionsMotherduckPut | { type: 'mysql' } & ConnectionOptionsMysqlPut | { type: 'pinterest_ads' } & ConnectionOptionsPinterestAdsPut | { type: 'poplar' } & ConnectionOptionsPoplarPut | { type: 'postgres' } & ConnectionOptionsPostgresPut | { type: 'recharge' } & ConnectionOptionsRechargePut | { type: 'redshift' } & ConnectionOptionsRedshiftPut | { type: 's3_csv' } & ConnectionOptionsS3CsvPut | { type: 'salesforce' } & ConnectionOptionsSalesforcePut | { type: 'salesforce_marketing_cloud' } & ConnectionOptionsSalesforceMarketingCloudPut | { type: 'segment' } & ConnectionOptionsSegmentPut | { type: 'sftp' } & ConnectionOptionsSftpPut | { type: 'shopify' } & ConnectionOptionsShopifyPut | { type: 'snowflake' } & ConnectionOptionsSnowflakePut | { type: 'sql_server' } & ConnectionOptionsSqlServerPut | { type: 'stripe' } & ConnectionOptionsStripePut | { type: 'the_trade_desk' } & ConnectionOptionsTheTradeDeskPut | { type: 'tiktok' } & ConnectionOptionsTiktokPut;
/**
 * Recharge connection options
 * @export
 * @interface ConnectionOptionsRecharge
 */
export interface ConnectionOptionsRecharge {
    /**
     * API Key for the Recharge connection
     * @type {string}
     * @memberof ConnectionOptionsRecharge
     */
    api_key: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsRecharge
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsRecharge` type.)
 * 
 * Recharge connection options
 * @export
 * @interface ConnectionOptionsRechargeMergePatch
 */
export interface ConnectionOptionsRechargeMergePatch {
    /**
     * API Key for the Recharge connection
     * @type {string}
     * @memberof ConnectionOptionsRechargeMergePatch
     */
    api_key?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsRechargeMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsRecharge` type.)
 * 
 * Recharge connection options
 * @export
 * @interface ConnectionOptionsRechargePost
 */
export interface ConnectionOptionsRechargePost {
    /**
     * API Key for the Recharge connection
     * @type {string}
     * @memberof ConnectionOptionsRechargePost
     */
    api_key: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsRechargePost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsRecharge` type.)
 * 
 * Recharge connection options
 * @export
 * @interface ConnectionOptionsRechargePut
 */
export interface ConnectionOptionsRechargePut {
    /**
     * API Key for the Recharge connection
     * @type {string}
     * @memberof ConnectionOptionsRechargePut
     */
    api_key: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsRechargePut
     */
    type: string;
}
/**
 * Redshift connection options
 * @export
 * @interface ConnectionOptionsRedshift
 */
export interface ConnectionOptionsRedshift {
    /**
     * Redshift tables exists inside of an AWS region, e.g. us-east-1
     * @type {string}
     * @memberof ConnectionOptionsRedshift
     */
    aws_region: string;
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsRedshift
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsRedshift
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsRedshift
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsRedshift
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsRedshift
     */
    port: number;
    /**
     * Redshift tables exist inside of schemas, e.g. ANALYTICS or PUBLIC.
     * @type {string}
     * @memberof ConnectionOptionsRedshift
     */
    schema: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsRedshift
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsRedshift
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsRedshift
     */
    user: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsRedshift` type.)
 * 
 * Redshift connection options
 * @export
 * @interface ConnectionOptionsRedshiftMergePatch
 */
export interface ConnectionOptionsRedshiftMergePatch {
    /**
     * Redshift tables exists inside of an AWS region, e.g. us-east-1
     * @type {string}
     * @memberof ConnectionOptionsRedshiftMergePatch
     */
    aws_region?: string;
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsRedshiftMergePatch
     */
    database?: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsRedshiftMergePatch
     */
    host?: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsRedshiftMergePatch
     */
    load_balancer?: string | null;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsRedshiftMergePatch
     */
    password?: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsRedshiftMergePatch
     */
    port?: number;
    /**
     * Redshift tables exist inside of schemas, e.g. ANALYTICS or PUBLIC.
     * @type {string}
     * @memberof ConnectionOptionsRedshiftMergePatch
     */
    schema?: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsRedshiftMergePatch
     */
    ssh_bastion?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsRedshiftMergePatch
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsRedshiftMergePatch
     */
    user?: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsRedshift` type.)
 * 
 * Redshift connection options
 * @export
 * @interface ConnectionOptionsRedshiftPost
 */
export interface ConnectionOptionsRedshiftPost {
    /**
     * Redshift tables exists inside of an AWS region, e.g. us-east-1
     * @type {string}
     * @memberof ConnectionOptionsRedshiftPost
     */
    aws_region: string;
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsRedshiftPost
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsRedshiftPost
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsRedshiftPost
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsRedshiftPost
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsRedshiftPost
     */
    port: number;
    /**
     * Redshift tables exist inside of schemas, e.g. ANALYTICS or PUBLIC.
     * @type {string}
     * @memberof ConnectionOptionsRedshiftPost
     */
    schema: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsRedshiftPost
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsRedshiftPost
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsRedshiftPost
     */
    user: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsRedshift` type.)
 * 
 * Redshift connection options
 * @export
 * @interface ConnectionOptionsRedshiftPut
 */
export interface ConnectionOptionsRedshiftPut {
    /**
     * Redshift tables exists inside of an AWS region, e.g. us-east-1
     * @type {string}
     * @memberof ConnectionOptionsRedshiftPut
     */
    aws_region: string;
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsRedshiftPut
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsRedshiftPut
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsRedshiftPut
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsRedshiftPut
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsRedshiftPut
     */
    port: number;
    /**
     * Redshift tables exist inside of schemas, e.g. ANALYTICS or PUBLIC.
     * @type {string}
     * @memberof ConnectionOptionsRedshiftPut
     */
    schema: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsRedshiftPut
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsRedshiftPut
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsRedshiftPut
     */
    user: string;
}
/**
 * S3 connection options
 * @export
 * @interface ConnectionOptionsS3Csv
 */
export interface ConnectionOptionsS3Csv {
    /**
     * S3 buckets exists inside of an AWS region, e.g. us-east-1
     * @type {string}
     * @memberof ConnectionOptionsS3Csv
     */
    aws_region: string;
    /**
     * Bucket name
     * @type {string}
     * @memberof ConnectionOptionsS3Csv
     */
    bucket_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsS3Csv
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsS3Csv` type.)
 * 
 * S3 connection options
 * @export
 * @interface ConnectionOptionsS3CsvMergePatch
 */
export interface ConnectionOptionsS3CsvMergePatch {
    /**
     * S3 buckets exists inside of an AWS region, e.g. us-east-1
     * @type {string}
     * @memberof ConnectionOptionsS3CsvMergePatch
     */
    aws_region?: string;
    /**
     * Bucket name
     * @type {string}
     * @memberof ConnectionOptionsS3CsvMergePatch
     */
    bucket_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsS3CsvMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsS3Csv` type.)
 * 
 * S3 connection options
 * @export
 * @interface ConnectionOptionsS3CsvPost
 */
export interface ConnectionOptionsS3CsvPost {
    /**
     * S3 buckets exists inside of an AWS region, e.g. us-east-1
     * @type {string}
     * @memberof ConnectionOptionsS3CsvPost
     */
    aws_region: string;
    /**
     * Bucket name
     * @type {string}
     * @memberof ConnectionOptionsS3CsvPost
     */
    bucket_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsS3CsvPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsS3Csv` type.)
 * 
 * S3 connection options
 * @export
 * @interface ConnectionOptionsS3CsvPut
 */
export interface ConnectionOptionsS3CsvPut {
    /**
     * S3 buckets exists inside of an AWS region, e.g. us-east-1
     * @type {string}
     * @memberof ConnectionOptionsS3CsvPut
     */
    aws_region: string;
    /**
     * Bucket name
     * @type {string}
     * @memberof ConnectionOptionsS3CsvPut
     */
    bucket_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsS3CsvPut
     */
    type: string;
}
/**
 * Salesforce connection options
 * @export
 * @interface ConnectionOptionsSalesforce
 */
export interface ConnectionOptionsSalesforce {
    /**
     * Password for the Salesforce connection
     * @type {string}
     * @memberof ConnectionOptionsSalesforce
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSalesforce
     */
    type: string;
    /**
     * Username for the Salesforce connection
     * @type {string}
     * @memberof ConnectionOptionsSalesforce
     */
    username?: string;
}
/**
 * Salesforce Marketing Cloud connection options
 * @export
 * @interface ConnectionOptionsSalesforceMarketingCloud
 */
export interface ConnectionOptionsSalesforceMarketingCloud {
    /**
     * Client ID of the API Integration within your installed package in SFMC. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-server-to-server-package">the HighTouch docs</a>.
     * @type {string}
     * @memberof ConnectionOptionsSalesforceMarketingCloud
     */
    client_id: string;
    /**
     * Client secret of the API Integration within your installed package in SFMC. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-server-to-server-package">the HighTouch docs</a>.
     * @type {string}
     * @memberof ConnectionOptionsSalesforceMarketingCloud
     */
    client_secret: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSalesforceMarketingCloud
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsSalesforceMarketingCloud` type.)
 * 
 * Salesforce Marketing Cloud connection options
 * @export
 * @interface ConnectionOptionsSalesforceMarketingCloudMergePatch
 */
export interface ConnectionOptionsSalesforceMarketingCloudMergePatch {
    /**
     * Client ID of the API Integration within your installed package in SFMC. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-server-to-server-package">the HighTouch docs</a>.
     * @type {string}
     * @memberof ConnectionOptionsSalesforceMarketingCloudMergePatch
     */
    client_id?: string;
    /**
     * Client secret of the API Integration within your installed package in SFMC. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-server-to-server-package">the HighTouch docs</a>.
     * @type {string}
     * @memberof ConnectionOptionsSalesforceMarketingCloudMergePatch
     */
    client_secret?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSalesforceMarketingCloudMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsSalesforceMarketingCloud` type.)
 * 
 * Salesforce Marketing Cloud connection options
 * @export
 * @interface ConnectionOptionsSalesforceMarketingCloudPost
 */
export interface ConnectionOptionsSalesforceMarketingCloudPost {
    /**
     * Client ID of the API Integration within your installed package in SFMC. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-server-to-server-package">the HighTouch docs</a>.
     * @type {string}
     * @memberof ConnectionOptionsSalesforceMarketingCloudPost
     */
    client_id: string;
    /**
     * Client secret of the API Integration within your installed package in SFMC. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-server-to-server-package">the HighTouch docs</a>.
     * @type {string}
     * @memberof ConnectionOptionsSalesforceMarketingCloudPost
     */
    client_secret: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSalesforceMarketingCloudPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsSalesforceMarketingCloud` type.)
 * 
 * Salesforce Marketing Cloud connection options
 * @export
 * @interface ConnectionOptionsSalesforceMarketingCloudPut
 */
export interface ConnectionOptionsSalesforceMarketingCloudPut {
    /**
     * Client ID of the API Integration within your installed package in SFMC. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-server-to-server-package">the HighTouch docs</a>.
     * @type {string}
     * @memberof ConnectionOptionsSalesforceMarketingCloudPut
     */
    client_id: string;
    /**
     * Client secret of the API Integration within your installed package in SFMC. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-server-to-server-package">the HighTouch docs</a>.
     * @type {string}
     * @memberof ConnectionOptionsSalesforceMarketingCloudPut
     */
    client_secret: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSalesforceMarketingCloudPut
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsSalesforce` type.)
 * 
 * Salesforce connection options
 * @export
 * @interface ConnectionOptionsSalesforceMergePatch
 */
export interface ConnectionOptionsSalesforceMergePatch {
    /**
     * Password for the Salesforce connection
     * @type {string}
     * @memberof ConnectionOptionsSalesforceMergePatch
     */
    password?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSalesforceMergePatch
     */
    type: string;
    /**
     * Username for the Salesforce connection
     * @type {string}
     * @memberof ConnectionOptionsSalesforceMergePatch
     */
    username?: string | null;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsSalesforce` type.)
 * 
 * Salesforce connection options
 * @export
 * @interface ConnectionOptionsSalesforcePost
 */
export interface ConnectionOptionsSalesforcePost {
    /**
     * Password for the Salesforce connection
     * @type {string}
     * @memberof ConnectionOptionsSalesforcePost
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSalesforcePost
     */
    type: string;
    /**
     * Username for the Salesforce connection
     * @type {string}
     * @memberof ConnectionOptionsSalesforcePost
     */
    username?: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsSalesforce` type.)
 * 
 * Salesforce connection options
 * @export
 * @interface ConnectionOptionsSalesforcePut
 */
export interface ConnectionOptionsSalesforcePut {
    /**
     * Password for the Salesforce connection
     * @type {string}
     * @memberof ConnectionOptionsSalesforcePut
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSalesforcePut
     */
    type: string;
    /**
     * Username for the Salesforce connection
     * @type {string}
     * @memberof ConnectionOptionsSalesforcePut
     */
    username?: string;
}
/**
 * Segment connection options
 * @export
 * @interface ConnectionOptionsSegment
 */
export interface ConnectionOptionsSegment {
    /**
     * API Key for the Segment connection
     * @type {string}
     * @memberof ConnectionOptionsSegment
     */
    api_key: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSegment
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsSegment` type.)
 * 
 * Segment connection options
 * @export
 * @interface ConnectionOptionsSegmentMergePatch
 */
export interface ConnectionOptionsSegmentMergePatch {
    /**
     * API Key for the Segment connection
     * @type {string}
     * @memberof ConnectionOptionsSegmentMergePatch
     */
    api_key?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSegmentMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsSegment` type.)
 * 
 * Segment connection options
 * @export
 * @interface ConnectionOptionsSegmentPost
 */
export interface ConnectionOptionsSegmentPost {
    /**
     * API Key for the Segment connection
     * @type {string}
     * @memberof ConnectionOptionsSegmentPost
     */
    api_key: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSegmentPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsSegment` type.)
 * 
 * Segment connection options
 * @export
 * @interface ConnectionOptionsSegmentPut
 */
export interface ConnectionOptionsSegmentPut {
    /**
     * API Key for the Segment connection
     * @type {string}
     * @memberof ConnectionOptionsSegmentPut
     */
    api_key: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSegmentPut
     */
    type: string;
}
/**
 * SFTP connection options
 * @export
 * @interface ConnectionOptionsSftp
 */
export interface ConnectionOptionsSftp {
    /**
     * The compression algorithm to use
     * @type {boolean}
     * @memberof ConnectionOptionsSftp
     */
    compression?: boolean;
    /**
     * The encryption cipher(s) to use
     * @type {string}
     * @memberof ConnectionOptionsSftp
     */
    encryption?: string;
    /**
     * The hostname or IP address of the SFTP server
     * @type {string}
     * @memberof ConnectionOptionsSftp
     */
    host: string;
    /**
     * The host key algorithm to use in verifying the host key presented by the remote host
     * @type {string}
     * @memberof ConnectionOptionsSftp
     */
    host_key?: string;
    /**
     * Optional password to connect. If blank, Faraday's private key will be used instead.
     * @type {string}
     * @memberof ConnectionOptionsSftp
     */
    password?: string;
    /**
     * The port on the SFTP server listening for connections
     * @type {number}
     * @memberof ConnectionOptionsSftp
     */
    port: number;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSftp
     */
    type: string;
    /**
     * The user to connect to the SFTP server as
     * @type {string}
     * @memberof ConnectionOptionsSftp
     */
    user: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsSftp` type.)
 * 
 * SFTP connection options
 * @export
 * @interface ConnectionOptionsSftpMergePatch
 */
export interface ConnectionOptionsSftpMergePatch {
    /**
     * The compression algorithm to use
     * @type {boolean}
     * @memberof ConnectionOptionsSftpMergePatch
     */
    compression?: boolean | null;
    /**
     * The encryption cipher(s) to use
     * @type {string}
     * @memberof ConnectionOptionsSftpMergePatch
     */
    encryption?: string | null;
    /**
     * The hostname or IP address of the SFTP server
     * @type {string}
     * @memberof ConnectionOptionsSftpMergePatch
     */
    host?: string;
    /**
     * The host key algorithm to use in verifying the host key presented by the remote host
     * @type {string}
     * @memberof ConnectionOptionsSftpMergePatch
     */
    host_key?: string | null;
    /**
     * Optional password to connect. If blank, Faraday's private key will be used instead.
     * @type {string}
     * @memberof ConnectionOptionsSftpMergePatch
     */
    password?: string | null;
    /**
     * The port on the SFTP server listening for connections
     * @type {number}
     * @memberof ConnectionOptionsSftpMergePatch
     */
    port?: number;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSftpMergePatch
     */
    type: string;
    /**
     * The user to connect to the SFTP server as
     * @type {string}
     * @memberof ConnectionOptionsSftpMergePatch
     */
    user?: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsSftp` type.)
 * 
 * SFTP connection options
 * @export
 * @interface ConnectionOptionsSftpPost
 */
export interface ConnectionOptionsSftpPost {
    /**
     * The compression algorithm to use
     * @type {boolean}
     * @memberof ConnectionOptionsSftpPost
     */
    compression?: boolean;
    /**
     * The encryption cipher(s) to use
     * @type {string}
     * @memberof ConnectionOptionsSftpPost
     */
    encryption?: string;
    /**
     * The hostname or IP address of the SFTP server
     * @type {string}
     * @memberof ConnectionOptionsSftpPost
     */
    host: string;
    /**
     * The host key algorithm to use in verifying the host key presented by the remote host
     * @type {string}
     * @memberof ConnectionOptionsSftpPost
     */
    host_key?: string;
    /**
     * Optional password to connect. If blank, Faraday's private key will be used instead.
     * @type {string}
     * @memberof ConnectionOptionsSftpPost
     */
    password?: string;
    /**
     * The port on the SFTP server listening for connections
     * @type {number}
     * @memberof ConnectionOptionsSftpPost
     */
    port: number;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSftpPost
     */
    type: string;
    /**
     * The user to connect to the SFTP server as
     * @type {string}
     * @memberof ConnectionOptionsSftpPost
     */
    user: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsSftp` type.)
 * 
 * SFTP connection options
 * @export
 * @interface ConnectionOptionsSftpPut
 */
export interface ConnectionOptionsSftpPut {
    /**
     * The compression algorithm to use
     * @type {boolean}
     * @memberof ConnectionOptionsSftpPut
     */
    compression?: boolean;
    /**
     * The encryption cipher(s) to use
     * @type {string}
     * @memberof ConnectionOptionsSftpPut
     */
    encryption?: string;
    /**
     * The hostname or IP address of the SFTP server
     * @type {string}
     * @memberof ConnectionOptionsSftpPut
     */
    host: string;
    /**
     * The host key algorithm to use in verifying the host key presented by the remote host
     * @type {string}
     * @memberof ConnectionOptionsSftpPut
     */
    host_key?: string;
    /**
     * Optional password to connect. If blank, Faraday's private key will be used instead.
     * @type {string}
     * @memberof ConnectionOptionsSftpPut
     */
    password?: string;
    /**
     * The port on the SFTP server listening for connections
     * @type {number}
     * @memberof ConnectionOptionsSftpPut
     */
    port: number;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSftpPut
     */
    type: string;
    /**
     * The user to connect to the SFTP server as
     * @type {string}
     * @memberof ConnectionOptionsSftpPut
     */
    user: string;
}
/**
 * Shopify connection options
 * @export
 * @interface ConnectionOptionsShopify
 */
export interface ConnectionOptionsShopify {
    /**
     * Password for the Shopify connection
     * @type {string}
     * @memberof ConnectionOptionsShopify
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsShopify
     */
    type: string;
    /**
     * Username for the Shopify connection
     * @type {string}
     * @memberof ConnectionOptionsShopify
     */
    username?: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsShopify` type.)
 * 
 * Shopify connection options
 * @export
 * @interface ConnectionOptionsShopifyMergePatch
 */
export interface ConnectionOptionsShopifyMergePatch {
    /**
     * Password for the Shopify connection
     * @type {string}
     * @memberof ConnectionOptionsShopifyMergePatch
     */
    password?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsShopifyMergePatch
     */
    type: string;
    /**
     * Username for the Shopify connection
     * @type {string}
     * @memberof ConnectionOptionsShopifyMergePatch
     */
    username?: string | null;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsShopify` type.)
 * 
 * Shopify connection options
 * @export
 * @interface ConnectionOptionsShopifyPost
 */
export interface ConnectionOptionsShopifyPost {
    /**
     * Password for the Shopify connection
     * @type {string}
     * @memberof ConnectionOptionsShopifyPost
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsShopifyPost
     */
    type: string;
    /**
     * Username for the Shopify connection
     * @type {string}
     * @memberof ConnectionOptionsShopifyPost
     */
    username?: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsShopify` type.)
 * 
 * Shopify connection options
 * @export
 * @interface ConnectionOptionsShopifyPut
 */
export interface ConnectionOptionsShopifyPut {
    /**
     * Password for the Shopify connection
     * @type {string}
     * @memberof ConnectionOptionsShopifyPut
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsShopifyPut
     */
    type: string;
    /**
     * Username for the Shopify connection
     * @type {string}
     * @memberof ConnectionOptionsShopifyPut
     */
    username?: string;
}
/**
 * Snowflake connection options
 * @export
 * @interface ConnectionOptionsSnowflake
 */
export interface ConnectionOptionsSnowflake {
    /**
     * Snowflake account name. If provided, also provide organization name. ORGNAME-ACCOUNTNAME.snowflakecomputing.com. Preferred over legacy account locator. https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#format-1-preferred-account-name-in-your-organization.
     * @type {string}
     * @memberof ConnectionOptionsSnowflake
     */
    account_name?: string;
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsSnowflake
     */
    database: string;
    /**
     * NOT needed if organization name is provided. If your Snowflake account existed before the Organizations feature was enabled, the Format 2 (Legacy): Account Locator in a Region is used as the account name.
     * @type {string}
     * @memberof ConnectionOptionsSnowflake
     */
    legacy_account_locator?: string;
    /**
     * Snowflake organization name. If provided, also provide account name. ORGNAME-ACCOUNTNAME.snowflakecomputing.com. Preferred over legacy account locator. https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#format-1-preferred-account-name-in-your-organization.
     * @type {string}
     * @memberof ConnectionOptionsSnowflake
     */
    organization_name?: string;
    /**
     * The Snowflake role that will be used by Faraday to connect to the instance (Usually this is FARADAY).
     * @type {string}
     * @memberof ConnectionOptionsSnowflake
     */
    role?: string;
    /**
     * RSA public key that should be assigned to the Snowflake user. Unique per Faraday Snowflake connection. Set by the Faraday system. Use the rotate_credentials endpoint to regenerate.
     * @type {string}
     * @memberof ConnectionOptionsSnowflake
     */
    rsa_public_key?: string;
    /**
     * Snowflake schema name. If not provided, it may be provided at the dataset level, or omitted entirely.
     * @type {string}
     * @memberof ConnectionOptionsSnowflake
     */
    schema?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSnowflake
     */
    type: string;
    /**
     * Snowflake user.
     * @type {string}
     * @memberof ConnectionOptionsSnowflake
     */
    user: string;
    /**
     * Warehouse
     * @type {string}
     * @memberof ConnectionOptionsSnowflake
     */
    warehouse: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsSnowflake` type.)
 * 
 * Snowflake connection options
 * @export
 * @interface ConnectionOptionsSnowflakeMergePatch
 */
export interface ConnectionOptionsSnowflakeMergePatch {
    /**
     * Snowflake account name. If provided, also provide organization name. ORGNAME-ACCOUNTNAME.snowflakecomputing.com. Preferred over legacy account locator. https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#format-1-preferred-account-name-in-your-organization.
     * @type {string}
     * @memberof ConnectionOptionsSnowflakeMergePatch
     */
    account_name?: string | null;
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsSnowflakeMergePatch
     */
    database?: string;
    /**
     * NOT needed if organization name is provided. If your Snowflake account existed before the Organizations feature was enabled, the Format 2 (Legacy): Account Locator in a Region is used as the account name.
     * @type {string}
     * @memberof ConnectionOptionsSnowflakeMergePatch
     */
    legacy_account_locator?: string | null;
    /**
     * Snowflake organization name. If provided, also provide account name. ORGNAME-ACCOUNTNAME.snowflakecomputing.com. Preferred over legacy account locator. https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#format-1-preferred-account-name-in-your-organization.
     * @type {string}
     * @memberof ConnectionOptionsSnowflakeMergePatch
     */
    organization_name?: string | null;
    /**
     * The Snowflake role that will be used by Faraday to connect to the instance (Usually this is FARADAY).
     * @type {string}
     * @memberof ConnectionOptionsSnowflakeMergePatch
     */
    role?: string | null;
    /**
     * Snowflake schema name. If not provided, it may be provided at the dataset level, or omitted entirely.
     * @type {string}
     * @memberof ConnectionOptionsSnowflakeMergePatch
     */
    schema?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSnowflakeMergePatch
     */
    type: string;
    /**
     * Snowflake user.
     * @type {string}
     * @memberof ConnectionOptionsSnowflakeMergePatch
     */
    user?: string;
    /**
     * Warehouse
     * @type {string}
     * @memberof ConnectionOptionsSnowflakeMergePatch
     */
    warehouse?: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsSnowflake` type.)
 * 
 * Snowflake connection options
 * @export
 * @interface ConnectionOptionsSnowflakePost
 */
export interface ConnectionOptionsSnowflakePost {
    /**
     * Snowflake account name. If provided, also provide organization name. ORGNAME-ACCOUNTNAME.snowflakecomputing.com. Preferred over legacy account locator. https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#format-1-preferred-account-name-in-your-organization.
     * @type {string}
     * @memberof ConnectionOptionsSnowflakePost
     */
    account_name?: string;
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsSnowflakePost
     */
    database: string;
    /**
     * NOT needed if organization name is provided. If your Snowflake account existed before the Organizations feature was enabled, the Format 2 (Legacy): Account Locator in a Region is used as the account name.
     * @type {string}
     * @memberof ConnectionOptionsSnowflakePost
     */
    legacy_account_locator?: string;
    /**
     * Snowflake organization name. If provided, also provide account name. ORGNAME-ACCOUNTNAME.snowflakecomputing.com. Preferred over legacy account locator. https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#format-1-preferred-account-name-in-your-organization.
     * @type {string}
     * @memberof ConnectionOptionsSnowflakePost
     */
    organization_name?: string;
    /**
     * The Snowflake role that will be used by Faraday to connect to the instance (Usually this is FARADAY).
     * @type {string}
     * @memberof ConnectionOptionsSnowflakePost
     */
    role?: string;
    /**
     * Snowflake schema name. If not provided, it may be provided at the dataset level, or omitted entirely.
     * @type {string}
     * @memberof ConnectionOptionsSnowflakePost
     */
    schema?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSnowflakePost
     */
    type: string;
    /**
     * Snowflake user.
     * @type {string}
     * @memberof ConnectionOptionsSnowflakePost
     */
    user: string;
    /**
     * Warehouse
     * @type {string}
     * @memberof ConnectionOptionsSnowflakePost
     */
    warehouse: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsSnowflake` type.)
 * 
 * Snowflake connection options
 * @export
 * @interface ConnectionOptionsSnowflakePut
 */
export interface ConnectionOptionsSnowflakePut {
    /**
     * Snowflake account name. If provided, also provide organization name. ORGNAME-ACCOUNTNAME.snowflakecomputing.com. Preferred over legacy account locator. https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#format-1-preferred-account-name-in-your-organization.
     * @type {string}
     * @memberof ConnectionOptionsSnowflakePut
     */
    account_name?: string;
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsSnowflakePut
     */
    database: string;
    /**
     * NOT needed if organization name is provided. If your Snowflake account existed before the Organizations feature was enabled, the Format 2 (Legacy): Account Locator in a Region is used as the account name.
     * @type {string}
     * @memberof ConnectionOptionsSnowflakePut
     */
    legacy_account_locator?: string;
    /**
     * Snowflake organization name. If provided, also provide account name. ORGNAME-ACCOUNTNAME.snowflakecomputing.com. Preferred over legacy account locator. https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#format-1-preferred-account-name-in-your-organization.
     * @type {string}
     * @memberof ConnectionOptionsSnowflakePut
     */
    organization_name?: string;
    /**
     * The Snowflake role that will be used by Faraday to connect to the instance (Usually this is FARADAY).
     * @type {string}
     * @memberof ConnectionOptionsSnowflakePut
     */
    role?: string;
    /**
     * Snowflake schema name. If not provided, it may be provided at the dataset level, or omitted entirely.
     * @type {string}
     * @memberof ConnectionOptionsSnowflakePut
     */
    schema?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSnowflakePut
     */
    type: string;
    /**
     * Snowflake user.
     * @type {string}
     * @memberof ConnectionOptionsSnowflakePut
     */
    user: string;
    /**
     * Warehouse
     * @type {string}
     * @memberof ConnectionOptionsSnowflakePut
     */
    warehouse: string;
}
/**
 * SQL Server connection options
 * @export
 * @interface ConnectionOptionsSqlServer
 */
export interface ConnectionOptionsSqlServer {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsSqlServer
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsSqlServer
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsSqlServer
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsSqlServer
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsSqlServer
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsSqlServer
     */
    schema?: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsSqlServer
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSqlServer
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsSqlServer
     */
    user: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsSqlServer` type.)
 * 
 * SQL Server connection options
 * @export
 * @interface ConnectionOptionsSqlServerMergePatch
 */
export interface ConnectionOptionsSqlServerMergePatch {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsSqlServerMergePatch
     */
    database?: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsSqlServerMergePatch
     */
    host?: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsSqlServerMergePatch
     */
    load_balancer?: string | null;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsSqlServerMergePatch
     */
    password?: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsSqlServerMergePatch
     */
    port?: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsSqlServerMergePatch
     */
    schema?: string | null;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsSqlServerMergePatch
     */
    ssh_bastion?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSqlServerMergePatch
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsSqlServerMergePatch
     */
    user?: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsSqlServer` type.)
 * 
 * SQL Server connection options
 * @export
 * @interface ConnectionOptionsSqlServerPost
 */
export interface ConnectionOptionsSqlServerPost {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsSqlServerPost
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsSqlServerPost
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsSqlServerPost
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsSqlServerPost
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsSqlServerPost
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsSqlServerPost
     */
    schema?: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsSqlServerPost
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSqlServerPost
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsSqlServerPost
     */
    user: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsSqlServer` type.)
 * 
 * SQL Server connection options
 * @export
 * @interface ConnectionOptionsSqlServerPut
 */
export interface ConnectionOptionsSqlServerPut {
    /**
     * Database
     * @type {string}
     * @memberof ConnectionOptionsSqlServerPut
     */
    database: string;
    /**
     * Host
     * @type {string}
     * @memberof ConnectionOptionsSqlServerPut
     */
    host: string;
    /**
     * In case the host is deployed behind a load balancer.
     * @type {string}
     * @memberof ConnectionOptionsSqlServerPut
     */
    load_balancer?: string;
    /**
     * Password
     * @type {string}
     * @memberof ConnectionOptionsSqlServerPut
     */
    password: string;
    /**
     * Port
     * @type {number}
     * @memberof ConnectionOptionsSqlServerPut
     */
    port: number;
    /**
     * Schema
     * @type {string}
     * @memberof ConnectionOptionsSqlServerPut
     */
    schema?: string;
    /**
     * In case the host is deployed behind an SSH bastion / jump server. Uses the Faraday SSH public key. This is the address of the bastion including username. For example, faraday@mybastion.example.com
     * @type {string}
     * @memberof ConnectionOptionsSqlServerPut
     */
    ssh_bastion?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsSqlServerPut
     */
    type: string;
    /**
     * User
     * @type {string}
     * @memberof ConnectionOptionsSqlServerPut
     */
    user: string;
}
/**
 * Stripe connection options
 * @export
 * @interface ConnectionOptionsStripe
 */
export interface ConnectionOptionsStripe {
    /**
     * Password for the Stripe connection
     * @type {string}
     * @memberof ConnectionOptionsStripe
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsStripe
     */
    type: string;
    /**
     * Username for the Stripe connection
     * @type {string}
     * @memberof ConnectionOptionsStripe
     */
    username?: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsStripe` type.)
 * 
 * Stripe connection options
 * @export
 * @interface ConnectionOptionsStripeMergePatch
 */
export interface ConnectionOptionsStripeMergePatch {
    /**
     * Password for the Stripe connection
     * @type {string}
     * @memberof ConnectionOptionsStripeMergePatch
     */
    password?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsStripeMergePatch
     */
    type: string;
    /**
     * Username for the Stripe connection
     * @type {string}
     * @memberof ConnectionOptionsStripeMergePatch
     */
    username?: string | null;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsStripe` type.)
 * 
 * Stripe connection options
 * @export
 * @interface ConnectionOptionsStripePost
 */
export interface ConnectionOptionsStripePost {
    /**
     * Password for the Stripe connection
     * @type {string}
     * @memberof ConnectionOptionsStripePost
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsStripePost
     */
    type: string;
    /**
     * Username for the Stripe connection
     * @type {string}
     * @memberof ConnectionOptionsStripePost
     */
    username?: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsStripe` type.)
 * 
 * Stripe connection options
 * @export
 * @interface ConnectionOptionsStripePut
 */
export interface ConnectionOptionsStripePut {
    /**
     * Password for the Stripe connection
     * @type {string}
     * @memberof ConnectionOptionsStripePut
     */
    password?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsStripePut
     */
    type: string;
    /**
     * Username for the Stripe connection
     * @type {string}
     * @memberof ConnectionOptionsStripePut
     */
    username?: string;
}
/**
 * The Trade Desk connection options
 * @export
 * @interface ConnectionOptionsTheTradeDesk
 */
export interface ConnectionOptionsTheTradeDesk {
    /**
     * Refer to <a href="https://hightouch.com/docs/destinations/tradedesk#first-party-data-segment-credentials">the HighTouch docs</a>.
     * @type {string}
     * @memberof ConnectionOptionsTheTradeDesk
     */
    advertiser_id: string;
    /**
     * To generate an API token you must contact your TradeDesk rep and ask for CRM Data Management Access. Refer to <a href="https://hightouch.com/docs/destinations/tradedesk#crm-data-segment-credentials">the HighTouch docs</a>.
     * @type {string}
     * @memberof ConnectionOptionsTheTradeDesk
     */
    api_key: string;
    /**
     * Select a server location of your choice. If unspecified, defaults to 'production'. Refer to <a href="https://hightouch.com/docs/destinations/tradedesk#first-party-data-segment-credentials">the HighTouch docs</a>.
     * @type {string}
     * @memberof ConnectionOptionsTheTradeDesk
     */
    environment?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsTheTradeDesk
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsTheTradeDesk` type.)
 * 
 * The Trade Desk connection options
 * @export
 * @interface ConnectionOptionsTheTradeDeskMergePatch
 */
export interface ConnectionOptionsTheTradeDeskMergePatch {
    /**
     * Refer to <a href="https://hightouch.com/docs/destinations/tradedesk#first-party-data-segment-credentials">the HighTouch docs</a>.
     * @type {string}
     * @memberof ConnectionOptionsTheTradeDeskMergePatch
     */
    advertiser_id?: string;
    /**
     * To generate an API token you must contact your TradeDesk rep and ask for CRM Data Management Access. Refer to <a href="https://hightouch.com/docs/destinations/tradedesk#crm-data-segment-credentials">the HighTouch docs</a>.
     * @type {string}
     * @memberof ConnectionOptionsTheTradeDeskMergePatch
     */
    api_key?: string;
    /**
     * Select a server location of your choice. If unspecified, defaults to 'production'. Refer to <a href="https://hightouch.com/docs/destinations/tradedesk#first-party-data-segment-credentials">the HighTouch docs</a>.
     * @type {string}
     * @memberof ConnectionOptionsTheTradeDeskMergePatch
     */
    environment?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsTheTradeDeskMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsTheTradeDesk` type.)
 * 
 * The Trade Desk connection options
 * @export
 * @interface ConnectionOptionsTheTradeDeskPost
 */
export interface ConnectionOptionsTheTradeDeskPost {
    /**
     * Refer to <a href="https://hightouch.com/docs/destinations/tradedesk#first-party-data-segment-credentials">the HighTouch docs</a>.
     * @type {string}
     * @memberof ConnectionOptionsTheTradeDeskPost
     */
    advertiser_id: string;
    /**
     * To generate an API token you must contact your TradeDesk rep and ask for CRM Data Management Access. Refer to <a href="https://hightouch.com/docs/destinations/tradedesk#crm-data-segment-credentials">the HighTouch docs</a>.
     * @type {string}
     * @memberof ConnectionOptionsTheTradeDeskPost
     */
    api_key: string;
    /**
     * Select a server location of your choice. If unspecified, defaults to 'production'. Refer to <a href="https://hightouch.com/docs/destinations/tradedesk#first-party-data-segment-credentials">the HighTouch docs</a>.
     * @type {string}
     * @memberof ConnectionOptionsTheTradeDeskPost
     */
    environment?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsTheTradeDeskPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsTheTradeDesk` type.)
 * 
 * The Trade Desk connection options
 * @export
 * @interface ConnectionOptionsTheTradeDeskPut
 */
export interface ConnectionOptionsTheTradeDeskPut {
    /**
     * Refer to <a href="https://hightouch.com/docs/destinations/tradedesk#first-party-data-segment-credentials">the HighTouch docs</a>.
     * @type {string}
     * @memberof ConnectionOptionsTheTradeDeskPut
     */
    advertiser_id: string;
    /**
     * To generate an API token you must contact your TradeDesk rep and ask for CRM Data Management Access. Refer to <a href="https://hightouch.com/docs/destinations/tradedesk#crm-data-segment-credentials">the HighTouch docs</a>.
     * @type {string}
     * @memberof ConnectionOptionsTheTradeDeskPut
     */
    api_key: string;
    /**
     * Select a server location of your choice. If unspecified, defaults to 'production'. Refer to <a href="https://hightouch.com/docs/destinations/tradedesk#first-party-data-segment-credentials">the HighTouch docs</a>.
     * @type {string}
     * @memberof ConnectionOptionsTheTradeDeskPut
     */
    environment?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsTheTradeDeskPut
     */
    type: string;
}
/**
 * TikTok connection options
 * @export
 * @interface ConnectionOptionsTiktok
 */
export interface ConnectionOptionsTiktok {
    /**
     * Account id for the TikTok connection
     * @type {string}
     * @memberof ConnectionOptionsTiktok
     */
    tiktok_account_id?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsTiktok
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `ConnectionOptionsTiktok` type.)
 * 
 * TikTok connection options
 * @export
 * @interface ConnectionOptionsTiktokMergePatch
 */
export interface ConnectionOptionsTiktokMergePatch {
    /**
     * Account id for the TikTok connection
     * @type {string}
     * @memberof ConnectionOptionsTiktokMergePatch
     */
    tiktok_account_id?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsTiktokMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `ConnectionOptionsTiktok` type.)
 * 
 * TikTok connection options
 * @export
 * @interface ConnectionOptionsTiktokPost
 */
export interface ConnectionOptionsTiktokPost {
    /**
     * Account id for the TikTok connection
     * @type {string}
     * @memberof ConnectionOptionsTiktokPost
     */
    tiktok_account_id?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsTiktokPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `ConnectionOptionsTiktok` type.)
 * 
 * TikTok connection options
 * @export
 * @interface ConnectionOptionsTiktokPut
 */
export interface ConnectionOptionsTiktokPut {
    /**
     * Account id for the TikTok connection
     * @type {string}
     * @memberof ConnectionOptionsTiktokPut
     */
    tiktok_account_id?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof ConnectionOptionsTiktokPut
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `Connection` type.)
 * 
 * Configuration for connecting data between Faraday and an external location.
 * 
 * Connections are required when working with **replication targets**.
 * @export
 * @interface ConnectionPost
 */
export interface ConnectionPost {
    /**
     * A user-friendly name of the connection.
     * @type {string}
     * @memberof ConnectionPost
     */
    name: string;
    /**
     * 
     * @type {ConnectionOptionsPost}
     * @memberof ConnectionPost
     */
    options: ConnectionOptionsPost;
}
/**
 * (Parameters used to PUT a value of the `Connection` type.)
 * 
 * Configuration for connecting data between Faraday and an external location.
 * 
 * Connections are required when working with **replication targets**.
 * @export
 * @interface ConnectionPut
 */
export interface ConnectionPut {
    /**
     * A user-friendly name of the connection.
     * @type {string}
     * @memberof ConnectionPut
     */
    name: string;
    /**
     * 
     * @type {ConnectionOptionsPut}
     * @memberof ConnectionPut
     */
    options: ConnectionOptionsPut;
}
/**
 * 
 * @export
 * @interface ContentsRow
 */
export interface ContentsRow {
    /**
     * The name of a table or object found in the connection
     * @type {string}
     * @memberof ContentsRow
     */
    name: string;
    /**
     * Object size in bytes. Only applicable to object stores (S3, GCS, etc).
     * @type {number}
     * @memberof ContentsRow
     */
    object_size?: number;
    /**
     * Row count if available from this connection type. Only applicable to databases and data warehouses. Some do not have an efficient row count mechanism (e.g. Postgres) and so this is not provided.
     * @type {number}
     * @memberof ContentsRow
     */
    row_count?: number;
}
/**
 * A mapping from dataset columns to what they mean. It is recommended to include a "datetime" column if possible, as it will improve the accuracy of models.
 * @export
 * @interface DataMap
 */
export interface DataMap {
    [key: string]: DataMapColumn | any;
    /**
     * 
     * @type {DataMapColumn}
     * @memberof DataMap
     */
    datetime?: DataMapColumn;
}
/**
 * 
 * @export
 * @interface DataMapColumn
 */
export interface DataMapColumn {
    /**
     * The name of a column in the dataset. If format is "static_date_iso8601", then the value provided in this field is used as a static value.
     * @type {string}
     * @memberof DataMapColumn
     */
    column_name: string;
    /**
     * 
     * @type {DataMapColumnFormat}
     * @memberof DataMapColumn
     */
    format?: DataMapColumnFormat;
}
/**
 * Additional context for the column's data that isn't captured by its data type. For example, a 'revenue' column's data type would likely be 'int64', but format specifies if this number represents 'dollars' or 'cents'. This can be left blank if no additional context is needed.
 * @export
 * @enum {string}
 */
export enum DataMapColumnFormat {
    CurrencyCents = 'currency_cents',
    CurrencyDollars = 'currency_dollars',
    MmDdYySlash = 'mm_dd_yy_slash',
    MmDdYyyySlash = 'mm_dd_yyyy_slash',
    MmDdYyDash = 'mm_dd_yy_dash',
    MmDdYyyyDash = 'mm_dd_yyyy_dash',
    YyyyMmDdSlash = 'yyyy_mm_dd_slash',
    YyMmDdSlash = 'yy_mm_dd_slash',
    YyyyMmDdDash = 'yyyy_mm_dd_dash',
    YyMmDdDash = 'yy_mm_dd_dash',
    Yyyymmdd = 'yyyymmdd',
    Yyyymm = 'yyyymm',
    YyyyMmDash = 'yyyy_mm_dash',
    YyyyMmSlash = 'yyyy_mm_slash',
    DdMmYyyySlash = 'dd_mm_yyyy_slash',
    DdMmYySlash = 'dd_mm_yy_slash',
    DdMmYyyyDash = 'dd_mm_yyyy_dash',
    DdMmYyDash = 'dd_mm_yy_dash',
    DateIso8601 = 'date_iso8601',
    DateMonthDayFullyear = 'date_month_day_fullyear',
    DateMonthDayShortyear = 'date_month_day_shortyear',
    DateMonthDayFullyearHoursMinutes = 'date_month_day_fullyear_hours_minutes',
    DateMonthDayFullyearHoursMinutesSeconds = 'date_month_day_fullyear_hours_minutes_seconds',
    DateSecondsSinceEpochUtc = 'date_seconds_since_epoch_utc',
    DateMillisecondsSinceEpochUtc = 'date_milliseconds_since_epoch_utc',
    ListCommaSeparated = 'list_comma_separated',
    ListSemicolonSeparated = 'list_semicolon_separated',
    ListSingleValue = 'list_single_value',
    StaticDateIso8601 = 'static_date_iso8601'
}
/**
 * 
 * @export
 * @interface DataMapColumnMergePatch
 */
export interface DataMapColumnMergePatch {
    /**
     * The name of a column in the dataset. If format is "static_date_iso8601", then the value provided in this field is used as a static value.
     * @type {string}
     * @memberof DataMapColumnMergePatch
     */
    column_name?: string;
    /**
     * 
     * @type {DataMapColumnFormat}
     * @memberof DataMapColumnMergePatch
     */
    format?: DataMapColumnFormat | null;
}
/**
 * 
 * @export
 * @interface DataMapColumnPost
 */
export interface DataMapColumnPost {
    /**
     * The name of a column in the dataset. If format is "static_date_iso8601", then the value provided in this field is used as a static value.
     * @type {string}
     * @memberof DataMapColumnPost
     */
    column_name: string;
    /**
     * 
     * @type {DataMapColumnFormat}
     * @memberof DataMapColumnPost
     */
    format?: DataMapColumnFormat;
}
/**
 * 
 * @export
 * @interface DataMapColumnPut
 */
export interface DataMapColumnPut {
    /**
     * The name of a column in the dataset. If format is "static_date_iso8601", then the value provided in this field is used as a static value.
     * @type {string}
     * @memberof DataMapColumnPut
     */
    column_name: string;
    /**
     * 
     * @type {DataMapColumnFormat}
     * @memberof DataMapColumnPut
     */
    format?: DataMapColumnFormat;
}
/**
 * (Parameters used to PATCH the `DataMap` type.)
 * 
 * A mapping from dataset columns to what they mean. It is recommended to include a "datetime" column if possible, as it will improve the accuracy of models.
 * @export
 * @interface DataMapMergePatch
 */
export interface DataMapMergePatch {
    [key: string]: DataMapColumnMergePatch | any;
    /**
     * 
     * @type {DataMapColumnMergePatch}
     * @memberof DataMapMergePatch
     */
    datetime?: DataMapColumnMergePatch | null;
}
/**
 * (Parameters used to POST a new value of the `DataMap` type.)
 * 
 * A mapping from dataset columns to what they mean. It is recommended to include a "datetime" column if possible, as it will improve the accuracy of models.
 * @export
 * @interface DataMapPost
 */
export interface DataMapPost {
    [key: string]: DataMapColumnPost | any;
    /**
     * 
     * @type {DataMapColumnPost}
     * @memberof DataMapPost
     */
    datetime?: DataMapColumnPost;
}
/**
 * (Parameters used to PUT a value of the `DataMap` type.)
 * 
 * A mapping from dataset columns to what they mean. It is recommended to include a "datetime" column if possible, as it will improve the accuracy of models.
 * @export
 * @interface DataMapPut
 */
export interface DataMapPut {
    [key: string]: DataMapColumnPut | any;
    /**
     * 
     * @type {DataMapColumnPut}
     * @memberof DataMapPut
     */
    datetime?: DataMapColumnPut;
}
/**
 * Tabular data describing orders, customers, leads, etc.
 * @export
 * @interface Dataset
 */
export interface Dataset {
    /**
     * If not null, this resource will no longer receive updates, but will still be visable.
     * @type {string}
     * @memberof Dataset
     */
    archived_at?: string;
    /**
     * If this is a "retrieve" dataset, the UUID of a connection - see <a href="https://faraday.ai/developers/reference/createconnection">/connections</a> for more detail. 
     * 
     * Only a subset of connection types can be configured for dataset ingestion - see the list available in `options`.
     * 
     * Note that if a `connection_id` is specified, `options` must also be specified.
     * @type {string}
     * @memberof Dataset
     */
    connection_id?: string;
    /**
     * When this resource was created.
     * @type {string}
     * @memberof Dataset
     */
    created_at: string;
    /**
     * An array of columns
     * @type {Array<DatasetColumn>}
     * @memberof Dataset
     */
    detected_columns?: Array<DatasetColumn>;
    /**
     * 
     * @type {DatasetEnrichments}
     * @memberof Dataset
     */
    enrichment?: DatasetEnrichments;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof Dataset
     */
    id: string;
    /**
     * The number of unique people identified in this dataset.
     * This can be different from the row_count, for example, in a table of orders.
     * The same person can order multiple things, so there are more rows than identified people.
     * This will only be displayed if the dataset built successfully.
     * @type {number}
     * @memberof Dataset
     */
    identified_count?: number;
    /**
     * Which identity providers to use for matching, in order of priority.
     * By default, all datasets will match on 'fig' data.
     * The dataset's match-rate can be boosted by adding other identity providers.
     * Please contact support to get access to this feature.
     * @type {Array<DatasetIdentityProviders>}
     * @memberof Dataset
     */
    identity_providers?: Array<DatasetIdentityProviders>;
    /**
     * 
     * @type {IdentitySets}
     * @memberof Dataset
     */
    identity_sets: IdentitySets;
    /**
     * A column specifying a date associated with a record.
     * 
     * Ideally `incremental_column` SHOULD be set to make data loading more efficient.
     * 
     * Ideally ALSO set `upsert_columns` to ensure that data is not duplicated in the dataset.
     * 
     * After each
     * ingestion, the most recent value from `incremental_column` on any
     * record will be recorded, and during future ingestions, any
     * records with a value older than `incremental_column` will be ignored.
     * @type {string}
     * @memberof Dataset
     */
    incremental_column?: string;
    /**
     * The last time this resource's input was read.
     * @type {string}
     * @memberof Dataset
     */
    last_read_input_at?: string;
    /**
     * The last time this resource's configuration was updated. If this is more recent than last_updated_output_at, the resource will be rebuilt.
     * @type {string}
     * @memberof Dataset
     */
    last_updated_config_at?: string;
    /**
     * The last time this resource successfully built.
     * @type {string}
     * @memberof Dataset
     */
    last_updated_output_at?: string;
    /**
     * A managed dataset requires special configuration from a Faraday admin, and is read-only.
     * @type {boolean}
     * @memberof Dataset
     */
    managed?: boolean;
    /**
     * **Deprecated**: Use `enrichment` instead.
     * 
     * The number of identified people in this dataset that Faraday found a match for in its data.
     * This will only be displayed if the dataset built successfully.
     * @type {number}
     * @memberof Dataset
     */
    matched_count?: number;
    /**
     * List of merge datasets using this dataset as a source.
     * @type {Array<DatasetMergeDatasets>}
     * @memberof Dataset
     */
    merge_datasets?: Array<DatasetMergeDatasets>;
    /**
     * An identifying name for this dataset.
     * @type {string}
     * @memberof Dataset
     */
    name: string;
    /**
     * 
     * @type {DatasetOptions}
     * @memberof Dataset
     */
    options: DatasetOptions;
    /**
     * 
     * @type {DatasetOutputAllColumnsAsTraits}
     * @memberof Dataset
     */
    output_all_columns_as_traits?: DatasetOutputAllColumnsAsTraits;
    /**
     * 
     * @type {OutputToStreams}
     * @memberof Dataset
     */
    output_to_streams?: OutputToStreams;
    /**
     * An array-based approach to transforming datasets into streams. This structure allows multiple columns from the same dataset to map to the same stream, each with their own property configurations.
     * 
     * Unlike `output_to_streams`, this does not require nested structures and makes it straightforward to handle cases where a vendor provides multiple columns for the same attribute type (e.g., multiple age fields with different quality or derivation levels).
     * 
     * Each array element specifies a stream_name and properties configuration for stream properties including data column, datetime, authority, precision, derivations, and quality.
     * 
     * Streams named here will be automatically generated if they do not exist.
     * @type {Array<OutputToStreamArrayItem>}
     * @memberof Dataset
     */
    output_to_streams_array?: Array<OutputToStreamArrayItem>;
    /**
     * 
     * @type {OutputToTraits}
     * @memberof Dataset
     */
    output_to_traits?: OutputToTraits;
    /**
     * A dataset in preview mode will only detect columns and produce a data preview, but not ingest the data.
     * 
     * Defaults to undefined, which is equivalent to false.
     * @type {boolean}
     * @memberof Dataset
     */
    preview?: boolean;
    /**
     * Currently supported:
     *   - 'suppress' - data can be used for modeling but will be excluded from pipelines and deployments (do not contact)
     *   - 'delete' - data can not be used for modeling and will be excluded from pipelines and deployments (delete and do not contact)
     *   Note: While these options are labeled differently, they currently result in the same behavior (including deletion). This may change in the future.
     * @type {string}
     * @memberof Dataset
     */
    privacy?: DatasetPrivacyEnum;
    /**
     * **Deprecated:** use reference_key_columns instead
     * The name of the column that references an ID from an external system.
     * 
     * Setting this enables export of data via <a href="/reference/createtarget">`/targets`</a> that is keyed on this field.
     * @type {string}
     * @memberof Dataset
     */
    reference_key_column?: string;
    /**
     * The names of columns that reference IDs from an external system.
     * 
     * Setting this enables export of data via <a href="/reference/createtarget">`/targets`</a> that is keyed on this field.
     * @type {Array<string>}
     * @memberof Dataset
     */
    reference_key_columns?: Array<string>;
    /**
     * The type of this resource.
     * @type {string}
     * @memberof Dataset
     */
    resource_type: string;
    /**
     * The total number of rows in this dataset.
     * This will only be displayed if the dataset built successfully.
     * @type {number}
     * @memberof Dataset
     */
    row_count?: number;
    /**
     * If supported by the connection, a sample of the data.
     * @type {object}
     * @memberof Dataset
     */
    sample?: object;
    /**
     * 
     * @type {ResourceStatus}
     * @memberof Dataset
     */
    status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {string}
     * @memberof Dataset
     */
    status_changed_at?: string;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof Dataset
     */
    status_error?: string;
    /**
     * When this resource was last updated.
     * @type {string}
     * @memberof Dataset
     */
    updated_at: string;
    /**
     * A list of updates including how many rows were added.
     * 
     * If the dataset updates incrementally, these rows are added to the previous total. If the dataset is overwritten upon every ingestion, then these rows will be the new total row count.
     * @type {Array<DatasetUpdateHistory>}
     * @memberof Dataset
     */
    updates?: Array<DatasetUpdateHistory>;
    /**
     * Also known as the "primary key" of the dataset.  A column or set of columns that uniquely identify an input row.
     * 
     * Ideally `upsert_columns` SHOULD be set so that data is not duplicated in the dataset.
     * 
     * Ideally ALSO set `incremental_column` to make data loading more efficient.
     * 
     * If multiple rows are ingested with identical values in the columns
     * specified by `upsert_columns`, the newest will be used.
     * 
     * If neither `upsert_columns` nor `incremental_column` are
     * specified, each unique row will be ingested once.
     * @type {Array<string>}
     * @memberof Dataset
     */
    upsert_columns?: Array<string>;
}

/**
* @export
* @enum {string}
*/
export enum DatasetPrivacyEnum {
    Suppress = 'suppress',
    Delete = 'delete'
}
/**
 * Dataset column expressed in Avro datatypes
 * @export
 * @interface DatasetColumn
 */
export interface DatasetColumn {
    /**
     * 
     * @type {ComplexDataType}
     * @memberof DatasetColumn
     */
    data_type: ComplexDataType;
    /**
     * Count of non-null values divided by total count of values. 0.75 means 75% of the values are not null.
     * @type {number}
     * @memberof DatasetColumn
     */
    fill_rate?: number;
    /**
     * A list of recommended identity set keys to map this column to. Ordered by relevance.
     * @type {Array<string>}
     * @memberof DatasetColumn
     */
    identifier_recommendation?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof DatasetColumn
     */
    is_nullable: boolean;
    /**
     * Name of the column found in the client data.
     * @type {string}
     * @memberof DatasetColumn
     */
    name: string;
}
/**
 * Dataset enrichment metadata for a particular source
 * @export
 * @interface DatasetEnrichment
 */
export interface DatasetEnrichment {
    /**
     * How many of the identities were enriched with either person-level or residence-level data
     * @type {number}
     * @memberof DatasetEnrichment
     */
    any: number;
    /**
     * How many of the identities were enriched with person-level data
     * @type {number}
     * @memberof DatasetEnrichment
     */
    person: number;
    /**
     * How many of the identities were enriched with residence-level data
     * @type {number}
     * @memberof DatasetEnrichment
     */
    residence: number;
}
/**
 * A mapping of enrichment sources (like FIG) to their enrichment metadata
 * @export
 * @interface DatasetEnrichments
 */
export interface DatasetEnrichments {
    [key: string]: DatasetEnrichment;
}
/**
 * 
 * @export
 * @interface DatasetIdentityProviders
 */
export interface DatasetIdentityProviders {
    /**
     * If true, then use this identity provider even if a match was found by another, higher priority provider.
     * Please contact support to gain access to this feature for any provider other than FIG.
     * @type {boolean}
     * @memberof DatasetIdentityProviders
     */
    force?: boolean;
    /**
     * Which data provider to use for matching.
     * By default, all Faraday accounts can match on the 'Faraday Identity Graph' (FIG) provider.
     * Please contact support to gain access to additional providers.
     * @type {string}
     * @memberof DatasetIdentityProviders
     */
    provider: DatasetIdentityProvidersProviderEnum;
    /**
     * If 'first_recognized', send to match-boost providers one-at-a-time until a match is found. 
     * If 'all', send to all match-boost vendors. Please access support to gain access to this feature.
     * @type {string}
     * @memberof DatasetIdentityProviders
     */
    select?: DatasetIdentityProvidersSelectEnum;
}

/**
* @export
* @enum {string}
*/
export enum DatasetIdentityProvidersProviderEnum {
    Fig = 'fig',
    MatchBoost = 'match_boost'
}/**
* @export
* @enum {string}
*/
export enum DatasetIdentityProvidersSelectEnum {
    FirstRecognized = 'first_recognized',
    All = 'all'
}
/**
 * 
 * @export
 * @interface DatasetMergeDatasets
 */
export interface DatasetMergeDatasets {
    /**
     * The ID of the parent merge dataset.
     * @type {string}
     * @memberof DatasetMergeDatasets
     */
    dataset_id: string;
    /**
     * The column from this dataset used to join with the parent merge dataset.
     * @type {string}
     * @memberof DatasetMergeDatasets
     */
    join_column: string;
}
/**
 * (Parameters used to PATCH the `Dataset` type.)
 * 
 * Tabular data describing orders, customers, leads, etc.
 * @export
 * @interface DatasetMergePatch
 */
export interface DatasetMergePatch {
    /**
     * Which identity providers to use for matching, in order of priority.
     * By default, all datasets will match on 'fig' data.
     * The dataset's match-rate can be boosted by adding other identity providers.
     * Please contact support to get access to this feature.
     * @type {Array<DatasetIdentityProviders>}
     * @memberof DatasetMergePatch
     */
    identity_providers?: Array<DatasetIdentityProviders> | null;
    /**
     * 
     * @type {IdentitySetsMergePatch}
     * @memberof DatasetMergePatch
     */
    identity_sets?: IdentitySetsMergePatch;
    /**
     * A column specifying a date associated with a record.
     * 
     * Ideally `incremental_column` SHOULD be set to make data loading more efficient.
     * 
     * Ideally ALSO set `upsert_columns` to ensure that data is not duplicated in the dataset.
     * 
     * After each
     * ingestion, the most recent value from `incremental_column` on any
     * record will be recorded, and during future ingestions, any
     * records with a value older than `incremental_column` will be ignored.
     * @type {string}
     * @memberof DatasetMergePatch
     */
    incremental_column?: string | null;
    /**
     * An identifying name for this dataset.
     * @type {string}
     * @memberof DatasetMergePatch
     */
    name?: string;
    /**
     * 
     * @type {DatasetOptionsMergePatch}
     * @memberof DatasetMergePatch
     */
    options?: DatasetOptionsMergePatch;
    /**
     * 
     * @type {DatasetMergePatchOutputAllColumnsAsTraits}
     * @memberof DatasetMergePatch
     */
    output_all_columns_as_traits?: DatasetMergePatchOutputAllColumnsAsTraits | null;
    /**
     * 
     * @type {OutputToStreamsMergePatch}
     * @memberof DatasetMergePatch
     */
    output_to_streams?: OutputToStreamsMergePatch | null;
    /**
     * An array-based approach to transforming datasets into streams. This structure allows multiple columns from the same dataset to map to the same stream, each with their own property configurations.
     * 
     * Unlike `output_to_streams`, this does not require nested structures and makes it straightforward to handle cases where a vendor provides multiple columns for the same attribute type (e.g., multiple age fields with different quality or derivation levels).
     * 
     * Each array element specifies a stream_name and properties configuration for stream properties including data column, datetime, authority, precision, derivations, and quality.
     * 
     * Streams named here will be automatically generated if they do not exist.
     * @type {Array<OutputToStreamArrayItem>}
     * @memberof DatasetMergePatch
     */
    output_to_streams_array?: Array<OutputToStreamArrayItem> | null;
    /**
     * 
     * @type {OutputToTraitsMergePatch}
     * @memberof DatasetMergePatch
     */
    output_to_traits?: OutputToTraitsMergePatch | null;
    /**
     * A dataset in preview mode will only detect columns and produce a data preview, but not ingest the data.
     * 
     * Defaults to undefined, which is equivalent to false.
     * @type {boolean}
     * @memberof DatasetMergePatch
     */
    preview?: boolean | null;
    /**
     * Currently supported:
     *   - 'suppress' - data can be used for modeling but will be excluded from pipelines and deployments (do not contact)
     *   - 'delete' - data can not be used for modeling and will be excluded from pipelines and deployments (delete and do not contact)
     *   Note: While these options are labeled differently, they currently result in the same behavior (including deletion). This may change in the future.
     * @type {string}
     * @memberof DatasetMergePatch
     */
    privacy?: DatasetMergePatchPrivacyEnum;
    /**
     * **Deprecated:** use reference_key_columns instead
     * The name of the column that references an ID from an external system.
     * 
     * Setting this enables export of data via <a href="/reference/createtarget">`/targets`</a> that is keyed on this field.
     * @type {string}
     * @memberof DatasetMergePatch
     */
    reference_key_column?: string | null;
    /**
     * The names of columns that reference IDs from an external system.
     * 
     * Setting this enables export of data via <a href="/reference/createtarget">`/targets`</a> that is keyed on this field.
     * @type {Array<string>}
     * @memberof DatasetMergePatch
     */
    reference_key_columns?: Array<string> | null;
    /**
     * Also known as the "primary key" of the dataset.  A column or set of columns that uniquely identify an input row.
     * 
     * Ideally `upsert_columns` SHOULD be set so that data is not duplicated in the dataset.
     * 
     * Ideally ALSO set `incremental_column` to make data loading more efficient.
     * 
     * If multiple rows are ingested with identical values in the columns
     * specified by `upsert_columns`, the newest will be used.
     * 
     * If neither `upsert_columns` nor `incremental_column` are
     * specified, each unique row will be ingested once.
     * @type {Array<string>}
     * @memberof DatasetMergePatch
     */
    upsert_columns?: Array<string> | null;
}

/**
* @export
* @enum {string}
*/
export enum DatasetMergePatchPrivacyEnum {
    Suppress = 'suppress',
    Delete = 'delete'
}
/**
 * If specified, all columns that are not excluded will be output as traits.
 * 
 * `output_to_streams` may not be not be specified when setting this parameter.
 * @export
 * @interface DatasetMergePatchOutputAllColumnsAsTraits
 */
export interface DatasetMergePatchOutputAllColumnsAsTraits {
    /**
     * A list of column names to exclude from bulk trait generation.
     * @type {Array<string>}
     * @memberof DatasetMergePatchOutputAllColumnsAsTraits
     */
    exclude: Array<string>;
    /**
     * A list of column names that should only be used to generate traits.\
     * 
     * If unspecified, all columns will be considered and `output_to_traits`
     * must be unset. If specified, only these columns will be considered and
     * `output_to_traits` may be set in conjunction. In this case, any detected 
     * traits may not already be specified by `output_to_traits`; collisions will 
     * result in error.
     * @type {Array<string>}
     * @memberof DatasetMergePatchOutputAllColumnsAsTraits
     */
    include?: Array<string>;
}
/**
 * @type DatasetOptions
 * Dataset connection options
 * @export
 */
export type DatasetOptions = { type: 'aws_aurora_mysql' } & DatasetOptionsAwsAuroraMysql | { type: 'aws_aurora_postgres' } & DatasetOptionsAwsAuroraPostgres | { type: 'aws_rds_mysql' } & DatasetOptionsAwsRdsMysql | { type: 'aws_rds_postgres' } & DatasetOptionsAwsRdsPostgres | { type: 'aws_rds_sql_server' } & DatasetOptionsAwsRdsSqlServer | { type: 'aws_redshift_serverless' } & DatasetOptionsAwsRedshiftServerless | { type: 'azure_sql_server' } & DatasetOptionsAzureSqlServer | { type: 'bigquery' } & DatasetOptionsBigQuery | { type: 'classic' } & DatasetOptionsClassic | { type: 'gcp_cloud_sql_mysql' } & DatasetOptionsGcpCloudSqlMysql | { type: 'gcp_cloud_sql_postgres' } & DatasetOptionsGcpCloudSqlPostgres | { type: 'gcp_cloud_sql_sql_server' } & DatasetOptionsGcpCloudSqlSqlServer | { type: 'gcp_gcs_csv' } & DatasetOptionsGcpGcsCsv | { type: 'hosted_csv' } & DatasetOptionsHostedCsv | { type: 'hubspot' } & DatasetOptionsHubspot | { type: 'iterable' } & DatasetOptionsIterable | { type: 'klaviyo' } & DatasetOptionsKlaviyo | { type: 'merge' } & DatasetOptionsMerge | { type: 'motherduck' } & DatasetOptionsMotherduck | { type: 'mysql' } & DatasetOptionsMysql | { type: 'postgres' } & DatasetOptionsPostgres | { type: 'recharge' } & DatasetOptionsRecharge | { type: 'redshift' } & DatasetOptionsRedshift | { type: 's3_csv' } & DatasetOptionsS3Csv | { type: 'salesforce' } & DatasetOptionsSalesforce | { type: 'salesforce_marketing_cloud' } & DatasetOptionsSalesforceMarketingCloud | { type: 'sftp' } & DatasetOptionsSftp | { type: 'shopify' } & DatasetOptionsShopify | { type: 'snowflake' } & DatasetOptionsSnowflake | { type: 'sql_server' } & DatasetOptionsSqlServer | { type: 'stripe' } & DatasetOptionsStripe;
/**
 * Aurora (MySQL) dataset options
 * @export
 * @interface DatasetOptionsAwsAuroraMysql
 */
export interface DatasetOptionsAwsAuroraMysql {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsAuroraMysql
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsAuroraMysql
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsAwsAuroraMysql` type.)
 * 
 * Aurora (MySQL) dataset options
 * @export
 * @interface DatasetOptionsAwsAuroraMysqlMergePatch
 */
export interface DatasetOptionsAwsAuroraMysqlMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsAuroraMysqlMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsAuroraMysqlMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsAwsAuroraMysql` type.)
 * 
 * Aurora (MySQL) dataset options
 * @export
 * @interface DatasetOptionsAwsAuroraMysqlPost
 */
export interface DatasetOptionsAwsAuroraMysqlPost {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsAuroraMysqlPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsAuroraMysqlPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsAwsAuroraMysql` type.)
 * 
 * Aurora (MySQL) dataset options
 * @export
 * @interface DatasetOptionsAwsAuroraMysqlPut
 */
export interface DatasetOptionsAwsAuroraMysqlPut {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsAuroraMysqlPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsAuroraMysqlPut
     */
    type: string;
}
/**
 * AWS Aurora Postgres dataset options
 * @export
 * @interface DatasetOptionsAwsAuroraPostgres
 */
export interface DatasetOptionsAwsAuroraPostgres {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsAuroraPostgres
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsAuroraPostgres
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsAwsAuroraPostgres` type.)
 * 
 * AWS Aurora Postgres dataset options
 * @export
 * @interface DatasetOptionsAwsAuroraPostgresMergePatch
 */
export interface DatasetOptionsAwsAuroraPostgresMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsAuroraPostgresMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsAuroraPostgresMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsAwsAuroraPostgres` type.)
 * 
 * AWS Aurora Postgres dataset options
 * @export
 * @interface DatasetOptionsAwsAuroraPostgresPost
 */
export interface DatasetOptionsAwsAuroraPostgresPost {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsAuroraPostgresPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsAuroraPostgresPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsAwsAuroraPostgres` type.)
 * 
 * AWS Aurora Postgres dataset options
 * @export
 * @interface DatasetOptionsAwsAuroraPostgresPut
 */
export interface DatasetOptionsAwsAuroraPostgresPut {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsAuroraPostgresPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsAuroraPostgresPut
     */
    type: string;
}
/**
 * RDS (MySQL) dataset options
 * @export
 * @interface DatasetOptionsAwsRdsMysql
 */
export interface DatasetOptionsAwsRdsMysql {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsRdsMysql
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsRdsMysql
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsAwsRdsMysql` type.)
 * 
 * RDS (MySQL) dataset options
 * @export
 * @interface DatasetOptionsAwsRdsMysqlMergePatch
 */
export interface DatasetOptionsAwsRdsMysqlMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsRdsMysqlMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsRdsMysqlMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsAwsRdsMysql` type.)
 * 
 * RDS (MySQL) dataset options
 * @export
 * @interface DatasetOptionsAwsRdsMysqlPost
 */
export interface DatasetOptionsAwsRdsMysqlPost {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsRdsMysqlPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsRdsMysqlPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsAwsRdsMysql` type.)
 * 
 * RDS (MySQL) dataset options
 * @export
 * @interface DatasetOptionsAwsRdsMysqlPut
 */
export interface DatasetOptionsAwsRdsMysqlPut {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsRdsMysqlPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsRdsMysqlPut
     */
    type: string;
}
/**
 * RDS (Postgres) dataset options
 * @export
 * @interface DatasetOptionsAwsRdsPostgres
 */
export interface DatasetOptionsAwsRdsPostgres {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsRdsPostgres
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsRdsPostgres
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsAwsRdsPostgres` type.)
 * 
 * RDS (Postgres) dataset options
 * @export
 * @interface DatasetOptionsAwsRdsPostgresMergePatch
 */
export interface DatasetOptionsAwsRdsPostgresMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsRdsPostgresMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsRdsPostgresMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsAwsRdsPostgres` type.)
 * 
 * RDS (Postgres) dataset options
 * @export
 * @interface DatasetOptionsAwsRdsPostgresPost
 */
export interface DatasetOptionsAwsRdsPostgresPost {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsRdsPostgresPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsRdsPostgresPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsAwsRdsPostgres` type.)
 * 
 * RDS (Postgres) dataset options
 * @export
 * @interface DatasetOptionsAwsRdsPostgresPut
 */
export interface DatasetOptionsAwsRdsPostgresPut {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsRdsPostgresPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsRdsPostgresPut
     */
    type: string;
}
/**
 * RDS (SQL Server) dataset options
 * @export
 * @interface DatasetOptionsAwsRdsSqlServer
 */
export interface DatasetOptionsAwsRdsSqlServer {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsRdsSqlServer
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsRdsSqlServer
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsAwsRdsSqlServer` type.)
 * 
 * RDS (SQL Server) dataset options
 * @export
 * @interface DatasetOptionsAwsRdsSqlServerMergePatch
 */
export interface DatasetOptionsAwsRdsSqlServerMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsRdsSqlServerMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsRdsSqlServerMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsAwsRdsSqlServer` type.)
 * 
 * RDS (SQL Server) dataset options
 * @export
 * @interface DatasetOptionsAwsRdsSqlServerPost
 */
export interface DatasetOptionsAwsRdsSqlServerPost {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsRdsSqlServerPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsRdsSqlServerPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsAwsRdsSqlServer` type.)
 * 
 * RDS (SQL Server) dataset options
 * @export
 * @interface DatasetOptionsAwsRdsSqlServerPut
 */
export interface DatasetOptionsAwsRdsSqlServerPut {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsRdsSqlServerPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsRdsSqlServerPut
     */
    type: string;
}
/**
 * Redshift Serverless dataset options
 * @export
 * @interface DatasetOptionsAwsRedshiftServerless
 */
export interface DatasetOptionsAwsRedshiftServerless {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsRedshiftServerless
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsRedshiftServerless
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsAwsRedshiftServerless` type.)
 * 
 * Redshift Serverless dataset options
 * @export
 * @interface DatasetOptionsAwsRedshiftServerlessMergePatch
 */
export interface DatasetOptionsAwsRedshiftServerlessMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsRedshiftServerlessMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsRedshiftServerlessMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsAwsRedshiftServerless` type.)
 * 
 * Redshift Serverless dataset options
 * @export
 * @interface DatasetOptionsAwsRedshiftServerlessPost
 */
export interface DatasetOptionsAwsRedshiftServerlessPost {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsRedshiftServerlessPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsRedshiftServerlessPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsAwsRedshiftServerless` type.)
 * 
 * Redshift Serverless dataset options
 * @export
 * @interface DatasetOptionsAwsRedshiftServerlessPut
 */
export interface DatasetOptionsAwsRedshiftServerlessPut {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAwsRedshiftServerlessPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAwsRedshiftServerlessPut
     */
    type: string;
}
/**
 * Azure SQL dataset options
 * @export
 * @interface DatasetOptionsAzureSqlServer
 */
export interface DatasetOptionsAzureSqlServer {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAzureSqlServer
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAzureSqlServer
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsAzureSqlServer` type.)
 * 
 * Azure SQL dataset options
 * @export
 * @interface DatasetOptionsAzureSqlServerMergePatch
 */
export interface DatasetOptionsAzureSqlServerMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAzureSqlServerMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAzureSqlServerMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsAzureSqlServer` type.)
 * 
 * Azure SQL dataset options
 * @export
 * @interface DatasetOptionsAzureSqlServerPost
 */
export interface DatasetOptionsAzureSqlServerPost {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAzureSqlServerPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAzureSqlServerPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsAzureSqlServer` type.)
 * 
 * Azure SQL dataset options
 * @export
 * @interface DatasetOptionsAzureSqlServerPut
 */
export interface DatasetOptionsAzureSqlServerPut {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsAzureSqlServerPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsAzureSqlServerPut
     */
    type: string;
}
/**
 * BigQuery dataset options
 * @export
 * @interface DatasetOptionsBigQuery
 */
export interface DatasetOptionsBigQuery {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsBigQuery
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsBigQuery
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsBigQuery` type.)
 * 
 * BigQuery dataset options
 * @export
 * @interface DatasetOptionsBigQueryMergePatch
 */
export interface DatasetOptionsBigQueryMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsBigQueryMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsBigQueryMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsBigQuery` type.)
 * 
 * BigQuery dataset options
 * @export
 * @interface DatasetOptionsBigQueryPost
 */
export interface DatasetOptionsBigQueryPost {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsBigQueryPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsBigQueryPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsBigQuery` type.)
 * 
 * BigQuery dataset options
 * @export
 * @interface DatasetOptionsBigQueryPut
 */
export interface DatasetOptionsBigQueryPut {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsBigQueryPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsBigQueryPut
     */
    type: string;
}
/**
 * Classic Faraday Sources dataset options
 * @export
 * @interface DatasetOptionsClassic
 */
export interface DatasetOptionsClassic {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsClassic
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsClassic` type.)
 * 
 * Classic Faraday Sources dataset options
 * @export
 * @interface DatasetOptionsClassicMergePatch
 */
export interface DatasetOptionsClassicMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsClassicMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsClassic` type.)
 * 
 * Classic Faraday Sources dataset options
 * @export
 * @interface DatasetOptionsClassicPost
 */
export interface DatasetOptionsClassicPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsClassicPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsClassic` type.)
 * 
 * Classic Faraday Sources dataset options
 * @export
 * @interface DatasetOptionsClassicPut
 */
export interface DatasetOptionsClassicPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsClassicPut
     */
    type: string;
}
/**
 * Google Cloud SQL (MySQL) dataset options
 * @export
 * @interface DatasetOptionsGcpCloudSqlMysql
 */
export interface DatasetOptionsGcpCloudSqlMysql {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlMysql
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlMysql
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsGcpCloudSqlMysql` type.)
 * 
 * Google Cloud SQL (MySQL) dataset options
 * @export
 * @interface DatasetOptionsGcpCloudSqlMysqlMergePatch
 */
export interface DatasetOptionsGcpCloudSqlMysqlMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlMysqlMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlMysqlMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsGcpCloudSqlMysql` type.)
 * 
 * Google Cloud SQL (MySQL) dataset options
 * @export
 * @interface DatasetOptionsGcpCloudSqlMysqlPost
 */
export interface DatasetOptionsGcpCloudSqlMysqlPost {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlMysqlPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlMysqlPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsGcpCloudSqlMysql` type.)
 * 
 * Google Cloud SQL (MySQL) dataset options
 * @export
 * @interface DatasetOptionsGcpCloudSqlMysqlPut
 */
export interface DatasetOptionsGcpCloudSqlMysqlPut {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlMysqlPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlMysqlPut
     */
    type: string;
}
/**
 * Google Cloud SQL (Postgres) dataset options
 * @export
 * @interface DatasetOptionsGcpCloudSqlPostgres
 */
export interface DatasetOptionsGcpCloudSqlPostgres {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlPostgres
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlPostgres
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsGcpCloudSqlPostgres` type.)
 * 
 * Google Cloud SQL (Postgres) dataset options
 * @export
 * @interface DatasetOptionsGcpCloudSqlPostgresMergePatch
 */
export interface DatasetOptionsGcpCloudSqlPostgresMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlPostgresMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlPostgresMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsGcpCloudSqlPostgres` type.)
 * 
 * Google Cloud SQL (Postgres) dataset options
 * @export
 * @interface DatasetOptionsGcpCloudSqlPostgresPost
 */
export interface DatasetOptionsGcpCloudSqlPostgresPost {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlPostgresPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlPostgresPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsGcpCloudSqlPostgres` type.)
 * 
 * Google Cloud SQL (Postgres) dataset options
 * @export
 * @interface DatasetOptionsGcpCloudSqlPostgresPut
 */
export interface DatasetOptionsGcpCloudSqlPostgresPut {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlPostgresPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlPostgresPut
     */
    type: string;
}
/**
 * Google Cloud SQL (SQL Server) dataset options
 * @export
 * @interface DatasetOptionsGcpCloudSqlSqlServer
 */
export interface DatasetOptionsGcpCloudSqlSqlServer {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlSqlServer
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlSqlServer
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsGcpCloudSqlSqlServer` type.)
 * 
 * Google Cloud SQL (SQL Server) dataset options
 * @export
 * @interface DatasetOptionsGcpCloudSqlSqlServerMergePatch
 */
export interface DatasetOptionsGcpCloudSqlSqlServerMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlSqlServerMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlSqlServerMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsGcpCloudSqlSqlServer` type.)
 * 
 * Google Cloud SQL (SQL Server) dataset options
 * @export
 * @interface DatasetOptionsGcpCloudSqlSqlServerPost
 */
export interface DatasetOptionsGcpCloudSqlSqlServerPost {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlSqlServerPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlSqlServerPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsGcpCloudSqlSqlServer` type.)
 * 
 * Google Cloud SQL (SQL Server) dataset options
 * @export
 * @interface DatasetOptionsGcpCloudSqlSqlServerPut
 */
export interface DatasetOptionsGcpCloudSqlSqlServerPut {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlSqlServerPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsGcpCloudSqlSqlServerPut
     */
    type: string;
}
/**
 * GCS dataset options
 * @export
 * @interface DatasetOptionsGcpGcsCsv
 */
export interface DatasetOptionsGcpGcsCsv {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof DatasetOptionsGcpGcsCsv
     */
    delimiter?: string;
    /**
     * Whether the files you uploaded are encrypted with Faraday's public key.
     * @type {boolean}
     * @memberof DatasetOptionsGcpGcsCsv
     */
    encrypted?: boolean;
    /**
     * A row of column headers. The delimiter must be the same as the `delimiter` parameter and match the data. If not provided, the first row of the CSV file will be used as the headers.
     * @type {string}
     * @memberof DatasetOptionsGcpGcsCsv
     */
    header_row?: string;
    /**
     * The prefix inside the bucket. May optionally include full filename, file globs (not regexp), and stftime date parsing formatting (which will override blob storage's native timestamps). For example, orders/, orders/file.csv, orders/*.csv, or orders/files-%Y-%m-%d.csv
     * @type {string}
     * @memberof DatasetOptionsGcpGcsCsv
     */
    prefix: string;
    /**
     * Defaults to false, which means all files are merged into the dataset. If set to true, every time the dataset is ingested, delete all previous data and replace it with only the data in the latest file. This setting only guarantees that previous data is deleted and older files are not processed; however this process may run more than once. Therefore you cannot use this functionality to ensure "exactly once' delivery of a downstream target.
     * @type {boolean}
     * @memberof DatasetOptionsGcpGcsCsv
     */
    replace_all_with_latest_file?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsGcpGcsCsv
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsGcpGcsCsv` type.)
 * 
 * GCS dataset options
 * @export
 * @interface DatasetOptionsGcpGcsCsvMergePatch
 */
export interface DatasetOptionsGcpGcsCsvMergePatch {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof DatasetOptionsGcpGcsCsvMergePatch
     */
    delimiter?: string | null;
    /**
     * Whether the files you uploaded are encrypted with Faraday's public key.
     * @type {boolean}
     * @memberof DatasetOptionsGcpGcsCsvMergePatch
     */
    encrypted?: boolean | null;
    /**
     * A row of column headers. The delimiter must be the same as the `delimiter` parameter and match the data. If not provided, the first row of the CSV file will be used as the headers.
     * @type {string}
     * @memberof DatasetOptionsGcpGcsCsvMergePatch
     */
    header_row?: string | null;
    /**
     * The prefix inside the bucket. May optionally include full filename, file globs (not regexp), and stftime date parsing formatting (which will override blob storage's native timestamps). For example, orders/, orders/file.csv, orders/*.csv, or orders/files-%Y-%m-%d.csv
     * @type {string}
     * @memberof DatasetOptionsGcpGcsCsvMergePatch
     */
    prefix?: string;
    /**
     * Defaults to false, which means all files are merged into the dataset. If set to true, every time the dataset is ingested, delete all previous data and replace it with only the data in the latest file. This setting only guarantees that previous data is deleted and older files are not processed; however this process may run more than once. Therefore you cannot use this functionality to ensure "exactly once' delivery of a downstream target.
     * @type {boolean}
     * @memberof DatasetOptionsGcpGcsCsvMergePatch
     */
    replace_all_with_latest_file?: boolean | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsGcpGcsCsvMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsGcpGcsCsv` type.)
 * 
 * GCS dataset options
 * @export
 * @interface DatasetOptionsGcpGcsCsvPost
 */
export interface DatasetOptionsGcpGcsCsvPost {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof DatasetOptionsGcpGcsCsvPost
     */
    delimiter?: string;
    /**
     * Whether the files you uploaded are encrypted with Faraday's public key.
     * @type {boolean}
     * @memberof DatasetOptionsGcpGcsCsvPost
     */
    encrypted?: boolean;
    /**
     * A row of column headers. The delimiter must be the same as the `delimiter` parameter and match the data. If not provided, the first row of the CSV file will be used as the headers.
     * @type {string}
     * @memberof DatasetOptionsGcpGcsCsvPost
     */
    header_row?: string;
    /**
     * The prefix inside the bucket. May optionally include full filename, file globs (not regexp), and stftime date parsing formatting (which will override blob storage's native timestamps). For example, orders/, orders/file.csv, orders/*.csv, or orders/files-%Y-%m-%d.csv
     * @type {string}
     * @memberof DatasetOptionsGcpGcsCsvPost
     */
    prefix: string;
    /**
     * Defaults to false, which means all files are merged into the dataset. If set to true, every time the dataset is ingested, delete all previous data and replace it with only the data in the latest file. This setting only guarantees that previous data is deleted and older files are not processed; however this process may run more than once. Therefore you cannot use this functionality to ensure "exactly once' delivery of a downstream target.
     * @type {boolean}
     * @memberof DatasetOptionsGcpGcsCsvPost
     */
    replace_all_with_latest_file?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsGcpGcsCsvPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsGcpGcsCsv` type.)
 * 
 * GCS dataset options
 * @export
 * @interface DatasetOptionsGcpGcsCsvPut
 */
export interface DatasetOptionsGcpGcsCsvPut {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof DatasetOptionsGcpGcsCsvPut
     */
    delimiter?: string;
    /**
     * Whether the files you uploaded are encrypted with Faraday's public key.
     * @type {boolean}
     * @memberof DatasetOptionsGcpGcsCsvPut
     */
    encrypted?: boolean;
    /**
     * A row of column headers. The delimiter must be the same as the `delimiter` parameter and match the data. If not provided, the first row of the CSV file will be used as the headers.
     * @type {string}
     * @memberof DatasetOptionsGcpGcsCsvPut
     */
    header_row?: string;
    /**
     * The prefix inside the bucket. May optionally include full filename, file globs (not regexp), and stftime date parsing formatting (which will override blob storage's native timestamps). For example, orders/, orders/file.csv, orders/*.csv, or orders/files-%Y-%m-%d.csv
     * @type {string}
     * @memberof DatasetOptionsGcpGcsCsvPut
     */
    prefix: string;
    /**
     * Defaults to false, which means all files are merged into the dataset. If set to true, every time the dataset is ingested, delete all previous data and replace it with only the data in the latest file. This setting only guarantees that previous data is deleted and older files are not processed; however this process may run more than once. Therefore you cannot use this functionality to ensure "exactly once' delivery of a downstream target.
     * @type {boolean}
     * @memberof DatasetOptionsGcpGcsCsvPut
     */
    replace_all_with_latest_file?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsGcpGcsCsvPut
     */
    type: string;
}
/**
 * CSV dataset options
 * @export
 * @interface DatasetOptionsHostedCsv
 */
export interface DatasetOptionsHostedCsv {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof DatasetOptionsHostedCsv
     */
    delimiter?: string;
    /**
     * Whether the files you uploaded are encrypted with Faraday's public key.
     * @type {boolean}
     * @memberof DatasetOptionsHostedCsv
     */
    encrypted?: boolean;
    /**
     * A row of column headers. The delimiter must be the same as the `delimiter` parameter and match the data. If not provided, the first row of the CSV file will be used as the headers.
     * @type {string}
     * @memberof DatasetOptionsHostedCsv
     */
    header_row?: string;
    /**
     * Defaults to false, which means all files are merged into the dataset. If set to true, every time the dataset is ingested, delete all previous data and replace it with only the data in the latest file. This setting only guarantees that previous data is deleted and older files are not processed; however this process may run more than once. Therefore you cannot use this functionality to ensure "exactly once' delivery of a downstream target.
     * @type {boolean}
     * @memberof DatasetOptionsHostedCsv
     */
    replace_all_with_latest_file?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsHostedCsv
     */
    type: string;
    /**
     * Subdirectory of uploads where files are stored and retrieved.
     * A directory is dedicated to one or more files which ought to have the same shape and contents. One or more datasets can pull from that folder (and in different ways) and push to one or more event streams. So if you have two different types of orders from two different POS/ecommerce systems, you would put them each in separate folders. Then you would create two different datasets that would both point to an `orders` stream.
     * @type {string}
     * @memberof DatasetOptionsHostedCsv
     */
    upload_directory: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsHostedCsv` type.)
 * 
 * CSV dataset options
 * @export
 * @interface DatasetOptionsHostedCsvMergePatch
 */
export interface DatasetOptionsHostedCsvMergePatch {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof DatasetOptionsHostedCsvMergePatch
     */
    delimiter?: string | null;
    /**
     * Whether the files you uploaded are encrypted with Faraday's public key.
     * @type {boolean}
     * @memberof DatasetOptionsHostedCsvMergePatch
     */
    encrypted?: boolean | null;
    /**
     * A row of column headers. The delimiter must be the same as the `delimiter` parameter and match the data. If not provided, the first row of the CSV file will be used as the headers.
     * @type {string}
     * @memberof DatasetOptionsHostedCsvMergePatch
     */
    header_row?: string | null;
    /**
     * Defaults to false, which means all files are merged into the dataset. If set to true, every time the dataset is ingested, delete all previous data and replace it with only the data in the latest file. This setting only guarantees that previous data is deleted and older files are not processed; however this process may run more than once. Therefore you cannot use this functionality to ensure "exactly once' delivery of a downstream target.
     * @type {boolean}
     * @memberof DatasetOptionsHostedCsvMergePatch
     */
    replace_all_with_latest_file?: boolean | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsHostedCsvMergePatch
     */
    type: string;
    /**
     * Subdirectory of uploads where files are stored and retrieved.
     * A directory is dedicated to one or more files which ought to have the same shape and contents. One or more datasets can pull from that folder (and in different ways) and push to one or more event streams. So if you have two different types of orders from two different POS/ecommerce systems, you would put them each in separate folders. Then you would create two different datasets that would both point to an `orders` stream.
     * @type {string}
     * @memberof DatasetOptionsHostedCsvMergePatch
     */
    upload_directory?: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsHostedCsv` type.)
 * 
 * CSV dataset options
 * @export
 * @interface DatasetOptionsHostedCsvPost
 */
export interface DatasetOptionsHostedCsvPost {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof DatasetOptionsHostedCsvPost
     */
    delimiter?: string;
    /**
     * Whether the files you uploaded are encrypted with Faraday's public key.
     * @type {boolean}
     * @memberof DatasetOptionsHostedCsvPost
     */
    encrypted?: boolean;
    /**
     * A row of column headers. The delimiter must be the same as the `delimiter` parameter and match the data. If not provided, the first row of the CSV file will be used as the headers.
     * @type {string}
     * @memberof DatasetOptionsHostedCsvPost
     */
    header_row?: string;
    /**
     * Defaults to false, which means all files are merged into the dataset. If set to true, every time the dataset is ingested, delete all previous data and replace it with only the data in the latest file. This setting only guarantees that previous data is deleted and older files are not processed; however this process may run more than once. Therefore you cannot use this functionality to ensure "exactly once' delivery of a downstream target.
     * @type {boolean}
     * @memberof DatasetOptionsHostedCsvPost
     */
    replace_all_with_latest_file?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsHostedCsvPost
     */
    type: string;
    /**
     * Subdirectory of uploads where files are stored and retrieved.
     * A directory is dedicated to one or more files which ought to have the same shape and contents. One or more datasets can pull from that folder (and in different ways) and push to one or more event streams. So if you have two different types of orders from two different POS/ecommerce systems, you would put them each in separate folders. Then you would create two different datasets that would both point to an `orders` stream.
     * @type {string}
     * @memberof DatasetOptionsHostedCsvPost
     */
    upload_directory: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsHostedCsv` type.)
 * 
 * CSV dataset options
 * @export
 * @interface DatasetOptionsHostedCsvPut
 */
export interface DatasetOptionsHostedCsvPut {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof DatasetOptionsHostedCsvPut
     */
    delimiter?: string;
    /**
     * Whether the files you uploaded are encrypted with Faraday's public key.
     * @type {boolean}
     * @memberof DatasetOptionsHostedCsvPut
     */
    encrypted?: boolean;
    /**
     * A row of column headers. The delimiter must be the same as the `delimiter` parameter and match the data. If not provided, the first row of the CSV file will be used as the headers.
     * @type {string}
     * @memberof DatasetOptionsHostedCsvPut
     */
    header_row?: string;
    /**
     * Defaults to false, which means all files are merged into the dataset. If set to true, every time the dataset is ingested, delete all previous data and replace it with only the data in the latest file. This setting only guarantees that previous data is deleted and older files are not processed; however this process may run more than once. Therefore you cannot use this functionality to ensure "exactly once' delivery of a downstream target.
     * @type {boolean}
     * @memberof DatasetOptionsHostedCsvPut
     */
    replace_all_with_latest_file?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsHostedCsvPut
     */
    type: string;
    /**
     * Subdirectory of uploads where files are stored and retrieved.
     * A directory is dedicated to one or more files which ought to have the same shape and contents. One or more datasets can pull from that folder (and in different ways) and push to one or more event streams. So if you have two different types of orders from two different POS/ecommerce systems, you would put them each in separate folders. Then you would create two different datasets that would both point to an `orders` stream.
     * @type {string}
     * @memberof DatasetOptionsHostedCsvPut
     */
    upload_directory: string;
}
/**
 * HubSpot dataset options
 * @export
 * @interface DatasetOptionsHubspot
 */
export interface DatasetOptionsHubspot {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsHubspot
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsHubspot` type.)
 * 
 * HubSpot dataset options
 * @export
 * @interface DatasetOptionsHubspotMergePatch
 */
export interface DatasetOptionsHubspotMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsHubspotMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsHubspot` type.)
 * 
 * HubSpot dataset options
 * @export
 * @interface DatasetOptionsHubspotPost
 */
export interface DatasetOptionsHubspotPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsHubspotPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsHubspot` type.)
 * 
 * HubSpot dataset options
 * @export
 * @interface DatasetOptionsHubspotPut
 */
export interface DatasetOptionsHubspotPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsHubspotPut
     */
    type: string;
}
/**
 * Iterable dataset options
 * @export
 * @interface DatasetOptionsIterable
 */
export interface DatasetOptionsIterable {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsIterable
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsIterable` type.)
 * 
 * Iterable dataset options
 * @export
 * @interface DatasetOptionsIterableMergePatch
 */
export interface DatasetOptionsIterableMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsIterableMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsIterable` type.)
 * 
 * Iterable dataset options
 * @export
 * @interface DatasetOptionsIterablePost
 */
export interface DatasetOptionsIterablePost {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsIterablePost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsIterable` type.)
 * 
 * Iterable dataset options
 * @export
 * @interface DatasetOptionsIterablePut
 */
export interface DatasetOptionsIterablePut {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsIterablePut
     */
    type: string;
}
/**
 * Klaviyo dataset options
 * @export
 * @interface DatasetOptionsKlaviyo
 */
export interface DatasetOptionsKlaviyo {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsKlaviyo
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsKlaviyo` type.)
 * 
 * Klaviyo dataset options
 * @export
 * @interface DatasetOptionsKlaviyoMergePatch
 */
export interface DatasetOptionsKlaviyoMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsKlaviyoMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsKlaviyo` type.)
 * 
 * Klaviyo dataset options
 * @export
 * @interface DatasetOptionsKlaviyoPost
 */
export interface DatasetOptionsKlaviyoPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsKlaviyoPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsKlaviyo` type.)
 * 
 * Klaviyo dataset options
 * @export
 * @interface DatasetOptionsKlaviyoPut
 */
export interface DatasetOptionsKlaviyoPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsKlaviyoPut
     */
    type: string;
}
/**
 * Merge Dataset dataset options
 * @export
 * @interface DatasetOptionsMerge
 */
export interface DatasetOptionsMerge {
    /**
     * Which datasets should be merged, and what is the join column
     * @type {Array<DatasetOptionsMergeMerge>}
     * @memberof DatasetOptionsMerge
     */
    merge: Array<DatasetOptionsMergeMerge>;
    /**
     * If true, automatically move identity_sets, output_to_streams, and output_to_traits from input source tables to the merge dataset.
     * @type {boolean}
     * @memberof DatasetOptionsMerge
     */
    migrate?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsMerge
     */
    type: string;
}
/**
 * 
 * @export
 * @interface DatasetOptionsMergeMerge
 */
export interface DatasetOptionsMergeMerge {
    /**
     * The id of the dataset to merge
     * @type {string}
     * @memberof DatasetOptionsMergeMerge
     */
    dataset_id: string;
    /**
     * Which column should be used to merge this dataset with the other datasets
     * @type {string}
     * @memberof DatasetOptionsMergeMerge
     */
    join_column: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsMerge` type.)
 * 
 * Merge Dataset dataset options
 * @export
 * @interface DatasetOptionsMergeMergePatch
 */
export interface DatasetOptionsMergeMergePatch {
    /**
     * Which datasets should be merged, and what is the join column
     * @type {Array<DatasetOptionsMergeMerge>}
     * @memberof DatasetOptionsMergeMergePatch
     */
    merge?: Array<DatasetOptionsMergeMerge>;
    /**
     * If true, automatically move identity_sets, output_to_streams, and output_to_traits from input source tables to the merge dataset.
     * @type {boolean}
     * @memberof DatasetOptionsMergeMergePatch
     */
    migrate?: boolean | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsMergeMergePatch
     */
    type: string;
}
/**
 * @type DatasetOptionsMergePatch
 * Dataset connection options
 * @export
 */
export type DatasetOptionsMergePatch = { type: 'aws_aurora_mysql' } & DatasetOptionsAwsAuroraMysqlMergePatch | { type: 'aws_aurora_postgres' } & DatasetOptionsAwsAuroraPostgresMergePatch | { type: 'aws_rds_mysql' } & DatasetOptionsAwsRdsMysqlMergePatch | { type: 'aws_rds_postgres' } & DatasetOptionsAwsRdsPostgresMergePatch | { type: 'aws_rds_sql_server' } & DatasetOptionsAwsRdsSqlServerMergePatch | { type: 'aws_redshift_serverless' } & DatasetOptionsAwsRedshiftServerlessMergePatch | { type: 'azure_sql_server' } & DatasetOptionsAzureSqlServerMergePatch | { type: 'bigquery' } & DatasetOptionsBigQueryMergePatch | { type: 'classic' } & DatasetOptionsClassicMergePatch | { type: 'gcp_cloud_sql_mysql' } & DatasetOptionsGcpCloudSqlMysqlMergePatch | { type: 'gcp_cloud_sql_postgres' } & DatasetOptionsGcpCloudSqlPostgresMergePatch | { type: 'gcp_cloud_sql_sql_server' } & DatasetOptionsGcpCloudSqlSqlServerMergePatch | { type: 'gcp_gcs_csv' } & DatasetOptionsGcpGcsCsvMergePatch | { type: 'hosted_csv' } & DatasetOptionsHostedCsvMergePatch | { type: 'hubspot' } & DatasetOptionsHubspotMergePatch | { type: 'iterable' } & DatasetOptionsIterableMergePatch | { type: 'klaviyo' } & DatasetOptionsKlaviyoMergePatch | { type: 'merge' } & DatasetOptionsMergeMergePatch | { type: 'motherduck' } & DatasetOptionsMotherduckMergePatch | { type: 'mysql' } & DatasetOptionsMysqlMergePatch | { type: 'postgres' } & DatasetOptionsPostgresMergePatch | { type: 'recharge' } & DatasetOptionsRechargeMergePatch | { type: 'redshift' } & DatasetOptionsRedshiftMergePatch | { type: 's3_csv' } & DatasetOptionsS3CsvMergePatch | { type: 'salesforce' } & DatasetOptionsSalesforceMergePatch | { type: 'salesforce_marketing_cloud' } & DatasetOptionsSalesforceMarketingCloudMergePatch | { type: 'sftp' } & DatasetOptionsSftpMergePatch | { type: 'shopify' } & DatasetOptionsShopifyMergePatch | { type: 'snowflake' } & DatasetOptionsSnowflakeMergePatch | { type: 'sql_server' } & DatasetOptionsSqlServerMergePatch | { type: 'stripe' } & DatasetOptionsStripeMergePatch;
/**
 * (Parameters used to POST a new value of the `DatasetOptionsMerge` type.)
 * 
 * Merge Dataset dataset options
 * @export
 * @interface DatasetOptionsMergePost
 */
export interface DatasetOptionsMergePost {
    /**
     * Which datasets should be merged, and what is the join column
     * @type {Array<DatasetOptionsMergeMerge>}
     * @memberof DatasetOptionsMergePost
     */
    merge: Array<DatasetOptionsMergeMerge>;
    /**
     * If true, automatically move identity_sets, output_to_streams, and output_to_traits from input source tables to the merge dataset.
     * @type {boolean}
     * @memberof DatasetOptionsMergePost
     */
    migrate?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsMergePost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsMerge` type.)
 * 
 * Merge Dataset dataset options
 * @export
 * @interface DatasetOptionsMergePut
 */
export interface DatasetOptionsMergePut {
    /**
     * Which datasets should be merged, and what is the join column
     * @type {Array<DatasetOptionsMergeMerge>}
     * @memberof DatasetOptionsMergePut
     */
    merge: Array<DatasetOptionsMergeMerge>;
    /**
     * If true, automatically move identity_sets, output_to_streams, and output_to_traits from input source tables to the merge dataset.
     * @type {boolean}
     * @memberof DatasetOptionsMergePut
     */
    migrate?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsMergePut
     */
    type: string;
}
/**
 * MotherDuck dataset options
 * @export
 * @interface DatasetOptionsMotherduck
 */
export interface DatasetOptionsMotherduck {
    /**
     * MotherDuck schema name. Defaults to 'main' if not provided.
     * @type {string}
     * @memberof DatasetOptionsMotherduck
     */
    schema?: string;
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsMotherduck
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsMotherduck
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsMotherduck` type.)
 * 
 * MotherDuck dataset options
 * @export
 * @interface DatasetOptionsMotherduckMergePatch
 */
export interface DatasetOptionsMotherduckMergePatch {
    /**
     * MotherDuck schema name. Defaults to 'main' if not provided.
     * @type {string}
     * @memberof DatasetOptionsMotherduckMergePatch
     */
    schema?: string | null;
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsMotherduckMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsMotherduckMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsMotherduck` type.)
 * 
 * MotherDuck dataset options
 * @export
 * @interface DatasetOptionsMotherduckPost
 */
export interface DatasetOptionsMotherduckPost {
    /**
     * MotherDuck schema name. Defaults to 'main' if not provided.
     * @type {string}
     * @memberof DatasetOptionsMotherduckPost
     */
    schema?: string;
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsMotherduckPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsMotherduckPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsMotherduck` type.)
 * 
 * MotherDuck dataset options
 * @export
 * @interface DatasetOptionsMotherduckPut
 */
export interface DatasetOptionsMotherduckPut {
    /**
     * MotherDuck schema name. Defaults to 'main' if not provided.
     * @type {string}
     * @memberof DatasetOptionsMotherduckPut
     */
    schema?: string;
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsMotherduckPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsMotherduckPut
     */
    type: string;
}
/**
 * MySQL dataset options
 * @export
 * @interface DatasetOptionsMysql
 */
export interface DatasetOptionsMysql {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsMysql
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsMysql
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsMysql` type.)
 * 
 * MySQL dataset options
 * @export
 * @interface DatasetOptionsMysqlMergePatch
 */
export interface DatasetOptionsMysqlMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsMysqlMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsMysqlMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsMysql` type.)
 * 
 * MySQL dataset options
 * @export
 * @interface DatasetOptionsMysqlPost
 */
export interface DatasetOptionsMysqlPost {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsMysqlPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsMysqlPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsMysql` type.)
 * 
 * MySQL dataset options
 * @export
 * @interface DatasetOptionsMysqlPut
 */
export interface DatasetOptionsMysqlPut {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsMysqlPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsMysqlPut
     */
    type: string;
}
/**
 * @type DatasetOptionsPost
 * Dataset connection options
 * @export
 */
export type DatasetOptionsPost = { type: 'aws_aurora_mysql' } & DatasetOptionsAwsAuroraMysqlPost | { type: 'aws_aurora_postgres' } & DatasetOptionsAwsAuroraPostgresPost | { type: 'aws_rds_mysql' } & DatasetOptionsAwsRdsMysqlPost | { type: 'aws_rds_postgres' } & DatasetOptionsAwsRdsPostgresPost | { type: 'aws_rds_sql_server' } & DatasetOptionsAwsRdsSqlServerPost | { type: 'aws_redshift_serverless' } & DatasetOptionsAwsRedshiftServerlessPost | { type: 'azure_sql_server' } & DatasetOptionsAzureSqlServerPost | { type: 'bigquery' } & DatasetOptionsBigQueryPost | { type: 'classic' } & DatasetOptionsClassicPost | { type: 'gcp_cloud_sql_mysql' } & DatasetOptionsGcpCloudSqlMysqlPost | { type: 'gcp_cloud_sql_postgres' } & DatasetOptionsGcpCloudSqlPostgresPost | { type: 'gcp_cloud_sql_sql_server' } & DatasetOptionsGcpCloudSqlSqlServerPost | { type: 'gcp_gcs_csv' } & DatasetOptionsGcpGcsCsvPost | { type: 'hosted_csv' } & DatasetOptionsHostedCsvPost | { type: 'hubspot' } & DatasetOptionsHubspotPost | { type: 'iterable' } & DatasetOptionsIterablePost | { type: 'klaviyo' } & DatasetOptionsKlaviyoPost | { type: 'merge' } & DatasetOptionsMergePost | { type: 'motherduck' } & DatasetOptionsMotherduckPost | { type: 'mysql' } & DatasetOptionsMysqlPost | { type: 'postgres' } & DatasetOptionsPostgresPost | { type: 'recharge' } & DatasetOptionsRechargePost | { type: 'redshift' } & DatasetOptionsRedshiftPost | { type: 's3_csv' } & DatasetOptionsS3CsvPost | { type: 'salesforce' } & DatasetOptionsSalesforcePost | { type: 'salesforce_marketing_cloud' } & DatasetOptionsSalesforceMarketingCloudPost | { type: 'sftp' } & DatasetOptionsSftpPost | { type: 'shopify' } & DatasetOptionsShopifyPost | { type: 'snowflake' } & DatasetOptionsSnowflakePost | { type: 'sql_server' } & DatasetOptionsSqlServerPost | { type: 'stripe' } & DatasetOptionsStripePost;
/**
 * Postgres dataset options
 * @export
 * @interface DatasetOptionsPostgres
 */
export interface DatasetOptionsPostgres {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsPostgres
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsPostgres
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsPostgres` type.)
 * 
 * Postgres dataset options
 * @export
 * @interface DatasetOptionsPostgresMergePatch
 */
export interface DatasetOptionsPostgresMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsPostgresMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsPostgresMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsPostgres` type.)
 * 
 * Postgres dataset options
 * @export
 * @interface DatasetOptionsPostgresPost
 */
export interface DatasetOptionsPostgresPost {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsPostgresPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsPostgresPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsPostgres` type.)
 * 
 * Postgres dataset options
 * @export
 * @interface DatasetOptionsPostgresPut
 */
export interface DatasetOptionsPostgresPut {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsPostgresPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsPostgresPut
     */
    type: string;
}
/**
 * @type DatasetOptionsPut
 * Dataset connection options
 * @export
 */
export type DatasetOptionsPut = { type: 'aws_aurora_mysql' } & DatasetOptionsAwsAuroraMysqlPut | { type: 'aws_aurora_postgres' } & DatasetOptionsAwsAuroraPostgresPut | { type: 'aws_rds_mysql' } & DatasetOptionsAwsRdsMysqlPut | { type: 'aws_rds_postgres' } & DatasetOptionsAwsRdsPostgresPut | { type: 'aws_rds_sql_server' } & DatasetOptionsAwsRdsSqlServerPut | { type: 'aws_redshift_serverless' } & DatasetOptionsAwsRedshiftServerlessPut | { type: 'azure_sql_server' } & DatasetOptionsAzureSqlServerPut | { type: 'bigquery' } & DatasetOptionsBigQueryPut | { type: 'classic' } & DatasetOptionsClassicPut | { type: 'gcp_cloud_sql_mysql' } & DatasetOptionsGcpCloudSqlMysqlPut | { type: 'gcp_cloud_sql_postgres' } & DatasetOptionsGcpCloudSqlPostgresPut | { type: 'gcp_cloud_sql_sql_server' } & DatasetOptionsGcpCloudSqlSqlServerPut | { type: 'gcp_gcs_csv' } & DatasetOptionsGcpGcsCsvPut | { type: 'hosted_csv' } & DatasetOptionsHostedCsvPut | { type: 'hubspot' } & DatasetOptionsHubspotPut | { type: 'iterable' } & DatasetOptionsIterablePut | { type: 'klaviyo' } & DatasetOptionsKlaviyoPut | { type: 'merge' } & DatasetOptionsMergePut | { type: 'motherduck' } & DatasetOptionsMotherduckPut | { type: 'mysql' } & DatasetOptionsMysqlPut | { type: 'postgres' } & DatasetOptionsPostgresPut | { type: 'recharge' } & DatasetOptionsRechargePut | { type: 'redshift' } & DatasetOptionsRedshiftPut | { type: 's3_csv' } & DatasetOptionsS3CsvPut | { type: 'salesforce' } & DatasetOptionsSalesforcePut | { type: 'salesforce_marketing_cloud' } & DatasetOptionsSalesforceMarketingCloudPut | { type: 'sftp' } & DatasetOptionsSftpPut | { type: 'shopify' } & DatasetOptionsShopifyPut | { type: 'snowflake' } & DatasetOptionsSnowflakePut | { type: 'sql_server' } & DatasetOptionsSqlServerPut | { type: 'stripe' } & DatasetOptionsStripePut;
/**
 * Recharge dataset options
 * @export
 * @interface DatasetOptionsRecharge
 */
export interface DatasetOptionsRecharge {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsRecharge
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsRecharge` type.)
 * 
 * Recharge dataset options
 * @export
 * @interface DatasetOptionsRechargeMergePatch
 */
export interface DatasetOptionsRechargeMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsRechargeMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsRecharge` type.)
 * 
 * Recharge dataset options
 * @export
 * @interface DatasetOptionsRechargePost
 */
export interface DatasetOptionsRechargePost {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsRechargePost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsRecharge` type.)
 * 
 * Recharge dataset options
 * @export
 * @interface DatasetOptionsRechargePut
 */
export interface DatasetOptionsRechargePut {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsRechargePut
     */
    type: string;
}
/**
 * Redshift dataset options
 * @export
 * @interface DatasetOptionsRedshift
 */
export interface DatasetOptionsRedshift {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsRedshift
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsRedshift
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsRedshift` type.)
 * 
 * Redshift dataset options
 * @export
 * @interface DatasetOptionsRedshiftMergePatch
 */
export interface DatasetOptionsRedshiftMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsRedshiftMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsRedshiftMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsRedshift` type.)
 * 
 * Redshift dataset options
 * @export
 * @interface DatasetOptionsRedshiftPost
 */
export interface DatasetOptionsRedshiftPost {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsRedshiftPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsRedshiftPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsRedshift` type.)
 * 
 * Redshift dataset options
 * @export
 * @interface DatasetOptionsRedshiftPut
 */
export interface DatasetOptionsRedshiftPut {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsRedshiftPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsRedshiftPut
     */
    type: string;
}
/**
 * S3 dataset options
 * @export
 * @interface DatasetOptionsS3Csv
 */
export interface DatasetOptionsS3Csv {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof DatasetOptionsS3Csv
     */
    delimiter?: string;
    /**
     * Whether the files you uploaded are encrypted with Faraday's public key.
     * @type {boolean}
     * @memberof DatasetOptionsS3Csv
     */
    encrypted?: boolean;
    /**
     * A row of column headers. The delimiter must be the same as the `delimiter` parameter and match the data. If not provided, the first row of the CSV file will be used as the headers.
     * @type {string}
     * @memberof DatasetOptionsS3Csv
     */
    header_row?: string;
    /**
     * The prefix inside the bucket. May optionally include full filename, file globs (not regexp), and stftime date parsing formatting (which will override blob storage's native timestamps). For example, orders/, orders/file.csv, orders/*.csv, or orders/files-%Y-%m-%d.csv
     * @type {string}
     * @memberof DatasetOptionsS3Csv
     */
    prefix: string;
    /**
     * Defaults to false, which means all files are merged into the dataset. If set to true, every time the dataset is ingested, delete all previous data and replace it with only the data in the latest file. This setting only guarantees that previous data is deleted and older files are not processed; however this process may run more than once. Therefore you cannot use this functionality to ensure "exactly once' delivery of a downstream target.
     * @type {boolean}
     * @memberof DatasetOptionsS3Csv
     */
    replace_all_with_latest_file?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsS3Csv
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsS3Csv` type.)
 * 
 * S3 dataset options
 * @export
 * @interface DatasetOptionsS3CsvMergePatch
 */
export interface DatasetOptionsS3CsvMergePatch {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof DatasetOptionsS3CsvMergePatch
     */
    delimiter?: string | null;
    /**
     * Whether the files you uploaded are encrypted with Faraday's public key.
     * @type {boolean}
     * @memberof DatasetOptionsS3CsvMergePatch
     */
    encrypted?: boolean | null;
    /**
     * A row of column headers. The delimiter must be the same as the `delimiter` parameter and match the data. If not provided, the first row of the CSV file will be used as the headers.
     * @type {string}
     * @memberof DatasetOptionsS3CsvMergePatch
     */
    header_row?: string | null;
    /**
     * The prefix inside the bucket. May optionally include full filename, file globs (not regexp), and stftime date parsing formatting (which will override blob storage's native timestamps). For example, orders/, orders/file.csv, orders/*.csv, or orders/files-%Y-%m-%d.csv
     * @type {string}
     * @memberof DatasetOptionsS3CsvMergePatch
     */
    prefix?: string;
    /**
     * Defaults to false, which means all files are merged into the dataset. If set to true, every time the dataset is ingested, delete all previous data and replace it with only the data in the latest file. This setting only guarantees that previous data is deleted and older files are not processed; however this process may run more than once. Therefore you cannot use this functionality to ensure "exactly once' delivery of a downstream target.
     * @type {boolean}
     * @memberof DatasetOptionsS3CsvMergePatch
     */
    replace_all_with_latest_file?: boolean | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsS3CsvMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsS3Csv` type.)
 * 
 * S3 dataset options
 * @export
 * @interface DatasetOptionsS3CsvPost
 */
export interface DatasetOptionsS3CsvPost {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof DatasetOptionsS3CsvPost
     */
    delimiter?: string;
    /**
     * Whether the files you uploaded are encrypted with Faraday's public key.
     * @type {boolean}
     * @memberof DatasetOptionsS3CsvPost
     */
    encrypted?: boolean;
    /**
     * A row of column headers. The delimiter must be the same as the `delimiter` parameter and match the data. If not provided, the first row of the CSV file will be used as the headers.
     * @type {string}
     * @memberof DatasetOptionsS3CsvPost
     */
    header_row?: string;
    /**
     * The prefix inside the bucket. May optionally include full filename, file globs (not regexp), and stftime date parsing formatting (which will override blob storage's native timestamps). For example, orders/, orders/file.csv, orders/*.csv, or orders/files-%Y-%m-%d.csv
     * @type {string}
     * @memberof DatasetOptionsS3CsvPost
     */
    prefix: string;
    /**
     * Defaults to false, which means all files are merged into the dataset. If set to true, every time the dataset is ingested, delete all previous data and replace it with only the data in the latest file. This setting only guarantees that previous data is deleted and older files are not processed; however this process may run more than once. Therefore you cannot use this functionality to ensure "exactly once' delivery of a downstream target.
     * @type {boolean}
     * @memberof DatasetOptionsS3CsvPost
     */
    replace_all_with_latest_file?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsS3CsvPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsS3Csv` type.)
 * 
 * S3 dataset options
 * @export
 * @interface DatasetOptionsS3CsvPut
 */
export interface DatasetOptionsS3CsvPut {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof DatasetOptionsS3CsvPut
     */
    delimiter?: string;
    /**
     * Whether the files you uploaded are encrypted with Faraday's public key.
     * @type {boolean}
     * @memberof DatasetOptionsS3CsvPut
     */
    encrypted?: boolean;
    /**
     * A row of column headers. The delimiter must be the same as the `delimiter` parameter and match the data. If not provided, the first row of the CSV file will be used as the headers.
     * @type {string}
     * @memberof DatasetOptionsS3CsvPut
     */
    header_row?: string;
    /**
     * The prefix inside the bucket. May optionally include full filename, file globs (not regexp), and stftime date parsing formatting (which will override blob storage's native timestamps). For example, orders/, orders/file.csv, orders/*.csv, or orders/files-%Y-%m-%d.csv
     * @type {string}
     * @memberof DatasetOptionsS3CsvPut
     */
    prefix: string;
    /**
     * Defaults to false, which means all files are merged into the dataset. If set to true, every time the dataset is ingested, delete all previous data and replace it with only the data in the latest file. This setting only guarantees that previous data is deleted and older files are not processed; however this process may run more than once. Therefore you cannot use this functionality to ensure "exactly once' delivery of a downstream target.
     * @type {boolean}
     * @memberof DatasetOptionsS3CsvPut
     */
    replace_all_with_latest_file?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsS3CsvPut
     */
    type: string;
}
/**
 * Salesforce dataset options
 * @export
 * @interface DatasetOptionsSalesforce
 */
export interface DatasetOptionsSalesforce {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSalesforce
     */
    type: string;
}
/**
 * Salesforce Marketing Cloud dataset options
 * @export
 * @interface DatasetOptionsSalesforceMarketingCloud
 */
export interface DatasetOptionsSalesforceMarketingCloud {
    /**
     * The auto-generated ID unique to your Salesforce Marketing Cloud account. Refer to <a href="https://www.stitchdata.com/docs/integrations/saas/salesforce-marketing-cloud#retrieve-tenant-subdomain">the Stitch docs</a>.
     * @type {string}
     * @memberof DatasetOptionsSalesforceMarketingCloud
     */
    tenant_subdomain: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSalesforceMarketingCloud
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsSalesforceMarketingCloud` type.)
 * 
 * Salesforce Marketing Cloud dataset options
 * @export
 * @interface DatasetOptionsSalesforceMarketingCloudMergePatch
 */
export interface DatasetOptionsSalesforceMarketingCloudMergePatch {
    /**
     * The auto-generated ID unique to your Salesforce Marketing Cloud account. Refer to <a href="https://www.stitchdata.com/docs/integrations/saas/salesforce-marketing-cloud#retrieve-tenant-subdomain">the Stitch docs</a>.
     * @type {string}
     * @memberof DatasetOptionsSalesforceMarketingCloudMergePatch
     */
    tenant_subdomain?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSalesforceMarketingCloudMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsSalesforceMarketingCloud` type.)
 * 
 * Salesforce Marketing Cloud dataset options
 * @export
 * @interface DatasetOptionsSalesforceMarketingCloudPost
 */
export interface DatasetOptionsSalesforceMarketingCloudPost {
    /**
     * The auto-generated ID unique to your Salesforce Marketing Cloud account. Refer to <a href="https://www.stitchdata.com/docs/integrations/saas/salesforce-marketing-cloud#retrieve-tenant-subdomain">the Stitch docs</a>.
     * @type {string}
     * @memberof DatasetOptionsSalesforceMarketingCloudPost
     */
    tenant_subdomain: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSalesforceMarketingCloudPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsSalesforceMarketingCloud` type.)
 * 
 * Salesforce Marketing Cloud dataset options
 * @export
 * @interface DatasetOptionsSalesforceMarketingCloudPut
 */
export interface DatasetOptionsSalesforceMarketingCloudPut {
    /**
     * The auto-generated ID unique to your Salesforce Marketing Cloud account. Refer to <a href="https://www.stitchdata.com/docs/integrations/saas/salesforce-marketing-cloud#retrieve-tenant-subdomain">the Stitch docs</a>.
     * @type {string}
     * @memberof DatasetOptionsSalesforceMarketingCloudPut
     */
    tenant_subdomain: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSalesforceMarketingCloudPut
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsSalesforce` type.)
 * 
 * Salesforce dataset options
 * @export
 * @interface DatasetOptionsSalesforceMergePatch
 */
export interface DatasetOptionsSalesforceMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSalesforceMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsSalesforce` type.)
 * 
 * Salesforce dataset options
 * @export
 * @interface DatasetOptionsSalesforcePost
 */
export interface DatasetOptionsSalesforcePost {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSalesforcePost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsSalesforce` type.)
 * 
 * Salesforce dataset options
 * @export
 * @interface DatasetOptionsSalesforcePut
 */
export interface DatasetOptionsSalesforcePut {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSalesforcePut
     */
    type: string;
}
/**
 * SFTP dataset options
 * @export
 * @interface DatasetOptionsSftp
 */
export interface DatasetOptionsSftp {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof DatasetOptionsSftp
     */
    delimiter?: string;
    /**
     * Whether the files you uploaded are encrypted with Faraday's public key.
     * @type {boolean}
     * @memberof DatasetOptionsSftp
     */
    encrypted?: boolean;
    /**
     * A row of column headers. The delimiter must be the same as the `delimiter` parameter and match the data. If not provided, the first row of the CSV file will be used as the headers.
     * @type {string}
     * @memberof DatasetOptionsSftp
     */
    header_row?: string;
    /**
     * The path to the data inside the server. May optionally include full filename, file globs (not regexp), and stftime date parsing formatting. For example, orders/, orders/file.csv, orders/*.csv, or orders/files-%Y-%m-%d.csv
     * @type {string}
     * @memberof DatasetOptionsSftp
     */
    prefix: string;
    /**
     * Defaults to false, which means all files are merged into the dataset. If set to true, every time the dataset is ingested, delete all previous data and replace it with only the data in the latest file. This setting only guarantees that previous data is deleted and older files are not processed; however this process may run more than once. Therefore you cannot use this functionality to ensure "exactly once' delivery of a downstream target.
     * @type {boolean}
     * @memberof DatasetOptionsSftp
     */
    replace_all_with_latest_file?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSftp
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsSftp` type.)
 * 
 * SFTP dataset options
 * @export
 * @interface DatasetOptionsSftpMergePatch
 */
export interface DatasetOptionsSftpMergePatch {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof DatasetOptionsSftpMergePatch
     */
    delimiter?: string | null;
    /**
     * Whether the files you uploaded are encrypted with Faraday's public key.
     * @type {boolean}
     * @memberof DatasetOptionsSftpMergePatch
     */
    encrypted?: boolean | null;
    /**
     * A row of column headers. The delimiter must be the same as the `delimiter` parameter and match the data. If not provided, the first row of the CSV file will be used as the headers.
     * @type {string}
     * @memberof DatasetOptionsSftpMergePatch
     */
    header_row?: string | null;
    /**
     * The path to the data inside the server. May optionally include full filename, file globs (not regexp), and stftime date parsing formatting. For example, orders/, orders/file.csv, orders/*.csv, or orders/files-%Y-%m-%d.csv
     * @type {string}
     * @memberof DatasetOptionsSftpMergePatch
     */
    prefix?: string;
    /**
     * Defaults to false, which means all files are merged into the dataset. If set to true, every time the dataset is ingested, delete all previous data and replace it with only the data in the latest file. This setting only guarantees that previous data is deleted and older files are not processed; however this process may run more than once. Therefore you cannot use this functionality to ensure "exactly once' delivery of a downstream target.
     * @type {boolean}
     * @memberof DatasetOptionsSftpMergePatch
     */
    replace_all_with_latest_file?: boolean | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSftpMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsSftp` type.)
 * 
 * SFTP dataset options
 * @export
 * @interface DatasetOptionsSftpPost
 */
export interface DatasetOptionsSftpPost {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof DatasetOptionsSftpPost
     */
    delimiter?: string;
    /**
     * Whether the files you uploaded are encrypted with Faraday's public key.
     * @type {boolean}
     * @memberof DatasetOptionsSftpPost
     */
    encrypted?: boolean;
    /**
     * A row of column headers. The delimiter must be the same as the `delimiter` parameter and match the data. If not provided, the first row of the CSV file will be used as the headers.
     * @type {string}
     * @memberof DatasetOptionsSftpPost
     */
    header_row?: string;
    /**
     * The path to the data inside the server. May optionally include full filename, file globs (not regexp), and stftime date parsing formatting. For example, orders/, orders/file.csv, orders/*.csv, or orders/files-%Y-%m-%d.csv
     * @type {string}
     * @memberof DatasetOptionsSftpPost
     */
    prefix: string;
    /**
     * Defaults to false, which means all files are merged into the dataset. If set to true, every time the dataset is ingested, delete all previous data and replace it with only the data in the latest file. This setting only guarantees that previous data is deleted and older files are not processed; however this process may run more than once. Therefore you cannot use this functionality to ensure "exactly once' delivery of a downstream target.
     * @type {boolean}
     * @memberof DatasetOptionsSftpPost
     */
    replace_all_with_latest_file?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSftpPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsSftp` type.)
 * 
 * SFTP dataset options
 * @export
 * @interface DatasetOptionsSftpPut
 */
export interface DatasetOptionsSftpPut {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof DatasetOptionsSftpPut
     */
    delimiter?: string;
    /**
     * Whether the files you uploaded are encrypted with Faraday's public key.
     * @type {boolean}
     * @memberof DatasetOptionsSftpPut
     */
    encrypted?: boolean;
    /**
     * A row of column headers. The delimiter must be the same as the `delimiter` parameter and match the data. If not provided, the first row of the CSV file will be used as the headers.
     * @type {string}
     * @memberof DatasetOptionsSftpPut
     */
    header_row?: string;
    /**
     * The path to the data inside the server. May optionally include full filename, file globs (not regexp), and stftime date parsing formatting. For example, orders/, orders/file.csv, orders/*.csv, or orders/files-%Y-%m-%d.csv
     * @type {string}
     * @memberof DatasetOptionsSftpPut
     */
    prefix: string;
    /**
     * Defaults to false, which means all files are merged into the dataset. If set to true, every time the dataset is ingested, delete all previous data and replace it with only the data in the latest file. This setting only guarantees that previous data is deleted and older files are not processed; however this process may run more than once. Therefore you cannot use this functionality to ensure "exactly once' delivery of a downstream target.
     * @type {boolean}
     * @memberof DatasetOptionsSftpPut
     */
    replace_all_with_latest_file?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSftpPut
     */
    type: string;
}
/**
 * Shopify dataset options
 * @export
 * @interface DatasetOptionsShopify
 */
export interface DatasetOptionsShopify {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsShopify
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsShopify` type.)
 * 
 * Shopify dataset options
 * @export
 * @interface DatasetOptionsShopifyMergePatch
 */
export interface DatasetOptionsShopifyMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsShopifyMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsShopify` type.)
 * 
 * Shopify dataset options
 * @export
 * @interface DatasetOptionsShopifyPost
 */
export interface DatasetOptionsShopifyPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsShopifyPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsShopify` type.)
 * 
 * Shopify dataset options
 * @export
 * @interface DatasetOptionsShopifyPut
 */
export interface DatasetOptionsShopifyPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsShopifyPut
     */
    type: string;
}
/**
 * Snowflake dataset options
 * @export
 * @interface DatasetOptionsSnowflake
 */
export interface DatasetOptionsSnowflake {
    /**
     * If the table was created with case sensitive columns, this setting may be required.
     * @type {boolean}
     * @memberof DatasetOptionsSnowflake
     */
    case_sensitive_columns?: boolean;
    /**
     * Snowflake schema name. If not provided, it may be provided at the connection level, or omitted entirely.
     * @type {string}
     * @memberof DatasetOptionsSnowflake
     */
    schema?: string;
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsSnowflake
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSnowflake
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsSnowflake` type.)
 * 
 * Snowflake dataset options
 * @export
 * @interface DatasetOptionsSnowflakeMergePatch
 */
export interface DatasetOptionsSnowflakeMergePatch {
    /**
     * If the table was created with case sensitive columns, this setting may be required.
     * @type {boolean}
     * @memberof DatasetOptionsSnowflakeMergePatch
     */
    case_sensitive_columns?: boolean | null;
    /**
     * Snowflake schema name. If not provided, it may be provided at the connection level, or omitted entirely.
     * @type {string}
     * @memberof DatasetOptionsSnowflakeMergePatch
     */
    schema?: string | null;
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsSnowflakeMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSnowflakeMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsSnowflake` type.)
 * 
 * Snowflake dataset options
 * @export
 * @interface DatasetOptionsSnowflakePost
 */
export interface DatasetOptionsSnowflakePost {
    /**
     * If the table was created with case sensitive columns, this setting may be required.
     * @type {boolean}
     * @memberof DatasetOptionsSnowflakePost
     */
    case_sensitive_columns?: boolean;
    /**
     * Snowflake schema name. If not provided, it may be provided at the connection level, or omitted entirely.
     * @type {string}
     * @memberof DatasetOptionsSnowflakePost
     */
    schema?: string;
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsSnowflakePost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSnowflakePost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsSnowflake` type.)
 * 
 * Snowflake dataset options
 * @export
 * @interface DatasetOptionsSnowflakePut
 */
export interface DatasetOptionsSnowflakePut {
    /**
     * If the table was created with case sensitive columns, this setting may be required.
     * @type {boolean}
     * @memberof DatasetOptionsSnowflakePut
     */
    case_sensitive_columns?: boolean;
    /**
     * Snowflake schema name. If not provided, it may be provided at the connection level, or omitted entirely.
     * @type {string}
     * @memberof DatasetOptionsSnowflakePut
     */
    schema?: string;
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsSnowflakePut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSnowflakePut
     */
    type: string;
}
/**
 * SQL Server dataset options
 * @export
 * @interface DatasetOptionsSqlServer
 */
export interface DatasetOptionsSqlServer {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsSqlServer
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSqlServer
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsSqlServer` type.)
 * 
 * SQL Server dataset options
 * @export
 * @interface DatasetOptionsSqlServerMergePatch
 */
export interface DatasetOptionsSqlServerMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsSqlServerMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSqlServerMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsSqlServer` type.)
 * 
 * SQL Server dataset options
 * @export
 * @interface DatasetOptionsSqlServerPost
 */
export interface DatasetOptionsSqlServerPost {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsSqlServerPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSqlServerPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsSqlServer` type.)
 * 
 * SQL Server dataset options
 * @export
 * @interface DatasetOptionsSqlServerPut
 */
export interface DatasetOptionsSqlServerPut {
    /**
     * Table name
     * @type {string}
     * @memberof DatasetOptionsSqlServerPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsSqlServerPut
     */
    type: string;
}
/**
 * Stripe dataset options
 * @export
 * @interface DatasetOptionsStripe
 */
export interface DatasetOptionsStripe {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsStripe
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `DatasetOptionsStripe` type.)
 * 
 * Stripe dataset options
 * @export
 * @interface DatasetOptionsStripeMergePatch
 */
export interface DatasetOptionsStripeMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsStripeMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `DatasetOptionsStripe` type.)
 * 
 * Stripe dataset options
 * @export
 * @interface DatasetOptionsStripePost
 */
export interface DatasetOptionsStripePost {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsStripePost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `DatasetOptionsStripe` type.)
 * 
 * Stripe dataset options
 * @export
 * @interface DatasetOptionsStripePut
 */
export interface DatasetOptionsStripePut {
    /**
     * The type of connection
     * @type {string}
     * @memberof DatasetOptionsStripePut
     */
    type: string;
}
/**
 * If specified, all columns that are not excluded will be output as traits.
 * 
 * `output_to_streams` may not be not be specified when setting this parameter.
 * @export
 * @interface DatasetOutputAllColumnsAsTraits
 */
export interface DatasetOutputAllColumnsAsTraits {
    /**
     * A list of column names to exclude from bulk trait generation.
     * @type {Array<string>}
     * @memberof DatasetOutputAllColumnsAsTraits
     */
    exclude: Array<string>;
    /**
     * A list of column names that should only be used to generate traits.\
     * 
     * If unspecified, all columns will be considered and `output_to_traits`
     * must be unset. If specified, only these columns will be considered and
     * `output_to_traits` may be set in conjunction. In this case, any detected 
     * traits may not already be specified by `output_to_traits`; collisions will 
     * result in error.
     * @type {Array<string>}
     * @memberof DatasetOutputAllColumnsAsTraits
     */
    include?: Array<string>;
}
/**
 * (Parameters used to POST a new value of the `Dataset` type.)
 * 
 * Tabular data describing orders, customers, leads, etc.
 * @export
 * @interface DatasetPost
 */
export interface DatasetPost {
    /**
     * If this is a "retrieve" dataset, the UUID of a connection - see <a href="https://faraday.ai/developers/reference/createconnection">/connections</a> for more detail. 
     * 
     * Only a subset of connection types can be configured for dataset ingestion - see the list available in `options`.
     * 
     * Note that if a `connection_id` is specified, `options` must also be specified.
     * @type {string}
     * @memberof DatasetPost
     */
    connection_id?: string;
    /**
     * Which identity providers to use for matching, in order of priority.
     * By default, all datasets will match on 'fig' data.
     * The dataset's match-rate can be boosted by adding other identity providers.
     * Please contact support to get access to this feature.
     * @type {Array<DatasetIdentityProviders>}
     * @memberof DatasetPost
     */
    identity_providers?: Array<DatasetIdentityProviders>;
    /**
     * 
     * @type {IdentitySetsPost}
     * @memberof DatasetPost
     */
    identity_sets: IdentitySetsPost;
    /**
     * A column specifying a date associated with a record.
     * 
     * Ideally `incremental_column` SHOULD be set to make data loading more efficient.
     * 
     * Ideally ALSO set `upsert_columns` to ensure that data is not duplicated in the dataset.
     * 
     * After each
     * ingestion, the most recent value from `incremental_column` on any
     * record will be recorded, and during future ingestions, any
     * records with a value older than `incremental_column` will be ignored.
     * @type {string}
     * @memberof DatasetPost
     */
    incremental_column?: string;
    /**
     * An identifying name for this dataset.
     * @type {string}
     * @memberof DatasetPost
     */
    name: string;
    /**
     * 
     * @type {DatasetOptionsPost}
     * @memberof DatasetPost
     */
    options: DatasetOptionsPost;
    /**
     * 
     * @type {OutputToStreamsPost}
     * @memberof DatasetPost
     */
    output_to_streams?: OutputToStreamsPost;
    /**
     * An array-based approach to transforming datasets into streams. This structure allows multiple columns from the same dataset to map to the same stream, each with their own property configurations.
     * 
     * Unlike `output_to_streams`, this does not require nested structures and makes it straightforward to handle cases where a vendor provides multiple columns for the same attribute type (e.g., multiple age fields with different quality or derivation levels).
     * 
     * Each array element specifies a stream_name and properties configuration for stream properties including data column, datetime, authority, precision, derivations, and quality.
     * 
     * Streams named here will be automatically generated if they do not exist.
     * @type {Array<OutputToStreamArrayItem>}
     * @memberof DatasetPost
     */
    output_to_streams_array?: Array<OutputToStreamArrayItem>;
    /**
     * 
     * @type {OutputToTraitsPost}
     * @memberof DatasetPost
     */
    output_to_traits?: OutputToTraitsPost;
    /**
     * A dataset in preview mode will only detect columns and produce a data preview, but not ingest the data.
     * 
     * Defaults to undefined, which is equivalent to false.
     * @type {boolean}
     * @memberof DatasetPost
     */
    preview?: boolean;
    /**
     * Currently supported:
     *   - 'suppress' - data can be used for modeling but will be excluded from pipelines and deployments (do not contact)
     *   - 'delete' - data can not be used for modeling and will be excluded from pipelines and deployments (delete and do not contact)
     *   Note: While these options are labeled differently, they currently result in the same behavior (including deletion). This may change in the future.
     * @type {string}
     * @memberof DatasetPost
     */
    privacy?: DatasetPostPrivacyEnum;
    /**
     * **Deprecated:** use reference_key_columns instead
     * The name of the column that references an ID from an external system.
     * 
     * Setting this enables export of data via <a href="/reference/createtarget">`/targets`</a> that is keyed on this field.
     * @type {string}
     * @memberof DatasetPost
     */
    reference_key_column?: string;
    /**
     * The names of columns that reference IDs from an external system.
     * 
     * Setting this enables export of data via <a href="/reference/createtarget">`/targets`</a> that is keyed on this field.
     * @type {Array<string>}
     * @memberof DatasetPost
     */
    reference_key_columns?: Array<string>;
    /**
     * Also known as the "primary key" of the dataset.  A column or set of columns that uniquely identify an input row.
     * 
     * Ideally `upsert_columns` SHOULD be set so that data is not duplicated in the dataset.
     * 
     * Ideally ALSO set `incremental_column` to make data loading more efficient.
     * 
     * If multiple rows are ingested with identical values in the columns
     * specified by `upsert_columns`, the newest will be used.
     * 
     * If neither `upsert_columns` nor `incremental_column` are
     * specified, each unique row will be ingested once.
     * @type {Array<string>}
     * @memberof DatasetPost
     */
    upsert_columns?: Array<string>;
}

/**
* @export
* @enum {string}
*/
export enum DatasetPostPrivacyEnum {
    Suppress = 'suppress',
    Delete = 'delete'
}
/**
 * (Parameters used to PUT a value of the `Dataset` type.)
 * 
 * Tabular data describing orders, customers, leads, etc.
 * @export
 * @interface DatasetPut
 */
export interface DatasetPut {
    /**
     * Which identity providers to use for matching, in order of priority.
     * By default, all datasets will match on 'fig' data.
     * The dataset's match-rate can be boosted by adding other identity providers.
     * Please contact support to get access to this feature.
     * @type {Array<DatasetIdentityProviders>}
     * @memberof DatasetPut
     */
    identity_providers?: Array<DatasetIdentityProviders>;
    /**
     * 
     * @type {IdentitySetsPut}
     * @memberof DatasetPut
     */
    identity_sets: IdentitySetsPut;
    /**
     * A column specifying a date associated with a record.
     * 
     * Ideally `incremental_column` SHOULD be set to make data loading more efficient.
     * 
     * Ideally ALSO set `upsert_columns` to ensure that data is not duplicated in the dataset.
     * 
     * After each
     * ingestion, the most recent value from `incremental_column` on any
     * record will be recorded, and during future ingestions, any
     * records with a value older than `incremental_column` will be ignored.
     * @type {string}
     * @memberof DatasetPut
     */
    incremental_column?: string;
    /**
     * An identifying name for this dataset.
     * @type {string}
     * @memberof DatasetPut
     */
    name: string;
    /**
     * 
     * @type {DatasetOptionsPut}
     * @memberof DatasetPut
     */
    options: DatasetOptionsPut;
    /**
     * 
     * @type {DatasetOutputAllColumnsAsTraits}
     * @memberof DatasetPut
     */
    output_all_columns_as_traits?: DatasetOutputAllColumnsAsTraits;
    /**
     * 
     * @type {OutputToStreamsPut}
     * @memberof DatasetPut
     */
    output_to_streams?: OutputToStreamsPut;
    /**
     * An array-based approach to transforming datasets into streams. This structure allows multiple columns from the same dataset to map to the same stream, each with their own property configurations.
     * 
     * Unlike `output_to_streams`, this does not require nested structures and makes it straightforward to handle cases where a vendor provides multiple columns for the same attribute type (e.g., multiple age fields with different quality or derivation levels).
     * 
     * Each array element specifies a stream_name and properties configuration for stream properties including data column, datetime, authority, precision, derivations, and quality.
     * 
     * Streams named here will be automatically generated if they do not exist.
     * @type {Array<OutputToStreamArrayItem>}
     * @memberof DatasetPut
     */
    output_to_streams_array?: Array<OutputToStreamArrayItem>;
    /**
     * 
     * @type {OutputToTraitsPut}
     * @memberof DatasetPut
     */
    output_to_traits?: OutputToTraitsPut;
    /**
     * A dataset in preview mode will only detect columns and produce a data preview, but not ingest the data.
     * 
     * Defaults to undefined, which is equivalent to false.
     * @type {boolean}
     * @memberof DatasetPut
     */
    preview?: boolean;
    /**
     * Currently supported:
     *   - 'suppress' - data can be used for modeling but will be excluded from pipelines and deployments (do not contact)
     *   - 'delete' - data can not be used for modeling and will be excluded from pipelines and deployments (delete and do not contact)
     *   Note: While these options are labeled differently, they currently result in the same behavior (including deletion). This may change in the future.
     * @type {string}
     * @memberof DatasetPut
     */
    privacy?: DatasetPutPrivacyEnum;
    /**
     * **Deprecated:** use reference_key_columns instead
     * The name of the column that references an ID from an external system.
     * 
     * Setting this enables export of data via <a href="/reference/createtarget">`/targets`</a> that is keyed on this field.
     * @type {string}
     * @memberof DatasetPut
     */
    reference_key_column?: string;
    /**
     * The names of columns that reference IDs from an external system.
     * 
     * Setting this enables export of data via <a href="/reference/createtarget">`/targets`</a> that is keyed on this field.
     * @type {Array<string>}
     * @memberof DatasetPut
     */
    reference_key_columns?: Array<string>;
    /**
     * Also known as the "primary key" of the dataset.  A column or set of columns that uniquely identify an input row.
     * 
     * Ideally `upsert_columns` SHOULD be set so that data is not duplicated in the dataset.
     * 
     * Ideally ALSO set `incremental_column` to make data loading more efficient.
     * 
     * If multiple rows are ingested with identical values in the columns
     * specified by `upsert_columns`, the newest will be used.
     * 
     * If neither `upsert_columns` nor `incremental_column` are
     * specified, each unique row will be ingested once.
     * @type {Array<string>}
     * @memberof DatasetPut
     */
    upsert_columns?: Array<string>;
}

/**
* @export
* @enum {string}
*/
export enum DatasetPutPrivacyEnum {
    Suppress = 'suppress',
    Delete = 'delete'
}
/**
 * 
 * @export
 * @interface DatasetStream
 */
export interface DatasetStream {
    /**
     * A classic dataset stream, created internally at Faraday.
     * @type {boolean}
     * @memberof DatasetStream
     */
    classic?: boolean;
    /**
     * List of conditions to use to filter events.
     * @type {Array<DatasetStreamCondition>}
     * @memberof DatasetStream
     */
    conditions?: Array<DatasetStreamCondition>;
    /**
     * 
     * @type {DataMap}
     * @memberof DatasetStream
     */
    data_map: DataMap;
    /**
     * 
     * @type {string}
     * @memberof DatasetStream
     */
    stream_id: string;
}
/**
 * 
 * @export
 * @interface DatasetStreamCondition
 */
export interface DatasetStreamCondition {
    /**
     * Equal to
     * @type {string}
     * @memberof DatasetStreamCondition
     */
    _eq?: string;
    /**
     * Greater than
     * @type {number}
     * @memberof DatasetStreamCondition
     */
    _gt?: number;
    /**
     * Greater than or equal to
     * @type {number}
     * @memberof DatasetStreamCondition
     */
    _gte?: number;
    /**
     * Value is one of
     * @type {Array<string>}
     * @memberof DatasetStreamCondition
     */
    _in?: Array<string>;
    /**
     * Less than
     * @type {number}
     * @memberof DatasetStreamCondition
     */
    _lt?: number;
    /**
     * Less than or equal to
     * @type {number}
     * @memberof DatasetStreamCondition
     */
    _lte?: number;
    /**
     * Value contains a match to the regex (re2) expression provided. For an exact regex match, use the ^ and $ characters as specified by the (re2 documentation)[https://github.com/google/re2/wiki/Syntax].
     * @type {string}
     * @memberof DatasetStreamCondition
     */
    _matches?: string;
    /**
     * Not equal to
     * @type {string}
     * @memberof DatasetStreamCondition
     */
    _neq?: string;
    /**
     * Value is not one of
     * @type {Array<string>}
     * @memberof DatasetStreamCondition
     */
    _nin?: Array<string>;
    /**
     * Value is not null
     * @type {boolean}
     * @memberof DatasetStreamCondition
     */
    _nnull?: boolean;
    /**
     * Value is null (nulls are otherwise excluded)
     * @type {boolean}
     * @memberof DatasetStreamCondition
     */
    _null?: boolean;
    /**
     * The column in the dataset that should be filtered on
     * @type {string}
     * @memberof DatasetStreamCondition
     */
    column_name: string;
    /**
     * Optional conditions are unioned together, when combined they define events that meet either condition. At least one optional condition must be satisfied.
     * @type {boolean}
     * @memberof DatasetStreamCondition
     */
    optional?: boolean;
}
/**
 * 
 * @export
 * @interface DatasetStreamMergePatch
 */
export interface DatasetStreamMergePatch {
    /**
     * List of conditions to use to filter events.
     * @type {Array<DatasetStreamCondition>}
     * @memberof DatasetStreamMergePatch
     */
    conditions?: Array<DatasetStreamCondition> | null;
    /**
     * 
     * @type {DataMapMergePatch}
     * @memberof DatasetStreamMergePatch
     */
    data_map?: DataMapMergePatch;
}
/**
 * 
 * @export
 * @interface DatasetStreamPost
 */
export interface DatasetStreamPost {
    /**
     * List of conditions to use to filter events.
     * @type {Array<DatasetStreamCondition>}
     * @memberof DatasetStreamPost
     */
    conditions?: Array<DatasetStreamCondition>;
    /**
     * 
     * @type {DataMapPost}
     * @memberof DatasetStreamPost
     */
    data_map: DataMapPost;
}
/**
 * 
 * @export
 * @interface DatasetStreamPut
 */
export interface DatasetStreamPut {
    /**
     * List of conditions to use to filter events.
     * @type {Array<DatasetStreamCondition>}
     * @memberof DatasetStreamPut
     */
    conditions?: Array<DatasetStreamCondition>;
    /**
     * 
     * @type {DataMapPut}
     * @memberof DatasetStreamPut
     */
    data_map: DataMapPut;
}
/**
 * Dataset update history item
 * @export
 * @interface DatasetUpdateHistory
 */
export interface DatasetUpdateHistory {
    /**
     * Time of the update
     * @type {string}
     * @memberof DatasetUpdateHistory
     */
    datetime: string;
    /**
     * How many rows were added by the update
     * @type {number}
     * @memberof DatasetUpdateHistory
     */
    rows_added: number;
}
/**
 * Configuration for decode transformations.
 * @export
 * @interface DecodeConfig
 */
export interface DecodeConfig {
    /**
     * 
     * @type {PrimitiveDataType}
     * @memberof DecodeConfig
     */
    cast?: PrimitiveDataType;
    /**
     * A mapping of source values to target values
     * @type {object}
     * @memberof DecodeConfig
     */
    map?: object;
    /**
     * SQL expression for transformation
     * @type {string}
     * @memberof DecodeConfig
     */
    sql?: string;
}
/**
 * A Faraday error code.
 * 
 * Some possible values include:
 * 
 * **Generic HTTP Errors**
 * 
 * - BAD_REQUEST: The request could not be validated.
 * - FORBIDDEN: You do not have permission to access the specified resource.
 * - MAX_RESOURCES_REACHED: You have created too many of this resource type on your account. You must delete some before making more.
 * - INTERNAL_SERVER_ERROR: An internal error of an unknown type occurred.
 * - INVALID_AUTHORIZATION: The Authorization header could not be parsed.
 * - NOT_FOUND: The specified resource could not be found.
 * 
 * **Authentication**
 * 
 * These are specific to HTTP 401 responses.
 * 
 * - MALFORMED_API_KEY: Could not parse the supplied API key.
 * - MISSING_API_KEY: An API key was not supplied.
 * - EXPIRED_API_KEY: The supplied API key has expired.
 * 
 * **Application Errors**
 * 
 * - VALIDATION_FAILED: A parameter or request could not be validated.
 * - CONFLICT: The request was formatted correctly, but conflicted with an existing resource
 * @export
 * @enum {string}
 */
export enum ErrorCode {
    BadRequest = 'BAD_REQUEST',
    Forbidden = 'FORBIDDEN',
    MaxResourcesReached = 'MAX_RESOURCES_REACHED',
    InternalServerError = 'INTERNAL_SERVER_ERROR',
    InvalidAuthorization = 'INVALID_AUTHORIZATION',
    NotFound = 'NOT_FOUND',
    MalformedApiKey = 'MALFORMED_API_KEY',
    MissingApiKey = 'MISSING_API_KEY',
    ExpiredApiKey = 'EXPIRED_API_KEY',
    ValidationFailed = 'VALIDATION_FAILED',
    Conflict = 'CONFLICT'
}
/**
 * A feature store compiles and manages a collection of attributes. Feature stores can be versioned and published to other accounts.
 * @export
 * @interface FeatureStore
 */
export interface FeatureStore {
    /**
     * If not null, this resource will no longer receive updates, but will still be visable.
     * @type {string}
     * @memberof FeatureStore
     */
    archived_at?: string;
    /**
     * When this resource was created.
     * @type {string}
     * @memberof FeatureStore
     */
    created_at: string;
    /**
     * 
     * @type {AttributeSelectorsByPurpose}
     * @memberof FeatureStore
     */
    default_selector_by_purpose: AttributeSelectorsByPurpose;
    /**
     * A description of the feature store and its contents.
     * @type {string}
     * @memberof FeatureStore
     */
    description: string;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof FeatureStore
     */
    id: string;
    /**
     * The last time this resource's input was read.
     * @type {string}
     * @memberof FeatureStore
     */
    last_read_input_at?: string;
    /**
     * The last time this resource's configuration was updated. If this is more recent than last_updated_output_at, the resource will be rebuilt.
     * @type {string}
     * @memberof FeatureStore
     */
    last_updated_config_at?: string;
    /**
     * The last time this resource successfully built.
     * @type {string}
     * @memberof FeatureStore
     */
    last_updated_output_at?: string;
    /**
     * A human-readable name for the feature store.
     * @type {string}
     * @memberof FeatureStore
     */
    literate: string;
    /**
     * The slug name of the feature store. Must start with a letter and contain only lowercase letters, numbers, and underscores.
     * @type {string}
     * @memberof FeatureStore
     */
    name: string;
    /**
     * The type of this resource.
     * @type {string}
     * @memberof FeatureStore
     */
    resource_type: string;
    /**
     * 
     * @type {ResourceStatus}
     * @memberof FeatureStore
     */
    status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {string}
     * @memberof FeatureStore
     */
    status_changed_at?: string;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof FeatureStore
     */
    status_error?: string;
    /**
     * When this resource was last updated.
     * @type {string}
     * @memberof FeatureStore
     */
    updated_at: string;
    /**
     * The version number of the feature store.
     * @type {number}
     * @memberof FeatureStore
     */
    version: number;
}
/**
 * (Parameters used to PATCH the `FeatureStore` type.)
 * 
 * A feature store compiles and manages a collection of attributes. Feature stores can be versioned and published to other accounts.
 * @export
 * @interface FeatureStoreMergePatch
 */
export interface FeatureStoreMergePatch {
    /**
     * 
     * @type {AttributeSelectorsByPurpose}
     * @memberof FeatureStoreMergePatch
     */
    default_selector_by_purpose?: AttributeSelectorsByPurpose;
    /**
     * A description of the feature store and its contents.
     * @type {string}
     * @memberof FeatureStoreMergePatch
     */
    description?: string;
    /**
     * A human-readable name for the feature store.
     * @type {string}
     * @memberof FeatureStoreMergePatch
     */
    literate?: string;
    /**
     * The slug name of the feature store. Must start with a letter and contain only lowercase letters, numbers, and underscores.
     * @type {string}
     * @memberof FeatureStoreMergePatch
     */
    name?: string;
    /**
     * The version number of the feature store.
     * @type {number}
     * @memberof FeatureStoreMergePatch
     */
    version?: number;
}
/**
 * (Parameters used to POST a new value of the `FeatureStore` type.)
 * 
 * A feature store compiles and manages a collection of attributes. Feature stores can be versioned and published to other accounts.
 * @export
 * @interface FeatureStorePost
 */
export interface FeatureStorePost {
    /**
     * 
     * @type {AttributeSelectorsByPurpose}
     * @memberof FeatureStorePost
     */
    default_selector_by_purpose: AttributeSelectorsByPurpose;
    /**
     * A description of the feature store and its contents.
     * @type {string}
     * @memberof FeatureStorePost
     */
    description: string;
    /**
     * A human-readable name for the feature store.
     * @type {string}
     * @memberof FeatureStorePost
     */
    literate: string;
    /**
     * The slug name of the feature store. Must start with a letter and contain only lowercase letters, numbers, and underscores.
     * @type {string}
     * @memberof FeatureStorePost
     */
    name: string;
    /**
     * The version number of the feature store.
     * @type {number}
     * @memberof FeatureStorePost
     */
    version: number;
}
/**
 * (Parameters used to PUT a value of the `FeatureStore` type.)
 * 
 * A feature store compiles and manages a collection of attributes. Feature stores can be versioned and published to other accounts.
 * @export
 * @interface FeatureStorePut
 */
export interface FeatureStorePut {
    /**
     * 
     * @type {AttributeSelectorsByPurpose}
     * @memberof FeatureStorePut
     */
    default_selector_by_purpose: AttributeSelectorsByPurpose;
    /**
     * A description of the feature store and its contents.
     * @type {string}
     * @memberof FeatureStorePut
     */
    description: string;
    /**
     * A human-readable name for the feature store.
     * @type {string}
     * @memberof FeatureStorePut
     */
    literate: string;
    /**
     * The slug name of the feature store. Must start with a letter and contain only lowercase letters, numbers, and underscores.
     * @type {string}
     * @memberof FeatureStorePut
     */
    name: string;
    /**
     * The version number of the feature store.
     * @type {number}
     * @memberof FeatureStorePut
     */
    version: number;
}
/**
 * An edge in the dependency graph.
 * @export
 * @interface GraphEdge
 */
export interface GraphEdge {
    /**
     * 
     * @type {string}
     * @memberof GraphEdge
     */
    downstream_archived_at?: string;
    /**
     * the id of the resource that depends on the upstream resource
     * @type {string}
     * @memberof GraphEdge
     */
    downstream_id: string;
    /**
     * The last time this resource's input was read.
     * @type {string}
     * @memberof GraphEdge
     */
    downstream_last_read_input_at?: string;
    /**
     * The last time this resource's configuration was updated. If this is more recent than last_updated_output_at, the resource will be rebuilt.
     * @type {string}
     * @memberof GraphEdge
     */
    downstream_last_updated_config_at?: string;
    /**
     * The last time this resource successfully built.
     * @type {string}
     * @memberof GraphEdge
     */
    downstream_last_updated_output_at?: string;
    /**
     * A more human-consumable version of the name of the downstream resource.
     * @type {string}
     * @memberof GraphEdge
     */
    downstream_literate: string;
    /**
     * 
     * @type {ResourceStatus}
     * @memberof GraphEdge
     */
    downstream_status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {string}
     * @memberof GraphEdge
     */
    downstream_status_changed_at?: string;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof GraphEdge
     */
    downstream_status_error?: string;
    /**
     * 
     * @type {ResourceType}
     * @memberof GraphEdge
     */
    downstream_type: ResourceType;
    /**
     * 
     * @type {string}
     * @memberof GraphEdge
     */
    upstream_archived_at?: string;
    /**
     * the id of the resource that is depended on by the downstream resource
     * @type {string}
     * @memberof GraphEdge
     */
    upstream_id: string;
    /**
     * The last time this resource's input was read.
     * @type {string}
     * @memberof GraphEdge
     */
    upstream_last_read_input_at?: string;
    /**
     * The last time this resource's configuration was updated. If this is more recent than last_updated_output_at, the resource will be rebuilt.
     * @type {string}
     * @memberof GraphEdge
     */
    upstream_last_updated_config_at?: string;
    /**
     * The last time this resource successfully built.
     * @type {string}
     * @memberof GraphEdge
     */
    upstream_last_updated_output_at?: string;
    /**
     * A more human-consumable version of the name of the upstream resource.
     * @type {string}
     * @memberof GraphEdge
     */
    upstream_literate: string;
    /**
     * 
     * @type {ResourceStatus}
     * @memberof GraphEdge
     */
    upstream_status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {string}
     * @memberof GraphEdge
     */
    upstream_status_changed_at?: string;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof GraphEdge
     */
    upstream_status_error?: string;
    /**
     * 
     * @type {ResourceType}
     * @memberof GraphEdge
     */
    upstream_type: ResourceType;
}
/**
 * Information about how to extract personally identifiable information (name, contact, address) from the rows 
 * in a dataset. 
 * 
 * At least one value must be provided.
 * @export
 * @interface IdentitySet
 */
export interface IdentitySet {
    /**
     * Deprecated: use `house_number_and_street` instead
     * @type {string}
     * @memberof IdentitySet
     */
    address_line_1?: string;
    /**
     * Deprecated: use `house_number_and_street` instead
     * @type {string}
     * @memberof IdentitySet
     */
    address_line_2?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentitySet
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentitySet
     */
    email?: string;
    /**
     * SHA-256 hash of the lowercase version of the email, with plus-addressing removed
     * @type {string}
     * @memberof IdentitySet
     */
    email_hash?: string;
    /**
     * House number and Street, City, State, and Zip all on one line if they are not available separately
     * @type {string}
     * @memberof IdentitySet
     */
    freeform_address?: string;
    /**
     * Deprecated in favor of `address_line_1` and `address_line_2`. If this field and either of those fields are populated, they will override this field's value when saved.
     * @type {Array<string>}
     * @memberof IdentitySet
     */
    house_number_and_street?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof IdentitySet
     */
    person_first_name?: string;
    /**
     * Only provide this if you don't have first name and last name separately
     * @type {string}
     * @memberof IdentitySet
     */
    person_full_name?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentitySet
     */
    person_last_name?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentitySet
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentitySet
     */
    postcode?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentitySet
     */
    state?: string;
}
/**
 * (Parameters used to PATCH the `IdentitySet` type.)
 * 
 * Information about how to extract personally identifiable information (name, contact, address) from the rows 
 * in a dataset. 
 * 
 * At least one value must be provided.
 * @export
 * @interface IdentitySetMergePatch
 */
export interface IdentitySetMergePatch {
    /**
     * Deprecated: use `house_number_and_street` instead
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    address_line_1?: string | null;
    /**
     * Deprecated: use `house_number_and_street` instead
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    address_line_2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    city?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    email?: string | null;
    /**
     * SHA-256 hash of the lowercase version of the email, with plus-addressing removed
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    email_hash?: string | null;
    /**
     * House number and Street, City, State, and Zip all on one line if they are not available separately
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    freeform_address?: string | null;
    /**
     * Deprecated in favor of `address_line_1` and `address_line_2`. If this field and either of those fields are populated, they will override this field's value when saved.
     * @type {Array<string>}
     * @memberof IdentitySetMergePatch
     */
    house_number_and_street?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    person_first_name?: string | null;
    /**
     * Only provide this if you don't have first name and last name separately
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    person_full_name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    person_last_name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    phone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    postcode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IdentitySetMergePatch
     */
    state?: string | null;
}
/**
 * (Parameters used to POST a new value of the `IdentitySet` type.)
 * 
 * Information about how to extract personally identifiable information (name, contact, address) from the rows 
 * in a dataset. 
 * 
 * At least one value must be provided.
 * @export
 * @interface IdentitySetPost
 */
export interface IdentitySetPost {
    /**
     * Deprecated: use `house_number_and_street` instead
     * @type {string}
     * @memberof IdentitySetPost
     */
    address_line_1?: string;
    /**
     * Deprecated: use `house_number_and_street` instead
     * @type {string}
     * @memberof IdentitySetPost
     */
    address_line_2?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentitySetPost
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentitySetPost
     */
    email?: string;
    /**
     * SHA-256 hash of the lowercase version of the email, with plus-addressing removed
     * @type {string}
     * @memberof IdentitySetPost
     */
    email_hash?: string;
    /**
     * House number and Street, City, State, and Zip all on one line if they are not available separately
     * @type {string}
     * @memberof IdentitySetPost
     */
    freeform_address?: string;
    /**
     * Deprecated in favor of `address_line_1` and `address_line_2`. If this field and either of those fields are populated, they will override this field's value when saved.
     * @type {Array<string>}
     * @memberof IdentitySetPost
     */
    house_number_and_street?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof IdentitySetPost
     */
    person_first_name?: string;
    /**
     * Only provide this if you don't have first name and last name separately
     * @type {string}
     * @memberof IdentitySetPost
     */
    person_full_name?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentitySetPost
     */
    person_last_name?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentitySetPost
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentitySetPost
     */
    postcode?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentitySetPost
     */
    state?: string;
}
/**
 * (Parameters used to PUT a value of the `IdentitySet` type.)
 * 
 * Information about how to extract personally identifiable information (name, contact, address) from the rows 
 * in a dataset. 
 * 
 * At least one value must be provided.
 * @export
 * @interface IdentitySetPut
 */
export interface IdentitySetPut {
    /**
     * Deprecated: use `house_number_and_street` instead
     * @type {string}
     * @memberof IdentitySetPut
     */
    address_line_1?: string;
    /**
     * Deprecated: use `house_number_and_street` instead
     * @type {string}
     * @memberof IdentitySetPut
     */
    address_line_2?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentitySetPut
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentitySetPut
     */
    email?: string;
    /**
     * SHA-256 hash of the lowercase version of the email, with plus-addressing removed
     * @type {string}
     * @memberof IdentitySetPut
     */
    email_hash?: string;
    /**
     * House number and Street, City, State, and Zip all on one line if they are not available separately
     * @type {string}
     * @memberof IdentitySetPut
     */
    freeform_address?: string;
    /**
     * Deprecated in favor of `address_line_1` and `address_line_2`. If this field and either of those fields are populated, they will override this field's value when saved.
     * @type {Array<string>}
     * @memberof IdentitySetPut
     */
    house_number_and_street?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof IdentitySetPut
     */
    person_first_name?: string;
    /**
     * Only provide this if you don't have first name and last name separately
     * @type {string}
     * @memberof IdentitySetPut
     */
    person_full_name?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentitySetPut
     */
    person_last_name?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentitySetPut
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentitySetPut
     */
    postcode?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentitySetPut
     */
    state?: string;
}
/**
 * A mapping of {identity set name} (ex. shipping) -> {identity set object}. 
 * 
 * Describes all the logical groupings of personally-identifiable information present in the dataset.
 * 
 * Identity set objects map canonical names to dataset column names. The following keys are supported:
 *   * `email`
 *   * `email_hash`
 *   * `phone`
 *   * `person_full_name`
 *   * `person_last_name`
 *   * `person_first_name`
 *   * `house_number_and_street`
 *   * `city`
 *   * `state`
 *   * `postcode`
 *   * `freeform_address`
 * 
 * All keys must correspond to a single column name except `house_number_and_street` which must be an array of column names.
 * 
 * Key names can contain letters (a-z, A-Z), numbers (0-9), or underscores (_), and must start with a letter or underscore.
 * @export
 * @interface IdentitySets
 */
export interface IdentitySets {
    [key: string]: IdentitySet;
}
/**
 * (Parameters used to PATCH the `IdentitySets` type.)
 * 
 * A mapping of {identity set name} (ex. shipping) -> {identity set object}. 
 * 
 * Describes all the logical groupings of personally-identifiable information present in the dataset.
 * 
 * Identity set objects map canonical names to dataset column names. The following keys are supported:
 *   * `email`
 *   * `email_hash`
 *   * `phone`
 *   * `person_full_name`
 *   * `person_last_name`
 *   * `person_first_name`
 *   * `house_number_and_street`
 *   * `city`
 *   * `state`
 *   * `postcode`
 *   * `freeform_address`
 * 
 * All keys must correspond to a single column name except `house_number_and_street` which must be an array of column names.
 * 
 * Key names can contain letters (a-z, A-Z), numbers (0-9), or underscores (_), and must start with a letter or underscore.
 * @export
 * @interface IdentitySetsMergePatch
 */
export interface IdentitySetsMergePatch {
    [key: string]: IdentitySetMergePatch | null;
}
/**
 * (Parameters used to POST a new value of the `IdentitySets` type.)
 * 
 * A mapping of {identity set name} (ex. shipping) -> {identity set object}. 
 * 
 * Describes all the logical groupings of personally-identifiable information present in the dataset.
 * 
 * Identity set objects map canonical names to dataset column names. The following keys are supported:
 *   * `email`
 *   * `email_hash`
 *   * `phone`
 *   * `person_full_name`
 *   * `person_last_name`
 *   * `person_first_name`
 *   * `house_number_and_street`
 *   * `city`
 *   * `state`
 *   * `postcode`
 *   * `freeform_address`
 * 
 * All keys must correspond to a single column name except `house_number_and_street` which must be an array of column names.
 * 
 * Key names can contain letters (a-z, A-Z), numbers (0-9), or underscores (_), and must start with a letter or underscore.
 * @export
 * @interface IdentitySetsPost
 */
export interface IdentitySetsPost {
    [key: string]: IdentitySetPost;
}
/**
 * (Parameters used to PUT a value of the `IdentitySets` type.)
 * 
 * A mapping of {identity set name} (ex. shipping) -> {identity set object}. 
 * 
 * Describes all the logical groupings of personally-identifiable information present in the dataset.
 * 
 * Identity set objects map canonical names to dataset column names. The following keys are supported:
 *   * `email`
 *   * `email_hash`
 *   * `phone`
 *   * `person_full_name`
 *   * `person_last_name`
 *   * `person_first_name`
 *   * `house_number_and_street`
 *   * `city`
 *   * `state`
 *   * `postcode`
 *   * `freeform_address`
 * 
 * All keys must correspond to a single column name except `house_number_and_street` which must be an array of column names.
 * 
 * Key names can contain letters (a-z, A-Z), numbers (0-9), or underscores (_), and must start with a letter or underscore.
 * @export
 * @interface IdentitySetsPut
 */
export interface IdentitySetsPut {
    [key: string]: IdentitySetPut;
}
/**
 * A target preview response.
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     * A human-readable status message.
     * @type {string}
     * @memberof InlineResponse200
     */
    message: string;
    /**
     * The Target UUID.
     * @type {string}
     * @memberof InlineResponse200
     */
    target_id: string;
}
/**
 * 
 * @export
 * @interface Invoice
 */
export interface Invoice {
    /**
     * The amount of the invoice.
     * @type {number}
     * @memberof Invoice
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof Invoice
     */
    due_date: string;
    /**
     * The date of the invoice
     * @type {string}
     * @memberof Invoice
     */
    effective_date: string;
    /**
     * Whether or not the invoice has been paid.
     * @type {boolean}
     * @memberof Invoice
     */
    paid: boolean;
}
/**
 * 
 * @export
 * @interface LookupApiIdentifiers
 */
export interface LookupApiIdentifiers {
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentifiers
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentifiers
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentifiers
     */
    email_hash?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentifiers
     */
    house_number_and_street?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentifiers
     */
    latitude?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentifiers
     */
    longitude?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentifiers
     */
    person_first_name?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentifiers
     */
    person_last_name?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentifiers
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentifiers
     */
    postcode?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentifiers
     */
    search_radius?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentifiers
     */
    state?: string;
}
/**
 * 
 * @export
 * @interface LookupApiIdentitySets
 */
export interface LookupApiIdentitySets {
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentitySets
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentitySets
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentitySets
     */
    email_hash?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentitySets
     */
    house_number_and_street?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentitySets
     */
    latitude?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentitySets
     */
    longitude?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentitySets
     */
    person_first_name?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentitySets
     */
    person_last_name?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentitySets
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentitySets
     */
    postcode?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentitySets
     */
    search_radius?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupApiIdentitySets
     */
    state?: string;
}
/**
 * The identity provider used to obtain a match with the requested identity.
 * @export
 * @enum {string}
 */
export enum LookupIdentityProvider {
    Fig = 'fig',
    MatchBoost = 'match_boost'
}
/**
 * The type of match that was found for the lookup request.
 * @export
 * @enum {string}
 */
export enum LookupMatchType {
    AddressFullName = 'address_full_name',
    EmailFullName = 'email_full_name',
    PhoneFullName = 'phone_full_name',
    AddressLastName = 'address_last_name',
    EmailLastName = 'email_last_name',
    PhoneLastName = 'phone_last_name',
    AddressOnly = 'address_only',
    EmailOnly = 'email_only',
    PostcodeOnly = 'postcode_only',
    PhoneOnly = 'phone_only'
}
/**
 * A market opportunity analysis report allows you to measure penetration and opportunity in your market. With this report, you can see the size and location of remaining opportunity in your market, which can help you focus your efforts accordingly.
 * 
 * Market opportunity analysis reports are for customer acquisition pipelines only. Make sure your pipeline’s population to include represents your market, and that you’re not excluding your existing customers in the population to exclude.
 * 
 * This feature may not be available in all plans. Contact your account manager for more information.
 * @export
 * @interface MarketOpportunityAnalysis
 */
export interface MarketOpportunityAnalysis {
    /**
     * If not null, this resource will no longer receive updates, but will still be visable.
     * @type {string}
     * @memberof MarketOpportunityAnalysis
     */
    archived_at?: string;
    /**
     * When this resource was created.
     * @type {string}
     * @memberof MarketOpportunityAnalysis
     */
    created_at: string;
    /**
     * URL to the Google Sheets spreadsheet of the market opportunity analysis. Available once the market opportunity analysis has been run. Permission to view the spreadsheet is granted to all users on the current account.
     * @type {string}
     * @memberof MarketOpportunityAnalysis
     */
    google_sheets_url?: string;
    /**
     * URL to the Google Slides presentation of the market opportunity analysis. Available once the market opportunity analysis has been run. Permission to view the presentation is granted to all users on the current account.
     * @type {string}
     * @memberof MarketOpportunityAnalysis
     */
    google_slides_url?: string;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof MarketOpportunityAnalysis
     */
    id: string;
    /**
     * The last time this resource's input was read.
     * @type {string}
     * @memberof MarketOpportunityAnalysis
     */
    last_read_input_at?: string;
    /**
     * The last time this resource's configuration was updated. If this is more recent than last_updated_output_at, the resource will be rebuilt.
     * @type {string}
     * @memberof MarketOpportunityAnalysis
     */
    last_updated_config_at?: string;
    /**
     * The last time this resource successfully built.
     * @type {string}
     * @memberof MarketOpportunityAnalysis
     */
    last_updated_output_at?: string;
    /**
     * Human-readable label for this market opportunity analysis
     * @type {string}
     * @memberof MarketOpportunityAnalysis
     */
    name: string;
    /**
     * Outcome must be in the scope payload.
     * @type {string}
     * @memberof MarketOpportunityAnalysis
     */
    outcome_id: string;
    /**
     * 
     * @type {MarketOpportunityAnalysisOverallReport}
     * @memberof MarketOpportunityAnalysis
     */
    overall_report?: MarketOpportunityAnalysisOverallReport;
    /**
     * persona_id must belong to the persona_set_id chosen. Providing a persona_id will do further analysis on the persona, but is not required to generate results for the persona set as a whole.
     * @type {string}
     * @memberof MarketOpportunityAnalysis
     */
    persona_id?: string;
    /**
     * Optionally select a persona set to analyze. Persona set must be in the scope payload.
     * @type {string}
     * @memberof MarketOpportunityAnalysis
     */
    persona_set_id?: string;
    /**
     * The type of this resource.
     * @type {string}
     * @memberof MarketOpportunityAnalysis
     */
    resource_type: string;
    /**
     * 
     * @type {string}
     * @memberof MarketOpportunityAnalysis
     */
    scope_id: string;
    /**
     * 
     * @type {ResourceStatus}
     * @memberof MarketOpportunityAnalysis
     */
    status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {string}
     * @memberof MarketOpportunityAnalysis
     */
    status_changed_at?: string;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof MarketOpportunityAnalysis
     */
    status_error?: string;
    /**
     * When this resource was last updated.
     * @type {string}
     * @memberof MarketOpportunityAnalysis
     */
    updated_at: string;
}
/**
 * (Parameters used to PATCH the `MarketOpportunityAnalysis` type.)
 * 
 * A market opportunity analysis report allows you to measure penetration and opportunity in your market. With this report, you can see the size and location of remaining opportunity in your market, which can help you focus your efforts accordingly.
 * 
 * Market opportunity analysis reports are for customer acquisition pipelines only. Make sure your pipeline’s population to include represents your market, and that you’re not excluding your existing customers in the population to exclude.
 * 
 * This feature may not be available in all plans. Contact your account manager for more information.
 * @export
 * @interface MarketOpportunityAnalysisMergePatch
 */
export interface MarketOpportunityAnalysisMergePatch {
    /**
     * Human-readable label for this market opportunity analysis
     * @type {string}
     * @memberof MarketOpportunityAnalysisMergePatch
     */
    name?: string;
    /**
     * Outcome must be in the scope payload.
     * @type {string}
     * @memberof MarketOpportunityAnalysisMergePatch
     */
    outcome_id?: string;
    /**
     * persona_id must belong to the persona_set_id chosen. Providing a persona_id will do further analysis on the persona, but is not required to generate results for the persona set as a whole.
     * @type {string}
     * @memberof MarketOpportunityAnalysisMergePatch
     */
    persona_id?: string | null;
    /**
     * Optionally select a persona set to analyze. Persona set must be in the scope payload.
     * @type {string}
     * @memberof MarketOpportunityAnalysisMergePatch
     */
    persona_set_id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MarketOpportunityAnalysisMergePatch
     */
    scope_id?: string;
}
/**
 * Summary over the latest report. Available once the market opportunity analysis has been run.
 * @export
 * @interface MarketOpportunityAnalysisOverallReport
 */
export interface MarketOpportunityAnalysisOverallReport {
    /**
     * 
     * @type {number}
     * @memberof MarketOpportunityAnalysisOverallReport
     */
    adjusted_in_population_attainers: number;
    /**
     * 
     * @type {number}
     * @memberof MarketOpportunityAnalysisOverallReport
     */
    average_total_value_per_in_population_attainer: number;
    /**
     * 
     * @type {number}
     * @memberof MarketOpportunityAnalysisOverallReport
     */
    average_value_per_in_population_attainment: number;
    /**
     * 
     * @type {number}
     * @memberof MarketOpportunityAnalysisOverallReport
     */
    in_population_remaining_attainment_value: number;
    /**
     * 
     * @type {number}
     * @memberof MarketOpportunityAnalysisOverallReport
     */
    in_population_remaining_likely_attainers: number;
    /**
     * 
     * @type {number}
     * @memberof MarketOpportunityAnalysisOverallReport
     */
    total_value_of_adjusted_in_population_attainment: number;
}
/**
 * (Parameters used to POST a new value of the `MarketOpportunityAnalysis` type.)
 * 
 * A market opportunity analysis report allows you to measure penetration and opportunity in your market. With this report, you can see the size and location of remaining opportunity in your market, which can help you focus your efforts accordingly.
 * 
 * Market opportunity analysis reports are for customer acquisition pipelines only. Make sure your pipeline’s population to include represents your market, and that you’re not excluding your existing customers in the population to exclude.
 * 
 * This feature may not be available in all plans. Contact your account manager for more information.
 * @export
 * @interface MarketOpportunityAnalysisPost
 */
export interface MarketOpportunityAnalysisPost {
    /**
     * Human-readable label for this market opportunity analysis
     * @type {string}
     * @memberof MarketOpportunityAnalysisPost
     */
    name: string;
    /**
     * Outcome must be in the scope payload.
     * @type {string}
     * @memberof MarketOpportunityAnalysisPost
     */
    outcome_id: string;
    /**
     * persona_id must belong to the persona_set_id chosen. Providing a persona_id will do further analysis on the persona, but is not required to generate results for the persona set as a whole.
     * @type {string}
     * @memberof MarketOpportunityAnalysisPost
     */
    persona_id?: string;
    /**
     * Optionally select a persona set to analyze. Persona set must be in the scope payload.
     * @type {string}
     * @memberof MarketOpportunityAnalysisPost
     */
    persona_set_id?: string;
    /**
     * 
     * @type {string}
     * @memberof MarketOpportunityAnalysisPost
     */
    scope_id: string;
}
/**
 * (Parameters used to PUT a value of the `MarketOpportunityAnalysis` type.)
 * 
 * A market opportunity analysis report allows you to measure penetration and opportunity in your market. With this report, you can see the size and location of remaining opportunity in your market, which can help you focus your efforts accordingly.
 * 
 * Market opportunity analysis reports are for customer acquisition pipelines only. Make sure your pipeline’s population to include represents your market, and that you’re not excluding your existing customers in the population to exclude.
 * 
 * This feature may not be available in all plans. Contact your account manager for more information.
 * @export
 * @interface MarketOpportunityAnalysisPut
 */
export interface MarketOpportunityAnalysisPut {
    /**
     * Human-readable label for this market opportunity analysis
     * @type {string}
     * @memberof MarketOpportunityAnalysisPut
     */
    name: string;
    /**
     * Outcome must be in the scope payload.
     * @type {string}
     * @memberof MarketOpportunityAnalysisPut
     */
    outcome_id: string;
    /**
     * persona_id must belong to the persona_set_id chosen. Providing a persona_id will do further analysis on the persona, but is not required to generate results for the persona set as a whole.
     * @type {string}
     * @memberof MarketOpportunityAnalysisPut
     */
    persona_id?: string;
    /**
     * Optionally select a persona set to analyze. Persona set must be in the scope payload.
     * @type {string}
     * @memberof MarketOpportunityAnalysisPut
     */
    persona_set_id?: string;
    /**
     * 
     * @type {string}
     * @memberof MarketOpportunityAnalysisPut
     */
    scope_id: string;
}
/**
 * Information about an error.
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * 
     * @type {ErrorCode}
     * @memberof ModelError
     */
    error: ErrorCode;
    /**
     * A unique ID for this error. Please include this in bug reports.
     * @type {string}
     * @memberof ModelError
     */
    id: string;
    /**
     * A human-readable description of the error.
     * @type {string}
     * @memberof ModelError
     */
    note: string;
    /**
     * JSON Schema validation errors, if any.
     * @type {Array<ValidationError>}
     * @memberof ModelError
     */
    validationErrors?: Array<ValidationError>;
}
/**
 * Customer attributes available for modeling
 * 
 * fig/actvty_num_purchase_quintile: Total lifetime number of purchases made, bucketed into 5 quintile groupings
 * fig/actvty_ttl_dollars_quintile: Total dollars that were spent on purchases within lifetime activity bucketed into 5 quintile groupings
 * fig/age: The age of the individual
 * fig/antiques: Interest in antiques
 * fig/books_magazines: Interest in books and magazines
 * fig/charitable_donations: Self-reported interest in charitable donations
 * fig/dieting: Self-reported interest in dieting & weight loss
 * fig/education: Median attainment completed by adults in household age 18 or older
 * fig/favm: Faraday's Automated Valuation Model (AVM) is an algorithmic estimate that approximates the true market value of a home as closely as possible.
 * fig/frequent_remodeler: Interest in home improvement, or recent renovation activity
 * fig/gardener: Self-reported interest in gardening
 * fig/gender: Gender of individual
 * fig/health_conscious: Self-reported interest in health & exercise
 * fig/homeowner_status: Designation of person-to-property relationship (renter vs. owner), with probability
 * fig/household_income: Deprecated. Use fig/household_income_v2 instead.
 * fig/household_income_v2: Median numeric value of narrow-band income; computed based on highly accurate multi-sourced models which take into account modeled self-reported incomes, property values and other proprietary sources; calibrated to and validated against truth sets prior to release every six weeks
 * fig/household_size: The number of people living in the household, including adults and children
 * fig/housing_density: Number of housing units per square mile
 * fig/length_of_residence: The number of years the resident has lived at this location
 * fig/life_sports_sports_all: Self-reported interest in sports - sports participation
 * fig/living_area: The finished square footage of the house
 * fig/marital_status: Marital status
 * fig/music: Self-reported interest in music
 * fig/net_worth: Value equals household asset minus liabilities.
 * fig/percent_equity: Loan-to-value percentage, subtracted from 100. Negative values indicate the loan is underwater.
 * fig/pet_any: Owns a pet of any variety (Turtle? Capybara? The mind boggles . . .)
 * fig/purch_chan_internet: Likely to make purchases via online channel
 * fig/shopping_styles: Household's preferred mode of shopping
 * fig/travel: Self-reported interest in travel
 * fig/value_score_all: Estimated consumer marketing profitability. This modeled data is derived from credit behavior and leverages demographic and self-reported data.
 * fig/year_built: The year that the house was originally built (see "Effective year built" for last extensive remodel)
 * @export
 * @enum {string}
 */
export enum ModelingField {
    ActvtyNumPurchaseQuintile = 'fig/actvty_num_purchase_quintile',
    ActvtyTtlDollarsQuintile = 'fig/actvty_ttl_dollars_quintile',
    Age = 'fig/age',
    Antiques = 'fig/antiques',
    BooksMagazines = 'fig/books_magazines',
    CharitableDonations = 'fig/charitable_donations',
    Dieting = 'fig/dieting',
    Education = 'fig/education',
    Favm = 'fig/favm',
    FrequentRemodeler = 'fig/frequent_remodeler',
    Gardener = 'fig/gardener',
    Gender = 'fig/gender',
    HealthConscious = 'fig/health_conscious',
    HomeownerStatus = 'fig/homeowner_status',
    HouseholdIncome = 'fig/household_income',
    HouseholdIncomeV2 = 'fig/household_income_v2',
    HouseholdSize = 'fig/household_size',
    LengthOfResidence = 'fig/length_of_residence',
    LifeSportsSportsAll = 'fig/life_sports_sports_all',
    LivingArea = 'fig/living_area',
    MaritalStatus = 'fig/marital_status',
    Music = 'fig/music',
    NetWorth = 'fig/net_worth',
    PercentEquity = 'fig/percent_equity',
    PetAny = 'fig/pet_any',
    PurchChanInternet = 'fig/purch_chan_internet',
    ShoppingStyles = 'fig/shopping_styles',
    Travel = 'fig/travel',
    HousingDensity = 'fig/housing_density',
    ValueScoreAll = 'fig/value_score_all',
    YearBuilt = 'fig/year_built'
}
/**
 * A business objective describing how likely a group of people are to transition from one cohort to another (for example, from a prospect to a customer).
 * @export
 * @interface Outcome
 */
export interface Outcome {
    /**
     * If not null, this resource will no longer receive updates, but will still be visable.
     * @type {string}
     * @memberof Outcome
     */
    archived_at?: string;
    /**
     * A cohort of people who have attained the desired outcome (for example, if predicting transition from prospect to customer, the attainment cohort should be existing customers).
     * @type {string}
     * @memberof Outcome
     */
    attainment_cohort_id: string;
    /**
     * Human-readable label of the attainment cohort. See /cohorts/{attainment_cohort_id} to edit the attainment cohort or view additional details.
     * @type {string}
     * @memberof Outcome
     */
    attainment_cohort_name?: string;
    /**
     * A cohort of counterexamples - people who have clearly failed to attain the outcome, as opposed to simply being indeterminate. This cohort is optional.
     * @type {string}
     * @memberof Outcome
     */
    attrition_cohort_id?: string;
    /**
     * Human-readable label of the attrition cohort. See /cohorts/{attrition_cohort_id} to edit the attrition cohort or view additional details.
     * @type {string}
     * @memberof Outcome
     */
    attrition_cohort_name?: string;
    /**
     * 
     * @type {OutcomeBiasMitigation}
     * @memberof Outcome
     */
    bias_mitigation?: OutcomeBiasMitigation;
    /**
     * When this resource was created.
     * @type {string}
     * @memberof Outcome
     */
    created_at: string;
    /**
     * A cohort of people who could attain or attrite the desired outcome (for example, if predicting transition from prospect to customer, the eligible cohort should be prospects). If no eligible cohort is specified, the model will use the US population as the eligible cohort.
     * @type {string}
     * @memberof Outcome
     */
    eligible_cohort_id?: string;
    /**
     * Human-readable label of the eligibility cohort. See /cohorts/{eligible_cohort_id} to edit the eligible cohort or view additional details.
     * @type {string}
     * @memberof Outcome
     */
    eligible_cohort_name?: string;
    /**
     * The name of a field or category of fields which should not be considered for this Outcome. Should be used
     * primarily for the purposes of Responsible AI.
     * @type {Array<string>}
     * @memberof Outcome
     */
    feature_blocklist?: Array<string>;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof Outcome
     */
    id: string;
    /**
     * The last time this resource's input was read.
     * @type {string}
     * @memberof Outcome
     */
    last_read_input_at?: string;
    /**
     * The last time this resource's configuration was updated. If this is more recent than last_updated_output_at, the resource will be rebuilt.
     * @type {string}
     * @memberof Outcome
     */
    last_updated_config_at?: string;
    /**
     * The last time this resource successfully built.
     * @type {string}
     * @memberof Outcome
     */
    last_updated_output_at?: string;
    /**
     * Average of lift over random at average conversion rate (r), (0.75 * r), (0.5 * r), (0.25 * r).
     * @type {number}
     * @memberof Outcome
     */
    lift_value?: number;
    /**
     * Human-readable label for this outcome. Each outcome must have a unique name.
     * @type {string}
     * @memberof Outcome
     */
    name: string;
    /**
     * Defaults to auto, which enables dynamic modeling if possible. The other option is static, which disables dynamic modeling. Dynamic modeling considers chronology and uses advanced feature engineering whenever possible. You may want to disable dynamic prediction if chronology could confuse your use case, or if advised by Faraday staff.
     * @type {string}
     * @memberof Outcome
     */
    prediction_mode?: OutcomePredictionModeEnum;
    /**
     * 
     * @type {OutcomePredictors}
     * @memberof Outcome
     */
    predictors?: OutcomePredictors;
    /**
     * An outcome in preview mode will not build until preview is turned off.
     * @type {boolean}
     * @memberof Outcome
     */
    preview?: boolean;
    /**
     * URL of an HTML report containing information such as the objective of the model, performance, and important features.
     * @type {string}
     * @memberof Outcome
     */
    report_url?: string;
    /**
     * The type of this resource.
     * @type {string}
     * @memberof Outcome
     */
    resource_type: string;
    /**
     * The area under the receiver operating characteristic curve. Typically, the higher the ROC AUC, the better the model.
     * @type {number}
     * @memberof Outcome
     */
    roc_auc?: number;
    /**
     * 
     * @type {ResourceStatus}
     * @memberof Outcome
     */
    status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {string}
     * @memberof Outcome
     */
    status_changed_at?: string;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof Outcome
     */
    status_error?: string;
    /**
     * When this resource was last updated.
     * @type {string}
     * @memberof Outcome
     */
    updated_at: string;
}

/**
* @export
* @enum {string}
*/
export enum OutcomePredictionModeEnum {
    Auto = 'auto',
    Static = 'static'
}
/**
 * Analysis metrics for an outcome. Includes model performance, bias, feature importances, etc.
 * 
 * Most of the outcome analytics are grouped by data source (e.g. recognized_individuals) they were derived from.
 * 
 * - Recognized individuals: The set of individuals that have been matched with Faraday's Identity Graph.
 * 
 * In the future, we may expand the list of data sources.
 * @export
 * @interface OutcomeAnalysis
 */
export interface OutcomeAnalysis {
    /**
     * 
     * @type {OutcomeAnalysisBias}
     * @memberof OutcomeAnalysis
     */
    bias?: OutcomeAnalysisBias;
    /**
     * 
     * @type {OutcomeAnalysisOverallFeatures}
     * @memberof OutcomeAnalysis
     */
    overall_features: OutcomeAnalysisOverallFeatures;
    /**
     * 
     * @type {OutcomeAnalysisOverallPerformance}
     * @memberof OutcomeAnalysis
     */
    overall_performance: OutcomeAnalysisOverallPerformance;
    /**
     * When an Outcome is being built, many "strategies" are employed to produce candidate models. After cross-validation, the best models resulting from, therefore, the best strategies are promoted to production for later use in inference.
     * You can inspect which strategies are used by referencing the `strategy_id` field in the `OutcomePerformanceModel` in tenure performances.
     * @type {Array<OutcomeAnalysisStrategy>}
     * @memberof OutcomeAnalysis
     */
    strategies?: Array<OutcomeAnalysisStrategy>;
    /**
     * 
     * @type {OutcomeAnalysisTenureFeatures}
     * @memberof OutcomeAnalysis
     */
    tenure_features?: OutcomeAnalysisTenureFeatures;
    /**
     * 
     * @type {OutcomeAnalysisTenurePerformances}
     * @memberof OutcomeAnalysis
     */
    tenure_performances?: OutcomeAnalysisTenurePerformances;
}
/**
 * Information about the various types of bias for an outcome.
 * The measurements for each type of bias are taken with respect to
 * **subpopulations** of **sensitive dimensions** whose priority
 * can be increased or decreased by a type of bias.
 * 
 * The sensitive dimensions and values are:
 * - Age (measured in years)
 *   - Teen `[0, 21)`
 *   - Young Adult `[21, 30]`
 *   - Adult `[31, 40]`
 *   - Middle Age `[41, 60]`
 *   - Senior `[61, infty)`  
 *   - Unknown
 * - Gender
 *   - Female
 *   - Male
 *   - Unknown
 * 
 * Subpopulations are defined by a set of sensitive dimensions and values
 * that represent the intersection of those dimensions and values
 * (e.g. Adult Females, Seniors, Teen Males, Females, etc.).
 * 
 * There are 4 types of bias measured in this analysis:
 * - (data) Distribution of underlying historical data for a sensitive dimension across labels.
 * - (power) Variation in predictive performance across subpopulations.
 * - (predictions) Proportions of positive predictions across subpopulations.
 * - (fairness) Overall fairness metrics for each subpopulation.
 * 
 * Additionally, there is a summary of each type of bias distilled down to a boolean value.
 * @export
 * @interface OutcomeAnalysisBias
 */
export interface OutcomeAnalysisBias {
    /**
     * 
     * @type {OutcomeAnalysisBiasData}
     * @memberof OutcomeAnalysisBias
     */
    data: OutcomeAnalysisBiasData;
    /**
     * 
     * @type {OutcomeAnalysisBiasSubpopulation}
     * @memberof OutcomeAnalysisBias
     */
    fairness: OutcomeAnalysisBiasSubpopulation;
    /**
     * 
     * @type {OutcomeAnalysisBiasSubpopulation}
     * @memberof OutcomeAnalysisBias
     */
    power: OutcomeAnalysisBiasSubpopulation;
    /**
     * 
     * @type {OutcomeAnalysisBiasSubpopulation}
     * @memberof OutcomeAnalysisBias
     */
    predictions: OutcomeAnalysisBiasSubpopulation;
    /**
     * 
     * @type {OutcomeAnalysisBiasSummary}
     * @memberof OutcomeAnalysisBias
     */
    summary: OutcomeAnalysisBiasSummary;
}
/**
 * The underlying data used to build an outcome can introduce bias by unevenly representing subpopulations.
 * This bias is measured by comparing distributions of sensitive dimensions across labels.
 * Categorical distributions (e.g. for gender) are compared using proportions.
 * Numeric distributions (e.g. for age) are compared using the Wasserstein distance on the space of empirical distributions.
 * @export
 * @interface OutcomeAnalysisBiasData
 */
export interface OutcomeAnalysisBiasData {
    /**
     * 
     * @type {OutcomeAnalysisBiasDataAgeDistribution}
     * @memberof OutcomeAnalysisBiasData
     */
    age: OutcomeAnalysisBiasDataAgeDistribution;
    /**
     * 
     * @type {OutcomeAnalysisBiasDataGenderProportion}
     * @memberof OutcomeAnalysisBiasData
     */
    gender: OutcomeAnalysisBiasDataGenderProportion;
}
/**
 * The age distributions among positive examples, candidates, and negative examples
 * along with a `level` that describes the bias.
 * @export
 * @interface OutcomeAnalysisBiasDataAgeDistribution
 */
export interface OutcomeAnalysisBiasDataAgeDistribution {
    /**
     * 
     * @type {OutcomeAnalysisBiasDataAgeDistributionDatum}
     * @memberof OutcomeAnalysisBiasDataAgeDistribution
     */
    candidates: OutcomeAnalysisBiasDataAgeDistributionDatum;
    /**
     * Let `w(l)` denote the Wasserstein distance between the age distribution of individuals with label `l`
     * and the age distribution of all individuals.
     * Specifically, the implement
     * 
     * Let `w` denote the maximum of `w(l)` over all values of `l` in (positives, candidates, negatives).
     * 
     * Let `w_max` denote the maximum possible Wasserstein distance between two age distributions
     * approximated by the range of ages in the eligible population.
     * 
     * Let `w' = w / w_max` be the normalized Wasserstein distance.
     * 
     * The `level` is defined to be `low_bias` if `w' < 0.1`, `moderate_bias` if `w' < 0.2`, and `strong_bias` otherwise.
     * 
     * Note: The Wasserstein distance is computed using the `wasserstein_distance` function from the `scipy.stats` package.
     * - [https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.wasserstein_distance.html](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.wasserstein_distance.html)
     * @type {string}
     * @memberof OutcomeAnalysisBiasDataAgeDistribution
     */
    level: OutcomeAnalysisBiasDataAgeDistributionLevelEnum;
    /**
     * 
     * @type {OutcomeAnalysisBiasDataAgeDistributionDatum}
     * @memberof OutcomeAnalysisBiasDataAgeDistribution
     */
    negatives?: OutcomeAnalysisBiasDataAgeDistributionDatum;
    /**
     * 
     * @type {OutcomeAnalysisBiasDataAgeDistributionDatum}
     * @memberof OutcomeAnalysisBiasDataAgeDistribution
     */
    positives: OutcomeAnalysisBiasDataAgeDistributionDatum;
}

/**
* @export
* @enum {string}
*/
export enum OutcomeAnalysisBiasDataAgeDistributionLevelEnum {
    LowBias = 'low_bias',
    ModerateBias = 'moderate_bias',
    StrongBias = 'strong_bias'
}
/**
 * The age distribution for a given label (positives, candidates, negatives).
 * @export
 * @interface OutcomeAnalysisBiasDataAgeDistributionDatum
 */
export interface OutcomeAnalysisBiasDataAgeDistributionDatum extends Array<object> {
}
/**
 * The proportions of gender values (female, male, unknown) among positive examples, candidates, and negative examples
 * along with a `level` that describes the bias.
 * @export
 * @interface OutcomeAnalysisBiasDataGenderProportion
 */
export interface OutcomeAnalysisBiasDataGenderProportion {
    /**
     * 
     * @type {OutcomeAnalysisBiasDataGenderProportionDatum}
     * @memberof OutcomeAnalysisBiasDataGenderProportion
     */
    candidates: OutcomeAnalysisBiasDataGenderProportionDatum;
    /**
     * Let `d(g,l)` denote the absolute difference between the two proportions:
     * - the proportion of individuals with gender `g` among individuals with label `l`
     * - the proportion of individuals with gender `g` among all individuals
     * 
     * Let `d(g)` denote the maximum of `d(g,l)` over all values of `l` (positives, candidates, negatives).
     * 
     * The `level` is defined to be `low_bias` if `d(g) < 0.1`, `moderate_bias` if `d(g) < 0.2`, and `strong_bias` otherwise.
     * @type {string}
     * @memberof OutcomeAnalysisBiasDataGenderProportion
     */
    level: OutcomeAnalysisBiasDataGenderProportionLevelEnum;
    /**
     * 
     * @type {OutcomeAnalysisBiasDataGenderProportionDatum}
     * @memberof OutcomeAnalysisBiasDataGenderProportion
     */
    negatives?: OutcomeAnalysisBiasDataGenderProportionDatum;
    /**
     * 
     * @type {OutcomeAnalysisBiasDataGenderProportionDatum}
     * @memberof OutcomeAnalysisBiasDataGenderProportion
     */
    positives: OutcomeAnalysisBiasDataGenderProportionDatum;
}

/**
* @export
* @enum {string}
*/
export enum OutcomeAnalysisBiasDataGenderProportionLevelEnum {
    LowBias = 'low_bias',
    ModerateBias = 'moderate_bias',
    StrongBias = 'strong_bias'
}
/**
 * The proportions of gender values for a given label (positives, candidates, negatives).
 * @export
 * @interface OutcomeAnalysisBiasDataGenderProportionDatum
 */
export interface OutcomeAnalysisBiasDataGenderProportionDatum extends Array<object> {
}
/**
 * A subpopulation is a subset of the eligible population defined by a set of
 * sensitive dimensions (e.g. age and gender) and values (e.g. adult and female).
 * 
 * Each subpopulation has a set of metrics that measure different types of bias associated with it.
 * @export
 * @interface OutcomeAnalysisBiasSubpopulation
 */
export interface OutcomeAnalysisBiasSubpopulation extends Array<object> {
}
/**
 * 
 * @export
 * @interface OutcomeAnalysisBiasSubpopulationMetric
 */
export interface OutcomeAnalysisBiasSubpopulationMetric {
    /**
     * An interpretation of the metric value for the subpopulation.
     * @type {string}
     * @memberof OutcomeAnalysisBiasSubpopulationMetric
     */
    level: string;
    /**
     * The name of the metric.
     * @type {string}
     * @memberof OutcomeAnalysisBiasSubpopulationMetric
     */
    name: string;
    /**
     * The value of the metric.
     * @type {number}
     * @memberof OutcomeAnalysisBiasSubpopulationMetric
     */
    value: number;
}
/**
 * A summary of each type of bias distilled down to a boolean value.
 * @export
 * @interface OutcomeAnalysisBiasSummary
 */
export interface OutcomeAnalysisBiasSummary {
    /**
     * This boolean value indicates whether the underlying data used to build an outcome is unbiased.
     * 
     * Each sensitive dimension has a similarity metric (taking values in `[0,1]`)
     * to measure the discrepancy between a subpopulation and the overall population.
     * 
     * For categorical dimensions, the similarity metric is the maximum absolute difference
     * between subpopulation proportions and overall proportions across all values
     * (e.g. the proportion of positive examples among the female subpopulation
     * is compared to the proportion of positive examples among the overall population).
     * 
     * For numeric dimensions, the similarity metric is the Wasserstein distance in one variable
     * (e.g. the Wasserstein distance between the age distribution of positive examples
     * and the overall age distribution) normalized to `[0,1]` by approximating the maximum Wasserstein distance.
     * 
     * From each sensitive dimension we obtain 2 or 3 similarity metrics:
     * - The similarity metric comparing the positive examples to the overall population.
     * - The similarity metric comparing the candidates to the overall population.
     * - (Optionally) The similarity metric comparing the negative examples to the overall population.
     * 
     * The sensitive dimension is defined to have `low_bias` if the maximum similarity metric is less than `0.1`.
     * 
     * The boolean `data_unbiased` is true if all sensitive dimensions are `low_bias` according to the above definition.
     * @type {boolean}
     * @memberof OutcomeAnalysisBiasSummary
     */
    data_unbiased: boolean;
    /**
     * This boolean value indicates that all subpopulations are neither privileged nor disadvantaged using a sum of 4 metrics defined in
     * - Bellamy, Rachel KE, et al. "AI Fairness 360: An extensible toolkit for detecting and mitigating algorithmic bias." IBM Journal of Research and Development 63.4/5 (2019): 4-1.
     * 
     * The 4 metrics are:
     * - Equal opportunity difference: The difference between the true positive rate for a subpopulation and the true positive rate for the overall population.
     * - Statistical parity difference: The difference between the proportion of positive predictions for a subpopulation and the proportion of positive predictions for the overall population.
     * - Average odds difference: The average of the equal opportunity difference and the statistical parity difference.
     * - Disparate impact: The ratio of the proportion of positive predictions for a subpopulation and the proportion of positive predictions for the overall population.
     * 
     * To compute these metrics, a decision threshold corresponding to a top 5% target population is chosen,
     * 
     * The `total_fairness` of a subpopulation is defined as the sum of these 4 fairness metrics.
     * 
     * The ideal value for disparate impact is `1.0`, and the ideal value for the other 3 metrics is `0.0`.
     * Thus, the ideal value for the `total_fairness` is `1.0`,
     * and a subpopulation is defined to be `equitably_treated` if the `total_fairness` is between `0.9` and `1.1`.
     * 
     * The boolean `fairness_fair` is true if all subpopulations are `equitably_treated` according to the above definition.
     * @type {boolean}
     * @memberof OutcomeAnalysisBiasSummary
     */
    fairness_fair: boolean;
    /**
     * This boolean value indicates whether the predictive performance of an outcome is unbiased across subpopulations.
     * 
     * To measure predictive performance, the F1 score, the harmonic mean of precision and recall,
     * is computed at a top 5% decision threshold.
     * 
     * The F1 score of the overall population is compared to the F1 score of each subpopulation by computing
     * the relative difference between the F1 scores: `(subpopulation_f1 - overall_f1) / overall_f1`.
     * 
     * The subpopulation is defined to be `relatively_unaffected` (neither enhanced or impaired)
     * if the absolute relative difference is less than `0.1`.
     * 
     * The boolean `power_unbiased` is true if all subpopulations are `relatively_unaffected` according to the above definition.
     * @type {boolean}
     * @memberof OutcomeAnalysisBiasSummary
     */
    power_unbiased: boolean;
    /**
     * This boolean value indicates that all subpopulations are equally represented among positive predictions.
     * 
     * To measure this, a decision threshold corresponding to a top 5% target population is chosen,
     * and the odds ratio is computed for each subpopulation as:
     * `(proportion of subpopulation members in the target population) / (the proportion of subpopulation members among the eligible population)`.
     * 
     * A subpopulation is defined to have `low_bias` if the odds ratio is between `0.9` and `1.1`.
     * 
     * The boolean `predictions_unbiased` is true if all subpopulations are `low_bias` according to the above definition.
     * @type {boolean}
     * @memberof OutcomeAnalysisBiasSummary
     */
    predictions_unbiased: boolean;
}
/**
 * Importance and directionality of a given feature in an outcome.
 * @export
 * @interface OutcomeAnalysisFeature
 */
export interface OutcomeAnalysisFeature {
    /**
     * 
     * @type {Array<AnalysisFeatureDirectionality>}
     * @memberof OutcomeAnalysisFeature
     */
    directionality: Array<AnalysisFeatureDirectionality>;
    /**
     * The importance of the feature
     * @type {number}
     * @memberof OutcomeAnalysisFeature
     */
    importance: number;
    /**
     * The human-readable name of the feature
     * @type {string}
     * @memberof OutcomeAnalysisFeature
     */
    literate: string;
    /**
     * The identifier for the feature
     * @type {string}
     * @memberof OutcomeAnalysisFeature
     */
    name: string;
}
/**
 * 
 * @export
 * @interface OutcomeAnalysisOverallFeatures
 */
export interface OutcomeAnalysisOverallFeatures {
    /**
     * 
     * @type {Array<OutcomeAnalysisFeature>}
     * @memberof OutcomeAnalysisOverallFeatures
     */
    all_individuals?: Array<OutcomeAnalysisFeature>;
    /**
     * 
     * @type {Array<OutcomeAnalysisFeature>}
     * @memberof OutcomeAnalysisOverallFeatures
     */
    recognized_individuals: Array<OutcomeAnalysisFeature>;
    /**
     * 
     * @type {Array<OutcomeAnalysisFeature>}
     * @memberof OutcomeAnalysisOverallFeatures
     */
    unrecognized_individuals?: Array<OutcomeAnalysisFeature>;
}
/**
 * 
 * @export
 * @interface OutcomeAnalysisOverallPerformance
 */
export interface OutcomeAnalysisOverallPerformance {
    /**
     * 
     * @type {OutcomePerformanceModel}
     * @memberof OutcomeAnalysisOverallPerformance
     */
    all_individuals?: OutcomePerformanceModel;
    /**
     * 
     * @type {OutcomePerformanceModel}
     * @memberof OutcomeAnalysisOverallPerformance
     */
    recognized_individuals: OutcomePerformanceModel;
    /**
     * 
     * @type {OutcomePerformanceModel}
     * @memberof OutcomeAnalysisOverallPerformance
     */
    unrecognized_individuals?: OutcomePerformanceModel;
}
/**
 * The strategy used to make predictions.
 * @export
 * @interface OutcomeAnalysisStrategy
 */
export interface OutcomeAnalysisStrategy {
    /**
     * A description of the prediction strategy.
     * @type {string}
     * @memberof OutcomeAnalysisStrategy
     */
    description: string;
    /**
     * Whether the prediction strategy is experimental.
     * @type {boolean}
     * @memberof OutcomeAnalysisStrategy
     */
    experimental?: boolean;
    /**
     * A unique identifier for the prediction strategy. Referenced by `strategy_id` in the `OutcomePerformanceModel` in tenure performances.
     * @type {string}
     * @memberof OutcomeAnalysisStrategy
     */
    id: string;
    /**
     * The name of the prediction strategy.
     * @type {string}
     * @memberof OutcomeAnalysisStrategy
     */
    name: string;
    /**
     * The data providers used to make predictions.
     * 
     * - "self" means uses first party data (your account).
     * - "fig" means uses Faraday's Identity Graph.
     * @type {Array<string>}
     * @memberof OutcomeAnalysisStrategy
     */
    providers: Array<string>;
    /**
     * A unique identifier for the prediction strategy.
     * @type {string}
     * @memberof OutcomeAnalysisStrategy
     */
    slug?: string;
}
/**
 * 
 * @export
 * @interface OutcomeAnalysisTenureFeatures
 */
export interface OutcomeAnalysisTenureFeatures {
    /**
     * 
     * @type {Array<OutcomeAnalysisTenureFeatures>}
     * @memberof OutcomeAnalysisTenureFeatures
     */
    all_individuals?: Array<OutcomeAnalysisTenureFeatures>;
    /**
     * 
     * @type {Array<OutcomeAnalysisTenureFeatures>}
     * @memberof OutcomeAnalysisTenureFeatures
     */
    recognized_individuals: Array<OutcomeAnalysisTenureFeatures>;
    /**
     * 
     * @type {Array<OutcomeAnalysisTenureFeatures>}
     * @memberof OutcomeAnalysisTenureFeatures
     */
    unrecognized_individuals?: Array<OutcomeAnalysisTenureFeatures>;
}
/**
 * The performance metrics by data source, broken down further by tenure ranges, for an outcome.
 * @export
 * @interface OutcomeAnalysisTenurePerformances
 */
export interface OutcomeAnalysisTenurePerformances {
    /**
     * 
     * @type {Array<OutcomePerformanceModel>}
     * @memberof OutcomeAnalysisTenurePerformances
     */
    all_individuals?: Array<OutcomePerformanceModel>;
    /**
     * 
     * @type {Array<OutcomePerformanceModel>}
     * @memberof OutcomeAnalysisTenurePerformances
     */
    recognized_individuals: Array<OutcomePerformanceModel>;
    /**
     * 
     * @type {Array<OutcomePerformanceModel>}
     * @memberof OutcomeAnalysisTenurePerformances
     */
    unrecognized_individuals?: Array<OutcomePerformanceModel>;
}
/**
 * The strategy to be applied to gender and/or age to mitigate or reverse the bias found in the attainment population.
 * 
 * Though the spec appears you can combine different mitigation strategies per dimension of concern (age=equity, gender=equality), API runtime validation will prevent it for now. Later we may support this so the spec is designed for future proofing. Note: age=none, gender=equity is allowed.
 * @export
 * @interface OutcomeBiasMitigation
 */
export interface OutcomeBiasMitigation {
    /**
     * 
     * @type {OutcomeBiasMitigationStrategy}
     * @memberof OutcomeBiasMitigation
     */
    age?: OutcomeBiasMitigationStrategy;
    /**
     * 
     * @type {OutcomeBiasMitigationStrategy}
     * @memberof OutcomeBiasMitigation
     */
    gender?: OutcomeBiasMitigationStrategy;
}
/**
 * The strategy to use for bias mitigation. 
 * 
 * Currently supported:
 *   - `none` - ignore bias
 *   - `equality` - neutralize bias
 *   - `equity` - invert bias
 * 
 * Bias mitigation will attempt to match the baseline population rate for the dimension of concern (DOC) (`equality`) or overcorrect for past inequality in the direction of the underprivileged DOC (`equity`).
 * @export
 * @enum {string}
 */
export enum OutcomeBiasMitigationStrategy {
    None = 'none',
    Equality = 'equality',
    Equity = 'equity'
}
/**
 * (Parameters used to PATCH the `Outcome` type.)
 * 
 * A business objective describing how likely a group of people are to transition from one cohort to another (for example, from a prospect to a customer).
 * @export
 * @interface OutcomeMergePatch
 */
export interface OutcomeMergePatch {
    /**
     * A cohort of people who have attained the desired outcome (for example, if predicting transition from prospect to customer, the attainment cohort should be existing customers).
     * @type {string}
     * @memberof OutcomeMergePatch
     */
    attainment_cohort_id?: string;
    /**
     * A cohort of counterexamples - people who have clearly failed to attain the outcome, as opposed to simply being indeterminate. This cohort is optional.
     * @type {string}
     * @memberof OutcomeMergePatch
     */
    attrition_cohort_id?: string | null;
    /**
     * 
     * @type {OutcomeMergePatchBiasMitigation}
     * @memberof OutcomeMergePatch
     */
    bias_mitigation?: OutcomeMergePatchBiasMitigation | null;
    /**
     * A cohort of people who could attain or attrite the desired outcome (for example, if predicting transition from prospect to customer, the eligible cohort should be prospects). If no eligible cohort is specified, the model will use the US population as the eligible cohort.
     * @type {string}
     * @memberof OutcomeMergePatch
     */
    eligible_cohort_id?: string | null;
    /**
     * The name of a field or category of fields which should not be considered for this Outcome. Should be used
     * primarily for the purposes of Responsible AI.
     * @type {Array<string>}
     * @memberof OutcomeMergePatch
     */
    feature_blocklist?: Array<string> | null;
    /**
     * Human-readable label for this outcome. Each outcome must have a unique name.
     * @type {string}
     * @memberof OutcomeMergePatch
     */
    name?: string;
    /**
     * Defaults to auto, which enables dynamic modeling if possible. The other option is static, which disables dynamic modeling. Dynamic modeling considers chronology and uses advanced feature engineering whenever possible. You may want to disable dynamic prediction if chronology could confuse your use case, or if advised by Faraday staff.
     * @type {string}
     * @memberof OutcomeMergePatch
     */
    prediction_mode?: OutcomeMergePatchPredictionModeEnum;
    /**
     * 
     * @type {OutcomePredictorsMergePatch}
     * @memberof OutcomeMergePatch
     */
    predictors?: OutcomePredictorsMergePatch | null;
    /**
     * An outcome in preview mode will not build until preview is turned off.
     * @type {boolean}
     * @memberof OutcomeMergePatch
     */
    preview?: boolean | null;
}

/**
* @export
* @enum {string}
*/
export enum OutcomeMergePatchPredictionModeEnum {
    Auto = 'auto',
    Static = 'static'
}
/**
 * The strategy to be applied to gender and/or age to mitigate or reverse the bias found in the attainment population.
 * 
 * Though the spec appears you can combine different mitigation strategies per dimension of concern (age=equity, gender=equality), API runtime validation will prevent it for now. Later we may support this so the spec is designed for future proofing. Note: age=none, gender=equity is allowed.
 * @export
 * @interface OutcomeMergePatchBiasMitigation
 */
export interface OutcomeMergePatchBiasMitigation {
    /**
     * 
     * @type {OutcomeBiasMitigationStrategy}
     * @memberof OutcomeMergePatchBiasMitigation
     */
    age?: OutcomeBiasMitigationStrategy;
    /**
     * 
     * @type {OutcomeBiasMitigationStrategy}
     * @memberof OutcomeMergePatchBiasMitigation
     */
    gender?: OutcomeBiasMitigationStrategy;
}
/**
 * A list of lift data for the model. Each lift point consists of a target percentile`x`, an estimated lift over random `y`, and error bounds on the lift `y_min` and `y_max`.
 * @export
 * @interface OutcomePerformanceLiftCurvePoint
 */
export interface OutcomePerformanceLiftCurvePoint {
    /**
     * The quantile-based target percentile. For example, a value of `.1` defines a target percentile specifying the top 10 percent of scores.
     * @type {number}
     * @memberof OutcomePerformanceLiftCurvePoint
     */
    x: number;
    /**
     * The estimated lift over random at the given target percentile.
     * @type {number}
     * @memberof OutcomePerformanceLiftCurvePoint
     */
    y: number;
    /**
     * The upper error bound for `y`.
     * @type {number}
     * @memberof OutcomePerformanceLiftCurvePoint
     */
    y_max: number;
    /**
     * The lower error bound for `y`.
     * @type {number}
     * @memberof OutcomePerformanceLiftCurvePoint
     */
    y_min: number;
}
/**
 * Performance metrics for a propensity model, optionally over a tenure range.
 * @export
 * @interface OutcomePerformanceModel
 */
export interface OutcomePerformanceModel {
    /**
     * 
     * @type {Array<OutcomePerformanceLiftCurvePoint>}
     * @memberof OutcomePerformanceModel
     */
    lift_curve: Array<OutcomePerformanceLiftCurvePoint>;
    /**
     * 
     * @type {TabularData}
     * @memberof OutcomePerformanceModel
     */
    lift_table: TabularData;
    /**
     * Average of lift over random at average conversion rate (r), (0.75 * r), (0.5 * r), (0.25 * r).
     * @type {number}
     * @memberof OutcomePerformanceModel
     */
    lift_value?: number;
    /**
     * 
     * @type {TabularData}
     * @memberof OutcomePerformanceModel
     */
    metrics_table: TabularData;
    /**
     * The area under the receiver operating characteristic curve.
     * @type {number}
     * @memberof OutcomePerformanceModel
     */
    roc_auc: number;
    /**
     * 
     * @type {Array<AnalysisRocCurvePoint>}
     * @memberof OutcomePerformanceModel
     */
    roc_curve: Array<AnalysisRocCurvePoint>;
    /**
     * The ID of a strategy from the strategies array. If the group is overall, this value is null. To determine which strategies apply in such cases, refer to the strategy IDs defined at the tenure level.
     * @type {string}
     * @memberof OutcomePerformanceModel
     */
    strategy_id?: string;
    /**
     * When the tenure range ends measured in days. The value can be null if no tenure range applies to this model. The value can also be null if the range is unbounded.
     * @type {number}
     * @memberof OutcomePerformanceModel
     */
    tenure_end?: number;
    /**
     * When the tenure range starts measured in days. The value can be null if no tenure range applies to this model.
     * @type {number}
     * @memberof OutcomePerformanceModel
     */
    tenure_start?: number;
}
/**
 * (Parameters used to POST a new value of the `Outcome` type.)
 * 
 * A business objective describing how likely a group of people are to transition from one cohort to another (for example, from a prospect to a customer).
 * @export
 * @interface OutcomePost
 */
export interface OutcomePost {
    /**
     * A cohort of people who have attained the desired outcome (for example, if predicting transition from prospect to customer, the attainment cohort should be existing customers).
     * @type {string}
     * @memberof OutcomePost
     */
    attainment_cohort_id: string;
    /**
     * A cohort of counterexamples - people who have clearly failed to attain the outcome, as opposed to simply being indeterminate. This cohort is optional.
     * @type {string}
     * @memberof OutcomePost
     */
    attrition_cohort_id?: string;
    /**
     * 
     * @type {OutcomeBiasMitigation}
     * @memberof OutcomePost
     */
    bias_mitigation?: OutcomeBiasMitigation;
    /**
     * A cohort of people who could attain or attrite the desired outcome (for example, if predicting transition from prospect to customer, the eligible cohort should be prospects). If no eligible cohort is specified, the model will use the US population as the eligible cohort.
     * @type {string}
     * @memberof OutcomePost
     */
    eligible_cohort_id?: string;
    /**
     * The name of a field or category of fields which should not be considered for this Outcome. Should be used
     * primarily for the purposes of Responsible AI.
     * @type {Array<string>}
     * @memberof OutcomePost
     */
    feature_blocklist?: Array<string>;
    /**
     * Human-readable label for this outcome. Each outcome must have a unique name.
     * @type {string}
     * @memberof OutcomePost
     */
    name: string;
    /**
     * Defaults to auto, which enables dynamic modeling if possible. The other option is static, which disables dynamic modeling. Dynamic modeling considers chronology and uses advanced feature engineering whenever possible. You may want to disable dynamic prediction if chronology could confuse your use case, or if advised by Faraday staff.
     * @type {string}
     * @memberof OutcomePost
     */
    prediction_mode?: OutcomePostPredictionModeEnum;
    /**
     * 
     * @type {OutcomePredictorsPost}
     * @memberof OutcomePost
     */
    predictors?: OutcomePredictorsPost;
    /**
     * An outcome in preview mode will not build until preview is turned off.
     * @type {boolean}
     * @memberof OutcomePost
     */
    preview?: boolean;
}

/**
* @export
* @enum {string}
*/
export enum OutcomePostPredictionModeEnum {
    Auto = 'auto',
    Static = 'static'
}
/**
 * Provides control over the features used during modeling to predict an outcome.
 * @export
 * @interface OutcomePredictors
 */
export interface OutcomePredictors {
    /**
     * 
     * @type {OutcomePredictorsBlocked}
     * @memberof OutcomePredictors
     */
    blocked?: OutcomePredictorsBlocked;
}
/**
 * 
 * @export
 * @interface OutcomePredictorsBlocked
 */
export interface OutcomePredictorsBlocked {
    /**
     * The name of a provider whose features should be blocked from consideration for this Outcome. 
     * 
     * Options: 
     *   - self: refers to the Account the Outcome belongs to.
     * @type {Array<string>}
     * @memberof OutcomePredictorsBlocked
     */
    providers?: Array<string>;
}
/**
 * 
 * @export
 * @interface OutcomePredictorsBlockedMergePatch
 */
export interface OutcomePredictorsBlockedMergePatch {
    /**
     * The name of a provider whose features should be blocked from consideration for this Outcome. 
     * 
     * Options: 
     *   - self: refers to the Account the Outcome belongs to.
     * @type {Array<string>}
     * @memberof OutcomePredictorsBlockedMergePatch
     */
    providers?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface OutcomePredictorsBlockedPost
 */
export interface OutcomePredictorsBlockedPost {
    /**
     * The name of a provider whose features should be blocked from consideration for this Outcome. 
     * 
     * Options: 
     *   - self: refers to the Account the Outcome belongs to.
     * @type {Array<string>}
     * @memberof OutcomePredictorsBlockedPost
     */
    providers?: Array<string>;
}
/**
 * 
 * @export
 * @interface OutcomePredictorsBlockedPut
 */
export interface OutcomePredictorsBlockedPut {
    /**
     * The name of a provider whose features should be blocked from consideration for this Outcome. 
     * 
     * Options: 
     *   - self: refers to the Account the Outcome belongs to.
     * @type {Array<string>}
     * @memberof OutcomePredictorsBlockedPut
     */
    providers?: Array<string>;
}
/**
 * (Parameters used to PATCH the `OutcomePredictors` type.)
 * 
 * Provides control over the features used during modeling to predict an outcome.
 * @export
 * @interface OutcomePredictorsMergePatch
 */
export interface OutcomePredictorsMergePatch {
    /**
     * 
     * @type {OutcomePredictorsBlockedMergePatch}
     * @memberof OutcomePredictorsMergePatch
     */
    blocked?: OutcomePredictorsBlockedMergePatch | null;
}
/**
 * (Parameters used to POST a new value of the `OutcomePredictors` type.)
 * 
 * Provides control over the features used during modeling to predict an outcome.
 * @export
 * @interface OutcomePredictorsPost
 */
export interface OutcomePredictorsPost {
    /**
     * 
     * @type {OutcomePredictorsBlockedPost}
     * @memberof OutcomePredictorsPost
     */
    blocked?: OutcomePredictorsBlockedPost;
}
/**
 * (Parameters used to PUT a value of the `OutcomePredictors` type.)
 * 
 * Provides control over the features used during modeling to predict an outcome.
 * @export
 * @interface OutcomePredictorsPut
 */
export interface OutcomePredictorsPut {
    /**
     * 
     * @type {OutcomePredictorsBlockedPut}
     * @memberof OutcomePredictorsPut
     */
    blocked?: OutcomePredictorsBlockedPut;
}
/**
 * (Parameters used to PUT a value of the `Outcome` type.)
 * 
 * A business objective describing how likely a group of people are to transition from one cohort to another (for example, from a prospect to a customer).
 * @export
 * @interface OutcomePut
 */
export interface OutcomePut {
    /**
     * A cohort of people who have attained the desired outcome (for example, if predicting transition from prospect to customer, the attainment cohort should be existing customers).
     * @type {string}
     * @memberof OutcomePut
     */
    attainment_cohort_id: string;
    /**
     * A cohort of counterexamples - people who have clearly failed to attain the outcome, as opposed to simply being indeterminate. This cohort is optional.
     * @type {string}
     * @memberof OutcomePut
     */
    attrition_cohort_id?: string;
    /**
     * 
     * @type {OutcomeBiasMitigation}
     * @memberof OutcomePut
     */
    bias_mitigation?: OutcomeBiasMitigation;
    /**
     * A cohort of people who could attain or attrite the desired outcome (for example, if predicting transition from prospect to customer, the eligible cohort should be prospects). If no eligible cohort is specified, the model will use the US population as the eligible cohort.
     * @type {string}
     * @memberof OutcomePut
     */
    eligible_cohort_id?: string;
    /**
     * The name of a field or category of fields which should not be considered for this Outcome. Should be used
     * primarily for the purposes of Responsible AI.
     * @type {Array<string>}
     * @memberof OutcomePut
     */
    feature_blocklist?: Array<string>;
    /**
     * Human-readable label for this outcome. Each outcome must have a unique name.
     * @type {string}
     * @memberof OutcomePut
     */
    name: string;
    /**
     * Defaults to auto, which enables dynamic modeling if possible. The other option is static, which disables dynamic modeling. Dynamic modeling considers chronology and uses advanced feature engineering whenever possible. You may want to disable dynamic prediction if chronology could confuse your use case, or if advised by Faraday staff.
     * @type {string}
     * @memberof OutcomePut
     */
    prediction_mode?: OutcomePutPredictionModeEnum;
    /**
     * 
     * @type {OutcomePredictorsPut}
     * @memberof OutcomePut
     */
    predictors?: OutcomePredictorsPut;
    /**
     * An outcome in preview mode will not build until preview is turned off.
     * @type {boolean}
     * @memberof OutcomePut
     */
    preview?: boolean;
}

/**
* @export
* @enum {string}
*/
export enum OutcomePutPredictionModeEnum {
    Auto = 'auto',
    Static = 'static'
}
/**
 * A single mapping of a dataset column to a stream with property configurations.
 * @export
 * @interface OutputToStreamArrayItem
 */
export interface OutputToStreamArrayItem {
    /**
     * A flexible mapping of property names to their configurations. Property names can be any string (e.g., data, datetime, authority, precision, derivations, quality).
     * 
     * Each property can either reference a column from the dataset or provide a static value.
     * @type {{ [key: string]: StreamPropertyConfig; }}
     * @memberof OutputToStreamArrayItem
     */
    properties: { [key: string]: StreamPropertyConfig; };
    /**
     * 
     * @type {string}
     * @memberof OutputToStreamArrayItem
     */
    stream_id?: string;
    /**
     * The name of the stream to populate with this data
     * @type {string}
     * @memberof OutputToStreamArrayItem
     */
    stream_name: string;
}
/**
 * Describes how to transform the dataset into one or more streams. 
 * 
 * Streams typically represent events. They can have multiple dataset sources and each dataset can be used to populate multiple streams.
 * 
 * The shape of this parameter is a mapping of stream names to stream output columns, given by a `data_map` object. Ex:
 * ```
 * "output_to_streams": {
 *   "orders": {                               <-- stream name
 *       "data_map": {
 *         "datetime": {                       <-- stream column
 *           "column_name": "purchase_date",   <-- dataset column name
 *           "format": "mm_dd_yyyy_slash"      <-- dataset column format
 *         },
 *         "value": {
 *           "column_name": "purchase_amount"
 *         }
 *       }
 *     }
 *   }
 * }
 * ```
 * 
 * Streams named here will be automatically generated if they do not exist. They can be fetched with <a href="https://faraday.ai/developers/reference/getstream">/streams/{stream_id_or_name}</a>.
 * 
 * A `data_map` object can have any keys, but it is recommended to include the reserved `datetime` key as this will improve modeling.
 * 
 * Each key of the `data_map` object must specificy at mimumum a `column_name` (source column) and optionally a `format`, which can be one of:
 *   * `currency_cents`
 *   * `currency_dollars`
 *   * `mm_dd_yy_slash`
 *   * `mm_dd_yyyy_slash`
 *   * `mm_dd_yy_dash`
 *   * `mm_dd_yyyy_dash`
 *   * `yyyy_mm_dd_slash`
 *   * `yy_mm_dd_slash`
 *   * `yyyy_mm_dd_dash`
 *   * `yy_mm_dd_dash`
 *   * `yyyymmdd`
 *   * `yyyymm`
 *   * `dd_mm_yyyy_slash`
 *   * `dd_mm_yy_slash`
 *   * `dd_mm_yyyy_dash`
 *   * `dd_mm_yy_dash`
 *   * `list_comma_separated`
 *   * `list_semicolon_separated`
 *   * `list_single_value`
 *   * `static_date_iso8601`
 *   * `date_iso8601` (deprecated)
 *   * `date_month_day_fullyear` (deprecated)
 *   * `date_month_day_shortyear` (deprecated)
 *   * `date_month_day_fullyear_hours_minutes` (deprecated)
 *   * `date_month_day_fullyear_hours_minutes_seconds` (deprecated)
 * 
 * If no format is provided, the dataset type will be retained (data uploaded through csv are text by default).
 * 
 * For the date formats, time values are ignored. In other words, if you have YYYY-MM-DDTHH:MM:SS, you can pick yyyy_mm_dd_dash.
 * 
 * Cannot be set in combination with `output_all_columns_as_traits`.
 * @export
 * @interface OutputToStreams
 */
export interface OutputToStreams {
    [key: string]: DatasetStream;
}
/**
 * (Parameters used to PATCH the `OutputToStreams` type.)
 * 
 * Describes how to transform the dataset into one or more streams. 
 * 
 * Streams typically represent events. They can have multiple dataset sources and each dataset can be used to populate multiple streams.
 * 
 * The shape of this parameter is a mapping of stream names to stream output columns, given by a `data_map` object. Ex:
 * ```
 * "output_to_streams": {
 *   "orders": {                               <-- stream name
 *       "data_map": {
 *         "datetime": {                       <-- stream column
 *           "column_name": "purchase_date",   <-- dataset column name
 *           "format": "mm_dd_yyyy_slash"      <-- dataset column format
 *         },
 *         "value": {
 *           "column_name": "purchase_amount"
 *         }
 *       }
 *     }
 *   }
 * }
 * ```
 * 
 * Streams named here will be automatically generated if they do not exist. They can be fetched with <a href="https://faraday.ai/developers/reference/getstream">/streams/{stream_id_or_name}</a>.
 * 
 * A `data_map` object can have any keys, but it is recommended to include the reserved `datetime` key as this will improve modeling.
 * 
 * Each key of the `data_map` object must specificy at mimumum a `column_name` (source column) and optionally a `format`, which can be one of:
 *   * `currency_cents`
 *   * `currency_dollars`
 *   * `mm_dd_yy_slash`
 *   * `mm_dd_yyyy_slash`
 *   * `mm_dd_yy_dash`
 *   * `mm_dd_yyyy_dash`
 *   * `yyyy_mm_dd_slash`
 *   * `yy_mm_dd_slash`
 *   * `yyyy_mm_dd_dash`
 *   * `yy_mm_dd_dash`
 *   * `yyyymmdd`
 *   * `yyyymm`
 *   * `dd_mm_yyyy_slash`
 *   * `dd_mm_yy_slash`
 *   * `dd_mm_yyyy_dash`
 *   * `dd_mm_yy_dash`
 *   * `list_comma_separated`
 *   * `list_semicolon_separated`
 *   * `list_single_value`
 *   * `static_date_iso8601`
 *   * `date_iso8601` (deprecated)
 *   * `date_month_day_fullyear` (deprecated)
 *   * `date_month_day_shortyear` (deprecated)
 *   * `date_month_day_fullyear_hours_minutes` (deprecated)
 *   * `date_month_day_fullyear_hours_minutes_seconds` (deprecated)
 * 
 * If no format is provided, the dataset type will be retained (data uploaded through csv are text by default).
 * 
 * For the date formats, time values are ignored. In other words, if you have YYYY-MM-DDTHH:MM:SS, you can pick yyyy_mm_dd_dash.
 * 
 * Cannot be set in combination with `output_all_columns_as_traits`.
 * @export
 * @interface OutputToStreamsMergePatch
 */
export interface OutputToStreamsMergePatch {
    [key: string]: DatasetStreamMergePatch | null;
}
/**
 * (Parameters used to POST a new value of the `OutputToStreams` type.)
 * 
 * Describes how to transform the dataset into one or more streams. 
 * 
 * Streams typically represent events. They can have multiple dataset sources and each dataset can be used to populate multiple streams.
 * 
 * The shape of this parameter is a mapping of stream names to stream output columns, given by a `data_map` object. Ex:
 * ```
 * "output_to_streams": {
 *   "orders": {                               <-- stream name
 *       "data_map": {
 *         "datetime": {                       <-- stream column
 *           "column_name": "purchase_date",   <-- dataset column name
 *           "format": "mm_dd_yyyy_slash"      <-- dataset column format
 *         },
 *         "value": {
 *           "column_name": "purchase_amount"
 *         }
 *       }
 *     }
 *   }
 * }
 * ```
 * 
 * Streams named here will be automatically generated if they do not exist. They can be fetched with <a href="https://faraday.ai/developers/reference/getstream">/streams/{stream_id_or_name}</a>.
 * 
 * A `data_map` object can have any keys, but it is recommended to include the reserved `datetime` key as this will improve modeling.
 * 
 * Each key of the `data_map` object must specificy at mimumum a `column_name` (source column) and optionally a `format`, which can be one of:
 *   * `currency_cents`
 *   * `currency_dollars`
 *   * `mm_dd_yy_slash`
 *   * `mm_dd_yyyy_slash`
 *   * `mm_dd_yy_dash`
 *   * `mm_dd_yyyy_dash`
 *   * `yyyy_mm_dd_slash`
 *   * `yy_mm_dd_slash`
 *   * `yyyy_mm_dd_dash`
 *   * `yy_mm_dd_dash`
 *   * `yyyymmdd`
 *   * `yyyymm`
 *   * `dd_mm_yyyy_slash`
 *   * `dd_mm_yy_slash`
 *   * `dd_mm_yyyy_dash`
 *   * `dd_mm_yy_dash`
 *   * `list_comma_separated`
 *   * `list_semicolon_separated`
 *   * `list_single_value`
 *   * `static_date_iso8601`
 *   * `date_iso8601` (deprecated)
 *   * `date_month_day_fullyear` (deprecated)
 *   * `date_month_day_shortyear` (deprecated)
 *   * `date_month_day_fullyear_hours_minutes` (deprecated)
 *   * `date_month_day_fullyear_hours_minutes_seconds` (deprecated)
 * 
 * If no format is provided, the dataset type will be retained (data uploaded through csv are text by default).
 * 
 * For the date formats, time values are ignored. In other words, if you have YYYY-MM-DDTHH:MM:SS, you can pick yyyy_mm_dd_dash.
 * 
 * Cannot be set in combination with `output_all_columns_as_traits`.
 * @export
 * @interface OutputToStreamsPost
 */
export interface OutputToStreamsPost {
    [key: string]: DatasetStreamPost;
}
/**
 * (Parameters used to PUT a value of the `OutputToStreams` type.)
 * 
 * Describes how to transform the dataset into one or more streams. 
 * 
 * Streams typically represent events. They can have multiple dataset sources and each dataset can be used to populate multiple streams.
 * 
 * The shape of this parameter is a mapping of stream names to stream output columns, given by a `data_map` object. Ex:
 * ```
 * "output_to_streams": {
 *   "orders": {                               <-- stream name
 *       "data_map": {
 *         "datetime": {                       <-- stream column
 *           "column_name": "purchase_date",   <-- dataset column name
 *           "format": "mm_dd_yyyy_slash"      <-- dataset column format
 *         },
 *         "value": {
 *           "column_name": "purchase_amount"
 *         }
 *       }
 *     }
 *   }
 * }
 * ```
 * 
 * Streams named here will be automatically generated if they do not exist. They can be fetched with <a href="https://faraday.ai/developers/reference/getstream">/streams/{stream_id_or_name}</a>.
 * 
 * A `data_map` object can have any keys, but it is recommended to include the reserved `datetime` key as this will improve modeling.
 * 
 * Each key of the `data_map` object must specificy at mimumum a `column_name` (source column) and optionally a `format`, which can be one of:
 *   * `currency_cents`
 *   * `currency_dollars`
 *   * `mm_dd_yy_slash`
 *   * `mm_dd_yyyy_slash`
 *   * `mm_dd_yy_dash`
 *   * `mm_dd_yyyy_dash`
 *   * `yyyy_mm_dd_slash`
 *   * `yy_mm_dd_slash`
 *   * `yyyy_mm_dd_dash`
 *   * `yy_mm_dd_dash`
 *   * `yyyymmdd`
 *   * `yyyymm`
 *   * `dd_mm_yyyy_slash`
 *   * `dd_mm_yy_slash`
 *   * `dd_mm_yyyy_dash`
 *   * `dd_mm_yy_dash`
 *   * `list_comma_separated`
 *   * `list_semicolon_separated`
 *   * `list_single_value`
 *   * `static_date_iso8601`
 *   * `date_iso8601` (deprecated)
 *   * `date_month_day_fullyear` (deprecated)
 *   * `date_month_day_shortyear` (deprecated)
 *   * `date_month_day_fullyear_hours_minutes` (deprecated)
 *   * `date_month_day_fullyear_hours_minutes_seconds` (deprecated)
 * 
 * If no format is provided, the dataset type will be retained (data uploaded through csv are text by default).
 * 
 * For the date formats, time values are ignored. In other words, if you have YYYY-MM-DDTHH:MM:SS, you can pick yyyy_mm_dd_dash.
 * 
 * Cannot be set in combination with `output_all_columns_as_traits`.
 * @export
 * @interface OutputToStreamsPut
 */
export interface OutputToStreamsPut {
    [key: string]: DatasetStreamPut;
}
/**
 * A mapping of trait name to trait definition, where the key is what the trait will be called in Faraday's system.
 * 
 * Traits are characteristics about people, that are unrelated to particular events.
 * 
 * When specifying or modifying this parameter, bulk trait declarations specified with `output_all_columns_as_traits` must be null.
 * 
 * There is an option to provide either a static value or a column name for each trait. Please provide one or the other.
 * @export
 * @interface OutputToTraits
 */
export interface OutputToTraits {
    [key: string]: TraitDataMapColumn;
}
/**
 * (Parameters used to PATCH the `OutputToTraits` type.)
 * 
 * A mapping of trait name to trait definition, where the key is what the trait will be called in Faraday's system.
 * 
 * Traits are characteristics about people, that are unrelated to particular events.
 * 
 * When specifying or modifying this parameter, bulk trait declarations specified with `output_all_columns_as_traits` must be null.
 * 
 * There is an option to provide either a static value or a column name for each trait. Please provide one or the other.
 * @export
 * @interface OutputToTraitsMergePatch
 */
export interface OutputToTraitsMergePatch {
    [key: string]: TraitDataMapColumnMergePatch | null;
}
/**
 * (Parameters used to POST a new value of the `OutputToTraits` type.)
 * 
 * A mapping of trait name to trait definition, where the key is what the trait will be called in Faraday's system.
 * 
 * Traits are characteristics about people, that are unrelated to particular events.
 * 
 * When specifying or modifying this parameter, bulk trait declarations specified with `output_all_columns_as_traits` must be null.
 * 
 * There is an option to provide either a static value or a column name for each trait. Please provide one or the other.
 * @export
 * @interface OutputToTraitsPost
 */
export interface OutputToTraitsPost {
    [key: string]: TraitDataMapColumnPost;
}
/**
 * (Parameters used to PUT a value of the `OutputToTraits` type.)
 * 
 * A mapping of trait name to trait definition, where the key is what the trait will be called in Faraday's system.
 * 
 * Traits are characteristics about people, that are unrelated to particular events.
 * 
 * When specifying or modifying this parameter, bulk trait declarations specified with `output_all_columns_as_traits` must be null.
 * 
 * There is an option to provide either a static value or a column name for each trait. Please provide one or the other.
 * @export
 * @interface OutputToTraitsPut
 */
export interface OutputToTraitsPut {
    [key: string]: TraitDataMapColumnPut;
}
/**
 * 
 * @export
 * @interface Payment
 */
export interface Payment {
    /**
     * The amount paid.
     * @type {number}
     * @memberof Payment
     */
    amount: number;
    /**
     * The date of the payment.
     * @type {string}
     * @memberof Payment
     */
    date: string;
}
/**
 * A set of people who have more in common with each other than they do with members of other personas in the persona set.
 * @export
 * @interface Persona
 */
export interface Persona {
    /**
     * **Deprecated**: Value will be null until the key is eventually removed or replaced. Previously, an image used to represent this persona (only available if demographics (age and gender) are included in the model)
     * @type {string}
     * @memberof Persona
     */
    avatar?: string;
    /**
     * 
     * @type {PersonaDetails}
     * @memberof Persona
     */
    details?: PersonaDetails;
    /**
     * 
     * @type {string}
     * @memberof Persona
     */
    id: string;
    /**
     * The number of individuals that match this persona within the cohort used to generate the persona set.
     * @type {number}
     * @memberof Persona
     */
    individuals_count?: number;
    /**
     * 
     * @type {PersonaInterpretation}
     * @memberof Persona
     */
    interpretation?: PersonaInterpretation;
    /**
     * A human-readable label for this persona.
     * @type {string}
     * @memberof Persona
     */
    name: string;
}
/**
 * Statistics about the members of this persona.
 * @export
 * @interface PersonaDetails
 */
export interface PersonaDetails {
    /**
     * **Deprecated**: Use `/persona_sets/{persona_set_id}/analysis/dimensions` instead.
     * 
     * How much the members of the persona differ from an average member. This is represented as a histogram. For example, if the average member is 38 years old, this will show how many members are 0-20 years old, 20-30, 30-40, and so on.
     * @type {object}
     * @memberof PersonaDetails
     */
    bins?: object;
    /**
     * The average traits of a member of this persona. A person does not need to match these traits exactly to be a member of the persona.
     * @type {object}
     * @memberof PersonaDetails
     */
    center?: object;
}
/**
 * Interpretation data for this persona
 * @export
 * @interface PersonaInterpretation
 */
export interface PersonaInterpretation {
    /**
     * Marketing strategems for this persona
     * @type {Array<string>}
     * @memberof PersonaInterpretation
     */
    marketing_strategems?: Array<string>;
    /**
     * A summary interpretation of this persona
     * @type {string}
     * @memberof PersonaInterpretation
     */
    summary?: string;
}
/**
 * (Parameters used to PATCH the `Persona` type.)
 * 
 * A set of people who have more in common with each other than they do with members of other personas in the persona set.
 * @export
 * @interface PersonaMergePatch
 */
export interface PersonaMergePatch {
    /**
     * A human-readable label for this persona.
     * @type {string}
     * @memberof PersonaMergePatch
     */
    name?: string;
}
/**
 * (Parameters used to POST a new value of the `Persona` type.)
 * 
 * A set of people who have more in common with each other than they do with members of other personas in the persona set.
 * @export
 * @interface PersonaPost
 */
export interface PersonaPost {
    /**
     * A human-readable label for this persona.
     * @type {string}
     * @memberof PersonaPost
     */
    name: string;
}
/**
 * (Parameters used to PUT a value of the `Persona` type.)
 * 
 * A set of people who have more in common with each other than they do with members of other personas in the persona set.
 * @export
 * @interface PersonaPut
 */
export interface PersonaPut {
    /**
     * A human-readable label for this persona.
     * @type {string}
     * @memberof PersonaPut
     */
    name: string;
}
/**
 * A set of customer personas.
 * @export
 * @interface PersonaSet
 */
export interface PersonaSet {
    /**
     * Is the related cohort using this as the primary persona set?
     * @type {boolean}
     * @memberof PersonaSet
     */
    active?: boolean;
    /**
     * If not null, this resource will no longer receive updates, but will still be visable.
     * @type {string}
     * @memberof PersonaSet
     */
    archived_at?: string;
    /**
     * 
     * @type {string}
     * @memberof PersonaSet
     */
    cohort_id: string;
    /**
     * When this resource was created.
     * @type {string}
     * @memberof PersonaSet
     */
    created_at: string;
    /**
     * Whether to show the persona set in Explore, the map view on https://app.faraday.ai.
     * 
     * This will slow down persona set builds.
     * @type {boolean}
     * @memberof PersonaSet
     */
    explore?: boolean;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof PersonaSet
     */
    id: string;
    /**
     * The last time this resource's input was read.
     * @type {string}
     * @memberof PersonaSet
     */
    last_read_input_at?: string;
    /**
     * The last time this resource's configuration was updated. If this is more recent than last_updated_output_at, the resource will be rebuilt.
     * @type {string}
     * @memberof PersonaSet
     */
    last_updated_config_at?: string;
    /**
     * The last time this resource successfully built.
     * @type {string}
     * @memberof PersonaSet
     */
    last_updated_output_at?: string;
    /**
     * Specify customer attributes to use in modeling
     * @type {Array<ModelingField>}
     * @memberof PersonaSet
     */
    modeling_fields?: Array<ModelingField>;
    /**
     * Human-readable label for this persona set.
     * @type {string}
     * @memberof PersonaSet
     */
    name: string;
    /**
     * Specify the exact number of clusters (i.e. personas) there should be in the persona set.
     * 
     * By default, the optimal value for this parameter is determined automatically.
     * 
     * Setting this requires external knowledge and should only be done when the use-case necessitates a specific number of clusters.
     * @type {number}
     * @memberof PersonaSet
     */
    number_of_clusters?: number;
    /**
     * The personas that belong to this persona set
     * @type {Array<Persona>}
     * @memberof PersonaSet
     */
    personas?: Array<Persona>;
    /**
     * A persona set in preview mode will not build until preview is turned off.
     * @type {boolean}
     * @memberof PersonaSet
     */
    preview?: boolean;
    /**
     * The type of this resource.
     * @type {string}
     * @memberof PersonaSet
     */
    resource_type: string;
    /**
     * 
     * @type {ResourceStatus}
     * @memberof PersonaSet
     */
    status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {string}
     * @memberof PersonaSet
     */
    status_changed_at?: string;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof PersonaSet
     */
    status_error?: string;
    /**
     * When this resource was last updated.
     * @type {string}
     * @memberof PersonaSet
     */
    updated_at: string;
}
/**
 * 
 * @export
 * @interface PersonaSetAnalysisDimensions
 */
export interface PersonaSetAnalysisDimensions {
    /**
     * 
     * @type {string}
     * @memberof PersonaSetAnalysisDimensions
     */
    persona_id: string;
    /**
     * A list of counts and percents about the persona set based on a predefined list of traits, including the traits used to model the persona set.
     * @type {Array<AnalysisDimensionsTrait>}
     * @memberof PersonaSetAnalysisDimensions
     */
    traits?: Array<AnalysisDimensionsTrait>;
}
/**
 * 
 * @export
 * @interface PersonaSetAnalysisFlow
 */
export interface PersonaSetAnalysisFlow extends Array<PersonaSetAnalysisFlowPersona> {
}
/**
 * 
 * @export
 * @interface PersonaSetAnalysisFlowPersona
 */
export interface PersonaSetAnalysisFlowPersona {
    /**
     * A series of dates each with a count for the invidiuals that match that persona.
     * @type {Array<PersonaSetAnalysisFlowPersonaDate>}
     * @memberof PersonaSetAnalysisFlowPersona
     */
    days: Array<PersonaSetAnalysisFlowPersonaDate>;
    /**
     * 
     * @type {string}
     * @memberof PersonaSetAnalysisFlowPersona
     */
    persona_id: string;
}
/**
 * 
 * @export
 * @interface PersonaSetAnalysisFlowPersonaDate
 */
export interface PersonaSetAnalysisFlowPersonaDate {
    /**
     * The number of members of this persona on this date
     * @type {number}
     * @memberof PersonaSetAnalysisFlowPersonaDate
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof PersonaSetAnalysisFlowPersonaDate
     */
    date: string;
}
/**
 * (Parameters used to PATCH the `PersonaSet` type.)
 * 
 * A set of customer personas.
 * @export
 * @interface PersonaSetMergePatch
 */
export interface PersonaSetMergePatch {
    /**
     * Whether to show the persona set in Explore, the map view on https://app.faraday.ai.
     * 
     * This will slow down persona set builds.
     * @type {boolean}
     * @memberof PersonaSetMergePatch
     */
    explore?: boolean | null;
    /**
     * Human-readable label for this persona set.
     * @type {string}
     * @memberof PersonaSetMergePatch
     */
    name?: string;
    /**
     * Specify the exact number of clusters (i.e. personas) there should be in the persona set.
     * 
     * By default, the optimal value for this parameter is determined automatically.
     * 
     * Setting this requires external knowledge and should only be done when the use-case necessitates a specific number of clusters.
     * @type {number}
     * @memberof PersonaSetMergePatch
     */
    number_of_clusters?: number | null;
    /**
     * A persona set in preview mode will not build until preview is turned off.
     * @type {boolean}
     * @memberof PersonaSetMergePatch
     */
    preview?: boolean | null;
}
/**
 * (Parameters used to POST a new value of the `PersonaSet` type.)
 * 
 * A set of customer personas.
 * @export
 * @interface PersonaSetPost
 */
export interface PersonaSetPost {
    /**
     * 
     * @type {string}
     * @memberof PersonaSetPost
     */
    cohort_id: string;
    /**
     * Whether to show the persona set in Explore, the map view on https://app.faraday.ai.
     * 
     * This will slow down persona set builds.
     * @type {boolean}
     * @memberof PersonaSetPost
     */
    explore?: boolean;
    /**
     * Specify customer attributes to use in modeling
     * @type {Array<ModelingField>}
     * @memberof PersonaSetPost
     */
    modeling_fields?: Array<ModelingField>;
    /**
     * Human-readable label for this persona set.
     * @type {string}
     * @memberof PersonaSetPost
     */
    name: string;
    /**
     * Specify the exact number of clusters (i.e. personas) there should be in the persona set.
     * 
     * By default, the optimal value for this parameter is determined automatically.
     * 
     * Setting this requires external knowledge and should only be done when the use-case necessitates a specific number of clusters.
     * @type {number}
     * @memberof PersonaSetPost
     */
    number_of_clusters?: number;
    /**
     * A persona set in preview mode will not build until preview is turned off.
     * @type {boolean}
     * @memberof PersonaSetPost
     */
    preview?: boolean;
}
/**
 * (Parameters used to PUT a value of the `PersonaSet` type.)
 * 
 * A set of customer personas.
 * @export
 * @interface PersonaSetPut
 */
export interface PersonaSetPut {
    /**
     * Whether to show the persona set in Explore, the map view on https://app.faraday.ai.
     * 
     * This will slow down persona set builds.
     * @type {boolean}
     * @memberof PersonaSetPut
     */
    explore?: boolean;
    /**
     * Human-readable label for this persona set.
     * @type {string}
     * @memberof PersonaSetPut
     */
    name: string;
    /**
     * Specify the exact number of clusters (i.e. personas) there should be in the persona set.
     * 
     * By default, the optimal value for this parameter is determined automatically.
     * 
     * Setting this requires external knowledge and should only be done when the use-case necessitates a specific number of clusters.
     * @type {number}
     * @memberof PersonaSetPut
     */
    number_of_clusters?: number;
    /**
     * A persona set in preview mode will not build until preview is turned off.
     * @type {boolean}
     * @memberof PersonaSetPut
     */
    preview?: boolean;
}
/**
 * A geospatial area or set of addresses which can be used as a spatial filter when defining other resources.
 * @export
 * @interface Place
 */
export interface Place {
    /**
     * 
     * @type {Array<AddressInfo>}
     * @memberof Place
     */
    addresses?: Array<AddressInfo>;
    /**
     * If not null, this resource will no longer receive updates, but will still be visable.
     * @type {string}
     * @memberof Place
     */
    archived_at?: string;
    /**
     * When this resource was created.
     * @type {string}
     * @memberof Place
     */
    created_at: string;
    /**
     * A GeoJSON Geometry, as defined in the [GeoJSON specification](https://www.rfc-editor.org/rfc/rfc7946#section-3.1)
     * 
     * The longitude and latitude units of this geometry are expected to be in decimal degrees, using the 
     * WGS84 coordinate reference system, also known by the SRID 4326. https://www.rfc-editor.org/rfc/rfc7946#section-4
     * @type {object}
     * @memberof Place
     */
    geojson?: object;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof Place
     */
    id: string;
    /**
     * The last time this resource's input was read.
     * @type {string}
     * @memberof Place
     */
    last_read_input_at?: string;
    /**
     * The last time this resource's configuration was updated. If this is more recent than last_updated_output_at, the resource will be rebuilt.
     * @type {string}
     * @memberof Place
     */
    last_updated_config_at?: string;
    /**
     * The last time this resource successfully built.
     * @type {string}
     * @memberof Place
     */
    last_updated_output_at?: string;
    /**
     * Human-readable label for this place. Names must be unique. Uniqueness is case-insensitive.
     * @type {string}
     * @memberof Place
     */
    name: string;
    /**
     * The type of this resource.
     * @type {string}
     * @memberof Place
     */
    resource_type: string;
    /**
     * 
     * @type {ResourceStatus}
     * @memberof Place
     */
    status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {string}
     * @memberof Place
     */
    status_changed_at?: string;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof Place
     */
    status_error?: string;
    /**
     * When this resource was last updated.
     * @type {string}
     * @memberof Place
     */
    updated_at: string;
}
/**
 * (Parameters used to PATCH the `Place` type.)
 * 
 * A geospatial area or set of addresses which can be used as a spatial filter when defining other resources.
 * @export
 * @interface PlaceMergePatch
 */
export interface PlaceMergePatch {
    /**
     * 
     * @type {Array<AddressInfo>}
     * @memberof PlaceMergePatch
     */
    addresses?: Array<AddressInfo> | null;
    /**
     * A GeoJSON Geometry, as defined in the [GeoJSON specification](https://www.rfc-editor.org/rfc/rfc7946#section-3.1)
     * 
     * The longitude and latitude units of this geometry are expected to be in decimal degrees, using the 
     * WGS84 coordinate reference system, also known by the SRID 4326. https://www.rfc-editor.org/rfc/rfc7946#section-4
     * @type {object}
     * @memberof PlaceMergePatch
     */
    geojson?: object | null;
    /**
     * Human-readable label for this place. Names must be unique. Uniqueness is case-insensitive.
     * @type {string}
     * @memberof PlaceMergePatch
     */
    name?: string;
}
/**
 * (Parameters used to POST a new value of the `Place` type.)
 * 
 * A geospatial area or set of addresses which can be used as a spatial filter when defining other resources.
 * @export
 * @interface PlacePost
 */
export interface PlacePost {
    /**
     * 
     * @type {Array<AddressInfo>}
     * @memberof PlacePost
     */
    addresses?: Array<AddressInfo>;
    /**
     * A GeoJSON Geometry, as defined in the [GeoJSON specification](https://www.rfc-editor.org/rfc/rfc7946#section-3.1)
     * 
     * The longitude and latitude units of this geometry are expected to be in decimal degrees, using the 
     * WGS84 coordinate reference system, also known by the SRID 4326. https://www.rfc-editor.org/rfc/rfc7946#section-4
     * @type {object}
     * @memberof PlacePost
     */
    geojson?: object;
    /**
     * Human-readable label for this place. Names must be unique. Uniqueness is case-insensitive.
     * @type {string}
     * @memberof PlacePost
     */
    name: string;
}
/**
 * (Parameters used to PUT a value of the `Place` type.)
 * 
 * A geospatial area or set of addresses which can be used as a spatial filter when defining other resources.
 * @export
 * @interface PlacePut
 */
export interface PlacePut {
    /**
     * 
     * @type {Array<AddressInfo>}
     * @memberof PlacePut
     */
    addresses?: Array<AddressInfo>;
    /**
     * A GeoJSON Geometry, as defined in the [GeoJSON specification](https://www.rfc-editor.org/rfc/rfc7946#section-3.1)
     * 
     * The longitude and latitude units of this geometry are expected to be in decimal degrees, using the 
     * WGS84 coordinate reference system, also known by the SRID 4326. https://www.rfc-editor.org/rfc/rfc7946#section-4
     * @type {object}
     * @memberof PlacePut
     */
    geojson?: object;
    /**
     * Human-readable label for this place. Names must be unique. Uniqueness is case-insensitive.
     * @type {string}
     * @memberof PlacePut
     */
    name: string;
}
/**
 * The data type of a column in table, or of a trait. Types are expressed using a subset of
 * [Avro](https://avro.apache.org/docs/current/spec.html). Possible values include:
 * 
 * - boolean: A Boolean value.
 * - long: A 64-bit integer.
 * - double: A 64-bit float.
 * - string: A Unicode string, possibly representing categorical data.
 * - date: A date with no reference to time of day.
 * @export
 * @enum {string}
 */
export enum PrimitiveDataType {
    Boolean = 'boolean',
    Long = 'long',
    Double = 'double',
    String = 'string',
    Date = 'date'
}
/**
 * Basing cohort on recency of event
 * @export
 * @interface Recency
 */
export interface Recency {
    /**
     * Event must have occurred no more than N days ago
     * @type {number}
     * @memberof Recency
     */
    max_days?: number;
    /**
     * Event must have occurred at least N days ago
     * @type {number}
     * @memberof Recency
     */
    min_days?: number;
    /**
     * 
     * @type {RecencyOccurrence}
     * @memberof Recency
     */
    occurrence: RecencyOccurrence;
}
/**
 * (Parameters used to PATCH the `Recency` type.)
 * 
 * Basing cohort on recency of event
 * @export
 * @interface RecencyMergePatch
 */
export interface RecencyMergePatch {
    /**
     * Event must have occurred no more than N days ago
     * @type {number}
     * @memberof RecencyMergePatch
     */
    max_days?: number | null;
    /**
     * Event must have occurred at least N days ago
     * @type {number}
     * @memberof RecencyMergePatch
     */
    min_days?: number | null;
    /**
     * 
     * @type {RecencyOccurrence}
     * @memberof RecencyMergePatch
     */
    occurrence?: RecencyOccurrence;
}
/**
 * What event to pay attention to
 * @export
 * @enum {string}
 */
export enum RecencyOccurrence {
    First = 'first',
    Last = 'last'
}
/**
 * (Parameters used to POST a new value of the `Recency` type.)
 * 
 * Basing cohort on recency of event
 * @export
 * @interface RecencyPost
 */
export interface RecencyPost {
    /**
     * Event must have occurred no more than N days ago
     * @type {number}
     * @memberof RecencyPost
     */
    max_days?: number;
    /**
     * Event must have occurred at least N days ago
     * @type {number}
     * @memberof RecencyPost
     */
    min_days?: number;
    /**
     * 
     * @type {RecencyOccurrence}
     * @memberof RecencyPost
     */
    occurrence: RecencyOccurrence;
}
/**
 * (Parameters used to PUT a value of the `Recency` type.)
 * 
 * Basing cohort on recency of event
 * @export
 * @interface RecencyPut
 */
export interface RecencyPut {
    /**
     * Event must have occurred no more than N days ago
     * @type {number}
     * @memberof RecencyPut
     */
    max_days?: number;
    /**
     * Event must have occurred at least N days ago
     * @type {number}
     * @memberof RecencyPut
     */
    min_days?: number;
    /**
     * 
     * @type {RecencyOccurrence}
     * @memberof RecencyPut
     */
    occurrence: RecencyOccurrence;
}
/**
 * Configuration for recode transformations.
 * @export
 * @interface RecodeConfig
 */
export interface RecodeConfig {
    /**
     * A mapping of source values to target values
     * @type {object}
     * @memberof RecodeConfig
     */
    map?: object;
    /**
     * SQL expression for transformation
     * @type {string}
     * @memberof RecodeConfig
     */
    sql?: string;
}
/**
 * Recommender resources are used to predict future associations (e.g. future purchase). They are based on an event stream containing all previous associations such as an order event stream or a product rating event stream
 * 
 * This feature is experimental and subject to change. To enable this feature, contact your account manager.
 * @export
 * @interface Recommender
 */
export interface Recommender {
    /**
     * If not null, this resource will no longer receive updates, but will still be visable.
     * @type {string}
     * @memberof Recommender
     */
    archived_at?: string;
    /**
     * When this resource was created.
     * @type {string}
     * @memberof Recommender
     */
    created_at: string;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof Recommender
     */
    id: string;
    /**
     * The last time this resource's input was read.
     * @type {string}
     * @memberof Recommender
     */
    last_read_input_at?: string;
    /**
     * The last time this resource's configuration was updated. If this is more recent than last_updated_output_at, the resource will be rebuilt.
     * @type {string}
     * @memberof Recommender
     */
    last_updated_config_at?: string;
    /**
     * The last time this resource successfully built.
     * @type {string}
     * @memberof Recommender
     */
    last_updated_output_at?: string;
    /**
     * Human-readable label for this recommender. Each recommender must have a unique name.
     * @type {string}
     * @memberof Recommender
     */
    name: string;
    /**
     * A recommender in preview mode will not build until preview is turned off.
     * @type {boolean}
     * @memberof Recommender
     */
    preview?: boolean;
    /**
     * URL of an HTML report containing information such as the objective of the model, performance, and important features.
     * @type {string}
     * @memberof Recommender
     */
    report_url?: string;
    /**
     * The type of this resource.
     * @type {string}
     * @memberof Recommender
     */
    resource_type: string;
    /**
     * 
     * @type {ResourceStatus}
     * @memberof Recommender
     */
    status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {string}
     * @memberof Recommender
     */
    status_changed_at?: string;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof Recommender
     */
    status_error?: string;
    /**
     * Name of the stream to use for recommendations
     * @type {string}
     * @memberof Recommender
     */
    stream_name: string;
    /**
     * Name of the stream property
     * @type {string}
     * @memberof Recommender
     */
    stream_property_name: string;
    /**
     * When this resource was last updated.
     * @type {string}
     * @memberof Recommender
     */
    updated_at: string;
}
/**
 * 
 * @export
 * @interface RecommenderAnalysis
 */
export interface RecommenderAnalysis {
    /**
     * 
     * @type {RecommenderAnalysisOverallFeatures}
     * @memberof RecommenderAnalysis
     */
    overall_features?: RecommenderAnalysisOverallFeatures;
    /**
     * 
     * @type {RecommenderAnalysisPerformance}
     * @memberof RecommenderAnalysis
     */
    performance?: RecommenderAnalysisPerformance;
}
/**
 * 
 * @export
 * @interface RecommenderAnalysisAccuracyThreshold
 */
export interface RecommenderAnalysisAccuracyThreshold {
    /**
     * The cumulative accuracy of the model at the given threshold.
     * @type {number}
     * @memberof RecommenderAnalysisAccuracyThreshold
     */
    accuracy: number;
    /**
     * The threshold (i.e. top N recommendations to consider) to evaluate the model's accuracy.
     * 
     * For example, if the threshold is 10, the model's accuracy is calculated by considering the top 10 recommendations.
     * That is what proportion of the top 10 recommendations for each identity contains the true label.
     * 
     * Note: the threshold is an integer value ranging from 1 to the number of properties.
     * @type {number}
     * @memberof RecommenderAnalysisAccuracyThreshold
     */
    threshold: number;
}
/**
 * 
 * @export
 * @interface RecommenderAnalysisOverallFeatures
 */
export interface RecommenderAnalysisOverallFeatures {
    /**
     * 
     * @type {Array<RecommenderFeatureData>}
     * @memberof RecommenderAnalysisOverallFeatures
     */
    new_and_recognized_individuals?: Array<RecommenderFeatureData>;
    /**
     * 
     * @type {Array<RecommenderFeatureData>}
     * @memberof RecommenderAnalysisOverallFeatures
     */
    new_and_unrecognized_individuals?: Array<RecommenderFeatureData>;
    /**
     * 
     * @type {Array<RecommenderFeatureData>}
     * @memberof RecommenderAnalysisOverallFeatures
     */
    repeat_and_recognized_individuals?: Array<RecommenderFeatureData>;
    /**
     * 
     * @type {Array<RecommenderFeatureData>}
     * @memberof RecommenderAnalysisOverallFeatures
     */
    repeat_and_unrecognized_individuals?: Array<RecommenderFeatureData>;
}
/**
 * 
 * @export
 * @interface RecommenderAnalysisPerformance
 */
export interface RecommenderAnalysisPerformance {
    /**
     * 
     * @type {RecommenderAnalysisPerformanceMetaModel}
     * @memberof RecommenderAnalysisPerformance
     */
    meta_model: RecommenderAnalysisPerformanceMetaModel;
}
/**
 * 
 * @export
 * @interface RecommenderAnalysisPerformanceMetaModel
 */
export interface RecommenderAnalysisPerformanceMetaModel {
    /**
     * 
     * @type {RecommenderPerformanceModel}
     * @memberof RecommenderAnalysisPerformanceMetaModel
     */
    new_and_recognized_individuals?: RecommenderPerformanceModel;
    /**
     * 
     * @type {RecommenderPerformanceModel}
     * @memberof RecommenderAnalysisPerformanceMetaModel
     */
    new_and_unrecognized_individuals?: RecommenderPerformanceModel;
    /**
     * 
     * @type {RecommenderPerformanceModel}
     * @memberof RecommenderAnalysisPerformanceMetaModel
     */
    overall: RecommenderPerformanceModel;
    /**
     * 
     * @type {RecommenderPerformanceModel}
     * @memberof RecommenderAnalysisPerformanceMetaModel
     */
    repeat_and_recognized_individuals?: RecommenderPerformanceModel;
    /**
     * 
     * @type {RecommenderPerformanceModel}
     * @memberof RecommenderAnalysisPerformanceMetaModel
     */
    repeat_and_unrecognized_individuals?: RecommenderPerformanceModel;
}
/**
 * 
 * @export
 * @interface RecommenderAnalysisPropertyDistribution
 */
export interface RecommenderAnalysisPropertyDistribution {
    /**
     * Average rank of a given property in the cross-validation dataset.
     * @type {number}
     * @memberof RecommenderAnalysisPropertyDistribution
     */
    avg_rank: number;
    /**
     * Average rank of the true label in the cross-validation dataset for a given property.
     * @type {number}
     * @memberof RecommenderAnalysisPropertyDistribution
     */
    avg_rank_true_label?: number;
    /**
     * Name of a property.
     * @type {string}
     * @memberof RecommenderAnalysisPropertyDistribution
     */
    property: string;
    /**
     * Fraction of the cross-validation identities assigned a given property as top property.
     * @type {number}
     * @memberof RecommenderAnalysisPropertyDistribution
     */
    proportion: number;
}
/**
 * Data to construct a ROC curve. Each point consists of a false positive rate `x`, an estimated true positive rate `y` corresponding to `x`. Note that y is the mean value of the true positive rate across all cross-validation folds.
 * @export
 * @interface RecommenderAnalysisRocCurvePoint
 */
export interface RecommenderAnalysisRocCurvePoint {
    /**
     * A given false positive rate.
     * @type {number}
     * @memberof RecommenderAnalysisRocCurvePoint
     */
    x: number;
    /**
     * The estimated true positive rate corresponding to `x`.
     * @type {number}
     * @memberof RecommenderAnalysisRocCurvePoint
     */
    y: number;
}
/**
 * 
 * @export
 * @interface RecommenderFeatureData
 */
export interface RecommenderFeatureData {
    /**
     * The category of the feature.
     * @type {string}
     * @memberof RecommenderFeatureData
     */
    category: string;
    /**
     * 
     * @type {Array<AnalysisFeatureDirectionality>}
     * @memberof RecommenderFeatureData
     */
    directionality: Array<AnalysisFeatureDirectionality>;
    /**
     * The importance of the feature
     * @type {number}
     * @memberof RecommenderFeatureData
     */
    importance: number;
    /**
     * The human-readable description of the feature.
     * @type {string}
     * @memberof RecommenderFeatureData
     */
    literate: string;
    /**
     * The identifier for the feature.
     * @type {string}
     * @memberof RecommenderFeatureData
     */
    name: string;
    /**
     * The human-readable name of the feature.
     * @type {string}
     * @memberof RecommenderFeatureData
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `Recommender` type.)
 * 
 * Recommender resources are used to predict future associations (e.g. future purchase). They are based on an event stream containing all previous associations such as an order event stream or a product rating event stream
 * 
 * This feature is experimental and subject to change. To enable this feature, contact your account manager.
 * @export
 * @interface RecommenderMergePatch
 */
export interface RecommenderMergePatch {
    /**
     * Human-readable label for this recommender. Each recommender must have a unique name.
     * @type {string}
     * @memberof RecommenderMergePatch
     */
    name?: string;
    /**
     * A recommender in preview mode will not build until preview is turned off.
     * @type {boolean}
     * @memberof RecommenderMergePatch
     */
    preview?: boolean | null;
    /**
     * Name of the stream to use for recommendations
     * @type {string}
     * @memberof RecommenderMergePatch
     */
    stream_name?: string;
    /**
     * Name of the stream property
     * @type {string}
     * @memberof RecommenderMergePatch
     */
    stream_property_name?: string;
}
/**
 * 
 * @export
 * @interface RecommenderPerformanceModel
 */
export interface RecommenderPerformanceModel {
    /**
     * 
     * @type {Array<RecommenderAnalysisAccuracyThreshold>}
     * @memberof RecommenderPerformanceModel
     */
    accuracy_per_threshold: Array<RecommenderAnalysisAccuracyThreshold>;
    /**
     * Average rank of the true label in the cross-validation dataset for a given property.
     * @type {number}
     * @memberof RecommenderPerformanceModel
     */
    avg_rank_true_label?: number;
    /**
     * 
     * @type {Array<RecommenderAnalysisPropertyDistribution>}
     * @memberof RecommenderPerformanceModel
     */
    property_distribution: Array<RecommenderAnalysisPropertyDistribution>;
    /**
     * The area under the receiver operating characteristic curve.
     * @type {number}
     * @memberof RecommenderPerformanceModel
     */
    roc_auc: number;
    /**
     * 
     * @type {Array<AnalysisRocCurvePoint>}
     * @memberof RecommenderPerformanceModel
     */
    roc_curve: Array<AnalysisRocCurvePoint>;
}
/**
 * (Parameters used to POST a new value of the `Recommender` type.)
 * 
 * Recommender resources are used to predict future associations (e.g. future purchase). They are based on an event stream containing all previous associations such as an order event stream or a product rating event stream
 * 
 * This feature is experimental and subject to change. To enable this feature, contact your account manager.
 * @export
 * @interface RecommenderPost
 */
export interface RecommenderPost {
    /**
     * Human-readable label for this recommender. Each recommender must have a unique name.
     * @type {string}
     * @memberof RecommenderPost
     */
    name: string;
    /**
     * A recommender in preview mode will not build until preview is turned off.
     * @type {boolean}
     * @memberof RecommenderPost
     */
    preview?: boolean;
    /**
     * Name of the stream to use for recommendations
     * @type {string}
     * @memberof RecommenderPost
     */
    stream_name: string;
    /**
     * Name of the stream property
     * @type {string}
     * @memberof RecommenderPost
     */
    stream_property_name: string;
}
/**
 * (Parameters used to PUT a value of the `Recommender` type.)
 * 
 * Recommender resources are used to predict future associations (e.g. future purchase). They are based on an event stream containing all previous associations such as an order event stream or a product rating event stream
 * 
 * This feature is experimental and subject to change. To enable this feature, contact your account manager.
 * @export
 * @interface RecommenderPut
 */
export interface RecommenderPut {
    /**
     * Human-readable label for this recommender. Each recommender must have a unique name.
     * @type {string}
     * @memberof RecommenderPut
     */
    name: string;
    /**
     * A recommender in preview mode will not build until preview is turned off.
     * @type {boolean}
     * @memberof RecommenderPut
     */
    preview?: boolean;
    /**
     * Name of the stream to use for recommendations
     * @type {string}
     * @memberof RecommenderPut
     */
    stream_name: string;
    /**
     * Name of the stream property
     * @type {string}
     * @memberof RecommenderPut
     */
    stream_property_name: string;
}
/**
 * Fields shared between all resource types.
 * @export
 * @interface Resource
 */
export interface Resource {
    /**
     * If not null, this resource will no longer receive updates, but will still be visable.
     * @type {string}
     * @memberof Resource
     */
    archived_at?: string;
    /**
     * When this resource was created.
     * @type {string}
     * @memberof Resource
     */
    created_at: string;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof Resource
     */
    id: string;
    /**
     * The last time this resource's input was read.
     * @type {string}
     * @memberof Resource
     */
    last_read_input_at?: string;
    /**
     * The last time this resource's configuration was updated. If this is more recent than last_updated_output_at, the resource will be rebuilt.
     * @type {string}
     * @memberof Resource
     */
    last_updated_config_at?: string;
    /**
     * The last time this resource successfully built.
     * @type {string}
     * @memberof Resource
     */
    last_updated_output_at?: string;
    /**
     * The type of this resource.
     * @type {string}
     * @memberof Resource
     */
    resource_type: string;
    /**
     * 
     * @type {ResourceStatus}
     * @memberof Resource
     */
    status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {string}
     * @memberof Resource
     */
    status_changed_at?: string;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof Resource
     */
    status_error?: string;
    /**
     * When this resource was last updated.
     * @type {string}
     * @memberof Resource
     */
    updated_at: string;
}
/**
 * The current state of this resource and any updates.
 * @export
 * @enum {string}
 */
export enum ResourceStatus {
    New = 'new',
    Starting = 'starting',
    Running = 'running',
    Ready = 'ready',
    Error = 'error'
}
/**
 * The type of a resource which is available via the REST SDK.
 * @export
 * @enum {string}
 */
export enum ResourceType {
    Accounts = 'accounts',
    Attributes = 'attributes',
    Cohorts = 'cohorts',
    Connections = 'connections',
    Datasets = 'datasets',
    FeatureStores = 'feature_stores',
    MarketOpportunityAnalyses = 'market_opportunity_analyses',
    Outcomes = 'outcomes',
    PersonaSets = 'persona_sets',
    Places = 'places',
    Recommenders = 'recommenders',
    Scopes = 'scopes',
    Streams = 'streams',
    Targets = 'targets',
    Traits = 'traits'
}
/**
 * @type RotateCredentialsRequest
 * Request to rotate credentials for a connection. Uses a type discriminator to support
 * different credential rotation options for different connection types.
 * @export
 */
export type RotateCredentialsRequest = { type: 'snowflake' } & SnowflakeRotateCredentialsRequest;
/**
 * Instructions on how to produce output data.
 * @export
 * @interface Scope
 */
export interface Scope {
    /**
     * If not null, this resource will no longer receive updates, but will still be visable.
     * @type {string}
     * @memberof Scope
     */
    archived_at?: string;
    /**
     * 
     * @type {ScopeColumns}
     * @memberof Scope
     */
    columns?: ScopeColumns;
    /**
     * When this resource was created.
     * @type {string}
     * @memberof Scope
     */
    created_at: string;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof Scope
     */
    id: string;
    /**
     * The last time this resource's input was read.
     * @type {string}
     * @memberof Scope
     */
    last_read_input_at?: string;
    /**
     * The last time this resource's configuration was updated. If this is more recent than last_updated_output_at, the resource will be rebuilt.
     * @type {string}
     * @memberof Scope
     */
    last_updated_config_at?: string;
    /**
     * The last time this resource successfully built.
     * @type {string}
     * @memberof Scope
     */
    last_updated_output_at?: string;
    /**
     * Human-readable label for this scope. Each scope must have a unique name.
     * @type {string}
     * @memberof Scope
     */
    name: string;
    /**
     * 
     * @type {ScopePayload}
     * @memberof Scope
     */
    payload: ScopePayload;
    /**
     * 
     * @type {ScopePopulation}
     * @memberof Scope
     */
    population: ScopePopulation;
    /**
     * Count of the population. If a person appears in multiple cohorts, they are only counted once.
     * @type {number}
     * @memberof Scope
     */
    population_count?: number;
    /**
     * Residence count of the population. If a residence appears in multiple cohorts, it is only counted once.
     * @type {number}
     * @memberof Scope
     */
    population_residence_count?: number;
    /**
     * A preview scope provides only a limited number of output records, but
     * it is not billed.
     * @type {boolean}
     * @memberof Scope
     */
    preview: boolean;
    /**
     * The type of this resource.
     * @type {string}
     * @memberof Scope
     */
    resource_type: string;
    /**
     * 
     * @type {ResourceStatus}
     * @memberof Scope
     */
    status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {string}
     * @memberof Scope
     */
    status_changed_at?: string;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof Scope
     */
    status_error?: string;
    /**
     * When this resource was last updated.
     * @type {string}
     * @memberof Scope
     */
    updated_at: string;
}
/**
 * 
 * @export
 * @interface ScopeAnalysis
 */
export interface ScopeAnalysis {
    /**
     * 
     * @type {Array<ScopeAnalysisPayloadResource>}
     * @memberof ScopeAnalysis
     */
    outcomes?: Array<ScopeAnalysisPayloadResource>;
    /**
     * 
     * @type {Array<ScopeAnalysisPayloadResource>}
     * @memberof ScopeAnalysis
     */
    recommenders?: Array<ScopeAnalysisPayloadResource>;
}
/**
 * 
 * @export
 * @interface ScopeAnalysisPayloadResource
 */
export interface ScopeAnalysisPayloadResource {
    /**
     * 
     * @type {string}
     * @memberof ScopeAnalysisPayloadResource
     */
    id: string;
    /**
     * 
     * @type {Array<ScopeAnalysisProbabilityDistributionDatum>}
     * @memberof ScopeAnalysisPayloadResource
     */
    probability_distribution: Array<ScopeAnalysisProbabilityDistributionDatum>;
}
/**
 * Each probability distribution is a 100-element array, with each value representing the number of inividuals (or in the case of recommender, recommendations) falling within that distribution bin, both the scope and the original objective's eligible class.
 * @export
 * @interface ScopeAnalysisProbabilityDistributionDatum
 */
export interface ScopeAnalysisProbabilityDistributionDatum {
    /**
     * 
     * @type {number}
     * @memberof ScopeAnalysisProbabilityDistributionDatum
     */
    bin_index: number;
    /**
     * 
     * @type {number}
     * @memberof ScopeAnalysisProbabilityDistributionDatum
     */
    bin_mid_point: number;
    /**
     * 
     * @type {number}
     * @memberof ScopeAnalysisProbabilityDistributionDatum
     */
    eligible: number;
    /**
     * 
     * @type {number}
     * @memberof ScopeAnalysisProbabilityDistributionDatum
     */
    scope: number;
}
/**
 * Metadata about the columns in this scope. Useful for advanced target configuration.
 * @export
 * @interface ScopeColumns
 */
export interface ScopeColumns {
    /**
     * 
     * @type {ScopeColumnsColumnsForMode}
     * @memberof ScopeColumns
     */
    columns_for_mode: ScopeColumnsColumnsForMode;
    /**
     * First party identifiers from all dataset `identity_sets` populating this scope.
     * @type {Array<string>}
     * @memberof ScopeColumns
     */
    identity_columns: Array<string>;
    /**
     * Payload columns. The shape is a 1:1 mapping of machine-readable payload column names to human-readable column names.
     * @type {Array<ScopePayloadColumn>}
     * @memberof ScopeColumns
     */
    payload_columns: Array<ScopePayloadColumn>;
}
/**
 * Available columns for different modes of target export.
 * @export
 * @interface ScopeColumnsColumnsForMode
 */
export interface ScopeColumnsColumnsForMode {
    /**
     * 
     * @type {ScopeColumnsForMode}
     * @memberof ScopeColumnsColumnsForMode
     */
    aggregated?: ScopeColumnsForMode;
    /**
     * 
     * @type {ScopeColumnsForMode}
     * @memberof ScopeColumnsColumnsForMode
     */
    hashed?: ScopeColumnsForMode;
    /**
     * 
     * @type {ScopeColumnsForMode}
     * @memberof ScopeColumnsColumnsForMode
     */
    identified?: ScopeColumnsForMode;
    /**
     * 
     * @type {ScopeColumnsForMode}
     * @memberof ScopeColumnsColumnsForMode
     */
    referenced?: ScopeColumnsForMode;
}
/**
 * Available columns for a given mode of target export.
 * @export
 * @interface ScopeColumnsForMode
 */
export interface ScopeColumnsForMode extends Array<TargetStructureTransformation> {
}
/**
 * 
 * The efficacy report allows you to measure the performance of Faraday’s predictions in comparison with real conversions. This report can help you assess whether our predictions are performing as expected, and if not, can indicate that something should be looked into.
 * 
 * In order for an efficacy report to be effective, the pipeline and objective you select should be built using data from an active connection to your data source. Without an active connection, Faraday will be unable to communicate with your data to verify outcome attainment or recommender events over time, which will result in an incomplete report.
 * 
 * This endpoint’s data is available only for scopes with payload outcomes that include date-based eligible and attainment cohorts. The data is generated monthly, starting from the first month after the scope is created, and is rebuilt on the first day of each month.
 * @export
 * @interface ScopeEfficacy
 */
export interface ScopeEfficacy {
    /**
     * 
     * @type {Array<ScopeEfficacyOutcome>}
     * @memberof ScopeEfficacy
     */
    outcomes?: Array<ScopeEfficacyOutcome>;
}
/**
 * The report breaks down the outcome’s attainment by month and limited to the most recent 12 month window.
 * @export
 * @interface ScopeEfficacyOutcome
 */
export interface ScopeEfficacyOutcome {
    /**
     * The ID of the outcome in the scope payload.
     * @type {string}
     * @memberof ScopeEfficacyOutcome
     */
    id: string;
    /**
     * 
     * @type {Array<ScopeEfficacyOutcomeMonth>}
     * @memberof ScopeEfficacyOutcome
     */
    months: Array<ScopeEfficacyOutcomeMonth>;
}
/**
 * 
 * @export
 * @interface ScopeEfficacyOutcomeMonth
 */
export interface ScopeEfficacyOutcomeMonth {
    /**
     * Calculated attainment window for a new outcome. This is only possible for outcomes which have a dated attainment & eligible cohort. The attainment window is the 80th percentile of the weighted time between when a person becomes eligible and when they attain. We weight scores by (1 / <num quarters ago attainment occurred>) so that more recent attainments are more heavily weighted.
     * @type {number}
     * @memberof ScopeEfficacyOutcomeMonth
     */
    attainment_window: number;
    /**
     * 
     * @type {number}
     * @memberof ScopeEfficacyOutcomeMonth
     */
    gross_attainments: number;
    /**
     * 
     * @type {number}
     * @memberof ScopeEfficacyOutcomeMonth
     */
    month: number;
    /**
     * 
     * @type {number}
     * @memberof ScopeEfficacyOutcomeMonth
     */
    net_attainments: number;
    /**
     * Breaks down the outcome’s net attainment by decile which represent groups of individuals based on their predicted scores, for example, the top decile are the scorers that fall in the top 10% of scores.
     * @type {Array<number>}
     * @memberof ScopeEfficacyOutcomeMonth
     */
    net_attainments_by_decile: Array<number>;
    /**
     * How the distribution performed against the outcome's performance reporting.
     * @type {string}
     * @memberof ScopeEfficacyOutcomeMonth
     */
    performed: ScopeEfficacyOutcomeMonthPerformedEnum;
    /**
     * 
     * @type {number}
     * @memberof ScopeEfficacyOutcomeMonth
     */
    year: number;
}

/**
* @export
* @enum {string}
*/
export enum ScopeEfficacyOutcomeMonthPerformedEnum {
    Equal = 'equal',
    GreaterThan = 'greater_than',
    LessThan = 'less_than'
}
/**
 * (Parameters used to PATCH the `Scope` type.)
 * 
 * Instructions on how to produce output data.
 * @export
 * @interface ScopeMergePatch
 */
export interface ScopeMergePatch {
    /**
     * Human-readable label for this scope. Each scope must have a unique name.
     * @type {string}
     * @memberof ScopeMergePatch
     */
    name?: string;
    /**
     * 
     * @type {ScopePayloadMergePatch}
     * @memberof ScopeMergePatch
     */
    payload?: ScopePayloadMergePatch;
    /**
     * 
     * @type {ScopePopulationMergePatch}
     * @memberof ScopeMergePatch
     */
    population?: ScopePopulationMergePatch;
    /**
     * A preview scope provides only a limited number of output records, but
     * it is not billed.
     * @type {boolean}
     * @memberof ScopeMergePatch
     */
    preview?: boolean;
}
/**
 * The data to include for each person in this scope.
 * @export
 * @interface ScopePayload
 */
export interface ScopePayload {
    /**
     * Include additional traits.
     * 
     * For traits created through `output_to_traits` via `/datasets`, specify the trait name.
     * 
     * For traits from Faraday's Internal Graph (FIG), specify the name prefixed by `fig/` ex. `fig/age`.
     * @type {Array<string>}
     * @memberof ScopePayload
     */
    attributes?: Array<string>;
    /**
     * Specify a list of cohort membership(s) to include. The list can include any cohort, not just those in `population.cohort_ids`.
     * @type {Array<string>}
     * @memberof ScopePayload
     */
    cohort_ids?: Array<string>;
    /**
     * Opt-in to include prediction explainability.
     * @type {boolean}
     * @memberof ScopePayload
     */
    explainability?: boolean;
    /**
     * Include the propensity score(s) from the specified outcome(s).
     * @type {Array<string>}
     * @memberof ScopePayload
     */
    outcome_ids?: Array<string>;
    /**
     * Include the persona assignment(s) from the specified persona set(s).
     * @type {Array<string>}
     * @memberof ScopePayload
     */
    persona_set_ids?: Array<string>;
    /**
     * Include the recommendation(s) from the specified recommender(s).
     * 
     * This feature is experimental and subject to change. To enable this feature, contact your account manager.
     * @type {Array<string>}
     * @memberof ScopePayload
     */
    recommender_ids?: Array<string>;
}
/**
 * Scope payload column metadata
 * @export
 * @interface ScopePayloadColumn
 */
export interface ScopePayloadColumn {
    /**
     * Human-readable column name
     * @type {string}
     * @memberof ScopePayloadColumn
     */
    human_name: string;
    /**
     * Machine-readable column name
     * @type {string}
     * @memberof ScopePayloadColumn
     */
    name: string;
}
/**
 * (Parameters used to PATCH the `ScopePayload` type.)
 * 
 * The data to include for each person in this scope.
 * @export
 * @interface ScopePayloadMergePatch
 */
export interface ScopePayloadMergePatch {
    /**
     * Include additional traits.
     * 
     * For traits created through `output_to_traits` via `/datasets`, specify the trait name.
     * 
     * For traits from Faraday's Internal Graph (FIG), specify the name prefixed by `fig/` ex. `fig/age`.
     * @type {Array<string>}
     * @memberof ScopePayloadMergePatch
     */
    attributes?: Array<string> | null;
    /**
     * Specify a list of cohort membership(s) to include. The list can include any cohort, not just those in `population.cohort_ids`.
     * @type {Array<string>}
     * @memberof ScopePayloadMergePatch
     */
    cohort_ids?: Array<string> | null;
    /**
     * Opt-in to include prediction explainability.
     * @type {boolean}
     * @memberof ScopePayloadMergePatch
     */
    explainability?: boolean | null;
    /**
     * Include the propensity score(s) from the specified outcome(s).
     * @type {Array<string>}
     * @memberof ScopePayloadMergePatch
     */
    outcome_ids?: Array<string> | null;
    /**
     * Include the persona assignment(s) from the specified persona set(s).
     * @type {Array<string>}
     * @memberof ScopePayloadMergePatch
     */
    persona_set_ids?: Array<string> | null;
    /**
     * Include the recommendation(s) from the specified recommender(s).
     * 
     * This feature is experimental and subject to change. To enable this feature, contact your account manager.
     * @type {Array<string>}
     * @memberof ScopePayloadMergePatch
     */
    recommender_ids?: Array<string> | null;
}
/**
 * (Parameters used to POST a new value of the `ScopePayload` type.)
 * 
 * The data to include for each person in this scope.
 * @export
 * @interface ScopePayloadPost
 */
export interface ScopePayloadPost {
    /**
     * Include additional traits.
     * 
     * For traits created through `output_to_traits` via `/datasets`, specify the trait name.
     * 
     * For traits from Faraday's Internal Graph (FIG), specify the name prefixed by `fig/` ex. `fig/age`.
     * @type {Array<string>}
     * @memberof ScopePayloadPost
     */
    attributes?: Array<string>;
    /**
     * Specify a list of cohort membership(s) to include. The list can include any cohort, not just those in `population.cohort_ids`.
     * @type {Array<string>}
     * @memberof ScopePayloadPost
     */
    cohort_ids?: Array<string>;
    /**
     * Opt-in to include prediction explainability.
     * @type {boolean}
     * @memberof ScopePayloadPost
     */
    explainability?: boolean;
    /**
     * Include the propensity score(s) from the specified outcome(s).
     * @type {Array<string>}
     * @memberof ScopePayloadPost
     */
    outcome_ids?: Array<string>;
    /**
     * Include the persona assignment(s) from the specified persona set(s).
     * @type {Array<string>}
     * @memberof ScopePayloadPost
     */
    persona_set_ids?: Array<string>;
    /**
     * Include the recommendation(s) from the specified recommender(s).
     * 
     * This feature is experimental and subject to change. To enable this feature, contact your account manager.
     * @type {Array<string>}
     * @memberof ScopePayloadPost
     */
    recommender_ids?: Array<string>;
}
/**
 * (Parameters used to PUT a value of the `ScopePayload` type.)
 * 
 * The data to include for each person in this scope.
 * @export
 * @interface ScopePayloadPut
 */
export interface ScopePayloadPut {
    /**
     * Include additional traits.
     * 
     * For traits created through `output_to_traits` via `/datasets`, specify the trait name.
     * 
     * For traits from Faraday's Internal Graph (FIG), specify the name prefixed by `fig/` ex. `fig/age`.
     * @type {Array<string>}
     * @memberof ScopePayloadPut
     */
    attributes?: Array<string>;
    /**
     * Specify a list of cohort membership(s) to include. The list can include any cohort, not just those in `population.cohort_ids`.
     * @type {Array<string>}
     * @memberof ScopePayloadPut
     */
    cohort_ids?: Array<string>;
    /**
     * Opt-in to include prediction explainability.
     * @type {boolean}
     * @memberof ScopePayloadPut
     */
    explainability?: boolean;
    /**
     * Include the propensity score(s) from the specified outcome(s).
     * @type {Array<string>}
     * @memberof ScopePayloadPut
     */
    outcome_ids?: Array<string>;
    /**
     * Include the persona assignment(s) from the specified persona set(s).
     * @type {Array<string>}
     * @memberof ScopePayloadPut
     */
    persona_set_ids?: Array<string>;
    /**
     * Include the recommendation(s) from the specified recommender(s).
     * 
     * This feature is experimental and subject to change. To enable this feature, contact your account manager.
     * @type {Array<string>}
     * @memberof ScopePayloadPut
     */
    recommender_ids?: Array<string>;
}
/**
 * The people to include in a scope. Leave `cohort_ids` empty to include the entire US population.
 * @export
 * @interface ScopePopulation
 */
export interface ScopePopulation {
    /**
     * Include people from the specified cohorts in this scope.
     * @type {Array<string>}
     * @memberof ScopePopulation
     */
    cohort_ids: Array<string>;
    /**
     * Exclude people from the specified cohorts in this scope.
     * @type {Array<string>}
     * @memberof ScopePopulation
     */
    exclusion_cohort_ids?: Array<string>;
}
/**
 * (Parameters used to PATCH the `ScopePopulation` type.)
 * 
 * The people to include in a scope. Leave `cohort_ids` empty to include the entire US population.
 * @export
 * @interface ScopePopulationMergePatch
 */
export interface ScopePopulationMergePatch {
    /**
     * Include people from the specified cohorts in this scope.
     * @type {Array<string>}
     * @memberof ScopePopulationMergePatch
     */
    cohort_ids?: Array<string>;
    /**
     * Exclude people from the specified cohorts in this scope.
     * @type {Array<string>}
     * @memberof ScopePopulationMergePatch
     */
    exclusion_cohort_ids?: Array<string> | null;
}
/**
 * (Parameters used to POST a new value of the `ScopePopulation` type.)
 * 
 * The people to include in a scope. Leave `cohort_ids` empty to include the entire US population.
 * @export
 * @interface ScopePopulationPost
 */
export interface ScopePopulationPost {
    /**
     * Include people from the specified cohorts in this scope.
     * @type {Array<string>}
     * @memberof ScopePopulationPost
     */
    cohort_ids: Array<string>;
    /**
     * Exclude people from the specified cohorts in this scope.
     * @type {Array<string>}
     * @memberof ScopePopulationPost
     */
    exclusion_cohort_ids?: Array<string>;
}
/**
 * (Parameters used to PUT a value of the `ScopePopulation` type.)
 * 
 * The people to include in a scope. Leave `cohort_ids` empty to include the entire US population.
 * @export
 * @interface ScopePopulationPut
 */
export interface ScopePopulationPut {
    /**
     * Include people from the specified cohorts in this scope.
     * @type {Array<string>}
     * @memberof ScopePopulationPut
     */
    cohort_ids: Array<string>;
    /**
     * Exclude people from the specified cohorts in this scope.
     * @type {Array<string>}
     * @memberof ScopePopulationPut
     */
    exclusion_cohort_ids?: Array<string>;
}
/**
 * (Parameters used to POST a new value of the `Scope` type.)
 * 
 * Instructions on how to produce output data.
 * @export
 * @interface ScopePost
 */
export interface ScopePost {
    /**
     * Human-readable label for this scope. Each scope must have a unique name.
     * @type {string}
     * @memberof ScopePost
     */
    name: string;
    /**
     * 
     * @type {ScopePayloadPost}
     * @memberof ScopePost
     */
    payload: ScopePayloadPost;
    /**
     * 
     * @type {ScopePopulationPost}
     * @memberof ScopePost
     */
    population: ScopePopulationPost;
    /**
     * A preview scope provides only a limited number of output records, but
     * it is not billed.
     * @type {boolean}
     * @memberof ScopePost
     */
    preview: boolean;
}
/**
 * (Parameters used to PUT a value of the `Scope` type.)
 * 
 * Instructions on how to produce output data.
 * @export
 * @interface ScopePut
 */
export interface ScopePut {
    /**
     * Human-readable label for this scope. Each scope must have a unique name.
     * @type {string}
     * @memberof ScopePut
     */
    name: string;
    /**
     * 
     * @type {ScopePayloadPut}
     * @memberof ScopePut
     */
    payload: ScopePayloadPut;
    /**
     * 
     * @type {ScopePopulationPut}
     * @memberof ScopePut
     */
    population: ScopePopulationPut;
    /**
     * A preview scope provides only a limited number of output records, but
     * it is not billed.
     * @type {boolean}
     * @memberof ScopePut
     */
    preview: boolean;
}
/**
 * Request to rotate RSA keypair credentials for a Snowflake connection.
 * Currently no additional options are required beyond the type discriminator.
 * @export
 * @interface SnowflakeRotateCredentialsRequest
 */
export interface SnowflakeRotateCredentialsRequest {
    /**
     * 
     * @type {string}
     * @memberof SnowflakeRotateCredentialsRequest
     */
    type: SnowflakeRotateCredentialsRequestTypeEnum;
}

/**
* @export
* @enum {string}
*/
export enum SnowflakeRotateCredentialsRequestTypeEnum {
    Snowflake = 'snowflake'
}
/**
 * A stream of events associated with the account.
 * @export
 * @interface Stream
 */
export interface Stream {
    /**
     * If not null, this resource will no longer receive updates, but will still be visable.
     * @type {string}
     * @memberof Stream
     */
    archived_at?: string;
    /**
     * 
     * @type {StreamPropertyCategory}
     * @memberof Stream
     */
    category?: StreamPropertyCategory;
    /**
     * When this resource was created.
     * @type {string}
     * @memberof Stream
     */
    created_at: string;
    /**
     * Whether the stream is deprecated.
     * @type {boolean}
     * @memberof Stream
     */
    deprecated?: boolean;
    /**
     * Notes about the deprecation of the stream.
     * @type {string}
     * @memberof Stream
     */
    deprecation_notes?: string;
    /**
     * A description of the stream.
     * @type {string}
     * @memberof Stream
     */
    description?: string;
    /**
     * Details of events emitted by each dataset into the stream.
     * @type {Array<StreamEventContributionByDataset>}
     * @memberof Stream
     */
    event_contribution_by_dataset?: Array<StreamEventContributionByDataset>;
    /**
     * Number of events in the stream.
     * @type {number}
     * @memberof Stream
     */
    event_count?: number;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof Stream
     */
    id: string;
    /**
     * The last time this resource's input was read.
     * @type {string}
     * @memberof Stream
     */
    last_read_input_at?: string;
    /**
     * The last time this resource's configuration was updated. If this is more recent than last_updated_output_at, the resource will be rebuilt.
     * @type {string}
     * @memberof Stream
     */
    last_updated_config_at?: string;
    /**
     * The last time this resource successfully built.
     * @type {string}
     * @memberof Stream
     */
    last_updated_output_at?: string;
    /**
     * A human-readable name for the stream.
     * @type {string}
     * @memberof Stream
     */
    literate?: string;
    /**
     * 
     * @type {string}
     * @memberof Stream
     */
    name: string;
    /**
     * Date of the most recent event in the stream.
     * @type {string}
     * @memberof Stream
     */
    newest_date?: string;
    /**
     * Date of the first event in the stream.
     * @type {string}
     * @memberof Stream
     */
    oldest_date?: string;
    /**
     * 
     * @type {StreamProperties}
     * @memberof Stream
     */
    properties?: StreamProperties;
    /**
     * The type of this resource.
     * @type {string}
     * @memberof Stream
     */
    resource_type: string;
    /**
     * 
     * @type {ResourceStatus}
     * @memberof Stream
     */
    status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {string}
     * @memberof Stream
     */
    status_changed_at?: string;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof Stream
     */
    status_error?: string;
    /**
     * 
     * @type {StreamPropertyTier}
     * @memberof Stream
     */
    tier?: StreamPropertyTier;
    /**
     * When this resource was last updated.
     * @type {string}
     * @memberof Stream
     */
    updated_at: string;
}
/**
 * 
 * @export
 * @interface StreamAnalysis
 */
export interface StreamAnalysis {
    /**
     * 
     * @type {Array<StreamAnalysisTimeSeriesDatum>}
     * @memberof StreamAnalysis
     */
    time_series?: Array<StreamAnalysisTimeSeriesDatum>;
}
/**
 * 
 * @export
 * @interface StreamAnalysisTimeSeriesDatum
 */
export interface StreamAnalysisTimeSeriesDatum {
    /**
     * The total events emitted within the stream for the given date.
     * @type {number}
     * @memberof StreamAnalysisTimeSeriesDatum
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof StreamAnalysisTimeSeriesDatum
     */
    date: string;
}
/**
 * 
 * @export
 * @interface StreamEventContributionByDataset
 */
export interface StreamEventContributionByDataset {
    /**
     * The dataset the column comes from
     * @type {string}
     * @memberof StreamEventContributionByDataset
     */
    dataset_id: string;
    /**
     * 
     * @type {number}
     * @memberof StreamEventContributionByDataset
     */
    event_count: number;
    /**
     * 
     * @type {string}
     * @memberof StreamEventContributionByDataset
     */
    newest_date: string;
    /**
     * 
     * @type {string}
     * @memberof StreamEventContributionByDataset
     */
    oldest_date: string;
}
/**
 * (Parameters used to PATCH the `Stream` type.)
 * 
 * A stream of events associated with the account.
 * @export
 * @interface StreamMergePatch
 */
export interface StreamMergePatch {
    /**
     * 
     * @type {StreamPropertyCategory}
     * @memberof StreamMergePatch
     */
    category?: StreamPropertyCategory | null;
    /**
     * Whether the stream is deprecated.
     * @type {boolean}
     * @memberof StreamMergePatch
     */
    deprecated?: boolean | null;
    /**
     * Notes about the deprecation of the stream.
     * @type {string}
     * @memberof StreamMergePatch
     */
    deprecation_notes?: string | null;
    /**
     * A description of the stream.
     * @type {string}
     * @memberof StreamMergePatch
     */
    description?: string | null;
    /**
     * A human-readable name for the stream.
     * @type {string}
     * @memberof StreamMergePatch
     */
    literate?: string | null;
    /**
     * 
     * @type {StreamPropertiesMergePatch}
     * @memberof StreamMergePatch
     */
    properties?: StreamPropertiesMergePatch | null;
    /**
     * 
     * @type {StreamPropertyTier}
     * @memberof StreamMergePatch
     */
    tier?: StreamPropertyTier | null;
}
/**
 * (Parameters used to POST a new value of the `Stream` type.)
 * 
 * A stream of events associated with the account.
 * @export
 * @interface StreamPost
 */
export interface StreamPost {
    /**
     * 
     * @type {StreamPropertyCategory}
     * @memberof StreamPost
     */
    category?: StreamPropertyCategory;
    /**
     * Whether the stream is deprecated.
     * @type {boolean}
     * @memberof StreamPost
     */
    deprecated?: boolean;
    /**
     * Notes about the deprecation of the stream.
     * @type {string}
     * @memberof StreamPost
     */
    deprecation_notes?: string;
    /**
     * A description of the stream.
     * @type {string}
     * @memberof StreamPost
     */
    description?: string;
    /**
     * A human-readable name for the stream.
     * @type {string}
     * @memberof StreamPost
     */
    literate?: string;
    /**
     * 
     * @type {StreamPropertiesPost}
     * @memberof StreamPost
     */
    properties?: StreamPropertiesPost;
    /**
     * 
     * @type {StreamPropertyTier}
     * @memberof StreamPost
     */
    tier?: StreamPropertyTier;
}
/**
 * 
 * @export
 * @interface StreamProperties
 */
export interface StreamProperties {
    [key: string]: StreamPropertyDetails;
}
/**
 * (Parameters used to PATCH the `StreamProperties` type.)
 * 
 * Columns in your data that you want to associate with this event.
 * @export
 * @interface StreamPropertiesMergePatch
 */
export interface StreamPropertiesMergePatch {
    [key: string]: StreamPropertyDetailsMergePatch | null;
}
/**
 * (Parameters used to POST the `StreamProperties` type.)
 * 
 * Columns in your data that you want to associate with this event.
 * @export
 * @interface StreamPropertiesPost
 */
export interface StreamPropertiesPost {
    [key: string]: StreamPropertyDetailsPost;
}
/**
 * (Parameters used to PUT the `StreamProperties` type.)
 * 
 * Columns in your data that you want to associate with this event.
 * @export
 * @interface StreamPropertiesPut
 */
export interface StreamPropertiesPut {
    [key: string]: StreamPropertyDetailsPut;
}
/**
 * A broad category describing the flavor of a stream property.
 * @export
 * @enum {string}
 */
export enum StreamPropertyCategory {
    FigDemography = 'fig/demography',
    FigEnvironment = 'fig/environment',
    FigGeography = 'fig/geography',
    FigIdentity = 'fig/identity',
    FigLifestyle = 'fig/lifestyle',
    FigLifeEvent = 'fig/life_event',
    FigProperty = 'fig/property',
    FigReachability = 'fig/reachability',
    FigSociety = 'fig/society',
    FigFinancial = 'fig/financial',
    UserDefined = 'user_defined'
}
/**
 * Configuration for a stream property. Can either reference a column from the dataset with optional transformations, or provide a static value.
 * 
 * Either `column_name` or `value` should be specified, but not both.
 * @export
 * @interface StreamPropertyConfig
 */
export interface StreamPropertyConfig {
    /**
     * The name of the column in the dataset to use for this property
     * @type {string}
     * @memberof StreamPropertyConfig
     */
    column_name?: string;
    /**
     * 
     * @type {DecodeConfig}
     * @memberof StreamPropertyConfig
     */
    decode?: DecodeConfig;
    /**
     * 
     * @type {RecodeConfig}
     * @memberof StreamPropertyConfig
     */
    recode?: RecodeConfig;
    /**
     * A static value for this property (alternative to column_name)
     * @type {string | number | boolean | Array<string>}
     * @memberof StreamPropertyConfig
     */
    value?: string | number | boolean | Array<string> | null;
}
/**
 * 
 * @export
 * @interface StreamPropertyDetails
 */
export interface StreamPropertyDetails {
    /**
     * If values are enumerable, explicitly list allowed values. Values should match the property's type.
     * @type {Array<boolean | number | string>}
     * @memberof StreamPropertyDetails
     */
    allowed_values?: Array<boolean | number | string>;
    /**
     * For continuous data types, list of reasonable cutoff values.
     * @type {Array<number>}
     * @memberof StreamPropertyDetails
     */
    breaks?: Array<number>;
    /**
     * For STRING type, list of allowed values.
     * @type {Array<string>}
     * @memberof StreamPropertyDetails
     */
    categories?: Array<string>;
    /**
     * If applicable, describe the meaning of any directionality in the values.
     * @type {string}
     * @memberof StreamPropertyDetails
     */
    directionality_interpretation?: string;
    /**
     * Counts corresponding to the existing breaks property. Only available when the property is numerical, otherwise empty.
     * @type {Array<StreamPropertyDistribution>}
     * @memberof StreamPropertyDetails
     */
    distribution?: Array<StreamPropertyDistribution>;
    /**
     * 
     * @type {Array<StreamPropertyInputFromDatasets>}
     * @memberof StreamPropertyDetails
     */
    emitted_by_datasets?: Array<StreamPropertyInputFromDatasets>;
    /**
     * For enumerable values, a mapping from value to its interpretation. Key type matches the property type, value is always a string.
     * @type {object}
     * @memberof StreamPropertyDetails
     */
    interpretation_map?: object;
    /**
     * If a unary null replacement is not applicable or viable, describe how NULLs should be interpreted when encountered.
     * @type {string}
     * @memberof StreamPropertyDetails
     */
    null_value_interpretation?: string;
    /**
     * If set, value should be coalesced with this replacement to avoid any NULLs.
     * @type {boolean | string | number}
     * @memberof StreamPropertyDetails
     */
    null_value_replacement?: boolean | string | number | null;
    /**
     * 
     * @type {TraitStatisticalType}
     * @memberof StreamPropertyDetails
     */
    statistical_type?: TraitStatisticalType;
    /**
     * 
     * @type {PrimitiveDataType}
     * @memberof StreamPropertyDetails
     */
    type?: PrimitiveDataType;
    /**
     * For numeric types, in what units is the data stored.
     * @type {string}
     * @memberof StreamPropertyDetails
     */
    unit?: string;
    /**
     * Top 100 observed values of this property. Only available when the property is categorical or multicategorical, otherwise empty.
     * @type {Array<StreamPropertyValues>}
     * @memberof StreamPropertyDetails
     */
    values?: Array<StreamPropertyValues>;
}
/**
 * 
 * @export
 * @interface StreamPropertyDetailsMergePatch
 */
export interface StreamPropertyDetailsMergePatch {
    /**
     * If values are enumerable, explicitly list allowed values. Values should match the property's type.
     * @type {Array<boolean | number | string>}
     * @memberof StreamPropertyDetailsMergePatch
     */
    allowed_values?: Array<boolean | number | string> | null;
    /**
     * If applicable, describe the meaning of any directionality in the values.
     * @type {string}
     * @memberof StreamPropertyDetailsMergePatch
     */
    directionality_interpretation?: string | null;
    /**
     * For enumerable values, a mapping from value to its interpretation. Key type matches the property type, value is always a string.
     * @type {object}
     * @memberof StreamPropertyDetailsMergePatch
     */
    interpretation_map?: object | null;
    /**
     * If a unary null replacement is not applicable or viable, describe how NULLs should be interpreted when encountered.
     * @type {string}
     * @memberof StreamPropertyDetailsMergePatch
     */
    null_value_interpretation?: string | null;
    /**
     * If set, value should be coalesced with this replacement to avoid any NULLs.
     * @type {boolean | string | number}
     * @memberof StreamPropertyDetailsMergePatch
     */
    null_value_replacement?: boolean | string | number | null;
    /**
     * 
     * @type {TraitStatisticalType}
     * @memberof StreamPropertyDetailsMergePatch
     */
    statistical_type?: TraitStatisticalType | null;
    /**
     * 
     * @type {PrimitiveDataType}
     * @memberof StreamPropertyDetailsMergePatch
     */
    type?: PrimitiveDataType | null;
    /**
     * For numeric types, in what units is the data stored.
     * @type {string}
     * @memberof StreamPropertyDetailsMergePatch
     */
    unit?: string | null;
}
/**
 * 
 * @export
 * @interface StreamPropertyDetailsPost
 */
export interface StreamPropertyDetailsPost {
    /**
     * If values are enumerable, explicitly list allowed values. Values should match the property's type.
     * @type {Array<boolean | number | string>}
     * @memberof StreamPropertyDetailsPost
     */
    allowed_values?: Array<boolean | number | string>;
    /**
     * If applicable, describe the meaning of any directionality in the values.
     * @type {string}
     * @memberof StreamPropertyDetailsPost
     */
    directionality_interpretation?: string;
    /**
     * For enumerable values, a mapping from value to its interpretation. Key type matches the property type, value is always a string.
     * @type {object}
     * @memberof StreamPropertyDetailsPost
     */
    interpretation_map?: object;
    /**
     * If a unary null replacement is not applicable or viable, describe how NULLs should be interpreted when encountered.
     * @type {string}
     * @memberof StreamPropertyDetailsPost
     */
    null_value_interpretation?: string;
    /**
     * If set, value should be coalesced with this replacement to avoid any NULLs.
     * @type {boolean | string | number}
     * @memberof StreamPropertyDetailsPost
     */
    null_value_replacement?: boolean | string | number | null;
    /**
     * 
     * @type {TraitStatisticalType}
     * @memberof StreamPropertyDetailsPost
     */
    statistical_type?: TraitStatisticalType;
    /**
     * 
     * @type {PrimitiveDataType}
     * @memberof StreamPropertyDetailsPost
     */
    type?: PrimitiveDataType;
    /**
     * For numeric types, in what units is the data stored.
     * @type {string}
     * @memberof StreamPropertyDetailsPost
     */
    unit?: string;
}
/**
 * 
 * @export
 * @interface StreamPropertyDetailsPut
 */
export interface StreamPropertyDetailsPut {
    /**
     * If values are enumerable, explicitly list allowed values. Values should match the property's type.
     * @type {Array<boolean | number | string>}
     * @memberof StreamPropertyDetailsPut
     */
    allowed_values?: Array<boolean | number | string>;
    /**
     * If applicable, describe the meaning of any directionality in the values.
     * @type {string}
     * @memberof StreamPropertyDetailsPut
     */
    directionality_interpretation?: string;
    /**
     * For enumerable values, a mapping from value to its interpretation. Key type matches the property type, value is always a string.
     * @type {object}
     * @memberof StreamPropertyDetailsPut
     */
    interpretation_map?: object;
    /**
     * If a unary null replacement is not applicable or viable, describe how NULLs should be interpreted when encountered.
     * @type {string}
     * @memberof StreamPropertyDetailsPut
     */
    null_value_interpretation?: string;
    /**
     * If set, value should be coalesced with this replacement to avoid any NULLs.
     * @type {boolean | string | number}
     * @memberof StreamPropertyDetailsPut
     */
    null_value_replacement?: boolean | string | number | null;
    /**
     * 
     * @type {TraitStatisticalType}
     * @memberof StreamPropertyDetailsPut
     */
    statistical_type?: TraitStatisticalType;
    /**
     * 
     * @type {PrimitiveDataType}
     * @memberof StreamPropertyDetailsPut
     */
    type?: PrimitiveDataType;
    /**
     * For numeric types, in what units is the data stored.
     * @type {string}
     * @memberof StreamPropertyDetailsPut
     */
    unit?: string;
}
/**
 * 
 * @export
 * @interface StreamPropertyDistribution
 */
export interface StreamPropertyDistribution {
    /**
     * 
     * @type {number}
     * @memberof StreamPropertyDistribution
     */
    count: number;
    /**
     * Upper range of the bin (exclusive). May be null for the last bin.
     * @type {number}
     * @memberof StreamPropertyDistribution
     */
    max?: number;
    /**
     * Lower range of the bin (inclusive).
     * @type {number}
     * @memberof StreamPropertyDistribution
     */
    min: number;
}
/**
 * 
 * @export
 * @interface StreamPropertyInputFromDatasets
 */
export interface StreamPropertyInputFromDatasets {
    /**
     * the column used to populate this property on the event stream
     * @type {string}
     * @memberof StreamPropertyInputFromDatasets
     */
    column_name?: string;
    /**
     * the dataset the column comes from
     * @type {string}
     * @memberof StreamPropertyInputFromDatasets
     */
    dataset_id: string;
}
/**
 * A billing tier for a stream property.
 * @export
 * @enum {string}
 */
export enum StreamPropertyTier {
    Standard = 'standard',
    Premium = 'premium',
    Prohibited = 'prohibited'
}
/**
 * 
 * @export
 * @interface StreamPropertyValues
 */
export interface StreamPropertyValues {
    /**
     * 
     * @type {number}
     * @memberof StreamPropertyValues
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof StreamPropertyValues
     */
    value: string;
}
/**
 * (Parameters used to PUT a value of the `Stream` type.)
 * 
 * A stream of events associated with the account.
 * @export
 * @interface StreamPut
 */
export interface StreamPut {
    /**
     * 
     * @type {StreamPropertyCategory}
     * @memberof StreamPut
     */
    category?: StreamPropertyCategory;
    /**
     * Whether the stream is deprecated.
     * @type {boolean}
     * @memberof StreamPut
     */
    deprecated?: boolean;
    /**
     * Notes about the deprecation of the stream.
     * @type {string}
     * @memberof StreamPut
     */
    deprecation_notes?: string;
    /**
     * A description of the stream.
     * @type {string}
     * @memberof StreamPut
     */
    description?: string;
    /**
     * A human-readable name for the stream.
     * @type {string}
     * @memberof StreamPut
     */
    literate?: string;
    /**
     * 
     * @type {StreamPropertiesPut}
     * @memberof StreamPut
     */
    properties?: StreamPropertiesPut;
    /**
     * 
     * @type {StreamPropertyTier}
     * @memberof StreamPut
     */
    tier?: StreamPropertyTier;
}
/**
 * A table of arbitrary data. Purposefully untyped to allow for flexibility in the data.
 * @export
 * @interface TabularData
 */
export interface TabularData {
    /**
     * The headers of the table. Similar to a CSV header row.
     * @type {Array<string>}
     * @memberof TabularData
     */
    headers: Array<string>;
    /**
     * The rows of the table. Similar to a CSV data row. Each row must have the same number of columns as the `headers` array. The order of the columns must match the order of the headers.
     * @type {Array<Array<string>>}
     * @memberof TabularData
     */
    rows: Array<Array<string>>;
}
/**
 * Instructions on how to export output data defined by a scope.
 * 
 * There are three types of targets:
 * <table>
 * <thead>
 * <tr><th>Target type</th><th>Description</th><th>API requirement</th></tr>
 * </thead>
 * <tbody>
 * <tr><td><strong>Publication</strong></td><td>Faraday <em>hosts</em> your predictions for convenient retrieval as needed.</td><td>Specify a <code>type</code> of <code>hosted_csv</code> in <code>options</code>. Omit <code>connection_id</code>.</td></tr>
 * <tr><td><strong>Replication</strong></td><td>Faraday copies your predictions to systems <em>you</em> control. You may then push them to third parties like Facebook, Google Ads, etc.</td><td>Specify a valid <code>connection_id</code> and the corresponding <code>type</code> of the connection in <code>options</code>.</td></tr>
 * <tr><td><strong>Managed</strong></td><td>Faraday manages a push to third parties like Facebook, Google Ads, and more.</td><td>Must be on an enterprise plan. Contact Customer Success to set up.</td></tr>
 * </tbody>
 * </table>
 * @export
 * @interface Target
 */
export interface Target {
    /**
     * 
     * @type {TargetAnalysisConfig}
     * @memberof Target
     */
    analysis_config?: TargetAnalysisConfig;
    /**
     * If not null, this resource will no longer receive updates, but will still be visable.
     * @type {string}
     * @memberof Target
     */
    archived_at?: string;
    /**
     * If this is a replication (externally-hosted) target, the UUID of a connection - see <a href="https://faraday.ai/developers/reference/createconnection">/connections</a> for more detail. 
     * 
     * If this is not a replication target, omit this parameter.
     * @type {string}
     * @memberof Target
     */
    connection_id?: string;
    /**
     * The number of records in the target. This is only included in the response if the target is built.
     * @type {number}
     * @memberof Target
     */
    count?: number;
    /**
     * When this resource was created.
     * @type {string}
     * @memberof Target
     */
    created_at: string;
    /**
     * By default, targets include all columns in <a href="https://faraday.ai/developers/reference/createtargetpreview">the target preview</a>, with no name changes.
     * 
     * Users may use this parameter to specify their own set of "structure transformations" to override the default selection, order, and name of exported columns.
     * 
     * The shape of this parameter is an array of objects where the order of the columns to export is given by the order of the array. Each item represents a 1:1 mapping of scope input column to target output column. Only those columns specified here are emitted in the target output.
     * @type {Array<TargetStructureTransformation>}
     * @memberof Target
     */
    custom_structure?: Array<TargetStructureTransformation>;
    /**
     * 
     * @type {TargetFilter}
     * @memberof Target
     */
    filter?: TargetFilter;
    /**
     * Final structure of the target export. This is only included in the response if the target is built.
     * @type {Array<TargetStructureTransformation>}
     * @memberof Target
     */
    final_structure?: Array<TargetStructureTransformation>;
    /**
     * By default, column names are exported in a machine-readable format with underscored uuids. 
     * 
     * Setting this to `true` replaces ids with literates in the exported column names.
     * @type {boolean}
     * @memberof Target
     */
    human_readable?: boolean;
    /**
     * A unique ID for this resource.
     * @type {string}
     * @memberof Target
     */
    id: string;
    /**
     * The last time this resource's input was read.
     * @type {string}
     * @memberof Target
     */
    last_read_input_at?: string;
    /**
     * The last time this resource's configuration was updated. If this is more recent than last_updated_output_at, the resource will be rebuilt.
     * @type {string}
     * @memberof Target
     */
    last_updated_config_at?: string;
    /**
     * The last time this resource successfully built.
     * @type {string}
     * @memberof Target
     */
    last_updated_output_at?: string;
    /**
     * 
     * @type {TargetLimit}
     * @memberof Target
     */
    limit?: TargetLimit;
    /**
     * A managed target requires special configuration from a Faraday admin, and is read-only.
     * @type {boolean}
     * @memberof Target
     */
    managed?: boolean;
    /**
     * A user-friendly name of the target.
     * @type {string}
     * @memberof Target
     */
    name: string;
    /**
     * 
     * @type {TargetOptions}
     * @memberof Target
     */
    options: TargetOptions;
    /**
     * **Deprecated: use `custom_structure`.**
     * 
     * By default, targets include all columns in <a href="https://faraday.ai/developers/reference/createtargetpreview">the target preview</a>, with no name changes.
     * This parameter is an override of the default that enables an explicit mapping of columns that should be included in the target export, along with the exported column name.
     * Each key is the name the column originally had, and each value is the desired name.
     * Example:
     * ```
     * {
     *   "person_first_name": "first_name",
     *   "person_last_name": "last_name",
     *   "city": "city"
     * }
     * ```
     * In the example above, the target will only include the "first_name", "last_name", and "city" columns.
     * @type {{ [key: string]: string; }}
     * @memberof Target
     */
    payload_map?: { [key: string]: string; };
    /**
     * 
     * @type {TargetModes}
     * @memberof Target
     */
    representation: TargetModes;
    /**
     * The type of this resource.
     * @type {string}
     * @memberof Target
     */
    resource_type: string;
    /**
     * The UUID of a scope - see <a href="https://faraday.ai/developers/reference/createscope">/scopes</a> for more detail.
     * @type {string}
     * @memberof Target
     */
    scope_id: string;
    /**
     * 
     * @type {ResourceStatus}
     * @memberof Target
     */
    status: ResourceStatus;
    /**
     * When the status of this resource was last updated.
     * @type {string}
     * @memberof Target
     */
    status_changed_at?: string;
    /**
     * If this resource has `status == "error"`, this will contain an error message.
     * @type {string}
     * @memberof Target
     */
    status_error?: string;
    /**
     * When this resource was last updated.
     * @type {string}
     * @memberof Target
     */
    updated_at: string;
}
/**
 * Available aggregation levels for data exported in `aggregated` targets.
 * @export
 * @enum {string}
 */
export enum TargetAggregateGeographic {
    CarrierRoute = 'carrier_route',
    CensusBlockGroup = 'census_block_group',
    CensusTract = 'census_tract',
    County = 'county',
    Dma = 'dma',
    Metro = 'metro',
    Postcode = 'postcode',
    State = 'state'
}
/**
 * Available aggregation levels for data exported in `identified` targets. Only `person` is supported for targets with options.type = `lookup_api`.
 * @export
 * @enum {string}
 */
export enum TargetAggregateIdentified {
    Person = 'person',
    Residence = 'residence'
}
/**
 * 
 * @export
 * @interface TargetAnalysis
 */
export interface TargetAnalysis {
    /**
     * 
     * @type {TargetAnalysisGeographies}
     * @memberof TargetAnalysis
     */
    geographies?: TargetAnalysisGeographies;
    /**
     * 
     * @type {Array<TargetAnalysisTrait>}
     * @memberof TargetAnalysis
     */
    traits?: Array<TargetAnalysisTrait>;
}
/**
 * Configuration for the analysis of the target.
 * @export
 * @interface TargetAnalysisConfig
 */
export interface TargetAnalysisConfig {
    /**
     * Configuration for the analysis of geographic dimensions
     * @type {Array<string>}
     * @memberof TargetAnalysisConfig
     */
    geographies?: Array<TargetAnalysisConfigGeographiesEnum>;
    /**
     * Configuration for the analysis of traits. For traits created through `output_to_traits` via `/datasets`, specify the trait name. For traits from Faraday's Internal Graph (FIG), specify the name prefixed by `fig/` ex. `fig/age`.
     * @type {Array<string>}
     * @memberof TargetAnalysisConfig
     */
    traits?: Array<string>;
}

/**
* @export
* @enum {string}
*/
export enum TargetAnalysisConfigGeographiesEnum {
    Postcode = 'postcode',
    State = 'state'
}
/**
 * 
 * @export
 * @interface TargetAnalysisGeographies
 */
export interface TargetAnalysisGeographies {
    /**
     * 
     * @type {Array<TargetAnalysisGeography>}
     * @memberof TargetAnalysisGeographies
     */
    postcode?: Array<TargetAnalysisGeography>;
    /**
     * 
     * @type {Array<TargetAnalysisGeography>}
     * @memberof TargetAnalysisGeographies
     */
    state?: Array<TargetAnalysisGeography>;
}
/**
 * 
 * @export
 * @interface TargetAnalysisGeography
 */
export interface TargetAnalysisGeography {
    /**
     * The number of individuals in this geography.
     * @type {number}
     * @memberof TargetAnalysisGeography
     */
    count: number;
    /**
     * The ID of the geography, so if postcode, then 05156.
     * @type {string}
     * @memberof TargetAnalysisGeography
     */
    id: string;
}
/**
 * 
 * @export
 * @interface TargetAnalysisTrait
 */
export interface TargetAnalysisTrait {
    /**
     * The list of bins calculated for this target analysis dimension.
     * @type {Array<AnalysisDimensionsTraitBin>}
     * @memberof TargetAnalysisTrait
     */
    bins: Array<AnalysisDimensionsTraitBin>;
    /**
     * The machine name of the trait used to calculate this dimension.
     * @type {string}
     * @memberof TargetAnalysisTrait
     */
    trait_name: string;
}
/**
 * Filter the rows exported in a target using the scope payload elements.
 * - **Deprecated:** To filter by outcome scores, use `outcome_score`.
 * - To filter by outcome probability, use `outcome_probability`.
 * - To filter by outcome percentile, use `outcome_percentile`.
 * - To filter by persona set persona id, use `persona`.
 * - To filter by cohort membership, use `cohort_membership`.
 * - To filter by trait, use `trait`.
 * - To filter by recommender uncalibrated probability, use `recommender_uncalibrated_probability`.
 * - To filter by recommender rank, use `recommender_rank`.
 * 
 * Conditions are AND-ed together (like SQL) - each condition applies an additional constraint.
 * 
 * Nulls are excluded unless explicitly requested with `_null: true`.
 * 
 * Target filters are not supported for targets with options.type = "lookup_api".
 * @export
 * @interface TargetFilter
 */
export interface TargetFilter {
    /**
     * List of conditions to filter cohort membership on.
     * @type {Array<TargetFilterCohortMembershipConditions>}
     * @memberof TargetFilter
     */
    cohort_membership?: Array<TargetFilterCohortMembershipConditions>;
    /**
     * List of conditions to filter outcome percentile on.
     * @type {Array<TargetFilterOutcomePercentileConditions>}
     * @memberof TargetFilter
     */
    outcome_percentile?: Array<TargetFilterOutcomePercentileConditions>;
    /**
     * List of conditions to filter outcome probability on.
     * @type {Array<TargetFilterOutcomeProbabilityConditions>}
     * @memberof TargetFilter
     */
    outcome_probability?: Array<TargetFilterOutcomeProbabilityConditions>;
    /**
     * **Deprecated:** List of conditions to filter outcome score on.
     * @type {Array<TargetFilterOutcomeScoreConditions>}
     * @memberof TargetFilter
     */
    outcome_score?: Array<TargetFilterOutcomeScoreConditions>;
    /**
     * List of conditions to filter persona set personid on.
     * @type {Array<TargetFilterPersonaSetPersonaIdConditions>}
     * @memberof TargetFilter
     */
    persona?: Array<TargetFilterPersonaSetPersonaIdConditions>;
    /**
     * List of conditions to filter recommender rank on.
     * @type {Array<TargetFilterRecommenderRankConditions>}
     * @memberof TargetFilter
     */
    recommender_rank?: Array<TargetFilterRecommenderRankConditions>;
    /**
     * List of conditions to filter recommender uncalibrated probability on.
     * @type {Array<TargetFilterRecommenderUncalibratedProbabilityConditions>}
     * @memberof TargetFilter
     */
    recommender_uncalibrated_probability?: Array<TargetFilterRecommenderUncalibratedProbabilityConditions>;
    /**
     * List of conditions to filter traits.
     * @type {Array<TargetFilterTraitConditions>}
     * @memberof TargetFilter
     */
    trait?: Array<TargetFilterTraitConditions>;
}
/**
 * 
 * @export
 * @interface TargetFilterCohortMembershipConditions
 */
export interface TargetFilterCohortMembershipConditions {
    /**
     * Equal to
     * @type {boolean}
     * @memberof TargetFilterCohortMembershipConditions
     */
    _eq: boolean;
    /**
     * Cohort id to filter on.
     * @type {string}
     * @memberof TargetFilterCohortMembershipConditions
     */
    cohort_id: string;
}
/**
 * (Parameters used to PATCH the `TargetFilter` type.)
 * 
 * Filter the rows exported in a target using the scope payload elements.
 * - **Deprecated:** To filter by outcome scores, use `outcome_score`.
 * - To filter by outcome probability, use `outcome_probability`.
 * - To filter by outcome percentile, use `outcome_percentile`.
 * - To filter by persona set persona id, use `persona`.
 * - To filter by cohort membership, use `cohort_membership`.
 * - To filter by trait, use `trait`.
 * - To filter by recommender uncalibrated probability, use `recommender_uncalibrated_probability`.
 * - To filter by recommender rank, use `recommender_rank`.
 * 
 * Conditions are AND-ed together (like SQL) - each condition applies an additional constraint.
 * 
 * Nulls are excluded unless explicitly requested with `_null: true`.
 * 
 * Target filters are not supported for targets with options.type = "lookup_api".
 * @export
 * @interface TargetFilterMergePatch
 */
export interface TargetFilterMergePatch {
    /**
     * List of conditions to filter cohort membership on.
     * @type {Array<TargetFilterCohortMembershipConditions>}
     * @memberof TargetFilterMergePatch
     */
    cohort_membership?: Array<TargetFilterCohortMembershipConditions> | null;
    /**
     * List of conditions to filter outcome percentile on.
     * @type {Array<TargetFilterOutcomePercentileConditions>}
     * @memberof TargetFilterMergePatch
     */
    outcome_percentile?: Array<TargetFilterOutcomePercentileConditions> | null;
    /**
     * List of conditions to filter outcome probability on.
     * @type {Array<TargetFilterOutcomeProbabilityConditions>}
     * @memberof TargetFilterMergePatch
     */
    outcome_probability?: Array<TargetFilterOutcomeProbabilityConditions> | null;
    /**
     * **Deprecated:** List of conditions to filter outcome score on.
     * @type {Array<TargetFilterOutcomeScoreConditions>}
     * @memberof TargetFilterMergePatch
     */
    outcome_score?: Array<TargetFilterOutcomeScoreConditions> | null;
    /**
     * List of conditions to filter persona set personid on.
     * @type {Array<TargetFilterPersonaSetPersonaIdConditions>}
     * @memberof TargetFilterMergePatch
     */
    persona?: Array<TargetFilterPersonaSetPersonaIdConditions> | null;
    /**
     * List of conditions to filter recommender rank on.
     * @type {Array<TargetFilterRecommenderRankConditions>}
     * @memberof TargetFilterMergePatch
     */
    recommender_rank?: Array<TargetFilterRecommenderRankConditions> | null;
    /**
     * List of conditions to filter recommender uncalibrated probability on.
     * @type {Array<TargetFilterRecommenderUncalibratedProbabilityConditions>}
     * @memberof TargetFilterMergePatch
     */
    recommender_uncalibrated_probability?: Array<TargetFilterRecommenderUncalibratedProbabilityConditions> | null;
    /**
     * List of conditions to filter traits.
     * @type {Array<TargetFilterTraitConditions>}
     * @memberof TargetFilterMergePatch
     */
    trait?: Array<TargetFilterTraitConditions> | null;
}
/**
 * 
 * @export
 * @interface TargetFilterOutcomePercentileConditions
 */
export interface TargetFilterOutcomePercentileConditions {
    /**
     * Equal to
     * @type {number}
     * @memberof TargetFilterOutcomePercentileConditions
     */
    _eq?: number;
    /**
     * Greater than
     * @type {number}
     * @memberof TargetFilterOutcomePercentileConditions
     */
    _gt?: number;
    /**
     * Greater than or equal to
     * @type {number}
     * @memberof TargetFilterOutcomePercentileConditions
     */
    _gte?: number;
    /**
     * Less than
     * @type {number}
     * @memberof TargetFilterOutcomePercentileConditions
     */
    _lt?: number;
    /**
     * Less than or equal to
     * @type {number}
     * @memberof TargetFilterOutcomePercentileConditions
     */
    _lte?: number;
    /**
     * Value is not null
     * @type {boolean}
     * @memberof TargetFilterOutcomePercentileConditions
     */
    _nnull?: boolean;
    /**
     * Value is null
     * @type {boolean}
     * @memberof TargetFilterOutcomePercentileConditions
     */
    _null?: boolean;
    /**
     * Outcome id to filter on.
     * @type {string}
     * @memberof TargetFilterOutcomePercentileConditions
     */
    outcome_id: string;
}
/**
 * 
 * @export
 * @interface TargetFilterOutcomeProbabilityConditions
 */
export interface TargetFilterOutcomeProbabilityConditions {
    /**
     * Equal to
     * @type {number}
     * @memberof TargetFilterOutcomeProbabilityConditions
     */
    _eq?: number;
    /**
     * Greater than
     * @type {number}
     * @memberof TargetFilterOutcomeProbabilityConditions
     */
    _gt?: number;
    /**
     * Greater than or equal to
     * @type {number}
     * @memberof TargetFilterOutcomeProbabilityConditions
     */
    _gte?: number;
    /**
     * Less than
     * @type {number}
     * @memberof TargetFilterOutcomeProbabilityConditions
     */
    _lt?: number;
    /**
     * Less than or equal to
     * @type {number}
     * @memberof TargetFilterOutcomeProbabilityConditions
     */
    _lte?: number;
    /**
     * Value is not null
     * @type {boolean}
     * @memberof TargetFilterOutcomeProbabilityConditions
     */
    _nnull?: boolean;
    /**
     * Value is null
     * @type {boolean}
     * @memberof TargetFilterOutcomeProbabilityConditions
     */
    _null?: boolean;
    /**
     * Outcome id to filter on.
     * @type {string}
     * @memberof TargetFilterOutcomeProbabilityConditions
     */
    outcome_id: string;
}
/**
 * 
 * @export
 * @interface TargetFilterOutcomeScoreConditions
 */
export interface TargetFilterOutcomeScoreConditions {
    /**
     * Equal to
     * @type {number}
     * @memberof TargetFilterOutcomeScoreConditions
     */
    _eq?: number;
    /**
     * Greater than
     * @type {number}
     * @memberof TargetFilterOutcomeScoreConditions
     */
    _gt?: number;
    /**
     * Greater than or equal to
     * @type {number}
     * @memberof TargetFilterOutcomeScoreConditions
     */
    _gte?: number;
    /**
     * Less than
     * @type {number}
     * @memberof TargetFilterOutcomeScoreConditions
     */
    _lt?: number;
    /**
     * Less than or equal to
     * @type {number}
     * @memberof TargetFilterOutcomeScoreConditions
     */
    _lte?: number;
    /**
     * Value is not null
     * @type {boolean}
     * @memberof TargetFilterOutcomeScoreConditions
     */
    _nnull?: boolean;
    /**
     * Value is null
     * @type {boolean}
     * @memberof TargetFilterOutcomeScoreConditions
     */
    _null?: boolean;
    /**
     * Outcome id to filter on.
     * @type {string}
     * @memberof TargetFilterOutcomeScoreConditions
     */
    outcome_id: string;
}
/**
 * 
 * @export
 * @interface TargetFilterPersonaSetPersonaIdConditions
 */
export interface TargetFilterPersonaSetPersonaIdConditions {
    /**
     * Equal to
     * @type {boolean}
     * @memberof TargetFilterPersonaSetPersonaIdConditions
     */
    _eq: boolean;
    /**
     * Individual persona id to filter on.
     * @type {string}
     * @memberof TargetFilterPersonaSetPersonaIdConditions
     */
    persona_id: string;
    /**
     * Persona set id to filter on.
     * @type {string}
     * @memberof TargetFilterPersonaSetPersonaIdConditions
     */
    persona_set_id: string;
}
/**
 * (Parameters used to POST a new value of the `TargetFilter` type.)
 * 
 * Filter the rows exported in a target using the scope payload elements.
 * - **Deprecated:** To filter by outcome scores, use `outcome_score`.
 * - To filter by outcome probability, use `outcome_probability`.
 * - To filter by outcome percentile, use `outcome_percentile`.
 * - To filter by persona set persona id, use `persona`.
 * - To filter by cohort membership, use `cohort_membership`.
 * - To filter by trait, use `trait`.
 * - To filter by recommender uncalibrated probability, use `recommender_uncalibrated_probability`.
 * - To filter by recommender rank, use `recommender_rank`.
 * 
 * Conditions are AND-ed together (like SQL) - each condition applies an additional constraint.
 * 
 * Nulls are excluded unless explicitly requested with `_null: true`.
 * 
 * Target filters are not supported for targets with options.type = "lookup_api".
 * @export
 * @interface TargetFilterPost
 */
export interface TargetFilterPost {
    /**
     * List of conditions to filter cohort membership on.
     * @type {Array<TargetFilterCohortMembershipConditions>}
     * @memberof TargetFilterPost
     */
    cohort_membership?: Array<TargetFilterCohortMembershipConditions>;
    /**
     * List of conditions to filter outcome percentile on.
     * @type {Array<TargetFilterOutcomePercentileConditions>}
     * @memberof TargetFilterPost
     */
    outcome_percentile?: Array<TargetFilterOutcomePercentileConditions>;
    /**
     * List of conditions to filter outcome probability on.
     * @type {Array<TargetFilterOutcomeProbabilityConditions>}
     * @memberof TargetFilterPost
     */
    outcome_probability?: Array<TargetFilterOutcomeProbabilityConditions>;
    /**
     * **Deprecated:** List of conditions to filter outcome score on.
     * @type {Array<TargetFilterOutcomeScoreConditions>}
     * @memberof TargetFilterPost
     */
    outcome_score?: Array<TargetFilterOutcomeScoreConditions>;
    /**
     * List of conditions to filter persona set personid on.
     * @type {Array<TargetFilterPersonaSetPersonaIdConditions>}
     * @memberof TargetFilterPost
     */
    persona?: Array<TargetFilterPersonaSetPersonaIdConditions>;
    /**
     * List of conditions to filter recommender rank on.
     * @type {Array<TargetFilterRecommenderRankConditions>}
     * @memberof TargetFilterPost
     */
    recommender_rank?: Array<TargetFilterRecommenderRankConditions>;
    /**
     * List of conditions to filter recommender uncalibrated probability on.
     * @type {Array<TargetFilterRecommenderUncalibratedProbabilityConditions>}
     * @memberof TargetFilterPost
     */
    recommender_uncalibrated_probability?: Array<TargetFilterRecommenderUncalibratedProbabilityConditions>;
    /**
     * List of conditions to filter traits.
     * @type {Array<TargetFilterTraitConditions>}
     * @memberof TargetFilterPost
     */
    trait?: Array<TargetFilterTraitConditions>;
}
/**
 * (Parameters used to PUT a value of the `TargetFilter` type.)
 * 
 * Filter the rows exported in a target using the scope payload elements.
 * - **Deprecated:** To filter by outcome scores, use `outcome_score`.
 * - To filter by outcome probability, use `outcome_probability`.
 * - To filter by outcome percentile, use `outcome_percentile`.
 * - To filter by persona set persona id, use `persona`.
 * - To filter by cohort membership, use `cohort_membership`.
 * - To filter by trait, use `trait`.
 * - To filter by recommender uncalibrated probability, use `recommender_uncalibrated_probability`.
 * - To filter by recommender rank, use `recommender_rank`.
 * 
 * Conditions are AND-ed together (like SQL) - each condition applies an additional constraint.
 * 
 * Nulls are excluded unless explicitly requested with `_null: true`.
 * 
 * Target filters are not supported for targets with options.type = "lookup_api".
 * @export
 * @interface TargetFilterPut
 */
export interface TargetFilterPut {
    /**
     * List of conditions to filter cohort membership on.
     * @type {Array<TargetFilterCohortMembershipConditions>}
     * @memberof TargetFilterPut
     */
    cohort_membership?: Array<TargetFilterCohortMembershipConditions>;
    /**
     * List of conditions to filter outcome percentile on.
     * @type {Array<TargetFilterOutcomePercentileConditions>}
     * @memberof TargetFilterPut
     */
    outcome_percentile?: Array<TargetFilterOutcomePercentileConditions>;
    /**
     * List of conditions to filter outcome probability on.
     * @type {Array<TargetFilterOutcomeProbabilityConditions>}
     * @memberof TargetFilterPut
     */
    outcome_probability?: Array<TargetFilterOutcomeProbabilityConditions>;
    /**
     * **Deprecated:** List of conditions to filter outcome score on.
     * @type {Array<TargetFilterOutcomeScoreConditions>}
     * @memberof TargetFilterPut
     */
    outcome_score?: Array<TargetFilterOutcomeScoreConditions>;
    /**
     * List of conditions to filter persona set personid on.
     * @type {Array<TargetFilterPersonaSetPersonaIdConditions>}
     * @memberof TargetFilterPut
     */
    persona?: Array<TargetFilterPersonaSetPersonaIdConditions>;
    /**
     * List of conditions to filter recommender rank on.
     * @type {Array<TargetFilterRecommenderRankConditions>}
     * @memberof TargetFilterPut
     */
    recommender_rank?: Array<TargetFilterRecommenderRankConditions>;
    /**
     * List of conditions to filter recommender uncalibrated probability on.
     * @type {Array<TargetFilterRecommenderUncalibratedProbabilityConditions>}
     * @memberof TargetFilterPut
     */
    recommender_uncalibrated_probability?: Array<TargetFilterRecommenderUncalibratedProbabilityConditions>;
    /**
     * List of conditions to filter traits.
     * @type {Array<TargetFilterTraitConditions>}
     * @memberof TargetFilterPut
     */
    trait?: Array<TargetFilterTraitConditions>;
}
/**
 * 
 * @export
 * @interface TargetFilterRecommenderRankConditions
 */
export interface TargetFilterRecommenderRankConditions {
    /**
     * Equal to
     * @type {number}
     * @memberof TargetFilterRecommenderRankConditions
     */
    _eq?: number;
    /**
     * Greater than
     * @type {number}
     * @memberof TargetFilterRecommenderRankConditions
     */
    _gt?: number;
    /**
     * Greater than or equal to
     * @type {number}
     * @memberof TargetFilterRecommenderRankConditions
     */
    _gte?: number;
    /**
     * Less than
     * @type {number}
     * @memberof TargetFilterRecommenderRankConditions
     */
    _lt?: number;
    /**
     * Less than or equal to
     * @type {number}
     * @memberof TargetFilterRecommenderRankConditions
     */
    _lte?: number;
    /**
     * Value is not null
     * @type {boolean}
     * @memberof TargetFilterRecommenderRankConditions
     */
    _nnull?: boolean;
    /**
     * Value is null
     * @type {boolean}
     * @memberof TargetFilterRecommenderRankConditions
     */
    _null?: boolean;
    /**
     * Recommender id to filter on.
     * @type {string}
     * @memberof TargetFilterRecommenderRankConditions
     */
    recommender_id: string;
}
/**
 * 
 * @export
 * @interface TargetFilterRecommenderUncalibratedProbabilityConditions
 */
export interface TargetFilterRecommenderUncalibratedProbabilityConditions {
    /**
     * Equal to
     * @type {number}
     * @memberof TargetFilterRecommenderUncalibratedProbabilityConditions
     */
    _eq?: number;
    /**
     * Greater than
     * @type {number}
     * @memberof TargetFilterRecommenderUncalibratedProbabilityConditions
     */
    _gt?: number;
    /**
     * Greater than or equal to
     * @type {number}
     * @memberof TargetFilterRecommenderUncalibratedProbabilityConditions
     */
    _gte?: number;
    /**
     * Less than
     * @type {number}
     * @memberof TargetFilterRecommenderUncalibratedProbabilityConditions
     */
    _lt?: number;
    /**
     * Less than or equal to
     * @type {number}
     * @memberof TargetFilterRecommenderUncalibratedProbabilityConditions
     */
    _lte?: number;
    /**
     * Value is not null
     * @type {boolean}
     * @memberof TargetFilterRecommenderUncalibratedProbabilityConditions
     */
    _nnull?: boolean;
    /**
     * Value is null
     * @type {boolean}
     * @memberof TargetFilterRecommenderUncalibratedProbabilityConditions
     */
    _null?: boolean;
    /**
     * Recommender id to filter on.
     * @type {string}
     * @memberof TargetFilterRecommenderUncalibratedProbabilityConditions
     */
    recommender_id: string;
}
/**
 * 
 * @export
 * @interface TargetFilterTraitConditions
 */
export interface TargetFilterTraitConditions {
    /**
     * Equal to
     * @type {string}
     * @memberof TargetFilterTraitConditions
     */
    _eq?: string;
    /**
     * Greater than
     * @type {number}
     * @memberof TargetFilterTraitConditions
     */
    _gt?: number;
    /**
     * Greater than or equal to
     * @type {number}
     * @memberof TargetFilterTraitConditions
     */
    _gte?: number;
    /**
     * Value is one of
     * @type {Array<string>}
     * @memberof TargetFilterTraitConditions
     */
    _in?: Array<string>;
    /**
     * Less than
     * @type {number}
     * @memberof TargetFilterTraitConditions
     */
    _lt?: number;
    /**
     * Less than or equal to
     * @type {number}
     * @memberof TargetFilterTraitConditions
     */
    _lte?: number;
    /**
     * Value contains a match to the regex (re2) expression provided. For an exact regex match, use the ^ and $ characters as specified by the (re2 documentation)[https://github.com/google/re2/wiki/Syntax].
     * @type {string}
     * @memberof TargetFilterTraitConditions
     */
    _matches?: string;
    /**
     * Not equal to
     * @type {string}
     * @memberof TargetFilterTraitConditions
     */
    _neq?: string;
    /**
     * Value is not one of
     * @type {Array<string>}
     * @memberof TargetFilterTraitConditions
     */
    _nin?: Array<string>;
    /**
     * Value is not null
     * @type {boolean}
     * @memberof TargetFilterTraitConditions
     */
    _nnull?: boolean;
    /**
     * Value is null (nulls are otherwise excluded)
     * @type {boolean}
     * @memberof TargetFilterTraitConditions
     */
    _null?: boolean;
    /**
     * The name of the trait.
     * @type {string}
     * @memberof TargetFilterTraitConditions
     */
    name: string;
}
/**
 * @type TargetLimit
 * Restrict the number of rows exported in a target.
 * - To apply an absolute row limit, use `row_count`.
 * - **Deprecated:** To filter by percentile scores, use `percentile` (use `filter outcome_percentile` instead).
 * Target limits are not supported for targets with options.type = "lookup_api"
 * @export
 */
export type TargetLimit = { method: 'percentile' } & TargetLimitPercentile | { method: 'row_count' } & TargetLimitRowCount;
/**
 * @type TargetLimitMergePatch
 * Restrict the number of rows exported in a target.
 * - To apply an absolute row limit, use `row_count`.
 * - **Deprecated:** To filter by percentile scores, use `percentile` (use `filter outcome_percentile` instead).
 * Target limits are not supported for targets with options.type = "lookup_api"
 * @export
 */
export type TargetLimitMergePatch = { method: 'percentile' } & TargetLimitPercentileMergePatch | { method: 'row_count' } & TargetLimitRowCountMergePatch;
/**
 * **Deprecated: use `filter.outcome_percentile` instead.**
 * 
 * Restrict the number of rows exported in a target by specifying a score percentile range.
 * @export
 * @interface TargetLimitPercentile
 */
export interface TargetLimitPercentile {
    /**
     * The limit method
     * @type {string}
     * @memberof TargetLimitPercentile
     */
    method: string;
    /**
     * Use the ranking suggested by the outcome's scores.
     * @type {string}
     * @memberof TargetLimitPercentile
     */
    outcome_id: string;
    /**
     * Specify a whole number to restrict the target to a maximum percentile score (inclusive).
     * @type {number}
     * @memberof TargetLimitPercentile
     */
    percentile_max: number;
    /**
     * Specify a whole number to restrict the target to a minimum percentile score (inclusive).
     * @type {number}
     * @memberof TargetLimitPercentile
     */
    percentile_min: number;
}
/**
 * (Parameters used to PATCH the `TargetLimitPercentile` type.)
 * 
 * **Deprecated: use `filter.outcome_percentile` instead.**
 * 
 * Restrict the number of rows exported in a target by specifying a score percentile range.
 * @export
 * @interface TargetLimitPercentileMergePatch
 */
export interface TargetLimitPercentileMergePatch {
    /**
     * The limit method
     * @type {string}
     * @memberof TargetLimitPercentileMergePatch
     */
    method: string;
    /**
     * Use the ranking suggested by the outcome's scores.
     * @type {string}
     * @memberof TargetLimitPercentileMergePatch
     */
    outcome_id?: string;
    /**
     * Specify a whole number to restrict the target to a maximum percentile score (inclusive).
     * @type {number}
     * @memberof TargetLimitPercentileMergePatch
     */
    percentile_max?: number;
    /**
     * Specify a whole number to restrict the target to a minimum percentile score (inclusive).
     * @type {number}
     * @memberof TargetLimitPercentileMergePatch
     */
    percentile_min?: number;
}
/**
 * (Parameters used to POST a new value of the `TargetLimitPercentile` type.)
 * 
 * **Deprecated: use `filter.outcome_percentile` instead.**
 * 
 * Restrict the number of rows exported in a target by specifying a score percentile range.
 * @export
 * @interface TargetLimitPercentilePost
 */
export interface TargetLimitPercentilePost {
    /**
     * The limit method
     * @type {string}
     * @memberof TargetLimitPercentilePost
     */
    method: string;
    /**
     * Use the ranking suggested by the outcome's scores.
     * @type {string}
     * @memberof TargetLimitPercentilePost
     */
    outcome_id: string;
    /**
     * Specify a whole number to restrict the target to a maximum percentile score (inclusive).
     * @type {number}
     * @memberof TargetLimitPercentilePost
     */
    percentile_max: number;
    /**
     * Specify a whole number to restrict the target to a minimum percentile score (inclusive).
     * @type {number}
     * @memberof TargetLimitPercentilePost
     */
    percentile_min: number;
}
/**
 * (Parameters used to PUT a value of the `TargetLimitPercentile` type.)
 * 
 * **Deprecated: use `filter.outcome_percentile` instead.**
 * 
 * Restrict the number of rows exported in a target by specifying a score percentile range.
 * @export
 * @interface TargetLimitPercentilePut
 */
export interface TargetLimitPercentilePut {
    /**
     * The limit method
     * @type {string}
     * @memberof TargetLimitPercentilePut
     */
    method: string;
    /**
     * Use the ranking suggested by the outcome's scores.
     * @type {string}
     * @memberof TargetLimitPercentilePut
     */
    outcome_id: string;
    /**
     * Specify a whole number to restrict the target to a maximum percentile score (inclusive).
     * @type {number}
     * @memberof TargetLimitPercentilePut
     */
    percentile_max: number;
    /**
     * Specify a whole number to restrict the target to a minimum percentile score (inclusive).
     * @type {number}
     * @memberof TargetLimitPercentilePut
     */
    percentile_min: number;
}
/**
 * @type TargetLimitPost
 * Restrict the number of rows exported in a target.
 * - To apply an absolute row limit, use `row_count`.
 * - **Deprecated:** To filter by percentile scores, use `percentile` (use `filter outcome_percentile` instead).
 * Target limits are not supported for targets with options.type = "lookup_api"
 * @export
 */
export type TargetLimitPost = { method: 'percentile' } & TargetLimitPercentilePost | { method: 'row_count' } & TargetLimitRowCountPost;
/**
 * @type TargetLimitPut
 * Restrict the number of rows exported in a target.
 * - To apply an absolute row limit, use `row_count`.
 * - **Deprecated:** To filter by percentile scores, use `percentile` (use `filter outcome_percentile` instead).
 * Target limits are not supported for targets with options.type = "lookup_api"
 * @export
 */
export type TargetLimitPut = { method: 'percentile' } & TargetLimitPercentilePut | { method: 'row_count' } & TargetLimitRowCountPut;
/**
 * Restrict the number of rows exported in a target by specifying an absolute row limit. Equivalent to `LIMIT` in SQL.
 * 
 * If an outcome is specified, the results are sorted by score before taking the limit. Otherwise the ordering is random.
 * @export
 * @interface TargetLimitRowCount
 */
export interface TargetLimitRowCount {
    /**
     * When an `outcome_id` is given, this parameter sets the sort direction: for the "top" scores, specify `descending`. For the "bottom" scores, specify `ascending`.
     * 
     * If not specified, defaults to `descending`.
     * @type {string}
     * @memberof TargetLimitRowCount
     */
    direction?: TargetLimitRowCountDirectionEnum;
    /**
     * The limit method
     * @type {string}
     * @memberof TargetLimitRowCount
     */
    method: string;
    /**
     * Use the ranking suggested by the outcome's scores.
     * @type {string}
     * @memberof TargetLimitRowCount
     */
    outcome_id?: string;
    /**
     * Specify a whole number to restrict the target to a specific number of records.
     * @type {number}
     * @memberof TargetLimitRowCount
     */
    threshold: number;
}

/**
* @export
* @enum {string}
*/
export enum TargetLimitRowCountDirectionEnum {
    Ascending = 'ascending',
    Descending = 'descending'
}
/**
 * (Parameters used to PATCH the `TargetLimitRowCount` type.)
 * 
 * Restrict the number of rows exported in a target by specifying an absolute row limit. Equivalent to `LIMIT` in SQL.
 * 
 * If an outcome is specified, the results are sorted by score before taking the limit. Otherwise the ordering is random.
 * @export
 * @interface TargetLimitRowCountMergePatch
 */
export interface TargetLimitRowCountMergePatch {
    /**
     * When an `outcome_id` is given, this parameter sets the sort direction: for the "top" scores, specify `descending`. For the "bottom" scores, specify `ascending`.
     * 
     * If not specified, defaults to `descending`.
     * @type {string}
     * @memberof TargetLimitRowCountMergePatch
     */
    direction?: TargetLimitRowCountMergePatchDirectionEnum;
    /**
     * The limit method
     * @type {string}
     * @memberof TargetLimitRowCountMergePatch
     */
    method: string;
    /**
     * Use the ranking suggested by the outcome's scores.
     * @type {string}
     * @memberof TargetLimitRowCountMergePatch
     */
    outcome_id?: string | null;
    /**
     * Specify a whole number to restrict the target to a specific number of records.
     * @type {number}
     * @memberof TargetLimitRowCountMergePatch
     */
    threshold?: number;
}

/**
* @export
* @enum {string}
*/
export enum TargetLimitRowCountMergePatchDirectionEnum {
    Ascending = 'ascending',
    Descending = 'descending'
}
/**
 * (Parameters used to POST a new value of the `TargetLimitRowCount` type.)
 * 
 * Restrict the number of rows exported in a target by specifying an absolute row limit. Equivalent to `LIMIT` in SQL.
 * 
 * If an outcome is specified, the results are sorted by score before taking the limit. Otherwise the ordering is random.
 * @export
 * @interface TargetLimitRowCountPost
 */
export interface TargetLimitRowCountPost {
    /**
     * When an `outcome_id` is given, this parameter sets the sort direction: for the "top" scores, specify `descending`. For the "bottom" scores, specify `ascending`.
     * 
     * If not specified, defaults to `descending`.
     * @type {string}
     * @memberof TargetLimitRowCountPost
     */
    direction?: TargetLimitRowCountPostDirectionEnum;
    /**
     * The limit method
     * @type {string}
     * @memberof TargetLimitRowCountPost
     */
    method: string;
    /**
     * Use the ranking suggested by the outcome's scores.
     * @type {string}
     * @memberof TargetLimitRowCountPost
     */
    outcome_id?: string;
    /**
     * Specify a whole number to restrict the target to a specific number of records.
     * @type {number}
     * @memberof TargetLimitRowCountPost
     */
    threshold: number;
}

/**
* @export
* @enum {string}
*/
export enum TargetLimitRowCountPostDirectionEnum {
    Ascending = 'ascending',
    Descending = 'descending'
}
/**
 * (Parameters used to PUT a value of the `TargetLimitRowCount` type.)
 * 
 * Restrict the number of rows exported in a target by specifying an absolute row limit. Equivalent to `LIMIT` in SQL.
 * 
 * If an outcome is specified, the results are sorted by score before taking the limit. Otherwise the ordering is random.
 * @export
 * @interface TargetLimitRowCountPut
 */
export interface TargetLimitRowCountPut {
    /**
     * When an `outcome_id` is given, this parameter sets the sort direction: for the "top" scores, specify `descending`. For the "bottom" scores, specify `ascending`.
     * 
     * If not specified, defaults to `descending`.
     * @type {string}
     * @memberof TargetLimitRowCountPut
     */
    direction?: TargetLimitRowCountPutDirectionEnum;
    /**
     * The limit method
     * @type {string}
     * @memberof TargetLimitRowCountPut
     */
    method: string;
    /**
     * Use the ranking suggested by the outcome's scores.
     * @type {string}
     * @memberof TargetLimitRowCountPut
     */
    outcome_id?: string;
    /**
     * Specify a whole number to restrict the target to a specific number of records.
     * @type {number}
     * @memberof TargetLimitRowCountPut
     */
    threshold: number;
}

/**
* @export
* @enum {string}
*/
export enum TargetLimitRowCountPutDirectionEnum {
    Ascending = 'ascending',
    Descending = 'descending'
}
/**
 * The mode of the target. This determines the structure of the lookup request and response.
 * @export
 * @enum {string}
 */
export enum TargetLookupMode {
    Identified = 'identified',
    Aggregated = 'aggregated'
}
/**
 * The structure of a lookup request depends on the "mode" of the target. 
 * 
 * For an identified target, the payload will contain the Personal Identifying Information (PII) of an individual for whom Faraday should attempt to retrieve a score. The following identifiers are supported:
 *   - person_first_name
 *   - person_last_name
 *   - house_number_and_street
 *   - city
 *   - state
 *   - postcode
 *   - email
 *   - email_hash (must be a standard SHA256 hash)
 *   - phone
 * 
 * In order to properly match, certain combinations of PII are required. See [the Lookup API specification](https://faraday.ai/docs/features/lookup-api#constructing-a-request). We encourage the use of the new `identity_sets` field which allows for one or more PII combinations for the same person to be sent in a single request. Providing PII at the top level in the request object is still supported but deprecated. For example, if there are multiple known email or physical addresses for a person, you can send them all in a single request using `identity_sets`.
 * 
 * For an aggregated target, the payload should contain a single key, which will be the same as the aggregate used in the target configuration. For example, if your target has an aggregate of `county`, 
 * then the target will only accept payloads with the key `county`. You must use standard US Census FIPS codes to lookup results.
 * @export
 * @interface TargetLookupRequest
 */
export interface TargetLookupRequest {
    /**
     * 
     * @type {Array<LookupApiIdentitySets>}
     * @memberof TargetLookupRequest
     */
    identity_sets?: Array<LookupApiIdentitySets>;
    /**
     * 
     * @type {string}
     * @memberof TargetLookupRequest
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof TargetLookupRequest
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof TargetLookupRequest
     */
    email_hash?: string;
    /**
     * 
     * @type {string}
     * @memberof TargetLookupRequest
     */
    house_number_and_street?: string;
    /**
     * 
     * @type {string}
     * @memberof TargetLookupRequest
     */
    latitude?: string;
    /**
     * 
     * @type {string}
     * @memberof TargetLookupRequest
     */
    longitude?: string;
    /**
     * 
     * @type {string}
     * @memberof TargetLookupRequest
     */
    person_first_name?: string;
    /**
     * 
     * @type {string}
     * @memberof TargetLookupRequest
     */
    person_last_name?: string;
    /**
     * 
     * @type {string}
     * @memberof TargetLookupRequest
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof TargetLookupRequest
     */
    postcode?: string;
    /**
     * 
     * @type {string}
     * @memberof TargetLookupRequest
     */
    search_radius?: string;
    /**
     * 
     * @type {string}
     * @memberof TargetLookupRequest
     */
    state?: string;
}
/**
 * The structure of a lookup response depends on the target and the scope it is attached to. 
 * 
 * In general, we return all personal identifying information (PII) which was sent to us. If the PII was matched, then Faraday will also return all of the Scope's defined payload components for the matched person, e.g. outcome percentiles & probability, persona membership, etc.
 * 
 * If the PII was not matched, then the response will contain an `error` key, with the message "Could not match an identity with the provided information". See [the Lookup API specification](https://faraday.ai/docs/features/lookup-api#response) for more information on what response payloads are available and what their shape is.
 * @export
 * @interface TargetLookupResponse
 */
export interface TargetLookupResponse {
    /**
     * An array of shared residents of the matched location which were used in aggregation.
     * @type {Array<object>}
     * @memberof TargetLookupResponse
     */
    cohabitants?: Array<object>;
    /**
     * 
     * @type {string}
     * @memberof TargetLookupResponse
     */
    error?: string;
    /**
     * 
     * @type {LookupIdentityProvider}
     * @memberof TargetLookupResponse
     */
    identity_provider?: LookupIdentityProvider;
    /**
     * 
     * @type {LookupApiIdentitySets}
     * @memberof TargetLookupResponse
     */
    identity_set?: LookupApiIdentitySets;
    /**
     * 
     * @type {LookupMatchType}
     * @memberof TargetLookupResponse
     */
    match_type?: LookupMatchType;
    /**
     * 
     * @type {string}
     * @memberof TargetLookupResponse
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof TargetLookupResponse
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof TargetLookupResponse
     */
    email_hash?: string;
    /**
     * 
     * @type {string}
     * @memberof TargetLookupResponse
     */
    house_number_and_street?: string;
    /**
     * 
     * @type {string}
     * @memberof TargetLookupResponse
     */
    latitude?: string;
    /**
     * 
     * @type {string}
     * @memberof TargetLookupResponse
     */
    longitude?: string;
    /**
     * 
     * @type {string}
     * @memberof TargetLookupResponse
     */
    person_first_name?: string;
    /**
     * 
     * @type {string}
     * @memberof TargetLookupResponse
     */
    person_last_name?: string;
    /**
     * 
     * @type {string}
     * @memberof TargetLookupResponse
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof TargetLookupResponse
     */
    postcode?: string;
    /**
     * 
     * @type {string}
     * @memberof TargetLookupResponse
     */
    search_radius?: string;
    /**
     * 
     * @type {string}
     * @memberof TargetLookupResponse
     */
    state?: string;
}
/**
 * (Parameters used to PATCH the `Target` type.)
 * 
 * Instructions on how to export output data defined by a scope.
 * 
 * There are three types of targets:
 * <table>
 * <thead>
 * <tr><th>Target type</th><th>Description</th><th>API requirement</th></tr>
 * </thead>
 * <tbody>
 * <tr><td><strong>Publication</strong></td><td>Faraday <em>hosts</em> your predictions for convenient retrieval as needed.</td><td>Specify a <code>type</code> of <code>hosted_csv</code> in <code>options</code>. Omit <code>connection_id</code>.</td></tr>
 * <tr><td><strong>Replication</strong></td><td>Faraday copies your predictions to systems <em>you</em> control. You may then push them to third parties like Facebook, Google Ads, etc.</td><td>Specify a valid <code>connection_id</code> and the corresponding <code>type</code> of the connection in <code>options</code>.</td></tr>
 * <tr><td><strong>Managed</strong></td><td>Faraday manages a push to third parties like Facebook, Google Ads, and more.</td><td>Must be on an enterprise plan. Contact Customer Success to set up.</td></tr>
 * </tbody>
 * </table>
 * @export
 * @interface TargetMergePatch
 */
export interface TargetMergePatch {
    /**
     * 
     * @type {TargetMergePatchAnalysisConfig}
     * @memberof TargetMergePatch
     */
    analysis_config?: TargetMergePatchAnalysisConfig | null;
    /**
     * If this is a replication (externally-hosted) target, the UUID of a connection - see <a href="https://faraday.ai/developers/reference/createconnection">/connections</a> for more detail. 
     * 
     * If this is not a replication target, omit this parameter.
     * @type {string}
     * @memberof TargetMergePatch
     */
    connection_id?: string | null;
    /**
     * By default, targets include all columns in <a href="https://faraday.ai/developers/reference/createtargetpreview">the target preview</a>, with no name changes.
     * 
     * Users may use this parameter to specify their own set of "structure transformations" to override the default selection, order, and name of exported columns.
     * 
     * The shape of this parameter is an array of objects where the order of the columns to export is given by the order of the array. Each item represents a 1:1 mapping of scope input column to target output column. Only those columns specified here are emitted in the target output.
     * @type {Array<TargetStructureTransformation>}
     * @memberof TargetMergePatch
     */
    custom_structure?: Array<TargetStructureTransformation> | null;
    /**
     * 
     * @type {TargetFilterMergePatch}
     * @memberof TargetMergePatch
     */
    filter?: TargetFilterMergePatch | null;
    /**
     * By default, column names are exported in a machine-readable format with underscored uuids. 
     * 
     * Setting this to `true` replaces ids with literates in the exported column names.
     * @type {boolean}
     * @memberof TargetMergePatch
     */
    human_readable?: boolean | null;
    /**
     * 
     * @type {TargetLimitMergePatch}
     * @memberof TargetMergePatch
     */
    limit?: TargetLimitMergePatch | null;
    /**
     * A user-friendly name of the target.
     * @type {string}
     * @memberof TargetMergePatch
     */
    name?: string;
    /**
     * 
     * @type {TargetOptionsMergePatch}
     * @memberof TargetMergePatch
     */
    options?: TargetOptionsMergePatch;
    /**
     * **Deprecated: use `custom_structure`.**
     * 
     * By default, targets include all columns in <a href="https://faraday.ai/developers/reference/createtargetpreview">the target preview</a>, with no name changes.
     * This parameter is an override of the default that enables an explicit mapping of columns that should be included in the target export, along with the exported column name.
     * Each key is the name the column originally had, and each value is the desired name.
     * Example:
     * ```
     * {
     *   "person_first_name": "first_name",
     *   "person_last_name": "last_name",
     *   "city": "city"
     * }
     * ```
     * In the example above, the target will only include the "first_name", "last_name", and "city" columns.
     * @type {{ [key: string]: string; }}
     * @memberof TargetMergePatch
     */
    payload_map?: { [key: string]: string; } | null;
    /**
     * 
     * @type {TargetModesMergePatch}
     * @memberof TargetMergePatch
     */
    representation?: TargetModesMergePatch;
}
/**
 * Configuration for the analysis of the target.
 * @export
 * @interface TargetMergePatchAnalysisConfig
 */
export interface TargetMergePatchAnalysisConfig {
    /**
     * Configuration for the analysis of geographic dimensions
     * @type {Array<string>}
     * @memberof TargetMergePatchAnalysisConfig
     */
    geographies?: Array<TargetMergePatchAnalysisConfigGeographiesEnum>;
    /**
     * Configuration for the analysis of traits. For traits created through `output_to_traits` via `/datasets`, specify the trait name. For traits from Faraday's Internal Graph (FIG), specify the name prefixed by `fig/` ex. `fig/age`.
     * @type {Array<string>}
     * @memberof TargetMergePatchAnalysisConfig
     */
    traits?: Array<string>;
}

/**
* @export
* @enum {string}
*/
export enum TargetMergePatchAnalysisConfigGeographiesEnum {
    Postcode = 'postcode',
    State = 'state'
}
/**
 * @type TargetModes
 * Choose how the scopes's output should be formatted for this target. The following **modes** are available:
 * 
 * **`aggregated`**
 *   * This option will produce one row per geographical area.
 *   * This option is best for geo-targeted ad campaigns.
 * 
 * **`hashed`**
 *   * Faraday's name, physical address, and email is emitted in hashed form. Data is randomly ordered to prevent re-identification. All payload columns are emitted except raw propensity scores and attributes. 
 *   * This option facilitates digital acquisition use cases.
 * 
 * **`identified`**
 *   * All identifiable information specified by `identity_sets` in source data is emitted in cleartext - see <a href="https://faraday.ai/developers/reference/createdataset">/datasets</a> for more detail. All payload columns are emitted. Your account may have a limit on how many rows can be returned.
 *   * This option is best for direct mail and canvassing campaigns.
 * 
 * **`referenced`**
 *   * This option will produce one row per person based on the identifier column of a dataset of your choice. To protect privacy, this will not include identifying information other than the key you select.
 *   * This option is best for merging data back into your stack.
 * @export
 */
export type TargetModes = { mode: 'aggregated' } & TargetModesAggregated | { mode: 'hashed' } & TargetModesHashed | { mode: 'identified' } & TargetModesIdentified | { mode: 'referenced' } & TargetModesReferenced;
/**
 * Suitable for geo-targeted ad campaigns. Not supported by options.type = "lookup_api".
 * @export
 * @interface TargetModesAggregated
 */
export interface TargetModesAggregated {
    /**
     * 
     * @type {TargetAggregateGeographic}
     * @memberof TargetModesAggregated
     */
    aggregate: TargetAggregateGeographic;
    /**
     * Include the geometry of the geographic area in the target output.
     * @type {boolean}
     * @memberof TargetModesAggregated
     */
    include_geometry?: boolean;
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesAggregated
     */
    mode: string;
    /**
     * 
     * @type {TargetTransformPresetAggregated}
     * @memberof TargetModesAggregated
     */
    transform_preset?: TargetTransformPresetAggregated;
}
/**
 * (Parameters used to PATCH the `TargetModesAggregated` type.)
 * 
 * Suitable for geo-targeted ad campaigns. Not supported by options.type = "lookup_api".
 * @export
 * @interface TargetModesAggregatedMergePatch
 */
export interface TargetModesAggregatedMergePatch {
    /**
     * 
     * @type {TargetAggregateGeographic}
     * @memberof TargetModesAggregatedMergePatch
     */
    aggregate?: TargetAggregateGeographic;
    /**
     * Include the geometry of the geographic area in the target output.
     * @type {boolean}
     * @memberof TargetModesAggregatedMergePatch
     */
    include_geometry?: boolean | null;
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesAggregatedMergePatch
     */
    mode: string;
    /**
     * 
     * @type {TargetTransformPresetAggregated}
     * @memberof TargetModesAggregatedMergePatch
     */
    transform_preset?: TargetTransformPresetAggregated | null;
}
/**
 * (Parameters used to POST a new value of the `TargetModesAggregated` type.)
 * 
 * Suitable for geo-targeted ad campaigns. Not supported by options.type = "lookup_api".
 * @export
 * @interface TargetModesAggregatedPost
 */
export interface TargetModesAggregatedPost {
    /**
     * 
     * @type {TargetAggregateGeographic}
     * @memberof TargetModesAggregatedPost
     */
    aggregate: TargetAggregateGeographic;
    /**
     * Include the geometry of the geographic area in the target output.
     * @type {boolean}
     * @memberof TargetModesAggregatedPost
     */
    include_geometry?: boolean;
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesAggregatedPost
     */
    mode: string;
    /**
     * 
     * @type {TargetTransformPresetAggregated}
     * @memberof TargetModesAggregatedPost
     */
    transform_preset?: TargetTransformPresetAggregated;
}
/**
 * (Parameters used to PUT a value of the `TargetModesAggregated` type.)
 * 
 * Suitable for geo-targeted ad campaigns. Not supported by options.type = "lookup_api".
 * @export
 * @interface TargetModesAggregatedPut
 */
export interface TargetModesAggregatedPut {
    /**
     * 
     * @type {TargetAggregateGeographic}
     * @memberof TargetModesAggregatedPut
     */
    aggregate: TargetAggregateGeographic;
    /**
     * Include the geometry of the geographic area in the target output.
     * @type {boolean}
     * @memberof TargetModesAggregatedPut
     */
    include_geometry?: boolean;
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesAggregatedPut
     */
    mode: string;
    /**
     * 
     * @type {TargetTransformPresetAggregated}
     * @memberof TargetModesAggregatedPut
     */
    transform_preset?: TargetTransformPresetAggregated;
}
/**
 * Suitable for digital acquisition use cases. Not supported by options.type = "lookup_api"
 * @export
 * @interface TargetModesHashed
 */
export interface TargetModesHashed {
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesHashed
     */
    mode: string;
    /**
     * 
     * @type {TargetTransformPresetHashed}
     * @memberof TargetModesHashed
     */
    transform_preset?: TargetTransformPresetHashed;
}
/**
 * (Parameters used to PATCH the `TargetModesHashed` type.)
 * 
 * Suitable for digital acquisition use cases. Not supported by options.type = "lookup_api"
 * @export
 * @interface TargetModesHashedMergePatch
 */
export interface TargetModesHashedMergePatch {
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesHashedMergePatch
     */
    mode: string;
    /**
     * 
     * @type {TargetTransformPresetHashed}
     * @memberof TargetModesHashedMergePatch
     */
    transform_preset?: TargetTransformPresetHashed | null;
}
/**
 * (Parameters used to POST a new value of the `TargetModesHashed` type.)
 * 
 * Suitable for digital acquisition use cases. Not supported by options.type = "lookup_api"
 * @export
 * @interface TargetModesHashedPost
 */
export interface TargetModesHashedPost {
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesHashedPost
     */
    mode: string;
    /**
     * 
     * @type {TargetTransformPresetHashed}
     * @memberof TargetModesHashedPost
     */
    transform_preset?: TargetTransformPresetHashed;
}
/**
 * (Parameters used to PUT a value of the `TargetModesHashed` type.)
 * 
 * Suitable for digital acquisition use cases. Not supported by options.type = "lookup_api"
 * @export
 * @interface TargetModesHashedPut
 */
export interface TargetModesHashedPut {
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesHashedPut
     */
    mode: string;
    /**
     * 
     * @type {TargetTransformPresetHashed}
     * @memberof TargetModesHashedPut
     */
    transform_preset?: TargetTransformPresetHashed;
}
/**
 * Suitable for direct mail and canvassing.
 * @export
 * @interface TargetModesIdentified
 */
export interface TargetModesIdentified {
    /**
     * 
     * @type {TargetAggregateIdentified}
     * @memberof TargetModesIdentified
     */
    aggregate: TargetAggregateIdentified;
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesIdentified
     */
    mode: string;
    /**
     * Allows additional historical address, email, and phone per row in json array format. A special plan feature is required for this to work, please contact support.
     * @type {boolean}
     * @memberof TargetModesIdentified
     */
    output_multiple_identities?: boolean;
    /**
     * 
     * @type {TargetTransformPresetIdentified}
     * @memberof TargetModesIdentified
     */
    transform_preset?: TargetTransformPresetIdentified;
}
/**
 * (Parameters used to PATCH the `TargetModesIdentified` type.)
 * 
 * Suitable for direct mail and canvassing.
 * @export
 * @interface TargetModesIdentifiedMergePatch
 */
export interface TargetModesIdentifiedMergePatch {
    /**
     * 
     * @type {TargetAggregateIdentified}
     * @memberof TargetModesIdentifiedMergePatch
     */
    aggregate?: TargetAggregateIdentified;
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesIdentifiedMergePatch
     */
    mode: string;
    /**
     * Allows additional historical address, email, and phone per row in json array format. A special plan feature is required for this to work, please contact support.
     * @type {boolean}
     * @memberof TargetModesIdentifiedMergePatch
     */
    output_multiple_identities?: boolean | null;
    /**
     * 
     * @type {TargetTransformPresetIdentified}
     * @memberof TargetModesIdentifiedMergePatch
     */
    transform_preset?: TargetTransformPresetIdentified | null;
}
/**
 * (Parameters used to POST a new value of the `TargetModesIdentified` type.)
 * 
 * Suitable for direct mail and canvassing.
 * @export
 * @interface TargetModesIdentifiedPost
 */
export interface TargetModesIdentifiedPost {
    /**
     * 
     * @type {TargetAggregateIdentified}
     * @memberof TargetModesIdentifiedPost
     */
    aggregate: TargetAggregateIdentified;
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesIdentifiedPost
     */
    mode: string;
    /**
     * Allows additional historical address, email, and phone per row in json array format. A special plan feature is required for this to work, please contact support.
     * @type {boolean}
     * @memberof TargetModesIdentifiedPost
     */
    output_multiple_identities?: boolean;
    /**
     * 
     * @type {TargetTransformPresetIdentified}
     * @memberof TargetModesIdentifiedPost
     */
    transform_preset?: TargetTransformPresetIdentified;
}
/**
 * (Parameters used to PUT a value of the `TargetModesIdentified` type.)
 * 
 * Suitable for direct mail and canvassing.
 * @export
 * @interface TargetModesIdentifiedPut
 */
export interface TargetModesIdentifiedPut {
    /**
     * 
     * @type {TargetAggregateIdentified}
     * @memberof TargetModesIdentifiedPut
     */
    aggregate: TargetAggregateIdentified;
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesIdentifiedPut
     */
    mode: string;
    /**
     * Allows additional historical address, email, and phone per row in json array format. A special plan feature is required for this to work, please contact support.
     * @type {boolean}
     * @memberof TargetModesIdentifiedPut
     */
    output_multiple_identities?: boolean;
    /**
     * 
     * @type {TargetTransformPresetIdentified}
     * @memberof TargetModesIdentifiedPut
     */
    transform_preset?: TargetTransformPresetIdentified;
}
/**
 * @type TargetModesMergePatch
 * Choose how the scopes's output should be formatted for this target. The following **modes** are available:
 * 
 * **`aggregated`**
 *   * This option will produce one row per geographical area.
 *   * This option is best for geo-targeted ad campaigns.
 * 
 * **`hashed`**
 *   * Faraday's name, physical address, and email is emitted in hashed form. Data is randomly ordered to prevent re-identification. All payload columns are emitted except raw propensity scores and attributes. 
 *   * This option facilitates digital acquisition use cases.
 * 
 * **`identified`**
 *   * All identifiable information specified by `identity_sets` in source data is emitted in cleartext - see <a href="https://faraday.ai/developers/reference/createdataset">/datasets</a> for more detail. All payload columns are emitted. Your account may have a limit on how many rows can be returned.
 *   * This option is best for direct mail and canvassing campaigns.
 * 
 * **`referenced`**
 *   * This option will produce one row per person based on the identifier column of a dataset of your choice. To protect privacy, this will not include identifying information other than the key you select.
 *   * This option is best for merging data back into your stack.
 * @export
 */
export type TargetModesMergePatch = { mode: 'aggregated' } & TargetModesAggregatedMergePatch | { mode: 'hashed' } & TargetModesHashedMergePatch | { mode: 'identified' } & TargetModesIdentifiedMergePatch | { mode: 'referenced' } & TargetModesReferencedMergePatch;
/**
 * @type TargetModesPost
 * Choose how the scopes's output should be formatted for this target. The following **modes** are available:
 * 
 * **`aggregated`**
 *   * This option will produce one row per geographical area.
 *   * This option is best for geo-targeted ad campaigns.
 * 
 * **`hashed`**
 *   * Faraday's name, physical address, and email is emitted in hashed form. Data is randomly ordered to prevent re-identification. All payload columns are emitted except raw propensity scores and attributes. 
 *   * This option facilitates digital acquisition use cases.
 * 
 * **`identified`**
 *   * All identifiable information specified by `identity_sets` in source data is emitted in cleartext - see <a href="https://faraday.ai/developers/reference/createdataset">/datasets</a> for more detail. All payload columns are emitted. Your account may have a limit on how many rows can be returned.
 *   * This option is best for direct mail and canvassing campaigns.
 * 
 * **`referenced`**
 *   * This option will produce one row per person based on the identifier column of a dataset of your choice. To protect privacy, this will not include identifying information other than the key you select.
 *   * This option is best for merging data back into your stack.
 * @export
 */
export type TargetModesPost = { mode: 'aggregated' } & TargetModesAggregatedPost | { mode: 'hashed' } & TargetModesHashedPost | { mode: 'identified' } & TargetModesIdentifiedPost | { mode: 'referenced' } & TargetModesReferencedPost;
/**
 * @type TargetModesPut
 * Choose how the scopes's output should be formatted for this target. The following **modes** are available:
 * 
 * **`aggregated`**
 *   * This option will produce one row per geographical area.
 *   * This option is best for geo-targeted ad campaigns.
 * 
 * **`hashed`**
 *   * Faraday's name, physical address, and email is emitted in hashed form. Data is randomly ordered to prevent re-identification. All payload columns are emitted except raw propensity scores and attributes. 
 *   * This option facilitates digital acquisition use cases.
 * 
 * **`identified`**
 *   * All identifiable information specified by `identity_sets` in source data is emitted in cleartext - see <a href="https://faraday.ai/developers/reference/createdataset">/datasets</a> for more detail. All payload columns are emitted. Your account may have a limit on how many rows can be returned.
 *   * This option is best for direct mail and canvassing campaigns.
 * 
 * **`referenced`**
 *   * This option will produce one row per person based on the identifier column of a dataset of your choice. To protect privacy, this will not include identifying information other than the key you select.
 *   * This option is best for merging data back into your stack.
 * @export
 */
export type TargetModesPut = { mode: 'aggregated' } & TargetModesAggregatedPut | { mode: 'hashed' } & TargetModesHashedPut | { mode: 'identified' } & TargetModesIdentifiedPut | { mode: 'referenced' } & TargetModesReferencedPut;
/**
 * Suitable for data warehouse integrations. Not supported by options.type = "lookup_api"
 * @export
 * @interface TargetModesReferenced
 */
export interface TargetModesReferenced {
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesReferenced
     */
    mode: string;
    /**
     * Allows additional historical address, email, and phone per row in json array format. A special plan feature is required for this to work, please contact support.
     * @type {boolean}
     * @memberof TargetModesReferenced
     */
    output_multiple_identities?: boolean;
    /**
     * 
     * @type {TargetReferencedReference}
     * @memberof TargetModesReferenced
     */
    reference: TargetReferencedReference;
    /**
     * **Deprecated:** use reference instead
     * The referenced dataset ID. This dataset must have a `reference_key_column`.
     * @type {string}
     * @memberof TargetModesReferenced
     */
    reference_dataset_id?: string;
    /**
     * 
     * @type {TargetTransformPresetReferenced}
     * @memberof TargetModesReferenced
     */
    transform_preset?: TargetTransformPresetReferenced;
}
/**
 * (Parameters used to PATCH the `TargetModesReferenced` type.)
 * 
 * Suitable for data warehouse integrations. Not supported by options.type = "lookup_api"
 * @export
 * @interface TargetModesReferencedMergePatch
 */
export interface TargetModesReferencedMergePatch {
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesReferencedMergePatch
     */
    mode: string;
    /**
     * Allows additional historical address, email, and phone per row in json array format. A special plan feature is required for this to work, please contact support.
     * @type {boolean}
     * @memberof TargetModesReferencedMergePatch
     */
    output_multiple_identities?: boolean | null;
    /**
     * 
     * @type {TargetReferencedReference}
     * @memberof TargetModesReferencedMergePatch
     */
    reference?: TargetReferencedReference;
    /**
     * **Deprecated:** use reference instead
     * The referenced dataset ID. This dataset must have a `reference_key_column`.
     * @type {string}
     * @memberof TargetModesReferencedMergePatch
     */
    reference_dataset_id?: string | null;
    /**
     * 
     * @type {TargetTransformPresetReferenced}
     * @memberof TargetModesReferencedMergePatch
     */
    transform_preset?: TargetTransformPresetReferenced | null;
}
/**
 * (Parameters used to POST a new value of the `TargetModesReferenced` type.)
 * 
 * Suitable for data warehouse integrations. Not supported by options.type = "lookup_api"
 * @export
 * @interface TargetModesReferencedPost
 */
export interface TargetModesReferencedPost {
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesReferencedPost
     */
    mode: string;
    /**
     * Allows additional historical address, email, and phone per row in json array format. A special plan feature is required for this to work, please contact support.
     * @type {boolean}
     * @memberof TargetModesReferencedPost
     */
    output_multiple_identities?: boolean;
    /**
     * 
     * @type {TargetReferencedReference}
     * @memberof TargetModesReferencedPost
     */
    reference: TargetReferencedReference;
    /**
     * **Deprecated:** use reference instead
     * The referenced dataset ID. This dataset must have a `reference_key_column`.
     * @type {string}
     * @memberof TargetModesReferencedPost
     */
    reference_dataset_id?: string;
    /**
     * 
     * @type {TargetTransformPresetReferenced}
     * @memberof TargetModesReferencedPost
     */
    transform_preset?: TargetTransformPresetReferenced;
}
/**
 * (Parameters used to PUT a value of the `TargetModesReferenced` type.)
 * 
 * Suitable for data warehouse integrations. Not supported by options.type = "lookup_api"
 * @export
 * @interface TargetModesReferencedPut
 */
export interface TargetModesReferencedPut {
    /**
     * The replication mode
     * @type {string}
     * @memberof TargetModesReferencedPut
     */
    mode: string;
    /**
     * Allows additional historical address, email, and phone per row in json array format. A special plan feature is required for this to work, please contact support.
     * @type {boolean}
     * @memberof TargetModesReferencedPut
     */
    output_multiple_identities?: boolean;
    /**
     * 
     * @type {TargetReferencedReference}
     * @memberof TargetModesReferencedPut
     */
    reference: TargetReferencedReference;
    /**
     * **Deprecated:** use reference instead
     * The referenced dataset ID. This dataset must have a `reference_key_column`.
     * @type {string}
     * @memberof TargetModesReferencedPut
     */
    reference_dataset_id?: string;
    /**
     * 
     * @type {TargetTransformPresetReferenced}
     * @memberof TargetModesReferencedPut
     */
    transform_preset?: TargetTransformPresetReferenced;
}
/**
 * @type TargetOptions
 * The export target configuration options. These vary by connection type.
 * @export
 */
export type TargetOptions = { type: 'aws_aurora_mysql' } & TargetOptionsAwsAuroraMysql | { type: 'aws_aurora_postgres' } & TargetOptionsAwsAuroraPostgres | { type: 'aws_rds_mysql' } & TargetOptionsAwsRdsMysql | { type: 'aws_rds_postgres' } & TargetOptionsAwsRdsPostgres | { type: 'aws_rds_sql_server' } & TargetOptionsAwsRdsSqlServer | { type: 'aws_redshift_serverless' } & TargetOptionsAwsRedshiftServerless | { type: 'azure_sql_server' } & TargetOptionsAzureSqlServer | { type: 'bigquery' } & TargetOptionsBigQuery | { type: 'facebook_custom_audiences' } & TargetOptionsFacebookCustomAudiences | { type: 'gcp_cloud_sql_mysql' } & TargetOptionsGcpCloudSqlMysql | { type: 'gcp_cloud_sql_postgres' } & TargetOptionsGcpCloudSqlPostgres | { type: 'gcp_cloud_sql_sql_server' } & TargetOptionsGcpCloudSqlSqlServer | { type: 'gcp_gcs_csv' } & TargetOptionsGcpGcsCsv | { type: 'google_ads' } & TargetOptionsGoogleAds | { type: 'hosted_csv' } & TargetOptionsHostedCsv | { type: 'hubspot' } & TargetOptionsHubspot | { type: 'iterable' } & TargetOptionsIterable | { type: 'klaviyo' } & TargetOptionsKlaviyo | { type: 'linkedin_ads' } & TargetOptionsLinkedinAds | { type: 'lookup_api' } & TargetOptionsLookupApi | { type: 'motherduck' } & TargetOptionsMotherduck | { type: 'mysql' } & TargetOptionsMysql | { type: 'pinterest_ads' } & TargetOptionsPinterestAds | { type: 'poplar' } & TargetOptionsPoplar | { type: 'postgres' } & TargetOptionsPostgres | { type: 'redshift' } & TargetOptionsRedshift | { type: 's3_csv' } & TargetOptionsS3Csv | { type: 'salesforce' } & TargetOptionsSalesforce | { type: 'salesforce_marketing_cloud' } & TargetOptionsSalesforceMarketingCloud | { type: 'segment' } & TargetOptionsSegment | { type: 'sftp' } & TargetOptionsSftp | { type: 'snowflake' } & TargetOptionsSnowflake | { type: 'sql_server' } & TargetOptionsSqlServer | { type: 'the_trade_desk' } & TargetOptionsTheTradeDesk | { type: 'tiktok' } & TargetOptionsTiktok;
/**
 * Aurora (MySQL) target options
 * @export
 * @interface TargetOptionsAwsAuroraMysql
 */
export interface TargetOptionsAwsAuroraMysql {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsAuroraMysql
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsAuroraMysql
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsAwsAuroraMysql` type.)
 * 
 * Aurora (MySQL) target options
 * @export
 * @interface TargetOptionsAwsAuroraMysqlMergePatch
 */
export interface TargetOptionsAwsAuroraMysqlMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsAuroraMysqlMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsAuroraMysqlMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsAwsAuroraMysql` type.)
 * 
 * Aurora (MySQL) target options
 * @export
 * @interface TargetOptionsAwsAuroraMysqlPost
 */
export interface TargetOptionsAwsAuroraMysqlPost {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsAuroraMysqlPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsAuroraMysqlPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsAwsAuroraMysql` type.)
 * 
 * Aurora (MySQL) target options
 * @export
 * @interface TargetOptionsAwsAuroraMysqlPut
 */
export interface TargetOptionsAwsAuroraMysqlPut {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsAuroraMysqlPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsAuroraMysqlPut
     */
    type: string;
}
/**
 * AWS Aurora Postgres target options
 * @export
 * @interface TargetOptionsAwsAuroraPostgres
 */
export interface TargetOptionsAwsAuroraPostgres {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsAuroraPostgres
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsAuroraPostgres
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsAwsAuroraPostgres` type.)
 * 
 * AWS Aurora Postgres target options
 * @export
 * @interface TargetOptionsAwsAuroraPostgresMergePatch
 */
export interface TargetOptionsAwsAuroraPostgresMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsAuroraPostgresMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsAuroraPostgresMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsAwsAuroraPostgres` type.)
 * 
 * AWS Aurora Postgres target options
 * @export
 * @interface TargetOptionsAwsAuroraPostgresPost
 */
export interface TargetOptionsAwsAuroraPostgresPost {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsAuroraPostgresPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsAuroraPostgresPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsAwsAuroraPostgres` type.)
 * 
 * AWS Aurora Postgres target options
 * @export
 * @interface TargetOptionsAwsAuroraPostgresPut
 */
export interface TargetOptionsAwsAuroraPostgresPut {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsAuroraPostgresPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsAuroraPostgresPut
     */
    type: string;
}
/**
 * RDS (MySQL) target options
 * @export
 * @interface TargetOptionsAwsRdsMysql
 */
export interface TargetOptionsAwsRdsMysql {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsRdsMysql
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsRdsMysql
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsAwsRdsMysql` type.)
 * 
 * RDS (MySQL) target options
 * @export
 * @interface TargetOptionsAwsRdsMysqlMergePatch
 */
export interface TargetOptionsAwsRdsMysqlMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsRdsMysqlMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsRdsMysqlMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsAwsRdsMysql` type.)
 * 
 * RDS (MySQL) target options
 * @export
 * @interface TargetOptionsAwsRdsMysqlPost
 */
export interface TargetOptionsAwsRdsMysqlPost {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsRdsMysqlPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsRdsMysqlPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsAwsRdsMysql` type.)
 * 
 * RDS (MySQL) target options
 * @export
 * @interface TargetOptionsAwsRdsMysqlPut
 */
export interface TargetOptionsAwsRdsMysqlPut {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsRdsMysqlPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsRdsMysqlPut
     */
    type: string;
}
/**
 * RDS (Postgres) target options
 * @export
 * @interface TargetOptionsAwsRdsPostgres
 */
export interface TargetOptionsAwsRdsPostgres {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsRdsPostgres
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsRdsPostgres
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsAwsRdsPostgres` type.)
 * 
 * RDS (Postgres) target options
 * @export
 * @interface TargetOptionsAwsRdsPostgresMergePatch
 */
export interface TargetOptionsAwsRdsPostgresMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsRdsPostgresMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsRdsPostgresMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsAwsRdsPostgres` type.)
 * 
 * RDS (Postgres) target options
 * @export
 * @interface TargetOptionsAwsRdsPostgresPost
 */
export interface TargetOptionsAwsRdsPostgresPost {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsRdsPostgresPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsRdsPostgresPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsAwsRdsPostgres` type.)
 * 
 * RDS (Postgres) target options
 * @export
 * @interface TargetOptionsAwsRdsPostgresPut
 */
export interface TargetOptionsAwsRdsPostgresPut {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsRdsPostgresPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsRdsPostgresPut
     */
    type: string;
}
/**
 * RDS (SQL Server) target options
 * @export
 * @interface TargetOptionsAwsRdsSqlServer
 */
export interface TargetOptionsAwsRdsSqlServer {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsRdsSqlServer
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsRdsSqlServer
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsAwsRdsSqlServer` type.)
 * 
 * RDS (SQL Server) target options
 * @export
 * @interface TargetOptionsAwsRdsSqlServerMergePatch
 */
export interface TargetOptionsAwsRdsSqlServerMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsRdsSqlServerMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsRdsSqlServerMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsAwsRdsSqlServer` type.)
 * 
 * RDS (SQL Server) target options
 * @export
 * @interface TargetOptionsAwsRdsSqlServerPost
 */
export interface TargetOptionsAwsRdsSqlServerPost {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsRdsSqlServerPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsRdsSqlServerPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsAwsRdsSqlServer` type.)
 * 
 * RDS (SQL Server) target options
 * @export
 * @interface TargetOptionsAwsRdsSqlServerPut
 */
export interface TargetOptionsAwsRdsSqlServerPut {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsRdsSqlServerPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsRdsSqlServerPut
     */
    type: string;
}
/**
 * Redshift Serverless target options
 * @export
 * @interface TargetOptionsAwsRedshiftServerless
 */
export interface TargetOptionsAwsRedshiftServerless {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsRedshiftServerless
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsRedshiftServerless
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsAwsRedshiftServerless` type.)
 * 
 * Redshift Serverless target options
 * @export
 * @interface TargetOptionsAwsRedshiftServerlessMergePatch
 */
export interface TargetOptionsAwsRedshiftServerlessMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsRedshiftServerlessMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsRedshiftServerlessMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsAwsRedshiftServerless` type.)
 * 
 * Redshift Serverless target options
 * @export
 * @interface TargetOptionsAwsRedshiftServerlessPost
 */
export interface TargetOptionsAwsRedshiftServerlessPost {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsRedshiftServerlessPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsRedshiftServerlessPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsAwsRedshiftServerless` type.)
 * 
 * Redshift Serverless target options
 * @export
 * @interface TargetOptionsAwsRedshiftServerlessPut
 */
export interface TargetOptionsAwsRedshiftServerlessPut {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAwsRedshiftServerlessPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAwsRedshiftServerlessPut
     */
    type: string;
}
/**
 * Azure SQL target options
 * @export
 * @interface TargetOptionsAzureSqlServer
 */
export interface TargetOptionsAzureSqlServer {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAzureSqlServer
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAzureSqlServer
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsAzureSqlServer` type.)
 * 
 * Azure SQL target options
 * @export
 * @interface TargetOptionsAzureSqlServerMergePatch
 */
export interface TargetOptionsAzureSqlServerMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAzureSqlServerMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAzureSqlServerMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsAzureSqlServer` type.)
 * 
 * Azure SQL target options
 * @export
 * @interface TargetOptionsAzureSqlServerPost
 */
export interface TargetOptionsAzureSqlServerPost {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAzureSqlServerPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAzureSqlServerPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsAzureSqlServer` type.)
 * 
 * Azure SQL target options
 * @export
 * @interface TargetOptionsAzureSqlServerPut
 */
export interface TargetOptionsAzureSqlServerPut {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsAzureSqlServerPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsAzureSqlServerPut
     */
    type: string;
}
/**
 * BigQuery target options
 * @export
 * @interface TargetOptionsBigQuery
 */
export interface TargetOptionsBigQuery {
    /**
     * Date-based partitioning allows the data to be <a href ="https://cloud.google.com/bigquery/docs/partitioned-tables#date_timestamp_partitioned_tables">partitioned by date</a>. This will appear as a `fdy_batch_date` column.
     * @type {boolean}
     * @memberof TargetOptionsBigQuery
     */
    day_partitioned?: boolean;
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsBigQuery
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsBigQuery
     */
    type: string;
    /**
     * Currently only supported on Referenced targets on GCP BigQuery and Snowflake, upsert allows Faraday to write multiple times to the same table from different Targets. It will use the reference_key_column on the referenced Dataset.
     * @type {boolean}
     * @memberof TargetOptionsBigQuery
     */
    upsert?: boolean;
}
/**
 * (Parameters used to PATCH the `TargetOptionsBigQuery` type.)
 * 
 * BigQuery target options
 * @export
 * @interface TargetOptionsBigQueryMergePatch
 */
export interface TargetOptionsBigQueryMergePatch {
    /**
     * Date-based partitioning allows the data to be <a href ="https://cloud.google.com/bigquery/docs/partitioned-tables#date_timestamp_partitioned_tables">partitioned by date</a>. This will appear as a `fdy_batch_date` column.
     * @type {boolean}
     * @memberof TargetOptionsBigQueryMergePatch
     */
    day_partitioned?: boolean | null;
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsBigQueryMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsBigQueryMergePatch
     */
    type: string;
    /**
     * Currently only supported on Referenced targets on GCP BigQuery and Snowflake, upsert allows Faraday to write multiple times to the same table from different Targets. It will use the reference_key_column on the referenced Dataset.
     * @type {boolean}
     * @memberof TargetOptionsBigQueryMergePatch
     */
    upsert?: boolean | null;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsBigQuery` type.)
 * 
 * BigQuery target options
 * @export
 * @interface TargetOptionsBigQueryPost
 */
export interface TargetOptionsBigQueryPost {
    /**
     * Date-based partitioning allows the data to be <a href ="https://cloud.google.com/bigquery/docs/partitioned-tables#date_timestamp_partitioned_tables">partitioned by date</a>. This will appear as a `fdy_batch_date` column.
     * @type {boolean}
     * @memberof TargetOptionsBigQueryPost
     */
    day_partitioned?: boolean;
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsBigQueryPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsBigQueryPost
     */
    type: string;
    /**
     * Currently only supported on Referenced targets on GCP BigQuery and Snowflake, upsert allows Faraday to write multiple times to the same table from different Targets. It will use the reference_key_column on the referenced Dataset.
     * @type {boolean}
     * @memberof TargetOptionsBigQueryPost
     */
    upsert?: boolean;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsBigQuery` type.)
 * 
 * BigQuery target options
 * @export
 * @interface TargetOptionsBigQueryPut
 */
export interface TargetOptionsBigQueryPut {
    /**
     * Date-based partitioning allows the data to be <a href ="https://cloud.google.com/bigquery/docs/partitioned-tables#date_timestamp_partitioned_tables">partitioned by date</a>. This will appear as a `fdy_batch_date` column.
     * @type {boolean}
     * @memberof TargetOptionsBigQueryPut
     */
    day_partitioned?: boolean;
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsBigQueryPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsBigQueryPut
     */
    type: string;
    /**
     * Currently only supported on Referenced targets on GCP BigQuery and Snowflake, upsert allows Faraday to write multiple times to the same table from different Targets. It will use the reference_key_column on the referenced Dataset.
     * @type {boolean}
     * @memberof TargetOptionsBigQueryPut
     */
    upsert?: boolean;
}
/**
 * Facebook Custom Audiences target options
 * @export
 * @interface TargetOptionsFacebookCustomAudiences
 */
export interface TargetOptionsFacebookCustomAudiences {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsFacebookCustomAudiences
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsFacebookCustomAudiences` type.)
 * 
 * Facebook Custom Audiences target options
 * @export
 * @interface TargetOptionsFacebookCustomAudiencesMergePatch
 */
export interface TargetOptionsFacebookCustomAudiencesMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsFacebookCustomAudiencesMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsFacebookCustomAudiences` type.)
 * 
 * Facebook Custom Audiences target options
 * @export
 * @interface TargetOptionsFacebookCustomAudiencesPost
 */
export interface TargetOptionsFacebookCustomAudiencesPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsFacebookCustomAudiencesPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsFacebookCustomAudiences` type.)
 * 
 * Facebook Custom Audiences target options
 * @export
 * @interface TargetOptionsFacebookCustomAudiencesPut
 */
export interface TargetOptionsFacebookCustomAudiencesPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsFacebookCustomAudiencesPut
     */
    type: string;
}
/**
 * Google Cloud SQL (MySQL) target options
 * @export
 * @interface TargetOptionsGcpCloudSqlMysql
 */
export interface TargetOptionsGcpCloudSqlMysql {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlMysql
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlMysql
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsGcpCloudSqlMysql` type.)
 * 
 * Google Cloud SQL (MySQL) target options
 * @export
 * @interface TargetOptionsGcpCloudSqlMysqlMergePatch
 */
export interface TargetOptionsGcpCloudSqlMysqlMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlMysqlMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlMysqlMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsGcpCloudSqlMysql` type.)
 * 
 * Google Cloud SQL (MySQL) target options
 * @export
 * @interface TargetOptionsGcpCloudSqlMysqlPost
 */
export interface TargetOptionsGcpCloudSqlMysqlPost {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlMysqlPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlMysqlPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsGcpCloudSqlMysql` type.)
 * 
 * Google Cloud SQL (MySQL) target options
 * @export
 * @interface TargetOptionsGcpCloudSqlMysqlPut
 */
export interface TargetOptionsGcpCloudSqlMysqlPut {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlMysqlPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlMysqlPut
     */
    type: string;
}
/**
 * Google Cloud SQL (Postgres) target options
 * @export
 * @interface TargetOptionsGcpCloudSqlPostgres
 */
export interface TargetOptionsGcpCloudSqlPostgres {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlPostgres
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlPostgres
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsGcpCloudSqlPostgres` type.)
 * 
 * Google Cloud SQL (Postgres) target options
 * @export
 * @interface TargetOptionsGcpCloudSqlPostgresMergePatch
 */
export interface TargetOptionsGcpCloudSqlPostgresMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlPostgresMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlPostgresMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsGcpCloudSqlPostgres` type.)
 * 
 * Google Cloud SQL (Postgres) target options
 * @export
 * @interface TargetOptionsGcpCloudSqlPostgresPost
 */
export interface TargetOptionsGcpCloudSqlPostgresPost {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlPostgresPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlPostgresPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsGcpCloudSqlPostgres` type.)
 * 
 * Google Cloud SQL (Postgres) target options
 * @export
 * @interface TargetOptionsGcpCloudSqlPostgresPut
 */
export interface TargetOptionsGcpCloudSqlPostgresPut {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlPostgresPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlPostgresPut
     */
    type: string;
}
/**
 * Google Cloud SQL (SQL Server) target options
 * @export
 * @interface TargetOptionsGcpCloudSqlSqlServer
 */
export interface TargetOptionsGcpCloudSqlSqlServer {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlSqlServer
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlSqlServer
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsGcpCloudSqlSqlServer` type.)
 * 
 * Google Cloud SQL (SQL Server) target options
 * @export
 * @interface TargetOptionsGcpCloudSqlSqlServerMergePatch
 */
export interface TargetOptionsGcpCloudSqlSqlServerMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlSqlServerMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlSqlServerMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsGcpCloudSqlSqlServer` type.)
 * 
 * Google Cloud SQL (SQL Server) target options
 * @export
 * @interface TargetOptionsGcpCloudSqlSqlServerPost
 */
export interface TargetOptionsGcpCloudSqlSqlServerPost {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlSqlServerPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlSqlServerPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsGcpCloudSqlSqlServer` type.)
 * 
 * Google Cloud SQL (SQL Server) target options
 * @export
 * @interface TargetOptionsGcpCloudSqlSqlServerPut
 */
export interface TargetOptionsGcpCloudSqlSqlServerPut {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlSqlServerPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpCloudSqlSqlServerPut
     */
    type: string;
}
/**
 * GCS target options
 * @export
 * @interface TargetOptionsGcpGcsCsv
 */
export interface TargetOptionsGcpGcsCsv {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof TargetOptionsGcpGcsCsv
     */
    delimiter?: string;
    /**
     * Whether files are gzipped.
     * @type {boolean}
     * @memberof TargetOptionsGcpGcsCsv
     */
    gzip?: boolean;
    /**
     * The object key inside of the bucket. For example, path/to/my/file.csv. If you enable gzip, best practice is to add .gz to the end. Note: strftime substitutions like %Y-%m-%d are supported.
     * @type {string}
     * @memberof TargetOptionsGcpGcsCsv
     */
    object_key: string;
    /**
     * Whether to always quote all fields, even if they don't require it. Some systems require this.
     * @type {boolean}
     * @memberof TargetOptionsGcpGcsCsv
     */
    quote_all?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpGcsCsv
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsGcpGcsCsv` type.)
 * 
 * GCS target options
 * @export
 * @interface TargetOptionsGcpGcsCsvMergePatch
 */
export interface TargetOptionsGcpGcsCsvMergePatch {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof TargetOptionsGcpGcsCsvMergePatch
     */
    delimiter?: string | null;
    /**
     * Whether files are gzipped.
     * @type {boolean}
     * @memberof TargetOptionsGcpGcsCsvMergePatch
     */
    gzip?: boolean | null;
    /**
     * The object key inside of the bucket. For example, path/to/my/file.csv. If you enable gzip, best practice is to add .gz to the end. Note: strftime substitutions like %Y-%m-%d are supported.
     * @type {string}
     * @memberof TargetOptionsGcpGcsCsvMergePatch
     */
    object_key?: string;
    /**
     * Whether to always quote all fields, even if they don't require it. Some systems require this.
     * @type {boolean}
     * @memberof TargetOptionsGcpGcsCsvMergePatch
     */
    quote_all?: boolean | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpGcsCsvMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsGcpGcsCsv` type.)
 * 
 * GCS target options
 * @export
 * @interface TargetOptionsGcpGcsCsvPost
 */
export interface TargetOptionsGcpGcsCsvPost {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof TargetOptionsGcpGcsCsvPost
     */
    delimiter?: string;
    /**
     * Whether files are gzipped.
     * @type {boolean}
     * @memberof TargetOptionsGcpGcsCsvPost
     */
    gzip?: boolean;
    /**
     * The object key inside of the bucket. For example, path/to/my/file.csv. If you enable gzip, best practice is to add .gz to the end. Note: strftime substitutions like %Y-%m-%d are supported.
     * @type {string}
     * @memberof TargetOptionsGcpGcsCsvPost
     */
    object_key: string;
    /**
     * Whether to always quote all fields, even if they don't require it. Some systems require this.
     * @type {boolean}
     * @memberof TargetOptionsGcpGcsCsvPost
     */
    quote_all?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpGcsCsvPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsGcpGcsCsv` type.)
 * 
 * GCS target options
 * @export
 * @interface TargetOptionsGcpGcsCsvPut
 */
export interface TargetOptionsGcpGcsCsvPut {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof TargetOptionsGcpGcsCsvPut
     */
    delimiter?: string;
    /**
     * Whether files are gzipped.
     * @type {boolean}
     * @memberof TargetOptionsGcpGcsCsvPut
     */
    gzip?: boolean;
    /**
     * The object key inside of the bucket. For example, path/to/my/file.csv. If you enable gzip, best practice is to add .gz to the end. Note: strftime substitutions like %Y-%m-%d are supported.
     * @type {string}
     * @memberof TargetOptionsGcpGcsCsvPut
     */
    object_key: string;
    /**
     * Whether to always quote all fields, even if they don't require it. Some systems require this.
     * @type {boolean}
     * @memberof TargetOptionsGcpGcsCsvPut
     */
    quote_all?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGcpGcsCsvPut
     */
    type: string;
}
/**
 * Google Ads target options
 * @export
 * @interface TargetOptionsGoogleAds
 */
export interface TargetOptionsGoogleAds {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGoogleAds
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsGoogleAds` type.)
 * 
 * Google Ads target options
 * @export
 * @interface TargetOptionsGoogleAdsMergePatch
 */
export interface TargetOptionsGoogleAdsMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGoogleAdsMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsGoogleAds` type.)
 * 
 * Google Ads target options
 * @export
 * @interface TargetOptionsGoogleAdsPost
 */
export interface TargetOptionsGoogleAdsPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGoogleAdsPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsGoogleAds` type.)
 * 
 * Google Ads target options
 * @export
 * @interface TargetOptionsGoogleAdsPut
 */
export interface TargetOptionsGoogleAdsPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsGoogleAdsPut
     */
    type: string;
}
/**
 * CSV target options
 * @export
 * @interface TargetOptionsHostedCsv
 */
export interface TargetOptionsHostedCsv {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof TargetOptionsHostedCsv
     */
    delimiter?: string;
    /**
     * Whether files are gzipped.
     * @type {boolean}
     * @memberof TargetOptionsHostedCsv
     */
    gzip?: boolean;
    /**
     * The Faraday-hosted URL of the target's csv output file.
     * @type {string}
     * @memberof TargetOptionsHostedCsv
     */
    output_url?: string;
    /**
     * Whether to always quote all fields, even if they don't require it. Some systems require this.
     * @type {boolean}
     * @memberof TargetOptionsHostedCsv
     */
    quote_all?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsHostedCsv
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsHostedCsv` type.)
 * 
 * CSV target options
 * @export
 * @interface TargetOptionsHostedCsvMergePatch
 */
export interface TargetOptionsHostedCsvMergePatch {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof TargetOptionsHostedCsvMergePatch
     */
    delimiter?: string | null;
    /**
     * Whether files are gzipped.
     * @type {boolean}
     * @memberof TargetOptionsHostedCsvMergePatch
     */
    gzip?: boolean | null;
    /**
     * Whether to always quote all fields, even if they don't require it. Some systems require this.
     * @type {boolean}
     * @memberof TargetOptionsHostedCsvMergePatch
     */
    quote_all?: boolean | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsHostedCsvMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsHostedCsv` type.)
 * 
 * CSV target options
 * @export
 * @interface TargetOptionsHostedCsvPost
 */
export interface TargetOptionsHostedCsvPost {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof TargetOptionsHostedCsvPost
     */
    delimiter?: string;
    /**
     * Whether files are gzipped.
     * @type {boolean}
     * @memberof TargetOptionsHostedCsvPost
     */
    gzip?: boolean;
    /**
     * Whether to always quote all fields, even if they don't require it. Some systems require this.
     * @type {boolean}
     * @memberof TargetOptionsHostedCsvPost
     */
    quote_all?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsHostedCsvPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsHostedCsv` type.)
 * 
 * CSV target options
 * @export
 * @interface TargetOptionsHostedCsvPut
 */
export interface TargetOptionsHostedCsvPut {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof TargetOptionsHostedCsvPut
     */
    delimiter?: string;
    /**
     * Whether files are gzipped.
     * @type {boolean}
     * @memberof TargetOptionsHostedCsvPut
     */
    gzip?: boolean;
    /**
     * Whether to always quote all fields, even if they don't require it. Some systems require this.
     * @type {boolean}
     * @memberof TargetOptionsHostedCsvPut
     */
    quote_all?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsHostedCsvPut
     */
    type: string;
}
/**
 * HubSpot target options
 * @export
 * @interface TargetOptionsHubspot
 */
export interface TargetOptionsHubspot {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsHubspot
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsHubspot` type.)
 * 
 * HubSpot target options
 * @export
 * @interface TargetOptionsHubspotMergePatch
 */
export interface TargetOptionsHubspotMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsHubspotMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsHubspot` type.)
 * 
 * HubSpot target options
 * @export
 * @interface TargetOptionsHubspotPost
 */
export interface TargetOptionsHubspotPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsHubspotPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsHubspot` type.)
 * 
 * HubSpot target options
 * @export
 * @interface TargetOptionsHubspotPut
 */
export interface TargetOptionsHubspotPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsHubspotPut
     */
    type: string;
}
/**
 * Iterable target options
 * @export
 * @interface TargetOptionsIterable
 */
export interface TargetOptionsIterable {
    /**
     * The API key must have server-side permissions. Refer to <a href="https://support.iterable.com/hc/en-us/articles/360043464871-API-Keys-#server-side-keys">the Iterable docs</a>.
     * @type {string}
     * @memberof TargetOptionsIterable
     */
    api_key: string;
    /**
     * The unique identifier of the Iterable project - email or user_id. Refer to <a href="https://support.iterable.com/hc/en-us/articles/9216719179796#checking-the-unique-identifier-for-a-project">the Iterable docs</a>.
     * @type {string}
     * @memberof TargetOptionsIterable
     */
    project_identifier: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsIterable
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsIterable` type.)
 * 
 * Iterable target options
 * @export
 * @interface TargetOptionsIterableMergePatch
 */
export interface TargetOptionsIterableMergePatch {
    /**
     * The API key must have server-side permissions. Refer to <a href="https://support.iterable.com/hc/en-us/articles/360043464871-API-Keys-#server-side-keys">the Iterable docs</a>.
     * @type {string}
     * @memberof TargetOptionsIterableMergePatch
     */
    api_key?: string;
    /**
     * The unique identifier of the Iterable project - email or user_id. Refer to <a href="https://support.iterable.com/hc/en-us/articles/9216719179796#checking-the-unique-identifier-for-a-project">the Iterable docs</a>.
     * @type {string}
     * @memberof TargetOptionsIterableMergePatch
     */
    project_identifier?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsIterableMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsIterable` type.)
 * 
 * Iterable target options
 * @export
 * @interface TargetOptionsIterablePost
 */
export interface TargetOptionsIterablePost {
    /**
     * The API key must have server-side permissions. Refer to <a href="https://support.iterable.com/hc/en-us/articles/360043464871-API-Keys-#server-side-keys">the Iterable docs</a>.
     * @type {string}
     * @memberof TargetOptionsIterablePost
     */
    api_key: string;
    /**
     * The unique identifier of the Iterable project - email or user_id. Refer to <a href="https://support.iterable.com/hc/en-us/articles/9216719179796#checking-the-unique-identifier-for-a-project">the Iterable docs</a>.
     * @type {string}
     * @memberof TargetOptionsIterablePost
     */
    project_identifier: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsIterablePost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsIterable` type.)
 * 
 * Iterable target options
 * @export
 * @interface TargetOptionsIterablePut
 */
export interface TargetOptionsIterablePut {
    /**
     * The API key must have server-side permissions. Refer to <a href="https://support.iterable.com/hc/en-us/articles/360043464871-API-Keys-#server-side-keys">the Iterable docs</a>.
     * @type {string}
     * @memberof TargetOptionsIterablePut
     */
    api_key: string;
    /**
     * The unique identifier of the Iterable project - email or user_id. Refer to <a href="https://support.iterable.com/hc/en-us/articles/9216719179796#checking-the-unique-identifier-for-a-project">the Iterable docs</a>.
     * @type {string}
     * @memberof TargetOptionsIterablePut
     */
    project_identifier: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsIterablePut
     */
    type: string;
}
/**
 * Klaviyo target options
 * @export
 * @interface TargetOptionsKlaviyo
 */
export interface TargetOptionsKlaviyo {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsKlaviyo
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsKlaviyo` type.)
 * 
 * Klaviyo target options
 * @export
 * @interface TargetOptionsKlaviyoMergePatch
 */
export interface TargetOptionsKlaviyoMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsKlaviyoMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsKlaviyo` type.)
 * 
 * Klaviyo target options
 * @export
 * @interface TargetOptionsKlaviyoPost
 */
export interface TargetOptionsKlaviyoPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsKlaviyoPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsKlaviyo` type.)
 * 
 * Klaviyo target options
 * @export
 * @interface TargetOptionsKlaviyoPut
 */
export interface TargetOptionsKlaviyoPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsKlaviyoPut
     */
    type: string;
}
/**
 * LinkedIn Ads target options
 * @export
 * @interface TargetOptionsLinkedinAds
 */
export interface TargetOptionsLinkedinAds {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsLinkedinAds
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsLinkedinAds` type.)
 * 
 * LinkedIn Ads target options
 * @export
 * @interface TargetOptionsLinkedinAdsMergePatch
 */
export interface TargetOptionsLinkedinAdsMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsLinkedinAdsMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsLinkedinAds` type.)
 * 
 * LinkedIn Ads target options
 * @export
 * @interface TargetOptionsLinkedinAdsPost
 */
export interface TargetOptionsLinkedinAdsPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsLinkedinAdsPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsLinkedinAds` type.)
 * 
 * LinkedIn Ads target options
 * @export
 * @interface TargetOptionsLinkedinAdsPut
 */
export interface TargetOptionsLinkedinAdsPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsLinkedinAdsPut
     */
    type: string;
}
/**
 * Lookup API target options
 * @export
 * @interface TargetOptionsLookupApi
 */
export interface TargetOptionsLookupApi {
    /**
     * The Faraday-hosted URL of the hosted API.
     * @type {string}
     * @memberof TargetOptionsLookupApi
     */
    output_url?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsLookupApi
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsLookupApi` type.)
 * 
 * Lookup API target options
 * @export
 * @interface TargetOptionsLookupApiMergePatch
 */
export interface TargetOptionsLookupApiMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsLookupApiMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsLookupApi` type.)
 * 
 * Lookup API target options
 * @export
 * @interface TargetOptionsLookupApiPost
 */
export interface TargetOptionsLookupApiPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsLookupApiPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsLookupApi` type.)
 * 
 * Lookup API target options
 * @export
 * @interface TargetOptionsLookupApiPut
 */
export interface TargetOptionsLookupApiPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsLookupApiPut
     */
    type: string;
}
/**
 * @type TargetOptionsMergePatch
 * The export target configuration options. These vary by connection type.
 * @export
 */
export type TargetOptionsMergePatch = { type: 'aws_aurora_mysql' } & TargetOptionsAwsAuroraMysqlMergePatch | { type: 'aws_aurora_postgres' } & TargetOptionsAwsAuroraPostgresMergePatch | { type: 'aws_rds_mysql' } & TargetOptionsAwsRdsMysqlMergePatch | { type: 'aws_rds_postgres' } & TargetOptionsAwsRdsPostgresMergePatch | { type: 'aws_rds_sql_server' } & TargetOptionsAwsRdsSqlServerMergePatch | { type: 'aws_redshift_serverless' } & TargetOptionsAwsRedshiftServerlessMergePatch | { type: 'azure_sql_server' } & TargetOptionsAzureSqlServerMergePatch | { type: 'bigquery' } & TargetOptionsBigQueryMergePatch | { type: 'facebook_custom_audiences' } & TargetOptionsFacebookCustomAudiencesMergePatch | { type: 'gcp_cloud_sql_mysql' } & TargetOptionsGcpCloudSqlMysqlMergePatch | { type: 'gcp_cloud_sql_postgres' } & TargetOptionsGcpCloudSqlPostgresMergePatch | { type: 'gcp_cloud_sql_sql_server' } & TargetOptionsGcpCloudSqlSqlServerMergePatch | { type: 'gcp_gcs_csv' } & TargetOptionsGcpGcsCsvMergePatch | { type: 'google_ads' } & TargetOptionsGoogleAdsMergePatch | { type: 'hosted_csv' } & TargetOptionsHostedCsvMergePatch | { type: 'hubspot' } & TargetOptionsHubspotMergePatch | { type: 'iterable' } & TargetOptionsIterableMergePatch | { type: 'klaviyo' } & TargetOptionsKlaviyoMergePatch | { type: 'linkedin_ads' } & TargetOptionsLinkedinAdsMergePatch | { type: 'lookup_api' } & TargetOptionsLookupApiMergePatch | { type: 'motherduck' } & TargetOptionsMotherduckMergePatch | { type: 'mysql' } & TargetOptionsMysqlMergePatch | { type: 'pinterest_ads' } & TargetOptionsPinterestAdsMergePatch | { type: 'poplar' } & TargetOptionsPoplarMergePatch | { type: 'postgres' } & TargetOptionsPostgresMergePatch | { type: 'redshift' } & TargetOptionsRedshiftMergePatch | { type: 's3_csv' } & TargetOptionsS3CsvMergePatch | { type: 'salesforce' } & TargetOptionsSalesforceMergePatch | { type: 'salesforce_marketing_cloud' } & TargetOptionsSalesforceMarketingCloudMergePatch | { type: 'segment' } & TargetOptionsSegmentMergePatch | { type: 'sftp' } & TargetOptionsSftpMergePatch | { type: 'snowflake' } & TargetOptionsSnowflakeMergePatch | { type: 'sql_server' } & TargetOptionsSqlServerMergePatch | { type: 'the_trade_desk' } & TargetOptionsTheTradeDeskMergePatch | { type: 'tiktok' } & TargetOptionsTiktokMergePatch;
/**
 * MotherDuck target options
 * @export
 * @interface TargetOptionsMotherduck
 */
export interface TargetOptionsMotherduck {
    /**
     * MotherDuck schema name. Defaults to 'main' if not provided.
     * @type {string}
     * @memberof TargetOptionsMotherduck
     */
    schema?: string;
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsMotherduck
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsMotherduck
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsMotherduck` type.)
 * 
 * MotherDuck target options
 * @export
 * @interface TargetOptionsMotherduckMergePatch
 */
export interface TargetOptionsMotherduckMergePatch {
    /**
     * MotherDuck schema name. Defaults to 'main' if not provided.
     * @type {string}
     * @memberof TargetOptionsMotherduckMergePatch
     */
    schema?: string | null;
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsMotherduckMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsMotherduckMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsMotherduck` type.)
 * 
 * MotherDuck target options
 * @export
 * @interface TargetOptionsMotherduckPost
 */
export interface TargetOptionsMotherduckPost {
    /**
     * MotherDuck schema name. Defaults to 'main' if not provided.
     * @type {string}
     * @memberof TargetOptionsMotherduckPost
     */
    schema?: string;
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsMotherduckPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsMotherduckPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsMotherduck` type.)
 * 
 * MotherDuck target options
 * @export
 * @interface TargetOptionsMotherduckPut
 */
export interface TargetOptionsMotherduckPut {
    /**
     * MotherDuck schema name. Defaults to 'main' if not provided.
     * @type {string}
     * @memberof TargetOptionsMotherduckPut
     */
    schema?: string;
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsMotherduckPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsMotherduckPut
     */
    type: string;
}
/**
 * MySQL target options
 * @export
 * @interface TargetOptionsMysql
 */
export interface TargetOptionsMysql {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsMysql
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsMysql
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsMysql` type.)
 * 
 * MySQL target options
 * @export
 * @interface TargetOptionsMysqlMergePatch
 */
export interface TargetOptionsMysqlMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsMysqlMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsMysqlMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsMysql` type.)
 * 
 * MySQL target options
 * @export
 * @interface TargetOptionsMysqlPost
 */
export interface TargetOptionsMysqlPost {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsMysqlPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsMysqlPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsMysql` type.)
 * 
 * MySQL target options
 * @export
 * @interface TargetOptionsMysqlPut
 */
export interface TargetOptionsMysqlPut {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsMysqlPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsMysqlPut
     */
    type: string;
}
/**
 * Pinterest Ads target options
 * @export
 * @interface TargetOptionsPinterestAds
 */
export interface TargetOptionsPinterestAds {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsPinterestAds
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsPinterestAds` type.)
 * 
 * Pinterest Ads target options
 * @export
 * @interface TargetOptionsPinterestAdsMergePatch
 */
export interface TargetOptionsPinterestAdsMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsPinterestAdsMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsPinterestAds` type.)
 * 
 * Pinterest Ads target options
 * @export
 * @interface TargetOptionsPinterestAdsPost
 */
export interface TargetOptionsPinterestAdsPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsPinterestAdsPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsPinterestAds` type.)
 * 
 * Pinterest Ads target options
 * @export
 * @interface TargetOptionsPinterestAdsPut
 */
export interface TargetOptionsPinterestAdsPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsPinterestAdsPut
     */
    type: string;
}
/**
 * Poplar target options
 * @export
 * @interface TargetOptionsPoplar
 */
export interface TargetOptionsPoplar {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsPoplar
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsPoplar` type.)
 * 
 * Poplar target options
 * @export
 * @interface TargetOptionsPoplarMergePatch
 */
export interface TargetOptionsPoplarMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsPoplarMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsPoplar` type.)
 * 
 * Poplar target options
 * @export
 * @interface TargetOptionsPoplarPost
 */
export interface TargetOptionsPoplarPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsPoplarPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsPoplar` type.)
 * 
 * Poplar target options
 * @export
 * @interface TargetOptionsPoplarPut
 */
export interface TargetOptionsPoplarPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsPoplarPut
     */
    type: string;
}
/**
 * @type TargetOptionsPost
 * The export target configuration options. These vary by connection type.
 * @export
 */
export type TargetOptionsPost = { type: 'aws_aurora_mysql' } & TargetOptionsAwsAuroraMysqlPost | { type: 'aws_aurora_postgres' } & TargetOptionsAwsAuroraPostgresPost | { type: 'aws_rds_mysql' } & TargetOptionsAwsRdsMysqlPost | { type: 'aws_rds_postgres' } & TargetOptionsAwsRdsPostgresPost | { type: 'aws_rds_sql_server' } & TargetOptionsAwsRdsSqlServerPost | { type: 'aws_redshift_serverless' } & TargetOptionsAwsRedshiftServerlessPost | { type: 'azure_sql_server' } & TargetOptionsAzureSqlServerPost | { type: 'bigquery' } & TargetOptionsBigQueryPost | { type: 'facebook_custom_audiences' } & TargetOptionsFacebookCustomAudiencesPost | { type: 'gcp_cloud_sql_mysql' } & TargetOptionsGcpCloudSqlMysqlPost | { type: 'gcp_cloud_sql_postgres' } & TargetOptionsGcpCloudSqlPostgresPost | { type: 'gcp_cloud_sql_sql_server' } & TargetOptionsGcpCloudSqlSqlServerPost | { type: 'gcp_gcs_csv' } & TargetOptionsGcpGcsCsvPost | { type: 'google_ads' } & TargetOptionsGoogleAdsPost | { type: 'hosted_csv' } & TargetOptionsHostedCsvPost | { type: 'hubspot' } & TargetOptionsHubspotPost | { type: 'iterable' } & TargetOptionsIterablePost | { type: 'klaviyo' } & TargetOptionsKlaviyoPost | { type: 'linkedin_ads' } & TargetOptionsLinkedinAdsPost | { type: 'lookup_api' } & TargetOptionsLookupApiPost | { type: 'motherduck' } & TargetOptionsMotherduckPost | { type: 'mysql' } & TargetOptionsMysqlPost | { type: 'pinterest_ads' } & TargetOptionsPinterestAdsPost | { type: 'poplar' } & TargetOptionsPoplarPost | { type: 'postgres' } & TargetOptionsPostgresPost | { type: 'redshift' } & TargetOptionsRedshiftPost | { type: 's3_csv' } & TargetOptionsS3CsvPost | { type: 'salesforce' } & TargetOptionsSalesforcePost | { type: 'salesforce_marketing_cloud' } & TargetOptionsSalesforceMarketingCloudPost | { type: 'segment' } & TargetOptionsSegmentPost | { type: 'sftp' } & TargetOptionsSftpPost | { type: 'snowflake' } & TargetOptionsSnowflakePost | { type: 'sql_server' } & TargetOptionsSqlServerPost | { type: 'the_trade_desk' } & TargetOptionsTheTradeDeskPost | { type: 'tiktok' } & TargetOptionsTiktokPost;
/**
 * Postgres target options
 * @export
 * @interface TargetOptionsPostgres
 */
export interface TargetOptionsPostgres {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsPostgres
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsPostgres
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsPostgres` type.)
 * 
 * Postgres target options
 * @export
 * @interface TargetOptionsPostgresMergePatch
 */
export interface TargetOptionsPostgresMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsPostgresMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsPostgresMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsPostgres` type.)
 * 
 * Postgres target options
 * @export
 * @interface TargetOptionsPostgresPost
 */
export interface TargetOptionsPostgresPost {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsPostgresPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsPostgresPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsPostgres` type.)
 * 
 * Postgres target options
 * @export
 * @interface TargetOptionsPostgresPut
 */
export interface TargetOptionsPostgresPut {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsPostgresPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsPostgresPut
     */
    type: string;
}
/**
 * @type TargetOptionsPut
 * The export target configuration options. These vary by connection type.
 * @export
 */
export type TargetOptionsPut = { type: 'aws_aurora_mysql' } & TargetOptionsAwsAuroraMysqlPut | { type: 'aws_aurora_postgres' } & TargetOptionsAwsAuroraPostgresPut | { type: 'aws_rds_mysql' } & TargetOptionsAwsRdsMysqlPut | { type: 'aws_rds_postgres' } & TargetOptionsAwsRdsPostgresPut | { type: 'aws_rds_sql_server' } & TargetOptionsAwsRdsSqlServerPut | { type: 'aws_redshift_serverless' } & TargetOptionsAwsRedshiftServerlessPut | { type: 'azure_sql_server' } & TargetOptionsAzureSqlServerPut | { type: 'bigquery' } & TargetOptionsBigQueryPut | { type: 'facebook_custom_audiences' } & TargetOptionsFacebookCustomAudiencesPut | { type: 'gcp_cloud_sql_mysql' } & TargetOptionsGcpCloudSqlMysqlPut | { type: 'gcp_cloud_sql_postgres' } & TargetOptionsGcpCloudSqlPostgresPut | { type: 'gcp_cloud_sql_sql_server' } & TargetOptionsGcpCloudSqlSqlServerPut | { type: 'gcp_gcs_csv' } & TargetOptionsGcpGcsCsvPut | { type: 'google_ads' } & TargetOptionsGoogleAdsPut | { type: 'hosted_csv' } & TargetOptionsHostedCsvPut | { type: 'hubspot' } & TargetOptionsHubspotPut | { type: 'iterable' } & TargetOptionsIterablePut | { type: 'klaviyo' } & TargetOptionsKlaviyoPut | { type: 'linkedin_ads' } & TargetOptionsLinkedinAdsPut | { type: 'lookup_api' } & TargetOptionsLookupApiPut | { type: 'motherduck' } & TargetOptionsMotherduckPut | { type: 'mysql' } & TargetOptionsMysqlPut | { type: 'pinterest_ads' } & TargetOptionsPinterestAdsPut | { type: 'poplar' } & TargetOptionsPoplarPut | { type: 'postgres' } & TargetOptionsPostgresPut | { type: 'redshift' } & TargetOptionsRedshiftPut | { type: 's3_csv' } & TargetOptionsS3CsvPut | { type: 'salesforce' } & TargetOptionsSalesforcePut | { type: 'salesforce_marketing_cloud' } & TargetOptionsSalesforceMarketingCloudPut | { type: 'segment' } & TargetOptionsSegmentPut | { type: 'sftp' } & TargetOptionsSftpPut | { type: 'snowflake' } & TargetOptionsSnowflakePut | { type: 'sql_server' } & TargetOptionsSqlServerPut | { type: 'the_trade_desk' } & TargetOptionsTheTradeDeskPut | { type: 'tiktok' } & TargetOptionsTiktokPut;
/**
 * Redshift target options
 * @export
 * @interface TargetOptionsRedshift
 */
export interface TargetOptionsRedshift {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsRedshift
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsRedshift
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsRedshift` type.)
 * 
 * Redshift target options
 * @export
 * @interface TargetOptionsRedshiftMergePatch
 */
export interface TargetOptionsRedshiftMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsRedshiftMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsRedshiftMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsRedshift` type.)
 * 
 * Redshift target options
 * @export
 * @interface TargetOptionsRedshiftPost
 */
export interface TargetOptionsRedshiftPost {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsRedshiftPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsRedshiftPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsRedshift` type.)
 * 
 * Redshift target options
 * @export
 * @interface TargetOptionsRedshiftPut
 */
export interface TargetOptionsRedshiftPut {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsRedshiftPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsRedshiftPut
     */
    type: string;
}
/**
 * S3 target options
 * @export
 * @interface TargetOptionsS3Csv
 */
export interface TargetOptionsS3Csv {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use \t`.
     * @type {string}
     * @memberof TargetOptionsS3Csv
     */
    delimiter?: string;
    /**
     * Whether files are gzipped.
     * @type {boolean}
     * @memberof TargetOptionsS3Csv
     */
    gzip?: boolean;
    /**
     * The object key inside of the bucket. For example, path/to/my/file.csv. If you enable gzip, best practice is to add .gz to the end. Note: strftime substitutions like %Y-%m-%d are supported.
     * @type {string}
     * @memberof TargetOptionsS3Csv
     */
    object_key: string;
    /**
     * Whether to always quote all fields, even if they don't require it. Some systems require this.
     * @type {boolean}
     * @memberof TargetOptionsS3Csv
     */
    quote_all?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsS3Csv
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsS3Csv` type.)
 * 
 * S3 target options
 * @export
 * @interface TargetOptionsS3CsvMergePatch
 */
export interface TargetOptionsS3CsvMergePatch {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use \t`.
     * @type {string}
     * @memberof TargetOptionsS3CsvMergePatch
     */
    delimiter?: string | null;
    /**
     * Whether files are gzipped.
     * @type {boolean}
     * @memberof TargetOptionsS3CsvMergePatch
     */
    gzip?: boolean | null;
    /**
     * The object key inside of the bucket. For example, path/to/my/file.csv. If you enable gzip, best practice is to add .gz to the end. Note: strftime substitutions like %Y-%m-%d are supported.
     * @type {string}
     * @memberof TargetOptionsS3CsvMergePatch
     */
    object_key?: string;
    /**
     * Whether to always quote all fields, even if they don't require it. Some systems require this.
     * @type {boolean}
     * @memberof TargetOptionsS3CsvMergePatch
     */
    quote_all?: boolean | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsS3CsvMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsS3Csv` type.)
 * 
 * S3 target options
 * @export
 * @interface TargetOptionsS3CsvPost
 */
export interface TargetOptionsS3CsvPost {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use \t`.
     * @type {string}
     * @memberof TargetOptionsS3CsvPost
     */
    delimiter?: string;
    /**
     * Whether files are gzipped.
     * @type {boolean}
     * @memberof TargetOptionsS3CsvPost
     */
    gzip?: boolean;
    /**
     * The object key inside of the bucket. For example, path/to/my/file.csv. If you enable gzip, best practice is to add .gz to the end. Note: strftime substitutions like %Y-%m-%d are supported.
     * @type {string}
     * @memberof TargetOptionsS3CsvPost
     */
    object_key: string;
    /**
     * Whether to always quote all fields, even if they don't require it. Some systems require this.
     * @type {boolean}
     * @memberof TargetOptionsS3CsvPost
     */
    quote_all?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsS3CsvPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsS3Csv` type.)
 * 
 * S3 target options
 * @export
 * @interface TargetOptionsS3CsvPut
 */
export interface TargetOptionsS3CsvPut {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use \t`.
     * @type {string}
     * @memberof TargetOptionsS3CsvPut
     */
    delimiter?: string;
    /**
     * Whether files are gzipped.
     * @type {boolean}
     * @memberof TargetOptionsS3CsvPut
     */
    gzip?: boolean;
    /**
     * The object key inside of the bucket. For example, path/to/my/file.csv. If you enable gzip, best practice is to add .gz to the end. Note: strftime substitutions like %Y-%m-%d are supported.
     * @type {string}
     * @memberof TargetOptionsS3CsvPut
     */
    object_key: string;
    /**
     * Whether to always quote all fields, even if they don't require it. Some systems require this.
     * @type {boolean}
     * @memberof TargetOptionsS3CsvPut
     */
    quote_all?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsS3CsvPut
     */
    type: string;
}
/**
 * Salesforce target options
 * @export
 * @interface TargetOptionsSalesforce
 */
export interface TargetOptionsSalesforce {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSalesforce
     */
    type: string;
}
/**
 * Salesforce Marketing Cloud target options
 * @export
 * @interface TargetOptionsSalesforceMarketingCloud
 */
export interface TargetOptionsSalesforceMarketingCloud {
    /**
     * Subdomain of the API Integration within your installed package in SFMC. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-server-to-server-package">the HighTouch docs</a>.
     * @type {string}
     * @memberof TargetOptionsSalesforceMarketingCloud
     */
    api_subdomain: string;
    /**
     * Private SSH key of the FTP user created in SFMC. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-ftp-user">the HighTouch docs</a>.
     * @type {string}
     * @memberof TargetOptionsSalesforceMarketingCloud
     */
    ftp_private_key?: string;
    /**
     * Password of the FTP user created in SFMC. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-ftp-user">the HighTouch docs</a>.
     * @type {string}
     * @memberof TargetOptionsSalesforceMarketingCloud
     */
    ftp_user_password?: string;
    /**
     * Username of the FTP user created in SFMC. Typically a numeric Marketing Cloud MID. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-ftp-user">the HighTouch docs</a>.
     * @type {string}
     * @memberof TargetOptionsSalesforceMarketingCloud
     */
    ftp_username?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSalesforceMarketingCloud
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsSalesforceMarketingCloud` type.)
 * 
 * Salesforce Marketing Cloud target options
 * @export
 * @interface TargetOptionsSalesforceMarketingCloudMergePatch
 */
export interface TargetOptionsSalesforceMarketingCloudMergePatch {
    /**
     * Subdomain of the API Integration within your installed package in SFMC. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-server-to-server-package">the HighTouch docs</a>.
     * @type {string}
     * @memberof TargetOptionsSalesforceMarketingCloudMergePatch
     */
    api_subdomain?: string;
    /**
     * Private SSH key of the FTP user created in SFMC. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-ftp-user">the HighTouch docs</a>.
     * @type {string}
     * @memberof TargetOptionsSalesforceMarketingCloudMergePatch
     */
    ftp_private_key?: string | null;
    /**
     * Password of the FTP user created in SFMC. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-ftp-user">the HighTouch docs</a>.
     * @type {string}
     * @memberof TargetOptionsSalesforceMarketingCloudMergePatch
     */
    ftp_user_password?: string | null;
    /**
     * Username of the FTP user created in SFMC. Typically a numeric Marketing Cloud MID. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-ftp-user">the HighTouch docs</a>.
     * @type {string}
     * @memberof TargetOptionsSalesforceMarketingCloudMergePatch
     */
    ftp_username?: string | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSalesforceMarketingCloudMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsSalesforceMarketingCloud` type.)
 * 
 * Salesforce Marketing Cloud target options
 * @export
 * @interface TargetOptionsSalesforceMarketingCloudPost
 */
export interface TargetOptionsSalesforceMarketingCloudPost {
    /**
     * Subdomain of the API Integration within your installed package in SFMC. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-server-to-server-package">the HighTouch docs</a>.
     * @type {string}
     * @memberof TargetOptionsSalesforceMarketingCloudPost
     */
    api_subdomain: string;
    /**
     * Private SSH key of the FTP user created in SFMC. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-ftp-user">the HighTouch docs</a>.
     * @type {string}
     * @memberof TargetOptionsSalesforceMarketingCloudPost
     */
    ftp_private_key?: string;
    /**
     * Password of the FTP user created in SFMC. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-ftp-user">the HighTouch docs</a>.
     * @type {string}
     * @memberof TargetOptionsSalesforceMarketingCloudPost
     */
    ftp_user_password?: string;
    /**
     * Username of the FTP user created in SFMC. Typically a numeric Marketing Cloud MID. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-ftp-user">the HighTouch docs</a>.
     * @type {string}
     * @memberof TargetOptionsSalesforceMarketingCloudPost
     */
    ftp_username?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSalesforceMarketingCloudPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsSalesforceMarketingCloud` type.)
 * 
 * Salesforce Marketing Cloud target options
 * @export
 * @interface TargetOptionsSalesforceMarketingCloudPut
 */
export interface TargetOptionsSalesforceMarketingCloudPut {
    /**
     * Subdomain of the API Integration within your installed package in SFMC. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-server-to-server-package">the HighTouch docs</a>.
     * @type {string}
     * @memberof TargetOptionsSalesforceMarketingCloudPut
     */
    api_subdomain: string;
    /**
     * Private SSH key of the FTP user created in SFMC. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-ftp-user">the HighTouch docs</a>.
     * @type {string}
     * @memberof TargetOptionsSalesforceMarketingCloudPut
     */
    ftp_private_key?: string;
    /**
     * Password of the FTP user created in SFMC. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-ftp-user">the HighTouch docs</a>.
     * @type {string}
     * @memberof TargetOptionsSalesforceMarketingCloudPut
     */
    ftp_user_password?: string;
    /**
     * Username of the FTP user created in SFMC. Typically a numeric Marketing Cloud MID. Refer to <a href="https://hightouch.com/docs/destinations/sfmc#create-ftp-user">the HighTouch docs</a>.
     * @type {string}
     * @memberof TargetOptionsSalesforceMarketingCloudPut
     */
    ftp_username?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSalesforceMarketingCloudPut
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsSalesforce` type.)
 * 
 * Salesforce target options
 * @export
 * @interface TargetOptionsSalesforceMergePatch
 */
export interface TargetOptionsSalesforceMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSalesforceMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsSalesforce` type.)
 * 
 * Salesforce target options
 * @export
 * @interface TargetOptionsSalesforcePost
 */
export interface TargetOptionsSalesforcePost {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSalesforcePost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsSalesforce` type.)
 * 
 * Salesforce target options
 * @export
 * @interface TargetOptionsSalesforcePut
 */
export interface TargetOptionsSalesforcePut {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSalesforcePut
     */
    type: string;
}
/**
 * Segment target options
 * @export
 * @interface TargetOptionsSegment
 */
export interface TargetOptionsSegment {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSegment
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsSegment` type.)
 * 
 * Segment target options
 * @export
 * @interface TargetOptionsSegmentMergePatch
 */
export interface TargetOptionsSegmentMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSegmentMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsSegment` type.)
 * 
 * Segment target options
 * @export
 * @interface TargetOptionsSegmentPost
 */
export interface TargetOptionsSegmentPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSegmentPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsSegment` type.)
 * 
 * Segment target options
 * @export
 * @interface TargetOptionsSegmentPut
 */
export interface TargetOptionsSegmentPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSegmentPut
     */
    type: string;
}
/**
 * SFTP target options
 * @export
 * @interface TargetOptionsSftp
 */
export interface TargetOptionsSftp {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof TargetOptionsSftp
     */
    delimiter?: string;
    /**
     * What the file will be called after deploying to SFTP (e.g. output/file.csv). If you enable gzip, best practice is to add .gz to the end. Note: strftime substitutions like `%Y-%m-%d` are supported (e.g. output/repeat_customers_%Y-%m-%d.csv).
     * @type {string}
     * @memberof TargetOptionsSftp
     */
    file_name: string;
    /**
     * Whether files are gzipped.
     * @type {boolean}
     * @memberof TargetOptionsSftp
     */
    gzip?: boolean;
    /**
     * Whether to always quote all fields, even if they don't require it. Some systems require this.
     * @type {boolean}
     * @memberof TargetOptionsSftp
     */
    quote_all?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSftp
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsSftp` type.)
 * 
 * SFTP target options
 * @export
 * @interface TargetOptionsSftpMergePatch
 */
export interface TargetOptionsSftpMergePatch {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof TargetOptionsSftpMergePatch
     */
    delimiter?: string | null;
    /**
     * What the file will be called after deploying to SFTP (e.g. output/file.csv). If you enable gzip, best practice is to add .gz to the end. Note: strftime substitutions like `%Y-%m-%d` are supported (e.g. output/repeat_customers_%Y-%m-%d.csv).
     * @type {string}
     * @memberof TargetOptionsSftpMergePatch
     */
    file_name?: string;
    /**
     * Whether files are gzipped.
     * @type {boolean}
     * @memberof TargetOptionsSftpMergePatch
     */
    gzip?: boolean | null;
    /**
     * Whether to always quote all fields, even if they don't require it. Some systems require this.
     * @type {boolean}
     * @memberof TargetOptionsSftpMergePatch
     */
    quote_all?: boolean | null;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSftpMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsSftp` type.)
 * 
 * SFTP target options
 * @export
 * @interface TargetOptionsSftpPost
 */
export interface TargetOptionsSftpPost {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof TargetOptionsSftpPost
     */
    delimiter?: string;
    /**
     * What the file will be called after deploying to SFTP (e.g. output/file.csv). If you enable gzip, best practice is to add .gz to the end. Note: strftime substitutions like `%Y-%m-%d` are supported (e.g. output/repeat_customers_%Y-%m-%d.csv).
     * @type {string}
     * @memberof TargetOptionsSftpPost
     */
    file_name: string;
    /**
     * Whether files are gzipped.
     * @type {boolean}
     * @memberof TargetOptionsSftpPost
     */
    gzip?: boolean;
    /**
     * Whether to always quote all fields, even if they don't require it. Some systems require this.
     * @type {boolean}
     * @memberof TargetOptionsSftpPost
     */
    quote_all?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSftpPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsSftp` type.)
 * 
 * SFTP target options
 * @export
 * @interface TargetOptionsSftpPut
 */
export interface TargetOptionsSftpPut {
    /**
     * Provide the delimiter character, such as `,` or `|`. Defaults to `,`. For tab-delimited files, paste a tab character or use `\t`.
     * @type {string}
     * @memberof TargetOptionsSftpPut
     */
    delimiter?: string;
    /**
     * What the file will be called after deploying to SFTP (e.g. output/file.csv). If you enable gzip, best practice is to add .gz to the end. Note: strftime substitutions like `%Y-%m-%d` are supported (e.g. output/repeat_customers_%Y-%m-%d.csv).
     * @type {string}
     * @memberof TargetOptionsSftpPut
     */
    file_name: string;
    /**
     * Whether files are gzipped.
     * @type {boolean}
     * @memberof TargetOptionsSftpPut
     */
    gzip?: boolean;
    /**
     * Whether to always quote all fields, even if they don't require it. Some systems require this.
     * @type {boolean}
     * @memberof TargetOptionsSftpPut
     */
    quote_all?: boolean;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSftpPut
     */
    type: string;
}
/**
 * Snowflake target options
 * @export
 * @interface TargetOptionsSnowflake
 */
export interface TargetOptionsSnowflake {
    /**
     * Snowflake schema name. If not provided, it may be provided at the connection level, or omitted entirely.
     * @type {string}
     * @memberof TargetOptionsSnowflake
     */
    schema?: string;
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsSnowflake
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSnowflake
     */
    type: string;
    /**
     * Currently only supported on Referenced targets on GCP BigQuery and Snowflake, upsert allows Faraday to write multiple times to the same table from different Targets. It will use the reference_key_column on the referenced Dataset.
     * @type {boolean}
     * @memberof TargetOptionsSnowflake
     */
    upsert?: boolean;
}
/**
 * (Parameters used to PATCH the `TargetOptionsSnowflake` type.)
 * 
 * Snowflake target options
 * @export
 * @interface TargetOptionsSnowflakeMergePatch
 */
export interface TargetOptionsSnowflakeMergePatch {
    /**
     * Snowflake schema name. If not provided, it may be provided at the connection level, or omitted entirely.
     * @type {string}
     * @memberof TargetOptionsSnowflakeMergePatch
     */
    schema?: string | null;
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsSnowflakeMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSnowflakeMergePatch
     */
    type: string;
    /**
     * Currently only supported on Referenced targets on GCP BigQuery and Snowflake, upsert allows Faraday to write multiple times to the same table from different Targets. It will use the reference_key_column on the referenced Dataset.
     * @type {boolean}
     * @memberof TargetOptionsSnowflakeMergePatch
     */
    upsert?: boolean | null;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsSnowflake` type.)
 * 
 * Snowflake target options
 * @export
 * @interface TargetOptionsSnowflakePost
 */
export interface TargetOptionsSnowflakePost {
    /**
     * Snowflake schema name. If not provided, it may be provided at the connection level, or omitted entirely.
     * @type {string}
     * @memberof TargetOptionsSnowflakePost
     */
    schema?: string;
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsSnowflakePost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSnowflakePost
     */
    type: string;
    /**
     * Currently only supported on Referenced targets on GCP BigQuery and Snowflake, upsert allows Faraday to write multiple times to the same table from different Targets. It will use the reference_key_column on the referenced Dataset.
     * @type {boolean}
     * @memberof TargetOptionsSnowflakePost
     */
    upsert?: boolean;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsSnowflake` type.)
 * 
 * Snowflake target options
 * @export
 * @interface TargetOptionsSnowflakePut
 */
export interface TargetOptionsSnowflakePut {
    /**
     * Snowflake schema name. If not provided, it may be provided at the connection level, or omitted entirely.
     * @type {string}
     * @memberof TargetOptionsSnowflakePut
     */
    schema?: string;
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsSnowflakePut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSnowflakePut
     */
    type: string;
    /**
     * Currently only supported on Referenced targets on GCP BigQuery and Snowflake, upsert allows Faraday to write multiple times to the same table from different Targets. It will use the reference_key_column on the referenced Dataset.
     * @type {boolean}
     * @memberof TargetOptionsSnowflakePut
     */
    upsert?: boolean;
}
/**
 * SQL Server target options
 * @export
 * @interface TargetOptionsSqlServer
 */
export interface TargetOptionsSqlServer {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsSqlServer
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSqlServer
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsSqlServer` type.)
 * 
 * SQL Server target options
 * @export
 * @interface TargetOptionsSqlServerMergePatch
 */
export interface TargetOptionsSqlServerMergePatch {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsSqlServerMergePatch
     */
    table_name?: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSqlServerMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsSqlServer` type.)
 * 
 * SQL Server target options
 * @export
 * @interface TargetOptionsSqlServerPost
 */
export interface TargetOptionsSqlServerPost {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsSqlServerPost
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSqlServerPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsSqlServer` type.)
 * 
 * SQL Server target options
 * @export
 * @interface TargetOptionsSqlServerPut
 */
export interface TargetOptionsSqlServerPut {
    /**
     * Table name
     * @type {string}
     * @memberof TargetOptionsSqlServerPut
     */
    table_name: string;
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsSqlServerPut
     */
    type: string;
}
/**
 * The Trade Desk target options
 * @export
 * @interface TargetOptionsTheTradeDesk
 */
export interface TargetOptionsTheTradeDesk {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsTheTradeDesk
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsTheTradeDesk` type.)
 * 
 * The Trade Desk target options
 * @export
 * @interface TargetOptionsTheTradeDeskMergePatch
 */
export interface TargetOptionsTheTradeDeskMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsTheTradeDeskMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsTheTradeDesk` type.)
 * 
 * The Trade Desk target options
 * @export
 * @interface TargetOptionsTheTradeDeskPost
 */
export interface TargetOptionsTheTradeDeskPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsTheTradeDeskPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsTheTradeDesk` type.)
 * 
 * The Trade Desk target options
 * @export
 * @interface TargetOptionsTheTradeDeskPut
 */
export interface TargetOptionsTheTradeDeskPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsTheTradeDeskPut
     */
    type: string;
}
/**
 * TikTok target options
 * @export
 * @interface TargetOptionsTiktok
 */
export interface TargetOptionsTiktok {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsTiktok
     */
    type: string;
}
/**
 * (Parameters used to PATCH the `TargetOptionsTiktok` type.)
 * 
 * TikTok target options
 * @export
 * @interface TargetOptionsTiktokMergePatch
 */
export interface TargetOptionsTiktokMergePatch {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsTiktokMergePatch
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `TargetOptionsTiktok` type.)
 * 
 * TikTok target options
 * @export
 * @interface TargetOptionsTiktokPost
 */
export interface TargetOptionsTiktokPost {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsTiktokPost
     */
    type: string;
}
/**
 * (Parameters used to PUT a value of the `TargetOptionsTiktok` type.)
 * 
 * TikTok target options
 * @export
 * @interface TargetOptionsTiktokPut
 */
export interface TargetOptionsTiktokPut {
    /**
     * The type of connection
     * @type {string}
     * @memberof TargetOptionsTiktokPut
     */
    type: string;
}
/**
 * (Parameters used to POST a new value of the `Target` type.)
 * 
 * Instructions on how to export output data defined by a scope.
 * 
 * There are three types of targets:
 * <table>
 * <thead>
 * <tr><th>Target type</th><th>Description</th><th>API requirement</th></tr>
 * </thead>
 * <tbody>
 * <tr><td><strong>Publication</strong></td><td>Faraday <em>hosts</em> your predictions for convenient retrieval as needed.</td><td>Specify a <code>type</code> of <code>hosted_csv</code> in <code>options</code>. Omit <code>connection_id</code>.</td></tr>
 * <tr><td><strong>Replication</strong></td><td>Faraday copies your predictions to systems <em>you</em> control. You may then push them to third parties like Facebook, Google Ads, etc.</td><td>Specify a valid <code>connection_id</code> and the corresponding <code>type</code> of the connection in <code>options</code>.</td></tr>
 * <tr><td><strong>Managed</strong></td><td>Faraday manages a push to third parties like Facebook, Google Ads, and more.</td><td>Must be on an enterprise plan. Contact Customer Success to set up.</td></tr>
 * </tbody>
 * </table>
 * @export
 * @interface TargetPost
 */
export interface TargetPost {
    /**
     * 
     * @type {TargetAnalysisConfig}
     * @memberof TargetPost
     */
    analysis_config?: TargetAnalysisConfig;
    /**
     * If this is a replication (externally-hosted) target, the UUID of a connection - see <a href="https://faraday.ai/developers/reference/createconnection">/connections</a> for more detail. 
     * 
     * If this is not a replication target, omit this parameter.
     * @type {string}
     * @memberof TargetPost
     */
    connection_id?: string;
    /**
     * By default, targets include all columns in <a href="https://faraday.ai/developers/reference/createtargetpreview">the target preview</a>, with no name changes.
     * 
     * Users may use this parameter to specify their own set of "structure transformations" to override the default selection, order, and name of exported columns.
     * 
     * The shape of this parameter is an array of objects where the order of the columns to export is given by the order of the array. Each item represents a 1:1 mapping of scope input column to target output column. Only those columns specified here are emitted in the target output.
     * @type {Array<TargetStructureTransformation>}
     * @memberof TargetPost
     */
    custom_structure?: Array<TargetStructureTransformation>;
    /**
     * 
     * @type {TargetFilterPost}
     * @memberof TargetPost
     */
    filter?: TargetFilterPost;
    /**
     * By default, column names are exported in a machine-readable format with underscored uuids. 
     * 
     * Setting this to `true` replaces ids with literates in the exported column names.
     * @type {boolean}
     * @memberof TargetPost
     */
    human_readable?: boolean;
    /**
     * 
     * @type {TargetLimitPost}
     * @memberof TargetPost
     */
    limit?: TargetLimitPost;
    /**
     * A user-friendly name of the target.
     * @type {string}
     * @memberof TargetPost
     */
    name: string;
    /**
     * 
     * @type {TargetOptionsPost}
     * @memberof TargetPost
     */
    options: TargetOptionsPost;
    /**
     * 
     * @type {TargetModesPost}
     * @memberof TargetPost
     */
    representation: TargetModesPost;
    /**
     * The UUID of a scope - see <a href="https://faraday.ai/developers/reference/createscope">/scopes</a> for more detail.
     * @type {string}
     * @memberof TargetPost
     */
    scope_id: string;
}
/**
 * (Parameters used to PUT a value of the `Target` type.)
 * 
 * Instructions on how to export output data defined by a scope.
 * 
 * There are three types of targets:
 * <table>
 * <thead>
 * <tr><th>Target type</th><th>Description</th><th>API requirement</th></tr>
 * </thead>
 * <tbody>
 * <tr><td><strong>Publication</strong></td><td>Faraday <em>hosts</em> your predictions for convenient retrieval as needed.</td><td>Specify a <code>type</code> of <code>hosted_csv</code> in <code>options</code>. Omit <code>connection_id</code>.</td></tr>
 * <tr><td><strong>Replication</strong></td><td>Faraday copies your predictions to systems <em>you</em> control. You may then push them to third parties like Facebook, Google Ads, etc.</td><td>Specify a valid <code>connection_id</code> and the corresponding <code>type</code> of the connection in <code>options</code>.</td></tr>
 * <tr><td><strong>Managed</strong></td><td>Faraday manages a push to third parties like Facebook, Google Ads, and more.</td><td>Must be on an enterprise plan. Contact Customer Success to set up.</td></tr>
 * </tbody>
 * </table>
 * @export
 * @interface TargetPut
 */
export interface TargetPut {
    /**
     * 
     * @type {TargetAnalysisConfig}
     * @memberof TargetPut
     */
    analysis_config?: TargetAnalysisConfig;
    /**
     * If this is a replication (externally-hosted) target, the UUID of a connection - see <a href="https://faraday.ai/developers/reference/createconnection">/connections</a> for more detail. 
     * 
     * If this is not a replication target, omit this parameter.
     * @type {string}
     * @memberof TargetPut
     */
    connection_id?: string;
    /**
     * By default, targets include all columns in <a href="https://faraday.ai/developers/reference/createtargetpreview">the target preview</a>, with no name changes.
     * 
     * Users may use this parameter to specify their own set of "structure transformations" to override the default selection, order, and name of exported columns.
     * 
     * The shape of this parameter is an array of objects where the order of the columns to export is given by the order of the array. Each item represents a 1:1 mapping of scope input column to target output column. Only those columns specified here are emitted in the target output.
     * @type {Array<TargetStructureTransformation>}
     * @memberof TargetPut
     */
    custom_structure?: Array<TargetStructureTransformation>;
    /**
     * 
     * @type {TargetFilterPut}
     * @memberof TargetPut
     */
    filter?: TargetFilterPut;
    /**
     * By default, column names are exported in a machine-readable format with underscored uuids. 
     * 
     * Setting this to `true` replaces ids with literates in the exported column names.
     * @type {boolean}
     * @memberof TargetPut
     */
    human_readable?: boolean;
    /**
     * 
     * @type {TargetLimitPut}
     * @memberof TargetPut
     */
    limit?: TargetLimitPut;
    /**
     * A user-friendly name of the target.
     * @type {string}
     * @memberof TargetPut
     */
    name: string;
    /**
     * 
     * @type {TargetOptionsPut}
     * @memberof TargetPut
     */
    options: TargetOptionsPut;
    /**
     * **Deprecated: use `custom_structure`.**
     * 
     * By default, targets include all columns in <a href="https://faraday.ai/developers/reference/createtargetpreview">the target preview</a>, with no name changes.
     * This parameter is an override of the default that enables an explicit mapping of columns that should be included in the target export, along with the exported column name.
     * Each key is the name the column originally had, and each value is the desired name.
     * Example:
     * ```
     * {
     *   "person_first_name": "first_name",
     *   "person_last_name": "last_name",
     *   "city": "city"
     * }
     * ```
     * In the example above, the target will only include the "first_name", "last_name", and "city" columns.
     * @type {{ [key: string]: string; }}
     * @memberof TargetPut
     */
    payload_map?: { [key: string]: string; };
    /**
     * 
     * @type {TargetModesPut}
     * @memberof TargetPut
     */
    representation: TargetModesPut;
}
/**
 * 
 * @export
 * @interface TargetReferencedReference
 */
export interface TargetReferencedReference {
    /**
     * the name of the column in dataset_id that should be referenced
     * @type {string}
     * @memberof TargetReferencedReference
     */
    column_name: string;
    /**
     * dataset id to reference
     * @type {string}
     * @memberof TargetReferencedReference
     */
    dataset_id: string;
}
/**
 * 
 * @export
 * @interface TargetStructureTransformation
 */
export interface TargetStructureTransformation {
    /**
     * The method of aggregation. Applies to aggregation targets only.
     * @type {string}
     * @memberof TargetStructureTransformation
     */
    aggregation?: TargetStructureTransformationAggregationEnum;
    /**
     * For scope columns that can be aggregated with `countif` (currently just persona sets), this is the value being counted (i.e. the persona ID). Applies to aggregation targets only.
     * @type {string}
     * @memberof TargetStructureTransformation
     */
    aggregation_criteria?: string;
    /**
     * Set this to true when exporting first party identifiers (given by <a href="https://faraday.ai/developers/reference/createdataset">identity_sets</a>).
     * 
     * If `true`, `scope_col` represents the dataset field name being selected (ex: "client_email").
     * @type {boolean}
     * @memberof TargetStructureTransformation
     */
    is_identity_col?: boolean;
    /**
     * The name of this column in the target export. Can be the same as `scope_col`.
     * @type {string}
     * @memberof TargetStructureTransformation
     */
    output_col: string;
    /**
     * The name of the scope column to export. 
     * 
     * Users can supply either the machine-readable name (with underscored uuid) or the human-readable name (with literates).
     * @type {string}
     * @memberof TargetStructureTransformation
     */
    scope_col: string;
}

/**
* @export
* @enum {string}
*/
export enum TargetStructureTransformationAggregationEnum {
    Avg = 'avg',
    Count = 'count',
    Countif = 'countif',
    Mode = 'mode',
    Ignore = 'ignore'
}
/**
 * One of:
 *   * default: Faraday default aggregated representation
 *   * google_ads: Aggregated upload format for Google Ads
 * 
 * If not specified `default` is used.
 * @export
 * @enum {string}
 */
export enum TargetTransformPresetAggregated {
    Default = 'default',
    GoogleAds = 'google_ads'
}
/**
 * One of:
 *   * default: Faraday default hashed representation
 *   * linkedin: Hashed upload format for Linkedin
 *   * taboola: Hashed upload format for Taboola
 *   * snapchat: Hashed upload format for Snapchat
 *   * tiktok: Hashed upload format for Tiktok
 *   * pinterest: Hashed upload format for Pinterest
 *   * youtube: Hashed upload format for Youtube
 *   * google_ads: Hashed upload format for Google Ads
 *   * facebook: Hashed upload format for Facebook
 * 
 * If not specified `default` is used.
 * @export
 * @enum {string}
 */
export enum TargetTransformPresetHashed {
    Default = 'default',
    Linkedin = 'linkedin',
    Taboola = 'taboola',
    Snapchat = 'snapchat',
    Tiktok = 'tiktok',
    Pinterest = 'pinterest',
    Youtube = 'youtube',
    GoogleAds = 'google_ads',
    Facebook = 'facebook'
}
/**
 * One of:
 *   * default: Faraday default identified representation
 *   * linkedin: Plaintext upload format for Linkedin
 *   * youtube: Plaintext upload format for Youtube
 *   * klaviyo: Plaintext upload format for Klaviyo
 *   * segment: Plaintext upload format for Segment
 *   * iterable: Plaintext upload format for Iterable
 *   * poplar: Plaintext upload format for Poplar
 *   * salesforce: Plaintext upload format for Salesforce
 *   * hubspot: Plaintext upload format for Hubspot
 *   * address_only: Plaintext upload format for address only
 *   * liveramp: Plaintext upload format for LiveRamp
 * 
 * If not specified `default` is used.
 * @export
 * @enum {string}
 */
export enum TargetTransformPresetIdentified {
    Default = 'default',
    Linkedin = 'linkedin',
    Youtube = 'youtube',
    Klaviyo = 'klaviyo',
    Segment = 'segment',
    Iterable = 'iterable',
    Poplar = 'poplar',
    Salesforce = 'salesforce',
    Hubspot = 'hubspot',
    AddressOnly = 'address_only',
    Liveramp = 'liveramp'
}
/**
 * One of:
 *   * default: Faraday default referenced representation
 * 
 * If not specified `default` is used.
 * @export
 * @enum {string}
 */
export enum TargetTransformPresetReferenced {
    Default = 'default'
}
/**
 * A fact about a person or geographic entity. 
 * 
 * The fact could be provided by Faraday, or alternatively could be defined by the client using data they have uploaded to Faraday.
 * 
 * These traits can be used by name in any of modeling, analysis, and reporting.
 * @export
 * @interface Trait
 */
export interface Trait {
    /**
     * (For user traits only) If not null, this resource will no longer receive updates, but will still be visable.
     * @type {string}
     * @memberof Trait
     */
    archived_at?: string;
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
     * The percentage (0.1 meaning 10%) of the population for which we know the trait value.
     * @type {number}
     * @memberof Trait
     */
    coverage?: number;
    /**
     * When this resource was created.
     * @type {string}
     * @memberof Trait
     */
    created_at: string;
    /**
     * (For Faraday traits only) This trait will no longer receive updated data. Please use the updated version of the trait instead, if available.
     * @type {boolean}
     * @memberof Trait
     */
    deprecated?: boolean;
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
     * What the account is able to use this trait for. Contact support to change access.
     * @type {Array<TraitPermission>}
     * @memberof Trait
     */
    permissions?: Array<TraitPermission>;
    /**
     * Precision refers to the specificity used to assign a trait. For example, 'person' precision indicates a trait specific to an individual, such as a preference for baseball, while 'address' precision pertains to a characteristic related to a location, such as the number of bedrooms in a house.
     * @type {string}
     * @memberof Trait
     */
    precision?: TraitPrecisionEnum;
    /**
     * 
     * @type {ResourceType}
     * @memberof Trait
     */
    resource_type: ResourceType;
    /**
     * 
     * @type {TraitStatisticalType}
     * @memberof Trait
     */
    statistical_type?: TraitStatisticalType;
    /**
     * 
     * @type {ResourceStatus}
     * @memberof Trait
     */
    status: ResourceStatus;
    /**
     * 
     * @type {TraitTier}
     * @memberof Trait
     */
    tier?: TraitTier;
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
     * @type {string}
     * @memberof Trait
     */
    updated_at: string;
}

/**
* @export
* @enum {string}
*/
export enum TraitPrecisionEnum {
    Person = 'person',
    Address = 'address',
    Postcode = 'postcode',
    Geom = 'geom'
}
/**
 * A broad category describing the flavor of a trait.
 * @export
 * @enum {string}
 */
export enum TraitCategory {
    FigDemography = 'fig/demography',
    FigEnvironment = 'fig/environment',
    FigGeography = 'fig/geography',
    FigIdentity = 'fig/identity',
    FigLifestyle = 'fig/lifestyle',
    FigLifeEvent = 'fig/life_event',
    FigProperty = 'fig/property',
    FigReachability = 'fig/reachability',
    FigSociety = 'fig/society',
    FigFinancial = 'fig/financial',
    UserDefined = 'user_defined'
}
/**
 * 
 * @export
 * @interface TraitDataMapColumn
 */
export interface TraitDataMapColumn {
    /**
     * The name of a column in the dataset. Required if no `value` is used.
     * @type {string}
     * @memberof TraitDataMapColumn
     */
    column_name?: string;
    /**
     * 
     * @type {DataMapColumnFormat}
     * @memberof TraitDataMapColumn
     */
    format?: DataMapColumnFormat;
    /**
     * A list of values that should be treated as null.
     * @type {Array<string>}
     * @memberof TraitDataMapColumn
     */
    null_values?: Array<string>;
    /**
     * A mapping of values as they appear in the dataset to how they should be used in models, where the key is what appears in the dataset and value is how it should be interpretted. This is used when multiple distinct values in the source table functionally represent the sme thing, or when combining traits from multiple datasets. Use '*' as the key to capture all values that have been excluded by all other conditions.
     * @type {{ [key: string]: string | number | boolean; }}
     * @memberof TraitDataMapColumn
     */
    transformation_table?: { [key: string]: string | number | boolean; };
    /**
     * A static value for this trait. Required if no `column_name` is used.
     * @type {boolean | string | number}
     * @memberof TraitDataMapColumn
     */
    value?: boolean | string | number | null;
}
/**
 * 
 * @export
 * @interface TraitDataMapColumnMergePatch
 */
export interface TraitDataMapColumnMergePatch {
    /**
     * The name of a column in the dataset. Required if no `value` is used.
     * @type {string}
     * @memberof TraitDataMapColumnMergePatch
     */
    column_name?: string | null;
    /**
     * 
     * @type {DataMapColumnFormat}
     * @memberof TraitDataMapColumnMergePatch
     */
    format?: DataMapColumnFormat | null;
    /**
     * A list of values that should be treated as null.
     * @type {Array<string>}
     * @memberof TraitDataMapColumnMergePatch
     */
    null_values?: Array<string> | null;
    /**
     * A mapping of values as they appear in the dataset to how they should be used in models, where the key is what appears in the dataset and value is how it should be interpretted. This is used when multiple distinct values in the source table functionally represent the sme thing, or when combining traits from multiple datasets. Use '*' as the key to capture all values that have been excluded by all other conditions.
     * @type {{ [key: string]: string | number | boolean; }}
     * @memberof TraitDataMapColumnMergePatch
     */
    transformation_table?: { [key: string]: string | number | boolean; } | null;
    /**
     * A static value for this trait. Required if no `column_name` is used.
     * @type {boolean | string | number}
     * @memberof TraitDataMapColumnMergePatch
     */
    value?: boolean | string | number | null;
}
/**
 * 
 * @export
 * @interface TraitDataMapColumnPost
 */
export interface TraitDataMapColumnPost {
    /**
     * The name of a column in the dataset. Required if no `value` is used.
     * @type {string}
     * @memberof TraitDataMapColumnPost
     */
    column_name?: string;
    /**
     * 
     * @type {DataMapColumnFormat}
     * @memberof TraitDataMapColumnPost
     */
    format?: DataMapColumnFormat;
    /**
     * A list of values that should be treated as null.
     * @type {Array<string>}
     * @memberof TraitDataMapColumnPost
     */
    null_values?: Array<string>;
    /**
     * A mapping of values as they appear in the dataset to how they should be used in models, where the key is what appears in the dataset and value is how it should be interpretted. This is used when multiple distinct values in the source table functionally represent the sme thing, or when combining traits from multiple datasets. Use '*' as the key to capture all values that have been excluded by all other conditions.
     * @type {{ [key: string]: string | number | boolean; }}
     * @memberof TraitDataMapColumnPost
     */
    transformation_table?: { [key: string]: string | number | boolean; };
    /**
     * A static value for this trait. Required if no `column_name` is used.
     * @type {boolean | string | number}
     * @memberof TraitDataMapColumnPost
     */
    value?: boolean | string | number | null;
}
/**
 * 
 * @export
 * @interface TraitDataMapColumnPut
 */
export interface TraitDataMapColumnPut {
    /**
     * The name of a column in the dataset. Required if no `value` is used.
     * @type {string}
     * @memberof TraitDataMapColumnPut
     */
    column_name?: string;
    /**
     * 
     * @type {DataMapColumnFormat}
     * @memberof TraitDataMapColumnPut
     */
    format?: DataMapColumnFormat;
    /**
     * A list of values that should be treated as null.
     * @type {Array<string>}
     * @memberof TraitDataMapColumnPut
     */
    null_values?: Array<string>;
    /**
     * A mapping of values as they appear in the dataset to how they should be used in models, where the key is what appears in the dataset and value is how it should be interpretted. This is used when multiple distinct values in the source table functionally represent the sme thing, or when combining traits from multiple datasets. Use '*' as the key to capture all values that have been excluded by all other conditions.
     * @type {{ [key: string]: string | number | boolean; }}
     * @memberof TraitDataMapColumnPut
     */
    transformation_table?: { [key: string]: string | number | boolean; };
    /**
     * A static value for this trait. Required if no `column_name` is used.
     * @type {boolean | string | number}
     * @memberof TraitDataMapColumnPut
     */
    value?: boolean | string | number | null;
}
/**
 * 
 * @export
 * @interface TraitInputFromDatasets
 */
export interface TraitInputFromDatasets {
    /**
     * The name of a column in the dataset. Required if no `value` is used.
     * @type {string}
     * @memberof TraitInputFromDatasets
     */
    column_name?: string;
    /**
     * The dataset the column comes from.
     * @type {string}
     * @memberof TraitInputFromDatasets
     */
    dataset_id: string;
    /**
     * 
     * @type {DataMapColumnFormat}
     * @memberof TraitInputFromDatasets
     */
    format?: DataMapColumnFormat;
    /**
     * A list of values that should be treated as null.
     * @type {Array<string>}
     * @memberof TraitInputFromDatasets
     */
    null_values?: Array<string>;
    /**
     * A mapping of values as they appear in the dataset to how they should be used in models, where the key is what appears in the dataset and value is how it should be interpretted. This is used when multiple distinct values in the source table functionally represent the sme thing, or when combining traits from multiple datasets. Use '*' as the key to capture all values that have been excluded by all other conditions.
     * @type {{ [key: string]: string | number | boolean; }}
     * @memberof TraitInputFromDatasets
     */
    transformation_table?: { [key: string]: string | number | boolean; };
    /**
     * A static value for this trait. Required if no `column_name` is used.
     * @type {boolean | string | number}
     * @memberof TraitInputFromDatasets
     */
    value?: boolean | string | number | null;
}
/**
 * 
 * @export
 * @interface TraitInputFromDatasetsMergePatch
 */
export interface TraitInputFromDatasetsMergePatch {
    /**
     * The name of a column in the dataset. Required if no `value` is used.
     * @type {string}
     * @memberof TraitInputFromDatasetsMergePatch
     */
    column_name?: string | null;
    /**
     * 
     * @type {DataMapColumnFormat}
     * @memberof TraitInputFromDatasetsMergePatch
     */
    format?: DataMapColumnFormat | null;
    /**
     * A list of values that should be treated as null.
     * @type {Array<string>}
     * @memberof TraitInputFromDatasetsMergePatch
     */
    null_values?: Array<string> | null;
    /**
     * A mapping of values as they appear in the dataset to how they should be used in models, where the key is what appears in the dataset and value is how it should be interpretted. This is used when multiple distinct values in the source table functionally represent the sme thing, or when combining traits from multiple datasets. Use '*' as the key to capture all values that have been excluded by all other conditions.
     * @type {{ [key: string]: string | number | boolean; }}
     * @memberof TraitInputFromDatasetsMergePatch
     */
    transformation_table?: { [key: string]: string | number | boolean; } | null;
    /**
     * A static value for this trait. Required if no `column_name` is used.
     * @type {boolean | string | number}
     * @memberof TraitInputFromDatasetsMergePatch
     */
    value?: boolean | string | number | null;
}
/**
 * 
 * @export
 * @interface TraitInputFromDatasetsPost
 */
export interface TraitInputFromDatasetsPost {
    /**
     * The name of a column in the dataset. Required if no `value` is used.
     * @type {string}
     * @memberof TraitInputFromDatasetsPost
     */
    column_name?: string;
    /**
     * 
     * @type {DataMapColumnFormat}
     * @memberof TraitInputFromDatasetsPost
     */
    format?: DataMapColumnFormat;
    /**
     * A list of values that should be treated as null.
     * @type {Array<string>}
     * @memberof TraitInputFromDatasetsPost
     */
    null_values?: Array<string>;
    /**
     * A mapping of values as they appear in the dataset to how they should be used in models, where the key is what appears in the dataset and value is how it should be interpretted. This is used when multiple distinct values in the source table functionally represent the sme thing, or when combining traits from multiple datasets. Use '*' as the key to capture all values that have been excluded by all other conditions.
     * @type {{ [key: string]: string | number | boolean; }}
     * @memberof TraitInputFromDatasetsPost
     */
    transformation_table?: { [key: string]: string | number | boolean; };
    /**
     * A static value for this trait. Required if no `column_name` is used.
     * @type {boolean | string | number}
     * @memberof TraitInputFromDatasetsPost
     */
    value?: boolean | string | number | null;
}
/**
 * 
 * @export
 * @interface TraitInputFromDatasetsPut
 */
export interface TraitInputFromDatasetsPut {
    /**
     * The name of a column in the dataset. Required if no `value` is used.
     * @type {string}
     * @memberof TraitInputFromDatasetsPut
     */
    column_name?: string;
    /**
     * 
     * @type {DataMapColumnFormat}
     * @memberof TraitInputFromDatasetsPut
     */
    format?: DataMapColumnFormat;
    /**
     * A list of values that should be treated as null.
     * @type {Array<string>}
     * @memberof TraitInputFromDatasetsPut
     */
    null_values?: Array<string>;
    /**
     * A mapping of values as they appear in the dataset to how they should be used in models, where the key is what appears in the dataset and value is how it should be interpretted. This is used when multiple distinct values in the source table functionally represent the sme thing, or when combining traits from multiple datasets. Use '*' as the key to capture all values that have been excluded by all other conditions.
     * @type {{ [key: string]: string | number | boolean; }}
     * @memberof TraitInputFromDatasetsPut
     */
    transformation_table?: { [key: string]: string | number | boolean; };
    /**
     * A static value for this trait. Required if no `column_name` is used.
     * @type {boolean | string | number}
     * @memberof TraitInputFromDatasetsPut
     */
    value?: boolean | string | number | null;
}
/**
 * (Parameters used to PATCH the `Trait` type.)
 * 
 * A fact about a person or geographic entity. 
 * 
 * The fact could be provided by Faraday, or alternatively could be defined by the client using data they have uploaded to Faraday.
 * 
 * These traits can be used by name in any of modeling, analysis, and reporting.
 * @export
 * @interface TraitMergePatch
 */
export interface TraitMergePatch {
    /**
     * Information about this field.
     * @type {string}
     * @memberof TraitMergePatch
     */
    description?: string | null;
    /**
     * A more human-consumable version of the name of this field.
     * @type {string}
     * @memberof TraitMergePatch
     */
    literate?: string | null;
    /**
     * A mapping of the input values used in modeling, to how they should be displayed in reports.
     * @type {object}
     * @memberof TraitMergePatch
     */
    lookup_table?: object | null;
    /**
     * 
     * @type {TraitStatisticalType}
     * @memberof TraitMergePatch
     */
    statistical_type?: TraitStatisticalType | null;
    /**
     * For numeric types, in what units is the data stored.
     * @type {string}
     * @memberof TraitMergePatch
     */
    unit?: string | null;
}
/**
 * Where the account can use the trait.
 * @export
 * @enum {string}
 */
export enum TraitPermission {
    AddToScopePayload = 'add_to_scope_payload',
    DefineCohort = 'define_cohort',
    TargetAnalysis = 'target_analysis'
}
/**
 * (Parameters used to POST a new value of the `Trait` type.)
 * 
 * A fact about a person or geographic entity. 
 * 
 * The fact could be provided by Faraday, or alternatively could be defined by the client using data they have uploaded to Faraday.
 * 
 * These traits can be used by name in any of modeling, analysis, and reporting.
 * @export
 * @interface TraitPost
 */
export interface TraitPost {
    /**
     * Information about this field.
     * @type {string}
     * @memberof TraitPost
     */
    description?: string;
    /**
     * A more human-consumable version of the name of this field.
     * @type {string}
     * @memberof TraitPost
     */
    literate?: string;
    /**
     * A mapping of the input values used in modeling, to how they should be displayed in reports.
     * @type {object}
     * @memberof TraitPost
     */
    lookup_table?: object;
    /**
     * How to refer to this Trait in other API calls to Faraday.
     * @type {string}
     * @memberof TraitPost
     */
    name: string;
    /**
     * 
     * @type {TraitStatisticalType}
     * @memberof TraitPost
     */
    statistical_type?: TraitStatisticalType;
    /**
     * For numeric types, in what units is the data stored.
     * @type {string}
     * @memberof TraitPost
     */
    unit?: string;
}
/**
 * (Parameters used to PUT a value of the `Trait` type.)
 * 
 * A fact about a person or geographic entity. 
 * 
 * The fact could be provided by Faraday, or alternatively could be defined by the client using data they have uploaded to Faraday.
 * 
 * These traits can be used by name in any of modeling, analysis, and reporting.
 * @export
 * @interface TraitPut
 */
export interface TraitPut {
    /**
     * Information about this field.
     * @type {string}
     * @memberof TraitPut
     */
    description?: string;
    /**
     * A more human-consumable version of the name of this field.
     * @type {string}
     * @memberof TraitPut
     */
    literate?: string;
    /**
     * A mapping of the input values used in modeling, to how they should be displayed in reports.
     * @type {object}
     * @memberof TraitPut
     */
    lookup_table?: object;
    /**
     * 
     * @type {TraitStatisticalType}
     * @memberof TraitPut
     */
    statistical_type?: TraitStatisticalType;
    /**
     * For numeric types, in what units is the data stored.
     * @type {string}
     * @memberof TraitPut
     */
    unit?: string;
}
/**
 * A string describing the nature of data represented by the trait.
 * 
 * categorical: the field contains one value of a bounded set. Example "favorite_color": one of "red", "blue", or "yellow".
 * multicategorical: the field contains one or more values of a bounded set. 
 * ordinal: the field contains values which have a natural ordering from low to high.  
 * nominal: Anything else. Fields which are boolean in nature (0/1, T/F, true/false) should be set to `nominal`.
 * @export
 * @enum {string}
 */
export enum TraitStatisticalType {
    Categorical = 'categorical',
    Multicategorical = 'multicategorical',
    Ordinal = 'ordinal',
    Nominal = 'nominal'
}
/**
 * A broad category describing the flavor of a trait.
 * @export
 * @enum {string}
 */
export enum TraitTier {
    Standard = 'standard',
    Premium = 'premium'
}
/**
 * Information about files previously uploaded as Datasets.
 * @export
 * @interface Upload
 */
export interface Upload {
    /**
     * When this file was uploaded
     * @type {string}
     * @memberof Upload
     */
    created_at: string;
    /**
     * The size of the uploaded file in bytes
     * @type {number}
     * @memberof Upload
     */
    file_size: number;
    /**
     * The result of an MD5 hash on the file uploaded. 
     * This hash is a way of confirming Faraday's copy of the file matches yours.
     * @type {string}
     * @memberof Upload
     */
    md5_hash: string;
    /**
     * The file's name and directory
     * @type {string}
     * @memberof Upload
     */
    subpath: string;
}
/**
 * A JSON Schema validation error.
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     * 
     * @type {ValidationErrorContext}
     * @memberof ValidationError
     */
    context: ValidationErrorContext;
    /**
     * A human-readable error message.
     * @type {string}
     * @memberof ValidationError
     */
    message: string;
    /**
     * The location in the document that failed validation.
     * @type {string}
     * @memberof ValidationError
     */
    path: string;
    /**
     * A suggestion for fixing this error.
     * @type {string}
     * @memberof ValidationError
     */
    suggestion?: string;
}
/**
 * More information about the error.
 * @export
 * @interface ValidationErrorContext
 */
export interface ValidationErrorContext {
    /**
     * The type of validation error which occurred.
     * @type {string}
     * @memberof ValidationErrorContext
     */
    errorType: string;
}
/**
 * A webhook is a way to send notifications from Faraday to another system. 
 * 
 * Faraday webhooks conform to the [standard webhooks specification](https://github.com/standard-webhooks/standard-webhooks/blob/main/spec/standard-webhooks.md).
 * 
 * When an event triggers a webhook, Faraday sends a POST request to all registered endpoint URLs
 * with a thin JSON payload describing which resource has been updated.
 * 
 * The structure of the payload is:
 * ```
 *   {
 *     "timestamp": "2024-09-26T14:27:05.944507+00:00",  // iso-formatted string
 *     "type": "resource.ready_with_update",             // event type
 *     "data": {
 *       "account_id": "...",      // uuid of the account
 *       "resource_id": "...",     // uuid of the resource
 *       "resource_type": "..."    // one of 'cohorts', 'connections', 'datasets', 'persona_sets', 'recommenders', 'scopes', 'streams', 'targets', 'traits'
 *     }
 *   }
 * ```
 * Refer to the `webhooks` section of [the yml spec](https://github.com/faradayio/sdk_docs/blob/main/static/api.simplified.yml).
 * 
 * The headers `svix-id`, `svix-timestamp`, and `svix-signature` contain the unique message id, the timestamp
 * of the message attempt (seconds since epoch), and the HMAC signature of the message (comma-separated list), 
 * respectively.
 * @export
 * @interface WebhookEndpoint
 */
export interface WebhookEndpoint {
    /**
     * When this webhook endpoint was created.
     * @type {string}
     * @memberof WebhookEndpoint
     */
    created_at: string;
    /**
     * The event types to enable for this endpoint.
     * @type {Array<WebhookEventType>}
     * @memberof WebhookEndpoint
     */
    enabled_events: Array<WebhookEventType>;
    /**
     * 
     * @type {string}
     * @memberof WebhookEndpoint
     */
    id: string;
    /**
     * Symmetric signing key - base64 encoded random bytes prefixed with `whsec_`.
     * @type {string}
     * @memberof WebhookEndpoint
     */
    secret?: string;
    /**
     * The status of the webhook. It can be either `enabled` or `disabled`.
     * @type {string}
     * @memberof WebhookEndpoint
     */
    status: WebhookEndpointStatusEnum;
    /**
     * When this webhook endpoint was last updated.
     * @type {string}
     * @memberof WebhookEndpoint
     */
    updated_at: string;
    /**
     * The URL of the webhook endpoint.
     * @type {string}
     * @memberof WebhookEndpoint
     */
    url: string;
}

/**
* @export
* @enum {string}
*/
export enum WebhookEndpointStatusEnum {
    Enabled = 'enabled',
    Disabled = 'disabled'
}
/**
 * (Parameters used to PATCH the `WebhookEndpoint` type.)
 * 
 * A webhook is a way to send notifications from Faraday to another system. 
 * 
 * Faraday webhooks conform to the [standard webhooks specification](https://github.com/standard-webhooks/standard-webhooks/blob/main/spec/standard-webhooks.md).
 * 
 * When an event triggers a webhook, Faraday sends a POST request to all registered endpoint URLs
 * with a thin JSON payload describing which resource has been updated.
 * 
 * The structure of the payload is:
 * ```
 *   {
 *     "timestamp": "2024-09-26T14:27:05.944507+00:00",  // iso-formatted string
 *     "type": "resource.ready_with_update",             // event type
 *     "data": {
 *       "account_id": "...",      // uuid of the account
 *       "resource_id": "...",     // uuid of the resource
 *       "resource_type": "..."    // one of 'cohorts', 'connections', 'datasets', 'persona_sets', 'recommenders', 'scopes', 'streams', 'targets', 'traits'
 *     }
 *   }
 * ```
 * Refer to the `webhooks` section of [the yml spec](https://github.com/faradayio/sdk_docs/blob/main/static/api.simplified.yml).
 * 
 * The headers `svix-id`, `svix-timestamp`, and `svix-signature` contain the unique message id, the timestamp
 * of the message attempt (seconds since epoch), and the HMAC signature of the message (comma-separated list), 
 * respectively.
 * @export
 * @interface WebhookEndpointMergePatch
 */
export interface WebhookEndpointMergePatch {
    /**
     * The event types to enable for this endpoint.
     * @type {Array<WebhookEventType>}
     * @memberof WebhookEndpointMergePatch
     */
    enabled_events?: Array<WebhookEventType>;
    /**
     * The status of the webhook. It can be either `enabled` or `disabled`.
     * @type {string}
     * @memberof WebhookEndpointMergePatch
     */
    status?: WebhookEndpointMergePatchStatusEnum;
    /**
     * The URL of the webhook endpoint.
     * @type {string}
     * @memberof WebhookEndpointMergePatch
     */
    url?: string;
}

/**
* @export
* @enum {string}
*/
export enum WebhookEndpointMergePatchStatusEnum {
    Enabled = 'enabled',
    Disabled = 'disabled'
}
/**
 * (Parameters used to POST a new value of the `WebhookEndpoint` type.)
 * 
 * A webhook is a way to send notifications from Faraday to another system. 
 * 
 * Faraday webhooks conform to the [standard webhooks specification](https://github.com/standard-webhooks/standard-webhooks/blob/main/spec/standard-webhooks.md).
 * 
 * When an event triggers a webhook, Faraday sends a POST request to all registered endpoint URLs
 * with a thin JSON payload describing which resource has been updated.
 * 
 * The structure of the payload is:
 * ```
 *   {
 *     "timestamp": "2024-09-26T14:27:05.944507+00:00",  // iso-formatted string
 *     "type": "resource.ready_with_update",             // event type
 *     "data": {
 *       "account_id": "...",      // uuid of the account
 *       "resource_id": "...",     // uuid of the resource
 *       "resource_type": "..."    // one of 'cohorts', 'connections', 'datasets', 'persona_sets', 'recommenders', 'scopes', 'streams', 'targets', 'traits'
 *     }
 *   }
 * ```
 * Refer to the `webhooks` section of [the yml spec](https://github.com/faradayio/sdk_docs/blob/main/static/api.simplified.yml).
 * 
 * The headers `svix-id`, `svix-timestamp`, and `svix-signature` contain the unique message id, the timestamp
 * of the message attempt (seconds since epoch), and the HMAC signature of the message (comma-separated list), 
 * respectively.
 * @export
 * @interface WebhookEndpointPost
 */
export interface WebhookEndpointPost {
    /**
     * The event types to enable for this endpoint.
     * @type {Array<WebhookEventType>}
     * @memberof WebhookEndpointPost
     */
    enabled_events: Array<WebhookEventType>;
    /**
     * The URL of the webhook endpoint.
     * @type {string}
     * @memberof WebhookEndpointPost
     */
    url: string;
}
/**
 * (Parameters used to PUT a value of the `WebhookEndpoint` type.)
 * 
 * A webhook is a way to send notifications from Faraday to another system. 
 * 
 * Faraday webhooks conform to the [standard webhooks specification](https://github.com/standard-webhooks/standard-webhooks/blob/main/spec/standard-webhooks.md).
 * 
 * When an event triggers a webhook, Faraday sends a POST request to all registered endpoint URLs
 * with a thin JSON payload describing which resource has been updated.
 * 
 * The structure of the payload is:
 * ```
 *   {
 *     "timestamp": "2024-09-26T14:27:05.944507+00:00",  // iso-formatted string
 *     "type": "resource.ready_with_update",             // event type
 *     "data": {
 *       "account_id": "...",      // uuid of the account
 *       "resource_id": "...",     // uuid of the resource
 *       "resource_type": "..."    // one of 'cohorts', 'connections', 'datasets', 'persona_sets', 'recommenders', 'scopes', 'streams', 'targets', 'traits'
 *     }
 *   }
 * ```
 * Refer to the `webhooks` section of [the yml spec](https://github.com/faradayio/sdk_docs/blob/main/static/api.simplified.yml).
 * 
 * The headers `svix-id`, `svix-timestamp`, and `svix-signature` contain the unique message id, the timestamp
 * of the message attempt (seconds since epoch), and the HMAC signature of the message (comma-separated list), 
 * respectively.
 * @export
 * @interface WebhookEndpointPut
 */
export interface WebhookEndpointPut {
    /**
     * The event types to enable for this endpoint.
     * @type {Array<WebhookEventType>}
     * @memberof WebhookEndpointPut
     */
    enabled_events: Array<WebhookEventType>;
    /**
     * The status of the webhook. It can be either `enabled` or `disabled`.
     * @type {string}
     * @memberof WebhookEndpointPut
     */
    status: WebhookEndpointPutStatusEnum;
    /**
     * The URL of the webhook endpoint.
     * @type {string}
     * @memberof WebhookEndpointPut
     */
    url: string;
}

/**
* @export
* @enum {string}
*/
export enum WebhookEndpointPutStatusEnum {
    Enabled = 'enabled',
    Disabled = 'disabled'
}
/**
 * The type of event that triggered the webhook.
 * @export
 * @enum {string}
 */
export enum WebhookEventType {
    Errored = 'resource.errored',
    ReadyWithUpdate = 'resource.ready_with_update'
}
/**
 * 
 * @export
 * @interface WebhookMessageForResource
 */
export interface WebhookMessageForResource {
    /**
     * 
     * @type {WebhookMessageForResourceData}
     * @memberof WebhookMessageForResource
     */
    data: WebhookMessageForResourceData;
    /**
     * 
     * @type {string}
     * @memberof WebhookMessageForResource
     */
    timestamp: string;
    /**
     * 
     * @type {WebhookEventType}
     * @memberof WebhookMessageForResource
     */
    type: WebhookEventType;
}
/**
 * The data associated with the event. The structure of this object will depend on the event type.
 * @export
 * @interface WebhookMessageForResourceData
 */
export interface WebhookMessageForResourceData {
    /**
     * The ID of the account that owns the resource.
     * @type {string}
     * @memberof WebhookMessageForResourceData
     */
    account_id: string;
    /**
     * The ID of the resource that triggered the event.
     * @type {string}
     * @memberof WebhookMessageForResourceData
     */
    resource_id: string;
    /**
     * 
     * @type {ResourceType}
     * @memberof WebhookMessageForResourceData
     */
    resource_type: ResourceType;
}
