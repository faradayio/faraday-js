"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookEventType = exports.WebhookEndpointPutStatusEnum = exports.WebhookEndpointMergePatchStatusEnum = exports.WebhookEndpointStatusEnum = exports.TraitTier = exports.TraitStatisticalType = exports.TraitPermission = exports.TraitCategory = exports.TargetTransformPresetReferenced = exports.TargetTransformPresetIdentified = exports.TargetTransformPresetHashed = exports.TargetTransformPresetAggregated = exports.TargetStructureTransformationAggregationEnum = exports.TargetLimitRowCountPutDirectionEnum = exports.TargetLimitRowCountPostDirectionEnum = exports.TargetLimitRowCountMergePatchDirectionEnum = exports.TargetLimitRowCountDirectionEnum = exports.TargetAggregateIdentified = exports.TargetAggregateGeographic = exports.ResourceType = exports.ResourceStatus = exports.RecencyOccurrence = exports.PrimitiveDataType = exports.OutcomeBiasMitigationStrategy = exports.OutcomeAnalysisBiasDataGenderProportionLevelEnum = exports.OutcomeAnalysisBiasDataAgeDistributionLevelEnum = exports.ModelingField = exports.LookupMatchType = exports.ErrorCode = exports.DatasetPutPrivacyEnum = exports.DatasetPostPrivacyEnum = exports.DatasetMergePatchPrivacyEnum = exports.DatasetPrivacyEnum = exports.DataMapColumnFormat = exports.ConnectionDirectionalityEnum = exports.ComplexDataTypeOneOfLogicalTypeEnum = void 0;
/**
* @export
* @enum {string}
*/
var ComplexDataTypeOneOfLogicalTypeEnum;
(function (ComplexDataTypeOneOfLogicalTypeEnum) {
    ComplexDataTypeOneOfLogicalTypeEnum["Date"] = "date";
    ComplexDataTypeOneOfLogicalTypeEnum["TimestampMillis"] = "timestamp-millis";
    ComplexDataTypeOneOfLogicalTypeEnum["LocalTimestampMillis"] = "local-timestamp-millis";
    ComplexDataTypeOneOfLogicalTypeEnum["Json"] = "json";
    ComplexDataTypeOneOfLogicalTypeEnum["Uuid"] = "uuid";
})(ComplexDataTypeOneOfLogicalTypeEnum = exports.ComplexDataTypeOneOfLogicalTypeEnum || (exports.ComplexDataTypeOneOfLogicalTypeEnum = {}));
/**
* @export
* @enum {string}
*/
var ConnectionDirectionalityEnum;
(function (ConnectionDirectionalityEnum) {
    ConnectionDirectionalityEnum["Bidirectional"] = "bidirectional";
    ConnectionDirectionalityEnum["SourceOnly"] = "source_only";
    ConnectionDirectionalityEnum["DestinationOnly"] = "destination_only";
})(ConnectionDirectionalityEnum = exports.ConnectionDirectionalityEnum || (exports.ConnectionDirectionalityEnum = {}));
/**
 * Additional context for the column's data that isn't captured by its data type. For example, a 'revenue' column's data type would likely be 'int64', but format specifies if this number represents 'dollars' or 'cents'. This can be left blank if no additional context is needed.
 * @export
 * @enum {string}
 */
