// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import {
  AgentCreateParams,
  AgentDeleteParams,
  AgentListParams,
  AgentListResponse,
  AgentResponse,
  AgentRetrieveParams,
  AgentUpdateParams,
  Agents,
  AmbientSound,
  AnthropicModel,
  AzureStt,
  CheckIn,
  DeepgramStt,
  InitialMessage,
  InterruptSettings,
  Message,
  OpenAIModel,
  PronunciationRule,
  ResponseTiming,
} from './agents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Accounts extends APIResource {
  agents: AgentsAPI.Agents = new AgentsAPI.Agents(this._client);

  /**
   * Get information about a specific account (if you have access)
   *
   * @example
   * ```ts
   * const account = await client.accounts.retrieve(
   *   'account_id',
   * );
   * ```
   */
  retrieve(accountID: string, options?: RequestOptions): APIPromise<Account> {
    return this._client.get(path`/v1/accounts/${accountID}`, options);
  }

  /**
   * Get information about the current account
   *
   * @example
   * ```ts
   * const account = await client.accounts.retrieveCurrent();
   * ```
   */
  retrieveCurrent(options?: RequestOptions): APIPromise<Account> {
    return this._client.get('/v1/accounts/me', options);
  }
}

/**
 * Account information
 */
export interface Account {
  /**
   * ISO 8601 date-time string of when the account was created
   */
  created: string;

  /**
   * Whether this is a subaccount
   */
  is_subaccount: boolean;

  /**
   * Account name
   */
  name: string;

  /**
   * Unique identifier for the account
   */
  uuid: string;

  /**
   * Parent account ID if this is a subaccount
   */
  parent_account_id?: string | null;
}

Accounts.Agents = Agents;

export declare namespace Accounts {
  export { type Account as Account };

  export {
    Agents as Agents,
    type AgentResponse as AgentResponse,
    type AmbientSound as AmbientSound,
    type AnthropicModel as AnthropicModel,
    type AzureStt as AzureStt,
    type CheckIn as CheckIn,
    type DeepgramStt as DeepgramStt,
    type InitialMessage as InitialMessage,
    type InterruptSettings as InterruptSettings,
    type Message as Message,
    type OpenAIModel as OpenAIModel,
    type PronunciationRule as PronunciationRule,
    type ResponseTiming as ResponseTiming,
    type AgentListResponse as AgentListResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentRetrieveParams as AgentRetrieveParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
    type AgentDeleteParams as AgentDeleteParams,
  };
}
