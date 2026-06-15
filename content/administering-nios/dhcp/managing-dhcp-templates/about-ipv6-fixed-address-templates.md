---
title: "About IPv6 Fixed Address Templates"
source: "/space/nios90/280761591"
pageId: "280761591"
---
A fixed address template is useful when you want to create multiple fixed addresses in a network. When you create a fixed address template, you specify the offset value and number of fixed addresses to be created. You can also specify additional properties for the fixed addresses.  
Note that you can use the template to create address-based fixed addresses. You cannot specify prefixes in the template because a fixed address could use a prefix that is not part of the subnet to which the fixed address belongs. You can enter prefixes when you create the individual fixed address objects using the template.  
If you have deployed the Cloud Network Automation license on the Grid Master, you can configure fixed address templates for cloud delegation. When you configure a template for cloud delegation, all fixed addresses you create using this template will inherit authority delegations from their parent objects. For information about Cloud Network Automation, see [*Deploying Cloud Network Automation*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280758966).

# Adding IPv6 Fixed Address Templates

To create an IPv6 fixed address template:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Templates** tab.
2. Click the drop-down menu of the Add icon and select **IPv6** **Fixed** **Address** **Template**.
3. In the *Add* *IPv6* *Fixed* *Address* *Template* wizard, enter the following:
   
   - **Name:** Enter a name that helps identify the IPv6 fixed address template. For example, you can enter **HP** **Printer** when you create a template that contains settings for assigning fixed addresses or reservations to HP printers.
   - **Comment:** Optionally, enter additional information about the template.
   - **Use** **for** **cloud** **delegation**: When you select this checkbox, all fixed addresses you create using this template inherit authority delegation from their parent objects.  
     In the **Optional** **Settings** **For** **Range** **of** **Objects** section, do the following:
   - **Offset:** An offset in a fixed address template determines the IP address of the first fixed address created from the template. The appliance adds the offset value you enter here to the start IP address of the network in which you create objects using this template, and that IP address becomes the IP address of the object. For example, you specify an offset value of 50 for the 2001:db8:1263:/48 network, when you create a fixed address using the fixed address template, the appliance assigns it the address 2001:db8:1263:0:0:0:0:32.
   - **Number of Addresses:** Enter the number of IP addresses to be used as fixed addresses or roaming hosts.  
     Note that the appliance uses the offset and number of addresses only when this template is used in a network template.
4. Click **Next** to configure or override DHCP options as described in [*Defining General IPv6 Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663691).
5. Click **Next** to enter values for required extensible attributes or add optional extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
6. Save the configuration.

# Modifying IPv6 Fixed Address Templates

To modify a fixed address template:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Templates** tab -> *template* checkbox, and then click the Edit icon.
2. The *IPv6* *Fixed* *Address* *Template* editor contains the following tabs from which you can modify data:
   
   - **General**: Modify general information for the template as described in [*Adding IPv6 Fixed Address Templates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761591/About+IPv6+Fixed+Address+Templates#Adding-IPv6-Fixed-Address-Templates) above.
   - **IPv6** **DHCP** **Options**: Keep the inherited DHCP options or override them and enter unique settings for the template. For information, see [*Defining General IPv6 Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663691).
   - **Extensible** **Attributes**: Add and delete extensible attributes that are associated with the template. You can also modify the values of the extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
   - **Permissions**: This tab appears only if you belong to a superuser admin group. For information, see [*About Administrative Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424).
3. Optionally, you can click **Toggle Advanced Mode** to display the following tabs from which you can modify data:
   
   - **IPv6 DDNS**: Keep the inherited DDNS settings or override them and enter unique settings for the template. For information, see [*Enabling DDNS for IPv4 and IPv6 DHCP Clients*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762554).
   - **Filters**: You can keep the inherited IPv6 logic filters or override them and add a new IPv6 logic filter. For information, see [*Applying Filters to DHCP Objects*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270743).  
     Note that Grid Manager displays both the basic and advanced tabs the next time you log in to the GUI.
4. Save the configuration.
