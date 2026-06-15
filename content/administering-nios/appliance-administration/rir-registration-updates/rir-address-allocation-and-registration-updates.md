---
title: "RIR Address Allocation and Registration Updates"
source: "/space/nios90/280406820"
pageId: "280406820"
---
You can configure the Infoblox Grid to manage allocated IP address blocks that ISPs (Internet Service Providers) receive from their RIRs (Regional Internet Registries). An RIR is an entity that manages the Internet number resources, which include IP addresses and autonomous system numbers, within a specific region of the world. RIRs use SWIP (Share WHOIS Project) or RWhois (Referral WHOIS) servers to provide address allocation information for IP address blocks. Typically, an RIR determines the address blocks to be allocated for specific organizations (typically ISPs), while an ISP manages the allocated address blocks, associated organizations and corresponding RIR registrations. An organization can determine when to request for more address blocks from its RIR. Most ISPs manage multiple organizations and synchronize network address data with their RIRs every few months.

To leverage IPAM (IP Address Management) on the NIOS appliance, you can enable the Infoblox Grid to manage RIR allocated addresses and send registration updates to the RIPE (Réseaux IP Européens) database as often as you update RIR data on NIOS. RIPE is one of the five RIRs in the world that manages the allocation and registration of Internet number resources for Europe, Russia, the Middle East, and Central Asia.

> **warning**
>
> **Note**
> 
> The RIR registration update feature is not supported in a Multi-Grid configuration.

# About the RIPE Database

The RIPE database contains registration details of IP addresses and AS numbers originally allocated by the RIPE NCC (RIPE Network Coordination Center). The database contains information such as organizations that hold IP resources, where the allocations were made, and contact details for the networks. Organizations or individuals that hold the allocated address blocks are responsible for updating information in the database.

The NIOS appliance supports submitting registration and reassignment updates to the RIPE database, which can be accessed through the RIPE API interface or an email template. For more information, see [Configuring RIR Communication Settings](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280273846/Configuring+RIR+Registration+Updates#Configuring RIR Communication Settings).

> **warning**
>
> **Note**
> 
> Before the NIOS appliance sends registration updates to the RIPE database, it does not validate the data you submit. Therefore, if you enter invalid information that cannot be mapped to the RIPE database, your updates will fail. In addition, the NIOS appliance does not synchronize data from the RIPE database

# Requirements and Permissions

To manage RIR allocated addresses, organizations, and network utilization that contain RIR assignments, you must first enable support for RIR registration updates, and then configure the RIR communication method. Note that once you have enabled support for RIR registration updates, settings and fields that are relevant to this feature are enabled in Grid Manager. You do not need a special license to use this feature.

Only superusers can create, modify, and delete RIR organizations. Limited-access users can manage RIR allocated address blocks if they have the required permissions to the objects.

To view and manage RIR related data, admins must have permissions to the applicable resources. For example, to view RIR networks, admins must have read-only permission to the networks; and to edit them, admins must have read/write permission to them. For more information about admin permissions, see *[About Administrative Permissions](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424)*.
