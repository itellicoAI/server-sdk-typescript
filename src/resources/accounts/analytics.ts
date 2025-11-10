// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AnalyticsAPI from './analytics';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Analytics extends APIResource {
  /**
   * Aggregate conversation usage for the specified account. Supports configurable
   * time ranges, bucket granularity, and optional groupings by agent, subaccount, or
   * conversation type.
   *
   * @example
   * ```ts
   * const response = await client.accounts.analytics.getUsage(
   *   'account_id',
   * );
   * ```
   */
  getUsage(
    accountID: string,
    query: AnalyticsGetUsageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsGetUsageResponse> {
    return this._client.get(path`/v1/accounts/${accountID}/analytics/usage`, { query, ...options });
  }
}

export type UsageGroupBy = 'agent' | 'subaccount' | 'type';

/**
 * Usage analytics response payload.
 */
export interface AnalyticsGetUsageResponse {
  /**
   * Metadata describing the usage response.
   */
  meta: AnalyticsGetUsageResponse.Meta;

  data?: Array<AnalyticsGetUsageResponse.Data>;
}

export namespace AnalyticsGetUsageResponse {
  /**
   * Metadata describing the usage response.
   */
  export interface Meta {
    account_id: string;

    end: string;

    granularity: 'hour' | 'day' | 'month';

    start: string;

    /**
     * Requested grouping dimensions.
     */
    group_by?: Array<AnalyticsAPI.UsageGroupBy>;

    /**
     * Timezone applied to bucket boundaries.
     */
    tz?: string;
  }

  /**
   * Time bucket containing one or more metric values.
   */
  export interface Data {
    /**
     * Bucket start timestamp in the requested timezone.
     */
    ts: string;

    /**
     * Metric values for this bucket.
     */
    values?: Array<Data.Value>;
  }

  export namespace Data {
    /**
     * Metric values aggregated for a single time bucket and dimension set.
     */
    export interface Value {
      /**
       * Completed conversations represented by this value.
       */
      conversations: number;

      /**
       * Total conversation seconds represented by this value.
       */
      seconds: number;

      /**
       * Grouping dimension key/value pairs for this value.
       */
      dimensions?: { [key: string]: string } | null;
    }
  }
}

export interface AnalyticsGetUsageParams {
  /**
   * End timestamp (ISO-8601). Defaults to now.
   */
  end?: string | null;

  /**
   * Bucket granularity for aggregation.
   */
  granularity?: 'hour' | 'day' | 'month';

  /**
   * Dimensions to break results by (comma separated or repeated query params).
   */
  group_by?: Array<UsageGroupBy> | null;

  /**
   * Maximum number of time buckets to return (default 500).
   */
  limit?: number | null;

  /**
   * Start timestamp (ISO-8601). Defaults to 30 days before `end`.
   */
  start?: string | null;

  /**
   * IANA timezone name used for bucket boundaries (default UTC).
   */
  tz?: string | null;
}

export declare namespace Analytics {
  export {
    type UsageGroupBy as UsageGroupBy,
    type AnalyticsGetUsageResponse as AnalyticsGetUsageResponse,
    type AnalyticsGetUsageParams as AnalyticsGetUsageParams,
  };
}
