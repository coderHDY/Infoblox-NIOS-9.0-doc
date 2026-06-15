---
title: "Setting Properties for Roaming Hosts"
source: "/space/nios90/1356268676"
pageId: "1356268676"
---
You can modify an existing roaming host to add, modify or delete IPv4 or IPv6 addresses, and to set IPv4 and IPv6 DHCP properties.

1. From the **Data Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Roaming Hosts** section -&gt; *roaming_host* checkbox, and then click the Edit icon.
2. The *RoamingHost* editor contains the following tabs from which you can modify data:
   
   - **General**: Edit the fields as described in Adding IPv4 Roaming Hosts above, except for the **Templates** field.
   - **IPv4 DHCP Options**: Keep the inherited DHCP options or override them and enter unique settings for the roaming host. For information, see [*Defining IPv4 DHCP Options*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/about-ipv4-dhcp-options).
   - **IPv6 DHCP Options:** Keep the inherited IPv6 DHCP properties or override them. For more information, see [*Defining General IPv6 Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-dhcpv6-properties)*.*
   - **Extensible** **Attributes**: Add and delete extensible attributes that are associated with a roaming host. You can also modify the values of extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
   - **Permissions**: This tab appears only if you belong to a superuser admin group. For information, see [*Managing Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions).
3. Optionally, you can click **Toggle Advanced Mode** to display the following tabs from which you can modify advanced data.
   
   - **IPv4DDNS**: Click **Override** and select **Enable DDNS updates** for the DDNS settings you configure in this tab to take effect. You can specify the following:
     
     - **DDNS Domain Name**: Specify the domain name that the appliance uses to update DNS.
     - **DDNS Hostname**: Select the Replace the host name dynamically provided by the client/member with the roaming host name checkbox to use the name of the roaming host record as the name of the client for DDNS updates.
       
       For information about DDNS, see [*Configuring DDNS Updates*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ddns-updates).
   - **IPv4** **BOOTP/PXE**: Keep the inherited PXE and BOOTP properties or override them and enter unique settings for the roaming host. For information, see [*Configuring DHCP for IPv4*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-general-ipv4-dhcp-properties).
   - **IPv6 DDNS**: Click **Override** and select **Enable DDNS Updates** for the DDNS settings you configure in this tab to take effect. You can specify the following:
     
     - **DDNS Domain Name**: Specify the domain name that the appliance uses to update DNS.
     - **DDNS Hostname**: Select the Replace the host name dynamically provided by the client/member with the roaming host name checkbox to use the name of the roaming host record as the name of the client for DDNS updates.
       
       For information about DDNS, see [*Configuring DDNS Updates*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ddns-updates).
       
       Note that Grid Manager displays both the basic and advanced tabs the next time you log in to the GUI.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
   
   You can also click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule* *Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks).
