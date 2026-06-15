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
| Decide if you want to configure DNS properties for the Grid and for individual members | [*Infoblox DNS Service*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/infoblox-dns-service) |
| Decide if you want to create a new DNS view, in addition to the default DNS view | [*DNS Views*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/dns-views/about-dns-views) |
| Decide which type of DNS zone you want to configure | [*Configuring DNS Zones*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones) |
| Add hosts and resource records | [*Configuring DNS Cache Acceleration*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/configuring-dns-cache-acceleration) |
| Import zone data | [*Importing Zone Data*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/importing-zone-data) |
| Enable DNS service on the member | [*Starting and Stopping the Discovery Service*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/starting-and-stopping-the-discovery-service) |

# Configuring DNS - Best Practice

If the “error:couldn't create memory pool" error is displayed during an AWS vDiscobery job, it means that a restart of services has not been performed by clicking **Restart Services** on the Toolbar when the Restart Banner is displayed on top of Grid Manger. If a service restart is delayed for any reason, the error will not be resolved even after the restart. To resolve the error, run the `set purge_restart_objects` CLI command.
