---
title: "Updating Threat Insight Module and Allowlist Sets"
source: "/space/nios90/1426588112"
pageId: "1426588112"
---
Infoblox periodically releases Threat Insight module and allowlist sets. To ensure that you can import Threat Insight updates, you must have at least one Threat Insight license installed in the Grid. The Threat Insight module set consists of the insight application .jar file, which delivers changes and updates for DNS tunneling detection; and the allowlist set consists of updated trusted domains that carry legitimate DNS tunneling traffic. You can download updates for the module set and allowlist set independently depending on how often Infoblox rolls them out. The appliance displays the version numbers of the module set and allowlist set that your Grid is currently using. To view this information before downloading updates, see [Viewing Module and Allowlist Versions](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1426620995).

You can configure the appliance to automatically receive and apply the latest module set and/or allowlist set. When you define an automatic update policy, the appliance checks both the insight module and allowlist files and automatically downloads the files that have changed. You can also configure a manual update policy in which the appliance notifies you through the message banner when there are updates available. You can then decide whether you want to apply the updates to your Grid or not. For information about how to define the update policy, see [Defining the Threat Insight Update Policy](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1426555502). For information about how to perform manual updates, see [Manually Uploading Threat Insight Updates](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1426555531).

> **warning**
>
> ### Note
> 
> Only the Grid Master receives module set and allowlist set updates. Grid member receives these updates through standard Grid replication from the Grid Master. Module and allowlist data is only replicated to Grid members that have the Threat Insight service enabled (an RPZ license is required to start this service on the members). The appliance uses the port 443 (HTTPS) for downloading the module set and allowlist data updates.

Infoblox recommends that you configure the appliance to automatically receive module and allowlist updates, so your appliance receives the latest information periodically. If you prefer to manually upload updates to your Grid, ensure that you apply them frequently to receive the most updated information.
