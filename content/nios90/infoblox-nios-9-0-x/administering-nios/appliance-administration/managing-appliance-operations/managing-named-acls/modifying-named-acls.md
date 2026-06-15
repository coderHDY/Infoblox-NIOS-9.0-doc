---
title: "Modifying Named ACLs"
source: "/space/nios90/1356857387"
pageId: "1356857387"
---
You can modify ACEs in an existing named ACL. When you update a named ACL, the appliance validates the updates to ensure that ACEs in the named ACL are valid for the operations to which the name ACL has been applied. For example, if a named ACL is used for file distribution access, you are not allowed to add IPv6 address access control to it because the file transfer operation does not support IPv6 addresses.  
To modify a named ACL:

1. From the **Administration** tab, select the **Named** **ACLs** tab -&gt; *named_acl* checkbox, and then click the Edit icon.
2. The *Named* *ACL* editor provides the following tabs from which you can modify data:
   
   - **Genera** **Basic**: You can modify data in this tab as described in [*Defining Named ACLs*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-named-acls/defining-named-acls)[.](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-named-acls/defining-named-acls)
   - **Extensible** **Attributes**: Add and delete extensible attributes that are associated with a specific named ACL. You can also modify the values of the extensible attributes. For information, see [*About Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)[.](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)
   - **Permissions**: This tab appears only if you belong to a superuser admin group. For information about managing permissions, see [*About Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions).
