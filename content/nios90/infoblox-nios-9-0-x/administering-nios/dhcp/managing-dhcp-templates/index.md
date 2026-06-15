---
title: "Managing DHCP Templates"
source: "/space/nios90/280401262"
pageId: "280401262"
---
A template contains a set of predefined properties that you use to create IPv4 and IPv6 DHCP objects. It is metadata that you can modify and reuse. Using a template enables you to create objects in a quick and consistent way. You can define the object properties once in a template, and then create multiple objects that inherit their properties from the template. For example, you can create a network template that has a fixed netmask of /24 and extensible attribute "State" set to California. You can then use the template to create networks in California that contain /24 netmasks.  
You can also modify and delete a template. Note that modifying or deleting a template does not affect existing objects created based on the template. You must be a superuser or have read/write permissions to add, modify, or delete a template. A superuser can set other admin group privileges on templates. For information, see *[Administrative Permissions for IPv4 or IPv6 DHCP Templates](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permissions-for-dhcp-resources)*. You can also define extensible attributes for these templates when you create them. For information, see *[Using Extensible Attributes](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)*.

This section explains how to configure and manage IPv4 and IPv6 DHCP templates. It contains the following topics:

*[children]*
