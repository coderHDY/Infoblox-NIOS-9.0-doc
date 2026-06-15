---
title: "Managing Microsoft DHCP Servers"
source: "/space/nios90/280270445"
pageId: "280270445"
---
You can control the DHCP services of managed Microsoft servers and set certain properties as well. This section includes the following topics:

*[toc]*

Viewing Members and Managed DHCP Servers

You can view Infoblox and Microsoft DHCP servers by navigating to the **Data** **Management** tab -> **DHCP** tab, and then selecting the **Members/Servers** tab. The panel displays the following information about each DHCP server:

- **Name**: The hostname of the Grid member or Microsoft server.
- **Status**: The status of the DHCP service on the Grid member or Microsoft server.
- **Comment**: Comments that were entered for the Grid member or Microsoft server.
- **DHCP**** Utilization:** The percentage of the total DHCP utilization of the member or Microsoft server. This is the percentage of the total number of DHCP hosts, fixed addresses, reservations, and leases assigned to the member or Microsoft server versus the total number of IP addresses (excluding IP addresses in the exclusion range) and all DHCP objects assigned to the member or DHCP server. Note that only enabled objects are included in the calculation. The appliance updates the utilization data every 15 minutes. The appliance displays the utilization data in one of the following colors:
  
  - Red: The DHCP resources are 100% utilized.
  - Yellow: The utilization percentage is over the effective high watermark threshold.
  - Blue: The utilization percentage is below the effective low watermark threshold.
  - Black: The utilization percentage is at any number other than 100%, or within the effective thresholds.
- **Site**: Values that were entered for this pre-defined attribute.

You can select the following additional columns for display:

- **Address**: The IP address of the member or Microsoft server.
- **Static ****Addresses**: The number of static IP addresses.
- **Dynamic**** Addresses**: The number of dynamically assigned IP addresses.

You can do the following:

- Use filters and the **Go****to** function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the **Go****to** field and select the object from the possible matches.
- Create a quick filter to save frequently used filter criteria. For information, see *[Using Quick Filters](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280401588)*.
- Edit the properties of a Grid member or Microsoft server.
  
  - Click the checkbox beside a Grid member or Microsoft server, and then click the Edit icon.
- Export the list of Grid members and Microsoft servers to a .csv file.
  
  - Click the Export icon.
- Print the list of Grid members and Microsoft servers.
  
  - Click the Print icon.

# Setting Microsoft DHCP Server Properties

From Grid Manager, you can set DHCP properties supported by a Microsoft server. These are applied to the server at the next synchronization. You can also set other properties that apply to Grid Manager only, such as thresholds and the logging.  
To set properties for a Microsoft DHCP server:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Members/Servers** tab -> **Members/Servers** -> *ms_server* checkbox, and then click the Edit icon.
2. In the *Microsoft* *Server* *DHCP* *Properties* editor, you can configure DHCP properties in each tab as follows: **IPv4** **DHCP** **Options** tab: Complete the following to configure basic DHCP options for the server:
   
   - **Routers**: Click the Add icon and enter the IP address of the router that is connected to the same network as the DHCP clients.
   - **Domain** **Name**: Enter the name of the domain for which the server serves DHCP data. The DHCP server includes this domain name in Option 15 when it responds with a DHCPOFFER packet to a DHCPDISCOVER packet from a client. If DDNS is enabled on the DHCP server, it combines the host name from the client and this domain name to create the FQDN (fully-qualified domain name) that it uses to update DNS.
   - **DNS** **Servers**: Click the Add icon and enter the IP address of the DNS server to which the DHCP client sends name resolution requests. The DHCP server includes this information in the DHCPOFFER and DHCPACK messages.
   - **Broadcast** **Address**: Enter the broadcast IP address of the network to which the DHCP server is attached.
   - **Custom** **DHCP** **Options**: This section displays DHCP and Microsoft vendor options that were synchronized from the Microsoft server. You can edit any of the options. When you select a different User Class or Vendor Class from the drop-down menus, Grid Manager automatically updates the option definitions in the drop-down list.  
     To configure additional DHCP options, click **+** and select a User Class and Vendor Class from the drop-down menus. Select an option from the drop-down list, and enter a value in the field beside it. You can click - to remove an option.  
       
     **DDNS** tab**:** You can enable or disable dynamic DNS updates and set certain properties.
     
     - **Enable** **DDNS** **Updates:** Click the checkbox to enable the Microsoft DHCP server to send dynamic DNS updates or clear the checkbox to disable this function.
     - **Option** **81** **Support**  
       **DHCP** **Server** **Updates** **DNS** **If** **Requested** **by** **Client:** The DHCP server updates DNS only if it is requested by the client. Otherwise, the client updates DNS.  
       **DHCP** **Server** **Always** **Updates** **DNS:** The DHCP server always updates DNS, regardless of any client request.  
         
       **Thresholds** tab: Thresholds are inherited from the Grid. These watermarks represent thresholds above or below which address usage is unexpected and might warrant your attention.
   - **Enable** **DHCP** **Thresholds:** Select this checkbox to enable the feature.
     
     - **High-water** **Mark:** Enter a number between 0 and 100. If the percentage of allocated addresses in a DHCP range exceeds this number, the DHCP server makes a syslog entry. The default is 95.
     - **Low-water** **Mark:** Enter a number between 0 and 100. If the percentage of allocated addresses in a DHCP range drops below this number, the DHCP server makes a syslog entry. The default is 0. Address usage must initially exceed the low-water mark threshold and then dip below it before the appliance considers low address usage an event requiring an alert.
