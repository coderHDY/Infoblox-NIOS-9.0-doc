---
title: "Anycast and BGP4"
source: "/space/nios90/1468498814"
pageId: "1468498814"
---
> **warning**
>
> ### Note
> 
> Use the CLI command `show bgp` or `show ipv6_bgp` to display configuration and statistical information about the Border Gateway Protocol running on the appliance. You can also use the `set` `bgp `command to write OSPF statistical information to the syslog. In the NIOS appliance, configuration of BGP is limited to Syslog and the DNS anycast application.

BGP4 (henceforth referred to as BGP) is designed to distribute routing information among ASs and exchange routing and reachability information with other BGP systems using a destination-based forwarding paradigm. Unlike OSPF, which calculates routes within a single AS, BGP is a vector routing protocol that distributes routing information among different ASs. A unique ASN (autonomous system number) is allocated to each AS to identify the individual network in BGP routing. A BGP session between two BGP peers is an eBGP (external BGP) session if the BGP peers are in different ASs. A BGP session between two BGP peers is an iBGP (internal BGP) session if the BGP peers are in the same AS.  
BGP configuration enables large enterprises using BGP as the internetworking protocol to provide resilient DNS services using the Infoblox solution. While BGP is mostly used by ISPs, it is also used in larger enterprise environments that must interconnect networks that span geographical and administrative boundaries. In these environments, it is required to use BGP to advertise anycast routes. Using BGP allows the appliance to advertise DNS anycast addresses to neighboring routers across multiple ASs that also use BGP as their routing protocols.  
As illustrated in the figure Anycast Addressing for DNS using BGP below, to enable anycast for DNS queries among three different networks that span different geographical regions, you can configure two DNS servers with the same DNS anycast addresses in the AS 65497 network. Since other network routers in AS 65498 and AS 65499 also use BGP as the routing protocol, the DNS anycast addresses can be advertised across these networks.

*Anycast* *Addressing* *for* *DNS* *using* *BGP*

*[drawio]*

To enable DNS anycast addressing across different ASs, you configure BGP as the routing protocol on the NIOS appliance. (As illustrated in the figure Anycast and BGP Configuration on Infoblox Appliances below, the AS 65497 network contains the Infoblox DNS anycast servers, and the AS 65499 network contains Router 1 and 2. The routers use BGP and are peered with the DNS servers. You can configure anycast addressing on the loopback interface of the DNS servers and select BGP as the protocol to advertise the anycast addresses to Router 1 and 2 in AS 65499. For information, see [*Configuring Anycast Addresses*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280404744). Once you have configured the DNS servers, the appliances automatically add filters on the advertising interfaces to limit the advertisements to the configured anycast IP addresses. Similarly, BGP filters are applied to ensure that the DNS servers only receive default route advertisements from the neighboring routers.

*Anycast* *and* *BGP* *Configuration* *on* *Infoblox* *Appliances*

*[drawio]*

BGP uses timers to determine how often the appliance sends keepalive and update messages, and when to declare a neighboring router out of service. You can configure the time intervals for these timers. For information, see Configuring BGP in the NIOS Appliance below.  
The BGP protocol service is automatically configured to send SNMP queries about BGP runtime data. The appliance sends SNMP traps to its neighboring routers when it encounters issues with the protocol. BGP is configured to send SNMP traps as defined in *RFC4273* *Definitions* *of* *Managed* *Objects* *for* *BGP-4*. You must enable and configure the SNMP trap receiver on the Grid member for the member to send SNMP traps. For information, see [*SNMP MIB Hierarchy*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280760493).  
You can use the `set bgp` command to set the verbosity levels of the BGP routing service. The appliance writes BGP statistical information to the syslog. After you configure the settings, you must restart the DNS services for the settings to take effect. For information, refer to the *Infoblox* *CLI* *Guide*. Note that when you enter any BGP command and wait for the interface to return more information, the appliance disconnects your CLI session if you restart services or make other BGP configuration changes through Grid Manager. You must re-enter your credentials to log back in to the CLI.  
You can configure BGP on any interface to advertise anycast addresses across multiple ASs.

> **warning**
>
> ### Note
> 
> NIOS selects the interface for BGP advertisement based on the routing configuration.

The appliance supports BGP version 4. For more information about BGP, refer to *RFC4271,* *A* *Border* *Gateway* *Protocol* *4* *(BGP-4)*.
