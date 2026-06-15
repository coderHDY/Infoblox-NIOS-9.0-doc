---
title: "Operations that Support Access Control"
source: "/space/nios90/280407358"
pageId: "280407358"
---
On the appliance, only certain operations support access control. You can apply one named ACL or multiple anonymous ACEs to each operation. However, you cannot apply multiple named ACLs or use a combination of named ACLs and ACEs. Note that each operation supports different access control types. For example, DNS zone transfers support IPv4 and IPv6 addresses and networks as well as TSIG key based ACEs, while AAAA filtering supports only IPv4 addresses and networks.  
When you apply a named ACL to an operation, the appliance validates to ensure that the named ACL contains ACEs that are supported by the operation. The appliance also validates any new ACEs that you add to an existing named ACL. If a named ACL contains access control types that an operation does not support, the appliance displays an error message and you cannot apply that named ACL to the operation. Thus when defining a named ACL for a specific operation or applying an existing named ACL, ensure that it contains access control types that the operation supports. The below table lists access control types for NIOS operations that support access control.  
  
*Operations* *that* *Support* *Access* *Control*

| **Operation** **Type** | **Supported** **Access** **Control** **Types** |
| --- | --- |
|  | **IPv4**    **Addresses** **and** **Networks** | **IPv6**    **Addresses** **and** **Networks** | **TSIG** **Key**    **Based** **ACEs** | **DNSone**    **2.x** **TSIG** **Key** | **Any** **Address** **and** **Network** |
| GUI and API Access | Yes | Yes | No | No | No |
| NTP Service and NTP Queries | Yes | Yes | No | No | Yes |
| File Distribution Services | Yes | No | No | No | No |
| Syslog Proxy Access Control | Yes | Yes | No | No | No |
| DNS Zone Transfers (excludes zone transfers for Microsoft servers)* | Yes | Yes | Yes | Yes | Yes |
| Dynamic DNS Updates | Yes | Yes | Yes | No | Yes |
| DNS Queries | Yes | Yes | Yes | No | Yes |
| Recursive Queries | Yes | Yes | Yes | No | Yes |
| Blackhole Lists | Yes | Yes | No | No | Yes |
| AAAA Filtering | Yes | No | No | No | Yes |
| Forward DNS Updates | Yes | Yes | Yes | No | Yes |
| Match Clients for DNS Views | Yes | Yes | Yes | Yes | Yes |
| Match Destinations for DNS Views | Yes | Yes | Yes | Yes | Yes |
| DNS64 Clients | Yes | Yes | No | No | Yes |
| DNS64 Mapped | Yes | No | No | No | Yes |
| DNS64 Exclude IPv6 | No | Yes | No | No | Yes |



> **warning**
>
> ### Note
> 
> * Zone transfers for Microsoft servers do not support named ACLs. However, you can still use individual ACEs to configure access control. For more information about how to configure zone transfer settings for Microsoft servers, see [*Setting Zone Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/configuring-microsoft-windows-servers/managing-microsoft-dns-services/managing-synchronized-dns-data)[.](/nios90/infoblox-nios-9-0-x/administering-nios/configuring-microsoft-windows-servers/managing-microsoft-dns-services/managing-synchronized-dns-data/Managing+Synchronized+DNS+Data#Setting Zone Properties) In addition, the DNSone 2.x TSIG key supports only the "Allow" permission. You cannot change "Allow" to "Deny."

Complete the following tasks to use a named ACL:

1. Define a named ACL, as described in [*Defining Named ACLs*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-named-acls/defining-named-acls)*.*
2. Validate the named ACL, as described in [*Validating Named ACLs*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-named-acls)*.*
3. Apply the named ACL to specific operations, as described in* *[*Applying Access Control to Operations*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/applying-access-control-to-operations).
