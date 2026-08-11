"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookMessageForEnrichmentJobDataStatusEnum = exports.WebhookMessageForEnrichmentJobDataInvocationEnum = exports.WebhookEventType = exports.WebhookEndpointPutStatusEnum = exports.WebhookEndpointMergePatchStatusEnum = exports.WebhookEndpointStatusEnum = exports.TraitTier = exports.TraitStatisticalType = exports.TraitPermission = exports.TraitCategory = exports.TraitPrecisionEnum = exports.TargetTransformPresetReferenced = exports.TargetTransformPresetIdentified = exports.TargetTransformPresetHashed = exports.TargetTransformPresetAggregated = exports.TargetStructureTransformationAggregationEnum = exports.TargetMergePatchAnalysisConfigGeographiesEnum = exports.TargetLookupMode = exports.TargetLimitRowCountPutDirectionEnum = exports.TargetLimitRowCountPostDirectionEnum = exports.TargetLimitRowCountMergePatchDirectionEnum = exports.TargetLimitRowCountDirectionEnum = exports.TargetAnalysisConfigGeographiesEnum = exports.TargetAggregateIdentified = exports.TargetAggregateGeographic = exports.StreamPropertyTier = exports.StreamPropertyCategory = exports.SnowflakeRotateCredentialsRequestTypeEnum = exports.ScopePayloadMergePatchLocationSelectEnum = exports.ScopePayloadLocationSelectEnum = exports.ScopeEfficacyOutcomeMonthPerformedEnum = exports.ResourceType = exports.ResourceStatus = exports.RecencyOccurrence = exports.ProjectTraitColumnComponentEnum = exports.ProjectTimestampFormat = exports.ProjectStreamColumnComponentEnum = exports.ProjectResolvedColumnSnapshotGranularityEnum = exports.ProjectResolvedColumnAsOfBasisEnum = exports.ProjectRecommenderColumnComponentEnum = exports.ProjectPersonaSetColumnComponentEnum = exports.ProjectOutcomeColumnComponentEnum = exports.ProjectMatchMetadataColumnComponentEnum = exports.ProjectLookupWarningCodeEnum = exports.ProjectLookupResultStatusEnum = exports.ProjectLookupMatchProviderEnum = exports.ProjectLookupMatchMatchedOnEnum = exports.ProjectImputationLevel = exports.ProjectIdentifierElementProvidersEnum = exports.ProjectIdentifierElementHashEnum = exports.ProjectIdentifierElementClassEnum = exports.ProjectIdentifierColumnComponentEnum = exports.ProjectGeometryColumnComponentEnum = exports.ProjectDatasetColumnComponentEnum = exports.ProjectColumnDataType = exports.ProjectColumnAggregation = exports.ProjectCohortColumnComponentEnum = exports.ProjectAttributeColumnComponentEnum = exports.PrimitiveDataType = exports.PopulationExpansion = exports.OutcomePutPredictionModeEnum = exports.OutcomePostPredictionModeEnum = exports.OutcomeMergePatchPredictionModeEnum = exports.OutcomeBiasMitigationStrategy = exports.OutcomeAnalysisBiasDataGenderProportionLevelEnum = exports.OutcomeAnalysisBiasDataAgeDistributionLevelEnum = exports.OutcomePredictionModeEnum = exports.ModelingField = exports.ModelingAttribute = exports.LookupMatchType = exports.LookupIdentityProvider = exports.ErrorCode = exports.EnrichmentSortOrderEnum = exports.EnrichmentJobStatusEnum = exports.EnrichmentJobInvocationEnum = exports.EnrichmentDatabaseDestinationTypeEnum = exports.EnrichmentColumnConditionApplyEnum = exports.EnrichmentCadenceWeeklyDayOfWeekEnum = exports.EnrichmentAggregationOrderDirectionEnum = exports.EnrichmentAggregationLevelEnum = exports.DatasetPutPrivacyEnum = exports.DatasetPostPrivacyEnum = exports.DatasetMergePatchPrivacyEnum = exports.DatasetIdentityProvidersSelectEnum = exports.DatasetIdentityProvidersProviderEnum = exports.DatasetPrivacyEnum = exports.DataMapColumnFormat = exports.ConnectionDirectionalityEnum = exports.ComplexDataTypeOneOfLogicalTypeEnum = exports.ClickHouseRotateCredentialsRequestTypeEnum = exports.AttributeSortDirection = exports.AttributePrecision = exports.AttributePermission = exports.AttributeAggregationMethod = exports.AllowedClusteringAttributes = void 0;
/**
 * The set of Faraday-provided attributes allowed for clustering, on accounts with an identity graph feature store set.
 *
 * By default, Faraday considers a fixed subset of these broadly effective attributes when discovering your personas; advanced users may override that recommendation with any members of this set.
 * @export
 * @enum {string}
 */
var AllowedClusteringAttributes;
(function (AllowedClusteringAttributes) {
    AllowedClusteringAttributes["TotalPurchaseCountObservedQuintile"] = "fig/total_purchase_count_observed_quintile";
    AllowedClusteringAttributes["TotalAmountSpentOnPurchasesQuintile"] = "fig/total_amount_spent_on_purchases_quintile";
    AllowedClusteringAttributes["Age"] = "fig/age";
    AllowedClusteringAttributes["CollectiblesArtAntiquesInterest"] = "fig/collectibles_art_antiques_interest";
    AllowedClusteringAttributes["GeneralBookReadingInterest"] = "fig/general_book_reading_interest";
    AllowedClusteringAttributes["CharitableDonationInterest"] = "fig/charitable_donation_interest";
    AllowedClusteringAttributes["NutritionInterest"] = "fig/nutrition_interest";
    AllowedClusteringAttributes["HouseholdEducation"] = "fig/household_education";
    AllowedClusteringAttributes["TaxAssessedPropertyValue"] = "fig/tax_assessed_property_value";
    AllowedClusteringAttributes["GardeningInterest"] = "fig/gardening_interest";
    AllowedClusteringAttributes["Gender"] = "fig/gender";
    AllowedClusteringAttributes["FitnessInterest"] = "fig/fitness_interest";
    AllowedClusteringAttributes["HomeOwnershipStatus"] = "fig/home_ownership_status";
    AllowedClusteringAttributes["HouseholdIncome"] = "fig/household_income";
    AllowedClusteringAttributes["HouseholdSize"] = "fig/household_size";
    AllowedClusteringAttributes["LengthOfResidence"] = "fig/length_of_residence";
    AllowedClusteringAttributes["InterestInSports"] = "fig/interest_in_sports";
    AllowedClusteringAttributes["PropertyLivingArea"] = "fig/property_living_area";
    AllowedClusteringAttributes["MaritalStatus"] = "fig/marital_status";
    AllowedClusteringAttributes["MusicInterest"] = "fig/music_interest";
    AllowedClusteringAttributes["NetWorth"] = "fig/net_worth";
    AllowedClusteringAttributes["CurrentInstallmentLoanToValue"] = "fig/current_installment_loan_to_value";
    AllowedClusteringAttributes["PetInterest"] = "fig/pet_interest";
    AllowedClusteringAttributes["PurchasedViaInternet"] = "fig/purchased_via_internet";
    AllowedClusteringAttributes["ShoppingStyles"] = "fig/shopping_styles";
    AllowedClusteringAttributes["TravelInterest"] = "fig/travel_interest";
    AllowedClusteringAttributes["HousingDensity"] = "fig/housing_density";
    AllowedClusteringAttributes["MarketingValueOverall"] = "fig/marketing_value_overall";
    AllowedClusteringAttributes["HomeYearBuilt"] = "fig/home_year_built";
})(AllowedClusteringAttributes = exports.AllowedClusteringAttributes || (exports.AllowedClusteringAttributes = {}));
/**
 * Method for aggregating multiple assertions for an attribute.
 * @export
 * @enum {string}
 */
