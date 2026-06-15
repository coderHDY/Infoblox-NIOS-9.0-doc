---
title: "Managing Extensible Attributes"
source: "/space/nios90/280274215"
pageId: "280274215"
---
Extensible attributes are identifiers that you use to further define and track a NIOS object. For example, to specify the location of a network, you can add the predefined attribute **Site** and enter a specific location for the network. You can also specify whether an extensible attribute is required for an object or restrict the values that can be entered when you create a new object.  
  
You can also specify if an extensible attribute is inheritable by other objects in an inheritance chain. When you enable the inheritance of an extensible attribute, all descendants in the inheritance chain can inherit the extensible attribute so you do not have to configure it at all object levels. For example, if you define an extensible attribute for a network, the attribute and its value can be automatically added for DHCP ranges and fixed addresses in the network.  
  
An extensible attribute is inheritable by descendants in an inheritance chain if its definition does not restrict it to objects that are not part of an inheritance chain. The appliance supports this inheritance chain: Network View -&gt; Network Container -&gt; Network -&gt; Range -&gt; Host/Fixed Address/Reservation. A parent object can have descendants at one or more levels. For example, a network view, network container, network or DHCP range can be a parent object and have descendants at one or more levels, while a host, fixed address, and reservation can only be a descendant, not a parent. You can set an extensible attribute to be inheritable by selecting the **Enable** **Inheritance** option when you define an attribute. For more information, see Configuring Inheritable Extensible Attributes below.

> **warning**
>
> ### Note
> 
> Only superusers can configure extensible attributes.

You can use predefined extensible attributes or specify new ones for different objects. For more information on supported object types and their corresponding fields for the extensible attributes, see [Subscriber Record](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/supported-object-types/subscriber-record). The appliance provides the following predefined extensible attributes that you can customize:

- Region
- Country
- State
- Site
- Building
- VLAN
- ReportingSite (Report Clustering)
- Parental-Control-Policy
- Proxy-All
- User-Name
- White-List
- Black-List
- Subscriber-Secure-Policy
- PC-Category-Policy

> **warning**
>
> ### Note
> 
> Using the **CSV import** option, if you import DHCP network, fixed address or reservation address with Parental control extensible attributes, then the subscriber records are not created.

When you use a predefined attribute, you can modify it and change its name, but you cannot change the type of data it accepts. You can also delete predefined attributes that you do not use. All predefined attributes accept text strings. You can define other settings though, as described in Modifying Extensible Attributes below. You can also create your own extensible attributes, as described in Adding Extensible Attributes below.  
  
For example, you can configure the predefined attribute **Site** for fixed addresses and hosts, and define a new attribute **Department** for admin groups. If you enable the option **Allow NATed Subscribers only** in subscriber site, then the extensible attributes used as the default policy for the network, fixed, and reservation address for the DHCP server members, which belong to a Subscriber Site is not supported. For more information on enabling the **Allow NATed Subscribers only** option, see, [*Adding Subscriber Sites*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-subscriber-services/scaling-using-subscriber-sites-and-ipsd).  
  
When you configure an extensible attribute, you can specify the following:

- The type of data that admins enter, such as text strings, integers, or email addresses. You can also restrict admins to a list of values.
- Whether admins can enter multiple values
- A default value
- Whether the attribute is required
  
  Note that You can specify whether an extensible attribute is required or not only by selecting the **Required** checkbox on the **Administration** &gt; **Extensible Attributes** tab in Grid Manager. You cannot specify whether an extensible attribute is required or not by using CSV or WAPI. For more information about extensible attribute options, see Adding Extensible Attributes below.  
    
  Additionally, note that validation/enforcement of **Required **checkbox is done only in the Grid Manager. When using WAPI or CSV, it is possible to submit an object without including fields marked as required.
- Whether the attribute is inheritable
- The objects associated with the attribute, such as admin groups, DNS views, or DHCP networks.
- Whether the appliance makes an entry in the audit log each time an object with the attribute is added or modified.

Activities such as additions, modifications, and deletions of inheritable extensible attributes, are recorded in the audit log. For more information about how to use the audit log, see [*Using the Audit Log*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/monitoring-tools).  
  
Using Extensible Attributes to Define Network Devices figure illustrates a network with different device types. Each device is represented as a host in the NIOS appliance database. You can configure **Device** **Type**, **Location** and **Owner** as required attributes for hosts. Then when admins add hosts, they will be required to enter values for these attributes in the **Extensible** **Attributes** tab of the *Add* *Host* wizard.   
  
 *Using* *Extensible* *Attributes* *to* *Define* *Network* *Devices*

*[drawio]*

After you configure extensible attributes for an object, the attributes become available in the **Extensible** **Attributes** tab of the wizard and editor of the corresponding object. Users then add or edit the attribute values, based on your configuration. Users can also specify attributes when searching for data and add attributes as columns in the tables of Grid Manager. For example, you can add the predefined **Site** attribute as a column in the Records panel of the **Zones** tab. For more information about adding columns to tables and customizing Tables, see [*About the Grid Manager Interface.*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/about-the-grid-manager-interface)  
  
Users can also group objects in smart folders according to their attributes. For example, a user can create a smart folder that contains all networks in a certain site.   
Users can enable the appliance to group members by extensible attributes. For more information, see [*Grouping Members by Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/adding-grid-members).  
  
When you first enable Cloud Network Automation, NIOS installs a set of extensible attributes that are specific for cloud usage. You should avoid adding these extensible attributes manually before enabling Cloud Network Automation. For more information, see [*Extensible Attributes for Cloud Objects*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation/extensible-attributes-for-cloud-objects)*.*

In this section:

*[children]*
