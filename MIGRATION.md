# Migrating off `@fdy/faraday-js`

`@fdy/faraday-js` is **deprecated and no longer maintained.** The package is no
longer published or updated.

You don't need a Faraday-published package to get a fully type-safe client.
Generate one yourself from Faraday's OpenAPI spec with
[`openapi-fetch`](https://openapi-ts.dev/openapi-fetch/) — it's smaller, always
matches the current API, and has no build step you don't control.

## Steps

### 1. Install the fetch client and the type generator

```sh
npm install openapi-fetch
npm install --save-dev openapi-typescript
```

### 2. Generate types from the OpenAPI spec

Point `openapi-typescript` at Faraday's published OpenAPI document — it takes a
URL directly:

```sh
npx openapi-typescript https://app.faraday.ai/api.json --output ./faraday-api.ts
```

Re-run this whenever you want to pick up API changes. Commit `faraday-api.ts` or
regenerate it as part of your build.

### 3. Create a client bound to those types

```ts
import createClient from "openapi-fetch";
import type { paths } from "./faraday-api";

export const faraday = createClient<paths>({
  baseUrl: "https://api.faraday.ai/v1",
  headers: { Authorization: `Bearer ${process.env.FARADAY_API_KEY}` },
});
```

The `paths` type gives you autocomplete and compile-time checking on every path,
query param, request body, and response.

> **Server-side only.** This client authenticates with a Faraday API key, which
> grants full access to your account. Use it from a server (or other trusted
> backend), never from browser/client-side code — shipping the key to the
> browser exposes it to anyone who loads the page. Keep the key in an
> environment variable or secret store, not in source.

### 4. Call endpoints

`openapi-fetch` returns `{ data, error }` instead of throwing, and type-checks
the whole call against the spec.

## Before / after

The old SDK grouped calls under resource objects and threw on error. With
`openapi-fetch` you call `POST`/`GET`/`PATCH`/`DELETE` with the path.

**Before (`@fdy/faraday-js`):**

```ts
import { Configuration, FaradayClient } from "@fdy/faraday-js";
import "isomorphic-fetch";

const faraday = new FaradayClient(
  new Configuration({
    headers: { authorization: "Bearer YOUR_API_KEY" },
  })
);

const cohort = await faraday.cohorts.createCohort({
  name: "Customers",
  stream_name: "orders",
});

const personaSet = await faraday.personaSets.createPersonaSet({
  name: "Customers",
  cohort_id: cohort.id,
});

const outcome = await faraday.outcomes.createOutcome({
  attainment_cohort_id: cohort.id,
  name: "Likely Customers",
});

const scope = await faraday.scopes.createScope({
  name: "Customers Scores",
  preview: true,
  population: { cohort_ids: [cohort.id] },
  payload: { persona_set_ids: [personaSet.id] },
});
```

**After (`openapi-fetch`):**

```ts
import createClient from "openapi-fetch";
import type { paths } from "./faraday-api";

const faraday = createClient<paths>({
  baseUrl: "https://api.faraday.ai/v1",
  headers: { Authorization: "Bearer YOUR_API_KEY" },
});

const { data: cohort } = await faraday.POST("/cohorts", {
  body: { name: "Customers", stream_name: "orders" },
});

const { data: personaSet } = await faraday.POST("/persona_sets", {
  body: { name: "Customers", cohort_id: cohort!.id },
});

const { data: outcome } = await faraday.POST("/outcomes", {
  body: { attainment_cohort_id: cohort!.id, name: "Likely Customers" },
});

const { data: scope } = await faraday.POST("/scopes", {
  body: {
    name: "Customers Scores",
    preview: true,
    population: { cohort_ids: [cohort!.id] },
    payload: { persona_set_ids: [personaSet!.id] },
  },
});
```

Prefer throwing? Check `error` and throw it yourself, or wrap the client. You no
longer need `isomorphic-fetch` — `openapi-fetch` uses the global `fetch` (Node 18+);
on older Node, pass your own `fetch` via the `createClient` options.

## Questions?

See the [Faraday API reference](https://faraday.ai/developers/reference).
