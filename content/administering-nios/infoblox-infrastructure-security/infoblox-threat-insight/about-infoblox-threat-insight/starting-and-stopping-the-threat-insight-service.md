---
title: "Starting and Stopping the Threat Insight Service"
source: "/space/nios90/1426555347"
pageId: "1426555347"
---
To start the Threat Insight service, you must have at least one RPZ license installed in your Grid (it can be installed on any Grid member) and the Threat Insight license installed on the Grid member on which you want to start the Threat Insight service. You can also stop the service when necessary.

To start or stop the Threat Insight service:

1. From the **Infoblox Grid** tab, select the **Grid** **Manager** tab -> **Services** tab, click the **Threat Insight** service link. Grid Manager displays only the member or members with the RPZ license installed. Select the member checkbox.
2. From the Toolbar, click **Start** to start the service or **Stop** to stop the service.

When you stop the Threat Insight service, the appliance does not detect or protect against non-signature-based DNS tunneling. In addition, reports that you generate might not include statistics related to DNS tunneling.

> **warning**
>
> ### Note
> 
> After you enable the Threat Insight service, you must restart DNS service for the insight to start working.