var DataMapColumnFormat;
(function (DataMapColumnFormat) {
    DataMapColumnFormat["CurrencyCents"] = "currency_cents";
    DataMapColumnFormat["CurrencyDollars"] = "currency_dollars";
    DataMapColumnFormat["MmDdYySlash"] = "mm_dd_yy_slash";
    DataMapColumnFormat["MmDdYyyySlash"] = "mm_dd_yyyy_slash";
    DataMapColumnFormat["MmDdYyDash"] = "mm_dd_yy_dash";
    DataMapColumnFormat["MmDdYyyyDash"] = "mm_dd_yyyy_dash";
    DataMapColumnFormat["YyyyMmDdSlash"] = "yyyy_mm_dd_slash";
    DataMapColumnFormat["YyMmDdSlash"] = "yy_mm_dd_slash";
    DataMapColumnFormat["YyyyMmDdDash"] = "yyyy_mm_dd_dash";
    DataMapColumnFormat["YyMmDdDash"] = "yy_mm_dd_dash";
    DataMapColumnFormat["Yyyymmdd"] = "yyyymmdd";
    DataMapColumnFormat["Yyyymm"] = "yyyymm";
    DataMapColumnFormat["YyyyMmDash"] = "yyyy_mm_dash";
    DataMapColumnFormat["YyyyMmSlash"] = "yyyy_mm_slash";
    DataMapColumnFormat["DdMmYyyySlash"] = "dd_mm_yyyy_slash";
    DataMapColumnFormat["DdMmYySlash"] = "dd_mm_yy_slash";
    DataMapColumnFormat["DdMmYyyyDash"] = "dd_mm_yyyy_dash";
    DataMapColumnFormat["DdMmYyDash"] = "dd_mm_yy_dash";
    DataMapColumnFormat["DateIso8601"] = "date_iso8601";
    DataMapColumnFormat["DateMonthDayFullyear"] = "date_month_day_fullyear";
    DataMapColumnFormat["DateMonthDayShortyear"] = "date_month_day_shortyear";
    DataMapColumnFormat["DateMonthDayFullyearHoursMinutes"] = "date_month_day_fullyear_hours_minutes";
    DataMapColumnFormat["DateMonthDayFullyearHoursMinutesSeconds"] = "date_month_day_fullyear_hours_minutes_seconds";
    DataMapColumnFormat["DateSecondsSinceEpochUtc"] = "date_seconds_since_epoch_utc";
    DataMapColumnFormat["DateMillisecondsSinceEpochUtc"] = "date_milliseconds_since_epoch_utc";
    DataMapColumnFormat["ListCommaSeparated"] = "list_comma_separated";
    DataMapColumnFormat["ListSemicolonSeparated"] = "list_semicolon_separated";
    DataMapColumnFormat["ListSingleValue"] = "list_single_value";
    DataMapColumnFormat["StaticDateIso8601"] = "static_date_iso8601";
})(DataMapColumnFormat = exports.DataMapColumnFormat || (exports.DataMapColumnFormat = {}));
/**
* @export
* @enum {string}
*/
var DatasetPrivacyEnum;
(function (DatasetPrivacyEnum) {
    DatasetPrivacyEnum["Suppress"] = "suppress";
    DatasetPrivacyEnum["Delete"] = "delete";
})(DatasetPrivacyEnum = exports.DatasetPrivacyEnum || (exports.DatasetPrivacyEnum = {}));
/**
* @export
* @enum {string}
*/
var DatasetMergePatchPrivacyEnum;
(function (DatasetMergePatchPrivacyEnum) {
    DatasetMergePatchPrivacyEnum["Suppress"] = "suppress";
    DatasetMergePatchPrivacyEnum["Delete"] = "delete";
})(DatasetMergePatchPrivacyEnum = exports.DatasetMergePatchPrivacyEnum || (exports.DatasetMergePatchPrivacyEnum = {}));
/**
* @export
* @enum {string}
*/
var DatasetPostPrivacyEnum;
(function (DatasetPostPrivacyEnum) {
    DatasetPostPrivacyEnum["Suppress"] = "suppress";
    DatasetPostPrivacyEnum["Delete"] = "delete";
})(DatasetPostPrivacyEnum = exports.DatasetPostPrivacyEnum || (exports.DatasetPostPrivacyEnum = {}));
/**
* @export
* @enum {string}
*/
var DatasetPutPrivacyEnum;
(function (DatasetPutPrivacyEnum) {
    DatasetPutPrivacyEnum["Suppress"] = "suppress";
    DatasetPutPrivacyEnum["Delete"] = "delete";
})(DatasetPutPrivacyEnum = exports.DatasetPutPrivacyEnum || (exports.DatasetPutPrivacyEnum = {}));
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
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["BadRequest"] = "BAD_REQUEST";
    ErrorCode["Forbidden"] = "FORBIDDEN";
    ErrorCode["MaxResourcesReached"] = "MAX_RESOURCES_REACHED";
    ErrorCode["InternalServerError"] = "INTERNAL_SERVER_ERROR";
    ErrorCode["InvalidAuthorization"] = "INVALID_AUTHORIZATION";
    ErrorCode["NotFound"] = "NOT_FOUND";
    ErrorCode["MalformedApiKey"] = "MALFORMED_API_KEY";
    ErrorCode["MissingApiKey"] = "MISSING_API_KEY";
    ErrorCode["ExpiredApiKey"] = "EXPIRED_API_KEY";
    ErrorCode["ValidationFailed"] = "VALIDATION_FAILED";
    ErrorCode["Conflict"] = "CONFLICT";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
