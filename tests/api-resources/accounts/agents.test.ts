// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Itellicoai from 'itellicoai';

const client = new Itellicoai({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource agents', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.accounts.agents.create('account_id', {
      model: { model: 'gpt-4o-mini-2024-07-18', provider: 'openai' },
      transcriber: { provider: 'deepgram' },
      voice: { voice_id: 'nova', provider: 'openai' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.accounts.agents.create('account_id', {
      model: {
        model: 'gpt-4o-mini-2024-07-18',
        max_tokens: 50,
        messages: [
          {
            content: 'You are a helpful customer support agent. Be friendly and professional.',
            role: 'system',
          },
        ],
        provider: 'openai',
        temperature: 0,
      },
      transcriber: {
        keyterm: ['string'],
        keywords: ['string'],
        language: 'bg',
        model: 'nova-3',
        provider: 'deepgram',
      },
      voice: { voice_id: 'nova', instructions: 'instructions', provider: 'openai', speed: 0.25 },
      ambient_sound: { type: 'open_plan_office', volume: -1 },
      check_in: { max_count: 0, timeout_ms: 5000 },
      initial_message: {
        delay_ms: 500,
        interruptions_enabled: false,
        message: 'Hello! Thank you for calling. How can I assist you today?',
        mode: 'fixed_message',
      },
      interrupt_settings: { enabled: true, min_speech_seconds: 0, min_words: 0 },
      max_duration_seconds: 10,
      name: 'Customer Support Agent',
      note: 'note',
      pronunciation_dictionary: [{ replacement: 'replacement', target: 'target' }],
      response_timing: { min_endpointing_delay_seconds: 0 },
      tags: ['string'],
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.accounts.agents.retrieve('agent_uuid', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.accounts.agents.retrieve('agent_uuid', { account_id: 'account_id' });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.accounts.agents.update('agent_uuid', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.accounts.agents.update('agent_uuid', {
      account_id: 'account_id',
      ambient_sound: { type: 'open_plan_office', volume: -1 },
      check_in: { max_count: 0, timeout_ms: 5000 },
      initial_message: {
        delay_ms: 500,
        interruptions_enabled: false,
        message: 'Hello! Thank you for calling. How can I assist you today?',
        mode: 'fixed_message',
      },
      interrupt_settings: { enabled: true, min_speech_seconds: 0, min_words: 0 },
      max_duration_seconds: 10,
      model: { foo: 'bar' },
      name: 'name',
      note: 'note',
      pronunciation_dictionary: [{ replacement: 'replacement', target: 'target' }],
      response_timing: { min_endpointing_delay_seconds: 0 },
      tags: ['string'],
      transcriber: { language: 'af-ZA', provider: 'azure' },
      voice: { foo: 'bar' },
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.accounts.agents.list('account_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.agents.list(
        'account_id',
        {
          created_ge: 'created_ge',
          created_gt: 'created_gt',
          created_le: 'created_le',
          created_lt: 'created_lt',
          limit: 1,
          modified_ge: 'modified_ge',
          modified_gt: 'modified_gt',
          modified_le: 'modified_le',
          modified_lt: 'modified_lt',
          name: 'name',
          offset: 0,
          ordering: 'ordering',
          search: 'search',
          tags: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Itellicoai.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.accounts.agents.delete('agent_uuid', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.accounts.agents.delete('agent_uuid', { account_id: 'account_id' });
  });
});
