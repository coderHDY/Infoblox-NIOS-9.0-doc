---
title: "Copying and Modifying Host Records"
source: "/space/nios90/1346110611"
pageId: "1346110611"
---
You can create a new host record by copying an existing one. When you copy a host record, other than the new host name and IP address, all DHCP and IPAM configuration including the MAC address and extensible attributes apply to the new record. You can also modify information, except for the host name and IP address, of an existing host record.  
To copy or modify an existing host record:

1. From the **Data** **Management** tab, select the **IPAM**, **DHCP**, or **DNS** tab.
2. In the selected tab, search for or navigate to the host record that you want to copy or modify.
3. Do one of the following:
   
   - To copy a host record, select the record and expand the Toolbar, and then click **Add** -&gt; **Host** -&gt; **Copy** **Host**. Grid Manager displays the *Host* *Record* editor.
   - To modify a host record, select the record and click the Edit icon. Grid Manager displays the *Host* *Record *editor.
4. The *Host* *Record* editor provides the following tabs from which you can modify all the fields:
   
   - **General:** Enter the new hostname and specify at least one IP address. Optionally, you can modify the information you entered through the wizard as described in Adding Host Records above.  
     Note that when you are modifying a DHCP enabled host address, you can apply IPv4 logic filters. To apply IPv4 logic filters, complete the following in the **IPv4** **Addresses** section:
     
     - Select the IP address and click the Edit icon.
     - Click the **Filters** tab in the **Advanced** tab and complete the following:
       
       - **Filters**: You can keep the inherited IPv4 logic filters or override them and add a new IPv4 logic filter. For information, see [*Applying Filters to DHCP Objects*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/applying-filters-to-dhcp-objects).
   - **Device** **Information**: You can change advisory Device Information settings for the object's port reservation; settings are described in the section Adding Host Records above.
   - **TTL:** This tab displays the default TTL settings the record inherited from the Grid or the DNS zone, if you enabled override TTL settings at the zone level. You can keep the default settings or override them. To override the inherited value, click **Override** to enable the configuration. Specify how long the record is cached. Select the time period in seconds, minutes, hours, days, or weeks from the drop-down list. To enable the record to inherit the Grid or zone TTL settings, click **Inherit**.
   - **Aliases:** Click the Add icon. Grid Manager displays a new row in the table. Enter a fully qualified domain name (a CNAME record for the host) in the **Aliases** column. You can delete an alias by selecting the alias checkbox and clicking the Delete icon.
   - **IPv4 ** **Discovered** ** Data:** Displays the discovered data of the IPv4 addresses, if any, of the host record. For information, see [*Viewing Discovered Data*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/viewing-discovered-data).
   - **Port** ** Reservation**: Review and edit any device port reservations that may be defined for the current object, or create a new port reservation and schedule it. For a closer look, see the section [*Port Control Features in Network Insight*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/editing-interfaces-in-a-device), and steps 4-8 in the section  Adding Host Records above.
   - **IPv6** **Discovered** **Data:** Displays the discovered data of the IPv6 addresses, if any, of the host record. For information, see [*Viewing Discovered Data*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/viewing-discovered-data).
   - **Extensible** ** Attributes:** You can add and delete extensible attributes that are associated with a host record. You can also modify the values of extensible attributes. For information, see [*Managing Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
   - **Permissions:** This tab appears only if you belong to a superuser admin group. For information, see [*About Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions).
5. Save the configuration.
6. Click **Restart Services** on the Toolbar for the changes to take effect.
