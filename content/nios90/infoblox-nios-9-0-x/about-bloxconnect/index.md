---
title: "About BloxConnect"
source: "/space/nios90/1673134084"
pageId: "1673134084"
---
BloxConnect is a background service in the Infoblox NIOS platform that securely collects and transmits deployment data to Infoblox, enabling faster and more accurate troubleshooting when critical network services like DNS, DHCP, and IPAM are disrupted.

When enabled, BloxConnect automatically captures deployment snapshots that include inventory, configuration, licensing, and system health metrics from NIOS Grid and Grid members. Grid members are a subset of the Grid Master. DNS queries or DHCP leases are assigned to individual Grid members to help the Grid Master manage the load.

Information collected by BloxConnect helps the Infoblox Support team accelerate triage and remediation, reducing downtime, and minimizing business impact.

# BloxConnect Data Transmission

BloxConnect snapshots also provide daily health diagnostic, and utilization information, including CPU and disk usage, DNS queries per second (QPS), DHCP leases per second (LPS), IP address management (IPAM) statistics, and memory usage.

BloxConnect runs in the NIOS background, consumes negligible resources, and transmits very small message sizes with no impact on system or network performance.

BloxConnect transmits data to Infoblox in the following cases:

- On an initial setup of the system
- Daily (once every 24 hours of uptime)
- After a system failure (on a reboot, following a system restart)

BloxConnect collects data from the NIOS Grid in two ways:

- **Automated collection**: Continuous collection of Grid member system metrics and licensing information.
- **Support-initiated collection**: Infoblox Support can trigger manual collection of additional metrics and feature usage data to assist with diagnosing and resolving issues.

