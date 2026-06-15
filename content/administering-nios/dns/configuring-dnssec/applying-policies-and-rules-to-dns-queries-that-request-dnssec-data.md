---
title: "Applying Policies and Rules to DNS Queries that Request DNSSEC Data"
source: "/space/nios90/280664293"
pageId: "280664293"
---
You can configure the NIOS appliance to always apply RPZ policies, DNS blacklists, or NXDOMAIN rules to DNS queries, regardless of whether the queries request DNSSEC data. You can also configure the appliance to generate synthesized AAAA records for DNS queries that request DNSSEC data.

> **error**
>
> ### Warning
> 
> *When* *you* *enable* *this* *feature,* *NIOS* *applies* *the* *selected* *policies* *and* *rules* *even* *when* *it* *responds* *to* *DNS* *clients* *that* *support* *DNSSEC.*   
> *Note* *that* *responses* *to* *these* *clients* *may* *result* *in* *resolution* *failure.* *Infoblox* *recommends* *that* *you* *use* *caution* *when* *enabling* *this* *feature* *and* *DNSSEC* *validation* *at* *the* *same* *time.*

To enable this feature, complete the following:

1. **Grid:** From the **Data** **Management** tab, select the **DNS** tab. Expand the Toolbar and click **Grid** **DNS** **Properties**.  
   **Member**: From the **Data** **Management** tab, select the **DNS** tab -> **Members** tab -> *member* checkbox and click the Edit icon.  
   **DNS** **View**: From the **Data** **Management** tab, select the **DNS** tab -> **Zones** tab -> *default* *dns_view* and click the Edit icon.
2. In the editor, click **Toggle** **Expert** **Mode**, if the editor is in Basic mode, and then select the **DNSSEC** tab.
3. In the **Apply** **the** **selected** **policies/rules** **to** **queries** **requesting** **DNSSEC** **records** section, complete the following:
   
   - **Response** **Policy** **Zones** **(RPZ)** **policies**: Select this to apply RPZ policies to DNS queries that request DNSSEC data. You must install the RPZ license to view this checkbox. For more information, see [*About Infoblox DNS Firewall*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280402698).
   - **Blacklist** **rules**: Select this to apply blacklist rules to DNS queries that request DNSSEC data. For more information, see [*About Blacklists*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280665713).
   - **NXDOMAIN** **rules**: Select this to apply NXDOMAIN rules to DNS queries that request DNSSEC data. This checkbox is visible only if you install the Query Redirection license. For more information, see [*About NXDOMAIN Redirection*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280665798).
   - **DNS64** **Groups**: Select this to generate synthesized AAAA records for DNS queries that request DNSSEC data. For more information, see [*Enabling DNS64 Service*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280665605).  
     The member and the DNS views inherit settings from the Grid, by default. To override the settings, click **Override**. You can override settings at the member and DNS view levels. To retain the same settings as the Grid, click **Inherit** at the member and DNS view level.
4. Save the configuration.
