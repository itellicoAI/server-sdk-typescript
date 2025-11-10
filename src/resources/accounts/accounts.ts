// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import {
  AgentCreateParams,
  AgentListParams,
  AgentListResponse,
  AgentResponse,
  Agents,
  AmbientSound,
  AnthropicModel,
  InitialMessage,
  InterruptSettings,
  OpenAIModel,
  ResponseTiming,
} from './agents';

export class Accounts extends APIResource {
  agents: AgentsAPI.Agents = new AgentsAPI.Agents(this._client);
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

Accounts.Agents = Agents;

export declare namespace Accounts {
  export { type Account as Account };

  export {
    Agents as Agents,
    type AgentResponse as AgentResponse,
    type AmbientSound as AmbientSound,
    type AnthropicModel as AnthropicModel,
    type InitialMessage as InitialMessage,
    type InterruptSettings as InterruptSettings,
    type OpenAIModel as OpenAIModel,
    type ResponseTiming as ResponseTiming,
    type AgentListResponse as AgentListResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentListParams as AgentListParams,
  };
}
