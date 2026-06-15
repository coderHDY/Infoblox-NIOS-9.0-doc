---
title: "About DHCPv6 Options"
source: "/space/nios90/280761905"
pageId: "280761905"
---
DHCPv6 options provide configuration and service information to IPv6 clients. Just like IPv4 options, IPv6 options appear as variable length fields at the end of the DHCPv6 messages.  
Just as in IPv4, the NIOS appliance supports the following options in the DHCPv6 options space:

- **Predefined** **options**: These are the option codes defined in RFC 3315. You cannot redefine these options or delete them from the DHCP option space. Option codes 1-48 are reserved and cannot be used to define custom options.
- **Custom ****options**: These are option codes 49 to 254. They are not defined by IETF standards and are available for private use. You can use these option codes to provide configuration or service information that none of the predefined options provide.

You can also create option spaces to define new groups of options. For example, you can create additional option spaces to define vendor specific options, which are encapsulated in DHCPv6 option 17. When an IPv6 client requests vendor specific options, it makes a request using the vendor specific options (option 17). The DHCP server then responds with the list of replies for the various options encapsulated into option 17.  
Note that custom options defined in the DHCP option space are included in the options section of the DHCP messages that DHCP servers and clients exchange.  
You can apply options globally at the Grid level, or more specifically at the member, network, range, host and roaming host levels.

# Configuring DHCPv6 Options

To use DHCPv6 options, you can do the following:

- Configure one or more option spaces, as described in the next section Defining IPv6 Option Spaces*.*
- Define custom options in the predefined DHCPv6 option space or add options to an option space that you configured. For more information, see Configuring Custom DHCP Options below[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271370/About+IPv4+DHCP+Options#bookmark2268)
- Specify values for the options and apply them to the Grid, or to a member, network, fixed address, host, or roaming host. For more information, see Applying DHCPv6 Options below*.*

# Defining IPv6 Option Spaces

DHCP members support the DHCPv6 option space by default. You can create additional option spaces to provide additional configuration or service information.  
To add a custom option space:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Option** **Spaces** tab.
2. Click the Add icon -> **IPv6 ****Option**** Space**.
3. In the *IPv6* *Option* *Space* wizard, do the following:
   
   - **Name**: Enter the name of the option space.
   - **Enterprise** **Number:** Enter the vendor's Enterprise Number that is registered with IANA.
   - **Comment**: Enter useful information about the option space.
   - **Options**: Click the Add icon to add options. For additional information, see the next section, Configuring Custom DHCP Option
4. Save the configuration and click **Restart** if it appears at the top of the screen.

After you create an option space and add options to it, you can apply the options as described in *[Applying DHCP Options](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271370)*.

# Configuring Custom IPv6 DHCP Options

You can define custom options in the DHCP option space or in an option space that you configured, as follows:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Option** **Spaces** tab.
2. Select either the **DHCPv6** option space or an IPv6 option space that you configured, and then click the Edit icon.
3. In the *Option* *Space* editor, click the Add icon to add a custom option. In the new row, complete the following:
   
   - **Name**: Enter the name of the custom DHCP option.
   - **Code**: Enter a number from 1 to 65535 to add a custom option in the DHCP option space or in an IPv6 option space that you have configured.
   - **Type**: Select the option type (such as ipv6-address, text, boolean, and string as described in [*DHCP Option Data Types*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271370)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271370)table).  
       
     Click the Add icon to add more options.
4. Save the configuration.

# Applying DHCPv6 Options

You can apply some options at the Grid or member level, and some options to specific networks, shared networks, fixed addresses and roaming hosts. When you apply an option, you select the object to which the option is applied, such as the Grid, member, or network, and then specify a value for the option.  
Use the following guidelines when specifying option values:

- Enter **false** or **true** for a Boolean Flag type value.
- Enter an ASCII text string, or enter a series of octets specified in hex, separated by colons.
- Separate multiple values by commas. For example, to enter multiple IP addresses for netbios-name-servers, enter a comma between each IP address.

DHCPv6 options support the same data types as DHCP IPv4 options. For more information about the data types, see* *[*DHCP Option Data Types*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271370)*.* To apply DHCP options:

1. **Grid**: From the **Data** **Management** tab, select the **DHCP** tab, and then select **Grid** **DHCP** **Properties** from the Toolbar.  
   **Member**: From the **Data** **Management** tab, select the **DHCP** tab -> **Members** tab -> **Members** -> *member* checkbox, and then click the Edit icon.  
   **Network**: From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** -> *network* checkbox, and then click the Edit icon.  
   **Network** **Container**: From the **Data** **Management** tab, select the **IPAM** tab -> *network_container* checkbox, and then click the Edit icon.  
   **Fixed** **Address**: From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** -> *network* -> *fixed_address* checkbox, and then click the Edit icon.  
   **Host** **Address**: From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** -> *network* -> *host_record* checkbox, and then click the Edit icon. Select the host IP address, and then click the Edit icon.  
   **Roaming** **Host**: From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Roaming Hosts** -> *roaming_host* checkbox, and then click the Edit icon.
2. In the *DHCP** Properties* editor, select the **IPv6 ****DHCP ****Options** and complete the following:
   
   - **Custom**** IPv6**** DHCP**** Options**: In the first field, select one of the following from the drop-down list:
     
     - **DHCPv6**: Select this to apply DHCPv6 options.
     - **DHCP**: Select this to apply DHCP options (dhcp-renewal-time or dhcp-rebinding-time).

In the second field, click the **Choose** **option** arrow and select an option from the list. In the third field, enter a value for the selected option. Note that certain options have predefined data types and their values must be entered in a specific format. For information about the data types, see [*DHCP Option Data Types*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271370).  
Click **+** to add another option, or click **-** to delete a previously specified option. When overriding an option, enter the new value for the selected option.  
Note that if you created an option space, this section displays a list of option spaces in the first drop-down menu, so you can select the option space of the option you want to define.

3. Save the configuration and click **Restart** if it appears at the top of the screen.

# Limitations of Custom DHCP Options

Note the following limitations when you enable DHCPv6 rapid commit:

- If you enable DHCPv6 rapid commit at a higher hierarchy level, all child objects at the lower hierarchy levels inherit this option. You cannot override this option for any child objects.
- You cannot add a network with rapid commit enabled to a shared network or define rapid commit in a network that belongs to a shared network.
- If the client does not include the DHCPv6 Rapid Commit option in the SOLICIT messages, the server will respond with an ADVERTISE using the default four-message exchange instead of REPLY using the two-message exchange even though rapid commit is enabled for the DHCP range in which the address is allocated.