/**
 * The type of match that was found for the lookup request.
 * @export
 * @enum {string}
 */
var LookupMatchType;
(function (LookupMatchType) {
    LookupMatchType["AddressFullName"] = "address_full_name";
    LookupMatchType["EmailFullName"] = "email_full_name";
    LookupMatchType["PhoneFullName"] = "phone_full_name";
    LookupMatchType["AddressLastName"] = "address_last_name";
    LookupMatchType["EmailLastName"] = "email_last_name";
    LookupMatchType["PhoneLastName"] = "phone_last_name";
    LookupMatchType["AddressOnly"] = "address_only";
    LookupMatchType["EmailOnly"] = "email_only";
})(LookupMatchType = exports.LookupMatchType || (exports.LookupMatchType = {}));
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
 * fig/education_v2: Median attainment completed by adults in household age 18 or older
 * fig/favm: Faraday's Automated Valuation Model (AVM) is an algorithmic estimate that approximates the true market value of a home as closely as possible.
 * fig/frequent_remodeler: Interest in home improvement, or recent renovation activity
 * fig/gardener: Self-reported interest in gardening
 * fig/gender: Gender of individual
 * fig/health_conscious: Self-reported interest in health & exercise
 * fig/homeowner_status: Designation of person-to-property relationship (renter vs. owner), with probability
 * fig/household_income_v2: Median numeric value of narrow-band income; computed based on highly accurate multi-sourced models which take into account modeled self-reported incomes, property values and other proprietary sources; calibrated to and validated against truth sets prior to release every six weeks
 * fig/household_size: The number of people living in the household, including adults and children
 * fig/housing_density: Number of housing units per square mile
 * fig/length_of_residence_v2: The number of years the resident has lived at this location
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
 * fig/value_score_all_v2: Estimated consumer marketing profitability. This modeled data is derived from credit behavior and leverages demographic and self-reported data.
 * fig/year_built: The year that the house was originally built (see "Effective year built" for last extensive remodel)
 * @export
 * @enum {string}
 */
