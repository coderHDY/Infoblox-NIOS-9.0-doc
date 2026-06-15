---
title: "Creating a Grid Master"
source: "/space/nios90/319488802"
pageId: "319488802"
---
To create a Grid, you first create a Grid Master, and then add members. Although the Grid Master can be a single appliance (a "single master"), a more resilient design is to use an HA pair (an "HA master") to provide hardware redundancy. For information about HA pairs, see [*About HA Pairs*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/about-ha-pairs). The basic procedure for forming two appliances into an HA master is shown in the Initially Configuring a Pair of Appliances as a Grid Master figure. You can create a Grid Master in either IPv4, IPv6, or dual mode (IPv4 and IPv6). An IPv4 Grid Master uses IPv4 as the Grid communication protocol, so it supports IPv4 and dual mode Grid members. An IPv6 Grid Master uses IPv6 as the Grid communication protocol, so it supports IPv6 and dual mode Grid members. A dual mode Grid Master supports IPv4, IPv6, and dual mode Grid members. You can set either IPv4 or IPv6 as the communication protocol. All Infoblox hardware platforms, except for the following appliances, support configuration as a Grid Master or Grid Master Candidate: appliances with 50 GB disks that are running on any of the NIOS 8.6.5 or prior versions and appliances with 150 GB disks that are running on any of NIOS 9.0.x versions.

For information about which vNIOS appliance supports configuration as a Grid Master, see [vNIOS Appliance Specifications](https://docs.infoblox.com/space/vniosspec/1334542471/vNIOS+X5+and+X6+Series+Appliance+Specifications).

*Initially* *Configuring* *a* *Pair* *of* *Appliances* *as* *a* *Grid* *Master*

*[drawio]*

After the two nodes form an HA pair, Node 2 initiates a key exchange and creates an encrypted VPN tunnel with Node 1. The two nodes communicate between the VIP interface linked to the HA port on Node 1 and the LAN1 port on Node 2. The initialization of VPN communications between the two nodes is shown in the below figure.

*Establishing* *a* *VPN* *Tunnel* *for* *Grid* *Communications*

*[drawio]*

After the nodes establish a VPN tunnel between themselves, Node 1 sends Node 2 its entire database (its configuration settings and service data). Since the configuration contains the VRID (virtual router ID) for the HA pair, Node 2 starts listening for VRRP advertisements containing that VRID number. Also, since Node 1 is already sending such advertisements, Node 2 receives one and assumes the passive role in the HA pair.

After the initial transmission of its database, Node 1 continues to send Node 2 real-time database updates through the VPN tunnel.

Node 1 maintains the synchronization of the database throughout the Grid—which, at this point, has no other members—sends VRRP advertisements indicating its physical and network health, and—if configured to do so— provides network services. Node 2 maintains a state of readiness to assume the mastership in the event of a failover. You can see the flow of HA and Grid-related traffic from ports on the active node to ports on the passive node in the Traffic and Ports that an HA Grid Master Uses figure. This illustration also shows the ports that you can use for management traffic and network service.

*Traffic* *and* *Ports* *that* *an* *HA* *Grid* *Master* *Uses*

*[drawio]*



From the management system, you can manage the active node of the HA Master by making an HTTPS connection to the VIP interface and using the GUI, and by making an SSHv2 connection to the LAN1 port (and MGMT port, if enabled) and using the CLI. If you enable the MGMT port on an HA pair, you can make an HTTPS connection through the MGMT port on the active node, and you can make an SSHv2 connection through the LAN1 or MGMT port on the active and passive nodes.

> **warning**
>
> ### Note
> 
> For information about enabling and using the MGMT port, SSH, and the Infoblox GUI, see [*Using the MGMT Port, *](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/using-the-mgmt-port)[Managing Security Operations](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-security-operations), and [*Logging on to the NIOS UI*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/logging-on-to-the-nios-ui).

# Port Numbers for Grid Communication

If connectivity between Grid members must pass through a firewall, the firewall policies must allow the initial key exchange and subsequent VPN traffic to pass. The key exchange uses UDP with a source and destination port of 2114. VPN traffic uses UDP with a default source and destination port of 1194. The VPN port number is configurable.

To configure the VPN port number, complete the following:

1. On the **Infoblox Grid** tab -&gt; **Grid** **Manager** tab, expand the Toolbar, and then select **Grid** **Properties** -&gt; **Edit**.
2. On the **General** tab of the* Grid* *Properties* editor, type a new port number in the **VPN** **Port** field.
3. Save the configuration.
4. When Grid Manager displays a warning indicating that a product restart is required, click **Yes** to continue. The product automatically restarts.

A member and master first perform a handshake to authenticate each other and exchange encryption keys. Then, they build an encrypted VPN tunnel between themselves. The member typically initiates both of these connections. The master only initiates a key exchange if you manually promote a member to the role of master, (see [*Promoting a Master Candidate*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/managing-a-grid/promoting-a-grid-master-candidate)). The figure *Establishing a VPN Tunnel for Grid Communications* shows the typical connection exchange and default port usage not only between the two nodes forming an HA pair but also between a member and master when the member joins a Grid.

The member and master key exchange occurs when an appliance joins a Grid, during master promotion, and when a member reconnects to a Grid after becoming disconnected. At all other times, Grid-related communications occur through encrypted VPN tunnels.

# Grid Setup Wizard

The *Grid Setup* *Wizard* simplifies configuring a Grid. You can use it to configure an HA or single Grid Master as explained in the following sections and to join appliances to a Grid:

*[children]*

The *Grid Setup* *Wizard* appears when you first log in to the appliance. After that, you can access it at any time as follows:

1. On the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab.
2. Expand the Toolbar and select **Grid** **Properties** -&gt; **Setup** **(Grid** **Setup** **Wizard)**.
