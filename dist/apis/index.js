"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaradayClient = void 0;
const AccountsApi_1 = require("./AccountsApi");
const BillingApi_1 = require("./BillingApi");
const CohortsApi_1 = require("./CohortsApi");
const ConnectionsApi_1 = require("./ConnectionsApi");
const DatasetsApi_1 = require("./DatasetsApi");
const GraphApi_1 = require("./GraphApi");
const OutcomesApi_1 = require("./OutcomesApi");
const PersonaSetsApi_1 = require("./PersonaSetsApi");
const PlacesApi_1 = require("./PlacesApi");
const RecommendersApi_1 = require("./RecommendersApi");
const ScopesApi_1 = require("./ScopesApi");
const StreamsApi_1 = require("./StreamsApi");
const TargetsApi_1 = require("./TargetsApi");
const TraitsApi_1 = require("./TraitsApi");
const UploadsApi_1 = require("./UploadsApi");
const UsageApi_1 = require("./UsageApi");
class FaradayClient {
    constructor(configuration) {
        this.configuration = configuration;
        this.accounts = new AccountsApi_1.AccountsApi(configuration);
        this.billing = new BillingApi_1.BillingApi(configuration);
        this.cohorts = new CohortsApi_1.CohortsApi(configuration);
        this.connections = new ConnectionsApi_1.ConnectionsApi(configuration);
        this.datasets = new DatasetsApi_1.DatasetsApi(configuration);
        this.graph = new GraphApi_1.GraphApi(configuration);
        this.outcomes = new OutcomesApi_1.OutcomesApi(configuration);
        this.personaSets = new PersonaSetsApi_1.PersonaSetsApi(configuration);
        this.places = new PlacesApi_1.PlacesApi(configuration);
        this.recommenders = new RecommendersApi_1.RecommendersApi(configuration);
        this.scopes = new ScopesApi_1.ScopesApi(configuration);
        this.streams = new StreamsApi_1.StreamsApi(configuration);
        this.targets = new TargetsApi_1.TargetsApi(configuration);
        this.traits = new TraitsApi_1.TraitsApi(configuration);
        this.uploads = new UploadsApi_1.UploadsApi(configuration);
        this.usage = new UsageApi_1.UsageApi(configuration);
    }
}
exports.FaradayClient = FaradayClient;