var ModelingField;
(function (ModelingField) {
    ModelingField["ActvtyNumPurchaseQuintile"] = "fig/actvty_num_purchase_quintile";
    ModelingField["ActvtyTtlDollarsQuintile"] = "fig/actvty_ttl_dollars_quintile";
    ModelingField["Age"] = "fig/age";
    ModelingField["Antiques"] = "fig/antiques";
    ModelingField["BooksMagazines"] = "fig/books_magazines";
    ModelingField["CharitableDonations"] = "fig/charitable_donations";
    ModelingField["Dieting"] = "fig/dieting";
    ModelingField["EducationV2"] = "fig/education_v2";
    ModelingField["Favm"] = "fig/favm";
    ModelingField["FrequentRemodeler"] = "fig/frequent_remodeler";
    ModelingField["Gardener"] = "fig/gardener";
    ModelingField["Gender"] = "fig/gender";
    ModelingField["HealthConscious"] = "fig/health_conscious";
    ModelingField["HomeownerStatus"] = "fig/homeowner_status";
    ModelingField["HouseholdIncomeV2"] = "fig/household_income_v2";
    ModelingField["HouseholdSize"] = "fig/household_size";
    ModelingField["LengthOfResidenceV2"] = "fig/length_of_residence_v2";
    ModelingField["LifeSportsSportsAll"] = "fig/life_sports_sports_all";
    ModelingField["LivingArea"] = "fig/living_area";
    ModelingField["MaritalStatus"] = "fig/marital_status";
    ModelingField["Music"] = "fig/music";
    ModelingField["NetWorth"] = "fig/net_worth";
    ModelingField["PercentEquity"] = "fig/percent_equity";
    ModelingField["PetAny"] = "fig/pet_any";
    ModelingField["PurchChanInternet"] = "fig/purch_chan_internet";
    ModelingField["ShoppingStyles"] = "fig/shopping_styles";
    ModelingField["Travel"] = "fig/travel";
    ModelingField["HousingDensity"] = "fig/housing_density";
    ModelingField["ValueScoreAllV2"] = "fig/value_score_all_v2";
    ModelingField["YearBuilt"] = "fig/year_built";
})(ModelingField = exports.ModelingField || (exports.ModelingField = {}));
/**
* @export
* @enum {string}
*/
var OutcomeAnalysisBiasDataAgeDistributionLevelEnum;
(function (OutcomeAnalysisBiasDataAgeDistributionLevelEnum) {
    OutcomeAnalysisBiasDataAgeDistributionLevelEnum["LowBias"] = "low_bias";
    OutcomeAnalysisBiasDataAgeDistributionLevelEnum["ModerateBias"] = "moderate_bias";
    OutcomeAnalysisBiasDataAgeDistributionLevelEnum["StrongBias"] = "strong_bias";
})(OutcomeAnalysisBiasDataAgeDistributionLevelEnum = exports.OutcomeAnalysisBiasDataAgeDistributionLevelEnum || (exports.OutcomeAnalysisBiasDataAgeDistributionLevelEnum = {}));
/**
* @export
* @enum {string}
*/
var OutcomeAnalysisBiasDataGenderProportionLevelEnum;
(function (OutcomeAnalysisBiasDataGenderProportionLevelEnum) {
    OutcomeAnalysisBiasDataGenderProportionLevelEnum["LowBias"] = "low_bias";
    OutcomeAnalysisBiasDataGenderProportionLevelEnum["ModerateBias"] = "moderate_bias";
    OutcomeAnalysisBiasDataGenderProportionLevelEnum["StrongBias"] = "strong_bias";
})(OutcomeAnalysisBiasDataGenderProportionLevelEnum = exports.OutcomeAnalysisBiasDataGenderProportionLevelEnum || (exports.OutcomeAnalysisBiasDataGenderProportionLevelEnum = {}));
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
var OutcomeBiasMitigationStrategy;
(function (OutcomeBiasMitigationStrategy) {
    OutcomeBiasMitigationStrategy["None"] = "none";
    OutcomeBiasMitigationStrategy["Equality"] = "equality";
    OutcomeBiasMitigationStrategy["Equity"] = "equity";
})(OutcomeBiasMitigationStrategy = exports.OutcomeBiasMitigationStrategy || (exports.OutcomeBiasMitigationStrategy = {}));
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
var PrimitiveDataType;
(function (PrimitiveDataType) {
    PrimitiveDataType["Boolean"] = "boolean";
    PrimitiveDataType["Long"] = "long";
    PrimitiveDataType["Double"] = "double";
    PrimitiveDataType["String"] = "string";
    PrimitiveDataType["Date"] = "date";
})(PrimitiveDataType = exports.PrimitiveDataType || (exports.PrimitiveDataType = {}));
/**
 * What event to pay attention to
 * @export
 * @enum {string}
 */
