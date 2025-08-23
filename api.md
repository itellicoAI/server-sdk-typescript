# Accounts

Types:

- <code><a href="./src/resources/accounts/accounts.ts">Account</a></code>

Methods:

- <code title="get /v1/accounts/{account_id}">client.accounts.<a href="./src/resources/accounts/accounts.ts">retrieve</a>(accountID) -> Account</code>
- <code title="get /v1/accounts/me">client.accounts.<a href="./src/resources/accounts/accounts.ts">retrieveCurrent</a>() -> Account</code>

## Agents

Types:

- <code><a href="./src/resources/accounts/agents.ts">AgentResponse</a></code>
- <code><a href="./src/resources/accounts/agents.ts">AmbientSound</a></code>
- <code><a href="./src/resources/accounts/agents.ts">AnthropicModel</a></code>
- <code><a href="./src/resources/accounts/agents.ts">AzureStt</a></code>
- <code><a href="./src/resources/accounts/agents.ts">CheckIn</a></code>
- <code><a href="./src/resources/accounts/agents.ts">DeepgramStt</a></code>
- <code><a href="./src/resources/accounts/agents.ts">InitialMessage</a></code>
- <code><a href="./src/resources/accounts/agents.ts">InterruptSettings</a></code>
- <code><a href="./src/resources/accounts/agents.ts">Message</a></code>
- <code><a href="./src/resources/accounts/agents.ts">OpenAIModel</a></code>
- <code><a href="./src/resources/accounts/agents.ts">PronunciationRule</a></code>
- <code><a href="./src/resources/accounts/agents.ts">ResponseTiming</a></code>
- <code><a href="./src/resources/accounts/agents.ts">AgentListResponse</a></code>

Methods:

- <code title="post /v1/accounts/{account_id}/agents">client.accounts.agents.<a href="./src/resources/accounts/agents.ts">create</a>(accountID, { ...params }) -> AgentResponse</code>
- <code title="get /v1/accounts/{account_id}/agents/{agent_uuid}">client.accounts.agents.<a href="./src/resources/accounts/agents.ts">retrieve</a>(agentUuid, { ...params }) -> AgentResponse</code>
- <code title="patch /v1/accounts/{account_id}/agents/{agent_uuid}">client.accounts.agents.<a href="./src/resources/accounts/agents.ts">update</a>(agentUuid, { ...params }) -> AgentResponse</code>
- <code title="get /v1/accounts/{account_id}/agents">client.accounts.agents.<a href="./src/resources/accounts/agents.ts">list</a>(accountID, { ...params }) -> AgentListResponse</code>
- <code title="delete /v1/accounts/{account_id}/agents/{agent_uuid}">client.accounts.agents.<a href="./src/resources/accounts/agents.ts">delete</a>(agentUuid, { ...params }) -> void</code>
