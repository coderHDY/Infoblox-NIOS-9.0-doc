---
title: "Configuring NAT Mapping Properties"
source: "/space/nios90/280270065"
pageId: "280270065"
---
If you are operating in an environment where you need to aggregate multiple users (such as mobile users) behind one IP address, you might want to consider using NAT (Network Address Translation) mapping to avoid the potential of service denial to a large group of users if DNS Infrastructure Protection rules are being applied to the same IP address.  
NAT detection is essential to enforce the correct DNS Infrastructure Protection rule on source IP addresses. The Infoblox NAT mapping feature allows you to designate individual IP addresses, networks, or ranges along with the source port ranges to denote NAT'ed clients. Any UDP or TCP traffic that originates from an IP address within the NAT IP range and uses a source port within the NAT port mapping is considered as a NAT'ed client. It is important to align the NIOS NAT mapping configuration with the NAT gateway configuration to avoid mis-classification of NAT IPs. Traffic that originates from a given source port block that falls within the configured NAT IP and port range is considered as the same NAT'ed client and traffic that originates from a different port block that falls within the same NAT IP and port range is considered to be a different NAT'ed client. If the traffic originates from the same source IP address, but from a different port block that falls outside the configured port range, then they are considered as a non-NAT'ed client.  
NIOS NAT detection is designed to work with a specific form of NAT where multiple clients are NAT'ed onto a single public IP address using a single port block for each client at a time. Some NAT vendors refer to this scheme as PBA (Port Block Allocation) with fixed size port blocks. The NAT device cannot re-use the same NAT IP address for a different client for at least the drop interval of the DNS Infrastructure Protection rule that is currently running. Note that the client idle timeout duration of the NAT device must be larger than the drop interval of the DNS Infrastructure Protection rule that is currently running.  
You can configure NAT mapping rules on Advance Appliances by mapping a source IP address, network, or range of IP addresses with a range of ports and specifying the port block size to divide each port range into chunks of port blocks. Each port block represents a single NAT'ed client source port. The IP addresses and the port blocks specified in a NAT mapping rule may be assigned to the clients in any order, either fixed, sequential, or random.  
The appliance logs information about NAT'ed clients to the syslog. Following is an example of the threat detection event log message in the syslog for NAT'ed clients:

`2015-06-01T22:57:22+00:00 daemon infoblox.localdomain threat-protect-log[12192]: err`  
`CEF:0|Infoblox|NIOS Threat|7.2.0-283371|120303001|Blacklist:block.com|7|src=3.0.0.100`  
`spt=1221 dst=1.1.6.2 dpt=53 act="DROP" cat="BLACKLIST UDP FQDN lookup" nat=1 nfpt=1124`  
`nlpt=1223`

The following values in the threat detection event log message are specific for NAT'ed clients:

- **nat=1**: Indicates that the syslog event is logged for a NAT'ed client.
- **nfpt**: Indicates the first port in the port block.
- **nlpt**: Indicates the last port in the port block.

For information about the syslog and how to use it, see *[Viewing the Syslog](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403148)*. Note the following about the NAT mapping feature:

- A single NAT'ed client cannot use multiple source IP addresses or multiple port blocks simultaneously, otherwise NIOS might consider the same NAT'ed client as different clients.
- NIOS does not support traffic originating from both NAT'ed and non-NAT'ed clients using the same source IP address.
- NAT mapping supports only IPv4 addresses, networks and ranges and any traffic originating from an IPv6 address, network, or range is considered as a non-NAT'ed client.
- NAT mapping is applicable only for traffic that uses UDP or TCP source port.
- NIOS cannot determine the pre-NAT IP address of a client. However, you can use the NIOS DNS infrastructure protection logs and the DNS Infrastructure Protection reports in conjunction with the NAT device logs for the same interval to determine the pre-NAT IP address of a NAT'ed client.
- The NAT mapping configuration in the NIOS appliance must be aligned with the actual NAT device configuration to ensure correct NAT detection.
- NAT mapping is supported on all the platforms that support the DNS Infrastructure Protection service.
