---
title: "About IPv6 Range Templates"
source: "/space/nios90/280404070"
pageId: "280404070"
---
You can create range templates to specify an offset and the number of addresses allocated to a range. Note that you cannot create templates for prefix-delegated ranges because the start or end prefix can be outside of the subnet address boundary.  
After you create a DHCP range template, you can configure additional properties such as exclusion ranges and DHCP properties, as described in [*Modifying IPv6 Range Templates*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-dhcp-templates/about-ipv6-range-templates/About+IPv6+Range+Templates#Modifying-IPv6-Range-Templates) below. Then when you use the template to create a DHCP range, the range inherits the properties of the template. You can also include a DHCP range template in a network template to automatically create a DHCP range when you use that network template.  
If you have deployed the Cloud Network Automation license on the Grid Master, you can configure range templates for cloud delegation. If you select a default Cloud Platform Appliance for a template, all ranges you create using this template will delegate authority to the same Cloud member. Note that when a Cloud member is removed from the Grid, the delegation will also be removed from the template. For information about Cloud Network Automation, see [*Deploying Cloud Network Automation*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation).

> **warning**
>
> ### Note
> 
> Infoblox does not support global IPv6 prefix delegation for IPv6 range templates.

# Adding IPv6 Range Templates

To create an IPv6 range template:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Templates** tab.
2. Click the drop-down menu of the Add icon and select **IPv6 Range** **Template**.
3. In the *Add* *IPv6* *Range* *Template* wizard, complete the following:
   
   - **Name:** Enter a name that helps identify the IPv6 DHCP range template.
   - **Offset:** An offset in a DHCP range template determines the starting IP address of the range. The appliance adds the offset value you enter here to the start IP address of the network in which you create a DHCP range using this template. That IP address becomes the start IP address of the DHCP range. For example, you specify an offset value of 10 for the 2001:db8:1263:/48 network using the DHCP range template, the appliance creates a range with the start address 2001:db8:1263:0:0:0:0:a.
   - **Number** **of** **Addresses:** Enter the total number of IPv6 addresses to be included in the DHCP range.
   - **Comment:** Optionally, enter additional information about the template.  
       
     The **Cloud** section appears when the Cloud Network Automation license is installed on the Grid Master. For information, see [*Deploying Cloud Network Automation*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation). To configure this template for cloud delegation, complete the following:  
       
     **Use** **for** **cloud** **delegation**: Select this checkbox to enable cloud delegation for this template.  
       
     **Delegate authority from the Grid Master**
   - **Delegate** **To**: In a non-cloud API request, this parameter defines the default member to which authority is delegated. In a cloud API request, the appliance ignores this parameter, which allows you to use this template to create an object on different Cloud Platform Appliances. Click **Select** to choose the default Cloud Platform Appliance to which you want to delegate authority. The *Member* *Selector* displays only Cloud Platform Appliances in the Grid. Click the member, and Grid Manager displays the member name next to this field.
4. Click **Next** and select one of the following to provide DHCP services for the range:
   
   - **None (Reserved Range)**: Select this if you want to reserve this address range for static hosts. Addresses in this range cannot be allocated as dynamic addresses. You can allocate the next available IP from this range to a static host. This is selected by default.
   - **Grid Member:** Click Select and choose a Grid member from the drop-down list.
5. Click **Next** to enter values for required extensible attributes or add optional extensible attributes. For information, see [*Using Extensible Attribute*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
6. Save the configuration.

# Modifying IPv6 Range Templates

You can modify the properties of a DHCP range template and define an exclusion range. For the exclusion range in the template, the start and end addresses are determined by the number of offsets in the DHCP range template's start address and the number of IP addresses in the exclusion range. For more information about exclusion ranges, see [*About DHCP Ranges*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-infoblox-dhcp-services/managing-dhcp-data).  
To modify a DHCP range:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Templates** tab -&gt; *template* checkbox, and then click the Edit icon.
2. The *IPv6* *DHCP* *Range* *Template* editor contains the following tabs from which you can modify data:
   
   - **General**: Modify general information as described in [*Adding IPv6 Range Templates*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-dhcp-templates/about-ipv6-range-templates/About+IPv6+Range+Templates#Adding-IPv6-Range-Templates) above.
   - **Member** **Assignment**: Change the Grid member that provides DHCP services for ranges created from this template. For information, see [*Adding IPv6 Range Templates*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-dhcp-templates/about-ipv6-range-templates/About+IPv6+Range+Templates#Adding-IPv6-Range-Templates) above.
   - **Extensible** **Attributes**: Add and delete extensible attributes that are associated with this template. You can also modify the values of the extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)[.](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes/Managing+Extensible+Attributes#bookmark868)
   - **Permissions**: This tab appears only if you belong to a superuser admin group. For information, see [*About Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions).
3. Optionally, you can click **Toggle** **Advanced** **Mode** to display the following tabs from which you can modify data:
   
   - **Exclusion** **Ranges**: Configure a range of IP addresses that the appliance does not use for dynamic address assignments. **Exclusion** **Ranges**: Configure a range of IP addresses that the appliance does not use for dynamic address assignments. Complete the following:
     
     - **Offset:** An offset for an exclusion range determines the start IP address of the exclusion range. The appliance adds the offset value you enter here to the start IP address of the DHCP range created using this template. That IP address becomes the start IP address of the exclusion range.
     - **Number** **of** **Addresses:** Enter the number of IP addresses to be included in the exclusion range.
     - **Comment:** Enter useful information about the exclusion range.  
       Note that Grid Manager displays both the basic and advanced tabs the next time you log in to the GUI.
4. Save the configuration.
