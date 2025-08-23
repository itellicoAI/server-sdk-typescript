// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Agents extends APIResource {
  /**
   * Create a new AI agent with specified configuration for voice conversations.
   *
   * @example
   * ```ts
   * const agentResponse = await client.accounts.agents.create(
   *   'account_id',
   *   {
   *     model: {
   *       model: 'gpt-4o-mini-2024-07-18',
   *       provider: 'openai',
   *     },
   *     transcriber: { provider: 'deepgram' },
   *     voice: { voice_id: 'nova', provider: 'openai' },
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
   * const agentResponse = await client.accounts.agents.retrieve(
   *   'agent_uuid',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  retrieve(
    agentUuid: string,
    params: AgentRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AgentResponse> {
    const { account_id } = params;
    return this._client.get(path`/v1/accounts/${account_id}/agents/${agentUuid}`, options);
  }

  /**
   * Update an existing agent with partial data. Only fields provided in the request
   * will be updated.
   *
   * @example
   * ```ts
   * const agentResponse = await client.accounts.agents.update(
   *   'agent_uuid',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  update(agentUuid: string, params: AgentUpdateParams, options?: RequestOptions): APIPromise<AgentResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(path`/v1/accounts/${account_id}/agents/${agentUuid}`, { body, ...options });
  }

  /**
   * Retrieve a paginated list of AI agents for the specified account with filtering,
   * searching, and sorting capabilities.
   *
   * @example
   * ```ts
   * const agents = await client.accounts.agents.list(
   *   'account_id',
   * );
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
   * Permanently delete an agent. This action cannot be undone.
   *
   * @example
   * ```ts
   * await client.accounts.agents.delete('agent_uuid', {
   *   account_id: 'account_id',
   * });
   * ```
   */
  delete(agentUuid: string, params: AgentDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(path`/v1/accounts/${account_id}/agents/${agentUuid}`, {
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
   * Unique identifier for the account that owns this agent.
   */
  account_id: string;

  /**
   * Configuration for ambient background sounds during the conversation.
   */
  ambient_sound: AmbientSound;

  /**
   * Configuration for agent check-in behavior when user is unresponsive.
   */
  check_in: CheckIn;

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
   * Unique identifier for the agent. Use this ID to reference the agent in API calls
   * for updates, deletion, or starting conversations.
   */
  uuid: string;

  /**
   * Date-time of when the agent was created (ISO 8601 on output).
   */
  created?: string | null;

  /**
   * Configuration for how the agent handles user interruptions during conversation
   */
  interrupt_settings?: InterruptSettings | null;

  /**
   * The maximum conversation duration configured for this agent in seconds.
   */
  max_duration_seconds?: number | null;

  /**
   * Language model configuration for the agent.
   */
  model?: OpenAIModel | AnthropicModel | null;

  /**
   * Date-time of when the agent was last updated (ISO 8601 on output).
   */
  modified?: string | null;

  /**
   * Internal notes about the agent for your team's reference.
   */
  note?: string | null;

  /**
   * Custom pronunciation rules currently configured for the agent.
   */
  pronunciation_dictionary?: Array<PronunciationRule> | null;

  /**
   * List of tags assigned to this agent for categorization and filtering.
   */
  tags?: Array<string> | null;

  /**
   * Speech-to-text configuration for the agent.
   */
  transcriber?: AzureStt | DeepgramStt | null;
}

/**
 * Configuration for ambient background sounds during the conversation
 */
export interface AmbientSound {
  /**
   * Available ambient background sounds to enhance conversation realism
   */
  type?:
    | 'open_plan_office'
    | 'customer_service_center'
    | 'internet_cafe'
    | 'urban_street'
    | 'rural_outdoors'
    | 'ac_fan'
    | null;

  /**
   * Controls the volume of the ambient sound. Value ranging from [-1.0, 1.0]. Lower
   * values mean quieter ambient sound, while higher values mean louder ambient
   * sound. 0.0 is normal volume.
   */
  volume?: number;
}

/**
 * Anthropic-specific LLM configuration.
 */
export interface AnthropicModel {
  /**
   * The Anthropic model to use.
   */
  model:
    | 'claude-3-5-haiku-20241022'
    | 'claude-3-5-sonnet-20241022'
    | 'claude-3-haiku-20240307'
    | 'claude-3-sonnet-20240229';

  /**
   * Max number of tokens the agent will be allowed to generate in each turn. Default
   * is 250.
   */
  max_tokens?: number | null;

  /**
   * Messages to define a starting point for the conversation. This typically
   * includes the system prompt
   */
  messages?: Array<Message>;

  provider?: 'anthropic';

  /**
   * Temperature for the model. Default is 0 to leverage caching for lower latency.
   */
  temperature?: number | null;
}

/**
 * Azure-specific STT configuration.
 */
export interface AzureStt {
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
 * Configuration for agent check-in behavior when user is unresponsive
 */
export interface CheckIn {
  /**
   * Maximum number of check-in messages to send when the user is unresponsive. Set
   * to 0 to disable check-in messages entirely. Maximum value is 10.
   */
  max_count?: number;

  /**
   * Time in milliseconds to wait for user response before sending a check-in
   * message. This keeps the conversation flowing when users are unresponsive.
   * Minimum value is 5000ms (5 seconds), maximum is 300000ms (300 seconds).
   */
  timeout_ms?: number;
}

/**
 * Deepgram-specific STT configuration.
 */
export interface DeepgramStt {
  /**
   * Keyterm prompting to improve recall rate for important terms
   */
  keyterm?: Array<string> | null;

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
   * Deepgram model to use (see Deepgram docs for model details)
   */
  model?:
    | 'nova-3'
    | 'nova-3-general'
    | 'nova-3-medical'
    | 'nova-2'
    | 'nova-2-general'
    | 'nova-2-meeting'
    | 'nova-2-phonecall'
    | 'nova-2-finance'
    | 'nova-2-conversationalai'
    | 'nova-2-voicemail'
    | 'nova-2-video'
    | 'nova-2-medical'
    | 'nova-2-drivethru'
    | 'nova-2-automotive'
    | 'nova'
    | 'nova-general'
    | 'nova-phonecall'
    | 'nova-medical'
    | 'enhanced'
    | 'enhanced-general'
    | 'enhanced-meeting'
    | 'enhanced-phonecall'
    | 'enhanced-finance'
    | 'base'
    | 'base-general'
    | 'base-meeting'
    | 'base-phonecall'
    | 'base-finance'
    | 'base-conversationalai'
    | 'base-voicemail'
    | 'base-video'
    | null;

  provider?: 'deepgram';
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
  interruptions_enabled?: boolean;

  /**
   * The first message that the agent will say when starting a conversation. If not
   * set, the agent will wait for the user to speak first. Use this to set a friendly
   * greeting like 'Hello! How can I help you today?'
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

export interface Message {
  content: string;

  role: 'user' | 'agent' | 'system';
}

/**
 * OpenAI-specific LLM configuration.
 */
export interface OpenAIModel {
  /**
   * The OpenAI model to use.
   */
  model:
    | 'gpt-4.1-2025-04-14'
    | 'gpt-4.1-mini-2025-04-14'
    | 'gpt-4.1-nano-2025-04-14'
    | 'gpt-4o-2024-08-06'
    | 'gpt-4o-mini-2024-07-18';

  /**
   * Max number of tokens the agent will be allowed to generate in each turn. Default
   * is 250.
   */
  max_tokens?: number | null;

  /**
   * Messages to define a starting point for the conversation. This typically
   * includes the system prompt
   */
  messages?: Array<Message>;

  provider?: 'openai';

  /**
   * Temperature for the model. Default is 0 to leverage caching for lower latency.
   */
  temperature?: number | null;
}

/**
 * A single pronunciation rule for text-to-speech.
 */
export interface PronunciationRule {
  /**
   * The phonetic spelling or pronunciation guide (e.g., 'sequel', 'see ee oh')
   */
  replacement: string;

  /**
   * The word or phrase to replace (e.g., 'SQL', 'CEO')
   */
  target: string;
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

export interface AgentListResponse {
  count: number;

  items: Array<AgentListResponse.Item>;
}

export namespace AgentListResponse {
  /**
   * Simplified agent data for list views
   */
  export interface Item {
    name: string;

    created?: string;

    initial_message?: string | null;

    modified?: string;

    /**
     * List of tags assigned to this agent.
     */
    tags?: Array<string>;

    /**
     * Unique identifier for this object.
     */
    uuid?: string;
  }
}

export interface AgentCreateParams {
  /**
   * Language model configuration for the agent. Defines which AI model to use
   * (OpenAI GPT-4, Anthropic Claude, etc.) and its parameters like temperature and
   * max tokens.
   */
  model: OpenAIModel | AnthropicModel;

  /**
   * Speech-to-text configuration for the agent. Defines which STT provider to use
   * (Azure, Deepgram) and language settings.
   */
  transcriber: AzureStt | DeepgramStt;

  /**
   * Text-to-speech configuration for the agent. Defines which TTS provider and voice
   * to use (OpenAI, ElevenLabs, Cartesia, Azure) with voice-specific settings.
   */
  voice:
    | AgentCreateParams.AzureTtsSchema
    | AgentCreateParams.CartesiaTtsSchema
    | AgentCreateParams.ElevenLabsTtsSchema
    | AgentCreateParams.OpenAittsSchema;

  /**
   * Configuration for ambient background sounds during the conversation
   */
  ambient_sound?: AmbientSound;

  /**
   * Configuration for agent check-in behavior when user is unresponsive
   */
  check_in?: CheckIn;

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
   * Custom pronunciation rules for words or acronyms. The agent will use these
   * replacements when speaking to ensure proper pronunciation.
   */
  pronunciation_dictionary?: Array<PronunciationRule> | null;

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
}

export namespace AgentCreateParams {
  /**
   * Azure-specific TTS configuration.
   */
  export interface AzureTtsSchema {
    /**
     * Azure voice ID
     */
    voice_id: string;

    provider?: 'azure';

    /**
     * Speed multiplier for voice output
     */
    speed?: number | null;
  }

  /**
   * Cartesia-specific TTS configuration.
   */
  export interface CartesiaTtsSchema {
    /**
     * The provider-specific voice ID to use
     */
    voice_id: string;

    /**
     * Experimental controls for Cartesia voice generation.
     */
    experimental_controls?: CartesiaTtsSchema.ExperimentalControls | null;

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

  export namespace CartesiaTtsSchema {
    /**
     * Experimental controls for Cartesia voice generation.
     */
    export interface ExperimentalControls {
      /**
       * Emotion control with intensity level
       */
      emotion?:
        | 'anger:lowest'
        | 'anger:low'
        | 'anger:high'
        | 'anger:highest'
        | 'positivity:lowest'
        | 'positivity:low'
        | 'positivity:high'
        | 'positivity:highest'
        | 'surprise:lowest'
        | 'surprise:low'
        | 'surprise:high'
        | 'surprise:highest'
        | 'sadness:lowest'
        | 'sadness:low'
        | 'sadness:high'
        | 'sadness:highest'
        | 'curiosity:lowest'
        | 'curiosity:low'
        | 'curiosity:high'
        | 'curiosity:highest'
        | null;

      /**
       * Speed control - either named preset or numeric value between -1 and 1
       */
      speed?: 'slowest' | 'slow' | 'normal' | 'fast' | 'fastest' | number | null;
    }
  }

  /**
   * ElevenLabs-specific TTS configuration.
   */
  export interface ElevenLabsTtsSchema {
    /**
     * ElevenLabs voice ID
     */
    voice_id: string;

    /**
     * Optimize streaming latency setting
     */
    optimize_streaming_latency?: number | null;

    provider?: 'elevenlabs';

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

  /**
   * OpenAI-specific TTS configuration.
   */
  export interface OpenAittsSchema {
    /**
     * OpenAI voice ID (ash, ballad, coral, sage, verse only for realtime models)
     */
    voice_id:
      | 'alloy'
      | 'echo'
      | 'fable'
      | 'onyx'
      | 'nova'
      | 'shimmer'
      | 'ash'
      | 'ballad'
      | 'coral'
      | 'sage'
      | 'verse';

    /**
     * Prompt to control generated audio voice (not for tts-1/tts-1-hd)
     */
    instructions?: string | null;

    provider?: 'openai';

    /**
     * Speed multiplier for voice output
     */
    speed?: number | null;
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
   * Body param: Configuration for agent check-in behavior when user is unresponsive
   */
  check_in?: CheckIn | null;

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
   * Body param: Maximum allowed length for the conversation in seconds.
   */
  max_duration_seconds?: number | null;

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
   * Body param: Custom pronunciation rules for words or acronyms.
   */
  pronunciation_dictionary?: Array<PronunciationRule> | null;

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
   * Body param: Speech-to-text configuration for the agent. Partial updates allowed.
   */
  transcriber?: AzureStt | DeepgramStt | null;

  /**
   * Body param: Text-to-speech configuration for the agent. Partial updates allowed.
   */
  voice?: { [key: string]: unknown } | null;
}

export interface AgentListParams {
  /**
   * Filter agents created on or after this datetime (ISO 8601 format).
   */
  created_ge?: string | null;

  /**
   * Filter agents created after this datetime (ISO 8601 format).
   */
  created_gt?: string | null;

  /**
   * Filter agents created on or before this datetime (ISO 8601 format).
   */
  created_le?: string | null;

  /**
   * Filter agents created before this datetime (ISO 8601 format).
   */
  created_lt?: string | null;

  limit?: number;

  /**
   * Filter agents modified on or after this datetime (ISO 8601 format).
   */
  modified_ge?: string | null;

  /**
   * Filter agents modified after this datetime (ISO 8601 format).
   */
  modified_gt?: string | null;

  /**
   * Filter agents modified on or before this datetime (ISO 8601 format).
   */
  modified_le?: string | null;

  /**
   * Filter agents modified before this datetime (ISO 8601 format).
   */
  modified_lt?: string | null;

  /**
   * Case-insensitive partial match on agent name.
   */
  name?: string | null;

  offset?: number;

  ordering?: string | null;

  search?: string | null;

  /**
   * Filter by tags. Returns agents that have ALL specified tags.
   */
  tags?: Array<string> | null;
}

export interface AgentDeleteParams {
  account_id: string;
}

export declare namespace Agents {
  export {
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
