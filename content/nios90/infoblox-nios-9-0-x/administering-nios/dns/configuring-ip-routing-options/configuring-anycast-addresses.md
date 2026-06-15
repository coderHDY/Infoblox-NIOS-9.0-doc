---
title: "Configuring Anycast Addresses"
source: "/space/nios90/280404744"
pageId: "280404744"
---
Anycast addressing is supported on loopback interfaces on the NIOS appliance. IP configuration must be defined on the LAN1 interface before configuring DNS anycast addresses. Before creating IPv6 anycast IPs on the loopback interface, IPv6 must be enabled and configured on the LAN1 interface for the NIOS appliance, including the correct IPv6 gateway IP address.

> **warning**
>
> ### Note
> 
> When you add an anycast address, you need to start the service for the advertising to take place. However, when you remove an anycast address, no service restart is required to stop the service. Anycast advertising stops immediately.

To enable and configure anycast addressing:

1. From the **Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab -&gt; *Grid_member* checkbox -&gt; Edit icon.
2. In the *Grid* *Member* *Properties* editor, Click **Toggle** **Advanced** **Mode**.
3. When the additional tabs appear, click the **Anycast** tab.
4. Click the Add icon and choose **IPv4** **Address** or **IPv6** **Address**.
5. In the **Anycast** **Interfaces** list, enter the values or select the options for the new entry:
   
   - **Anycast** **Interface**: Anycast addressing is supported on the **loopback** only. This value is filled in automatically.
   - **Address:** Enter the IP address you want to assign as the anycast address to the loopback interface. Specify an IPv4 Address or an IPv6 Address based on the chosen type of address.  
     **Subnet** **Mask:** You cannot change the subnet mask of a loopback interface. The netmask is automatically set to 255.255.255.255, or /32; or 128 for IPv6.
   - **OSPF**: Select if you want the appliance to use OSPF to advertise the anycast address, and if necessary configure the OSPF settings. For information, see [*Configuring OSPF on the NIOS Appliance*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ip-routing-options/ip-routing-options). IPv4 and IPv6 options are configurable for this protocol. This is supported only for IPv4 and dual mode appliances, but not for IPv6 appliances.
   - **BGP**: Select this if you want the appliance to use BGP to advertise the anycast address, and then configure the BGP settings. This is supported only for IPv4 and dual mode appliances, but not for IPv6 appliances.  
     You must configure at least one routing method for DNS anycast. You can configure OSPF, BGP, or both (in most cases only one protocol will be used). The appliance cannot save the anycast address if you do not complete at least one routing configuration. Anycast cannot be used without dynamic routing.
   - **Comments:** Enter a text string to help identify this interface and IP address.
6. *If using OSPF for the current appliance*: Under **OSPF Area Configuration**, click the Add icon. A new configuration block appears in the properties editor.
   
   - Enter the values for the OSPF configuration as described in the section [*Configuring OSPF on the NIOS Appliance*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ip-routing-options/ip-routing-options).
   - Click the **Add** down arrow icon in the **OSPF Area Configuration** section. The new OSPF configuration is saved into a table.
7. *If using BGP for the current appliance*: In the properties editor, scroll down to the configuration block for **BGP Configuration**. For information, see [*Configuring BGP in the NIOS Appliance*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ip-routing-options/ip-routing-options).
   
   - In the **ASN** field, enter the Autonomous System ID number in which the NIOS appliance resides.
   - If necessary, modify the **BGP Timer Keep Alive** and **Hold Down** values. In most circumstances these values should be left at their defaults. Check your network's defined policies for the desired values if necessary.
   - Click the Add icon.
   - Enter the **Neighbor Router** IP address. This can be an IPv4 address or an IPv6 address.
   - Enter the **Remote ASN** (Autonomous System ID number) for the adjacent router.
8. Save the configuration. The system will warn that you must restart the appliance services in order to use the new configuration.
9. Log back in to the appliance.
10. From the **Data Management** tab, select the **DNS** tab -&gt; **Members/Servers** tab -&gt; *Grid_member* checkbox -&gt; Edit icon.
11. Select **Toggle Advanced Mode** (if necessary), click **General** and the **Basic** tab.
12. Under **Listen on these additional IP addresses**, click the Add button. The list of one or more previously created IPv4 and IPv6 addresses for the loopback interfaces (created in Step 4) appear in this table. (If the Add button is not active here, this indicates that you have not configured any loopback interfaces with their IP addresses.) Should you need to configure other DNS properties on this page, see the topics in [*Configuring the Grid to provide DNS Services*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services).  
   Note that if you remove an IP address from the list of Listen on these additional IP addresses, anycast advertising will stop immediately. No service restart is required to stop anycast from listening on this IP address.
13. Click **Save** **and** **Close**.

Configured anycast interfaces are now enabled to carry DNS traffic. For further information, see [* Specifying Source Ports*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/configuring-dns-service-properties/specifying-port-settings-for-dns).

> **warning**
>
> ### Note
> 
> You can select different options for the restart sequence for anycast service with DNS, when the DNS restart is invoked. You can manage this sequence with the help of CLI commands.
> 
> For more information on the CLI commands, see
> 
> - [*set restart_anycast_with_dns_restart*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-restart-anycast-with-dns-restart)
> - [*show restart_anycast_with_dns_restart*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-restart-anycast-with-dns-restart)

# Best Practices for Configuring Anycast Addresses

Infoblox highly recommends that you do the following before you configure an anycast address:

- Enable the anycast feature in the NIOS application.
- Install a valid DNS license, enable DNS and ensure that the DNS service is active.
- When you configure OSPF or OSPFv6, ensure that the OSPF monitor runs every four seconds.
- You must configure an IP address on the loopback interface.
