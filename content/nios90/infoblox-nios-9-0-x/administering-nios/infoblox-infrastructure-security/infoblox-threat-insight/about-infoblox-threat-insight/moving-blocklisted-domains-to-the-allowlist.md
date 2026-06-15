---
title: "Moving Blocklisted Domains to the Allowlist"
source: "/space/nios90/1426620955"
pageId: "1426620955"
---
When the appliance detects an offending domain for possible DNS tunneling, it responds according to the policy defined in the mitigation blocklist RPZ and adds the domain to the blocklist RPZ feed. You can view all blocklisted domains and turn those you deem trustworthy into trusted domains by moving them to the insight allowlist. Note that once you move a blocklisted domain to the allowlist, you cannot reverse the action.

To move a blocklisted domain to the insight allowlist:

1. From the **Data** **Management** tab, select the **Data** **Management** tab -&gt; **DNS** tab -&gt; **Response** **Policy** **Zones** tab.
2. Select a blocklisted domain and click the Action icon next to a domain and select **Move** **to** **Allowlist**.

The appliance removes the selected domain from the blocklist and adds it to the insight allowlist. You can click **Go** **to** **Insight** **Allowlist** **View** to verify that the domain has been successfully moved.
