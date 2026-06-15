---
title: "Adding IPv4 Range Templates"
source: "/space/nios90/1393558998"
pageId: "1393558998"
---
To create an IPv4 DHCP range template:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Templates** tab, and then expand the Toolbar and click **Add** -&gt; **Templates** -&gt; **Range** -&gt; **IPv4**.
2. In the *Add* *IPv4* *Range* *Template* wizard, do the following:
   
   - **Name:** Enter a name that helps identify the DHCP range template. For example, enter **Region** **1** **IT** if you want to use this template to create DHCP ranges for the IT department in Region 1.
   - **Offset:** An offset in a DHCP range template determines the starting IP address of the range. The appliance adds the offset value you enter here to the start IP address of the network in which you create a DHCP range using this template. That IP address becomes the start IP address of the DHCP range. For example, you specify an offset value of 25 for a 25.0.0.0/8 network using the DHCP range template, the appliance creates a DHCP range with the start IP address of 25.0.0.25 in the network.
   - **Number** **of** **Addresses:** Enter the total number of IP addresses to be included in the DHCP range.
   - **Comment:** Enter useful information about the template.
     
     The **Cloud** section appears when the Cloud Network Automation license is installed on the Grid Master. For information, see [*Deploying Cloud Network Automation*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation). To configure this template for cloud delegation, complete the following:
     
     **Use** **for** **cloud** **delegation**: Select this checkbox to enable cloud delegation for this template.
     
     **Delegate** **authority** **from** **the** **Grid** **Master**
   - **Delegate To**: In a non-cloud API request, this parameter defines the default member to which authority is delegated. In a cloud API request, the appliance ignores this parameter, which allows you to use this template to create an object on different Cloud Platform Appliances. Click **Select** to choose the default Cloud Platform Appliance to which you want to delegate authority. The *Member* *Selector* displays only Cloud Platform Appliances in the Grid. Click the member, and Grid Manager displays the member name next to this field.
3. Click **Next** and select one of the following to provide DHCP services for the range:
   
   - **None (Reserved Range)**: Select this if you want to reserve this address range for static hosts. Addresses in this range cannot be allocated as dynamic addresses. You can allocate the next available IP from this range to a static host. This is selected by default.
   - **Grid Member:** Click Select and choose a Grid member from the drop-down list.
   - **Failover Association:** Click Select and choose a failover association. Only failover associations that provide DHCP services in the network view of the DHCP range appear in the drop-down list.
   - **Microsoft DHCP Server:** Click Select and choose a Microsoft server from the drop-down list. The drop-down list displays only the servers that are associated with the network to which the DHCP range belongs.
4. Click **Next** to configure or override DHCP options as described in [*Defining IPv4 DHCP Options*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/about-ipv4-dhcp-options).
5. Click **Next** to enter values for required extensible attributes or add optional extensible attributes. For information, see [*Using*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes/Managing+Extensible+Attributes#bookmark868)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes/Managing+Extensible+Attributes#bookmark868)[*Extensible*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes/Managing+Extensible+Attributes#bookmark868)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes/Managing+Extensible+Attributes#bookmark868)[*Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes/Managing+Extensible+Attributes#bookmark868)[.](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes/Managing+Extensible+Attributes#bookmark868)
6. Save the configuration and click **Restart** if it appears at the top of the screen.
