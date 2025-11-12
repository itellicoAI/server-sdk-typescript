# Accounts

Types:

- <code><a href="./src/resources/accounts/accounts.ts">Account</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">ConversationDirection</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">ConversationStatus</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">ConversationType</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountListConversationsResponse</a></code>

Methods:

- <code title="get /v1/accounts/{account_id}/conversations">client.accounts.<a href="./src/resources/accounts/accounts.ts">listConversations</a>(accountID, { ...params }) -> AccountListConversationsResponse</code>
- <code title="get /v1/accounts/current">client.accounts.<a href="./src/resources/accounts/accounts.ts">retrieveCurrent</a>() -> Account</code>

## Subaccounts

Types:

- <code><a href="./src/resources/accounts/subaccounts.ts">SubaccountListResponse</a></code>

Methods:

- <code title="post /v1/accounts/{account_id}/subaccounts">client.accounts.subaccounts.<a href="./src/resources/accounts/subaccounts.ts">create</a>(accountID, { ...params }) -> Account</code>
- <code title="get /v1/accounts/{account_id}/subaccounts/{subaccount_id}">client.accounts.subaccounts.<a href="./src/resources/accounts/subaccounts.ts">retrieve</a>(subaccountID, { ...params }) -> Account</code>
- <code title="patch /v1/accounts/{account_id}/subaccounts/{subaccount_id}">client.accounts.subaccounts.<a href="./src/resources/accounts/subaccounts.ts">update</a>(subaccountID, { ...params }) -> Account</code>
- <code title="get /v1/accounts/{account_id}/subaccounts">client.accounts.subaccounts.<a href="./src/resources/accounts/subaccounts.ts">list</a>(accountID, { ...params }) -> SubaccountListResponse</code>

## Providers

Types:

- <code><a href="./src/resources/accounts/providers.ts">ModelCatalogProvider</a></code>
- <code><a href="./src/resources/accounts/providers.ts">ModelRange</a></code>
- <code><a href="./src/resources/accounts/providers.ts">ProviderListModelsResponse</a></code>
- <code><a href="./src/resources/accounts/providers.ts">ProviderListTranscribersResponse</a></code>
- <code><a href="./src/resources/accounts/providers.ts">ProviderListVoicesResponse</a></code>

Methods:

- <code title="get /v1/accounts/{account_id}/providers/models">client.accounts.providers.<a href="./src/resources/accounts/providers.ts">listModels</a>(accountID) -> ProviderListModelsResponse</code>
- <code title="get /v1/accounts/{account_id}/providers/transcribers">client.accounts.providers.<a href="./src/resources/accounts/providers.ts">listTranscribers</a>(accountID) -> ProviderListTranscribersResponse</code>
- <code title="get /v1/accounts/{account_id}/providers/voices">client.accounts.providers.<a href="./src/resources/accounts/providers.ts">listVoices</a>(accountID, { ...params }) -> ProviderListVoicesResponse</code>

## PhoneNumbers

Types:

- <code><a href="./src/resources/accounts/phone-numbers.ts">PhoneNumber</a></code>
- <code><a href="./src/resources/accounts/phone-numbers.ts">PhoneNumberListResponse</a></code>

Methods:

- <code title="post /v1/accounts/{account_id}/phone-numbers">client.accounts.phoneNumbers.<a href="./src/resources/accounts/phone-numbers.ts">create</a>(accountID, { ...params }) -> PhoneNumber</code>
- <code title="get /v1/accounts/{account_id}/phone-numbers/{phone_number_id}">client.accounts.phoneNumbers.<a href="./src/resources/accounts/phone-numbers.ts">retrieve</a>(phoneNumberID, { ...params }) -> PhoneNumber</code>
- <code title="patch /v1/accounts/{account_id}/phone-numbers/{phone_number_id}">client.accounts.phoneNumbers.<a href="./src/resources/accounts/phone-numbers.ts">update</a>(phoneNumberID, { ...params }) -> PhoneNumber</code>
- <code title="get /v1/accounts/{account_id}/phone-numbers">client.accounts.phoneNumbers.<a href="./src/resources/accounts/phone-numbers.ts">list</a>(accountID, { ...params }) -> PhoneNumberListResponse</code>
- <code title="delete /v1/accounts/{account_id}/phone-numbers/{phone_number_id}">client.accounts.phoneNumbers.<a href="./src/resources/accounts/phone-numbers.ts">delete</a>(phoneNumberID, { ...params }) -> void</code>

