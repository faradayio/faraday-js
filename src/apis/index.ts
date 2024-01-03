/* tslint:disable */
/* eslint-disable */
import {Configuration} from '../runtime';
import {
    AccountsApi
} from './AccountsApi';
import {
    BillingApi
} from './BillingApi';
import {
    CohortsApi
} from './CohortsApi';
import {
    ConnectionsApi
} from './ConnectionsApi';
import {
    DatasetsApi
} from './DatasetsApi';
import {
    GraphApi
} from './GraphApi';
import {
    OutcomesApi
} from './OutcomesApi';
import {
    PersonaSetsApi
} from './PersonaSetsApi';
import {
    PlacesApi
} from './PlacesApi';
import {
    RecommendersApi
} from './RecommendersApi';
import {
    ScopesApi
} from './ScopesApi';
import {
    StreamsApi
} from './StreamsApi';
import {
    TargetsApi
} from './TargetsApi';
import {
    TraitsApi
} from './TraitsApi';
import {
    UploadsApi
} from './UploadsApi';
import {
    UsageApi
} from './UsageApi';

export class FaradayClient {
    configuration: Configuration;
    accounts: AccountsApi;
    billing: BillingApi;
    cohorts: CohortsApi;
    connections: ConnectionsApi;
    datasets: DatasetsApi;
    graph: GraphApi;
    outcomes: OutcomesApi;
    personaSets: PersonaSetsApi;
    places: PlacesApi;
    recommenders: RecommendersApi;
    scopes: ScopesApi;
    streams: StreamsApi;
    targets: TargetsApi;
    traits: TraitsApi;
    uploads: UploadsApi;
    usage: UsageApi;

    constructor(configuration: Configuration) {
        this.configuration = configuration
        this.accounts = new AccountsApi(configuration);
        this.billing = new BillingApi(configuration);
        this.cohorts = new CohortsApi(configuration);
        this.connections = new ConnectionsApi(configuration);
        this.datasets = new DatasetsApi(configuration);
        this.graph = new GraphApi(configuration);
        this.outcomes = new OutcomesApi(configuration);
        this.personaSets = new PersonaSetsApi(configuration);
        this.places = new PlacesApi(configuration);
        this.recommenders = new RecommendersApi(configuration);
        this.scopes = new ScopesApi(configuration);
        this.streams = new StreamsApi(configuration);
        this.targets = new TargetsApi(configuration);
        this.traits = new TraitsApi(configuration);
        this.uploads = new UploadsApi(configuration);
        this.usage = new UsageApi(configuration);
    }
}
