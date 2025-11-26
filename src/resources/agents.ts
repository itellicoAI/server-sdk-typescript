// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Agents extends APIResource {
  /**
   * Create a new AI agent with specified configuration for voice conversations.
   *
   * @example
   * ```ts
   * const agentResponse = await client.agents.create(
   *   'account_id',
   *   {
   *     model: {
   *       model: 'gpt-5-mini',
   *       provider: 'azure_openai',
   *     },
   *     transcriber: { provider: 'deepgram' },
   *     voice: {
   *       voice_id: 'pMsXgVXv3BLzUgSXRplE',
   *       provider: 'elevenlabs',
   *     },
   *   },
   * );
   * ```
   */
  create(accountID: string, body: AgentCreateParams, options?: RequestOptions): APIPromise<AgentResponse> {
    return this._client.post(path`/v1/accounts/${accountID}/agents`, { body, ...options });
  }

  /**
   * Retrieve detailed information about a specific agent.
   *
   * @example
   * ```ts
   * const agentResponse = await client.agents.retrieve(
   *   'agent_id',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  retrieve(
    agentID: string,
    params: AgentRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AgentResponse> {
    const { account_id } = params;
    return this._client.get(path`/v1/accounts/${account_id}/agents/${agentID}`, options);
  }

  /**
   * Update an existing agent with partial data. Only fields provided in the request
   * will be updated.
   *
   * @example
   * ```ts
   * const agentResponse = await client.agents.update(
   *   'agent_id',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  update(agentID: string, params: AgentUpdateParams, options?: RequestOptions): APIPromise<AgentResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(path`/v1/accounts/${account_id}/agents/${agentID}`, { body, ...options });
  }

  /**
   * Paginated list of AI agents for the specified account with filtering, searching,
   * and sorting capabilities.
   *
   * @example
   * ```ts
   * const agents = await client.agents.list('account_id');
   * ```
   */
  list(
    accountID: string,
    query: AgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentListResponse> {
    return this._client.get(path`/v1/accounts/${accountID}/agents`, { query, ...options });
  }

  /**
   * Soft-delete an agent by marking it archived. Use list filters to view archived
   * agents and unarchive via PATCH.
   *
   * @example
   * ```ts
   * await client.agents.archive('agent_id', {
   *   account_id: 'account_id',
   * });
   * ```
   */
  archive(agentID: string, params: AgentArchiveParams, options?: RequestOptions): APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(path`/v1/accounts/${account_id}/agents/${agentID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Response returned after agent operations (create, get, update)
 */
export interface AgentResponse {
  /**
   * Unique identifier for the agent. Use this ID to reference the agent in API calls
   * for updates, deletion, or starting conversations.
   */
  id: string;

  /**
   * Unique identifier for the account that owns this agent.
   */
  account_id: string;

  /**
   * Configuration for ambient background sounds during the conversation.
   */
  ambient_sound: AmbientSound;

  /**
   * Configuration for handling user inactivity and silence during conversations.
   */
  inactivity_settings: InactivitySettings;

  /**
   * Configuration for the agent's initial message when starting a conversation.
   */
  initial_message: InitialMessage;

  /**
   * The display name of the agent as configured. This is for your reference and
   * internal organization.
   */
  name: string;

  /**
   * Configuration for agent response timing and conversation flow control.
   */
  response_timing: ResponseTiming;

  /**
   * Agent capture settings configuration.
   */
  capture_settings?: CaptureSettings | null;

  /**
   * Date-time of when the agent was created (ISO 8601 on output).
   */
  created?: string | null;

  /**
   * Agent denoising/noise cancellation settings for enhanced audio quality.
   */
  denoising?: Denoising | null;

  /**
   * Configuration for how the agent handles user interruptions during conversation
   */
  interrupt_settings?: InterruptSettings | null;

  /**
   * The maximum conversation duration configured for this agent in seconds. Maximum
   * allowed is 7200 seconds (2 hours).
   */
  max_duration_seconds?: number | null;

  /**
   * Custom metadata associated with the agent.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * Language model configuration for the agent.
   */
  model?: { [key: string]: unknown } | null;

  /**
   * Date-time of when the agent was last updated (ISO 8601 on output).
   */
  modified?: string | null;

  /**
   * Internal notes about the agent for your team's reference.
   */
  note?: string | null;

  /**
   * List of tags assigned to this agent for categorization and filtering.
   */
  tags?: Array<string> | null;

  /**
   * Speech-to-text configuration for the agent.
   */
  transcriber?: { [key: string]: unknown } | null;

  /**
   * Text-to-speech configuration for the agent.
   */
  voice?: { [key: string]: unknown } | null;

  /**
   * Agent volume settings for audio output control.
   */
  volume?: Volume | null;
}

/**
 * Configuration for ambient background sounds during the conversation
 */
export interface AmbientSound {
  /**
   * Available ambient background sounds to enhance conversation realism
   */
  source?:
    | 'open_plan_office'
    | 'customer_service_center'
    | 'internet_cafe'
    | 'urban_street'
    | 'rural_outdoors'
    | 'ac_fan'
    | null;

  /**
   * Controls the volume of the ambient sound. Value ranging from [0.0, 1.0]. 0.0 is
   * muted, 1.0 is maximum volume, and 0.5 is normal/default volume.
   */
  volume?: number;
}

/**
 * Azure-specific transcriber configuration.
 */
export interface AzureTranscriber {
  /**
   * Language for transcription (see Azure Speech Service docs for supported
   * languages)
   */
  language?:
    | 'af-ZA'
    | 'am-ET'
    | 'ar-AE'
    | 'ar-BH'
    | 'ar-DZ'
    | 'ar-EG'
    | 'ar-IL'
    | 'ar-IQ'
    | 'ar-JO'
    | 'ar-KW'
    | 'ar-LB'
    | 'ar-LY'
    | 'ar-MA'
    | 'ar-OM'
    | 'ar-PS'
    | 'ar-QA'
    | 'ar-SA'
    | 'ar-SY'
    | 'ar-TN'
    | 'ar-YE'
    | 'az-AZ'
    | 'bg-BG'
    | 'bn-IN'
    | 'bs-BA'
    | 'ca-ES'
    | 'cs-CZ'
    | 'cy-GB'
    | 'da-DK'
    | 'de-AT'
    | 'de-CH'
    | 'de-DE'
    | 'el-GR'
    | 'en-AU'
    | 'en-CA'
    | 'en-GB'
    | 'en-GH'
    | 'en-HK'
    | 'en-IE'
    | 'en-IN'
    | 'en-KE'
    | 'en-NG'
    | 'en-NZ'
    | 'en-PH'
    | 'en-SG'
    | 'en-TZ'
    | 'en-US'
    | 'en-ZA'
    | 'es-AR'
    | 'es-BO'
    | 'es-CL'
    | 'es-CO'
    | 'es-CR'
    | 'es-CU'
    | 'es-DO'
    | 'es-EC'
    | 'es-ES'
    | 'es-GQ'
    | 'es-GT'
    | 'es-HN'
    | 'es-MX'
    | 'es-NI'
    | 'es-PA'
    | 'es-PE'
    | 'es-PR'
    | 'es-PY'
    | 'es-SV'
    | 'es-US'
    | 'es-UY'
    | 'es-VE'
    | 'et-EE'
    | 'eu-ES'
    | 'fa-IR'
    | 'fi-FI'
    | 'fil-PH'
    | 'fr-BE'
    | 'fr-CA'
    | 'fr-CH'
    | 'fr-FR'
    | 'ga-IE'
    | 'gl-ES'
    | 'gu-IN'
    | 'he-IL'
    | 'hi-IN'
    | 'hr-HR'
    | 'hu-HU'
    | 'hy-AM'
    | 'id-ID'
    | 'is-IS'
    | 'it-CH'
    | 'it-IT'
    | 'ja-JP'
    | 'jv-ID'
    | 'ka-GE'
    | 'kk-KZ'
    | 'km-KH'
    | 'kn-IN'
    | 'ko-KR'
    | 'lo-LA'
    | 'lt-LT'
    | 'lv-LV'
    | 'mk-MK'
    | 'ml-IN'
    | 'mn-MN'
    | 'mr-IN'
    | 'ms-MY'
    | 'mt-MT'
    | 'my-MM'
    | 'nb-NO'
    | 'ne-NP'
    | 'nl-BE'
    | 'nl-NL'
    | 'pa-IN'
    | 'pl-PL'
    | 'ps-AF'
    | 'pt-BR'
    | 'pt-PT'
    | 'ro-RO'
    | 'ru-RU'
    | 'si-LK'
    | 'sk-SK'
    | 'sl-SI'
    | 'so-SO'
    | 'sq-AL'
    | 'sr-RS'
    | 'sv-SE'
    | 'sw-KE'
    | 'sw-TZ'
    | 'ta-IN'
    | 'te-IN'
    | 'th-TH'
    | 'tr-TR'
    | 'uk-UA'
    | 'ur-IN'
    | 'uz-UZ'
    | 'vi-VN'
    | 'wuu-CN'
    | 'yue-CN'
    | 'zh-CN'
    | 'zh-CN-shandong'
    | 'zh-CN-sichuan'
    | 'zh-HK'
    | 'zh-TW'
    | 'zu-ZA'
    | null;

  provider?: 'azure';
}

/**
 * Agent capture settings configuration.
 */
export interface CaptureSettings {
  /**
   * Whether to record the agent's calls. Set to false to disable recording.
   */
  recording_enabled?: boolean | null;
}

/**
 * Deepgram-specific transcriber configuration.
 */
export interface DeepgramTranscriber {
  /**
   * Keywords to help model pick up use-case specific words
   */
  keywords?: Array<string> | null;

  /**
   * Language for transcription (see Deepgram docs for supported languages)
   */
  language?:
    | 'bg'
    | 'ca'
    | 'cs'
    | 'da'
    | 'da-DK'
    | 'de'
    | 'de-CH'
    | 'el'
    | 'en'
    | 'en-AU'
    | 'en-GB'
    | 'en-IN'
    | 'en-NZ'
    | 'en-US'
    | 'es'
    | 'es-419'
    | 'es-LATAM'
    | 'et'
    | 'fi'
    | 'fr'
    | 'fr-CA'
    | 'hi'
    | 'hi-Latn'
    | 'hu'
    | 'id'
    | 'it'
    | 'ja'
    | 'ko'
    | 'ko-KR'
    | 'lt'
    | 'lv'
    | 'ms'
    | 'multi'
    | 'nl'
    | 'nl-BE'
    | 'no'
    | 'pl'
    | 'pt'
    | 'pt-BR'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'sv'
    | 'sv-SE'
    | 'ta'
    | 'taq'
    | 'th'
    | 'th-TH'
    | 'tr'
    | 'uk'
    | 'vi'
    | 'zh'
    | 'zh-CN'
    | 'zh-Hans'
    | 'zh-Hant'
    | 'zh-TW'
    | null;

  /**
   * Deepgram model to use (matches our YAML configuration)
   */
  model?:
    | 'nova-3:general'
    | 'nova-3:medical'
    | 'nova-2:general'
    | 'nova-2:phonecall'
    | 'nova-2:meeting'
    | 'nova-2:conversationalai'
    | null;

  provider?: 'deepgram';
}

/**
 * Agent denoising/noise cancellation settings for enhanced audio quality.
 */
export interface Denoising {
  /**
   * Enable enhanced noise cancellation for telephony/SIP calls with optimized phone
   * audio processing powered by Krisp.
   */
  telephony?: boolean;

  /**
   * Enable enhanced noise cancellation for web-based calls powered by Krisp
   * technology.
   */
  web?: boolean;
}

/**
 * Configuration for handling user inactivity during conversations
 */
export interface InactivitySettings {
  /**
   * Time in milliseconds of user inactivity before ending the call. Only used when
   * reminders are disabled (reminder_timeout_ms is null). Set to null to never
   * auto-end calls. Minimum 10000ms (10 seconds), maximum 600000ms (10 minutes).
   */
  end_call_timeout_ms?: number | null;

  /**
   * Maximum number of reminder messages to send when reminders are enabled. Only
   * used when reminder_timeout_ms is set.
   */
  reminder_max_count?: number;

  /**
   * Time in milliseconds to wait before sending a reminder when user is silent. Only
   * used when reminder_max_count > 0. Minimum 5000ms (5 seconds), maximum 300000ms
   * (5 minutes).
   */
  reminder_timeout_ms?: number | null;

  /**
   * Whether to reset the reminder count when the user becomes active again. When
   * true (default), the counter resets after user activity. When false, reminders
   * are cumulative throughout the conversation.
   */
  reset_on_activity?: boolean;
}

/**
 * Configuration for the agent's initial message when starting a conversation
 */
export interface InitialMessage {
  /**
   * Delay in milliseconds before the agent speaks the initial message, giving users
   * time to prepare. Valid range is [0, 5000]. Default is 0 (speak immediately).
   * Only applies when mode is 'fixed_message' or 'dynamic_message'.
   */
  delay_ms?: number;

  /**
   * Whether the user can interrupt the agent while it's speaking the initial
   * message. When false, the agent will complete its initial greeting before
   * listening. Default is false for a smoother start to conversations.
   */
  interruptible?: boolean;

  /**
   * The first message that the agent will say when starting a conversation. If not
   * set, the agent will wait for the user to speak first. Use this to set a friendly
   * greeting like 'Hello! How can I help you today?'. You can add variables in
   * double curly brackets, for example: {{customer_name}} or {{company_name}}.
   */
  message?: string | null;

  /**
   * How the agent should handle the initial message
   */
  mode?: 'fixed_message' | 'user_first' | 'dynamic_message';
}

/**
 * Configuration for how the agent handles user interruptions during conversation
 */
export interface InterruptSettings {
  /**
   * Whether users can interrupt the agent while it's speaking. When true, the agent
   * will stop speaking and listen when the user starts talking.
   */
  enabled?: boolean;

  /**
   * Minimum duration in seconds of continuous speech required to trigger an
   * interruption. Helps filter out brief noises.
   */
  min_speech_seconds?: number;

  /**
   * Minimum number of words the user must speak to trigger an interruption. Helps
   * prevent accidental interruptions from brief sounds.
   */
  min_words?: number;
}

/**
 * Configuration for agent response timing and conversation flow control
 */
export interface ResponseTiming {
  /**
   * Delay in seconds to wait after user stops speaking before the agent starts
   * responding. Prevents the agent from responding too quickly during natural pauses
   * in speech. Default is 0.1 seconds.
   */
  min_endpointing_delay_seconds?: number;
}

/**
 * Agent volume settings for audio output control.
 */
export interface Volume {
  /**
   * Whether to allow users to adjust volume through voice commands (e.g., 'speak
   * louder', 'speak quieter'). When enabled, adds volume control as an available
   * tool for the agent.
   */
  allow_adjustment?: boolean;

  /**
   * Volume level for telephony/SIP calls. Range [0.0, 1.0] where 0.0 is muted, 0.5
   * is normal volume, and 1.0 is maximum volume.
   */
  telephony?: number;

  /**
   * Volume level for web-based calls. Range [0.0, 1.0] where 0.0 is muted, 0.5 is
   * normal volume, and 1.0 is maximum volume.
   */
  web?: number;
}

export interface AgentListResponse {
  count: number;

  items: Array<AgentResponse>;
}

export interface AgentCreateParams {
  /**
   * Model configuration for the agent. Defines which AI model to use (OpenAI GPT-4,
   * Anthropic Claude, etc.) and its parameters like temperature and max tokens.
   */
  model:
    | AgentCreateParams.OpenAIModelSchema
    | AgentCreateParams.AzureOpenAIModelSchema
    | AgentCreateParams.AnthropicModelSchema;

  /**
   * Transcriber (speech-to-text) configuration for the agent. Defines which
   * transcriber provider to use (Azure, Deepgram) and language settings.
   */
  transcriber: AzureTranscriber | DeepgramTranscriber;

  /**
   * Voice (text-to-speech) configuration for the agent. Defines which provider and
   * voice to use (OpenAI, ElevenLabs, Cartesia, Azure) with voice-specific settings.
   */
  voice:
    | AgentCreateParams.AzureVoiceSchema
    | AgentCreateParams.CartesiaVoiceSchema
    | AgentCreateParams.ElevenLabsVoiceSchema;

  /**
   * Configuration for ambient background sounds during the conversation
   */
  ambient_sound?: AmbientSound;

  /**
   * Agent capture settings configuration.
   */
  capture_settings?: CaptureSettings | null;

  /**
   * Agent denoising/noise cancellation settings for enhanced audio quality.
   */
  denoising?: Denoising | null;

  /**
   * Configuration for handling user inactivity during conversations
   */
  inactivity_settings?: InactivitySettings;

  /**
   * Configuration for the agent's initial message when starting a conversation
   */
  initial_message?: InitialMessage;

  /**
   * Configuration for how the agent handles user interruptions during conversation
   */
  interrupt_settings?: InterruptSettings | null;

  /**
   * Maximum allowed length for the conversation in seconds. Default is 1200 seconds
   * (20 minutes) if not specified.
   */
  max_duration_seconds?: number | null;

  /**
   * Custom metadata for the agent. Store any additional key-value pairs that your
   * application needs. This data is not used by the agent itself but can be useful
   * for integrations, tracking, or custom business logic.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * The name of the agent. Only used for your own reference to identify and manage
   * agents. Not visible to end users during conversations.
   */
  name?: string | null;

  /**
   * Internal notes about the agent. These notes are for your team's reference only
   * and are not visible to end users. Use this to document agent configuration,
   * purpose, or any special instructions.
   */
  note?: string | null;

  /**
   * Configuration for agent response timing and conversation flow control
   */
  response_timing?: ResponseTiming;

  /**
   * List of tags to categorize and organize your agents. Tags help you filter and
   * find agents quickly. Examples: 'sales', 'support', 'lead-qualification',
   * 'appointment-booking'.
   */
  tags?: Array<string> | null;

  /**
   * Agent volume settings for audio output control.
   */
  volume?: Volume | null;
}

export namespace AgentCreateParams {
  /**
   * OpenAI-specific model configuration.
   */
  export interface OpenAIModelSchema {
    /**
     * The OpenAI model to use.
     */
    model:
      | 'gpt-5'
      | 'gpt-5-mini'
      | 'gpt-5-nano'
      | 'gpt-4.1'
      | 'gpt-4.1-mini'
      | 'gpt-4.1-nano'
      | 'gpt-4o'
      | 'gpt-4o-mini';

    /**
     * Max number of tokens the agent will be allowed to generate in each turn. Default
     * is 250.
     */
    max_tokens?: number | null;

    provider?: 'openai';

    /**
     * Temperature for the model. Default is 0 to leverage caching for lower latency.
     */
    temperature?: number | null;
  }

  /**
   * Azure OpenAI-specific model configuration.
   */
  export interface AzureOpenAIModelSchema {
    /**
     * The Azure OpenAI model to use.
     */
    model:
      | 'gpt-5-mini'
      | 'gpt-5-nano'
      | 'gpt-4.1-2025-04-14'
      | 'gpt-4.1-mini-2025-04-14'
      | 'gpt-4.1-nano-2025-04-14'
      | 'gpt-4o-2024-11-20'
      | 'gpt-4o-mini-2024-07-18';

    /**
     * Max number of tokens the agent will be allowed to generate in each turn. Default
     * is 250.
     */
    max_tokens?: number | null;

    provider?: 'azure_openai';

    /**
     * Temperature for the model. Default is 0 to leverage caching for lower latency.
     */
    temperature?: number | null;
  }

  /**
   * Anthropic-specific model configuration.
   */
  export interface AnthropicModelSchema {
    /**
     * The Anthropic model to use.
     */
    model: 'claude-sonnet-4-20250514' | 'claude-3-7-sonnet-20250219' | 'claude-3-5-haiku-20241022';

    /**
     * Max number of tokens the agent will be allowed to generate in each turn. Default
     * is 250.
     */
    max_tokens?: number | null;

    provider?: 'anthropic';

    /**
     * Temperature for the model. Default is 0 to leverage caching for lower latency.
     */
    temperature?: number | null;
  }

  /**
   * Azure-specific voice configuration.
   */
  export interface AzureVoiceSchema {
    /**
     * Azure voice ID
     */
    voice_id: string;

    provider?: 'azure';
  }

  /**
   * Cartesia-specific voice configuration.
   */
  export interface CartesiaVoiceSchema {
    /**
     * The provider-specific voice ID to use
     */
    voice_id: string;

    /**
     * Language to use (defaults to correct language for voiceId)
     */
    language?:
      | 'en'
      | 'es'
      | 'fr'
      | 'de'
      | 'pt'
      | 'zh'
      | 'ja'
      | 'hi'
      | 'it'
      | 'ko'
      | 'nl'
      | 'pl'
      | 'ru'
      | 'sv'
      | 'tr'
      | null;

    provider?: 'cartesia';
  }

  /**
   * ElevenLabs-specific voice configuration.
   */
  export interface ElevenLabsVoiceSchema {
    /**
     * ElevenLabs voice ID
     */
    voice_id: string;

    provider?: 'elevenlabs';

    /**
     * ElevenLabs-specific voice settings.
     */
    settings?: ElevenLabsVoiceSchema.Settings | null;
  }

  export namespace ElevenLabsVoiceSchema {
    /**
     * ElevenLabs-specific voice settings.
     */
    export interface Settings {
      /**
       * Voice similarity boost setting
       */
      similarity_boost?: number | null;

      /**
       * Voice speed setting
       */
      speed?: number | null;

      /**
       * Voice stability setting
       */
      stability?: number | null;

      /**
       * Voice style setting
       */
      style?: number | null;

      /**
       * Enable speaker boost
       */
      use_speaker_boost?: boolean | null;
    }
  }
}

export interface AgentRetrieveParams {
  account_id: string;
}

export interface AgentUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: Configuration for ambient background sounds during the conversation
   */
  ambient_sound?: AmbientSound | null;

  /**
   * Body param: Agent capture settings configuration.
   */
  capture_settings?: CaptureSettings | null;

  /**
   * Body param: Agent denoising/noise cancellation settings for enhanced audio
   * quality.
   */
  denoising?: Denoising | null;

  /**
   * Body param: Configuration for handling user inactivity during conversations
   */
  inactivity_settings?: InactivitySettings | null;

  /**
   * Body param: Configuration for the agent's initial message when starting a
   * conversation
   */
  initial_message?: InitialMessage | null;

  /**
   * Body param: Configuration for how the agent handles user interruptions during
   * conversation
   */
  interrupt_settings?: InterruptSettings | null;

  /**
   * Body param: Maximum allowed length for the conversation in seconds. Maximum is
   * 7200 seconds (2 hours).
   */
  max_duration_seconds?: number | null;

  /**
   * Body param: Custom metadata for the agent. Store any additional key-value pairs
   * that your application needs.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * Body param: Language model configuration for the agent. Partial updates allowed.
   */
  model?: { [key: string]: unknown } | null;

  /**
   * Body param: The name of the agent. Only used for your own reference.
   */
  name?: string | null;

  /**
   * Body param: Internal notes about the agent.
   */
  note?: string | null;

  /**
   * Body param: Configuration for agent response timing and conversation flow
   * control
   */
  response_timing?: ResponseTiming | null;

  /**
   * Body param: List of tags to categorize the agent.
   */
  tags?: Array<string> | null;

  /**
   * Body param: Transcriber (speech-to-text) configuration for the agent. Partial
   * updates allowed.
   */
  transcriber?: AzureTranscriber | DeepgramTranscriber | null;

  /**
   * Body param: Text-to-speech configuration for the agent. Partial updates allowed.
   */
  voice?: { [key: string]: unknown } | null;

  /**
   * Body param: Agent volume settings for audio output control.
   */
  volume?: Volume | null;
}

export interface AgentListParams {
  /**
   * Filter agents created on or after this datetime (ISO 8601, timezone-aware).
   */
  created_ge?: string | null;

  /**
   * Filter agents created after this datetime (ISO 8601, timezone-aware).
   */
  created_gt?: string | null;

  /**
   * Filter agents created on or before this datetime (ISO 8601, timezone-aware).
   */
  created_le?: string | null;

  /**
   * Filter agents created before this datetime (ISO 8601, timezone-aware).
   */
  created_lt?: string | null;

  /**
   * Filter by archived status. If omitted, archived are excluded by default.
   */
  is_archived?: boolean | null;

  limit?: number;

  /**
   * Filter agents modified on or after this datetime (ISO 8601, timezone-aware).
   */
  modified_ge?: string | null;

  /**
   * Filter agents modified after this datetime (ISO 8601, timezone-aware).
   */
  modified_gt?: string | null;

  /**
   * Filter agents modified on or before this datetime (ISO 8601, timezone-aware).
   */
  modified_le?: string | null;

  /**
   * Filter agents modified before this datetime (ISO 8601, timezone-aware).
   */
  modified_lt?: string | null;

  /**
   * Case-insensitive partial match on agent name.
   */
  name?: string | null;

  offset?: number;

  /**
   * Filter by tags. Returns agents that have ALL specified tags.
   */
  tags?: Array<string> | null;
}

export interface AgentArchiveParams {
  account_id: string;
}

export declare namespace Agents {
  export {
    type AgentResponse as AgentResponse,
    type AmbientSound as AmbientSound,
    type AzureTranscriber as AzureTranscriber,
    type CaptureSettings as CaptureSettings,
    type DeepgramTranscriber as DeepgramTranscriber,
    type Denoising as Denoising,
    type InactivitySettings as InactivitySettings,
    type InitialMessage as InitialMessage,
    type InterruptSettings as InterruptSettings,
    type ResponseTiming as ResponseTiming,
    type Volume as Volume,
    type AgentListResponse as AgentListResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentRetrieveParams as AgentRetrieveParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
    type AgentArchiveParams as AgentArchiveParams,
  };
}
