---
title: "Configuring a Local RPZ as the Mitigation Blocklist Feed"
source: "/space/nios90/1426588029"
pageId: "1426588029"
---
For the Threat Insight service to function properly and for NIOS to properly report detected backlisted domains, you must create and designate local RPZs as the mitigation for the Grid. You can add any Response Policy Zones to the list of RPZs from different Network and DNS Views. When a domain is detected as malicious, NIOS will update all RPZs in the list. If you assign an existing RPZ that is used for other purposes as the mitigation blocklist feed, you may experience the following:

- Existing RPZ hits are reported as hits detected by the insight after an upgrade.
- If you manually add rules to the RPZ, all RPZ hits are reported as hits detected by the insight, regardless of whether they match the manually created rules or are detected through the Threat Insight service.

Infoblox recommends that you run the Threat Insight service for a limited time to monitor and preview what has been detected before actually blocking domains. To do so, set **Policy** **Override** to **Log** **Only** **(Disabled)** when you create the RPZ so you can monitor blocklisted domains without actually blocking them.

> **warning**
>
> ### Note
> 
> You can designate only one local RPZ as the Grid-wide mitigation blocklist feed.

To create and designate a local RPZ as the blocklist feed:

1. Create a local RPZ by completing the procedure described in [*Configuring Local RPZs*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/configuring-local-rpzs).
   
   Note to monitor the Threat Insight service without blocking domains, set **Policy** **Override** to **Log** **Only** **(Disabled).** When you are ready to block blocklisted domains, set **Policy** **Override** to **None** **(Given)**.
2. From the **Data** **Management** tab, select the **Threat Insight** tab -&gt; **Allowlist** tab, click the **Grid** **Threat Insight** **Properties** from the Toolbar.
3. In the *Grid* *Threat Insight* *Properties* editor, click the DNS Threat Insight tab, and complete the following:
   
   - Click the Add icon to open the *Zone Selector* dialog box and select the RPZs. You must configure at least one local RPZ. To remove an RPZ, select it from the table and click **Delete**.
   - Save the configuration.

> **warning**
>
> ### Note
> 
> You cannot delete an RPZ that is used as the mitigation blocklist feed until you remove or clear it from the *Grid Threat Insight Properties* editor.
