---
title: "Configuring General IPv4 DHCP Properties"
source: "/space/nios90/280663815"
pageId: "280663815"
---
When you configure general IPv4 DHCP properties at the Grid level, the configuration applies to the entire Grid. Though you can set DHCP properties at the Grid level, you can enable DHCP services at the member level only. Infoblox recommends that you configure the DHCP properties before you enable DHCP on the appliance. Depending on the properties, you can override some of them for the members, networks, DHCP ranges, fixed addresses, reservations, host addresses, and roaming hosts. To override an inherited DHCP property, click **Override** next to the property to enable the configuration.

# Specifying Authoritative

Only authoritative DHCP servers can send clients DHCPNAK messages when they request invalid IP addresses. For example, a client moves to a new subnet and broadcasts a DHCPREQUEST message for its old IP address. An authoritative DHCP server responds with a DHCPNAK, causing the client to move to the INIT state and to send a DHCPDISCOVER message for a new IP address. Authoritative servers also respond to DHCPINFORM messages from clients that receive their IP addresses from the DHCP server and require additional options after the initial leases have been granted.

# Defining Lease Times

When you configure DHCP general properties, you can specify the length of time the DHCP server leases an IP address to a client. The default on the appliance is 12 hours, and you can change this default according to your network requirements. There are a number of factors to consider when setting the lease time for IP addresses, such as the types of resources and clients on the network, and impact to traffic and performance. With NIOS appliances, you can set lease times at different levels, based on these factors. You can also select the **Unlimited** **Lease** **Time** checkbox to grant unlimited lease time to IP addresses.

> **error**
>
> ### Warning
> 
> *Inadvertently* *selecting* *the* *Unlimited* *Lease* *Time* *checkbox* *could* *cause* *a* *network* *outage* *when* *the* *address* *range* *runs* *out* *of* *IP* *addresses.*

You can set a default lease time at the Grid level and then override this setting for specific members, network containers, networks, IP address ranges or fixed addresses when appropriate.

# Configuring General IPv4 Properties

To configure general IPv4 DHCP properties:

1. **Grid**: From the **Data Management** tab, select the **DHCP** tab, and then click **Grid DHCP Properties** from the Toolbar.  
   **Member**: From the **Data Management** tab, select the **DHCP** tab -&gt; **Members** tab -&gt; **Members** -&gt; *member* checkbox, and then click the Edit icon.  
   **Network**: From the **Data Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** -&gt; *network* checkbox, and then click the Edit icon.  
   **Network Container**: From the **Data Management** tab, select the **IPAM** tab -&gt; *network_container* checkbox, and then click the Edit icon.  
   **DHCP Range**: From the **Data Management** tab, select the **DHCP** tab~~  ~~&gt; **Networks** tab -&gt; **Networks** -&gt; *network-&gt;addr_range* checkbox, and then click the Edit icon.  
   **Fixed Address**: From the **Data Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** -&gt; *network*-&gt; *fixed_address* checkbox, and then click the Edit icon.  
   **Reservation**: From the **Data Management** tab, select the **DHCP** tab &gt; **Networks** tab -&gt; **Networks** -&gt; *network*-&gt;*reservation* checkbox, and then click the Edit icon.
2. In the *DHCP Properties* editor of a Grid or member, select the **General Basic** tab. For all other objects, click **Toggle Advanced Mode** if the editor is in basic mode. When the additional tabs appear, select the **IPv4 DHCP Options Advanced** tab.
3. Complete the following:
   
   - **Authoritative:** Select **DHCP server is authoritative** to set the DHCP server as authoritative for the domain. This can be set for the Grid, member, network container, network and range.
   - **Lease Time**: Enter the lease time and select the time unit from the drop-down list. The default is 12 hours.
     
     - **Unlimited Lease Time**: Select this option to set an infinite lease time for all IP addresses.  
       To set all other properties for a Grid or member, toggle to the advanced mode and select the **General Advanced** tab to complete the following:
   - **Ignore** **Optionlist**: Select **Ignore** **optionlist** **requested** **by** **client** **and** **return** **all** **defined** **options** if you want the appliance to ignore the requested list of options in the DHCPREQUEST messages it receives from DHCP clients, and to include all the configured options in the DHCPACK and DHCPOFFER messages it sends back to the clients.
   - **LEASEQUERY**: Select **Allow** **LEASEQUERY** to enable the DHCP server to respond to DHCPLEASEQUERY messages.
4. Save the configuration and click **Restart** if it appears at the top of the screen.

> **error**
>
> **Warning**
> 
> *Inadvertently* *selecting* *the* *Unlimited* *Lease* *Time* *checkbox* *could* *cause* *a* *network* *outage* *when* *the* *address* *range* *runs* *out* *of* *IP* *addresses.*

# Configuring Fixed Addresses without Restarting the DHCP Service

When you configure or modify a fixed address, a DHCP service restart is required by default for the new configuration to take effect. You can override this default behavior by enabling the appliance to take immediate action when you configure or modify a fixed address outside a DHCP range without restarting DHCP service. This feature applies to host records for which DHCP is enabled, as it creates both the host address and the fixed address. You can enable this feature at the Grid or member level. Note that when you enable this feature, you cannot use the CLI command `set dhcp_expert_mode`.

> **warning**
>
> ### Note
> 
> - Enabling this feature might have a significant performance impact on your appliance, depending on the number of fixed addresses you have configured.
> - This feature applies only to fixed addresses outside a DHCP range. However, if you enable **Immediate FA Configuration** and create a fixed address inside a range, the address will still function as a fixed address, but the system will prompt for a DHCP service restart. The restart is optional.

For Cloud Network Automation deployment, this feature is automatically enabled on the Cloud Platform Appliance that has a valid Cloud Platform license installed. For information about Cloud Network Automation, see [*Deploying Cloud Network Automation*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation).  
To enable immediate fixed address configuration:

1. **Grid**: From the **Data Management** tab, select the **DHCP** tab, and then click **Grid DHCP Properties** from the Toolbar.  
   **Member**: From the **Data Management** tab, select the **DHCP** tab -&gt; **Members** tab -&gt; *member* checkbox, and then click the Edit icon.
2. In the *DHCP Properties* editor, click **Toggle Advanced Mode** if the editor is in basic mode. When the additional tabs appear, click the **General** tab -&gt; **Advanced** tab and complete the following:
   
   - **Immediate** **FA** **Configuration**: Select this checkbox to enable the new configuration immediately without restarting DHCP service when you modify or delete a fixed address.
3. Save the configuration and restart DHCP service.
