// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountsAPI from './accounts';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Subaccounts extends APIResource {
  /**
   * Create a new subaccount under the specified parent account. The creator becomes
   * OWNER of the new subaccount.
   */
  create(
    accountID: string,
    body: SubaccountCreateParams,
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.Account> {
    return this._client.post(path`/v1/accounts/${accountID}/subaccounts`, { body, ...options });
  }

  /**
   * Fetch a specific subaccount by ID under the specified parent account.
   */
  retrieve(
    subaccountID: string,
    params: SubaccountRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.Account> {
    const { account_id } = params;
    return this._client.get(path`/v1/accounts/${account_id}/subaccounts/${subaccountID}`, options);
  }

  /**
   * Update subaccount properties such as name.
   */
  update(
    subaccountID: string,
    params: SubaccountUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.Account> {
    const { account_id, ...body } = params;
    return this._client.patch(path`/v1/accounts/${account_id}/subaccounts/${subaccountID}`, {
      body,
      ...options,
    });
  }

  /**
   * Paginated list of child accounts directly under the specified parent account.
   */
  list(
    accountID: string,
    query: SubaccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubaccountListResponse> {
    return this._client.get(path`/v1/accounts/${accountID}/subaccounts`, { query, ...options });
  }
}

export interface SubaccountListResponse {
  count: number;

  items: Array<AccountsAPI.Account>;
}

export interface SubaccountCreateParams {
  /**
   * Name of the subaccount to create
   */
  name: string;
}

export interface SubaccountRetrieveParams {
  account_id: string;
}

export interface SubaccountUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: Set active state (soft-disable when false)
   */
  is_active?: boolean | null;

  /**
   * Body param: New name for the subaccount
   */
  name?: string | null;
}

export interface SubaccountListParams {
  /**
   * Filter by active status
   */
  is_active?: boolean | null;

  limit?: number;

  offset?: number;
}

export declare namespace Subaccounts {
  export {
    type SubaccountListResponse as SubaccountListResponse,
    type SubaccountCreateParams as SubaccountCreateParams,
    type SubaccountRetrieveParams as SubaccountRetrieveParams,
    type SubaccountUpdateParams as SubaccountUpdateParams,
    type SubaccountListParams as SubaccountListParams,
  };
}
