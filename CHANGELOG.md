# Changelog

All notable changes to our API will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Until we reach API 1.0, the following special rules apply:

1. If you **add a feature** or **fix a bug**, please bump the version from **0.x.y** to **0.x.(y+1)**.
2. If you **make a breaking change**, please bump the version from **0.x.y** to **0.(x+1).0**.

## [0.10.4] - 2024-02-14

### Added

- Added `schema` as an optional parameter for Microsoft SQL Server connection types.

## [0.10.3] - 2024-02-13

### Added

- Added `header_row` as an optional parameter for connection types that support CSV files.

## [0.10.2] - 2024-02-09

### Fixed

- Allow slashes in `detected_column` names

## [0.10.1] - 2024-02-08

### Added

- Add `recommender_ids` to `scope.payload`

## [0.10.0] - 2024-01-31

### Fixed

- Fixed DELETE status codes for all resources (except accounts because they have a waiting period) 202->204. This is technically a breaking change based on the _spec_ but the API was already returning 204.

## [0.9.3] - 2024-01-31

### Added

- Added include_geometry boolean to TargetModesAggregated to append optional geometries to aggregated targets.

## [0.9.2] - 2024-01-05

### Added

- Added dataset enrichment rates. This reports the number of identities that were appended with additional data, grouped by provider.

## [0.9.1] - 2023-12-05

### Added

- Add Recommenders endpoints for building and managing recommendation models.

## [0.9.1] - 2023-12-21

- Updated lift value descriptions for outcomes

## [0.9.0] - 2023-12-14

### Fixed

- Changed targets/{target_id}/lookup success response code from 201 to 200

## [0.8.2] - 2023-11-27

### Added

- Relaxed reference key pattern to allow for leading underscore.

## [0.8.1] - 2023-11-17

### Changed

- Outcome analysis descriptions for bias metrics updated.

## [0.8.0] - 2023-11-08

### Breaking

- Outcome analysis lift value is optional because not all reports have it yet.

## [0.7.15] - 2023-11-1

### Added

- Add customer id option to google ads connection

## [0.7.14] - 2023-10-30

### Fixed

- Require non-empty strings for resource names

## [0.7.13] - 2023-10-11

### Added

- Score explainability as an opt-in scope payload column

## [0.7.12] - 2023-10-10

### Changed

- Remove _target score_ language in favor of _target percentile_ for lift charts.

## [0.7.11] - 2023-09-06

### Added

- Add last_updated_config_at to most Resources
- Add last_read_input_at to most Resources

## [0.7.10] - 2023-08-24

### Added

- Add bias analysis to `GET /outcomes/{outcome_id}/analysis`

## [0.7.9] - 2023-08-17

### Added

- GET /traits/{trait_id}/analysis/dimensions - returns summary data about the trait. For example, what percentage of the US population falls into a certain age range.

## [0.7.8] - 2023-08-15

### Fixed

- Move maximum and minimum on target filter probability and percentile down onto the component/schema

## [0.7.7] - 2023-08-11

### Added

- Add bias mitigation to outcome configuration. Though the spec appears you can combine different mitigation strategies per dimension of concern (age=equity, gender=equality), API runtime validation will prevent it for now. Later we may support this so the spec is designed for future proofing. Note: age=none, gender=equity is allowed.

## [0.7.6] - 2023-08-07

### Deprecated

- Using Outcome Score in target filter is deprecated. Use Outcome percentile or probability instead.

## [0.7.5] - 2023-08-07

### Fixed

- Let BigQuery dataset names start with a number

## [0.7.4] - 2023-08-04

### Added

- Added dataset sample and non-null data (anonymized)

## [0.7.3] - 2023-08-03

### Added

- Add `lookup_api` connection type for targets
- Add JSON types for lookup requests

## [0.7.2] - 2023-07-31

### Added

- Added `GET outcomes/{outcome_id}/analysis` to return outcome report data for model performance, feature importance, and more.

## [0.7.1] - 2023-07-13

### Fixed

- connection options that aren't required now use `*` instead of `+` in regex pattern matching
- added `yyyymmdd` to data map formats

## [0.7.0] - 2023-06-22

### Breaking