3. Optionally, you can click **Toggle** **Expert** **Mode** to display the **Logging** tab, where you can enable the managing member to log the lease events of the Microsoft server. This setting is inherited from the Grid. You can override that setting by clicking **Override**, and then selecting or clearing the **Log** **Lease** **Events** **from** **DHCP** **server** checkbox.
4. Save the configuration and click **Restart** if it appears at the top of the screen.

# Controlling the DHCP Service of a Microsoft Server

You can start and stop the DHCP service of a managed Microsoft server from Grid Manager as follows:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Members/Servers** tab -> **Members/Servers** -> *ms_server* checkbox.
2. Expand the Toolbar and click **Start** or **Stop**.
3. Click **Yes** when the confirmation dialog appears.

# Disabling and Removing Microsoft DHCP Servers

If you remove a Microsoft server as a managed server, Grid Manager deletes all the DHCP ranges, leases, and fixed addresses associated with the server. It also deletes networks that were assigned only to the Microsoft server. It does not delete a network if it was assigned to other Microsoft servers as well.  
When you disable a Microsoft server, the managing Grid member terminates any on-going synchronization and restarts synchronization only when the server is re-enabled. The DHCP data associated with that server is preserved in the same state until synchronization resumes.  
For information on removing and disabling Microsoft servers, see *[Managing Microsoft Servers](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403352)**.*

# Modifying DHCP Server Assignments

If you disable a Microsoft DHCP server or take it offline for maintenance purposes, for example, you can assign its scopes to a member DHCP server.  
Following are the tasks to reassign scopes from a Microsoft server to a member DHCP server:

1. Set the server assignments of all fixed addresses in the scope to "None".  
   From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** -> *network* -> *fixed_address* checkbox, and then click the Edit icon. You can change the server assignment in the **General** tab of the *Fixed* *Address* editor.
2. Set the server assignments of all address ranges served by the Microsoft server to "None".  
   From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** -> *network* -> *addr_range* checkbox, and then click the Edit icon. You can change the server assignment in the **General** tab of the *DHCP* *Range* editor.
3. Change the sever assignments of the networks by deleting the Microsoft server and replacing it with a member DHCP server.  
   From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** -> *network* checkbox, and then click the Edit icon. You can change the server assignment in the **Member** **Assignment** tab of the *Network* editor. contains the following basic tabs from which you can modify data:
4. Modify the server assignments of all address ranges and specify the member DHCP server.  
   From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** -> *network* -> *addr_range* checkbox, and then click the Edit icon. You can change the server assignment in the **General** tab of the *DHCP* *Range* editor.
5. Restart services.

The member DHCP server starts granting lease requests after the restart. Note that you do not need to clear the leases that were active on the Microsoft server, because the member automatically clears them when you change the DHCP server assignment.
