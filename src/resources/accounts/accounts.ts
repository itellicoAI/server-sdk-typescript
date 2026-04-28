// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountsAPI from './accounts';
import * as AnalyticsAPI from './analytics';
import { Analytics, AnalyticsGetUsageParams, AnalyticsGetUsageResponse, UsageGroupBy } from './analytics';
import * as PhoneNumbersAPI from './phone-numbers';
import {
  PhoneNumber,
  PhoneNumberCreateParams,
  PhoneNumberDeleteParams,
  PhoneNumberListParams,
  PhoneNumberListResponse,
  PhoneNumberRetrieveParams,
  PhoneNumberUpdateParams,
  PhoneNumbers,
} from './phone-numbers';
import * as ProvidersAPI from './providers';
import {
  ModelCatalogProvider,
  ModelRange,
  ProviderListModelsResponse,
  ProviderListTranscribersResponse,
  ProviderListVoicesParams,
  ProviderListVoicesResponse,
  Providers,
} from './providers';
import * as SipTrunksAPI from './sip-trunks';
import {
  SipTrunk,
  SipTrunkCreateParams,
  SipTrunkDeleteParams,
  SipTrunkListParams,
  SipTrunkListResponse,
  SipTrunkRetrieveParams,
  SipTrunkUpdateParams,
  SipTrunks,
} from './sip-trunks';
import * as SubaccountsAPI from './subaccounts';
import {
  SubaccountCreateParams,
  SubaccountListParams,
  SubaccountListResponse,
  SubaccountRetrieveParams,
  SubaccountUpdateParams,
  Subaccounts,
} from './subaccounts';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Accounts extends APIResource {
  subaccounts: SubaccountsAPI.Subaccounts = new SubaccountsAPI.Subaccounts(this._client);
  providers: ProvidersAPI.Providers = new ProvidersAPI.Providers(this._client);
  phoneNumbers: PhoneNumbersAPI.PhoneNumbers = new PhoneNumbersAPI.PhoneNumbers(this._client);
  sipTrunks: SipTrunksAPI.SipTrunks = new SipTrunksAPI.SipTrunks(this._client);
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);

  /**
   * Paginated list of conversations for the specified account and its subaccounts.
   */
  listConversations(
    accountID: string,
    query: AccountListConversationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountListConversationsResponse> {
    return this._client.get(path`/v1/accounts/${accountID}/conversations`, { query, ...options });
  }

  /**
   * Return the authenticated account for the provided API key.
   */
  retrieveCurrent(options?: RequestOptions): APIPromise<Account> {
    return this._client.get('/v1/accounts/current', options);
  }
}

/**
 * Account information
 */
export interface Account {
  /**
   * Unique identifier for the account
   */
  id: string;

  /**
   * ISO 8601 date-time when the account was created
   */
  created: string;

  /**
   * Whether the account is active
   */
  is_active: boolean;

  /**
   * ISO 8601 date-time when the account was last modified
   */
  modified: string;

  /**
   * Account name
   */
  name: string;

  /**
   * Parent account ID (null for root accounts)
   */
  parent_account_id?: string | null;
}

/**
 * Directionality of a conversation.
 */
export type ConversationDirection = 'inbound' | 'outbound' | 'internal';

/**
 * High-level lifecycle statuses reported by the conversations API.
 */
export type ConversationStatus = 'in_progress' | 'completed' | 'failed' | 'transferred';

/**
 * High-level conversation types exposed via the v1 API.
 */
export type ConversationType = 'phone' | 'web' | 'test' | 'unknown';

export interface AccountListConversationsResponse {
  count: number;

  items: Array<AccountListConversationsResponse.Item>;
}

export namespace AccountListConversationsResponse {
  /**
   * Single conversation row returned by the list endpoint.
   */
  export interface Item {
    conversation_id: string;

    start_timestamp: string;

    /**
     * High-level lifecycle statuses reported by the conversations API.
     */
    status: AccountsAPI.ConversationStatus;

    /**
     * Conversation type classification (phone, web, or test).
     */
    type: AccountsAPI.ConversationType;

    agent_id?: string | null;

    agent_name?: string | null;

    /**
     * Capture artifacts associated with a conversation.
     */
    capture?: Item.Capture | null;

    /**
     * Contact-side phone number when the type is phone.
     */
    contact_number?: string | null;

    /**
     * Directionality of a conversation.
     */
    direction?: AccountsAPI.ConversationDirection | null;

    duration_seconds?: number | null;

    messages?: Array<
      | Item.UserMessageSchema
      | Item.AgentMessageSchema
      | Item.SystemMessageSchema
      | Item.ToolMessageSchema
      | Item.EventMessageSchema
    >;

    /**
     * Agent-side phone number when the type is phone.
     */
    phone_number?: string | null;