- instead of billing via ppds (person-predictions per day), Faraday now bills via a variety of metrics (number of connections, number of known contacts, etc). The endpoint exposes this information to the users

## [0.6.0] - 2023-06-06

### Breaking

- Change shape of `datasets.output_to_traits` from string to object to support additional configuration details.
- Add metadata to the `/traits` endpoint including literate, description, units, and emitted_by_datasets.

## [0.5.3] - 2023-06-21

### Added

- Made some minor updates to managed connection types metadata.

## [0.5.2] - 2023-06-20

### Added

- Added new managed connection types.

## [0.5.1] - 2023-06-12

### Added

- Added a new target filter for score probabilities. Allows a user to filter a target with various operators by the following payload element `outcome_probability`.

## [0.5.0] - 2023-05-12

### Breaking

- `DELETE /account` no longer returns the account object - this is in-line with how the other `DELETE` endpoints work.

## [0.4.17] - 2023-05-11

### Added

- 'census_block_group', 'census_tract', and 'dma' are now options for geo aggregated targets.

## [0.4.16] - 2023-05-11

### Fixed

- Allow `false` to be passed to target filter persona and cohort membership `eq`

## [0.4.15] - 2023-04-25

### Added

- Target row_count limits now allow outcome_id to be optional.

## [Unreleased]

- Added secondary connections (e.g. Klaviyo). These are marked as "managed" and therefore do NOT get written into the API spec.
- Added tags:string[] and blurb:string to ConnectionTypes. This is for the website only.

## [0.4.15] - 2023-04-17

### Changed

- Added null (\_null) and not null (\_nnull) operators to target filters for outcome_percentile and outcome_score.

## [0.4.14] - 2023-04-10

### Added

- Added a new target tranformation called filter. Allows a user to filter a target with various operators by any of the following payload elements: persona_id, attributes (traits), cohort_membership, outcome_percentile, outcome_score.

## [0.4.13] - 2023-04-07

### Changed

- Example values for `explore` field in cohorts and `invert` in cohort place conditions so that users of the API docs get better default values.

## [0.4.12] - 2023-04-05

### Added

- GET uploads/{directory}/{filename} - download the file previously uploaded at POST uploads/{directory}/{filename}.

## [0.4.11] - 2023-03-22

### Added

- GET dependencies - returns the list of edges in a dependency graph of the account's resources.

## [0.4.10] - 2023-03-16

### Added

- Added 'managed' boolean to connections, datasets, and targets. Managed resources are read-only.

## [0.4.9] - 2023-02-24

### Added

- Added rules for liveramp as a target transformation.

## [0.4.8] - 2023-02-22

### Changed

- Updated connection type descriptions to match the new literates in vannevar.

## [0.4.7] - 2023-02-21

### Changed

- Cohort stream name is now mutable

## [0.4.6] - 2023-02-16

### Added

- Added new target transformation options for: pinterest, snapchat, klaviyo, segment, youtube, tiktok, taboola
- iterable, poplar, salesforce, google ads, facebook

## [0.4.5] - 2023-02-14

### Added

- New error: EXPIRED_API_KEY

## [0.4.4] - 2023-02-05

### Added

- data map format: static_date_iso8601, with column_name as the (temporary?) place you put the static value
- new date format yyyymm e.g. 201901

## [0.4.3] - 2023-01-28

### Added

- `freeform_address` and `email_hash` added to identity sets on data sets.

## [0.4.2] - 2023-01-24

### Added

- `number_of_clusters` parameter to PersonaSets

## [0.4.1] - 2023-01-12

### Added

- New `GET /cohorts/{cohort_id}/analysis/membership` endpoint to show cohort membership counts over time.

## [0.4.0] - 2023-01-12

### Breaking

- Change the format of event stream properties include type, statistical type, breaks, format, emitted_by_datasets.

## [0.3.23] - 2023-01-09

### Scopes

- added `columns` detailed metadata for the front-end.

### Targets

- added `human_readable`
- added `custom_structure` - see https://github.com/faradayio/fdy/blob/master/docs/TARGET_STRUCTURE_TRANSFORMATIONS.md
- deprecated `payload_map`

## [0.3.22] - 2023-01-06

### Added

- Implement DELETE for /traits

