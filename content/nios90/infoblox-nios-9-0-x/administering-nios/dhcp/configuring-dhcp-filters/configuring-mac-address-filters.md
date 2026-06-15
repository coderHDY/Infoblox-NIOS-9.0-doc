---
title: "Configuring MAC Address Filters"
source: "/space/nios90/280403799"
pageId: "280403799"
---
The appliance can filter an address request by the MAC address of a requesting host. Depending on how you apply the MAC filter, the appliance can grant or deny the address request if the requesting host matches the filter criteria. You can also define DHCP options that you want to return to the matching client if the options are so configured. The client can also request specific options to be returned through DHCP option 55. The appliance returns DHCP options to matching clients based on how you apply the filters. For information, see [*Applying Filters to DHCP Objects*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/applying-filters-to-dhcp-objects).  
You can configure a MAC address filter or specific MAC addresses within a filter to expire after a certain amount of time has passed. Filter expiration is useful in situations where you want to keep filters running against updated MAC addresses. The permission to use the MAC addresses assigned to an IP address may become invalid after a certain period of time. For example, you can use a MAC address filter to restrict the right to use MAC addresses assigned to IP addresses for visiting guests or temporary workers. You can avoid removing invalid addresses from address filters manually by configuring the appliance to expire filters or to expire specific addresses within filters.  
To apply a MAC address filter to an address range:

1. Define a MAC address filter. For information, see Defining MAC Address Filters below.
2. Add a MAC address to the filter. For information, see Adding MAC Address Filter Items below.
3. Apply the filter to a DHCP address range or range template, and specify that if the MAC address of a requesting host matches the filter definition, the appliance either grants or denies the address assignment. For information, see [*Applying Filters to DHCP Objects*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/applying-filters-to-dhcp-objects).

# Defining MAC Address Filters

To define a MAC address filter:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt;**Filters** tab, and then expand the Toolbar and click **Add** -&gt; **IPv4** **MAC** **Address** **Filter**.  
   or  
   From any panel in the **DHCP** tab, expand the Toolbar and click **Add** -&gt; **IPv4** **MAC** **Address** **Filter**.
2. In the *Add* *IPv4* *MAC* *Filter* wizard, complete the following:
   
   - **Name**: Enter a meaningful name for the filter. For example, if you want to filter address requests by department, you can name one filter "Marketing", another "Finance", and so on. The name must be unique within a specific network. If you want to specify option settings in the filter, the filter name must be unique among all MAC filters.
   - **Comment**: Enter useful information about the filter.
3. Click **Next** and complete the following to define the DHCP options to return to the matching client:
   
   - **Option** **Space**: Select an option space from the drop-down list. This field is displayed only when you have custom option spaces. The appliance uses the **DHCP** option space as the default.
   - **Lease** **Time**: Enter the value of the lease time in the field and select the time unit from the drop-down list.  
     The lease time applies to hosts that meet the filter criteria.  
       
     **Options** **to** **Merge** **with** **Object** **Options**  
     Click the Add icon. Grid Manager adds a new row to the table with the default **DHCP** option space and option name displayed. Complete the following:
   - **Option** **Space**: Click the down arrow and select an option space from the drop-down list. The selected option space contains the corresponding DHCP options.
   - **Option** **Name**: Click the down arrow and from the drop-down list, select the DHCP option you want to return to the requesting host.
   - **Value**: Enter the value that you want the filter to return for the selected DHCP option. For example, enter the value 255.255.255.0 for the subnet-mask option.  
     To add more options to the filter, click the Add icon and repeat the steps.
4. Click **Next** and complete the following to configure the expiration setting:
   
   - **Default MAC Address Expiration**
   - Select one of the following to configure the expiration setting for the filter:
     
     - **Never Expires**: Select this if you want the MAC address filter to never expire. This is selected by default.
     - **Automatically Expires in**: Select this if you want the filter to expire after a specific time frame. You can specify the time in seconds, minutes, hours, or days.  
       The filter expiration time you configure here affects how long the DHCP server grants a lease to a client. It has an upper limit of 15 minutes on the lease time you configure for the Grid. For example, if both the filter expiration time and the lease time are less than 15 minutes, the appliance uses the lease time. If both the filter expiration time and lease time are greater than 15 minutes, the appliance uses the filter expiration time. If the filter expiration time is less than 15 minutes and the lease time is greater than 15 minutes, the DHCP server grants a lease for 15 minutes. If the filter expiration time is greater than 15 minutes and the lease time is less than 15 minutes, the appliance uses the lease time.
     - **Enforce** **Expiration** **Times** : Select this to enable the expiration setting.
     - **Enabled**: The filter is enabled by default. Clear the checkbox box to disable this filter.
