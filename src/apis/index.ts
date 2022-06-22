/* tslint:disable */
/* eslint-disable */
import {Configuration} from '../runtime';
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
    OutcomesApi
} from './OutcomesApi';
import {
    PersonaSetsApi
} from './PersonaSetsApi';
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
    UploadsApi
} from './UploadsApi';
import {
    UsageApi
} from './UsageApi';

export class FaradayClient {
    configuration: Configuration;
    cohorts: CohortsApi;
    connections: ConnectionsApi;
    datasets: DatasetsApi;
    outcomes: OutcomesApi;
    personaSets: PersonaSetsApi;
    scopes: ScopesApi;
    streams: StreamsApi;
    targets: TargetsApi;
    uploads: UploadsApi;
    usage: UsageApi;

    constructor(configuration: Configuration) {
        this.configuration = configuration
        this.cohorts = new CohortsApi(configuration);
        this.connections = new ConnectionsApi(configuration);
        this.datasets = new DatasetsApi(configuration);
        this.outcomes = new OutcomesApi(configuration);
        this.personaSets = new PersonaSetsApi(configuration);
        this.scopes = new ScopesApi(configuration);
        this.streams = new StreamsApi(configuration);
        this.targets = new TargetsApi(configuration);
        this.uploads = new UploadsApi(configuration);
        this.usage = new UsageApi(configuration);
    }
}