## [0.3.21] - 2023-01-03

### Added

- Remove TRIM on dateparsing and implement regex, removing time, only for when we do not autodetect

## [0.3.20] - 2022-12-21

### Added

- Places resource endpoint: GET, POST, PATCH, DELETE
- Added place_conditions parameter to /cohorts, used filter a Cohort's population using a Place's geometry

## [0.3.19] - 2022-12-20

### Added

- Targets: added linkedin transform preset

## [0.3.18] - 2022-12-13

### Changed

- Align the initial target transformation presets with the existing target update worker.

## [0.3.17] - 2022-12-09

### Changed

- /datasets upsert_column can now be PATCHed after the dataset is created

## [0.3.16] - 2022-12-07

### Added

- Target transformation presets and compilation script.

## [0.3.15] - 2022-12-06

### Added

- Add `GET /persona_sets/{persona_set_id}/analysis/flow` to return type persona analysis info on the associated value and member count of each persona by day.

## [0.3.14] - 2022-12-05

### Added

- Add `stream_conditions` field to cohorts. This allows users to specify values for stream properties to filter cohort membership.

## [0.3.13] - 2022-12-04

### Added

- Added person_full_name to datasets identity sets
- Allow spaces and capital letters in identity sets

## [0.3.12] - 2022-11-29

### Added

- PATCH and POST /outcomes - feature_blocklist could previously only include Faraday-provided traits. Now it can also include user-defined traits.

## [0.3.11] - 2022-11-29

### Added

- GET /streams and GET /streams/{id} endpoints now return properties. Properties are set on /datasets output_to_streams.

## [0.3.10] - 2022-11-22

### Added

