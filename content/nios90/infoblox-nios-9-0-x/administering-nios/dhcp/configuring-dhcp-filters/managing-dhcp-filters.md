---
title: "Managing DHCP Filters"
source: "/space/nios90/280761414"
pageId: "280761414"
---
You can do the following to manage DHCP filters:

*[toc]*

# Modifying DHCP Filters

To modify a filter:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Filters** tab -&gt; *filter_name* checkbox, and then click the Edit icon.
2. For a MAC address filter, the *DHCP* *MAC* *Filter* editor provides the following tabs from which you can modify information:
   
   - **General**: Modify the fields as described in [*Defining MAC Address Filters*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/configuring-mac-address-filters).
   - **DHCP** **Options**: Add or delete DHCP options. For information, see [*Defining MAC Address Filters*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/configuring-mac-address-filters).
   - **Extensible** **Attributes**: Add or delete extensible attributes that are associated with a specific DHCP range. You can also modify the values of extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
   - **Permissions**: This tab appears only if you belong to a superuser admin group. For information, see [*About Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions).

- For a relay agent filter, the Relay Agent Filter editor provides the following tabs from which you can modify information:
  
  - **General**: Modify the fields as described in [*Defining Relay Agent Filters*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/about-relay-agent-filters).
  - **Extensible** **Attributes**: Add and delete extensible attributes that are associated with a specific DHCP range. You can also modify the values of extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).

- For an option filter, the Option Filter editor contains the following tabs from which you can modify information:
  
  - **General**: Modify the fields as described in [*Defining Option Filters*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/configuring-option-filters).
  - **Rules**: Modify the match rules as described in [*Defining Option Filters*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/configuring-option-filters).
  - **DHCP Options**: Modify option spaces and DHCP options in the **Basic** tab as described in [*Defining Option Filters*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/configuring-option-filters). You must define the **PXE Lease Time** in the **Advanced** tab.
  - **BOOTP**: Modify BOOTP settings as described in [*Configuring IPv4 BOOTP and PXE Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-ipv4-bootp-and-pxe-properties).
  - **Extensible Attributes**: Add or delete extensible attributes that are associated with a specific DHCP range. You can also modify the values of extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).

- For a DHCP fingerprint filter, the Add IPv4 Fingerprint Filter editor provides the following tabs from which you can modify information:
  
  - **General**: Modify general information, such as the name and device class, as described in [*Defining DHCP Fingerprint Filters*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/configuring-dhcp-fingerprint-filters)*.*
  - **Fingerprints**: Add or delete DHCP fingerprints as described in [*Defining DHCP Fingerprint Filters*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/configuring-dhcp-fingerprint-filters)*.*.
  - **Extensible Attributes**: Add and delete extensible attributes that are associated with the DHCP fingerprint filter. You can also modify the values of extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).

- For a NAC filter, the NAC Filter editor contains the following tabs from which you can modifying information:
  
  - **General**: Modify the name and comment.
  - **Rules:** Modify the rules as described in [*Defining*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/about-nac-filters/About+NAC+Filters#AboutNACFilters-bookmark2589)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/about-nac-filters/About+NAC+Filters#AboutNACFilters-bookmark2589)[*NAC*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/about-nac-filters/About+NAC+Filters#AboutNACFilters-bookmark2589)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/about-nac-filters/About+NAC+Filters#AboutNACFilters-bookmark2589)[*Filters*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/about-nac-filters/About+NAC+Filters#AboutNACFilters-bookmark2589)[.](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/about-nac-filters/About+NAC+Filters#AboutNACFilters-bookmark2589)
  - **DHCP Options**: Add or delete DHCP options. For information, see [*Defining*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/about-nac-filters/About+NAC+Filters#AboutNACFilters-bookmark2589)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/about-nac-filters/About+NAC+Filters#AboutNACFilters-bookmark2589)[*NAC*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/about-nac-filters/About+NAC+Filters#AboutNACFilters-bookmark2589)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/about-nac-filters/About+NAC+Filters#AboutNACFilters-bookmark2589)[*Filters*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/about-nac-filters/About+NAC+Filters#AboutNACFilters-bookmark2589).
  - **Extensible Attributes**: Add and delete extensible attributes that are associated with a specific DHCP range. You can also modify the values of extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)*.*

3. Save the configuration and click **Restart** if it appears at the top of the screen.

You can modify the MAC address filter items and match rules for corresponding MAC address filters and option filters. For information, see Modifying[ ](#ManagingDHCPFilters-ModifyingMACAddressFilterItems)MAC[ ](#ManagingDHCPFilters-ModifyingMACAddressFilterItems)Address[ ](#ManagingDHCPFilters-ModifyingMACAddressFilterItems)Filter[ ](#ManagingDHCPFilters-ModifyingMACAddressFilterItems)Items[ ](#ManagingDHCPFilters-ModifyingMACAddressFilterItems) and Viewing[ ](#ManagingDHCPFilters-ViewingDHCPFilters)DHCP[ ](#ManagingDHCPFilters-ViewingDHCPFilters)Filters below.

## Modifying MAC Address Filter Items

To modify a MAC address filter item:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Filters** tab -&gt; *filter_name* -&gt; *mac_filter* checkbox, and then click the Edit icon.
2. The *MAC* *Address* *Filter* *Item* editor contains the following tabs from which you can edit data:
   
   - **General**: Modify the fields as described in [*Adding MAC Address Filter Items*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/configuring-mac-address-filters).
   - **Registration**: Modify registration settings as described in [*Adding MAC Address Filter Items*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/configuring-mac-address-filters).
   - **Extensible** **Attributes**: Add or delete extensible attributes that are associated with a specific DHCP range. You can also modify the values of extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
3. Save the configuration and click **Restart** if it appears at the top of the screen.

# Viewing DHCP Filters

To view DHCP filters:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Filters** tab.
2. Grid Manager displays the following for each filter:
   
   - **Name**: The name of the filter.
   - **Filter** **Type**: The filter type.
   - **Comment**: The information about the filter.
   - **Site**: The location to which the filter belongs. This is one of the predefined extensible attributes.

## Viewing MAC Address Filter Items

To view a list of MAC addresses in a specific MAC address filter:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Filters** tab -&gt; *filter_name*.
2. Grid Manager displays the following:
   
   - **MAC** **Address**: The DHCP fingerprint information of client's device. This field is displayed only when users use captive portal for authentication. MAC address assigned to the filter.
   - **Username**: Grid Manager displays the username to which the MAC address belongs in the lease viewers.
   - **Comment**: The information you entered about the filter item.
   - **Expiration** **Time**: The expiration time you configured for the MAC address.
   - **Fingerprint**: The DHCP fingerprint information of client's device. This field is updated when users use Captive Portal for authentication.
   - **Site**: The location to which the filter belongs. This is one of the predefined extensible attributes.

# Deleting Filters

You can delete a filter that is not currently assigned to a DHCP range. You can also remove a filter from a DHCP range, and then delete the filter if it is not in use.  
To delete a filter:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Filters** tab -&gt; *filter_name*, and then click the Delete icon.
2. In the *Delete* *Confirmation* dialog box, click **Yes**.

The appliance puts the deleted filters in the Recycle Bin, if enabled. You can later restore the filter if needed.

To schedule this task, click the Delete icon -&gt; **Schedule** **Delete**. In the *Schedule* *Deletion* dialog box, click **Delete** **Later**, and then specify a date, time, and time zone.
