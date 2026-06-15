---
title: "Defining Option Filters"
source: "/space/nios90/1394574011"
pageId: "1394574011"
---
To define an option filter:

1. From the **Data** **Management** tab, select the **DHCP** tab ->**Filters** tab, and then expand the Toolbar and click **Add** -> **IPv4/IPv6** **Option** **Filter**.
2. or  
   From any panel in the **DHCP** tab, expand the Toolbar and click **Add** -> **IPv4/IPv6** **Option** **Filter**.
3. In the *Add* *IPv4* *Option* *Filter/Add* *IPv6* *Option* *Filter* wizard, complete the following:
   
   - **Name**: Enter a meaningful name for the option filter. For example, you can enter Linux if you plan to use this option filter to screen Linux systems. The name must be unique within a specific network. If you want to specify option settings in the filter, the filter name must be unique among all option filters.
   - **Comment**: Enter useful information about the filter.
   - **Apply** **this** **filter** **as** **a** **global** **DHCP** **class**: The checkbox is enabled or disabled based on the value you configure in the `set default_global_dhcp_class_filter` [command](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1857650739). When you select this checkbox, the appliance defines a global class statement in the dhcpd configuration file for members that have DHCP enabled, regardless of whether the filter is applied to a DHCP range or range template. All DHCP clients that belong to this class receive the DHCP options and values you define in the filter. If the checkbox is left unchecked, the filter can still be explicitly assigned to a range or range template. However, once a filter is in use, the checkbox value cannot be modified, regardless of whether it is currently checked or unchecked. If you attempt to modify it, an error message will appear when you try to save the configuration.
4. Click **Next **and complete the following to add match rules:
5. In the first drop-down list, select a DHCP option.   
   For example,
   
   - If you are adding an IPv4 option filter, select **user-class(77)** for a specific user class, such as mobile users.
   - If you are adding an IPv6 option filter, select **dhcp6.fqdn (39) string **for a specific domain name.  
     The following DHCP options are not supported for IPv6 option filter:
     
     - dhcp6.bcms-server-a
     - dhcp6.bcms-server-d
     - dhcp6.domain-search
     - dhcp6.name-servers
     - dhcp6.nis-domain-name
     - dhcp6.nisp-domain-name
     - dhcp6.nis-servers
     - dhcp6.preference (7) 8-bit unsigned integer
     - dhcp6.rapid-commit (14) boolean
     - dhcp6.server-id (2) string
     - dhcp6.sip-servers-addresses
     - dhcp6.sip-servers-names(21) domain-list
     - dhcp6.sntp-servers
     - dhcp6.unicast(12)ip-address
   - If you are adding an IPv6 relay agent option filter, select **dhcp6.subscriber-id(38) **for a specific relay agent. The following DHCP options are supported for IPv6 relay agent filters:
     
     - dhcp6.subscriber-id(38) string
     - dhcp6.remote-id(37) string
     - dhcp6.interface-id(18) string  
       Note the following:  
       In the second drop-down list, select an operator: **exist** and **does not exist** are not supported for IPv6 relay agent filters.  
       The **Relay Agent** field can only be set to an integer value from 0 and 33. Example: 10.  
       The relay agent value 0 is reserved for relay-agent options introduced by a DHCP client, not by an intermediate relay-agent.  
       The relay agent value ranges from 1 to 32. Relay agent value 1 is the first relay agent that the DHCP packet encounters on its journey from a DHCP client to the DHCP server. Consequently, the relay agent IDs are incremented accordingly.   
       The relay** **agent value 33 is the relay-agent that is closest to the DHCP server on the path traversed by the DHCP packet, connecting the DHCP client to the DHCP server.
   
   - In the second drop-down list, select an operator.  
     If you select **equals** or **does** **not** **equal**, enter the value of the selected option you want the filter to match in the field.  
     If your operator and match value include a substring of an option value, enter the offset and length of the substring based on the following definitions:
     
     - **Offset**: Enter the number of characters at which the match value substring starts in the option data. Enter 0 to start at the beginning of the option data, enter 1 for the second position, and so on. For example, when you enter 2 and have a match value of MSFT, the appliance matches the value MSFT starting at the third character of the option data.
     - **Length**: Enter the length of the match value. For example, if the match value is MSFT, the length is 4.  
       You can do the following and repeat the filter selection steps to add another rule:
   - Click **+** to add another rule at the same level.
   - Click **|<-** to add an **all** (logical AND) or **any** (logical OR) operator line and a parenthetical rule that is indented one level and above the first rule.
   - Click **->|** to add an **all** (logical AND) or **any** (logical OR) operator line and a parenthetical rule that is indented one level.  
     After you add all the match rules, you can click **Preview** to view the rules that are written to the dhcpd configuration file or click **Reset** to remove the previously configured rules and start again. For information about how to use match rules, see Using Match Rules in Option Filters below.  
     Note that:  
     The IPv6 relay agent filter exist and does not exist operator is not supported.
6. Click **Next** and complete the following to define which DHCP options to return to the matching client:
   
   - **Option Space**: For an **IPv4 or IPv6 option filter** select an option space from the drop-down list. This field is not displayed if you do not have custom option spaces. The appliance uses the **DHCP** option space as the default.
   - **Lease Time**: Enter the value of the lease time in the field and select the time unit from the drop-down list. The lease time applies to hosts that meet the filter criteria.
     
     **Options** **to** **Merge** **with** **Object** **Options**  
     Click the Add icon. Grid Manager adds a new row to the table with the default **DHCP** option space and option name displayed. Complete the following:
   - **Option** **Space**: Click the down arrow and select an option space from the drop-down list. The selected option space contains the corresponding DHCP options that you can use as filter criteria.
   - **Option** **Name**: Click the down arrow and from the drop-down list, select the DHCP option you want to use as filter criteria.
   - **Value**: Enter the match value that you want the filter to use for the selected DHCP option. To add more options to the filter, click the Add icon and repeat the steps.
7. Click **Next** to define extensible attributes. For information, see [*Managing Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
8. Save the configuration and click **Restart** if it appears at the top of the screen.
