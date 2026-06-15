---
title: "Authenticating Admins Using Active Directory"
source: "/space/nios90/280408340"
pageId: "280408340"
---
Active Directory™ (AD) is a distributed directory service that is a repository for user information. The NIOS appliance can authenticate admin accounts by verifying user names and passwords against Active Directory. In addition, the NIOS appliance queries the AD domain controller for the group membership information of the admin. The appliance matches the group names from the domain controller with the admin groups on its local database. It then authorizes services and grants the admin privileges, based upon the matching admin group on the appliance.  
The following figure illustrates the Active Directory authentication process.

*Authentication* *Using* *a* *Domain* *Controller*

*[drawio]*

To configure NIOS to authenticate administrators using Active Directory domain controller groups, you must first configure user accounts on the domain controller.

> **warning**
>
> ### Note
> 
> Do not create Microsoft user accounts with the following characters: "", +, ,, ;, &lt;, =, &gt;, \. Microsoft does not allow creating users with these characters and such characters will be replaced by an underscore _.

Then, on the NIOS appliance, do the following:

- Configure one or more AD authentication server group on the appliance and add AD domain controllers to the group. For information about configuring an AD authentication service group for admins, see [*Configuring an Active Directory Authentication Service Group*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1471512644).
- If you configured admin groups on the AD controller, you must create those same groups on the NIOS appliance and specify their privileges and settings. Note that the admin group names must match those on the AD domain controller. You can specify a default group as well. The NIOS appliance assigns admins to the default group if none of the admin groups on the NIOS appliance match the admin groups on the AD domain controller or if there are no other admin groups configured. For information about configuring group permissions and privileges, see [*About Admin Groups*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275587).
- Add the newly configured Active Directory service to the list of authentication services in the admin policy, and add the admin group names as well. For more information about configuring an admin policy, see [*Defining the Authentication Policy*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275233).
