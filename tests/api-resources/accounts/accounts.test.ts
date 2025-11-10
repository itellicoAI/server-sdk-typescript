// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Itellicoai from 'itellicoai';

const client = new Itellicoai({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accounts', () => {
  // Prism tests are disabled
  test.skip('listConversations', async () => {
    const responsePromise = client.accounts.listConversations('account_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listConversations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.listConversations(
        'account_id',
        {
          agent_id: 'agent_id',
          conversation_id: 'conversation_id',
          created_after: '2019-12-27T18:11:19.117Z',
          created_before: '2019-12-27T18:11:19.117Z',
          direction: 'inbound',
          status: 'in_progress',
          type: 'phone',
          updated_after: '2019-12-27T18:11:19.117Z',
          updated_before: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Itellicoai.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveCurrent', async () => {
    const responsePromise = client.accounts.retrieveCurrent();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
