---
title: "Source and Destination Ports for Services"
source: "/space/nios90/1327530037"
pageId: "1327530037"
---
The following table displays the different type of traffic present on ports.

| **Service** | **SRC** **IP** | **DST** **IP/FQDN** | **Protocol** | **SRC** **Port** | **DST** **Port** | **Notes** |
| --- | --- | --- | --- | --- | --- | --- |
| Key Exchange (Member Connection) | LAN1 or MGMT on all Grid members (including Grid Master and Grid Master Candidate)  VIP on HA Grid Master Candidate, or LAN1 on single    Grid Master Candidate | VIP on HA Grid Master, or LAN1 on single Grid Master  VIP on HA Grid Master Candidate, or LAN1 on single Grid Master Candidate | UDP | 2114 | 2114 | Initial key exchange for   establishing VPN   tunnels   Required for Grid |
| Key Exchange (Grid Master Candidate Promotion) | VIP on HA Grid Master, or LAN1 on single Grid Master    VIP on HA Grid Master Candidate or LAN1 on Single Grid Master Candidate | LAN1 or MGMT on all Grid members (including Grid Master and Grid Master Candidate) | UDP | 2114 | 2114 |  |
| Accounting | LAN1 or MGMT on Grid member | VIP on HA Grid Master, or LAN1 on single Grid Master   VIP on HA Grid Master Candidate, or LAN1 on single   Grid Master Candidate | UDP | 1194 or   5002, or 1024   -&gt; 63999 | 1194 or   5002, or   1024 -&gt;   63999 | Default VPN port 1194 for Grids with new DNSone 3.2 installations and 5002 for Grids upgraded to DNSone 3.2; the port number is configurable  Required for Grid |
| Network Insight VPN | LAN1 or LAN2 on Probes | LAN1 or LAN2 on Consolidator | UDP | 21197 | 1194 | All default VPN tunnels for Network Insight |
| Discovery | LAN1 or LAN2 on Probes |  | UDP |  | 161 | SNMP |
| Discovery | LAN1 or LAN2 on Probes |  | UDP |  | 260 | SNMP - Needed for full discovery of some older Check Point models |
| Discovery | LAN1 or LAN2 on Probes |  | ICMP |  | n/a | Ping Sweep |
| Discovery | LAN1 or LAN2 on Probes |  | UDP, TCP |  | 53 | DNS |
| Discovery | LAN1 or LAN2 on Probes |  | ICMP |  |  | Path Collection, for IPv4 addresses |
| Discovery | LAN1 or LAN2 on Probes |  | UDP |  | 33434+1    per probe packet | Path Collection. Standard traceroute, for IPv6 addresses |
| Discovery | LAN1 or LAN2    on Probes |  | ICMP, UDP, TCP |  |  | Port scan - all configured by us |
| Discovery | LAN1 or LAN2 on Probes |  | UDP |  | 137 | NetBIOS |
| Discovery | LAN1 or LAN2 on Probes |  | UDP |  | 40125 | NMAP, UDP (17) Ping, and credential checking |
| Discovery | LAN1 or LAN2    on Probes |  | TCP |  | 23 | Telnet can be used based on Network Insight configuration for Network Discovery. |
| Discovery | LAN1 or LAN2    on Probes |  | TCP |  | 22 | SSH can be used based on Network Insight configuration for Network Discovery. |
| DHCP | Client | LAN1, LAN2, VIP, or broadcast on NIOS appliance | UDP | 68 | 67 | Required for IPv4 DHCP service |
| DHCP | LAN1, LAN2 or VIP on NIOS appliance | Client | UDP | 67 | 68 | Required for IPv4 DHCP service |
| DHCP | Client | LAN1, LAN2, VIP, or broadcast on NIOS appliance | UDP | 546 | 547 | Required for IPv6 DHCP service |
| DHCP | LAN1, LAN2 or VIP on NIOS appliance | Client | UDP | 547 | 546 | Required for IPv6 DHCP service |
| DHCP Failover | LAN1, LAN2 or VIP on Infoblox DHCP failover peer | LAN1, LAN2 or VIP on Infoblox DHCP failover peer | TCP | 1024 → 65535 | 519 or 647 | Required for DHCP failover |
| DHCP Failover | VIP on HA Grid Master or LAN1 or LAN2 on single master | LAN1, LAN2 or VIP on Grid member in a DHCP failover pair | TCP | 1024 -&gt;    65535 | 647 or 7911 | Required for DHCP failover  Port 7911 is used by an API for limited control over ISC DHCP server operations. |
| DDNS Updates | LAN1, LAN2, or VIP | LAN1, LAN2, or VIP | UDP | 1024 → 65535 | 53 UDP and TCP | Required for DHCP to send DNS dynamic updates  For DDNS updates to work for PTR records (reverse-mapping zones), TCP port 53 is required. |
| DNS Transfers | LAN1, LAN2, VIP, or MGMT, or client | LAN1, LAN2, VIP, or MGMT | TCP | 53, or    1024 -&gt;    65535 | 53 | For DNS zone transfers, large client queries, and for Grid members to communicate with external name servers  Required for DNS |
| DNS Queries | Client | LAN1, LAN2, VIP, or broadcast on NIOS appliance | UDP | 53, or 1024 → 65535 | 53 | For DNS queries  Required for DNS |
| DNS Queries | Client | LAN1, LAN2, VIP, or broadcast on NIOS appliance | TCP | 53, or 1024 → 65535 | 53 | For DNS queries  Required for DNS |
|  |  |  |  |  |  |  |
| RADIUS Authentication | NAS (network access server) | LAN1 or VIP | UDP | 1024 – 65535 | 1812 | For proxying RADIUS Authentication-Requests. The default destination port number is 1812, and can be changed to 1024 – 63997. When configuring an HA pair, ensure that you provision both LAN IP addresses on the RADIUS server. |
| RADIUS Accounting | NAS (network access server) | LAN1 or VIP | UDP | 1024 – 65535 | 1813 | For proxying RADIUS Accounting-Requests. The default destination port number is 1813, and can be changed to 1024 – 63998. |
| RADIUS Proxy | LAN1 or VIP | RADIUS home server | UDP | 1814 | 1024 -&gt;    63997    (auth), or 1024 -&gt;    63998    (acct) | Required to proxy requests from RADIUS clients to servers. The default source port number is 1814, and although it is not configurable, it is always two greater than the port number for RADIUS authentication. |
| ICMP Dst Port Unreachable | VIP, LAN1, LAN2, or MGMT,    or UNIX-based client | LAN1, LAN2, or    UNIX-based client | ICMP | – | – | Required to respond to the UNIX-based traceroute tool to determine if a destination has been reached |
| ICMP Echo Reply | VIP, LAN1, LAN2, or MGMT, or client | VIP, LAN1, LAN2, or MGMT, or client | ICMP | – | – | Required for response from ICMP echo request (ping) |
| ICMP Echo Request | VIP, LAN1, LAN2, or MGMT,    or client | VIP, LAN1, LAN2, or    MGMT, or client | ICMP | – | – | Required to send pings and respond to the Windows-    based traceroute tool |
| ICMP TTL    Exceeded | Gateway device (router or firewall) | Windows client | ICMP | – | – | Gateway sends an ICMP TTL exceeded message to a Windows client, which then records router hops along a data path |
| NTP | LAN1 on active node of Grid Master or LAN1 of independent appliance | 52.119.41.100 or (prior to 9.0.7) 52.119.40.100 | UDP and TCP | 1024 -&gt;    65535 | 53 | Required to synchronize Grid, TSIG authentication, and DHCP failover  Optional for synchronizing logs among multiple appliances |
| SMTP | LAN1, LAN2, or VIP | Mail server | TCP | 1024 → 65535 | 25 | Required if SMTP alerts are enabled |
| SNMP | NMS (network management system) server | VIP, LAN1, LAN2, or MGMT | UDP | 1024 → 65535 | 161 | Required for SNMP management |
| SNMP Multiplex Protocol (SMUX) | SNMP subagent | 0.0.0.0 (all interfaces) | TCP | 1024 -&gt; 65535 | 199 | Required for SMUX protocol management.   The protocol allows SNMP subagents to communicate with the main SNMP daemon. It is used in network monitoring and management environments. |
| SNMP Traps | MGMT or LAN1 on Grid Master or HA pair, or LAN1 on independent appliance | NMS server | UDP | 1024 -&gt; 65535 | 162 | Required for SNMP trap management.    Uses MGMT (when enabled) or LAN1 on Grid Master or HA pair, or LAN1 on independent appliance for the source address, depending on the destination IP address. |
| SSHv2 | Client | LAN1, LAN2, VIP, or MGMT on NIOS    appliance | TCP | 1024 -&gt;    65535 | 22 | Administrators can make an SSHv2 connection to the LAN1, LAN2, VIP, or MGMT port  Optional for management |
| Syslog | LAN1, LAN2, or MGMT of NIOS appliance | syslog server | UDP | 1024 → 65535 | 514 | Required for remote syslog logging |
| Traceroute | LAN1, LAN2, or UNIX-based appliance | VIP, LAN1, LAN2, or MGMT, or client | UDP | 1024 → 65535 | 33000 → 65535 | NIOS appliance responds with ICMP type code 3 (port unreachable) |
| TFTP Data | LAN1 or MGMT | TFTP server | UDP | 1024 → 65535 | 69, then 1024 → 63999 | For contacting a TFTP server during database and configuration backup and restore operations |
| VRRP | HA IP on the active node of HA pair | Multicast address 224.0.0.18 | VRRP | 802 |  | For periodic announcements of the availability of the HA node that is linked to the VIP. The nodes in the HA pair must be in the same subnet. |
| HTTP | Management System | VIP, LAN1, or MGMT | TCP | 1024 → 65535 | 80 | Required if the HTTP-redirect option is set on the Grid properties security page |
| HTTPS/SSL | Management System | VIP, LAN1, or MGMT | TCP | 1024 → 65535 | 443 | Required for administration through the GUI |
| SCP | LAN1, LAN2, or MGMT of the NIOS appliance | SCP server | TCP | 1024 → 65535 | 22 |  |
| FTP | NIOS appliance | FTP server | TCP | 1024 → 65535 | 21 | When the FTP file distribution service is enabled, the NIOS appliance acts as an FTP server. In this case,   **Source: **NIOS appliance / FTP client   **Destination: **NIOS appliance / FTP server |
| Network Insight TAE | LAN1 or MGMT of Grid Master | NetMRI appliance address | HTTPS |  | 80 or 443 | NIOS communicates with NetMRI using the NetMRI API |
| Reporting | Reporting Forwarders | LAN1, LAN2, or MGMT on the indexer | TCP | 1024 -    65535 | 9997 | Required for the reporting service. Communication is single directional from forwarders to the indexer. For example, a forwarder detects events and forwards them to the indexer. |
| Reporting - Peer Replication | All Reporting Members | LAN1, LAN2, MGMT on each reporting member | TCP | 1024 - 65535 | 7887 | Splunk cluster peer replication (traffic among reporting members) |
| Distributed Search | All Reporting Members | LAN1, LAN2, MGMT on each reporting member | TCP | 1024 - 65535 | 7089 | Distributed searches from Search Head to Reporting Members |
| Reporting Management | All Reporting Members | LAN1, LAN2, MGMT on each reporting member | TCP | 1024 - 65535 | 8089 | Grid Master to reporting members |
| Reporting Management | All Reporting Members | LAN1, LAN2, MGMT on each reporting member | TCP – IPv4 | 1024 - 65535 | 8000 | Grid Master to reporting members |
| Reporting Management | All Reporting Members | LAN1, LAN2, MGMT on each reporting member | TCP – IPv6 | 1024 - 65535 | 8000 | Grid Master to reporting members |
| Reporting REST API | Client system | LAN1, MGMT on indexer (for single indexer setup)/searchhead (for cluster setup) | TCP |  | 9185 | To access reporting data using REST API calls |
| Gunicorn-based REST API (nios-rest) | External client | LAN1, LAN2, or MGMT interface | TCP | 1024 - 65535 | 5000 | A socket-activated REST API server (Infoblox NIOS) exposed through Gunicorn; used for automation, configuration, and internal monitoring of REST APIs. It is managed by systemd. |
| DNS Infrastructure Protection | VIP on HA Grid Master or MGMT on single appliance (with DNS Infrastructure Protection service running) | N/A (using FQDN = [https://ts.infoblox.com)](https://ts.infoblox.com))  This URL is configured to work with NIOS appliances. It has a self-signed certificate; it may not work properly with web browsers but works with appliances. | HTTPS | N/A | 443 | For DNS Infrastructure Protection rule updates. |
| Threat Insight | Client   | N/A (using FQDN = [https://ts.infoblox.com](https://ts.infoblox.com)) | HTTPS | 9090, 9091, 9290, 9292, 9293 | 443 | For downloading modulesets and whitelist updates. |
| Microsoft Management | Managing Member | Microsoft Server | TCP | 1024 - 65535 | 135, 139, 445    Dynamic   Port Range   1025-5000 (Windows Server   2003)  Dynamic Port Range 49152-65535 (Windows Server 2008) | Note that TCP ports 135, 139,    and 445 must be open   on the Microsoft server,   in addition to the   dynamic port range.   Ports 135 and 445 are   used by the port   mapper interface,   which is a service on   the Microsoft server   that provides   information to clients   on which port to use to   connect to a specific   service, such as the   service that allows the   management of the   DNS service.  The SMB protocol uses port 139 for the NETBIOS connection to exchange data with the Microsoft server. |
| LDAP | Managing member | Microsoft server | LDAP | 389 | 389 | Default port for LDAP (Lightweight Directory Access Protocol) communication.  This port must be open and properly configured on your firewall to ensure successful LDAP communication with the Microsoft server.  The LDAP connection is used to synchronize Active Directory sites when configuring Microsoft servers with the Active Directory site on NIOS. |
| LDAPS | Managing member | Microsoft server | LDAP over SSL/TLS | 636 | 636 | Used for LDAPS (LDAP over SSL/TLS) which provides a secure connection.  This port must be open and properly configured on your firewall to ensure successful LDAP communication with the Microsoft server.  The LDAP connection is used to synchronize Active Directory sites when configuring Microsoft servers with the Active Directory site on NIOS. |
| Thales Luna HSM | LAN1 or VIP | Thales Luna HSM server | TCP | 1024 to 65535 | 1792 (NTLS method) | Required for communication with the Thales Luna HSM server |
| Entrust nShield HSM | LAN1 or VIP | Entrust nShield HSM server | TCP | 1024 to 65535 | 9004 | Required for communication with the Entrust nShield HSM server. The default destination port is 9004 (RFS Port) and it can be changed from 1024 to 65535. |
| Infoblox Portal Connectivity: Infoblox Portal | NIOS Appliance | csp.infoblox.com | TCP | 1024 to 65535 | 443 |  |
| Infoblox Portal Connectivity: Platform Management | NIOS Appliance | cp.noa.infoblox.com | TCP | 1024 to 65535 | 443 |  |
| Infoblox Portal Connectivity: Application Management | NIOS Appliance | app.noa.infoblox.com | TCP | 1024 to 65535 | 443 |  |
| Infoblox Portal Connectivity: Custom DNS Resolver | NIOS Appliance | 52.119.41.100, 103.80.6.100 (preferred); 52.119.40.100, 103.80.5.100 (legacy); or a custom value configured by the user in Infoblox Grid &gt; Grid Manager &gt; Grid Properties &gt; Infoblox Portal Configuration | UDP and TCP | 1024 to 65535 | 53 |  |
| BloxConnect | LAN1 (or HA VIP in an HA pair) | grpc.csp.infoblox.com | TCP | 1024 to 65535 | 443 | BloxConnect tries to establish a connection with the Infoblox Portal every 5 minutes. |
| DNS Forwarding Proxy (DoT) | DNS Forwarding Proxy | threatdefense.bloxone.infoblox.com | TCP | Ephemeral | 443 | Used for DNS over TLS (DoT) communication with Infoblox Threat Defense Cloud. |
| SAML Authentication service | LAN1 or MGMT on Grid Master   VIP on HA Grid Master |  | TCP | 8765 | Port 443 (HTTPS)  Port 80 (HTTP) | Port 443 is used for all HTTPS connections, including both GUI and API (WAPI), and enabled by default after installing or configuring SAML.  Port 80 is used for HTTP connections; when the HTTP-to-HTTPS redirection option in Grid Properties is enabled, Port 80 opens, allowing users to access NIOS over HTTP and automatically redirect to HTTPS. |
| TACACS+AAA (Authentication, Authorization, and Accounting) | MGMT or LAN1 IP address of the NIOS appliance(Client) | TACACS server IP address | TCP | 1024 to 65535 | 49 | TACACS is a protocol that supports AAA (Authentication, Authorization, and Accounting) for managing access to network devices. |
| Data Repo | LAN1 or MGMT on Grid member | VIP on HA Grid Master, or LAN1 on single Grid Master | TCP | Random (Ephemeral) | 666 |  |
| DOT (DNS over TLS) | LAN1 on DNS service | External DNS resolver or client | TCP | Random (Ephemeral) | 853 |  |
| DOH (DNS over HTTPS) | LAN1 on DNS service | External DNS resolver or client | TCP | Random (Ephemeral) | 443 |  |
| BGP (Border Gateway Protocol) |  |  | TCP | 49152 to 65535 | 179 |  |
| BFD (Bidirectional Forwarding Detection) |  |  | UDP | 49152 to 65535 | - 3784:Single hop BFD - 3785: BFD Echo packets - 4784: Multi-hop BFD |  |
| Policy Agent (opa) | NIOS Appliance | Infoblox Portal ([http://csp.infoblox.com](http://csp.infoblox.com)  ) | TCP | 8181 | 443 |  |
| blox.noa | NIOS Appliance | Infoblox Portal ([cp.noa.infoblox.com](http://cp.noa.infoblox.com) ) | TCP | 8087 | 443 |  |
| scout | NIOS Appliance | Infoblox Portal | TCP | 26748 |  |  |
| BloxConnect | NIOS Appliance | Infoblox Portal ([http://csp.infoblox.com](http://csp.infoblox.com)   ) | TCP | 26749 | 443 |  |
| data-out | NIOS Appliance | Infoblox Portal ([http://csp.infoblox.com](http://csp.infoblox.com)   ) | TCP | 9346 | 443 |  |
| rpc-agent | NIOS Appliance | Infoblox Portal ([http://csp.infoblox.com](http://csp.infoblox.com)   ) | TCP | 29501 | 443 |  |

For more details on DNS forwarding IPs and port usage, see:

- [Forwarding DNS Traffic to Infoblox Platform](https://infoblox-docs.atlassian.net/wiki/spaces/BloxOneThreatDefense/pages/35408116)
- [Connectivity Rules for DNS Forwarding Proxy](https://infoblox-docs.atlassian.net/wiki/spaces/BloxOneThreatDefense/pages/257754727)