var RecencyOccurrence;
(function (RecencyOccurrence) {
    RecencyOccurrence["First"] = "first";
    RecencyOccurrence["Last"] = "last";
})(RecencyOccurrence = exports.RecencyOccurrence || (exports.RecencyOccurrence = {}));
/**
 * The current state of this resource and any updates.
 * @export
 * @enum {string}
 */
var ResourceStatus;
(function (ResourceStatus) {
    ResourceStatus["New"] = "new";
    ResourceStatus["Starting"] = "starting";
    ResourceStatus["Running"] = "running";
    ResourceStatus["Ready"] = "ready";
    ResourceStatus["Error"] = "error";
})(ResourceStatus = exports.ResourceStatus || (exports.ResourceStatus = {}));
/**
 * The type of a resource which is available via the REST SDK.
 * @export
 * @enum {string}
 */
var ResourceType;
(function (ResourceType) {
    ResourceType["Cohorts"] = "cohorts";
    ResourceType["Connections"] = "connections";
    ResourceType["Datasets"] = "datasets";
    ResourceType["Accounts"] = "accounts";
    ResourceType["Outcomes"] = "outcomes";
    ResourceType["PersonaSets"] = "persona_sets";
    ResourceType["Recommenders"] = "recommenders";
    ResourceType["Scopes"] = "scopes";
    ResourceType["Streams"] = "streams";
    ResourceType["Targets"] = "targets";
    ResourceType["Traits"] = "traits";
    ResourceType["Places"] = "places";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
/**
 * Available aggregation levels for data exported in `aggregated` targets.
 * @export
 * @enum {string}
 */
var TargetAggregateGeographic;
(function (TargetAggregateGeographic) {
    TargetAggregateGeographic["Postcode"] = "postcode";
    TargetAggregateGeographic["County"] = "county";
    TargetAggregateGeographic["Metro"] = "metro";
    TargetAggregateGeographic["State"] = "state";
    TargetAggregateGeographic["CensusBlockGroup"] = "census_block_group";
    TargetAggregateGeographic["CensusTract"] = "census_tract";
    TargetAggregateGeographic["Dma"] = "dma";
})(TargetAggregateGeographic = exports.TargetAggregateGeographic || (exports.TargetAggregateGeographic = {}));
/**
 * Available aggregation levels for data exported in `identified` targets. Only `person` is supported for targets with options.type = `lookup_api`.
 * @export
 * @enum {string}
 */
var TargetAggregateIdentified;
(function (TargetAggregateIdentified) {
    TargetAggregateIdentified["Person"] = "person";
    TargetAggregateIdentified["Residence"] = "residence";
})(TargetAggregateIdentified = exports.TargetAggregateIdentified || (exports.TargetAggregateIdentified = {}));
/**
* @export
* @enum {string}
*/
var TargetLimitRowCountDirectionEnum;
(function (TargetLimitRowCountDirectionEnum) {
    TargetLimitRowCountDirectionEnum["Ascending"] = "ascending";
    TargetLimitRowCountDirectionEnum["Descending"] = "descending";
})(TargetLimitRowCountDirectionEnum = exports.TargetLimitRowCountDirectionEnum || (exports.TargetLimitRowCountDirectionEnum = {}));
/**
* @export
* @enum {string}
*/
var TargetLimitRowCountMergePatchDirectionEnum;
(function (TargetLimitRowCountMergePatchDirectionEnum) {
    TargetLimitRowCountMergePatchDirectionEnum["Ascending"] = "ascending";
    TargetLimitRowCountMergePatchDirectionEnum["Descending"] = "descending";
})(TargetLimitRowCountMergePatchDirectionEnum = exports.TargetLimitRowCountMergePatchDirectionEnum || (exports.TargetLimitRowCountMergePatchDirectionEnum = {}));
/**
* @export
* @enum {string}
*/
var TargetLimitRowCountPostDirectionEnum;
(function (TargetLimitRowCountPostDirectionEnum) {
    TargetLimitRowCountPostDirectionEnum["Ascending"] = "ascending";
    TargetLimitRowCountPostDirectionEnum["Descending"] = "descending";
})(TargetLimitRowCountPostDirectionEnum = exports.TargetLimitRowCountPostDirectionEnum || (exports.TargetLimitRowCountPostDirectionEnum = {}));
/**
* @export
* @enum {string}
*/
var TargetLimitRowCountPutDirectionEnum;
(function (TargetLimitRowCountPutDirectionEnum) {
    TargetLimitRowCountPutDirectionEnum["Ascending"] = "ascending";
    TargetLimitRowCountPutDirectionEnum["Descending"] = "descending";
})(TargetLimitRowCountPutDirectionEnum = exports.TargetLimitRowCountPutDirectionEnum || (exports.TargetLimitRowCountPutDirectionEnum = {}));
/**
* @export
* @enum {string}
*/
var TargetStructureTransformationAggregationEnum;
(function (TargetStructureTransformationAggregationEnum) {
    TargetStructureTransformationAggregationEnum["Avg"] = "avg";
    TargetStructureTransformationAggregationEnum["Count"] = "count";
    TargetStructureTransformationAggregationEnum["Countif"] = "countif";
})(TargetStructureTransformationAggregationEnum = exports.TargetStructureTransformationAggregationEnum || (exports.TargetStructureTransformationAggregationEnum = {}));
/**
 * One of:
 *   * default: Faraday default aggregated representation
 *   * google_ads: Aggregated upload format for Google Ads
 *
 * If not specified `default` is used.
 * @export
 * @enum {string}
 */
var TargetTransformPresetAggregated;
(function (TargetTransformPresetAggregated) {
    TargetTransformPresetAggregated["Default"] = "default";
    TargetTransformPresetAggregated["GoogleAds"] = "google_ads";
})(TargetTransformPresetAggregated = exports.TargetTransformPresetAggregated || (exports.TargetTransformPresetAggregated = {}));
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
var TargetTransformPresetHashed;
(function (TargetTransformPresetHashed) {
    TargetTransformPresetHashed["Default"] = "default";
    TargetTransformPresetHashed["Linkedin"] = "linkedin";
    TargetTransformPresetHashed["Taboola"] = "taboola";
    TargetTransformPresetHashed["Snapchat"] = "snapchat";
    TargetTransformPresetHashed["Tiktok"] = "tiktok";
    TargetTransformPresetHashed["Pinterest"] = "pinterest";
    TargetTransformPresetHashed["Youtube"] = "youtube";
    TargetTransformPresetHashed["GoogleAds"] = "google_ads";
    TargetTransformPresetHashed["Facebook"] = "facebook";
})(TargetTransformPresetHashed = exports.TargetTransformPresetHashed || (exports.TargetTransformPresetHashed = {}));
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
var TargetTransformPresetIdentified;
(function (TargetTransformPresetIdentified) {
    TargetTransformPresetIdentified["Default"] = "default";
    TargetTransformPresetIdentified["Linkedin"] = "linkedin";
    TargetTransformPresetIdentified["Youtube"] = "youtube";
    TargetTransformPresetIdentified["Klaviyo"] = "klaviyo";
    TargetTransformPresetIdentified["Segment"] = "segment";
    TargetTransformPresetIdentified["Iterable"] = "iterable";
    TargetTransformPresetIdentified["Poplar"] = "poplar";
    TargetTransformPresetIdentified["Salesforce"] = "salesforce";
    TargetTransformPresetIdentified["Hubspot"] = "hubspot";
    TargetTransformPresetIdentified["AddressOnly"] = "address_only";
    TargetTransformPresetIdentified["Liveramp"] = "liveramp";
})(TargetTransformPresetIdentified = exports.TargetTransformPresetIdentified || (exports.TargetTransformPresetIdentified = {}));
/**
 * One of:
 *   * default: Faraday default referenced representation
 *
 * If not specified `default` is used.
 * @export
 * @enum {string}
 */
var TargetTransformPresetReferenced;
(function (TargetTransformPresetReferenced) {
    TargetTransformPresetReferenced["Default"] = "default";
})(TargetTransformPresetReferenced = exports.TargetTransformPresetReferenced || (exports.TargetTransformPresetReferenced = {}));
/**
 * A broad category describing the flavor of a trait.
 * @export
 * @enum {string}
 */
var TraitCategory;
(function (TraitCategory) {
    TraitCategory["FigDemography"] = "fig/demography";
    TraitCategory["FigEnvironment"] = "fig/environment";
    TraitCategory["FigGeography"] = "fig/geography";
    TraitCategory["FigIdentity"] = "fig/identity";
    TraitCategory["FigLifestyle"] = "fig/lifestyle";
    TraitCategory["FigLifeEvent"] = "fig/life_event";
    TraitCategory["FigProperty"] = "fig/property";
    TraitCategory["FigReachability"] = "fig/reachability";
    TraitCategory["FigSociety"] = "fig/society";
    TraitCategory["FigFinancial"] = "fig/financial";
    TraitCategory["UserDefined"] = "user_defined";
})(TraitCategory = exports.TraitCategory || (exports.TraitCategory = {}));
/**
 * Where the account can use the trait.
 * @export
 * @enum {string}
 */
var TraitPermission;
(function (TraitPermission) {
    TraitPermission["AddToScopePayload"] = "add_to_scope_payload";
    TraitPermission["DefineCohort"] = "define_cohort";
})(TraitPermission = exports.TraitPermission || (exports.TraitPermission = {}));
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
var TraitStatisticalType;
(function (TraitStatisticalType) {
    TraitStatisticalType["Categorical"] = "categorical";
    TraitStatisticalType["Multicategorical"] = "multicategorical";
    TraitStatisticalType["Ordinal"] = "ordinal";
    TraitStatisticalType["Nominal"] = "nominal";
})(TraitStatisticalType = exports.TraitStatisticalType || (exports.TraitStatisticalType = {}));
/**
 * A broad category describing the flavor of a trait.
 * @export
 * @enum {string}
 */
var TraitTier;
(function (TraitTier) {
    TraitTier["Standard"] = "standard";
    TraitTier["Premium"] = "premium";
})(TraitTier = exports.TraitTier || (exports.TraitTier = {}));
/**
* @export
* @enum {string}
*/
var WebhookEndpointStatusEnum;
(function (WebhookEndpointStatusEnum) {
    WebhookEndpointStatusEnum["Enabled"] = "enabled";
    WebhookEndpointStatusEnum["Disabled"] = "disabled";
})(WebhookEndpointStatusEnum = exports.WebhookEndpointStatusEnum || (exports.WebhookEndpointStatusEnum = {}));
/**
* @export
* @enum {string}
*/
var WebhookEndpointMergePatchStatusEnum;
(function (WebhookEndpointMergePatchStatusEnum) {
    WebhookEndpointMergePatchStatusEnum["Enabled"] = "enabled";
    WebhookEndpointMergePatchStatusEnum["Disabled"] = "disabled";
})(WebhookEndpointMergePatchStatusEnum = exports.WebhookEndpointMergePatchStatusEnum || (exports.WebhookEndpointMergePatchStatusEnum = {}));
/**
* @export
* @enum {string}
*/
var WebhookEndpointPutStatusEnum;
(function (WebhookEndpointPutStatusEnum) {
    WebhookEndpointPutStatusEnum["Enabled"] = "enabled";
    WebhookEndpointPutStatusEnum["Disabled"] = "disabled";
})(WebhookEndpointPutStatusEnum = exports.WebhookEndpointPutStatusEnum || (exports.WebhookEndpointPutStatusEnum = {}));
/**
 * The type of event that triggered the webhook.
 * @export
 * @enum {string}
 */
var WebhookEventType;
(function (WebhookEventType) {
    WebhookEventType["Errored"] = "resource.errored";
    WebhookEventType["ReadyWithUpdate"] = "resource.ready_with_update";
})(WebhookEventType = exports.WebhookEventType || (exports.WebhookEventType = {}));
