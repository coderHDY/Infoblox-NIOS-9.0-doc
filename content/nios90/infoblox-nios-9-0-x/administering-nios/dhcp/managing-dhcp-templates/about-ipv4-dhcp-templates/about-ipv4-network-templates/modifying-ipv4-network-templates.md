---
title: "Modifying IPv4 Network Templates"
source: "/space/nios90/1393460326"
pageId: "1393460326"
---
To modify a network template:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Templates** tab -&gt; *template* checkbox, and then click the Edit icon.
2. The *IPv4* *Network* *Template* editor contains the following tabs from which you can modify data:
   
   - **General**: Modify general information as described in [*Adding IPv4 Network Templates*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-dhcp-templates/about-ipv4-dhcp-templates/about-ipv4-network-templates/adding-ipv4-network-templates)*.*
   - **Member** **Assignment**: Change the Microsoft servers or Grid members that provide DHCP services for this template. For information, see [*Adding IPv4 Networks*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-networks).
   - **Templates**: Add or delete DHCP range and fixed address/reservation templates. For information, see [*About IPv4 Range Templates*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-dhcp-templates/about-ipv4-dhcp-templates/about-ipv4-range-templates)* *and [*About IPv4 Fixed Address/Reservation Templates*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-dhcp-templates/about-ipv4-dhcp-templates/about-ipv4-fixed-address-reservation-templates)*.*
   - **IPv4** **DHCP** **Options**: Keep the inherited DHCP options or override them and enter unique settings for the template. For information, see [*Defining IPv4 DHCP Options*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/about-ipv4-dhcp-options).
   - **RIR** **Registration**: Modify RIR network information. This tab appears only when support for RIR updates is enabled. For information, see [*Modifying RIR Network Data*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/rir-registration-updates/managing-rir-data).
   - **Extensible** **Attributes**: Add and delete extensible attributes that are associated with the template. You can also modify the values of the extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
   - **Permissions**: This tab appears only if you belong to a superuser admin group. For information, see [* Managing Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions).
3. Optionally, you can click **Toggle Advanced Mode** to display the following tabs from which you can modify data:
   
   - **IPv4DDNS**: Keep the inherited DDNS settings or override them and enter unique settings for the template. For information, see [*Enabling DDNS for IPv4 and IPv6 DHCP Clients*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ddns-updates/configuring-dhcp-for-ddns).
   - **IPv4** **BOOTP/PXE**: Keep the inherited BOOTP properties or override them and enter unique settings for the template. For information, see [*Configuring IPv4 BOOTP and PXE Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-ipv4-bootp-and-pxe-properties).
   - **Filters**: You can keep the inherited IPv4 logic filters or override them and add a new IPv4 logic filter for the template. For information, see [*Applying Filters to DHCP Objects*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/applying-filters-to-dhcp-objects).
   - **IPv4** **DHCP** **Thresholds**: Keep the inherited thresholds settings or override them and enter unique settings for the template. For information, see [*Configuring Thresholds for DHCP Ranges*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-thresholds-for-dhcp-ranges).  
     Note that Grid Manager displays both the basic and advanced tabs the next time you log in to the GUI.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
