---
title: "Monitoring DNS Transactions"
source: "/space/nios90/1393459393"
pageId: "1393459393"
---
The NIOS appliance provides tools for monitoring DNS transactions and mitigating cache poisoning from UDP (User Datagram Protocol) traffic on source port 53. Cache poisoning can occur when a DNS server accepts maliciously created unauthentic data. The DNS server ends up locally caching the incorrect entries and serving them to users that make the same DNS requests. In a maliciously created situation, the attacker can redirect Internet traffic from the legitimate host to another host that the attacker controls.  
You can configure the appliance to track invalid DNS responses for recursive DNS queries. The appliance tracks DNS responses that arrive on invalid ports or have invalid TXIDs (DNS transaction IDs). Both invalid ports and invalid TXIDs could be indicators of cache poisoning. An invalid port is a DNS response that arrives from UDP (User Datagram Protocol) port 53 with either one of the following conditions:

- There are no outstanding DNS requests from the port on which the response arrives.
- The TXID of the DNS response matches the TXID of an outstanding request. However, the request was sent from a port other than the port on which the response arrives.

An invalid TXID is a DNS response that arrives from UDP port 53, and the TXID does not match the TXID of an outstanding DNS request. The below figure illustrates how the appliance detects an invalid port and an invalid TXID.

*Invalid* *Port* *and* *Invalid* *TXID*

*[drawio]*

Both invalid ports and invalid TXIDs could be indicators of DNS cache poisoning, although a small number of them is considered normal in situations where valid DNS responses arrive after the DNS queries have timed out. You can configure the appliance to track these indicators, and you can view their status. You can also configure thresholds for them. When the number of invalid ports or invalid TXIDs exceeds the thresholds, the appliance logs an event in the syslog file and sends an SNMP trap and e-mail notification, if you enable them. You can then configure rate limiting rules to limit incoming traffic or completely block connections from primary sources that send the invalid DNS responses.

Rate limiting is a token bucket system that accepts packets from a source based on the rate limit. You can configure the number of packets per minute that the Infoblox DNS server accepts from a specified source. You can also configure the number of packets for burst traffic, which is the maximum number of packets that the token bucket can accept. Once the bucket reaches the limit for burst traffic, it discards the packets and starts receiving new packets according to the rate limit.  
The appliance monitors only UDP traffic from remote port 53 for the following reasons:

- The attacks that the appliance monitors do not happen over TCP.
- DNS responses are sent only from port 53. The appliance discards DNS responses that are sent from other ports.

To monitor invalid ports and invalid TXIDs on the Infoblox DNS server, follow these procedures:

- Enable DNS network monitoring and DNS alert monitoring. For information, see Enabling and Disabling DNS Alert Monitoring below.
- Configure the thresholds for DNS alert indicators. For information, see Configuring DNS Alert Thresholds below.
- Enable SNMP traps and e-mail notifications. For information, see [*Configuring SNMP*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-with-snmp/configuring-snmp).
- Review the DNS alert status. For information, see Viewing DNS Alert Indicator Status below.
- Identify the source of the attack by reviewing the DNS alert status, syslog file, and SNMP traps. For information on SNMP traps for DNS alerts and threshold crossing traps, see [*SNMP MIB Hierarchy*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-with-snmp/snmp-mib-hierarchy).

To mitigate cache poisoning, you can limit incoming traffic or completely block connections from specific sources, as follows:

- Enable rate limiting on the DNS server. For information, see Enabling and Disabling Rate Limiting from External Sources below.
- Configure rate limit traffic rules from specific sources. For information, see Configuring Rate Limiting Rules below.

You can verify the rate limiting rules after you configure them. For information, see Viewing Rate Limiting Rules below.
