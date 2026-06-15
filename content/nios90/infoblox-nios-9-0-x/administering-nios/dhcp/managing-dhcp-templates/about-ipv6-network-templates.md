---
title: "About IPv6 Network Templates"
source: "/space/nios90/280271022"
pageId: "280271022"
---
You can create IPv6 network templates to facilitate network configuration. You can use network templates to create networks in any network view. When you create a network template, you do not specify a network address. You enter the network address when you create an actual network from the template. You can specify a netmask or allow the user to define the netmask when they create the actual network.  
A network template is useful for setting up a network with fixed addresses and DHCP ranges already defined. You can add DHCP range or fixed address templates to a network template.

> **warning**
>
> ### Note
> 
> You cannot configure the following DHCP options in an IPv6 network template: server-id (Option 2), preference (option 7), and unicast (Option 12). These options are valid only for a DHCP member.

When you enable support for RIR updates, you can create IPv6 network templates specific for RIR associated networks. For information about RIR updates, see [*RIR Registration Updates*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/rir-registration-updates).   
You can also configure network templates for cloud delegation if you have deployed the Cloud Network Automation on the Grid Master. If you select a default Cloud Platform Appliance for a template, all networks you create using this template will delegate authority to the same Cloud member. Note that when a Cloud member is removed from the Grid, the delegation will also be removed from the template. For information about Cloud Network Automation, see [*Deploying Cloud Network Automation*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation).

# Adding IPv6 Network Templates

To create a network template:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Templates** tab.
2. Click the drop-down menu of the **Add** icon and select **IPv6** **Network Template**.
3. In the *Add* *IPv6* *Network* *Template* wizard, do the following:
   
   - **RegionalInternetRegistry**: This section appears only when support for RIR updates is enabled. For information about RIR, see [*RIR Registration Updates*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/rir-registration-updates). Complete the following to create a network template for an RIR IPv6 network container or network:
     
     - **Internet Registry**: Select the RIR from the drop-down list. The default is **RIPE**. When you select **None**, the network is not associated with an RIR organization.
     - **Organization ID**: Click **Select Organization** and select an organization from the *RIR Organization Selector* dialog box.
     - **Registration Status**: The default is **Not Registered**. When using this template to add an RIR allocated network, you can change this to **Registered** and select the **Do not update registrations** checkbox below. Note that when you select **API** as the communication method, the registration status will be updated automatically after the registration update is completed. However, when you select **Email** as the communication method, the registration status will not be automatically updated. If you are creating a new network and the registration update is completed successfully, the status will be changed to **Registered**. If the update fails, the status will be changed to **Not Registered**.
     - **Registration Action**: Select the registration action from the drop-down list. When you select **Create**, the appliance creates the IPv4 network and assigns it to the selected organization. When you select **None**, the appliance does not send registration updates to RIPE. When you use this template to add an existing RIR allocated network to NIOS, select **None**. When you use this template to add networks to an RIR allocated network (a parent network), select **Create**. Ensure that the parent network associated with an RIR organization already exists.
     - **Do not update registrations**: Select this checkbox if you do not want the appliance to submit RIR updates to RIPE. By default, the appliance sends updates to the RIR database based on the configured communication method.
   - **IPv6** **Prefix:** If you are adding a template for a previously defined global IPv6 prefix, you can select it from the drop-down list.
   - **Name:** Enter a name that helps identify the network template.
   - **Netmask**: Select one of the following options:
     
     - **Fixed**: Select this and adjust the netmask slider to a fixed netmask for this network template. When you select this option, users cannot specify another netmask when they use this template to create a network. For example, if you select /24 as the fixed netmask, all networks created using this template have a /24 netmask. The slider moves to the CIDR value associated with the selected prefix when you choose a global IPv6 prefix.
     - **Allow User to Specify Netmask**: Select this to allow users to specify the subnet mask when creating networks using this template.
   - **Comment:** Enter useful information about the template.
   - **Automatically create a reverse-mapping zone:** This function is enabled if the fixed netmask of the template is a multiple of 4 (4, 8, 24, and so on), or if you select the **Allow User to Specify Netmask** option. Select this if you want the appliance to automatically create the corresponding reverse-mapping zone for the networks created using this template. These zones are created in the DNS view assigned to receive dynamic DNS updates at the network level.  
       
     The **Cloud** section appears when the Cloud Network Automation license is installed on the Grid Master. For information, see [*Deploying Cloud Network Automation*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation). To configure this template for cloud delegation, complete the following:  
     **Use** **for** **cloud** **delegation**: Select this checkbox to enable cloud delegation for this template.  
       
     **Delegate** **authority** **from** **the** **Grid** **Master**  
       
     **Delegate To**: In a non-cloud API request, this parameter defines the default member to which authority is delegated. In a cloud API request, the appliance ignores this parameter, which allows you to use this template to create an object on different Cloud Platform Appliances. Click **Select** to choose the default Cloud Platform Appliance to which you want to delegate authority. The *Member* *Selector* displays only Cloud Platform Appliances in the Grid. Click the member, and Grid Manager displays the member name next to this field.
