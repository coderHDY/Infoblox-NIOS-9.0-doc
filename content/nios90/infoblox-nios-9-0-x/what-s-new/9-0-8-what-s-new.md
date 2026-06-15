---
title: "9.0.8 - What's New"
source: "/space/nios90/1857061009"
pageId: "1857061009"
---
The following are the new features introduced in the NIOS 9.0.8 release.

# Renaming Advanced DNS Protection and Threat Protection to DNS Infrastructure Protection

From NIOS 9.0.8 onwards, Advanced DNS Protection and Threat Protection have been renamed to  
DNS Infrastructure Protection.

# Changing the Default Setting of Applying New DHCP Filters

From NIOS 9.0.8 onwards, you can enable or disable the **Apply this filter as a global DHCP class**  
**checkbox** in the *Add IPv4 Option Filter/Add IPv6 Option Filter* wizard by running the newly introduced `set default_global_dhcp_class_filter` CLI command. This command enables or disables the checkbox depending on the value you configure. You can view the setting of the **Apply this filter as a global DHCP class** checkbox (enabled or disabled) by running the newly introduced `show default_global_dhcp_class_filter` CLI command.

For more information, see the [Defining Option Filters](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/configuring-option-filters/defining-option-filters) , [set default_global_dhcp_class_filter](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-default-global-dhcp-class-filter),  
and the [show default_global_dhcp_class_filter](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-default-global-dhcp-class-filter) topics in the NIOS online documentation.

# DNS Forwarding Proxy in Detect-Only Mode

NIOS 9.0.8 introduces a new mode called the detect-only mode in which recursive DNS queries are  
resolved by the BIND server and not by the DNS Forwarding Proxy server. However, the query  
responses are sent to the DNS Forwarding Proxy server for further processing.

For more information, see the [DNS Forwarding Proxy Modes](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/using-forwarders/forwarding-recursive-queries-to-infoblox-threat-/dns-forwarding-proxy-modes) topic in the NIOS online  
documentation.

# Support for New SHA and AES Authentication Algorithms

NIOS 9.0.8 introduces support for the following new authentication algorithms for SNMPv3 as per  
RFC 7860: SHA-224, SHA-224, SHA-384, SHA-512, AES-192, and AES-256.

For SNMPv3 configurations using the AES-192 or AES-256 privacy protocols, Infoblox recommends  
NET-SNMP 5.9 or later, as earlier versions do not support these protocols. For more information, see  
the [Configuring SNMPv3 Users](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-with-snmp/configuring-snmp/configuring-snmpv3-users) topic in the NIOS online documentation.

# Generating an SNMP Trap or an Email Alert for Oversubscribed IP Address Allocation

From NIOS 9.0.8 onwards, when a DHCP Grid member failover association exceeds the threshold for  
the total number of supported IP addresses, NIOS sends an alert through SNMP and e-mail. This  
provides you the opportunity to remediate before service impact. You can configure the threshold and also choose to silence the alert if required.

The newly introduced **IPv4 DHCP Failover Association Utilization** column in the **Data Management,**  
**DHCP &gt; Members &gt; Members/Servers** screen displays the number of IP addresses associated with  
failover associations for each member and determines the utilization percentage based on the  
member’s hardware limit. When a DHCP member’s allocated IP count for failover associations exceeds 90% of the utilization percentage, the following events take place:

- Grid Manager displays a message for that member with the utilization details.
- An SNMP trap dhcpMemberCapacityExceeded is generated.
- An email is sent to the configured recipients.
- The event is recorded in the audit log with a first-seen timestamp.

For more information, see the [Monitoring IPv4 DHCP Failover Association Utilization](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-failover/managing-failover-associations/monitoring-failover-associations/monitoring-ipv4-dhcp-failover-association-utiliz) topic in the  
NIOS online documentation.

# SNMP/Email Alert for DBWrite Usage

NIOS 9.0.8 introduces an alert when the database write (DBWrite) usage for a Grid member crosses a certain threshold value, that can be configured by using the `set thresholdtrap` CLI command This helps in proactively dealing with high DBWrite usage issues and minimzing the impact on the Grid member. For more information, see the [DBWrite Usage](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/member-status/dbwrite-usage) topic in the NIOS online documentation.

# Infoblox vNIOS for Proxmox

Infoblox vNIOS for Proxmox is a virtual appliance designed for deployment on Proxmox virtual  
environment (VE), a Debian Linux based open-source platform that supports deployment of virtual  
machines and containers.

The NIOS virtual appliance for Proxmox functions as a hardware virtual machine guest on the Linux  
system. It provides an integrated, secure, and easy-to-manage DNS, DHCP, IPAM (IP address  
management), DNS Infrastructure Protection, DNS Cache Acceleration, and reporting services.  
Additionally, it provides a framework for integrating all components of the modular Infoblox solution.  
You can deploy a vNIOS for Proxmox instance as a Grid Master, Grid Master Candidate, a Grid  
member, a reporting server, in a high availability (HA) pair, and in a hybrid HA pair.

For detailed documentation, see the Infoblox Installation Guide vNIOS for Proxmox at  
[Virtual Appliances](https://infoblox-docs.atlassian.net/wiki/spaces/applianceshome/pages/8683543).

# Support for Reporting and Network Discovery Appliances in vNIOS for Red Hat OpenShift

IB-V5005 (reporting appliance), ND-V906, ND-V1606, ND-V2306, and ND-V4106 network discovery  
appliances can now be deployed on Red Hat OpenShift.

# Splunk Package Upgrade

In NIOS 9.0.8, the Splunk package version has been upgraded to 9.2.10.

# Renaming Threat Analytics to Threat Insight

Threat Analytics has been renamed to Threat Insight.
