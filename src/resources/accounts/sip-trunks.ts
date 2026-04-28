// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage BYOC SIP trunk connectivity (origination/termination endpoints and allowed IPs) used by phone numbers.
 */
export class SipTrunks extends APIResource {
  /**
   * Create a Bring-Your-Own-Carrier (BYOC) SIP trunk for inbound/outbound calls. For
   * trunks that target FusionPBX, provisioning is performed synchronously.
   */
  create(accountID: string, body: SipTrunkCreateParams, options?: RequestOptions): APIPromise<SipTrunk> {
    return this._client.post(path`/v1/accounts/${accountID}/sip-trunks`, { body, ...options });
  }

  /**
   * Fetch a single SIP trunk by ID for the specified account.
   */
  retrieve(
    sipTrunkID: string,
    params: SipTrunkRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<SipTrunk> {
    const { account_id } = params;
    return this._client.get(path`/v1/accounts/${account_id}/sip-trunks/${sipTrunkID}`, options);
  }

  /**
   * Update BYOC SIP trunk properties and allowed IPs.
   */
  update(sipTrunkID: string, params: SipTrunkUpdateParams, options?: RequestOptions): APIPromise<SipTrunk> {
    const { account_id, ...body } = params;
    return this._client.patch(path`/v1/accounts/${account_id}/sip-trunks/${sipTrunkID}`, {
      body,
      ...options,
    });
  }

  /**
   * Paginated list of SIP trunks for the specified account.
   */
  list(
    accountID: string,
    query: SipTrunkListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SipTrunkListResponse> {
    return this._client.get(path`/v1/accounts/${accountID}/sip-trunks`, { query, ...options });
  }

  /**
   * Delete a SIP trunk that has no associated phone numbers.
   */
  delete(sipTrunkID: string, params: SipTrunkDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(path`/v1/accounts/${account_id}/sip-trunks/${sipTrunkID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SipTrunk {
  id: string;

  /**
   * Display name for this SIP trunk
   */
  name: string;

  allowed_ips?: Array<string>;

  auth_password_length?: number | null;

  has_auth_password?: boolean;

  phone_numbers?: Array<SipTrunk.PhoneNumber>;

  sip_auth_username?: string | null;

  termination_uri?: string | null;
}

export namespace SipTrunk {
  export interface PhoneNumber {
    id: string;

    friendly_name?: string | null;

    number?: string | null;
  }
}

export interface SipTrunkListResponse {
  count: number;

  items: Array<SipTrunk>;
}

export interface SipTrunkCreateParams {
  /**
   * IPv4/IPv6 or CIDR ranges
   */
  allowed_ips?: Array<string> | null;

  name?: string | null;

  termination_uri?: string | null;
}

export interface SipTrunkRetrieveParams {
  account_id: string;
}

export interface SipTrunkUpdateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param: IPv4/IPv6 or CIDR ranges
   */
  allowed_ips?: Array<string> | null;

  /**
   * Body param
   */
  name?: string | null;

  /**
   * Body param
   */
  termination_uri?: string | null;
}

export interface SipTrunkListParams {
  limit?: number;

  offset?: number;
}

export interface SipTrunkDeleteParams {
  account_id: string;
}

export declare namespace SipTrunks {
  export {
    type SipTrunk as SipTrunk,
    type SipTrunkListResponse as SipTrunkListResponse,
    type SipTrunkCreateParams as SipTrunkCreateParams,
    type SipTrunkRetrieveParams as SipTrunkRetrieveParams,
    type SipTrunkUpdateParams as SipTrunkUpdateParams,
    type SipTrunkListParams as SipTrunkListParams,
    type SipTrunkDeleteParams as SipTrunkDeleteParams,
  };
}