var AttributeAggregationMethod;
(function (AttributeAggregationMethod) {
    AttributeAggregationMethod["Coalesce"] = "coalesce";
    AttributeAggregationMethod["CountNotNull"] = "count_not_null";
    AttributeAggregationMethod["Max"] = "max";
    AttributeAggregationMethod["Mean"] = "mean";
    AttributeAggregationMethod["Median"] = "median";
    AttributeAggregationMethod["Min"] = "min";
    AttributeAggregationMethod["Mode"] = "mode";
    AttributeAggregationMethod["Or"] = "or";
    AttributeAggregationMethod["Sum"] = "sum";
})(AttributeAggregationMethod = exports.AttributeAggregationMethod || (exports.AttributeAggregationMethod = {}));
/**
 * A permission granted for an attribute, indicating how the attribute may be used.
 * @export
 * @enum {string}
 */
var AttributePermission;
(function (AttributePermission) {
    AttributePermission["AddToScopePayload"] = "add_to_scope_payload";
})(AttributePermission = exports.AttributePermission || (exports.AttributePermission = {}));
/**
 * The level at which a source asserts values for an attribute: an individual (person), a physical
 * address, or a postcode.
 * @export
 * @enum {string}
 */
var AttributePrecision;
(function (AttributePrecision) {
    AttributePrecision["Person"] = "person";
    AttributePrecision["Address"] = "address";
    AttributePrecision["Postcode"] = "postcode";
})(AttributePrecision = exports.AttributePrecision || (exports.AttributePrecision = {}));
/**
 * Sort direction for attribute aggregation.
 * @export
 * @enum {string}
 */
var AttributeSortDirection;
(function (AttributeSortDirection) {
    AttributeSortDirection["Asc"] = "asc";
    AttributeSortDirection["Desc"] = "desc";
})(AttributeSortDirection = exports.AttributeSortDirection || (exports.AttributeSortDirection = {}));
/**
* @export
* @enum {string}
*/
var ClickHouseRotateCredentialsRequestTypeEnum;
(function (ClickHouseRotateCredentialsRequestTypeEnum) {
    ClickHouseRotateCredentialsRequestTypeEnum["Clickhouse"] = "clickhouse";
})(ClickHouseRotateCredentialsRequestTypeEnum = exports.ClickHouseRotateCredentialsRequestTypeEnum || (exports.ClickHouseRotateCredentialsRequestTypeEnum = {}));
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
    ComplexDataTypeOneOfLogicalTypeEnum["Unknown"] = "unknown";
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
var DatasetIdentityProvidersProviderEnum;
(function (DatasetIdentityProvidersProviderEnum) {
    DatasetIdentityProvidersProviderEnum["Fig"] = "fig";
    DatasetIdentityProvidersProviderEnum["MatchBoost"] = "match_boost";
})(DatasetIdentityProvidersProviderEnum = exports.DatasetIdentityProvidersProviderEnum || (exports.DatasetIdentityProvidersProviderEnum = {})); /**
* @export
* @enum {string}
*/
var DatasetIdentityProvidersSelectEnum;
(function (DatasetIdentityProvidersSelectEnum) {
    DatasetIdentityProvidersSelectEnum["FirstRecognized"] = "first_recognized";
    DatasetIdentityProvidersSelectEnum["All"] = "all";
})(DatasetIdentityProvidersSelectEnum = exports.DatasetIdentityProvidersSelectEnum || (exports.DatasetIdentityProvidersSelectEnum = {}));
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
* @export
* @enum {string}
*/
var EnrichmentAggregationLevelEnum;
(function (EnrichmentAggregationLevelEnum) {
    EnrichmentAggregationLevelEnum["Person"] = "person";
    EnrichmentAggregationLevelEnum["Address"] = "address";
    EnrichmentAggregationLevelEnum["CarrierRoute"] = "carrier_route";
    EnrichmentAggregationLevelEnum["CensusBlockGroup"] = "census_block_group";
    EnrichmentAggregationLevelEnum["CensusTract"] = "census_tract";
    EnrichmentAggregationLevelEnum["County"] = "county";
    EnrichmentAggregationLevelEnum["Dma"] = "dma";
    EnrichmentAggregationLevelEnum["Metro"] = "metro";
    EnrichmentAggregationLevelEnum["Postcode"] = "postcode";
    EnrichmentAggregationLevelEnum["State"] = "state";
    EnrichmentAggregationLevelEnum["Column"] = "column";
})(EnrichmentAggregationLevelEnum = exports.EnrichmentAggregationLevelEnum || (exports.EnrichmentAggregationLevelEnum = {}));
/**
* @export
* @enum {string}
*/
var EnrichmentAggregationOrderDirectionEnum;
(function (EnrichmentAggregationOrderDirectionEnum) {
    EnrichmentAggregationOrderDirectionEnum["Asc"] = "asc";
    EnrichmentAggregationOrderDirectionEnum["Desc"] = "desc";
})(EnrichmentAggregationOrderDirectionEnum = exports.EnrichmentAggregationOrderDirectionEnum || (exports.EnrichmentAggregationOrderDirectionEnum = {}));
/**
* @export
* @enum {string}
*/
var EnrichmentCadenceWeeklyDayOfWeekEnum;
(function (EnrichmentCadenceWeeklyDayOfWeekEnum) {
    EnrichmentCadenceWeeklyDayOfWeekEnum["Monday"] = "monday";
    EnrichmentCadenceWeeklyDayOfWeekEnum["Tuesday"] = "tuesday";
    EnrichmentCadenceWeeklyDayOfWeekEnum["Wednesday"] = "wednesday";
    EnrichmentCadenceWeeklyDayOfWeekEnum["Thursday"] = "thursday";
    EnrichmentCadenceWeeklyDayOfWeekEnum["Friday"] = "friday";
    EnrichmentCadenceWeeklyDayOfWeekEnum["Saturday"] = "saturday";
    EnrichmentCadenceWeeklyDayOfWeekEnum["Sunday"] = "sunday";
})(EnrichmentCadenceWeeklyDayOfWeekEnum = exports.EnrichmentCadenceWeeklyDayOfWeekEnum || (exports.EnrichmentCadenceWeeklyDayOfWeekEnum = {}));
/**
* @export
* @enum {string}
*/
var EnrichmentColumnConditionApplyEnum;
(function (EnrichmentColumnConditionApplyEnum) {
    EnrichmentColumnConditionApplyEnum["BeforeAggregation"] = "before_aggregation";
    EnrichmentColumnConditionApplyEnum["AfterAggregation"] = "after_aggregation";
})(EnrichmentColumnConditionApplyEnum = exports.EnrichmentColumnConditionApplyEnum || (exports.EnrichmentColumnConditionApplyEnum = {}));
/**
* @export
* @enum {string}
*/
var EnrichmentDatabaseDestinationTypeEnum;
(function (EnrichmentDatabaseDestinationTypeEnum) {
    EnrichmentDatabaseDestinationTypeEnum["Postgres"] = "postgres";
    EnrichmentDatabaseDestinationTypeEnum["Redshift"] = "redshift";
    EnrichmentDatabaseDestinationTypeEnum["Mysql"] = "mysql";
    EnrichmentDatabaseDestinationTypeEnum["SqlServer"] = "sql_server";
    EnrichmentDatabaseDestinationTypeEnum["Motherduck"] = "motherduck";
})(EnrichmentDatabaseDestinationTypeEnum = exports.EnrichmentDatabaseDestinationTypeEnum || (exports.EnrichmentDatabaseDestinationTypeEnum = {}));
/**
* @export
* @enum {string}
*/
var EnrichmentJobInvocationEnum;
(function (EnrichmentJobInvocationEnum) {
    EnrichmentJobInvocationEnum["Manual"] = "manual";
    EnrichmentJobInvocationEnum["Schedule"] = "schedule";
})(EnrichmentJobInvocationEnum = exports.EnrichmentJobInvocationEnum || (exports.EnrichmentJobInvocationEnum = {})); /**
* @export
* @enum {string}
*/
var EnrichmentJobStatusEnum;
(function (EnrichmentJobStatusEnum) {
    EnrichmentJobStatusEnum["Pending"] = "pending";
    EnrichmentJobStatusEnum["Starting"] = "starting";
    EnrichmentJobStatusEnum["Running"] = "running";
    EnrichmentJobStatusEnum["Succeeded"] = "succeeded";
    EnrichmentJobStatusEnum["Failed"] = "failed";
    EnrichmentJobStatusEnum["Skipped"] = "skipped";
})(EnrichmentJobStatusEnum = exports.EnrichmentJobStatusEnum || (exports.EnrichmentJobStatusEnum = {}));
/**
* @export
* @enum {string}
*/
var EnrichmentSortOrderEnum;
(function (EnrichmentSortOrderEnum) {
    EnrichmentSortOrderEnum["Asc"] = "asc";
    EnrichmentSortOrderEnum["Desc"] = "desc";
})(EnrichmentSortOrderEnum = exports.EnrichmentSortOrderEnum || (exports.EnrichmentSortOrderEnum = {}));
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
 * - USAGE_QUOTA_EXCEEDED: The request would use more than the usage left on your contract.
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
    ErrorCode["UsageQuotaExceeded"] = "USAGE_QUOTA_EXCEEDED";
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
 * The identity provider used to obtain a match with the requested identity.
 * @export
 * @enum {string}
 */
