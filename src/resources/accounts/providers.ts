// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProvidersAPI from './providers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Providers extends APIResource {
  /**
   * List available models grouped by provider. Each provider entry includes its
   * code, name, an EU-hosted flag, and a list of models with id, name, description,
   * and supported configuration ranges (temperature, max_tokens).
   */
  listModels(accountID: string, options?: RequestOptions): APIPromise<ProviderListModelsResponse> {
    return this._client.get(path`/v1/accounts/${accountID}/providers/models`, options);
  }

  /**
   * List available transcriber models grouped by provider. Each provider entry
   * includes its code, name, EU-hosted flag, and models with id, name, description,
   * and supported_languages (code/name).
   */
  listTranscribers(
    accountID: string,
    options?: RequestOptions,
  ): APIPromise<ProviderListTranscribersResponse> {
    return this._client.get(path`/v1/accounts/${accountID}/providers/transcribers`, options);
  }

  /**
   * List actual voice models from a specific provider with optional filters
   * (language, gender, search). Returns live data from voice providers like
   * ElevenLabs, Azure Speech, and Cartesia.
   */
  listVoices(
    accountID: string,
    query: ProviderListVoicesParams,
    options?: RequestOptions,
  ): APIPromise<ProviderListVoicesResponse> {
    return this._client.get(path`/v1/accounts/${accountID}/providers/voices`, { query, ...options });
  }
}

/**
 * Provider metadata for a group of models.
 */
export interface ModelCatalogProvider {
  /**
   * Provider code (e.g., azure_openai, openai)
   */
  code: string;

  /**
   * Human-friendly provider name
   */
  name: string;

  /**
   * Whether the provider is EU-hosted (data residency)
   */
  eu_hosted?: boolean;
}

/**
 * Numeric range with optional default/min/max.
 */
export interface ModelRange {
  /**
   * Default value used when not specified
   */
  default?: number | null;

  /**
   * Maximum allowed value
   */
  max?: number | null;

  /**
   * Minimum allowed value
   */
  min?: number | null;
}

export type ProviderListModelsResponse = Array<ProviderListModelsResponse.ProviderListModelsResponseItem>;

export namespace ProviderListModelsResponse {
  /**
   * Provider with its list of models.
   */
  export interface ProviderListModelsResponseItem {
    models: Array<ProviderListModelsResponseItem.Model>;

    /**
     * Provider metadata for a group of models.
     */
    provider: ProvidersAPI.ModelCatalogProvider;
  }

  export namespace ProviderListModelsResponseItem {
    /**
     * Single model entry in the catalog.
     */
    export interface Model {
      /**
       * Canonical model id without provider prefix
       */
      id: string;

      /**
       * Display name for the model
       */
      name: string;

      /**
       * Short description or guidance for the model
       */
      description?: string | null;

      /**
       * Supported configurable ranges for a model (temperature, max_tokens).
       */
      settings?: Model.Settings | null;
    }

    export namespace Model {
      /**
       * Supported configurable ranges for a model (temperature, max_tokens).
       */
      export interface Settings {
        /**
         * Numeric range with optional default/min/max.
         */
        max_tokens?: ProvidersAPI.ModelRange | null;

        /**
         * Numeric range with optional default/min/max.
         */
        temperature?: ProvidersAPI.ModelRange | null;
      }
    }
  }
}

export type ProviderListTranscribersResponse =
  Array<ProviderListTranscribersResponse.ProviderListTranscribersResponseItem>;

export namespace ProviderListTranscribersResponse {
  export interface ProviderListTranscribersResponseItem {
    models: Array<ProviderListTranscribersResponseItem.Model>;

    /**
     * Provider metadata for a group of models.
     */
    provider: ProvidersAPI.ModelCatalogProvider;
  }

  export namespace ProviderListTranscribersResponseItem {
    export interface Model {
      /**
       * Provider-local model id
       */
      id: string;

      /**
       * Display name
       */
      name: string;

      /**
       * Short description
       */
      description?: string | null;

      /**
       * Supported languages
       */
      supported_languages?: Array<Model.SupportedLanguage>;
    }

    export namespace Model {
      export interface SupportedLanguage {
        /**
         * Language code (e.g., de, en-US, multi)
         */
        code: string;

        /**
         * Display label for the language
         */
        name: string;

        /**
         * Optional description (typically for 'multi')
         */
        description?: string | null;

        /**
         * For 'multi', optional list of included languages (codes)
         */
        includes?: Array<string> | null;
      }
    }
  }
}

export type ProviderListVoicesResponse = { [key: string]: unknown };

export interface ProviderListVoicesParams {
  /**
   * Voice provider (required): elevenlabs, azure, or cartesia
   */
  provider: string;

  /**
   * Filter by gender: male, female, or neutral
   */
  gender?: string | null;

  /**
   * Filter by language code (e.g., 'en-us', 'fr-fr')
   */
  language?: string | null;

  /**
   * Maximum number of voices to return
   */
  limit?: number | null;

  /**
   * Clear cache and fetch fresh data from provider
   */
  refresh?: boolean;

  /**
   * Search in voice name or description
   */
  search?: string | null;
}

export declare namespace Providers {
  export {
    type ModelCatalogProvider as ModelCatalogProvider,
    type ModelRange as ModelRange,
    type ProviderListModelsResponse as ProviderListModelsResponse,
    type ProviderListTranscribersResponse as ProviderListTranscribersResponse,
    type ProviderListVoicesResponse as ProviderListVoicesResponse,
    type ProviderListVoicesParams as ProviderListVoicesParams,
  };
}
