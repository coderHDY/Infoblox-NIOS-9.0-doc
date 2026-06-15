---
title: "Modifying IPv4 Range Templates"
source: "/space/nios90/1394574228"
pageId: "1394574228"
---
After you use the wizard to create an IPv4 DHCP range template, you can set additional properties for the template. Following are some guidelines:

- In the **DHCP** **Options** tab of a DHCP range template, the broadcast address is an address offset number rather than a broadcast IP address; network router addresses are offset numbers as well.  
  An offset in a DHCP range template indicates the starting IP address of the DHCP range object created from the template. For example, you can create a network template called *test_network_template* and a DHCP range template *test_range_template* linked to this network template. If the *test_range_template* has an offset value 10, when you create a 10.0.0.0/8 network using the *test_network_template*, the appliance creates a DHCP range with the starting IP address 10.0.0.10. If you create a 20.0.0.0/8 network using the *test_network_template*, the appliance creates a DHCP range with the starting IP address 20.0.0.10

For the exclusion range in the template, the start and end addresses are determined by the number of offsets in the DHCP range template's start address and the number of IP addresses in the exclusion range. For more information about exclusion ranges, see [*About DHCP Ranges*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271474).



To modify and set properties for a DHCP range template:

1. From the **Data Management** tab, select the **DHCP** tab -> **Templates** tab -> *template* checkbox, and then click the Edit icon.
2. The *DHCP Range Template* editor contains the following tabs from which you can modify data:
   
   - **General**: Modify general information described in the previous section [*Adding IPv4 Range Templates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1393558998).
   - **Member Assignment**: Change the Grid member, failover association, or Microsoft server that provides DHCP services for this template. You can also add or delete a member or failover association. For information, see [*Adding IPv4 Address Ranges*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663590).
     
     
     
     When you change the member assignment of DHCP ranges from **Failover Association** to **Grid Member** and then back to **Failover Association**, the leases in the primary and secondary servers fall out of sync. To resynchronize the peers, the failover association of the secondary server is put in the Recover-Wait state for the entire duration of Maximum Client Lead Time while a forced recovery takes place. During this period, only the IP addresses allocated to the primary server are available for lease.
   - **IPv4 DHCP Options:** Keep the inherited DHCP options or override them and enter unique settings for the template. For information, see [*Defining IPv4 DHCP Options*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271370).
   - **Extensible Attributes**: Add and delete extensible attributes that are associated with this template. You can also modify the values of the extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
   - **Permissions**: This tab appears only if you belong to a superuser admin group. For information, see [*About Administrative Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424).
3. Optionally, you can click **Toggle Advanced Mode** to display the following tabs from which you can modify data:
   
   - **IPv4DDNS**: Keep the inherited DDNS settings or override them and enter unique settings for the template. For information, see [*Enabling DDNS for IPv4 and IPv6 DHCP Clients*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762554).
   - **IPv4** **BOOTP/PXE**: Keep the inherited BOOTP properties or override them and enter unique settings for the template. For information, see [*Configuring IPv4 BOOTP and PXE Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663785).
   - **Exclusion** **Ranges**: Configure a range of IP addresses that the appliance does not use for dynamic address assignments. Complete the following:
     
     - **Offset:** An offset for an exclusion range determines the start IP address of the exclusion range. The appliance adds the offset value you enter here to the start IP address of the DHCP range created using this template. That IP address becomes the start IP address of the exclusion range.
     - **Number** **of** **Addresses:** Enter the number of IP addresses to be included in the exclusion range.
     - **Comment:** Enter useful information about the exclusion range.
   - **IPv4** **DHCP** **Thresholds**: Keep the inherited thresholds settings or override them and enter unique settings for the template. For information, see [*Configuring Thresholds for DHCP Ranges*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663713)*.*
4. Save the configuration and click **Restart** if it appears at the top of the screen.

> **warning**
>
> ### Note
> 
> Grid Manager displays both the basic and advanced tabs the next time you log in to the GUI.