var LookupIdentityProvider;
(function (LookupIdentityProvider) {
    LookupIdentityProvider["Fig"] = "fig";
    LookupIdentityProvider["MatchBoost"] = "match_boost";
})(LookupIdentityProvider = exports.LookupIdentityProvider || (exports.LookupIdentityProvider = {}));
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
    LookupMatchType["PostcodeOnly"] = "postcode_only";
    LookupMatchType["PhoneOnly"] = "phone_only";
})(LookupMatchType = exports.LookupMatchType || (exports.LookupMatchType = {}));
/**
 * Faraday attributes available for modeling on accounts with an identity graph feature store set.
 *
 * Use these in `modeling_attributes` on a persona set instead of `modeling_fields`.
 * @export
 * @enum {string}
 */
var ModelingAttribute;
(function (ModelingAttribute) {
    ModelingAttribute["TotalPurchaseCountObservedQuintile"] = "fig/total_purchase_count_observed_quintile";
    ModelingAttribute["TotalAmountSpentOnPurchasesQuintile"] = "fig/total_amount_spent_on_purchases_quintile";
    ModelingAttribute["Age"] = "fig/age";
    ModelingAttribute["CollectiblesArtAntiquesInterest"] = "fig/collectibles_art_antiques_interest";
    ModelingAttribute["GeneralBookReadingInterest"] = "fig/general_book_reading_interest";
    ModelingAttribute["CharitableDonationInterest"] = "fig/charitable_donation_interest";
    ModelingAttribute["NutritionInterest"] = "fig/nutrition_interest";
    ModelingAttribute["HouseholdEducation"] = "fig/household_education";
    ModelingAttribute["TaxAssessedPropertyValue"] = "fig/tax_assessed_property_value";
    ModelingAttribute["GardeningInterest"] = "fig/gardening_interest";
    ModelingAttribute["Gender"] = "fig/gender";
    ModelingAttribute["FitnessInterest"] = "fig/fitness_interest";
    ModelingAttribute["HomeOwnershipStatus"] = "fig/home_ownership_status";
    ModelingAttribute["HouseholdIncome"] = "fig/household_income";
    ModelingAttribute["HouseholdSize"] = "fig/household_size";
    ModelingAttribute["LengthOfResidence"] = "fig/length_of_residence";
    ModelingAttribute["InterestInSports"] = "fig/interest_in_sports";
    ModelingAttribute["PropertyLivingArea"] = "fig/property_living_area";
    ModelingAttribute["MaritalStatus"] = "fig/marital_status";
    ModelingAttribute["MusicInterest"] = "fig/music_interest";
    ModelingAttribute["NetWorth"] = "fig/net_worth";
    ModelingAttribute["CurrentInstallmentLoanToValue"] = "fig/current_installment_loan_to_value";
    ModelingAttribute["PetInterest"] = "fig/pet_interest";
    ModelingAttribute["PurchasedViaInternet"] = "fig/purchased_via_internet";
    ModelingAttribute["ShoppingStyles"] = "fig/shopping_styles";
    ModelingAttribute["TravelInterest"] = "fig/travel_interest";
    ModelingAttribute["HousingDensity"] = "fig/housing_density";
    ModelingAttribute["MarketingValueOverall"] = "fig/marketing_value_overall";
    ModelingAttribute["HomeYearBuilt"] = "fig/home_year_built";
})(ModelingAttribute = exports.ModelingAttribute || (exports.ModelingAttribute = {}));
/**
 * Faraday traits available for modeling
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
 * fig/length_of_residence: Deprecated. Use fig/length_of_residence_v2 instead.
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
 * fig/value_score_all: Estimated consumer marketing profitability. This modeled data is derived from credit behavior and leverages demographic and self-reported data.
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
    ModelingField["Education"] = "fig/education";
    ModelingField["Favm"] = "fig/favm";
    ModelingField["FrequentRemodeler"] = "fig/frequent_remodeler";
    ModelingField["Gardener"] = "fig/gardener";
    ModelingField["Gender"] = "fig/gender";
    ModelingField["HealthConscious"] = "fig/health_conscious";
    ModelingField["HomeownerStatus"] = "fig/homeowner_status";
    ModelingField["HouseholdIncome"] = "fig/household_income";
    ModelingField["HouseholdIncomeV2"] = "fig/household_income_v2";
    ModelingField["HouseholdSize"] = "fig/household_size";
    ModelingField["LengthOfResidence"] = "fig/length_of_residence";
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
    ModelingField["ValueScoreAll"] = "fig/value_score_all";
    ModelingField["YearBuilt"] = "fig/year_built";
})(ModelingField = exports.ModelingField || (exports.ModelingField = {}));
/**
* @export
* @enum {string}
*/
var OutcomePredictionModeEnum;
(function (OutcomePredictionModeEnum) {
    OutcomePredictionModeEnum["Auto"] = "auto";
    OutcomePredictionModeEnum["Static"] = "static";
})(OutcomePredictionModeEnum = exports.OutcomePredictionModeEnum || (exports.OutcomePredictionModeEnum = {}));
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
* @export
* @enum {string}
*/
var OutcomeMergePatchPredictionModeEnum;
(function (OutcomeMergePatchPredictionModeEnum) {
    OutcomeMergePatchPredictionModeEnum["Auto"] = "auto";
    OutcomeMergePatchPredictionModeEnum["Static"] = "static";
})(OutcomeMergePatchPredictionModeEnum = exports.OutcomeMergePatchPredictionModeEnum || (exports.OutcomeMergePatchPredictionModeEnum = {}));
/**
* @export
* @enum {string}
*/
var OutcomePostPredictionModeEnum;
(function (OutcomePostPredictionModeEnum) {
    OutcomePostPredictionModeEnum["Auto"] = "auto";
    OutcomePostPredictionModeEnum["Static"] = "static";
})(OutcomePostPredictionModeEnum = exports.OutcomePostPredictionModeEnum || (exports.OutcomePostPredictionModeEnum = {}));
/**
* @export
* @enum {string}
*/
var OutcomePutPredictionModeEnum;
(function (OutcomePutPredictionModeEnum) {
    OutcomePutPredictionModeEnum["Auto"] = "auto";
    OutcomePutPredictionModeEnum["Static"] = "static";
})(OutcomePutPredictionModeEnum = exports.OutcomePutPredictionModeEnum || (exports.OutcomePutPredictionModeEnum = {}));
/**
 * Widen a condition to everyone who shares an address with someone it already covers. The
 * expansion includes the original people.
 * @export
 * @enum {string}
 */
