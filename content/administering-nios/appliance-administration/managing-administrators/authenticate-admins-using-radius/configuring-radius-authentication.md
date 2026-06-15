---
title: "Configuring RADIUS Authentication"
source: "/space/nios90/1326120980"
pageId: "1326120980"
---
To configure NIOS to use one ore more RADIUS server groups to authenticate administrators, you must do the following:

- Configure at least one RADIUS authentication server group. For more information, see Configuring a RADIUS Authentication Server Group below.
- Define admin groups for the admins that are authenticated by the RADIUS servers and specify their privileges and settings. The group names in NIOS must match the admin group names on the RADIUS server. See [*About Admin Groups*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275587) for information about defining admin groups.
- In the authentication policy, add the RADIUS server groups and the admin groups that match those on the RADIUS server. You can also designate an admin group as the default group for remote admins. NIOS assigns admins to this group when it does not find a matching group for a remote admin. See [https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275233](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275233)  for more information about configuring the policy.
