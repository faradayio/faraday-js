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
    AccountUsage,
    AccountUsageFromJSON,
    AccountUsageFromJSONTyped,
    AccountUsageToJSON,
} from './AccountUsage';
import {
    Invoice,
    InvoiceFromJSON,
    InvoiceFromJSONTyped,
    InvoiceToJSON,
} from './Invoice';
import {
    Payment,
    PaymentFromJSON,
    PaymentFromJSONTyped,
    PaymentToJSON,
} from './Payment';

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

export function AccountBillingFromJSON(json: any): AccountBilling {
    return AccountBillingFromJSONTyped(json, false);
}

export function AccountBillingFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountBilling {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'invoices': !exists(json, 'invoices') ? undefined : ((json['invoices'] as Array<any>).map(InvoiceFromJSON)),
        'payments': !exists(json, 'payments') ? undefined : ((json['payments'] as Array<any>).map(PaymentFromJSON)),
        'usages': !exists(json, 'usages') ? undefined : ((json['usages'] as Array<any>).map(AccountUsageFromJSON)),
    };
}

export function AccountBillingToJSON(value?: AccountBilling | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'invoices': value.invoices === undefined ? undefined : ((value.invoices as Array<any>).map(InvoiceToJSON)),
        'payments': value.payments === undefined ? undefined : ((value.payments as Array<any>).map(PaymentToJSON)),
        'usages': value.usages === undefined ? undefined : ((value.usages as Array<any>).map(AccountUsageToJSON)),
    };
}