var PopulationExpansion;
(function (PopulationExpansion) {
    PopulationExpansion["Address"] = "address";
})(PopulationExpansion = exports.PopulationExpansion || (exports.PopulationExpansion = {}));
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
* @export
* @enum {string}
*/
var ProjectAttributeColumnComponentEnum;
(function (ProjectAttributeColumnComponentEnum) {
    ProjectAttributeColumnComponentEnum["Value"] = "value";
    ProjectAttributeColumnComponentEnum["PreviousValue"] = "previous_value";
    ProjectAttributeColumnComponentEnum["ValueDelta"] = "value_delta";
    ProjectAttributeColumnComponentEnum["InterpretedValue"] = "interpreted_value";
    ProjectAttributeColumnComponentEnum["PreviousInterpretedValue"] = "previous_interpreted_value";
    ProjectAttributeColumnComponentEnum["InterpretedValueDelta"] = "interpreted_value_delta";
})(ProjectAttributeColumnComponentEnum = exports.ProjectAttributeColumnComponentEnum || (exports.ProjectAttributeColumnComponentEnum = {}));
/**
* @export
* @enum {string}
*/
var ProjectCohortColumnComponentEnum;
(function (ProjectCohortColumnComponentEnum) {
    ProjectCohortColumnComponentEnum["Membership"] = "membership";
    ProjectCohortColumnComponentEnum["PreviousMembership"] = "previous_membership";
    ProjectCohortColumnComponentEnum["MembershipDelta"] = "membership_delta";
})(ProjectCohortColumnComponentEnum = exports.ProjectCohortColumnComponentEnum || (exports.ProjectCohortColumnComponentEnum = {}));
/**
 * What to do when several values must become one value for this column.
 *
 * The same strategy is applied at each point where that happens:
 *
 * - Several source values for one person, whether or not the output is grouped.
 * - Several people in one group row, when the output is grouped.
 * - Several donors at an imputation level.
 *
 * A strategy is required whenever any of those can happen, including on a lookup, where
 * one person's several source values are still collapsed. Grouping never applies to a
 * lookup, because a lookup has no group.
 *
 * `first` and `last` rank people within a group using `Enrichment.aggregation.order`, so
 * they are unavailable to a column whose source can yield several values for one person:
 * no order over one person's source rows exists.
 *
 * Strategies by resolved data type:
 *
 * - Any type: `nullify`, `count`, `count_distinct`, `first`, `last`.
 * - Numeric: `mean`, `median`, `mode`, `min`, `max`, `sum`.
 * - Date and datetime: `min`, `max`, `median` (the earlier of the two middle values).
 * - Boolean: `and`, `or`, `xor`.
 * - String and categorical: `mode` (ties broken alphabetically) and the `concatenate_*`
 *   strategies, which order values alphabetically.
 *
 * `count` and `count_distinct` resolve the column to `long` and ignore nulls.
 * @export
 * @enum {string}
 */
var ProjectColumnAggregation;
(function (ProjectColumnAggregation) {
    ProjectColumnAggregation["Nullify"] = "nullify";
    ProjectColumnAggregation["First"] = "first";
    ProjectColumnAggregation["Last"] = "last";
    ProjectColumnAggregation["Count"] = "count";
    ProjectColumnAggregation["CountDistinct"] = "count_distinct";
    ProjectColumnAggregation["Mean"] = "mean";
    ProjectColumnAggregation["Median"] = "median";
    ProjectColumnAggregation["Mode"] = "mode";
    ProjectColumnAggregation["Min"] = "min";
    ProjectColumnAggregation["Max"] = "max";
    ProjectColumnAggregation["Sum"] = "sum";
    ProjectColumnAggregation["And"] = "and";
    ProjectColumnAggregation["Or"] = "or";
    ProjectColumnAggregation["Xor"] = "xor";
    ProjectColumnAggregation["ConcatenateComma"] = "concatenate_comma";
    ProjectColumnAggregation["ConcatenatePipe"] = "concatenate_pipe";
    ProjectColumnAggregation["ConcatenateSpace"] = "concatenate_space";
    ProjectColumnAggregation["ConcatenateUniqueComma"] = "concatenate_unique_comma";
    ProjectColumnAggregation["ConcatenateUniquePipe"] = "concatenate_unique_pipe";
    ProjectColumnAggregation["ConcatenateUniqueSpace"] = "concatenate_unique_space";
})(ProjectColumnAggregation = exports.ProjectColumnAggregation || (exports.ProjectColumnAggregation = {}));
/**
 * The data type a Project column emits. `datetime` is an instant with a time of day, and
 * `json` is a structured JSON value.
 * @export
 * @enum {string}
 */
