---
title: "About Infoblox DNS Infrastructure Protection"
source: "/space/nios90/280267604"
pageId: "280267604"
---
The Infoblox DNS Infrastructure Protection solution employs DNS infrastructure protection rules to detect, report upon, and stop DoS (Denial of Service), DDoS (Distributed Denial of Service) and other network attacks targeting DNS authoritative applications. Infoblox DNS Infrastructure Protection helps minimize "false positives" and ensures that your mission-critical DNS services continue to function even when under attack. For information about possible DNS threats, see [DNS and Network-Flood Threats](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280269994).

You can deploy the DNS Infrastructure Protection solution on hardware-accelerated appliances (physical appliances only) as well as software-based appliances (both physical and virtual) in the Grid. Depending on the appliances you deploy, you must install applicable hardware-based licenses or Software ADP subscription licenses. For information about supported Infoblox appliances for DNS Infrastructure Protection and the applicable licenses, see [*Supported DNS Infrastructure Protection Appliances and Licensing Requirements*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662343).  
Infoblox DNS Infrastructure Protection is designed to provide visibility and protection against network floods and DNS attacks. It detects DNS attacks through predefined and custom DNS Infrastructure protection rules, and mitigates DNS threats by dropping problematic packets while responding only to legitimate traffic. With valid licenses installed, you can subscribe to automatic rule updates that deliver near real-time protection against new and emerging attacks. You may also manually perform the rule update process based on your configuration. For information about DNS Infrastructure Protection rules, see [*Understanding DNS Infrastructure Protection Rulesets and Rules*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270117).  
Infoblox DNS Infrastructure Protection supports a set of predefined DNS Infrastructure Protection rules that detect and mitigate possible DNS threats. You can modify some of the parameters and assign actions such as logging events and applying mitigation to these rules. You can also create custom rules to suit your security needs. For more information, see [*Understanding DNS Infrastructure Protection Rulesets and Rules*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270117).  
As illustrated in the figure below, the DNS Infrastructure Protection appliance, acting as an authoritative DNS server, is added to the Grid. After installing valid threat protection licenses and configuring the appliance to serve as an Advance Appliance, it can now detect DNS threats and mitigate DNS threats based on DNS Infrastructure Protection rules. All DNS Infrastructure Protection related events, conformed to CEF (Common Event Format), are logged in the syslog on the Grid Master. To perform further investigation about possible threats, the reporting server generates specific DNS Infrastructure Protection related reports. For information about how to monitor DNS Infrastructure Protection related events and reports, see [*Monitoring DNS Infrastructure Protection Events*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662273).

*Infoblox* *DNS Infrastructure* *Protection* *Solution*

*[drawio]*

# Limitations for DNS Infrastructure Protection Appliances

Hardware-based appliances support all existing DNS features (including HA support) that are applicable to DNS caching and authoritative applications, except the following:

- Configuration of multiple interfaces on the same subnet
- 10/100-Mbps gigabit Ethernet mode and fixed speed/duplex settings

> **warning**
>
> **Note**
> 
> The MGMT interface must be configured and Infoblox strongly recommends that the MGMT interface be used for Grid traffic.

Consider the following when the DNS Infrastructure Protection service is enabled on advanced appliances:

## For Hardware DNS Infrastructure Protection

- Protected interfaces (LAN1 and LAN2) are limited to DNS traffic, protocols in support of DNS anycast (BGP and OSPF) and the standard IP protocols such as ICMP, as well as connections to NTP servers.
- The MGMT interface is used for other traffic, such as Grid, SSH, SNMP, NTP, and it will not be protected against DDoS attacks.
- You cannot run other services, such as FTP, TFTP, and HTTP, on the Advance Appliances.
- The appliance terminates TCP connections for incoming DNS requests after handling the initial request through each TCP connection. The exception for this default Grid setting is for an SOA query sent by a client that is accepted in the allow-transfer ACL. In the case of an SOA query, the TCP connection remains open for subsequent DNS requests. This exception also covers the case in which an AXFR query follows the SOA query through the same TCP connection. For more information about how to override this default Grid setting, see [*Enabling Multiple DNS Requests through a Single TCP Session*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275855).

## For Software DNS Infrastructure Protection

- If the DNS Infrastructure Protection service is running without a ruleset, it will lead to a security risk of open ports. Make sure to download/schedule an automatic download of the ruleset when using DNS Infrastructure Protection.
- When you use IB-FLEX for Software DNS Infrastructure Protection, it supports a standalone or a Grid member with DNs Infrastructure Protection enabled, but it does not support a Grid Master with DNS Infrastructure Protection enabled. For more information about the IB-FLEX virtual appliance model, see [*About IB-FLEX*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667152).
- IB-FLEX applies DNS Infrastructure Protection rules to all traffic on LAN1, LAN2 and HA interfaces, but bypasses the traffic on the MGMT interface.
- The DNS Infrastructure Protection profiles used for Software DNS Infrastructure Protection members support DNS Infrastructure Protection NAT settings.

On all vNIOS appliances that support vDCA (virtual DNS Cache Acceleration) or DNS Infrastructure Protection, you must run vDCA or DNS Infrastructure Protection on a single virtual NUMA node. If the configuration of the virtual NUMA node and physical NUMA node are not the same, it may result in performance degradation.

Accelerated networking should be configured on the Azure instance interfaces to support features such as DNS Infrastructure Protection, virtual DNS Cache Acceleration (vDCA), and dnstap.
