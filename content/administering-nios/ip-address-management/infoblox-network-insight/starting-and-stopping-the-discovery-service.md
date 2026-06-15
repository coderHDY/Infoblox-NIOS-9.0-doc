---
title: "Starting and Stopping the Discovery Service"
source: "/space/nios90/280764199"
pageId: "280764199"
---
> **warning**
>
> ### Note
> 
> The discovery service can only be started on Grid members that are configured as the Consolidator or Probe (i.e. the Grid members with valid Discovery installed).

Each discovery member requires separate **Discovery** licenses, and must have a running discovery service. Consider the following before starting or stopping the discovery service:

- The Grid Master does not run the discovery service.
- Appliances running a Discovery license and the discovery service do not support HA pairs.
- Discovery Probe appliances appear as Grid members in Grid Manager.
- All appliances running discovery must have the Discovery license installed before starting the service.
- Appliances running discovery do not run core network services such as DNS and DHCP. Discovery appliances may also run the NTP service.
- If you expect to run a single appliance in the Grid for discovery, the appliance is designated as a Consolidator, and also performs Probe discovery operations.
- When you add a new Grid member with a Discovery license, the appliance is set automatically to the following:
  
  - A Consolidator, if no other discovery member exists in the Grid.
  - A Probe, when at least one discovery appliance exists in the Grid

> **warning**
>
> ### Note
> 
> When a member joins the Grid and applies a Discovery license for the first time, the admin user needs to log off and log in again to Grid Manager to see the discovery-enabled functionality.

For information about discovery configuration at the service level, see [*Configuring Discovery Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406248).

# Starting the Discovery Service

To start the discovery service on a licensed Consolidator or Probe appliance:

1. From the **Infoblox Grid** tab, select the** Grid** **Manager** tab, and click the **Services** tab.
2. Click the **Discovery** icon to display the list of members running the discovery service.
3. Select the discovery member or members for which you wish to start the service.
4. Expand the Toolbar and click **Start**.  
   The appliance asks you to verify that you want to proceed with starting the service for the selected member.
5. Click **Yes**.

# Stopping the Discovery Service

To stop the discovery service on the Consolidator or Probe appliance:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab, and click the **Services** tab.
2. Click the **Discovery** icon to display the list of members running the discovery service.
3. Select the discovery member or members for which you wish to stop the service.
4. Expand the Toolbar and click **Stop**.  
   The appliance asks you to verify that you want to proceed with stopping the service for the selected member.
5. Click **Yes**.
