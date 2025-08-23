// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Itellicoai } from '../client';

export abstract class APIResource {
  protected _client: Itellicoai;

  constructor(client: Itellicoai) {
    this._client = client;
  }
}
