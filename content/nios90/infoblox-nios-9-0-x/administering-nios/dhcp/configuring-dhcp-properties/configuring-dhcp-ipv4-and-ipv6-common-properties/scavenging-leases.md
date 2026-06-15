---
title: "Scavenging Leases"
source: "/space/nios90/1462338037"
pageId: "1462338037"
---
When unused DHCP leases accumulate, they can cause unnecessary database growth. In a DHCPv4 failover setup, the primary server manages free leases, while the secondary server manages backup leases. Similarly, in DHCPv6, free, expired, and released leases can also build up over time. The DHCP lease scavenging feature helps by automatically removing these old and unused leases after a set period, keeping the database clean and efficient.  
When you enable this feature for DHCPv4 leases, the appliance permanently deletes the free and backup IPv4 leases, and you can no longer view or retrieve the lease information. This option can be enabled globally at the Grid level, and more specifically for a member, shared network, network, network container, DHCP range, network template, DHCP range template.  
When you enable this feature for DHCPv6 leases, the appliance permanently deletes the free, expired, and released IPv6 leases, and you can no longer view or retrieve the lease information. This option can be enabled at the Grid level, and overridden at the member level.  
The period of time that you specify is the duration after the expiration date of a lease, not its release date. For example, you specify a time period of 5 days when you enable this feature. If the lease time of an IP address is 10 days, but the lease is released after five days, the appliance still deletes the lease from the database after 15 days because the IP address has been leased.

Note that If you plan to enable this feature after upgrading from a previous NIOS version, Infoblox recommends that you enable it during off-peak hours, as it may impact DHCP services.

To enable scavenging of IPv4 and IPv6 leases:

1. **Grid**: From the **Data** **Management** tab, select the **DHCP** tab, and then click **Grid** **DHCP** **Properties** from the Toolbar.  
   **Member**: From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Members** tab -&gt; **Members** -&gt; *member* checkbox, and then click the Edit icon.  
   **Network**: From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** -&gt; *network* checkbox, and then click the Edit icon. This is applicable for IPv4 lease scavenging only.  
   **Network** **Container**: From the **Data** **Management** tab, select the **IPAM** tab -&gt; *network_container* checkbox, and then click the Edit icon. This is applicable for IPv4 lease scavenging only.  
   **DHCP** **Range**: From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** -&gt; *network* -&gt;* addr_range* checkbox, and then click the Edit icon. This is applicable for IPv4 lease scavenging only.
2. In the editor, click **Toggle** **Advanced** **Mode** if the editor is in basic mode, and then click the **General** tab -&gt; **Advanced** tab.
   
   In the Network editor for IPv4 lease scavenging, click **Toggle** **Advanced** **Mode** if the editor is in basic mode, and then click **IPv4** **DHCP** **Options** -&gt; **Advanced**.  
   Complete the following:
   
   - **IPv4** **Properties**
     
     - **Lease** **Scavenging**: This is disabled by default. Select the **Scavenge** **free** **and** **backup** **leases** **after** checkbox and specify the number of days or weeks that free and backup IPv4 leases remain in the database before they are automatically deleted. This can be set for the Grid, member, network, and network container.
   - **IPv6 Properties**
     
     - **Lease Scavenging**: This is disabled by default. Select the **Scavenge free, expired and released leases after** checkbox and specify the number of hours, days, or weeks that free, expired, and released IPv6 leases remain in the database before they are automatically deleted. The minimum is 6 hours and the maximum is 180 days. The default is one week. This can be set at the Grid and member level.
3. Save the configuration.
