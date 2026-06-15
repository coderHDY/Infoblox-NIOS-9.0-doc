---
title: "Applying DHCP Options"
source: "/space/nios90/1331822596"
pageId: "1331822596"
---
Some options may apply to all networks and some may apply to specific ranges and even hosts. When you apply an option, you select the object to which the option is applied, such as the Grid member, or network, and then specify a value for the option.  
Use the following guidelines when specifying option values:

- Enter **false** or **true** for a Boolean Flag type value.
- Enter an ASCII text string, or enter a series of octets specified in hex, separated by colons.
- Separate multiple values by commas. For example, to enter multiple IP addresses for netbios-name-servers, enter a comma between each IP address.

Here are some examples of option names and correctly formatted values:

| **Option name** | **Value** | **Comment** |
| --- | --- | --- |
| option 61  dhcp-client-identifier | MyPC | Double quotes are no longer needed for string type values |
| dhcp-client-identifier | 43:4c:49:45:54:2d:46:4f:4f | Series of octets specified in hex, separated by colons for a Data-string type value |
| netbios-name-servers | 10.1.1.5,10.1.1.10 | Multiple IP addresses separated by commas |
| option-80 | ABC123 | Custom option number 80 set to the string ABC123. |

To apply DHCP options:

1. **Grid**: From the **Data Management** tab, select the **DHCP** tab, and then click **Grid DHCP Properties** from the Toolbar.  
   **Member**: From the **Data Management** tab, select the **DHCP** tab -&gt; **Members** tab -&gt; **Members** -&gt; *member* check box, and then click the Edit icon.  
   **Network**: From the **Data Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** -&gt; *network* check box, and then click the Edit icon.  
   **Network Container**: From the **Data Management** tab, select the **IPAM** tab -&gt; *network_container* check box, and then click the Edit icon.  
   **DHCP Range**: From the **DataManagement** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** -&gt; *network* -&gt; *addr_range* check box, and then click the Edit icon.  
   **Fixed Address**: From the **Data Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** -&gt; *network* -&gt;  *fixed_address* check box, and then click the Edit icon.  
   **Reservation**: From the **Data Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** -&gt; *network* -&gt; *reservation* check box, and then click the Edit icon.  
   **Host Address**: From the **Data Management** tab, select the **DHCP** tab tab -&gt; **Networks** tab -&gt; **Networks** -&gt; *network *-&gt; *host_record* check box, and then click the Edit icon. Select the host IP address, and then click the Edit icon.  
   **Roaming Host**: From the **Data Management** tab, select the **DHCP** tab tab -&gt; **Networks** tab -&gt; **Roaming Hosts** -&gt; *roaming_host* check box, and then click the Edit icon.
2. In the *DHCP Properties* editor, select the **IPv4 DHCP Options** and complete the following:
   
   - The **Custom** **DHCP** **Options** section displays two fields. The first field displays **Choose** **option**. Click the arrow and select an option from the list. In the second field, enter a value for the selected option. Note that certain options have predefined data types and their values must be entered in a specific format. For information about the data types, see as described in the DHCP Option Data Types table above.
   - Click **+** to add another option, or click **-** to delete a previously specified option. When overriding an option already set by a parent object, enter the new value for the selected option or use "" to clear the value.  
     Note that if you created an option space as described in Defining IPv4 Option Spaces above, this section displays a list of option spaces in the first drop-down menu, so you can select the option space of the option you want to define.
3. Save the configuration and click **Restart** if it appears at the top of the screen.