var ProjectColumnDataType;
(function (ProjectColumnDataType) {
    ProjectColumnDataType["Boolean"] = "boolean";
    ProjectColumnDataType["Long"] = "long";
    ProjectColumnDataType["Double"] = "double";
    ProjectColumnDataType["String"] = "string";
    ProjectColumnDataType["Date"] = "date";
    ProjectColumnDataType["Datetime"] = "datetime";
    ProjectColumnDataType["Json"] = "json";
})(ProjectColumnDataType = exports.ProjectColumnDataType || (exports.ProjectColumnDataType = {}));
/**
* @export
* @enum {string}
*/
var ProjectDatasetColumnComponentEnum;
(function (ProjectDatasetColumnComponentEnum) {
    ProjectDatasetColumnComponentEnum["Value"] = "value";
    ProjectDatasetColumnComponentEnum["PreviousValue"] = "previous_value";
    ProjectDatasetColumnComponentEnum["ValueDelta"] = "value_delta";
})(ProjectDatasetColumnComponentEnum = exports.ProjectDatasetColumnComponentEnum || (exports.ProjectDatasetColumnComponentEnum = {}));
/**
* @export
* @enum {string}
*/
var ProjectGeometryColumnComponentEnum;
(function (ProjectGeometryColumnComponentEnum) {
    ProjectGeometryColumnComponentEnum["Id"] = "id";
    ProjectGeometryColumnComponentEnum["Name"] = "name";
    ProjectGeometryColumnComponentEnum["Wkt"] = "wkt";
    ProjectGeometryColumnComponentEnum["Population"] = "population";
})(ProjectGeometryColumnComponentEnum = exports.ProjectGeometryColumnComponentEnum || (exports.ProjectGeometryColumnComponentEnum = {}));
/**
* @export
* @enum {string}
*/
var ProjectIdentifierColumnComponentEnum;
(function (ProjectIdentifierColumnComponentEnum) {
    ProjectIdentifierColumnComponentEnum["Phone"] = "phone";
    ProjectIdentifierColumnComponentEnum["FullAddress"] = "full_address";
    ProjectIdentifierColumnComponentEnum["FirstName"] = "first_name";
    ProjectIdentifierColumnComponentEnum["LastName"] = "last_name";
    ProjectIdentifierColumnComponentEnum["HouseNumberAndStreet"] = "house_number_and_street";
    ProjectIdentifierColumnComponentEnum["Unit"] = "unit";
    ProjectIdentifierColumnComponentEnum["City"] = "city";
    ProjectIdentifierColumnComponentEnum["State"] = "state";
    ProjectIdentifierColumnComponentEnum["Postcode"] = "postcode";
    ProjectIdentifierColumnComponentEnum["Email"] = "email";
    ProjectIdentifierColumnComponentEnum["FaradayPersonIdV1"] = "faraday_person_id_v1";
    ProjectIdentifierColumnComponentEnum["Latitude"] = "latitude";
    ProjectIdentifierColumnComponentEnum["Longitude"] = "longitude";
})(ProjectIdentifierColumnComponentEnum = exports.ProjectIdentifierColumnComponentEnum || (exports.ProjectIdentifierColumnComponentEnum = {}));
/**
* @export
* @enum {string}
*/
var ProjectIdentifierElementClassEnum;
(function (ProjectIdentifierElementClassEnum) {
    ProjectIdentifierElementClassEnum["Phone"] = "phone";
    ProjectIdentifierElementClassEnum["Mail"] = "mail";
    ProjectIdentifierElementClassEnum["Email"] = "email";
    ProjectIdentifierElementClassEnum["GraphId"] = "graph_id";
    ProjectIdentifierElementClassEnum["Location"] = "location";
})(ProjectIdentifierElementClassEnum = exports.ProjectIdentifierElementClassEnum || (exports.ProjectIdentifierElementClassEnum = {})); /**
* @export
* @enum {string}
*/
var ProjectIdentifierElementHashEnum;
(function (ProjectIdentifierElementHashEnum) {
    ProjectIdentifierElementHashEnum["Sha256"] = "sha256";
})(ProjectIdentifierElementHashEnum = exports.ProjectIdentifierElementHashEnum || (exports.ProjectIdentifierElementHashEnum = {})); /**
* @export
* @enum {string}
*/
var ProjectIdentifierElementProvidersEnum;
(function (ProjectIdentifierElementProvidersEnum) {
    ProjectIdentifierElementProvidersEnum["Fig"] = "fig";
    ProjectIdentifierElementProvidersEnum["MatchBoost"] = "match_boost";
})(ProjectIdentifierElementProvidersEnum = exports.ProjectIdentifierElementProvidersEnum || (exports.ProjectIdentifierElementProvidersEnum = {}));
/**
 * A level at which a missing value may be borrowed from other people.
 *
 * A person's own value always wins. Failing that, levels are tried in the order given, the
 * donors at that level are combined with the column's own `aggregation`, and the first
 * level that yields a value ends the search.
 *
 * A donor is a person the same enrichment already read, so borrowing never reaches past
 * the identity graph and account data the enrichment was already allowed to read. `first`
 * and `last` cannot impute: donors at an address or postcode have no order.
 * @export
 * @enum {string}
 */
