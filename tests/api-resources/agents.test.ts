// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Itellicoai from 'itellicoai';

const client = new Itellicoai({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource agents', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.agents.create('account_id', {
      model: { model: 'gpt-5-mini', provider: 'azure_openai' },
      transcriber: { provider: 'deepgram' },
      voice: { voice_id: 'pMsXgVXv3BLzUgSXRplE', provider: 'elevenlabs' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.agents.create('account_id', {
      model: {
        model: 'gpt-5-mini',
        max_tokens: 1024,
        provider: 'azure_openai',
        temperature: 0.7,
      },
      transcriber: {
        keywords: ['string'],
        language: 'multi',
        model: 'nova-3:general',
        provider: 'deepgram',
      },
      voice: {
        voice_id: 'pMsXgVXv3BLzUgSXRplE',
        provider: 'elevenlabs',
        settings: {
          similarity_boost: 0.7,
          speed: 0.7,
          stability: 0.7,
          style: 0,
          use_speaker_boost: true,
        },
      },
      allow_auto_hangup: true,
      allow_caller_recording_opt_out: true,
      ambient_sound: { source: 'open_plan_office', volume: 0 },
      capture_settings: { recording_enabled: true },
      denoising: { telephony: true, web: true },
      inactivity_settings: {
        end_call_timeout_ms: 10000,
        reminder_max_count: 0,
        reminder_timeout_ms: 5000,
        reset_on_activity: true,
      },
      initial_message: {
        delay_ms: 0,
        interruptible: true,
        message: 'message',
        mode: 'fixed_message',
      },
      interrupt_settings: {
        enabled: true,
        min_speech_seconds: 0,
        min_words: 0,
      },
      max_duration_seconds: 10,
      metadata: { foo: 'bar' },
      name: 'Customer Support Agent',
      note: 'note',
      response_timing: { min_endpointing_delay_seconds: 0 },
      tags: ['string'],
      volume: {
        allow_adjustment: true,
        telephony: 0,
        web: 0,
      },
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.agents.retrieve('agent_id', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.agents.retrieve('agent_id', { account_id: 'account_id' });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.agents.update('agent_id', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.agents.update('agent_id', {
      account_id: 'account_id',
      allow_auto_hangup: true,
      allow_caller_recording_opt_out: true,
      ambient_sound: { source: 'open_plan_office', volume: 0 },
      capture_settings: { recording_enabled: true },
      denoising: { telephony: true, web: true },
      inactivity_settings: {
        end_call_timeout_ms: 10000,
        reminder_max_count: 0,
        reminder_timeout_ms: 5000,
        reset_on_activity: true,
      },
      initial_message: {
        delay_ms: 0,
        interruptible: true,
        message: 'message',
        mode: 'fixed_message',
      },
      interrupt_settings: {
        enabled: true,
        min_speech_seconds: 0,
        min_words: 0,
      },
      max_duration_seconds: 10,
      metadata: { foo: 'bar' },
      model: { foo: 'bar' },
      name: 'name',
      note: 'note',
      response_timing: { min_endpointing_delay_seconds: 0 },
      tags: ['string'],
      transcriber: { language: 'af-ZA', provider: 'azure' },
      voice: { foo: 'bar' },
      volume: {
        allow_adjustment: true,
        telephony: 0,
        web: 0,
      },
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.agents.list('account_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agents.list(
        'account_id',
        {
          created_ge: '2019-12-27T18:11:19.117Z',
          created_gt: '2019-12-27T18:11:19.117Z',
          created_le: '2019-12-27T18:11:19.117Z',
          created_lt: '2019-12-27T18:11:19.117Z',
          include_archived: true,
          is_archived: true,
          limit: 1,
          modified_ge: '2019-12-27T18:11:19.117Z',
          modified_gt: '2019-12-27T18:11:19.117Z',
          modified_le: '2019-12-27T18:11:19.117Z',
          modified_lt: '2019-12-27T18:11:19.117Z',
          name: 'name',
          offset: 0,
          tags: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Itellicoai.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('archive: only required params', async () => {
    const responsePromise = client.agents.archive('agent_id', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('archive: required and optional params', async () => {
    const response = await client.agents.archive('agent_id', { account_id: 'account_id' });
  });
});
