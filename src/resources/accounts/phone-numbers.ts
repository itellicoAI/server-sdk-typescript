// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage BYOC phone numbers bound to your account; route inbound calls to agents and enable outbound calling.
 */
export class PhoneNumbers extends APIResource {
  /**
   * Create a phone number attached to a SIP trunk. LiveKit trunks are synchronized
   * automatically; FusionPBX linking is performed when applicable.
   */
  create(
    accountID: string,
    body: PhoneNumberCreateParams,
    options?: RequestOptions,
  ): APIPromise<PhoneNumber> {
    return this._client.post(path`/v1/accounts/${accountID}/phone-numbers`, { body, ...options });
  }

  /**
   * Fetch a single phone number by ID for the specified account.
   */
  retrieve(
    phoneNumberID: string,
    params: PhoneNumberRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<PhoneNumber> {
    const { account_id } = params;
    return this._client.get(path`/v1/accounts/${account_id}/phone-numbers/${phoneNumberID}`, options);
  }

  /**
   * Update a phone number's E.164 value, name, SIP trunk link, or inbound agent
   * assignment.
   */
  update(
    phoneNumberID: string,
    params: PhoneNumberUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PhoneNumber> {
    const { account_id, ...body } = params;
    return this._client.patch(path`/v1/accounts/${account_id}/phone-numbers/${phoneNumberID}`, {
      body,
      ...options,
    });
  }

  /**
   * Paginated list of phone numbers owned by the specified account.
   */
  list(
    accountID: string,
    query: PhoneNumberListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PhoneNumberListResponse> {
    return this._client.get(path`/v1/accounts/${accountID}/phone-numbers`, { query, ...options });
  }

  /**
   * Delete a phone number and clean up LiveKit trunks. If managed by FusionPBX, the
   * route is unlinked first.
   */
  delete(phoneNumberID: string, params: PhoneNumberDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(path`/v1/accounts/${account_id}/phone-numbers/${phoneNumberID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PhoneNumber {
  id: string;

  friendly_name?: string | null;

  inbound_agent?: PhoneNumber.InboundAgent | null;

  number?: string | null;

  sip_trunk?: PhoneNumber.SipTrunk | null;

  spam_data?: { [key: string]: unknown } | null;

  /**
   * Tellows spam check data including score, complaints, caller info, and check
   * timestamp
   */
  tellows_data?: unknown | null;
}

export namespace PhoneNumber {
  export interface InboundAgent {
    id: string;

    name: string;

    avatar?: string | null;
  }

  export interface SipTrunk {
    id: string;

    /**
     * Display name for this SIP trunk
     */
    name: string;
  }
}

export interface PhoneNumberListResponse {
  count: number;

  items: Array<PhoneNumber>;
}

export interface PhoneNumberCreateParams {
  /**
   * SIPTrunk UUID
   */
  sip_trunk_id: string;

  /**
   * Inbound Agent UUID
   */
  inbound_agent_id?: string | null;

  /**
   * Friendly name
   */
  name?: string | null;

  /**
   * E.164 phone number
   */
  number?: string | null;
}

export interface PhoneNumberRetrieveParams {
  account_id: string;
}

export interface PhoneNumberUpdateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param: Inbound Agent UUID (set null to unassign)
   */
  inbound_agent_id?: string | null;

  /**
   * Body param: Friendly name
   */
  name?: string | null;

  /**
   * Body param: E.164 phone number
   */
  number?: string | null;

  /**
   * Body param: SIPTrunk UUID (set null to unlink)
   */
  sip_trunk_id?: string | null;
}

export interface PhoneNumberListParams {
  limit?: number;

  offset?: number;
}

export interface PhoneNumberDeleteParams {
  account_id: string;
}

export declare namespace PhoneNumbers {
  export {
    type PhoneNumber as PhoneNumber,
    type PhoneNumberListResponse as PhoneNumberListResponse,
    type PhoneNumberCreateParams as PhoneNumberCreateParams,
    type PhoneNumberRetrieveParams as PhoneNumberRetrieveParams,
    type PhoneNumberUpdateParams as PhoneNumberUpdateParams,
    type PhoneNumberListParams as PhoneNumberListParams,
    type PhoneNumberDeleteParams as PhoneNumberDeleteParams,
  };
}