var ProjectImputationLevel;
(function (ProjectImputationLevel) {
    ProjectImputationLevel["Address"] = "address";
    ProjectImputationLevel["Postcode"] = "postcode";
})(ProjectImputationLevel = exports.ProjectImputationLevel || (exports.ProjectImputationLevel = {}));
/**
* @export
* @enum {string}
*/
var ProjectLookupMatchMatchedOnEnum;
(function (ProjectLookupMatchMatchedOnEnum) {
    ProjectLookupMatchMatchedOnEnum["GraphId"] = "graph_id";
    ProjectLookupMatchMatchedOnEnum["Email"] = "email";
    ProjectLookupMatchMatchedOnEnum["Phone"] = "phone";
    ProjectLookupMatchMatchedOnEnum["Mail"] = "mail";
    ProjectLookupMatchMatchedOnEnum["Name"] = "name";
    ProjectLookupMatchMatchedOnEnum["Location"] = "location";
})(ProjectLookupMatchMatchedOnEnum = exports.ProjectLookupMatchMatchedOnEnum || (exports.ProjectLookupMatchMatchedOnEnum = {})); /**
* @export
* @enum {string}
*/
var ProjectLookupMatchProviderEnum;
(function (ProjectLookupMatchProviderEnum) {
    ProjectLookupMatchProviderEnum["Fig"] = "fig";
    ProjectLookupMatchProviderEnum["MatchBoost"] = "match_boost";
})(ProjectLookupMatchProviderEnum = exports.ProjectLookupMatchProviderEnum || (exports.ProjectLookupMatchProviderEnum = {}));
/**
* @export
* @enum {string}
*/
var ProjectLookupResultStatusEnum;
(function (ProjectLookupResultStatusEnum) {
    ProjectLookupResultStatusEnum["Matched"] = "matched";
    ProjectLookupResultStatusEnum["NoMatch"] = "no_match";
    ProjectLookupResultStatusEnum["Ambiguous"] = "ambiguous";
})(ProjectLookupResultStatusEnum = exports.ProjectLookupResultStatusEnum || (exports.ProjectLookupResultStatusEnum = {}));
/**
* @export
* @enum {string}
*/
var ProjectLookupWarningCodeEnum;
(function (ProjectLookupWarningCodeEnum) {
    ProjectLookupWarningCodeEnum["DeliveryHistoryUnavailable"] = "delivery_history_unavailable";
    ProjectLookupWarningCodeEnum["ElementNotReady"] = "element_not_ready";
    ProjectLookupWarningCodeEnum["SourceNotAvailableForLookup"] = "source_not_available_for_lookup";
    ProjectLookupWarningCodeEnum["FrameNotAvailableForLookup"] = "frame_not_available_for_lookup";
    ProjectLookupWarningCodeEnum["HistoricalValueUnavailable"] = "historical_value_unavailable";
})(ProjectLookupWarningCodeEnum = exports.ProjectLookupWarningCodeEnum || (exports.ProjectLookupWarningCodeEnum = {}));
/**
* @export
* @enum {string}
*/
var ProjectMatchMetadataColumnComponentEnum;
(function (ProjectMatchMetadataColumnComponentEnum) {
    ProjectMatchMetadataColumnComponentEnum["Provider"] = "provider";
    ProjectMatchMetadataColumnComponentEnum["MatchedOn"] = "matched_on";
})(ProjectMatchMetadataColumnComponentEnum = exports.ProjectMatchMetadataColumnComponentEnum || (exports.ProjectMatchMetadataColumnComponentEnum = {}));
/**
* @export
* @enum {string}
*/
var ProjectOutcomeColumnComponentEnum;
(function (ProjectOutcomeColumnComponentEnum) {
    ProjectOutcomeColumnComponentEnum["CalibratedProbability"] = "calibrated_probability";
    ProjectOutcomeColumnComponentEnum["PreviousCalibratedProbability"] = "previous_calibrated_probability";
    ProjectOutcomeColumnComponentEnum["CalibratedProbabilityDelta"] = "calibrated_probability_delta";
    ProjectOutcomeColumnComponentEnum["ProbabilityPercentile"] = "probability_percentile";
    ProjectOutcomeColumnComponentEnum["PreviousProbabilityPercentile"] = "previous_probability_percentile";
    ProjectOutcomeColumnComponentEnum["ProbabilityPercentileDelta"] = "probability_percentile_delta";
    ProjectOutcomeColumnComponentEnum["CalibratedProbabilityPriorToAttainment"] = "calibrated_probability_prior_to_attainment";
    ProjectOutcomeColumnComponentEnum["ProbabilityPercentilePriorToAttainment"] = "probability_percentile_prior_to_attainment";
    ProjectOutcomeColumnComponentEnum["ImportantPredictor"] = "important_predictor";
    ProjectOutcomeColumnComponentEnum["PreviousImportantPredictor"] = "previous_important_predictor";
})(ProjectOutcomeColumnComponentEnum = exports.ProjectOutcomeColumnComponentEnum || (exports.ProjectOutcomeColumnComponentEnum = {}));
/**
* @export
* @enum {string}
*/
var ProjectPersonaSetColumnComponentEnum;
(function (ProjectPersonaSetColumnComponentEnum) {
    ProjectPersonaSetColumnComponentEnum["Id"] = "id";
    ProjectPersonaSetColumnComponentEnum["PreviousId"] = "previous_id";
    ProjectPersonaSetColumnComponentEnum["Name"] = "name";
    ProjectPersonaSetColumnComponentEnum["PreviousName"] = "previous_name";
    ProjectPersonaSetColumnComponentEnum["DistanceToCentroid"] = "distance_to_centroid";
    ProjectPersonaSetColumnComponentEnum["PreviousDistanceToCentroid"] = "previous_distance_to_centroid";
    ProjectPersonaSetColumnComponentEnum["DistanceToCentroidDelta"] = "distance_to_centroid_delta";
})(ProjectPersonaSetColumnComponentEnum = exports.ProjectPersonaSetColumnComponentEnum || (exports.ProjectPersonaSetColumnComponentEnum = {}));
/**
* @export
* @enum {string}
*/
var ProjectRecommenderColumnComponentEnum;
(function (ProjectRecommenderColumnComponentEnum) {
    ProjectRecommenderColumnComponentEnum["Value"] = "value";
    ProjectRecommenderColumnComponentEnum["PreviousValue"] = "previous_value";
})(ProjectRecommenderColumnComponentEnum = exports.ProjectRecommenderColumnComponentEnum || (exports.ProjectRecommenderColumnComponentEnum = {}));
/**
* @export
* @enum {string}
*/
var ProjectResolvedColumnAsOfBasisEnum;
(function (ProjectResolvedColumnAsOfBasisEnum) {
    ProjectResolvedColumnAsOfBasisEnum["Current"] = "current";
    ProjectResolvedColumnAsOfBasisEnum["FixedTimestamp"] = "fixed_timestamp";
    ProjectResolvedColumnAsOfBasisEnum["CohortEntrance"] = "cohort_entrance";
    ProjectResolvedColumnAsOfBasisEnum["DatasetTimestamp"] = "dataset_timestamp";
})(ProjectResolvedColumnAsOfBasisEnum = exports.ProjectResolvedColumnAsOfBasisEnum || (exports.ProjectResolvedColumnAsOfBasisEnum = {})); /**
* @export
* @enum {string}
*/
var ProjectResolvedColumnSnapshotGranularityEnum;
(function (ProjectResolvedColumnSnapshotGranularityEnum) {
    ProjectResolvedColumnSnapshotGranularityEnum["Day"] = "day";
    ProjectResolvedColumnSnapshotGranularityEnum["EventTimestamp"] = "event_timestamp";
})(ProjectResolvedColumnSnapshotGranularityEnum = exports.ProjectResolvedColumnSnapshotGranularityEnum || (exports.ProjectResolvedColumnSnapshotGranularityEnum = {}));
/**
* @export
* @enum {string}
*/
var ProjectStreamColumnComponentEnum;
(function (ProjectStreamColumnComponentEnum) {
    ProjectStreamColumnComponentEnum["Count"] = "count";
    ProjectStreamColumnComponentEnum["PreviousCount"] = "previous_count";
    ProjectStreamColumnComponentEnum["CountDelta"] = "count_delta";
    ProjectStreamColumnComponentEnum["Value"] = "value";
    ProjectStreamColumnComponentEnum["PreviousValue"] = "previous_value";
    ProjectStreamColumnComponentEnum["ValueDelta"] = "value_delta";
    ProjectStreamColumnComponentEnum["TotalValue"] = "total_value";
    ProjectStreamColumnComponentEnum["PreviousTotalValue"] = "previous_total_value";
    ProjectStreamColumnComponentEnum["TotalValueDelta"] = "total_value_delta";
    ProjectStreamColumnComponentEnum["MeanValue"] = "mean_value";
    ProjectStreamColumnComponentEnum["PreviousMeanValue"] = "previous_mean_value";
    ProjectStreamColumnComponentEnum["MeanValueDelta"] = "mean_value_delta";
    ProjectStreamColumnComponentEnum["Datetime"] = "datetime";
    ProjectStreamColumnComponentEnum["PreviousDatetime"] = "previous_datetime";
})(ProjectStreamColumnComponentEnum = exports.ProjectStreamColumnComponentEnum || (exports.ProjectStreamColumnComponentEnum = {}));
/**
 * How to parse a timestamp read from a Dataset column. A timestamp with no time zone is read
 * as UTC.
 * @export
 * @enum {string}
 */
