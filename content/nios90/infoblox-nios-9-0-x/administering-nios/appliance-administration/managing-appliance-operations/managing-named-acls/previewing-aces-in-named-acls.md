---
title: "Previewing ACEs in Named ACLs"
source: "/space/nios90/1356890113"
pageId: "1356890113"
---
You can preview the list of ACEs in a named ACL when you add or modify it. When you click the Preview icon in the *Add* *Named* *ACL* wizard or *Named* *ACL* editor, the appliance lists all the entries in the named ACL, even if you have selected only one or a few entries in the wizard or editor.  
To preview a named ACL:

1. From the **Administration** tab, select the **Named** **ACLs** tab -&gt; *named_acl* checkbox, and then click the Preview icon.
2. In a separate browser window, Grid Manager displays the following information for each ACE in the named ACL:
   
   - **Entry**: Displays one of the following: IPv4 or IPv6 address, IPv4 or IPv6 network, or TSIG key. Note that if the named ACL contains nested ACLs, all entries in the nested ACLs are displayed in a flat view. Grid Manager does not display the name of the nested ACL.
   - **Type**: The access control type of the entry. This can be **IPv4** **Address**, **IPv6** **Address**, **IPv4** **Network**, **IPv6** **Network**, **TSIG** **Key**, or **DNSone** **2.x** **TSIG** **Key**.
   - **Operation**: Displays the access permission for the entry. This can be **Allow** or **Deny**.