    phone_number_id?: string | null;
  }

  export namespace Item {
    /**
     * Capture artifacts associated with a conversation.
     */
    export interface Capture {
      /**
       * URL or path to the conversation recording, when available.
       */
      recording_url?: string | null;
    }

    export interface UserMessageSchema {
      message: string;

      role?: 'user';

      /**
       * UTC timestamp when the message was logged.
       */
      timestamp?: string | null;
    }

    export interface AgentMessageSchema {
      message: string;

      role?: 'agent';

      /**
       * UTC timestamp when the message was logged.
       */
      timestamp?: string | null;
    }

    export interface SystemMessageSchema {
      message: string;

      role?: 'system';

      /**
       * UTC timestamp when the message was logged.
       */
      timestamp?: string | null;
    }

    export interface ToolMessageSchema {
      message?: string | null;

      name?: string | null;

      result?: unknown;

      role?: 'tool';

      /**
       * UTC timestamp when the message was logged.
       */
      timestamp?: string | null;
    }

    export interface EventMessageSchema {
      message?: string | null;

      role?: 'event';

      /**
       * UTC timestamp when the message was logged.
       */
      timestamp?: string | null;
    }
  }
}

export interface AccountListConversationsParams {
  /**
   * Filter by agent UUID.
   */
  agent_id?: string | null;

  /**
   * Filter by conversation identifier.
   */
  conversation_id?: string | null;

  /**
   * Return conversations created on/after this timestamp.
   */
  created_after?: string | null;

  /**
   * Return conversations created before this timestamp.
   */
  created_before?: string | null;

  /**
   * Filter by conversation direction (inbound or outbound).
   */
  direction?: ConversationDirection | null;

  /**
   * Filter by lifecycle status (in_progress, completed, failed, transferred).
   */
  status?: ConversationStatus | null;

  /**
   * Filter by conversation type (phone, web, or test).
   */
  type?: ConversationType | null;

  /**
   * Return conversations updated on/after this timestamp.
   */
  updated_after?: string | null;

  /**
   * Return conversations updated before this timestamp.
   */
  updated_before?: string | null;
}

Accounts.Subaccounts = Subaccounts;
Accounts.Providers = Providers;
Accounts.PhoneNumbers = PhoneNumbers;
Accounts.SipTrunks = SipTrunks;
Accounts.Analytics = Analytics;

export declare namespace Accounts {
  export {
    type Account as Account,
    type ConversationDirection as ConversationDirection,
    type ConversationStatus as ConversationStatus,
    type ConversationType as ConversationType,
    type AccountListConversationsResponse as AccountListConversationsResponse,
    type AccountListConversationsParams as AccountListConversationsParams,
  };

  export {
    Subaccounts as Subaccounts,
    type SubaccountListResponse as SubaccountListResponse,
    type SubaccountCreateParams as SubaccountCreateParams,
    type SubaccountRetrieveParams as SubaccountRetrieveParams,
    type SubaccountUpdateParams as SubaccountUpdateParams,
    type SubaccountListParams as SubaccountListParams,
  };

  export {
    Providers as Providers,
    type ModelCatalogProvider as ModelCatalogProvider,
    type ModelRange as ModelRange,
    type ProviderListModelsResponse as ProviderListModelsResponse,
    type ProviderListTranscribersResponse as ProviderListTranscribersResponse,
    type ProviderListVoicesResponse as ProviderListVoicesResponse,
    type ProviderListVoicesParams as ProviderListVoicesParams,
  };

  export {
    PhoneNumbers as PhoneNumbers,
    type PhoneNumber as PhoneNumber,
    type PhoneNumberListResponse as PhoneNumberListResponse,
    type PhoneNumberCreateParams as PhoneNumberCreateParams,
    type PhoneNumberRetrieveParams as PhoneNumberRetrieveParams,
    type PhoneNumberUpdateParams as PhoneNumberUpdateParams,
    type PhoneNumberListParams as PhoneNumberListParams,
    type PhoneNumberDeleteParams as PhoneNumberDeleteParams,
  };

  export {
    SipTrunks as SipTrunks,
    type SipTrunk as SipTrunk,
    type SipTrunkListResponse as SipTrunkListResponse,
    type SipTrunkCreateParams as SipTrunkCreateParams,
    type SipTrunkRetrieveParams as SipTrunkRetrieveParams,
    type SipTrunkUpdateParams as SipTrunkUpdateParams,
    type SipTrunkListParams as SipTrunkListParams,
    type SipTrunkDeleteParams as SipTrunkDeleteParams,
  };

  export {
    Analytics as Analytics,
    type UsageGroupBy as UsageGroupBy,
    type AnalyticsGetUsageResponse as AnalyticsGetUsageResponse,
    type AnalyticsGetUsageParams as AnalyticsGetUsageParams,
  };
}