4. Click **Next** to assign Grid members to this network template. Ensure that you include members that are associated with other templates that you plan to add to this network template. You can assign one or multiple members to this template. However, you cannot assign a combination of NIOS Grid members and vNIOS Grid members to the template.
   
   - Click the Add icon to add a Grid member as a DHCP server for the networks created using this template. Select the Grid member from the *Member* *Selector* dialog box. Keep in mind, DHCP properties for the network are inherited from this member. Networks created using this template can be served by multiple members, but a member can serve networks in one network view only.
5. Click **Next** to associate Active Directory Sites with the network. For more information, see [*Associating Active Directory Sites with Networks*](/nios90/infoblox-nios-9-0-x/administering-nios/configuring-microsoft-windows-servers/managing-microsoft-windows-servers/managing-active-directory-sites).
6. Click **Next**, and then click the Add icon to include DHCP range and fixed address templates in the network template. Choose the template that you want to include in this network template. Use SHIFT+click and  CTRL+click to select multiple templates.  
   You can remove a template from the list by selecting the template and clicking the Delete icon.
7. Click **Next** to configure or override DHCP options as described in [*Defining General IPv6 Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-dhcpv6-properties).
8. Click **Next** to enter values for required extensible attributes or add optional extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).  
   If you are adding an RIR network, the RIR network attribute table appears. For information about these attributes and how to enter them, see [*RIR Network Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/rir-registration-updates/managing-rir-attributes).
9. Save the configuration.

# Modifying IPv6 Network Templates

To modify and set the properties of a network template:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Templates** tab -&gt; *template* checkbox, and then click the Edit icon.
2. The *Network* *Template* editor contains the following tabs from which you can modify data:
   
   - **General**: Modify general information described in [*Adding IPv6 Network Templates*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-dhcp-templates/about-ipv6-network-templates/About+IPv6+Network+Templates#Adding-IPv6-Network-Templates)* *above.
   - **Member** **Assignment**: Change the Grid members that provide DHCP services for networks created from this template. For information, see [*Adding IPv6 Networks*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/managing-ipv6-networks).
   - **Templates**: Add or delete DHCP range and fixed address templates. For information, see [*Adding IPv6 Range Templates*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-dhcp-templates/about-ipv6-range-templates) and [*Adding IPv6 Fixed Address Templates*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-dhcp-templates/about-ipv6-fixed-address-templates).
   - **IPv6** **DHCP** **Options**: Keep the inherited DHCP options or override them and enter unique settings for the template. For information, see [*Defining General IPv6 Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-dhcpv6-properties).
   - **RIR** **Registration**: Modify RIR network information. This tab appears only when support for RIR updates is enabled. For information, see [*Modifying RIR Network Data*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/rir-registration-updates/managing-rir-data).
   - **Extensible** **Attributes**: Add and delete extensible attributes that are associated with the template. You can also modify the values of the extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)*.*
   - **Permissions**: This tab appears only if you belong to a superuser admin group. For information, see [*Managing Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions).
3. Optionally, you can click **Toggle Advanced Mode** to display the following tabs from which you can modify data:
   
   - **IPv6 DDNS**: Keep the inherited DDNS settings or override them and enter unique settings for the template. For information, see [*Enabling DDNS for IPv4 and IPv6 DHCP Clients*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ddns-updates/configuring-dhcp-for-ddns).
   - **Filters**: You can keep the inherited IPv6 logic filters or override them and add a new IPv6 logic filter. For information, see [*Applying Filters to DHCP Objects*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/applying-filters-to-dhcp-objects).  
     Note that Grid Manager displays both the basic and advanced tabs the next time you log in to the GUI.
4. Save the configuration.
