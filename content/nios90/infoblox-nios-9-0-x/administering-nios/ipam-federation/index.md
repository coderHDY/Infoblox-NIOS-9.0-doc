---
title: "IPAM Federation"
source: "/space/nios90/685146492"
pageId: "685146492"
---
IPAM Federation is a scalable and integrated management solution that allows the reservation of IP addresses so that they are unique across NIOS and Infoblox Universal DNS for management. It solves the problem of overlapping IP addresses and ensures that IP addresses are unique across network views. It allows a Infoblox administrator to manage multiple IPAM systems from one central control point (Infoblox Portal Configuration), ensuring greater efficiency and policy compliance.

IPAM Federation bridges the gap between on-premise NIOS and Infoblox Universal DNS for management, thus offering a seamless integration and centralized management of both environments while still allowing local administration according to policies defined in Infoblox Universal DNS for management. IPAM Federation is ideal for users who require a combination of on-premise and cloud-based solutions. It allows for local management of the on-premises system, with configurations and policies guided by the Infoblox Universal DNS for management.

The main advantage of IPAM Federation is that it not only extends the flexibility of Infoblox Universal DNS for management but also leverages the strength and reliability of the on-premise NIOS system. It allows businesses to optimize their network management strategy, without being restricted to a single deployment model. It also Implements robust security protocols to ensure data integrity, privacy, and compliance with relevant regulations.

# IPAM Federation Concepts

## Federated Realm

A federated realm defines a set of all possible unique IP addresses in any IP protocol version, regardless of the address usage.

## Federated Block

A federated block denotes the available network space that IPAM systems can allocate within a federated realm. A federated block can have only unique IP addresses.

# IPAM Federation Workflow

Two new user groups have been created for Federated IPAM:

- **Federated User**: This is the default user used for audit logging when the Infoblox Portal user logs into the Infoblox Portal and performs an operation on the NIOS on-prem host.
- **OPA User**: This is the internal user used by OPA container to make an API request to get the realm data from the Infoblox Portal.

Follow the sequence of steps below to configure and use IPAM Federation in NIOS and Infoblox Universal DNS for management for unique IP address allocation:

1. Create realms in the Infoblox Portal. For more information, see the [Configuring IPAM Federation](https://docs.infoblox.com/space/BloxOneDDI/684884521/Configuring+IPAM+Federation) topic.
2. Create a federated block or a shared block under the realm. For more information, see the [Configuring IPAM Federation](https://docs.infoblox.com/space/BloxOneDDI/684884521/Configuring+IPAM+Federation) topic.
3. In the NIOS Grid Manager, navigate to *Infoblox* *Grid Properties Editor *&gt; **Infoblox Portal** **Configuration** and add a join token. The join token authenticates a virtual DNS forwarding proxy to establish a connection with the Infoblox Portal Configuration. For more information on creating a join token, see [*Using Forwarders*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/using-forwarders).  
   If you have configured one or more Grid Master Candidates, the join token must be copied to Grid Master Candidates to ensure that there is no disruption in the Federated IPAM service during a promotion. Complete one of the following:
   
   - In NIOS 9.0.6 and later, enable **Force Copy the Join Token from the Grid Master to All Grid Master Candidates** checkbox to forcefully copy the join token from the Grid Master to all Grid Master Candidates if the Grid Master Candidates have custom tokens configured by overriding the inherited tokens.
     
     - Enabling this option also copies the token to any new Grid Master Candidates that you create in future.
     - If you change a Grid Master Candidate to a Grid member, then the join token copied using this option will be automatically removed from the member.
   - In NIOS versions prior to 9.0.6, configure the join token on Grid Master Candidates also.
4. In the **Custom Resolver** field, enter the IP address of the local DNS resolver. This IP address or DNS is used to resolve Infoblox domains when the DNS Forwarding Proxy service starts. You must configure at least one external resolver that will be used to resolve all required domains. If you do not enter an IP address, 52.119.41.100 is taken as the default.
5. In the **HTTP Proxy** field, enter the proxy IP address of the Infoblox Portal. When you update the HTTP proxy, the NIOS on-prem agent updates it to the other on-prem containers by restarting the containers at a specific interval which can cause a maximum delay of 15 minutes. If you have entered a value in this field, all the Grid members will automatically reboot once you save the configuration.
6. Enable the** Enable Cloud Grid Management **option. This enables the Federation IPAM service to be up and running and all the required containers for the IPAM Federation feature are downloaded.
7. Once the Federation IPAM service is up and running, navigate to the **Data Managemen**t &gt; **IPAM** tab to add an IPv4 or an IPv6 network. For more information about adding a network, see [Managing IPv4 Networks](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/managing-ipv4-networks) and [Managing IPv6  Networks](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv6-dhcp-data/managing-ipv6-networks-319292098).
8. In the *Add IPv4 Network Wizard &gt; Step 2 of 7 *or the  *Add IPv6 Network Wizard &gt; Step 2 of 7* screen, the **Federated Realms** field displays the realms created in the Infoblox Portal Configuration. Choose the realms to which you want your network to belong and move them to the **Selected** field. The networks that belong the realms cannot be duplicated on another Grid or in Infoblox Universal DNS for management. That is, you cannot add the same network in the same realm to a different Grid or to a delegation block in Infoblox Universal DNS for management. However, you can add the same network to another realm on a different Grid.  
   The networks in the realms are displayed in the Infoblox Portal Configuration as delegated networks.
9. On the **Data Management** &gt; **IPAM** screen and on the **Data Management** &gt; **DHCP &gt; Networks** screen, the **Federated Realms** column displays the realm to which the network belongs.
10. **Test Settings**: Click this button to test the value of the join token, custom resolver, and HTTP proxy, that you entered. When you click the button, a success or a failed message is displayed along with the timestamp. You cannot save your configurations until the test settings is a success.
