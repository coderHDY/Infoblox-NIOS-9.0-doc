---
title: "Configuring Discovery for SDN and SD-WAN"
source: "/space/nios90/317424877"
pageId: "317424877"
---
# Overview of Discovery Configuration

Network Insight allows you to collect and manage data from SDN and SD-WAN environments. Currently, you can discover Cisco ACI, Cisco Meraki, Cisco Viptela, and Juniper Mist. For information about adding, configuring, discovering data, and configuring polling settings for these devices, see [*About Configuring SDN and SD-WAN Polling Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1468399949).

You can add specific SDN and SD-WAN entries in the discovery properties of Probe or Standalone members. You cannot configure these settings on Consolidators. Also, you can configure general SDN and SD-WAN polling properties in the Grid discovery settings.

To view discovery results for SDN and SD-WAN, go to **Data Management **> **Devices**. For information, see [*Viewing Discovered Devices and their Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280273310).

> **warning**
>
> ### Note
> 
> To ensure successful SDN and SD-WAN discovery, use an admin user account.

# Data Collection and Populated Information

SDN and SD-WAN data is collected via API calls from supported devices. This automated collection ensures that the most accurate and up-to-date information is retrieved from the network infrastructure.  
The following data is populated during discovery:

- Device model
- Software version
- Device type
- Serial numbers
- Interface table
- Route table