## SipTrunks

Types:

- <code><a href="./src/resources/accounts/sip-trunks.ts">SipTrunk</a></code>
- <code><a href="./src/resources/accounts/sip-trunks.ts">SipTrunkListResponse</a></code>

Methods:

- <code title="post /v1/accounts/{account_id}/sip-trunks">client.accounts.sipTrunks.<a href="./src/resources/accounts/sip-trunks.ts">create</a>(accountID, { ...params }) -> SipTrunk</code>
- <code title="get /v1/accounts/{account_id}/sip-trunks/{sip_trunk_id}">client.accounts.sipTrunks.<a href="./src/resources/accounts/sip-trunks.ts">retrieve</a>(sipTrunkID, { ...params }) -> SipTrunk</code>
- <code title="patch /v1/accounts/{account_id}/sip-trunks/{sip_trunk_id}">client.accounts.sipTrunks.<a href="./src/resources/accounts/sip-trunks.ts">update</a>(sipTrunkID, { ...params }) -> SipTrunk</code>
- <code title="get /v1/accounts/{account_id}/sip-trunks">client.accounts.sipTrunks.<a href="./src/resources/accounts/sip-trunks.ts">list</a>(accountID, { ...params }) -> SipTrunkListResponse</code>
- <code title="delete /v1/accounts/{account_id}/sip-trunks/{sip_trunk_id}">client.accounts.sipTrunks.<a href="./src/resources/accounts/sip-trunks.ts">delete</a>(sipTrunkID, { ...params }) -> void</code>

## Analytics

Types:

- <code><a href="./src/resources/accounts/analytics.ts">UsageGroupBy</a></code>
- <code><a href="./src/resources/accounts/analytics.ts">AnalyticsGetUsageResponse</a></code>

Methods:

- <code title="get /v1/accounts/{account_id}/analytics/usage">client.accounts.analytics.<a href="./src/resources/accounts/analytics.ts">getUsage</a>(accountID, { ...params }) -> AnalyticsGetUsageResponse</code>

# Agents

Types:

- <code><a href="./src/resources/agents.ts">AgentResponse</a></code>
- <code><a href="./src/resources/agents.ts">AmbientSound</a></code>
- <code><a href="./src/resources/agents.ts">AzureTranscriber</a></code>
- <code><a href="./src/resources/agents.ts">CaptureSettings</a></code>
- <code><a href="./src/resources/agents.ts">DeepgramTranscriber</a></code>
- <code><a href="./src/resources/agents.ts">Denoising</a></code>
- <code><a href="./src/resources/agents.ts">InactivitySettings</a></code>
- <code><a href="./src/resources/agents.ts">InitialMessage</a></code>
- <code><a href="./src/resources/agents.ts">InterruptSettings</a></code>
- <code><a href="./src/resources/agents.ts">ResponseTiming</a></code>
- <code><a href="./src/resources/agents.ts">Volume</a></code>
- <code><a href="./src/resources/agents.ts">AgentListResponse</a></code>

Methods:

- <code title="post /v1/accounts/{account_id}/agents">client.agents.<a href="./src/resources/agents.ts">create</a>(accountID, { ...params }) -> AgentResponse</code>
- <code title="get /v1/accounts/{account_id}/agents/{agent_id}">client.agents.<a href="./src/resources/agents.ts">retrieve</a>(agentID, { ...params }) -> AgentResponse</code>
- <code title="patch /v1/accounts/{account_id}/agents/{agent_id}">client.agents.<a href="./src/resources/agents.ts">update</a>(agentID, { ...params }) -> AgentResponse</code>
- <code title="get /v1/accounts/{account_id}/agents">client.agents.<a href="./src/resources/agents.ts">list</a>(accountID, { ...params }) -> AgentListResponse</code>
- <code title="delete /v1/accounts/{account_id}/agents/{agent_id}">client.agents.<a href="./src/resources/agents.ts">archive</a>(agentID, { ...params }) -> void</code>