var ProjectTimestampFormat;
(function (ProjectTimestampFormat) {
    ProjectTimestampFormat["MmDdYySlash"] = "mm_dd_yy_slash";
    ProjectTimestampFormat["MmDdYyyySlash"] = "mm_dd_yyyy_slash";
    ProjectTimestampFormat["MmDdYyDash"] = "mm_dd_yy_dash";
    ProjectTimestampFormat["MmDdYyyyDash"] = "mm_dd_yyyy_dash";
    ProjectTimestampFormat["YyyyMmDdSlash"] = "yyyy_mm_dd_slash";
    ProjectTimestampFormat["YyMmDdSlash"] = "yy_mm_dd_slash";
    ProjectTimestampFormat["YyyyMmDdDash"] = "yyyy_mm_dd_dash";
    ProjectTimestampFormat["YyMmDdDash"] = "yy_mm_dd_dash";
    ProjectTimestampFormat["Yyyymmdd"] = "yyyymmdd";
    ProjectTimestampFormat["Yyyymm"] = "yyyymm";
    ProjectTimestampFormat["YyyyMmDash"] = "yyyy_mm_dash";
    ProjectTimestampFormat["YyyyMmSlash"] = "yyyy_mm_slash";
    ProjectTimestampFormat["DdMmYyyySlash"] = "dd_mm_yyyy_slash";
    ProjectTimestampFormat["DdMmYySlash"] = "dd_mm_yy_slash";
    ProjectTimestampFormat["DdMmYyyyDash"] = "dd_mm_yyyy_dash";
    ProjectTimestampFormat["DdMmYyDash"] = "dd_mm_yy_dash";
    ProjectTimestampFormat["DateIso8601"] = "date_iso8601";
    ProjectTimestampFormat["DateMonthDayFullyear"] = "date_month_day_fullyear";
    ProjectTimestampFormat["DateMonthDayShortyear"] = "date_month_day_shortyear";
    ProjectTimestampFormat["DateMonthDayFullyearHoursMinutes"] = "date_month_day_fullyear_hours_minutes";
    ProjectTimestampFormat["DateMonthDayFullyearHoursMinutesSeconds"] = "date_month_day_fullyear_hours_minutes_seconds";
    ProjectTimestampFormat["DateSecondsSinceEpochUtc"] = "date_seconds_since_epoch_utc";
    ProjectTimestampFormat["DateMillisecondsSinceEpochUtc"] = "date_milliseconds_since_epoch_utc";
})(ProjectTimestampFormat = exports.ProjectTimestampFormat || (exports.ProjectTimestampFormat = {}));
/**
* @export
* @enum {string}
*/
var ProjectTraitColumnComponentEnum;
(function (ProjectTraitColumnComponentEnum) {
    ProjectTraitColumnComponentEnum["Value"] = "value";
    ProjectTraitColumnComponentEnum["PreviousValue"] = "previous_value";
    ProjectTraitColumnComponentEnum["ValueDelta"] = "value_delta";
})(ProjectTraitColumnComponentEnum = exports.ProjectTraitColumnComponentEnum || (exports.ProjectTraitColumnComponentEnum = {}));
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
    ResourceType["Accounts"] = "accounts";
    ResourceType["Atlases"] = "atlases";
    ResourceType["Attributes"] = "attributes";
    ResourceType["Cohorts"] = "cohorts";
    ResourceType["Connections"] = "connections";
    ResourceType["Datasets"] = "datasets";
    ResourceType["Enrichments"] = "enrichments";
    ResourceType["FeatureStores"] = "feature_stores";
    ResourceType["MarketOpportunityAnalyses"] = "market_opportunity_analyses";
    ResourceType["Outcomes"] = "outcomes";
    ResourceType["PersonaSets"] = "persona_sets";
    ResourceType["Places"] = "places";
    ResourceType["Projects"] = "projects";
    ResourceType["Recommenders"] = "recommenders";
    ResourceType["Scopes"] = "scopes";
    ResourceType["Streams"] = "streams";
    ResourceType["Targets"] = "targets";
    ResourceType["Traits"] = "traits";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
/**
* @export
* @enum {string}
*/
var ScopeEfficacyOutcomeMonthPerformedEnum;
(function (ScopeEfficacyOutcomeMonthPerformedEnum) {
    ScopeEfficacyOutcomeMonthPerformedEnum["Equal"] = "equal";
    ScopeEfficacyOutcomeMonthPerformedEnum["GreaterThan"] = "greater_than";
    ScopeEfficacyOutcomeMonthPerformedEnum["LessThan"] = "less_than";
})(ScopeEfficacyOutcomeMonthPerformedEnum = exports.ScopeEfficacyOutcomeMonthPerformedEnum || (exports.ScopeEfficacyOutcomeMonthPerformedEnum = {}));
/**
* @export
* @enum {string}
*/
var ScopePayloadLocationSelectEnum;
(function (ScopePayloadLocationSelectEnum) {
    ScopePayloadLocationSelectEnum["Nearest"] = "nearest";
    ScopePayloadLocationSelectEnum["All"] = "all";
})(ScopePayloadLocationSelectEnum = exports.ScopePayloadLocationSelectEnum || (exports.ScopePayloadLocationSelectEnum = {}));
/**
* @export
* @enum {string}
*/
var ScopePayloadMergePatchLocationSelectEnum;
(function (ScopePayloadMergePatchLocationSelectEnum) {
    ScopePayloadMergePatchLocationSelectEnum["Nearest"] = "nearest";
    ScopePayloadMergePatchLocationSelectEnum["All"] = "all";
})(ScopePayloadMergePatchLocationSelectEnum = exports.ScopePayloadMergePatchLocationSelectEnum || (exports.ScopePayloadMergePatchLocationSelectEnum = {}));
/**
* @export
* @enum {string}
*/
var SnowflakeRotateCredentialsRequestTypeEnum;
(function (SnowflakeRotateCredentialsRequestTypeEnum) {
    SnowflakeRotateCredentialsRequestTypeEnum["Snowflake"] = "snowflake";
})(SnowflakeRotateCredentialsRequestTypeEnum = exports.SnowflakeRotateCredentialsRequestTypeEnum || (exports.SnowflakeRotateCredentialsRequestTypeEnum = {}));
/**
 * A broad category describing the flavor of a stream property.
 * @export
 * @enum {string}
 */
var StreamPropertyCategory;
(function (StreamPropertyCategory) {
    StreamPropertyCategory["FigDemography"] = "fig/demography";
    StreamPropertyCategory["FigEnvironment"] = "fig/environment";
    StreamPropertyCategory["FigGeography"] = "fig/geography";
    StreamPropertyCategory["FigIdentity"] = "fig/identity";
    StreamPropertyCategory["FigLifestyle"] = "fig/lifestyle";
    StreamPropertyCategory["FigLifeEvent"] = "fig/life_event";
    StreamPropertyCategory["FigProperty"] = "fig/property";
    StreamPropertyCategory["FigReachability"] = "fig/reachability";
    StreamPropertyCategory["FigSociety"] = "fig/society";
    StreamPropertyCategory["FigFinancial"] = "fig/financial";
    StreamPropertyCategory["FigVehicles"] = "fig/vehicles";
    StreamPropertyCategory["FigCivic"] = "fig/civic";
    StreamPropertyCategory["FigEngagement"] = "fig/engagement";
    StreamPropertyCategory["UserDefined"] = "user_defined";
})(StreamPropertyCategory = exports.StreamPropertyCategory || (exports.StreamPropertyCategory = {}));
/**
 * A billing tier for a stream property.
 * @export
 * @enum {string}
 */
var StreamPropertyTier;
(function (StreamPropertyTier) {
    StreamPropertyTier["Standard"] = "standard";
    StreamPropertyTier["Premium"] = "premium";
    StreamPropertyTier["Prohibited"] = "prohibited";
})(StreamPropertyTier = exports.StreamPropertyTier || (exports.StreamPropertyTier = {}));
/**
 * Available aggregation levels for data exported in `aggregated` targets.
 * @export
 * @enum {string}
 */
