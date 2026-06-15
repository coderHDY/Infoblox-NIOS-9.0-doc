---
title: "Configuring Infoblox Threat Insight"
source: "/space/nios90/1426620861"
pageId: "1426620861"
---
You must have at least one RPZ license installed in your Grid (it can be installed on any Grid member) and the Threat Insight license installed on the Grid member on which you want to start the Threat Insight service. You must also create a new RPZ and use it as the designated mitigation blocklist feed so the appliance can transfer all blocklisted domains to this feed.

NIOS continuously collects and analyzes statistics of incoming queries and responses, detects possible DNS tunneling activities, and updates the designated local RPZ with any detected tunneling domain. The configuration of the designated local RPZ allows for the detected domains to be blocked or logged. For supported appliance models for Infoblox Threat Insight, see [*Supported Appliances for Infoblox Threat Insight*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1426620821).

To configure Infoblox Threat Insight, complete the following:

1. Obtain and install valid RPZ and Threat Insight licenses on the appliance(s) that will be running Threat Insight. Threat Insight should only be run on members that are providing recursive DNS. To generate reports that contain statistics about DNS tunnelling, you must also configure a reporting appliance in the Grid.
2. Create and add a new local RPZ and use it as the designated mitigation blocklist feed so the appliance can transfer all blocklisted domains to this feed. Ensure that you configure an appropriate policy for this RPZ. To monitor the Threat Insight service before actually blocking domains, set **Policy** **Override** to **Log** **Only** **(Disabled).** When you are ready to block offending domains, set **Policy** **Override** to **None** **(Given)**.
3. Configure admin permissions so admin users can manage the Threat Insight service and insight related tasks. For information about how to configure admin permission, see [*About Administrative Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424).
4. Start the Threat Insight service on the appliance that has the **Threat Insight** license installed, as described in [*Starting and Stopping the Threat Insight Service*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1426555347).

> **warning**
>
> ### Note
> 
> The insight functionality only works on recursive servers and forwarding servers that use BIND as the DNS resolver; it does not function on DNS servers that are authoritative only.

After you set up Infoblox Threat Insight to mitigate DNS data exfiltration, you can do the following to manage it:

- View supported allowlisted domains for insight, as described in [Viewing the Insight Allowlist](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1426620903). Note that these domains are specific to insight only. They are not used in the anti-DNS tunneling DNS infrastructure protection rules.
- Manually add a custom domain to the insight allowlist, as described in [Adding Custom Allowlisted Domains](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1426555389).
- Review the blocklisted domains and make decisions about whether to move them to the insight allowlist so future DNS activities will not be blocked. For more information, see [Viewing Blocklisted Domains](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1426555426).
- Move a blocklisted domain to the insight allowlist, as described in [Moving Blocklisted Domains to the Allowlist](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1426620955).
- Monitor DNS tunneling activities and events using pre-defined reports and the syslog, as described in [Monitoring DNS Tunneling Activities](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1426522467).
