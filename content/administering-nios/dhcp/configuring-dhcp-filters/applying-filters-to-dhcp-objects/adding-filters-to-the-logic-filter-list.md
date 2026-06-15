---
title: "Adding Filters to the Logic Filter List"
source: "/space/nios90/1320422623"
pageId: "1320422623"
---
The filters you add to the Logic Filter List correspond to the match rules that are written to the dhcpd configuration file. The appliance uses these filters to identify DHCP options and values to return to the matching clients. You can apply option, MAC, and NAC filters to the Logic Filter List. Note that a DHCP client is eligible to receive DHCP options defined in a filter if it matches the filter criteria. Whether the client receives specific options and their corresponding values depends on the hierarchy of the options and the list of options requested by the client through DHCP option 55. You can configure the appliance to ignore the option list requested by a matching client and return all the options that the client is eligible to receive. For information about how to ignore the option list requested by a client, see [*Configuring General IPv4 DHCP Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663815).

> **warning**
>
> ### Notes
> 
> - The appliance allows you to add an empty IPv4 logic filter at the end of the logic filter list, which means that you can add an IPv4 logic filter without defining DHCP options in it. In addition, you can change the order of the filters in the logic filter list.
> - When a range has multiple class filters assigned to it, if any of the filters deny a lease to a client, then the client will not get a lease even if another class filter allows it.

The appliance decides which options and values to return to a client based on the following:

- If you have different DHCP options defined in a range and any DHCP filters in the Class Filter and Logic Filter lists, and these options do not overlap, the appliance merges and returns all options to the matching client. For example, a DHCP client obtains a lease from a DHCP address range (R) through an option filter in the Class Filter List (CF), which contains an option statement (O1) with a value of (S1). The appliance then matches a filter in the Logic Filter List (LF) that contains an option statement (O2) with a value of (S2). In this case, option statements O1 and O2 and their values S1 and S2 are merged and returned to the matching client.
- If there are overlapping DHCP options in a range and any DHCP filters in the Class Filter and Logic Filter lists, the values defined in the Class Filter List filters take precedence over those defined in the range and filters in the Logic Filter List. The appliance returns the option value defined in the class filters to the matching client. For example, a DHCP client obtains a lease from a DHCP address range (R) through an option filter in the Class Filter List (CF), which contains an option statement (O1) with a value of (S1). The appliance then matches a filter in the Logic Filter List (LF) that contains the same option statement (O1) with a value of (S2). In this case, the option value S1 defined in the option filter in the Class Filter List takes precedence and is returned to the DHCP client.
- When you apply option, MAC, and NAC filters to the Logic Filter List, the appliance translates their match rules into a DHCP if/elseif/else statement using the match rules of the first filter on the list as the "if" expression in the statement. Match rules in subsequent filters are translated into the "elseif" statements, and the last filter that does not contain any match rules is translated into the "else" statement. Note that a filter without any match rules can only be added as the last filter in the Logic Filter List.

For more information about how the appliance grants and denies leases to requesting clients and determines which DHCP options to return to the matching clients, see Configuration Example: Using the Class and Logic Filter Lists below.

To apply filters:

1. **Grid:** From the **Data** **Management** tab **->** **DHCP** tab**,** select **Grid** **DHCP** **Properties** from the Toolbar.  
   **Member**: From the **Data** **Management** tab, select the **DHCP** tab -> **Members** tab -> *member* checkbox -> Edit icon.  
   **Network**: From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** -> *network* checkbox, and then click the Edit icon.  
   **DHCP** **Range**: From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** -> *network* ->*addr_range* checkbox, and then click the Edit icon  
   **Fixed** **Address**: From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** -> *network* -> *fixed_address* checkbox, and then click the Edit icon.  
   **IPv4** **Reservation**: From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** -> *network* -> *reservation* checkbox, and then click the Edit icon.  
   **Host** **Address**: From the **Data** **Management** tab, select the **DHCP** *tab -> ****Networks**** tab -> ****Networks**** -> network -> host_record* checkbox, and then click the Edit icon. Select the host IP address, and then click the Edit icon.  
   **IPv4** **Network** **or** **Fixed** **Address** **Template**: From the **Data** **Management** tab, select the **DHCP** tab -> **Templates** tab -> (*IPv4* *network* *or* *fixed* *address)* *template* checkbox, and then click the Edit icon.
2. In the editor, click **Toggle** **Advanced** **Mode**, and then select the **Filters** tab.
3. **Logic** **Filter** **List**: You can keep the inherited IPv4 logic filters or override them. To override the value that has been inherited from the upper level, click **Override**. Click the Add icon to add a filter to match a client based on the match rules defined in the filter.   
   If you have only one configured DHCP filter, the appliance displays the filter in the table. Otherwise, in the *DHCP* *Filter* *Selector* dialog box, click the filter you want to add. Use SHIFT+click and CTRL+click to select multiple filters.
4. Complete the following to add the **Class** **Filter** to a DHCP address range:
   
   - Click the Add icon to add a filter to identify the class of a matching client, and to grant or deny a lease to a client. For more information, see Adding Filters to the Class Filter List above.
     
     If you have only one configured DHCP filter, the appliance displays the filter in the table. Otherwise, in the *DHCP* *Filter* *Selector* dialog box, click the filter you want to add. Use SHIFT+click and CTRL+click to select multiple filters.  
     For each filter you add, click the **Action** column and select one of the following from the drop-down list:
   - **Grant** **lease**:  
     For MAC address filters: Select this to assign an IP address from the address range to a requesting host whose MAC address matches the MAC address in the filter.  
     For relay agent filters: Select this to assign an IP address from the address range when one or both of the relay agent identifiers of the requesting host match the filter criteria.  
     For option filters: Select this to assign an IP address from the address range to a requesting host whose DHCP options match the DHCP options and match rules defined in the filter.  
     For NAC filters: Select this to assign an IP address from the address range to a requesting host based on the authentication results from a RADIUS authentication server group.  
     For DHCP fingerprint filters: Select this to grant a lease from the address range to a requesting host based whose DHCP fingerprint matches the DHCP fingerprint in the filter.
   - **Deny** **lease**:  
     For MAC address filters: Select this to deny an address request from a host whose MAC address matches a MAC address in the filter.  
     For relay agent filters: Select this to deny an address request when one or both relay agent identifiers match the filter criteria in the filter.  
     For option filters: Select this to deny an address request from a host whose DHCP options match the options and match rules in the filter.  
     For NAC filters: Select this to deny an address request from a host based on the authentication results from a RADIUS authentication server group.  
     For DHCP fingerprint filters: Select this to deny a lease request when the DHCP fingerprint of the requesting host matches the DHCP fingerprint in the filter.  
     The appliance uses filters in both the Class Filter and Logic Filter lists to determine the DHCP options and values it returns to the matching clients.

> **warning**
>
> ### Note
> 
> You can only add a filter that does not contain any match rules as the last filter in the Logic Filter List.

1. Save the configuration and click **Restart** if it appears at the top of the screen.
