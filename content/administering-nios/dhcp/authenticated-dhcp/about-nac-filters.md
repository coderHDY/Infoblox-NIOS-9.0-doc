---
title: "About NAC Filters"
source: "/space/nios90/280270605"
pageId: "280270605"
---
You can define NAC filters that specify authentication results from a remote, backend RADIUS server such as the Sophos NAC Advanced server. You can then apply each filter to a DHCP range or range template and indicate whether the DHCP server grants or denies a lease when the authentication result matches the filter. You can apply NAC filters to any DHCP range and DHCP range template.  
NAC filters are enabled by default. When necessary, you can disable them for the entire Grid so you can perform maintenance on your RADIUS server. When you disable NAC filters, no service interruptions, service down times, configuration changes, or server restarts are required. For information about how to disable NAC filters, see Disabling NAC Filters below.  
In a NAC filter, you can define rules that specify the following:

- The status of the RADIUS authentication server group:
  
  - Success: At least one of the servers in the RADIUS authentication server group is up.
  - Fail: The MAC address in the DHCP request is not in the authentication cache and all servers in the server group are down.
  - Disabled: The RADIUS authentication server group is disabled, all the servers in the group are disabled, or the member is not assigned a server group.
- The response from the RADIUS server:
  
  - Accept: The response is an Access-Accept packet.
  - Reject: The response is an Access-Reject packet.
- Whether the Access-Accept packet contains an error. The Infoblox DHCP server expects certain RADIUS VSAs in the Access-Accept packet. An error occurs when any of the RADIUS VSAs are missing. For information about the Access-Accept packet and the RADIUS VSAs, refer to the documentation for the specified RADIUS server.
  
  - Yes: The Access-Accept packet does not include one or more RADIUS VSAs.
  - No: There are no errors in the Access-Accept packet.
- A compliance state: unknown, non-compliant, compliant or partially compliant.
- A RADIUS server user class.

When the member DHCP server receives an address request, it checks the DHCP ranges in their priority order. For information about the order of DHCP ranges, see *[Listing DHCP Ranges](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270632)*.  
For each DHCP range, it checks if the request matches any MAC filters, relay agent filters, or DHCP option filters that apply to the range. (For information about these filters, see *[Configuring IPv4 DHCP Filters](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280791719)*.) If any of those filters match, then the member either grants or denies a lease to the DHCP client, based on the filter. If none of those filters match and there are NAC filters defined, then the member tries to send an authentication request to a server in the RADIUS authentication server group.  
If you want the member DHCP server to grant leases to specific DHCP ranges in case the RADIUS authentication server group is considered disabled (server state = disabled) or if all RADIUS servers are down (server state = failure), create a NAC filter for each situation and apply it to the appropriate range.  
Note that when you create a NAC filter, you do not have to include rules that specify prerequisite conditions. For example, when you create a filter that specifies a RADIUS server compliance state or user class, you do not have to include rules that specify the following: server state=success, server response=accept, and server error = no.

# Defining NAC Filters

To define a NAC filter:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Filters** tab, and then expand the Toolbar and click **Add** -> **IPv4** **NAC** **Filter**.  
   or  
   From any panel in the **DHCP** tab, expand the Toolbar and click **Add** -> **IPv4** **NAC** **Filter**.
2. In the *Add* *Filter* Wizard, complete the following and click **Next**:
   
   - **Name:** Enter a name for the filter. You can enter a maximum of 255 characters. The name must be unique within a specific network. If you want to specify option settings in the filter, the name must be unique among all NAC filters.
   - **Comment:** Optionally, enter additional information about the NAC filter.