5. Click **Next** to enter values for required extensible attributes or add optional extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
6. Save the configuration and click **Restart** if it appears at the top of the screen.

# Adding MAC Address Filter Items

To add a MAC address to a MAC address filter:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Filters** tab, and then expand the Toolbar and click **Add** -&gt; **IPv4** **MAC** **Address** **Filter** **Item**.  
   or  
   From any panel in the **DHCP** tab, expand the Toolbar and click **Add** -&gt; **IPv4** **MAC** **Address** **Filter** **Item**.
2. In the *Add* *IPv4* *MAC* *Address* *Filter* *Item* wizard, complete the following:
   
   - **MAC** **Address** **Filter**: Click **Select** **Filter**. In the *DHCP* *Filter* *Selector* dialog box, select the MAC address filter to which you want to add a MAC address, and then click the Select icon. If you are adding a MAC address to a filter that you have selected in the *Filters* panel, Grid Manager displays the selected filter in this field.
   - **MAC** **Address**: Enter the MAC address in one of the following formats: aa:bb:cc:dd:ee:ff, aa-bb-cc-dd-ee-ff, aabb.ccdd.eeff, aabbcc-ddeeff, and aabbccddeeff. The appliance displays the address in the AA:BB:CC:DD:EE:FF format. You can also enter a vendor prefix in the three hexadecimal format using the same separators supported in the MAC address format. For example, you can enter aa.bb.cc as the vendor prefix. The appliance displays AA:BB:CC.
   - **Comment**: Enter useful information about the filter item.
   - **Expiration** **Time**: MAC addresses in a filter stay valid until you explicitly configure them to expire. You can enable expiration for specific MAC addresses in the filter. Select one of the following:
     
     - **Never** **Expires**: Select this if you want the MAC address to never expire. This is selected by default.
     - **Expires** **on**: Select this and specify the **Date** and **Time** for the expiration. The fields display the current date and time. If you have already configured an expiration time for the filter, the appliance displays the time here by adding the filter expiration time to the current time. For example, if the expiration time for the filter is two days and the current date is June 6, 2009, the appliance displays June 8, 2009 in the **Date** field.
3. Click **Next** and select one of the following to configure user registration (optional):
   
   - **Register** **as** **User**: Select this and enter a username in the field.
   - **Register** **as** **Guest**: Select this and enter the first name, middle name, last name, email address, and phone number of the guest user.  
     The appliance displays the information you enter here in the lease viewers.
4. Click **Next** to enter values for required extensible attributes or add optional extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
5. Save the configuration and click **Restart** if it appears at the top of the screen.

After you define a MAC address filter and add MAC addresses to it, you can assign the filter to a DHCP range. The appliance filters IP address requests based on the filter criteria. For information, see [*Applying Filters to DHCP Objects*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/applying-filters-to-dhcp-objects).

# Guidelines for Associating MAC Address Filters with DHCP Objects

The following is a list of guidelines for associating MAC Address Filters with DHCP objects:

- Associating a MAC address filter with a DHCP range on a DHCP member or failover association requires a DHCP service restart.
- Associating the same MAC address filter to a different DHCP range on the same member does not require a DHCP service restart.
- Making further changes to a MAC address filter already assigned to a range (such as changing a MAC filter policy on the range from the grant lease to the deny lease) does not require a service restart.
- A restart is required only when:
  
  - You add a new MAC address filter (new to the DHCP member) is added to a range on a specific DHCP member or failover association.
  - Remove a specific MAC address filter from the last range it was associated with, on a specific DHCP member or failover association.
- Changes are propagated seamlessly to the the dhcpd process memory without a service restart and the dhcpd.conf file is not updated until you restart the service.