var TargetAggregateGeographic;
(function (TargetAggregateGeographic) {
    TargetAggregateGeographic["CarrierRoute"] = "carrier_route";
    TargetAggregateGeographic["CensusBlockGroup"] = "census_block_group";
    TargetAggregateGeographic["CensusTract"] = "census_tract";
    TargetAggregateGeographic["County"] = "county";
    TargetAggregateGeographic["Dma"] = "dma";
    TargetAggregateGeographic["Metro"] = "metro";
    TargetAggregateGeographic["Postcode"] = "postcode";
    TargetAggregateGeographic["State"] = "state";
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
var TargetAnalysisConfigGeographiesEnum;
(function (TargetAnalysisConfigGeographiesEnum) {
    TargetAnalysisConfigGeographiesEnum["Postcode"] = "postcode";
    TargetAnalysisConfigGeographiesEnum["State"] = "state";
})(TargetAnalysisConfigGeographiesEnum = exports.TargetAnalysisConfigGeographiesEnum || (exports.TargetAnalysisConfigGeographiesEnum = {}));
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
 * The mode of the target. This determines the structure of the lookup request and response.
 * @export
 * @enum {string}
 */
var TargetLookupMode;
(function (TargetLookupMode) {
    TargetLookupMode["Identified"] = "identified";
    TargetLookupMode["Aggregated"] = "aggregated";
})(TargetLookupMode = exports.TargetLookupMode || (exports.TargetLookupMode = {}));
/**
* @export
* @enum {string}
*/
var TargetMergePatchAnalysisConfigGeographiesEnum;
(function (TargetMergePatchAnalysisConfigGeographiesEnum) {
    TargetMergePatchAnalysisConfigGeographiesEnum["Postcode"] = "postcode";
    TargetMergePatchAnalysisConfigGeographiesEnum["State"] = "state";
})(TargetMergePatchAnalysisConfigGeographiesEnum = exports.TargetMergePatchAnalysisConfigGeographiesEnum || (exports.TargetMergePatchAnalysisConfigGeographiesEnum = {}));
/**
* @export
* @enum {string}
*/
var TargetStructureTransformationAggregationEnum;
(function (TargetStructureTransformationAggregationEnum) {
    TargetStructureTransformationAggregationEnum["Avg"] = "avg";
    TargetStructureTransformationAggregationEnum["Count"] = "count";
    TargetStructureTransformationAggregationEnum["Countif"] = "countif";
    TargetStructureTransformationAggregationEnum["Mode"] = "mode";
    TargetStructureTransformationAggregationEnum["Ignore"] = "ignore";
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
* @export
* @enum {string}
*/
var TraitPrecisionEnum;
(function (TraitPrecisionEnum) {
    TraitPrecisionEnum["Person"] = "person";
    TraitPrecisionEnum["Address"] = "address";
    TraitPrecisionEnum["Postcode"] = "postcode";
    TraitPrecisionEnum["Geom"] = "geom";
})(TraitPrecisionEnum = exports.TraitPrecisionEnum || (exports.TraitPrecisionEnum = {}));
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
    TraitCategory["FigVehicles"] = "fig/vehicles";
    TraitCategory["FigCivic"] = "fig/civic";
    TraitCategory["FigEngagement"] = "fig/engagement";
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
    TraitPermission["TargetAnalysis"] = "target_analysis";
})(TraitPermission = exports.TraitPermission || (exports.TraitPermission = {}));
/**
 * A string describing the nature of data represented by the trait.
 *
 * categorical_nominal: the field contains one value of an unordered bounded set. Example: "preferred_channel" — one of "email", "sms", "direct_mail".
 * categorical_ordinal: the field contains one value of an ordered bounded set. Example: "spending_tier" — one of "low", "medium", "high", "premium".
 * multicategorical_nominal: the field contains one or more values of an unordered bounded set. Example: "interests" — "outdoors", "travel", "fitness".
 * continuous_ordinal: the field contains numeric values with a natural ordering. Example: "lifetime_value".
 * binary: the field contains boolean-like values representing presence/absence. Example: "has_pool" — true or false.
 * count: the field contains non-negative integer counts. Example: "children_count" — 0, 1, 2, 3.
 * interval: the field contains numeric values where differences are meaningful but ratios are not. Example: "date_of_birth" as epoch.
 * ratio: the field contains numeric values where both differences and ratios are meaningful, with a true zero. Example: "age" — 0, 25, 50.
 *
 * Type compatibility (new values only):
 * - continuous_ordinal requires a numeric type (long, float, double).
 * - categorical_nominal requires string or boolean.
 * - categorical_ordinal requires string.
 * - multicategorical_nominal requires array_of_strings.
 *
 * Deprecated values (still accepted, will be removed in a future version):
 * categorical: equivalent to categorical_nominal.
 * multicategorical: equivalent to multicategorical_nominal.
 * ordinal: ambiguous — prefer categorical_ordinal or continuous_ordinal.
 * nominal: ambiguous — prefer categorical_nominal.
 * @export
 * @enum {string}
 */
var TraitStatisticalType;
(function (TraitStatisticalType) {
    TraitStatisticalType["Categorical"] = "categorical";
    TraitStatisticalType["Multicategorical"] = "multicategorical";
    TraitStatisticalType["Ordinal"] = "ordinal";
    TraitStatisticalType["Nominal"] = "nominal";
    TraitStatisticalType["ContinuousOrdinal"] = "continuous_ordinal";
    TraitStatisticalType["CategoricalNominal"] = "categorical_nominal";
    TraitStatisticalType["MulticategoricalNominal"] = "multicategorical_nominal";
    TraitStatisticalType["CategoricalOrdinal"] = "categorical_ordinal";
    TraitStatisticalType["Binary"] = "binary";
    TraitStatisticalType["Count"] = "count";
    TraitStatisticalType["Interval"] = "interval";
    TraitStatisticalType["Ratio"] = "ratio";
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
    WebhookEventType["ResourceErrored"] = "resource.errored";
    WebhookEventType["ResourceReadyWithUpdate"] = "resource.ready_with_update";
    WebhookEventType["EnrichmentJobSucceeded"] = "enrichment_job.succeeded";
    WebhookEventType["EnrichmentJobFailed"] = "enrichment_job.failed";
    WebhookEventType["EnrichmentJobSkipped"] = "enrichment_job.skipped";
})(WebhookEventType = exports.WebhookEventType || (exports.WebhookEventType = {}));
/**
* @export
* @enum {string}
*/
var WebhookMessageForEnrichmentJobDataInvocationEnum;
(function (WebhookMessageForEnrichmentJobDataInvocationEnum) {
    WebhookMessageForEnrichmentJobDataInvocationEnum["Manual"] = "manual";
    WebhookMessageForEnrichmentJobDataInvocationEnum["Schedule"] = "schedule";
})(WebhookMessageForEnrichmentJobDataInvocationEnum = exports.WebhookMessageForEnrichmentJobDataInvocationEnum || (exports.WebhookMessageForEnrichmentJobDataInvocationEnum = {})); /**
* @export
* @enum {string}
*/
var WebhookMessageForEnrichmentJobDataStatusEnum;
(function (WebhookMessageForEnrichmentJobDataStatusEnum) {
    WebhookMessageForEnrichmentJobDataStatusEnum["Succeeded"] = "succeeded";
    WebhookMessageForEnrichmentJobDataStatusEnum["Failed"] = "failed";
    WebhookMessageForEnrichmentJobDataStatusEnum["Skipped"] = "skipped";
})(WebhookMessageForEnrichmentJobDataStatusEnum = exports.WebhookMessageForEnrichmentJobDataStatusEnum || (exports.WebhookMessageForEnrichmentJobDataStatusEnum = {}));
