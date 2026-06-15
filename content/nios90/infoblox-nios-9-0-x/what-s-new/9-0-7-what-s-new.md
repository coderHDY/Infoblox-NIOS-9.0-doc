---
title: "9.0.7 - What's New"
source: "/space/nios90/1579090121"
pageId: "1579090121"
---
The following are the new features introduced in the NIOS 9.0.7 release.

# Change from “Grid” to “Infoblox Grid”

Starting from NIOS 9.0.7, with the introduction of the Infoblox trademark, the UI label has been changed from “Grid” to “Infoblox Grid” on a few tabs and screen names in Grid Manager. They are:

- On the Login page, Grid Manager is now **Infoblox Grid Manager**.
- The Grid tab is now the **Infoblox Grid tab**.
- The Grid &gt; Status &gt; Grid Status is now **Infoblox Grid **&gt; **Status** &gt; **Infoblox Grid Status.**

# Provide Additional Multi-Grid Manager Visibility to Sub Grid DNS, DHCP, and IPAM Objects (RFE-14090)

NIOS 9.0.7 offers additional Multi-Grid Manager visibility to sub Grid DHCP, DNS, and IPAM objects in Multi-Grid Manager (similar to NIOS Grid Manager).

For detailed information about accessing DNS, DHCP, and IPAM views and objects, see the Multi-Grid Manager Administrator Guide at [*https://docs.infoblox.com*](https://docs.infoblox.com).

# Support for SVCB and HTTPS Records (TYPE64 and TYPE65) (RFE-12531)

NIOS 9.0.7 supports SVCB and HTTPS records. An SVCB (Service Binding) record is a DNS resource record that maps a domain name to a service endpoint, while an HTTPS record is a special case of the SVCB record used for HTTPS-enabled web servers. With this support, NIOS now provides a standardized way to provide CNAME-like functionality for a zone.

You can also synchronize SVCB and HTTPS resource records (TYPE64 and TYPE65) from sub Grids to the Multi-Grid Manager.

For more information, see the [*Managing SVCB and HTTPS Records*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-resource-records/managing-resource-records/managing-svcb-and-https-records) topic in the NIOS online documentation.

# FIPS and CC-NIAP Support

NIOS 9.0.7 is supported in the FIPS and CC-NIAP (National Information Assurance Partnership) mode. However, FIPS 140-3 and Common Criteria certifications are currently pending. For detailed information, see the Infoblox NIOS FIPS Compliance documentation at [*https://docs.infoblox.com*](https://docs.infoblox.com).

# Filtering Options for vDiscovery in vNIOS for Microsoft Azure

Starting from NIOS 9.0.7, you can configure vDiscovery jobs for Microsoft Azure using CIDR-based filters to limit vDiscovery to only configured networks and to skip vDiscovery from excluded networks. For more information, see the [*Configuring vDiscovery Jobs*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/configuring-vdiscovery-jobs) topic in the vNIOS for Azure online documentation at [*https://docs.infoblox.com/space/Appliances/35364966/Virtual+Appliances*](https://docs.infoblox.com/space/Appliances/35364966/Virtual+Appliances).

# Hosting Files in the Infoblox Portal

From NIOS 9.0.7 onwards, Threat Insight and Advanced DNS Protection (ADP) files are securely downloaded from the Infoblox Portal ([http://csp.infoblox.com](http://csp.infoblox.com) ). This works only if the NIOS on-prem Grid member has connectivity to the Infoblox Portal. If the portal access is not available, the system will automatically switch to the earlier download location ([*ts.infoblox.com*](http://ts.infoblox.com)).

# Retrieving Data Using the sapwalk2 CLI Command

NIOS 9.0.7 introduces the `sapwalk2` CLI command which is a diagnostic CLI tool available on Network Insight probes. It is useful for retrieving detailed service-level data from SNMP-enabled network devices. The `sapwalk2` CLI command is available in the serial console of Network Insight Probes and requires a Discovery license.

For more information about the sapwalk2 CLI command, see the [*sapwalk2*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/sapwalk2) topic in the NIOS online documentation.

# Guardrails for NIOS Query Logging

NIOS 9.0.7 adds new indicators and warnings for DNS query and response logging. When logging is enabled in Grid Manager, a click-through warning alerts users that this may cause outages and recommends using Query Capture or DNSTAP instead. Grid members that have logging enabled appear in yellow in the **Detailed Status** panel under **DNS Query Logging**. For such members, a banner is also displayed cautioning against this configuration. NIOS provides a CLI command to 'hide' the banner and warning for users who want to disable it without affecting other system-wide banners.

For more information, see the [*DNS Query Logging*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/member-status/dns-query-logging) topic in the NIOS online documentation.

New CLI commands `set query_logging_warnings` and `show query_logging_warnings` have been introduced to enable or disable query logging warning messages. For more information about the command, see the [*set query_logging_warnings*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-query-logging-warnings) topic in the NIOS online documentation.

# Global Content Filtering on Subscriber Sites

NIOS 9.0.7 introduces the new **Global Content Filter Policy bit numbers (range: 0 to 127)** checkbox that allows you to enable the global content filtering policy for subscriber sites. When enabled, all DNS members of the subscriber site enforce the configured global content filtering policy on all DNS traffic, regardless of whether the queries originate from subscribers or non-subscribers.

For more information, see the [*Bypassing Subscriber Secure Policy for Allowed Lists*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-subscriber-services/scaling-using-subscriber-sites-and-ipsd/bypassing-subscriber-secure-policy-for-allowed-l) topic in the NIOS online documentation.

# New Reports and Dashboards for DNS over HTTPS (DoH) and DNS over TLS (DoT) Statistics

The following reports and dashboards have been introduced in NIOS 9.0.7 to provide visibility on the DNS over HTTPS and DNS over TLS data:

**New Reports**

- DoT Query Rate by Server
- DoH Query Rate by Server
- DoT Daily Peak Hour Query Rate by Member
- DoH Daily Peak Hour Query Rate by Member
- DoT Daily Query Rate by Member
- DoH Daily Query Rate by Member

**New Dashboards**

- DNS over TLS Statistics
- DNS over HTTPS Statistics

# DNS Cache Acceleration Support for DSCP

Starting from NIOS 9.0.7, DSCP is supported on all physical and virtual NIOS appliances even when DNS Cache Acceleration is enabled. The only models in which DSCP is not supported are TE-815, TE-825, TE-926.

# IPv6 Support in TACACS+

NIOS 9.0.7 TACACS+ authentication supports IPv6. You can now enter IPv6 addresses in the **Server Name or IP address** field of the Add TACACS+ Service wizard. For more information, see the [*Authenticating Admin Accounts Using TACACS+*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admin-accounts-using-tacacs) topic in the NIOS online documentation.

# Logging of Violations over TCP

NIOS 9.0.7 introduces the `set dnstap_violation_over_tcp `CLI command to enable the logging of violations over TCP for parental control and response policy zones for subscribers through dnstap, alongside DNS queries and/or responses. This feature can be enabled on Grid Masters or Grid members only through the CLI command. For more information, see the [*set dnstap_violation_over_tcp*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-dnstap-violation-over-tcp) topic in the NIOS online documentation.

# vNIOS Support on OpenShift

Starting from NIOS 9.0.7, vNIOS X6 and X5 appliances and IB-FLEX appliances are supported on OpenShift 4.1.8.x.

# Support for Secure SHA Encryption Algorithms for NTP (RFE-12836)

From NIOS 9.0.7 onwards, the following encryption algorithms are supported for NTP:

SHA-224, SHA-256, SHA-384, SHA-512, SHA-512/224, SHA-512/256

# vNIOS Support for Intel Ethernet E810 Network Adapters

Starting from NIOS 9.0.7, vNIOS appliances support Intel Ethernet E810 network adapters.
