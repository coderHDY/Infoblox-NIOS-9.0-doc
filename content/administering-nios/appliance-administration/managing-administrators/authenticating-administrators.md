---
title: "Authenticating Administrators"
source: "/space/nios90/280766050"
pageId: "280766050"
---
The NIOS appliance supports the following authentication methods: local database, RADIUS, Active Directory, LDAP, TACACS+, and SAML. The appliance can use any combination of these authentication methods. It authenticates admins against its local database by default. Therefore, if you want to use local authentication only, you must configure the admin groups and add the local admin accounts, as described in [*Creating*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280766011)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280766011)[*Local*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280766011)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280766011)[*Admins*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280766011).

Depending on where admin user credentials are stored, you can configure the NIOS appliance to authenticate admins locally or remotely or using SAML. When you configure the authentication type as "local," NIOS authenticates admins against its local database. When you configure the authentication type as "remote," NIOS authenticates admins whose user credentials are stored remotely on authentication servers, such as RADIUS servers, AD domain controllers, LDAP servers, or TACACS+ servers. When you configure the authentication type as "SAML Only," NIOS authenticates admins against their user credentials in the IDP (Identity Provider).

Note the following when you configure remote authentication type for local admins:

- You cannot define two local admins that have the same name and belong to different authentication server groups.
- Only superusers can modify the authentication type for other admin accounts.
- At least one superuser account must use the remote authentication type.

To authenticate admins using RADIUS, Active Directory, TACACS+, or LDAP in addition to local authentication, you must define those services on the appliance and define the admin authentication policy. For information, see [*About*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/412976519)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/412976519)[*Remote*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/412976519)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/412976519)[*Admins*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/412976519). To authenticate admins using SAML, see [*Authenticating Admins Using SAML*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/194446232).

NIOS also supports two-factor authentication where it authenticates the following:

1. Administrators through the admin authentication policy.
2. Admin client certificates through the certificate authentication service.

For more information about two-factor authentication and how to configure it, see [*Defining*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275233)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275233)[*the*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275233)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275233)[*Authentication*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275233)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275233)[*Policy*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275233).

> **warning**
>
> ### Note
> 
> - If you are using remote authentication, you must always have at least one local admin in a local admin group to ensure connectivity to the NIOS appliance in case the remote servers become unreachable.
> - The Local admin authentication policy remains fixed at the top of the Authentication Policy list and cannot be reordered. The up/down arrow controls are disabled (grayed out) for this entry. Local authentication is always attempted first to prevent conflicts when the same user name exists in both local and remote databases. If a user name exists only in a remote authentication source (for example, Active Directory, RADIUS, or LDAP), NIOS automatically skips local authentication and forwards the login request to the next configured method.
