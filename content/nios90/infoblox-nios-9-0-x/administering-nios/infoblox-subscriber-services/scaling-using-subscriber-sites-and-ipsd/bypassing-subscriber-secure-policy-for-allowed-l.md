---
title: "Bypassing Subscriber Secure Policy for Allowed Lists"
source: "/space/nios90/1471251310"
pageId: "1471251310"
---
You can choose to let subscriber specific allowed domains to take priority over category-based policies, security policies and blocklist entries. Subscriber specific blocked domains take priority over category-based policies.

To bypass subscriber secure policy for allowed lists:

- Navigate to the **Data Management** &gt; **DNS** &gt; **Subscriber Services Deployment** &gt; **Subscriber Sites** tab.
- Click the Edit icon to edit an existing subscriber site.
- In the *Subscriber Site Properties* wizard, go to the **General** &gt; **Advanced** tab.
  
  - **Enable Subscriber Secure Policy Bypass for Allowed list: **Select this checkbox to enable NIOS to generate a normal response for all domains in a subscriber's allow list. The allowed domains override RPZ rules if any (for example, NXDOMAIN), and categorize policy rules for the subscriber. This enables subscribers to override all policies for a specific domain. The subscribers allow list domain is cached in DNS Cache Acceleration and subsequent queries are answered by DNS Cache Acceleration.  
    Note that the vDCA ( virtual DNS Cache Acceleration) allows only 5% of its total number of subscribers to have allow block lists. The maximum number of allowed and blocked domains is 15. Domains in a subscriber’s blocked list take priority over category-based policies subject to RPZ rules. This ensures that the RPZ global allow list is always enforced. That is, a subscriber cannot override a domain in the global allow list.
  - **Set Global Allow List RPZ index range ( 0 to 30)**: Select this checkbox to specify an RPZ index value between 0 to 30. A domain is added to the RPZ specified as a passthru RPZ rule, and that domain is added as a global allowed list. This global allowed list is applicable to all subscribers.   
    You can use both the **Enable Subscriber Secure Policy Bypass for Allowed list** and the **Set Global Allow List RPZ index range** options at the same time. Or you can choose to use the options independently irrespective of whether **Enable Subscriber Secure Policy Bypass for Allowed list** is enabled or disabled.
  - **Global Content Filter Policy bit numbers (range: 0 to 127): **Select this checkbox and specify one or more policy bit numbers (separated by commas) to enable the global content filtering policy. When enabled, all DNS members of the subscriber site enforce the configured global content filtering policy on all DNS traffic, regardless of whether the queries originate from subscribers or non-subscribers. All DNS queries are categorized, and any domains matching the specified category bit numbers are blocked, redirected to the blocking server. The virtual DNS Cache Acceleration(vDCA) never caches the parental control blocked/redirected response.

**Note:** The Global Content Filtering policy is always enforced at Bind.

**Global Content Filter Policy takes precedence over Allowed list**:

i. If selected, the global content filtering policy is enforced even if the queried domain is included in the subscriber’s allowlist.

ii. If not selected, the subscriber’s allowlist overrides the global content filter policy, and the query is resolved normally.