- GET, POST, PATCH /datasets: for output_to_streams, instead of being limited to 'datetime', 'product', 'value', and 'channel', you can create any property.
- provided clearer date parsing specifications (yyyy_mm_dd_dash instead of date_iso8601, mm_dd_yy_slash instead of date_month_day_shortyear (this didn't even allow delimiter choosing)). For backwards compatibility, the old formats are still available, but depreciated.

## [0.3.9] - 2022-11-15

### Added

- Add `GET /persona_sets/{persona_set_id}/analysis/dimensions` to return typed persona analysis info for traits beyond the clustering/modeling_fields of the persona set. Eventually this can contain predictions and other event analysis information.

### Changed

- Marked `persona_set.personas[0].details.bins` as deprecated (use `/persona_sets/{persona_set_id}/analysis/dimensions` instead which has a typed response and contains more dimensions)

## [0.3.8] - 2022-11-15

### Changed

- support "upsert" for snowflake referenced targets

## [0.3.7] - 2022-11-11

### Added

- Added `_matches` field to trait conditions on cohorts for regex matching.

## [0.3.6] - 2022-11-02

### Added

- Added last_updated_output_at to most endpoints - this specifies when the resource last finished building.

## [0.3.5] - 2022-11-01

### Fixed

- Make `persona.id` required (non-nullable).

## [0.3.4] - 2022-10-28

### Added

- Added GET /accounts - to show your account plus all subaccounts
- Added GET /accounts/{id} - to show the details of a specific account
- Added GET /accounts/current - to show the details of the account associated with your specific API key
- Added GET /accounds/{id}/billing - to show billing details for the given account. including payments, invoices, and account usage

## [0.3.3] - 2022-10-28

### Added

- New field `persona.individuals_count` returns number of members that match the persona within the cohort the set was based on.

## [0.3.2] - 2022-10-24

### Added

- Allow spaces in column names

## [0.3.1] - 2022-10-24

### Added

- Added "case_sensitive_columns" to Snowflake datasets

## [0.3.0] - 2022-10-17

### Added

- Added `name` and `explore` fields to creating persona sets
- Added `PATCH` support for `/persona_sets/{persona_set_id}` to update `name` and `explore`

### Breaking

- `name` is now required for `POST /persona_sets`

## [0.2.11] - 2022-10-14

### Added

- DELETE endpoints for all resources except traits.

## [0.2.10] - 2022-10-13

### Added

- add matched_count to /datasets. This will show the user how many of their identified people matched a person in Faraday's data.
- fixed the calculation for row count and identified count.

## [0.2.9] - 2022-10-13

### Changed

- allow space character in SQL server `database` options

### Added

- support "upsert" for bigquery referenced targets

## [0.2.8] - 2022-10-05

### Added

- new supported 'format' for /datasets output_to_streams - seconds since unix epoch and milliseconds since epoch

## [0.2.7] - 2022-10-03

### Changed

- show whether cohort is classic (managed)

## [0.2.6] - 2022-09-29

### Changed

- allow bucket prefixes to start with capital letters and numbers

## [0.2.5] - 2022-09-21

### Changed

- allow colon in column names (e.g. "Source: Product Description")

### Changed

## [0.2.4] - 2022-09-10

### Changed

- added dataset updates, showing the date and rows added per update. Note that we don't currently provide the row count pre-processing as this is technically difficult.

## [0.2.3] - 2022-09-06

### Changed

- refactor target limits to support two types of input: percentile ranges (WHERE min <= percentile_score <= max) and absolute limits (LIMIT)

## [0.2.2] - 2022-09-06

### Changed

- add `explore` boolean to cohorts

## [0.2.1] - 2022-09-02

### Changed

- add `preview` mode to datasets, facilitating "New Dataset" UI (and advanced API users who want low latency column detection)
- allow spaces in column names (e.g. "Product Description")

## [0.2.0] - 2022-08-30

### Changed

- move required `dataset_name` from BigQuery datasets/targets to BigQuery connection level

## [0.1.19] - 2022-08-25

- add `active` to `persona_sets`

## [0.1.18] - 2022-08-21

- add `contents` and `contents_error` to connections

## [0.1.17] - 2022-08-18

### Changed

- add `metro` as an aggregation option to targets

## [0.1.16] - 2022-08-17

### Changed

- for /datasets endpoints, made `output_to_streams` optional

## [0.1.15] - 2022-08-15

### Added

- `/datasets` read-only, optional fields `row_count` and `identified_count`

## [0.1.14] - 2022-08-09

### Changed

- Create a new 403 error code MAX_RESOURCES_REACHED. When user hits the resource quota, they will get a 403 MAX_RESOURCES_REACHED error instead of 403 FORBIDDEN. The user will instead get FORBIDDEN if they do not have access to the resource.

## [0.1.13] - 2022-08-04

### Changed

- `/targets` endpoint re-spec
- Added support for read-only connection_types_options

## [0.1.12] - 2022-07-29

### Added

- `GET /datasets[/X]` now returns `name`

## [0.1.11] - 2022-07-28

### Added

- `GET /datasets[/X]` now returns `detected_columns`

## [0.1.10] - 2022-07-27

### Added

- `GET /scopes/{scope_id}/datasets` for returning all datasets associated with a scope's population cohorts.

## [0.1.9] - 2022-07-26

### Added

- `fig/geography` trait category to distinguish location-based fields which contain census, ZIP, etc ID's.

## [0.1.8] - 2022-07-19

### Added

- `report_url` to scopes for returning a signed url with the report location
- `output_url` to targets for returning a signed url for the default output

## [0.1.7] - 2022-07-18

### Added

- New to datasets: `primary_key_column`.

## [0.1.6] - 2022-07-12

### Added

- `GET /scope/{scope_id}/payload/cohorts` for returning all cohorts in the scope's payload

## [0.1.5] - 2022-07-11

### Fixed

- Scope payload attributes will not fail validation for prefixed field names.

## [0.1.4] - 2022-07-07

### Fixed

- `url` for snowlake connections now uses the correct regex.

## [0.1.3] - 2022-06-27

### Added

- `connections/{connection_id}/targets` endpoint, which returns all targets with the given connection_id

### Fixed

- `url` for redshift connections now uses the correct regex.

## [0.1.2] - 2022-06-24

### Added

- Recency options to the /cohorts endpoint.

## [0.1.1] - 2022-06-23

### Added

- Added `classic` options for datasets and connections to expose querying and patching of classic datasets.

## [0.1.0] - 2022-06-23

### Fixed

- Obsolete code in this repository has been deleted.
- This repository is now completely standalone.

## [0.2.0] - 2022-06-26

### Changed

- Name is now reqired on cohorts.