> **warning**
>
> **Note**
> 
> BloxConnect collects only the information required for accurate inventory and supportability. It does not store or transmit passwords or personally identifiable information (PII) and is designed to comply with regulations such as the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). All BloxConnect data is encrypted and transmitted to Infoblox via Transport Layer Security (TLS).
> 
> For more information regarding data snapshot privacy, please see our [*Privacy Policy*](https://www.infoblox.com/company/legal/privacy-policy/).

# BloxConnect and Infoblox Portal Connectivity

BloxConnect ensures reliable data transmission to Infoblox even if the Grid Master cannot connect to the Infoblox Portal. When the Grid Master is unavailable, designated Grid members can take over and transmit BloxConnect data to the Infoblox Portal.

## Priority of Data Transmission

For BloxConnect to send data to the Infoblox Portal, nodes are grouped based on authentication type. Connectivity checks are performed in parallel within the same group. The election process is repeated every 24 hours.

BloxConnect determines the path for sending data to the Infoblox Portal in the following order of priority:

### Strong Authentication Group

When the Infoblox Portal join token is entered in NIOS, blox.noa connects to the Infoblox Portal and creates certificates and keys on the on-premise hosts. These certificates enable strong authentication between the systems. The order of the NIOS Grid connecting to the Infoblox Portal is as follows:

- **Strong Authentication Grid Master:** Grid Master connectivity to Infoblox Portal is checked.​
  
  - If the GM is an HA pair, BloxConnect checks connectivity on the active node and sends data only through the active node.​
- **Strong Authentication Grid Manager Candidate**: If the Grid Master cannot connect to the Infoblox Portal, the Grid Manager Candidate is checked for connectivity to the Infoblox Portal.
- **Strong Authentication Grid Member**: If the Grid Manager Candidate also fails to connect to the Infoblox Portal, the Grid member is checked for connectivity.

### Weak Authentication Group

Based on the Grid license installed on NIOS, blox.noa generates a weak authentication token. The token is base64-encoded and is used in the request header when authenticating to the Infoblox Portal. The order of the NIOS Grid connecting to the Infoblox Portal is as follows:

- **Weak Authentication Grid Master:** Grid Master connectivity to Infoblox Portal is checked.​
- **Weak Authentication Grid Manager Candidate**: If the Grid Master cannot connect to the Infoblox Portal, the Grid Manager Candidate is checked for connectivity to the Infoblox Portal.
- **Weak Authentication Grid Member**: If the Grid Manager Candidate also fails to connect to the Infoblox Portal, a weak authentication Grid member is checked for connectivity.​

The process stops as soon as the first successful node that can connect to the Infoblox Portal is found.

### Infoblox Portal Test Connectivity Criteria

The Infoblox Portal connectivity test performs an HTTP call to the Infoblox Portal to validate connectivity. For successful connectivity, a valid HTTP proxy configuration or proper DNS resolution must be in place.

> **warning**
>
> **Note**
> 
> - The Infoblox Portal node election occurs only if BloxConnect has been enabled to collect data.
> - During a Grid upgrade, Infoblox Portal connectivity is checked only on the Grid Master.
> - When BloxConnect is disabled, data is resynchronized from the Grid Master to all Grid members every 8 hours. For more information on disabling BloxConnect, see [*Disabling BloxConnect*](/nios90/infoblox-nios-9-0-x/about-bloxconnect/disabling-bloxconnect)*.*
> - BloxConnect data is not transmitted through discovery members, reporting members, or cloud platform members.

# What Data Does BloxConnect Collect?

The following data is automatically collected by BloxConnect with no user interaction. It includes data used by Infoblox for Grid discovery and monitoring. This data is collected only if BloxConnect has been enabled to collect data.

## Grid Information

| **Item** | **Sub-Items** |
| --- | --- |
| Grid name |  |
| Internal IDs |  |
| List of Grid members |  |
| NIOS admins count |  |
| NIOS dashboards count |  |
| Infoblox license | Enabled/disabled features  (From NIOS 9.0.8 onwards, BloxConnect interprets information about features that are installed based on the services that are enabled or disabled rather than the licenses that are installed.) |
| Grid-wide license |  |
| Grid-enabled   features |  |
| CMP plugins |  |
| Total queries |  |
| NGC |  |
| Password policy | - Minimum password age - Password minimum Length - Num Numeric Char - Expire enable - Chars to change - Expire days - Num symbol char - Enable password history - Force reset enable - Reminder days - Num upper char - Num lower char - Num passwords saved |
| Upgrade status | - Distribution version - Distribution schedule active - Upgrade test status - Grid state - Message - Allow upgrade pause - Status time - Distribution state - Upgrade schedule active - Allow upgrade scheduling - Allow upgrade resume - Allow distribution - Last Action User Ref - Upgrade schedule time - Allow upgrade test - Distribution schedule time - Allow upgrade - Allow upload - Upgrade state - Group state |
| Hidden primary |  |
| SAML |  |
| SSL | - HTTP - Captive - CA certificate - SFNT server - OCSP server - IDNS certificate - Endpoint REST API certificate - Endpoint Cisco ISE certificate - Endpoint Syslog certificate - Endpoint DXL certificate - SAML authentication IDP - Virtual node syslog server - Cluster syslog server - Proxy server - IFMAP certificate |
| MS sync data | DNS data:   MS zone info   MS record info:   [“BIND A”, “BIND AAAA”, “BIND CAA”, “BIND CNAME”, “BIND DNAME”, “BIND MX”, “BIND NS”, “BIND PTR”, “BIND SRV”, “BIND TXT”, “BIND SOA”]  DHCP data:   MS network   Networks   Ranges   Leases   Networks CIDR/31   DHCP failover |
| Multi-cloud data | Multi-cloud general info:   [“CDNS Feature Enabled”, “AWS Route 53 Zone Info”, “Azure DNS Zone Info”, “Google Cloud DNS Zone Info”]  AWS Route 53 record types:   [“A”, “AAAA”, “CAA”, “CNAME”, “MX”, “NS”, “PTR”, “NAPTR”, “SOA”, “SPF”, “SRV”, “TXT”]  Azure DNS record types:   [“A”, “AAAA”, “CAA”, “CNAME”, “MX”, “NS”, “PTR”, “NAPTR”, “SOA”, “SPF”, “SRV”, “TXT”]  Google Cloud DNS record types:   [“A”, “AAAA”, “CAA”, “CNAME”, “MX”, “NS”, “PTR”, “NAPTR”, “SOA”, “SPF”, “SRV”, “TXT”]  Multi-cloud account info:   [“Amazon”, “Azure”, “Google Cloud”]  Cloud providers |
| vDiscovery data | vDiscovery general info** **[“Cloud vDiscovery Feature Enabled”]  vDiscovery number of cloud accounts [“Amazon”, “Azure”, “Google Cloud”]  vDiscovery total number of VPCs** **[“Amazon”, “Azure”, “Google Cloud”]  vDiscovery total number of subnets [“Amazon”, “Azure”, “Google Cloud”, “OpenStack”]  vDiscovery total number of VMs** **[“Amazon”, “Azure”, “Google Cloud”, “OpenStack”]  vDiscovery total number of used IPs** **[“Amazon”, “Azure”, “Google Cloud”, “OpenStack”]  vDiscovery providers |
| Federation data | Federation enabled routing realms |
| Reporting data | Reporting general info** **[“Reporting License Capacity (MB)”, “Reporting Configuration”, “Total Daily Usage (MB)”]  Reporting license usage per index** **[“ib_audit”, “ib_dns”, “ib_dns_ capture”, “ib_dhcp”, “ib_dhcp_ lease_history”, “ib_ipam”, “ib_discovery”, “ib_security”, “ib_dtc”, “ib_cloud”, “ib_syslog”, “ib_system_capacity”, “ib_system”, “ib_ecosystem_subscription”, “ib_ ecosystem_publish”, “ib_license”] |
| Restart groups | DNS DHCP |
| Terraform |  |

## Dynamic Data (Metrics Data)

| **Item** | **Sub-Items** | **Notes** |
| --- | --- | --- |
| CPU usage ratio |  |  |
| Memory usage ratio |  |  |
| Disk I/O |  |  |
| DNS | kQPS | kQPS measured every 15 minutes to determine the maximum per day. |
| DHCP | - LPS - IP addresses - Maximum managed per day | - LPS measured every 15 minutes to determine the maximum per day. - IP addresses (IP address count only, not actual IP addresses) |
| Managed IP addresses | - DHCP lease - DHCP fixed address - Host - DNS record (A, AAAA, PTR) - Unmanaged IP addresses found by discovery | Unmanaged IP addresses found by discovery (IP address count only, not actual IP addresses) |
| VDCA data | - Cache hit ratio - Average QPS - UDP total query count - UDP total response count - TCP total query count - TCP total response count |  |
| ATP data | - DOH total query count - DOH total response count |  |

## Grid feature Usage

| **Item** | **Sub-Items** | **Notes** |
| --- | --- | --- |
| **Grid** |  |  |
| Virtual nodes |  |  |
| Physical nodes |  |  |
| WINS forwarding |  |  |
| Data collector— Registration |  |  |
| GMC promotion groups |  |  |
| IPAM networks | Networks with cidr /31 or /32 or /128-----"dns. network.cidr_31_32_128" |  |
| Object_counters | - Lease count - A records - PTR records - TXT records - SRV records - CNAME records - Zones - SOA records - NS records - MX records - AAAA records |  |
| Network | - Override BOOT file - Override BOOT server - Override next server - Deny BOOTP - PXE lease time |  |
| Extended discovery |  |  |
| Object count |  |  |
| Zone | DNSSEC |  |
| Outbound endpoints | - REST API - Syslog - DXL - pxGrid |  |
| DB utilization |  |  |
| DNS Infrastructure Protection | - Last rule update version - Disable multiple DNS TCP request - Cluster enable acceleration response before DNS Infrastructure Protection |  |
| **DNS** |  |  |
| Multi-master |  |  |
| Forwarding zones |  |  |
| DNSSEC |  |  |
| DNSSEC validation |  |  |
| Blackhole |  |  |
| GSS-TSIG DDNS authentication |  |  |
| TSIG DDNS authentication |  |  |
| DNS scavenging |  |  |
| DNS64 |  |  |
| AWS Route 53 |  |  |
| Bulk hosts |  |  |
| Query/response logging |  |  |
| DNS over HTTP/S |  |  |
| Parental control |  |  |
| GSS TSIG zone updates |  |  |
| Blacklist |  |  |
| Health check |  |  |
| Zones | Count of:  - View zones - External primary zones - Dummy zones - Nondnshost zones - Idnsroot zones |  |
| Shared record groups |  |  |
| RPZs |  |  |
| Primary authoritative zones, secondary authoritative zones |  |  |
| Delegated zones |  |  |
| Multi-master |  |  |
| Anycast |  |  |
| Nameserver groups |  |  |
| Stub zones |  |  |
| DNS views |  |  |
| NXDOMAIN redirection |  |  |
| RRset order |  |  |
| Custom root name servers |  |  |
| XFRs |  |  |
| Enable recursion |  |  |
| Minimal responses |  |  |
| Response rate limiting (RRL) |  |  |
| Hostname policy |  |  |
| pDNS |  |  |
| HSM signing |  |  |
| IDN/i18n/Punycode |  |  |
| GSS TSIG |  |  |
| IBALIAS records |  |  |
| Fault tolerant caching |  |  |
| DNS forwarders feature |  |  |
| DCA | - DNSTAP queries - DNSTAP response - DNSTAP violation TLS - DNSTAP receiver port - DNS cache TTL |  |
| **DHCP** |  |  |
| Network views |  |  |
| Shared networks |  |  |
| Templates |  |  |
| Authenticated DHCP |  |  |
| Captive portal |  |  |
| Expert mode |  |  |
| IPv4 | - Networks - Ranges - Exclusion ranges - Fixed addresses - Reservations - Hosts, roaming hosts - Super hosts |  |
| Filters |  |  |
| IPv6 | - Networks - Ranges - Fixed addresses - Shared networks - Lease affinity - Global prefixes |  |
| PXE lease time |  |  |
| Deny BOOTP |  |  |
| Roaming hosts |  |  |
| IFMap |  |  |
| V6 GSS TSIG |  |  |
| DHCPv4 options— custom |  |  |
| IPv6 options—custom |  |  |
| UTF-8 hostname encoding |  |  |
| Zone/network association |  |  |
| Fingerprinting |  |  |
| GSS TSIG |  |  |
| DNS update style |  |  |
| Recycle leases |  |  |
| Enable scavenging of DHCPv6 leases |  |  |
| Grace period to keep an expired lease |  |  |
| Log queries |  |  |
| CISCO DHCPd lease publish |  |  |
| DTC |  |  |
| DNS updates on lease renewal | - IPv4 - IPv6 |  |
| DDNS update for fixed addresses |  |  |
| Lease logging for the grid |  |  |
| Disable NSDNAME and NSIP for Grid |  |  |
| Hostname translation | IPv4, IPv6 |  |
| Retry DNS updates | IPv4, IPv6 |  |
| Lease time |  |  |
| Fixed address obeys MAC Filter |  |  |
| Immediate fixed address configuration |  |  |
| DHCP threshold |  |  |
| Lease per client settings |  |  |
| Ignore ID |  |  |
| Ignore MAC address |  |  |
| Release delay |  |  |
| Prefix length mode |  |  |
| Format log option-82 |  |  |
| IFMap publishing |  |  |
| Ignore DHCP parameter request list |  |  |
| Lease query |  |  |
| Blast radius mitigation |  |  |
| Cat DHCP lease |  |  |
| Cat DHCP fingerprint |  |  |
| Cat DHCP performance |  |  |
| Networks | - Lease time - DHCP utilization - Ignore DHCP parameter request list - Ranges      - Lease time   - DHCP utilization   - Ignore DHCP parameter request list |  |
| **DTC** |  |  |
| % Grid members with DTC license installed | DTC usage |  |
| Consolidated monitors | Objects |  |
| Health monitors | - HTTP - SNMP - TCP - HTTPS - ICMP - PDP - SIP |  |
| **IPAM** |  |  |
| Network views |  |  |
| Discovery |  |  |
| VLAN management |  |  |
| **Microsoft Management ** |  |  |
| DNS |  |  |
| DHCP |  |  |
| User ID |  | This is not an actual user identifier. It indicates whether synchronization of users of the Microsoft Active Directory Server by the assigned managing member is enabled (`true`) or disabled (`false`). |
| AD sites |  |  |
| Sync-enabled user |  | Specifies whether  synchronization for Microsoft network users is enabled or disabled. |
| **NIOS ** |  |  |
| Network insight |  |  |
| Smart folders |  |  |
| Authentication |  |  |
| Authorization |  |  |
| NTP |  |  |
| File distribution |  |  |
| OSPF |  |  |
| BGP |  |  |
| Admins |  |  |
| **NI ** |  |  |
| # of unmanaged network |  |  |
| # of unmanaged IP address |  |  |
| Discovered assets |  |  |
| Polled device capacity |  |  |
| Discovered interfaces |  |  |
| Discovered IP addresses |  | Count of discovered IP addresses. |

## Member Information

| **Item** | **Sub-Items** |
| --- | --- |
| Model |  |
| Platform type |  |
| Role (GM, GMC, ...) |  |
| Mode (Standalone, HA, ...) |  |
| Disk size |  |
| Hostname |  |
| Hardware ID/Serial number |  |
| NIOS Version, current |  |
| NIOS Versions history |  |
| Operational state: enabled services status aggregate |  |
| License usage over time |  |
| Deployed package name |  |
| Enabled protocols |  |
| Type |  |
| Virtual OID |  |
| Object count |  |
| Update DNS on lease renewal |  |
| v6Update DNS on lease renewal |  |
| Update static lease |  |
| Log lease events |  |
| RPZ disable nsdname nsip |  |
| Recursive client limit |  |
| Smartcache enabled |  |
| DNS forwarder |  |
| HA on cloud |  |
| HA cloud platform |  |
| Public IP enabled |  |
| Cloud vendor region |  |
| Cloud instance type |  |
| Cloud image ID |  |
| Cloud product code |  |
| Hwmodel |  |
| DB utilization |  |
| CPU core count |  |
| Memory size in kb |  |
| DNS Infrastructure Protection | - Disable multiple DNS TCP request - TCP request - Monitor mode - Cluster enable acceleration response before DNS Infrastructure Protection |

## Member Feature Usage

| **Item** | **Sub-Items** |
| --- | --- |
| **Member** |  |
| Captive portal |  |
| DFP |  |
| Unbound |  |
| Virtual node |  |
| RPZ zones |  |
| Signing-enabled zones |  |
| IPV6 enabled |  |
| **DNS** |  |
| Service |  |
| Log queries |  |
| GSS TSIG |  |
| GSS TSIG zone updates |  |
| DNS64 |  |
| Health check |  |
| Virtual node |  |
| DNSSEC |  |
| DNSSEC validation |  |
| DNS over v6 LAN2 |  |
| DNS over v6 MGMT |  |
| DNS over v6 LAN |  |
| DCA | - DNSTAP queries - DNSTAP response - DNSTAP violation TLS - DNSTAP receiver port - DNS cache TTL - DCA service - TLS session timeout - DNS over TCP service - DNSTAP setting usage - DOT - DOH - DOH HTTPS session duration TCP idle timeout |
| **DHCP** |  |
| Fingerprinting |  |
| UTF-8 hostname encoding |  |
| Blacklist |  |
| Enable recursion |  |
| Service |  |
| Override BOOT file |  |
| Override BOOT server |  |
| Override next server |  |
| PXE lease time |  |
| Recycle leases |  |
| Deny BOOTP |  |
| IFMap |  |
| V6 service enable |  |
| BOOTP overload |  |
| DNS update style |  |
| Virtual node |  |
| GSS TSIG |  |
| GSS TSIG keys |  |
| V6 GSS TSIG |  |
| Active DHCP lease |  |
| Total DHCP lease |  |
| Lease scavenging |  |
| Number of days |  |
| Hostname translation | IPv4, IPv6 |
| Retry DNS updates | IPv4, IPv6 |
| Lease time |  |
| Fixed address obeys MAC Filter |  |
| Immediate fixed address configuration |  |
| DHCP threshold |  |
| Lease per client settings |  |
| Prefix length mode |  |
| Lease query |  |
| DHCP utilization |  |
| **DNS Traffic Control** |  |
| Objects | - LBDN - Pools - Servers - Monitors - Zones with LBDN records - Health checks - Average object count |
| Global server load balancing (GSLB) method | - Round Robin - Global availability - All available - Ratio fixed - Ratio dynamic - Topology |
| **Network Insight** |  |
| Number of managed devices |  |
| Number of interfaces |  |
