---
title: "Configuring DNS Overview"
source: "/space/nios90/280665929"
pageId: "280665929"
---
An overview of the DNS configuration process is outlined in the following diagram, illustrating the required steps for preparing a NIOS appliance for use:

*[drawio]*

# DNS Configuration Checklist

The following checklist includes the major steps for configuring DNS:

*DNS* *Configuration* *Checklist*

| Step | For more information |
| --- | --- |
| Decide if you want to configure DNS properties for the Grid and for individual members | [*Infoblox DNS Service*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280758905) |
| Decide if you want to create a new DNS view, in addition to the default DNS view | [*DNS Views*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763374) |
| Decide which type of DNS zone you want to configure | [*Configuring DNS Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280758860) |
| Add hosts and resource records | [*Configuring DNS Cache Acceleration*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/400786054) |
| Import zone data | [*Importing Zone Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280665197) |
| Enable DNS service on the member | [*Starting and Stopping the Discovery Service*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764199) |

# Configuring DNS - Best Practice

If the “error:couldn't create memory pool" error is displayed during an AWS vDiscobery job, it means that a restart of services has not been performed by clicking **Restart Services** on the Toolbar when the Restart Banner is displayed on top of Grid Manger. If a service restart is delayed for any reason, the error will not be resolved even after the restart. To resolve the error, run the `set purge_restart_objects` CLI command.
