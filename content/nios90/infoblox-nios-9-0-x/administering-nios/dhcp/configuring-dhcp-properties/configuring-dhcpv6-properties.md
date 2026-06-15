---
title: "Configuring DHCPv6 Properties"
source: "/space/nios90/280663691"
pageId: "280663691"
---
The following sections describe how to configure properties and options that apply to DHCPv6 objects only. You can configure and define the following DHCP properties:

- General properties, as described in the next section, see Defining General IPv6 Properties.
- DHCP options, as described in *[About DHCPv6 Options](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/about-dhcpv6-options)*.

# Defining General IPv6 Properties

You can configure general DHCPv6 properties at the Grid level and override them at the member and lower levels.

1. **Grid**: From the **Data** **Management** tab, select the **DHCP** tab, and then click **Grid** **DHCP** **Properties** from the Toolbar.  
   **Member**: From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Members** tab -&gt; **Members** -&gt; *member* checkbox, and then click the Edit icon.  
   **Network**: From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** -&gt; *network* checkbox, and then click the Edit icon.  
   **Network** **Container**: From the **Data** **Management** tab, select the **IPAM** tab -&gt; *network_container* checkbox, and then click the Edit icon.  
   **Fixed** **Address**: From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** -&gt; *network*-&gt; *Fixed* *address* checkbox, and then click the Edit icon.
2. In the *DHCP* *Properties* editor, select the **IPv6** **DHCP** **Options** tab, and complete the following:
   
   - **Valid** **Lifetime:** Specify the length of time addresses that are assigned to DHCP clients remain in the valid state. When this time expires, an address becomes invalid and can be assigned to another interface.
   - **Preferred** **Lifetime:** Specify the length of time that a valid address is preferred. A preferred address can be used with no restrictions. When this time expires, the address becomes deprecated.
   - **Domain** **Name**: Enter the name of the domain for which the Grid serves DHCP data.
   - **DNS** **Servers**: Click the Add icon. Grid Manager adds a row to the table. In the table, enter the IPv6 addresses of DNS recursive name servers to which the DHCP client can send name resolution requests. The DHCP server includes this information in the DNS Recursive Name Server option in Advertise, Rebind, Information-Request, and Reply messages.
   - ** Custom IPv6 DHCP Options**: In the first field, select one of the following from the drop-down list:
     
     - **DHCPv6**: Select this to apply DHCPv6 options.
     - **DHCP**: Select this to apply DHCP options (dhcp-renewal-time or dhcp-rebinding-time).
   - Click the **Choose option** drop down and then select an option from the list.
   - In the third field, enter a value for the selected option. Note that certain options have predefined data types and their values must be entered in a specific format.
     
     Click + to add another option, or click - to delete a previously specified option. When overriding an option, enter the new value for the selected option.
3. Save the configuration.
