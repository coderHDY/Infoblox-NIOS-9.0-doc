---
title: "About Cloud API Service"
source: "/space/nios90/280274449"
pageId: "280274449"
---
The cloud API service provides the ability to automate management of IP addresses and DNS records so your cloud environment can take full advantage of IPAM, DNS, and DHCP capabilities in NIOS without the need for manual intervention. This service is supported for the following scenarios:

- Communication between the cloud adapter (acting as an API client) and the Cloud Platform Appliance or between Cloud Platform Appliances. This cloud API service accepts and processes a subset of the WAPI requests that are currently supported on the Grid Master either directly from an adapter or proxied through another Cloud Platform Appliance or from the Grid Master.
- Communication between the cloud adapter and the Grid Master, or between Cloud Platform Appliances and the Grid Master. This cloud API service processes requests received directly from the cloud adapter or processes requests received by other Cloud Platform Grid members.

The admin users that you use to send cloud API requests must have applicable access to the cloud API in order for the API requests to be processed. For information about admin groups, see [*Managing Admin Groups and Admin Roles*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280408487).

# Starting the Cloud API Service

To start the cloud API Service:

1. From the **Infoblox Grid** tab, select the **Services** tab -> *cloud_member* checkbox.
2. Click **Cloud** **API** on the top navigation bar, and then click **Start** from the Toolbar.

# Monitoring Cloud API Service

To monitor the status of the cloud API service, from the **Cloud** tab, select the **Members** tab -> *cloud_member* link. Grid Manager displays the service status, as described in [*Service Status*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662651).  
You can also monitor the cloud API service through the following:

- View the cloud API service through the Member service status, as described in* *[*Member Status*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270399)*.*
- Configure the appliance to receive SNMP traps for the cloud API service, as described in [*Monitoring with SNMP*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280401198).
- View *Cloud* *Statistics* widget on the Dashboard, as described in [*Cloud Statistics*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1457652408).
- Review event messages in the syslog, as described in [*Viewing the Syslog*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1380844786).