3. Create a rule as follows:
   
   - In the first drop-down list, select one of the following criterion: **Compliance** **State**, **Server** **Error**, **Server** **Response**, **Server** **State** or **User** **Class**.
   - In the second drop-down list, select an operator: **equals** or **does** **not** **equal**.
   - The selections in the third drop-down list depend on the criterion you selected:
     
     - **Compliance** **State**: Select one of the following compliance states: **Unknown**, **Non-compliant**, **Compliant** or **Partially** **Compliant**.  
       **Server**** Error**: The Infoblox DHCP server expects certain RADIUS VSAs in the Access-Accept packet. When any of the VSAs are missing, then the DHCP server considers this an error. For information about the Access-Accept packet and the VSAs, refer to the documentation for the specified RADIUS server. Select one of the following:
     - **Yes**: Create a rule that matches when the RADIUS server sends an Access-Accept packet with a missing VSA.
     - **No:** Create a rule that matches when the RADIUS server sends an Access-Accept packet with no errors.  
         
       **Server**** Response**: Select one of the following:
     - **Accept:** Create a rule that matches when the server sends back an Access-Accept packet.
     - **Reject:** Create a rule that matches when the server sends back an Access-Reject packet.  
         
       **Server**** State**: Select one of the following:
     - **Success:** Create a rule that matches when at least one RADIUS server in the group is up.
     - **Fail:** Create a rule that matches when the MAC address of the DHCP client is not in the cache and all RADIUS servers in the server group are down.
     - **Disable:** Create a rule that matches when the RADIUS authentication server group is disabled, all servers in the group are disable, or the member was not assigned a server group.  
         
       **User**** Class**: Enter the RADIUS user class value, for example, NACDeny. The member DHCP server does not validate the entry. Therefore, you must make sure that the user class you enter matches the user class name on the RADIUS server.  
         
       To add another rule:
     - Click **+** to add another rule at the same level.
     - Click **|<-** to add an **all** (logical AND) or **any** (logical OR) operator line and a parenthetical rule that is indented one level and above the first rule.
     - Click **->|** to add an **all** (logical AND) or **any** (logical OR) operator line and a parenthetical rule that is indented one level.  
       After you add all the match rules, you can click **Preview** to view the rules or click **Reset** to remove the previously configured rules and start again.
4. Click **Next** and complete the following to define DHCP options:
   
   - **Option**** Space**: Select an option space from the drop-down list. This field is not displayed if you do not have custom option spaces. The appliance uses the **DHCP** option space as the default.
   - **Lease**** Time**: Enter the value of the lease time in the field and select the time unit from the drop-down list. The lease time applies to hosts that meet the filter criteria.  
       
     **Options** **to** **Merge** **with** **Object** **Options**  
       
     Click the Add icon. Grid Manager adds a new row to the table with the default **DHCP** option space and option name displayed. Complete the following:
   - **Option**** Space**: Click the down arrow and select an option space from the drop-down list. The selected option space contains the corresponding DHCP options.
   - **Option**** Name**: Click the down arrow and from the drop-down list, select the DHCP option you want to return to the matching client.
   - **Value**: Enter the match value that you want the filter to use for the selected DHCP option. For example, enter the value 172.124.3.0 for the SUNW.SrootIP4 option.  
       
     To add more options to the filter, click the Add icon and repeat the steps.
5. Click **Next** to define extensible attributes. For information, see [*Using*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215/Managing+Extensible+Attributes#Using Extensible Attributes)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215/Managing+Extensible+Attributes#Using Extensible Attributes)[*Extensible*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215/Managing+Extensible+Attributes#Using Extensible Attributes)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215/Managing+Extensible+Attributes#Using Extensible Attributes)[*Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215/Managing+Extensible+Attributes#Using Extensible Attributes).
6. Save the configuration and click **Restart** if it appears at the top of the screen.

After you add NAC filters, you must then apply them to DHCP ranges, as described in [*Applying*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270743)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270743)[*Filters*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270743)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270743)[*to*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270743)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270743)[*DHCP*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270743)[* Objects*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270743). You can also list, modify or delete NAC filters, as described in [*Managing*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761414)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761414)[*DHCP*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761414)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761414)[*Filters*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761414).

# Disabling NAC Filters

NAC filters are enabled by default. When you disable them, the appliance bypasses evaluations of all NAC filters for the entire Grid. There are no configuration changes, service restarts, or service down times when you disable the NAC filters. The appliance keeps the filter configurations so you can enable them at a later time.

To disable NAC filters for the Grid:

1. From the **Data** **Management** tab -> **DHCP** tab, select **Grid** **DHCP** **Properties** from the Toolbar.
2. In the *Grid** DHCP** Properties* editor, click **Toggle ****Advanced**** Mode**, select the **General** tab -> **Advanced** tab, and then complete the following in the Common Properties section:
   
   - **Disable** **All** **NAC** **Filters:** Select this to disable all NAC filters in the Grid. The appliance keeps the filter configurations so you can enable them when needed.
