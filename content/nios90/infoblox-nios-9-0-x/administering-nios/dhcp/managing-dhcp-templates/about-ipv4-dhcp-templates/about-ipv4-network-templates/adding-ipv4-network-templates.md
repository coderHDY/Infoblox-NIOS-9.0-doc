---
title: "Adding IPv4 Network Templates"
source: "/space/nios90/1394574414"
pageId: "1394574414"
---
To create a network template:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Templates** section.
2. Click the drop-down menu of the Add icon and select **IPv4** **Network** **Template**.
3. In the *Add* *IPv4* *Network* *Template* wizard, do the following:
   
   - **Regional Internet Registry**: This section appears only when support for RIR updates is enabled. For information about RIR, see [*RIR Registration Updates*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/rir-registration-updates). Complete the following to create a network template for an RIR IPv4 network container or network:
     
     - **Internet Registry**: Select the RIR from the drop-down list. The default is **RIPE**. When you select **None**, the network is not associated with an RIR organization.
     - **Organization ID**: Click **Select Organization** and select an organization from the *RIROrganizationSelector* dialog box.
     - **Registration Status**: The default is **Not Registered**. When using this template to add an RIR allocated network, you can change this to **Registered** and select the **Do not update registrations** checkbox below. Note that when you select **API** as the communication method, the registration status will be updated automatically after the registration update is completed. However, when you select **Email** as the communication method, the registration status will not be automatically updated. If you are creating a new network and the registration update is completed successfully, the status will be changed to **Registered**. If the update fails, the status will be changed to **Not Registered**.
     - **Registration Action**: Select the registration action from the drop-down list. When you select **Create**, the appliance creates the IPv4 network and assigns it to the selected organization. When you select **None**, the appliance does not send registration updates to RIPE. When you use this template to add an existing RIR allocated network to NIOS, select **None**. When you use this template to add networks to an RIR allocated network (a parent network), select **Create**. Ensure that the parent network associated with an RIR organization already exists.
     - **Do not update registrations**: Select this checkbox if you do not want the appliance to submit RIR updates to RIPE. By default, the appliance sends updates to the RIR database based on the configured communication method.
   - **Name:** Enter a name that helps identify the network template. For example, you can enter **Class C** if you want to configure the template for creating Class C networks.
   - **Netmask**: Select one of the following options:
     
     - **Fixed**: Select this and adjust the netmask slider to a fixed netmask for this network template. When you select this option, users cannot specify another netmask when they use this template to create a network. For example, if you select /24 as the fixed netmask, all networks created using this template have a /24 netmask.
     - **Allow User to Specify Netmask**: Select this to allow users to specify the subnet mask when creating networks using this template.
   - **Comment:** Optionally, enter additional information about the template.
   - **Automatically Create Reverse-Mapping Zone:** This function is enabled if the fixed netmask of the template equals /8, /16, and /24, or if you select the **Allow User to Specify Netmask** option. Select this if you want the appliance to automatically create the corresponding reverse-mapping zone for the networks created using this template. A reverse-mapping zone is an area of network space for which one or more name servers have the responsibility for responding to address-to-name queries. These zones are created in the DNS view assigned to receive dynamic DNS updates at the network level.
     
     The **Cloud** section appears when the Cloud Network Automation license is installed on the Grid Master. For information, see [*Deploying Cloud Network Automation*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation). To configure this template for cloud delegation, complete the following:  
     **Use** **for** **cloud** **delegation**: Select this checkbox to enable cloud delegation for this template.
     
     When you select this for the network template, all range and fixed address templates that you want to associate with this network template must also be enabled for "**Use** **for** **cloud** **delegation**."
     
     **Delegate authority from the Grid Master**
     
     **Delegate** **To**: In a non-cloud API request, this parameter defines the default member to which authority is delegated. In a cloud API request, the appliance ignores this parameter, which allows you to use this template to create an object on different Cloud Platform Appliances. Click **Select** to choose the default Cloud Platform Appliance to which you want to delegate authority. The *Member* *Selector* displays only Cloud Platform Appliances in the Grid. Click the member, and Grid Manager displays the member name next to this field.
4. Click **Next** and do the following to assign either Grid members or Microsoft DHCP servers to this network template. Ensure that you include members or Microsoft servers that are associated with other templates that you plan to add to this network template. You can assign one or multiple members to this template. However, you cannot assign a combination of NIOS Grid members and vNIOS Grid members to the template. You can also assign multiple Microsoft servers to a template, but you cannot assign a mix of Microsoft servers and Grid members to a template.
   
   - click the Add icon and select one of the following options:
     
     - **Add Infoblox Member**: Select this option to add a Grid member as a DHCP server for the networks created using this template. Select the Grid member from the *Member Selector* dialog box. Keep in mind, DHCP properties for the network are inherited from this member. Networks created using this template can be served by multiple members, but a member can serve networks in one network view only.  
       or
     - **Add** **Microsoft** **Server**: Select this option to add a Microsoft server as a DHCP server for the networks created using this template. Select the Microsoft server from the *Microsoft* *Server* *Selector* dialog box.
5. Click **Next** to associate Active Directory Sites with the network. For more information, see [*Associating Active Directory Sites with Networks*](/nios90/infoblox-nios-9-0-x/administering-nios/configuring-microsoft-windows-servers/managing-microsoft-windows-servers/managing-active-directory-sites).
6. Click **Next** and do the following to include IPv4 address range and fixed address/reservation templates in the network template. Note that when you select a fixed address/reservation template, only reservations, not fixed addresses, are created for networks created using this template. You cannot add a fixed address/reservation template that does not contain an offset value or a total number of IP addresses for a range.
   
   1. Click the Add icon.
   2. In the *DHCP Template Selector* dialog box, choose the template that you want to include in this network template. You can choose a DHCP range or fixed address/reservation template. Use SHIFT+click and CTRL+click to select multiple templates.
   3. Click the Select icon.  
      You can delete a template from the table by selecting it and clicking the Delete icon.
7. Click **Next** to configure or override DHCP options as described in [*Defining IPv4 DHCP Options*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/about-ipv4-dhcp-options).
8. Click **Next** to enter values for required extensible attributes or add optional extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).  
   If you are adding an RIR network, the RIR network attribute table appears. For information about these attributes and how to enter them, see [*RIR Network Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/rir-registration-updates/managing-rir-attributes).
9. Save the configuration and click **Restart** if it appears at the top of the screen.
