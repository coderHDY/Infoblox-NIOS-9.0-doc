---
title: "9.0.4 - What's New"
source: "/space/nios90/1324220629"
pageId: "1324220629"
---
The following are the new features introduced in the NIOS 9.0.4 release.

## High Availability Support on Public Clouds for vNIOS (RFE-12151)

Starting from NIOS 9.0.4, you can deploy vNIOS appliances in high availability (HA) configurations on public clouds. The following vNIOS instances are supported for HA in public cloud: vNIOS for AWS, vNIOS for Microsoft Azure, vNIOS for Google Cloud. For more information, see the vNIOS documentation for the respective appliances at [*Virtual Appliances*](https://docs.infoblox.com/space/Appliances/35364966/Virtual+Appliances).

## Turning Off Upstream IPv6 Queries When Dual Mode is Configured (RFE-11941)

From NIOS 9.0.4 onwards, you can restrict upstream queries to either IPv4 or IPv6 addresses without impacting downstream queries when the configuration allows dual network interfaces for DNS services. You can do this using the newly introduced Member DNS Configuration &gt;** General** &gt; **Basic** &gt; **Upstream Address Family Preference** option. This feature works only if the **Allow recursion** checkbox is selected at the Grid or member level. For more information, see the [*Configuring Upstream Address Family Preference*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/configuring-dns-service-properties/configuring-upstream-address-family-preference) topic.

## Extended DNS Support (EDNS0) for Device ID (RFE-13672)

NIOS 9.0.4 introduces Extended DNS Support (EDNS0) for Device ID (Type 26946). Subscriber services will utilize the EDNS0 data to enhance security and content-based DNS request filtering.

## Unify Daylight Savings Across All Time Zones (RFE-13122)

Prior to NIOS 9.0.4, if the time zone of Grid Manager was UTC +2:00 Cairo (Egypt) and Daylight Saving Time (DST) had begun, NIOS was running one hour behind the actual time because it did not consider Egypt’s DST.

From NOS 9.0.4 onwards, NIOS will not use static UTC offsets such as (UTC+2:00). Instead, it will only have time zone names with DST changes. To achieve this, NIOS fetches the time zone list from the Ubuntu tzdata package and updates the same in the database.

After upgrading to NIOS 9.0.4, certain time zone names are mapped to different names. For the list of the changed time zone names, see the [*General Upgrade Guidelines*](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90&title=Upgrade%20Prerequisites&linkCreation=true&fromPageId=1324220629) topic. Note that some of the new time zone formats contain an underscore “_”  in the name.

## vDiscovery to Support Discovery Across Multiple AWS and Google Cloud Accounts (RFE-8680)

You can now configure a vDiscovery job on NIOS 9.0.4 or later to discover and synchronize data across multiple AWS or Google Cloud accounts across a single or across multiple regions. For more information, see the *vDiscovery on AWS VPCs* topic in the vNIOS for AWS and the *Performing Google Cloud vDiscovery* topic in the *vNIOS for Google Cloud* documentation at [*Virtual Appliances*](https://docs.infoblox.com/space/Appliances/35364966/Virtual+Appliances).

## Configuring the Network Insight Polling Frequency Modifier (RFE-13024)

NIOS 9.0.4 introduces the Polling Frequency Modifier field that allows you to specify the polling frequency to occur once every two days or twice a day. You can set values between 0.5 and 2 in this field. For more information, see the [*Configuring Discovery Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/configuring-discovery-properties) topic.

## Support DNS Authoritative with DNS Cache Acceleration Recursive (RFE-11029)

You can now configure the virtual DNS Cache Acceleration (vDCA) member to also be an authoritative member. When the virtual DNS Cache Acceleration member is configured to authoritative zones, those authoritative queries will not be cached in virtual DNS Cache Acceleration.

## TCP DNS Query Support for DNS Cache Acceleration (RFE-12976)

From NIOS 9.0.4 onwards, virtual DNS Cache Acceleration caches TCP queries and the cached queries are responded to from virtual DNS Cache Acceleration instead of BIND. The following new CLI commands are introduced that display the DNS Over TCP details such as the configuration settings, current status of DNS over TCP service, statistics related to DNS over TCP traffic, and so on. For more information see the [*show dns-over-tcp-dca-stats*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-dns-over-tcp-dca-stats),* *[*show dns-over-tcp-dca-status*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-dns-over-tcp-dca-status), [*show dns-over-tcp-dca-config*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-dns-over-tcp-dca-config), and [*set vdca-tcp-mode*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-vdca-tcp-mode) topics.

- show dns-over-tcp-dca-stats
- show dns-over-tcp-dca-status
- show dns-over-tcp-dca-config
- set vdca-tcp-mode

If you send a TCP DNS query load and features that push new configurations to the virtual DNS Cache Acceleration file (For example: enable/disable TCP support on vDCA, Toggling ADP First/DCA First and Toggling Single/multi TCP query in a session), a DNS force restart may cause the Grid member to go offline. To recover, it is recommended to perform a product reboot.

## TLS 1.3 Support (RFE-7727)

NIOS 9.0.4 supports TLS version 1.3 which provides the ability to enable or disable the TLS 1.3 protocol and the respective cipher suites in the CLI. TLS 1.3 will be enabled by default. However, Splunk does not support TLS version 1.3 and therefore NIOS reporting will not work when only TLS version 1.3 is enabled. A warning to this effect is displayed if you disable TLS version 1.2. If you have a reporting server in the NIOS Grid, you must ensure that TLS 1.2 is not disabled.

## Specifying the Source IP Address using WAPI (RFE-10242)

From NIOS version 9.0.4 onwards, the `query_fqdn_on_member` WAPI function allows you to specify the source IP address. In versions prior to NIOS 9.0.4, the source IP address was automatically selected (internally), typically defaulting to LAN1.

## Shared VPC Support in Google Cloud (RFE-10561)

From NIOS 9.0.4 onwards, if you want to discover shared resources (resources deployed in a shared Virtual Private Cloud) using vDiscovery, ensure that the host project(s) and its service project(s) run on the same member or virtual node. Also ensure that you discover the host project(s) first followed by the service project(s).

## vDiscovery Across Multiple AWS GovCloud Accounts (RFE-12012)

From NIOS 9.0.4 onwards, you can use vDiscovery to perform discovery across multiple AWS accounts for AWS GovCloud accounts.

## Integrating the Cloud Sync Service for AWS Route 53 DNS Synchronization (NIOS-94340)

From NIOS 9.0.4 onwards when configuring Route 53 integration, you can enable the multi-account synchronization option on an existing or a new sync group. The option enables NIOS to discover multiple AWS accounts in an AWS organization and to synchronize the DNS data using the Route 53 service. You can configure the option to synchronize DNS data from all or specific accounts (children) in an AWS organization (parent). For more information, see the *Configuring Amazon Route 53 Integration* topic in the *vNIOS for AWS* documentation at [*Virtual Appliances*](https://docs.infoblox.com/space/Appliances/35364966/Virtual+Appliances).

## vDiscovery Migration to the Cloud Sync Service in Google Cloud (NIOS-95597)

From NIOS 9.0.4 onwards, the Cloud Sync Service needs be started before starting Google Cloud vDiscovery.

## Synchronization of Azure DNS (RFE-11046)

In NIOS 9.0.4, you can use the Azure DNS synchronization feature to enable NIOS to span across Azure virtual networks to discover and integrate Azure DNS data with the NIOS database to get a unified console experience in NIOS. You can configure it to discover and synchronize data across multiple subscriptions of an Azure tenant. For more information, see the *Integrating Azure DNS with NIOS* in the *vNIOS Infoblox Installation Guide for Microsoft Azure* at [*Virtual Appliances*](https://docs.infoblox.com/space/Appliances/35364966/Virtual+Appliances)*.*

## Advanced DNS Protection and DNS Cache Acceleration Support on Mellanox Cards (RFE-12983)

The Advanced DNS Protection and DNS Cache Acceleration features are now supported on NVIDIA Mellanox 25 GbE cards.

## IB-FLEX Support on Trinzic X6 Series Appliances (NIOS-87387)

All of the Trinzic X6 Series appliances can now function as IB-FLEX appliances if the hardware type is set to IB-FLEX using the [*set hardware-type*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-hardware-type) CLI command. The DNS Cache Acceleration service runs on all Trinzic X6 Series appliances when used as IB-FLEX. However, Infoblox recommends to use DNS Cache Acceleration only on TE-2306 and TE-4106 appliances.

## Splunk Updates

NIOS 9.0.4 supports Splunk version 9.1.3. NIOS 9.0.4 contains a new dashboard called the jQuery Upgrade dashboard in the **Reporting** &gt; **Administration** tab that provides comprehensive instructions to identify affected dashboards and ensures their compatibility with jQuery 3.5 or higher.

## Accelerated Advanced DNS Protection Support for TE-906 Appliances

The TE-906 series of appliances now supports fastpath enabled services such as encrypted DNS (DoH/DoT), Advanced DNS Protection  (Threat Protection with acceleration), and DNSTAP.

## Search Functionality for the binding_state Field (RFE-9219)

From NIOS 9.0.4 onwards, the DHCP Lease object `binding_state` WAPI field is available for search.

## Removal of the Deprioritize caching of NXDOMAIN responses option

From NIOS 9.0.4 onwards, in the *Grid DNS Properties* or *Member DNS Properties* editor, **Security** tab &gt; **Bogus-query alerting and mitigation** section, the **Deprioritize caching of NXDOMAIN responses** option has been removed.

## Support for Virtual Advanced DNS Protection and Virtual DNS Cache Acceleration in vNIOS for AWS (RFE-8736)

vNIOS AWS instances running on NIOS 9.0.1 or later can be configured with virtual Advanced DNS Protection (vADP) to detect DNS threats and prevent possible network attacks.

vNIOS AWS instances running on 9.0.1 or later also support virtual DNS Cache Acceleration, which when enabled configure the instances as high-speed DNS caching-only name servers.

For more information on virtual Advanced DNS Protection, see the [*About Infoblox Advanced DNS Protection*](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90&title=About%20Infoblox%20Advanced%20DNS%20Protection&linkCreation=true&fromPageId=1324220629) topic in the NIOS documentation and for the list of supported vNIOS for AWS appliances, see the *Installation Guide for vNIOS for AWS* at [*Virtual Appliances*](https://docs.infoblox.com/space/Appliances/35364966/Virtual+Appliances).

## VLAN Support for NIOS Appliances (RFE-99636)

VLAN tagging is now supported on all Trinzic X5 and X6 Series appliances.
