---
title: "About Remote Admins"
source: "/space/nios90/412976519"
pageId: "412976519"
---
NIOS can authenticate admins whose user credentials are stored remotely on RADIUS servers, AD domain controllers, LDAP servers, or TACACS+ servers. You can configure authentication server groups for each type of server to which NIOS sends authentication requests. For example, you can create a server group for RADIUS servers and another server group for AD domain controllers. Then in the admin authentication policy, you can list which authentication server groups to use and in what order.  
In addition, if admin groups are configured on the remote authentication server, you can configure admin groups with the same names on the NIOS appliance and list them in the authentication policy as well. Then if the remote authentication server provides the admin group name while authenticating an admin, NIOS can automatically assign the admin to the matching admin group specified in the authentication policy. You can also create a default admin group for all admins that are authenticated through a remote authentication service.  
Managing Administrators illustrates the authentication and authorization process for remote admins. In the example, two authentication server groups are configured—a RADIUS server group and an AD server group. When an admin logs in with a user name and password, the appliance uses the first service listed in the admin policy to authenticate the admin. If authentication fails, the appliance tries the next service listed, and so on. It tries each service on the list until it is successful or all services fail. If all services fail, then the appliance denies access and generates an error message in syslog.  
If authentication succeeds, the NIOS appliance tries to match the admin group names in the admin policy to any groups received from the remote server. If it finds a match, the NIOS appliance applies the privileges of that group to the admin and allows access. If the appliance does not find a match, then it applies the privileges of the default group. If no default group is defined, then the appliance denies access.   
  
*Authenticating* *Remote* *Admins*

*[drawio]*

Only superusers can perform the following tasks to configure NIOS to authenticate admins using remote authentication servers:

- Configure the authentication server groups. You can create multiple RADIUS, LDAP, and AD server groups, and certificate authentication services, but only one TACACS+ server group.
  
  - For information about RADIUS authentication, see [*Authenticating Admins Using RADIUS*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admins-using-radius).
  - For information about AD authentication, see [*Authenticating Admins Using Active Directory*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admins-using-active-directory)*.*
  - For information about TACACS+ authentication, see [*Authenticating Admin Accounts Using TACACS+*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admin-accounts-using-tacacs).
  - For information about LDAP authentication, see [*Authenticating Admins Using LDAP*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admins-using-ldap).
  - For information about the certificate authentication service, see [*Authenticating Admins Using Two-Factor Authentication*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admins-using-two-factor-authentic).
- Configure admin groups with names that match those on the remote server. For information about admin groups, see [*About Admin Groups*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-admin-groups).
- Configure the admin policy, as described in [*Defining the Authentication Policy*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/defining-the-authentication-policy).

> **warning**
>
> ### Note
> 
> Infoblox strongly recommends that even if you are using remote authentication, you always have at least one local admin in a local admin group to ensure connectivity to the appliance in case the remote servers become unreachable. Also, when you delete an authentication server group, the appliance removes it from the system. Deleted authentication server groups are not moved to the Recycle Bin. Once deleted, the authentication server groups no longer exist in the system.

When remote authentication is successful, the appliance creates a remote admin user object in the NIOS database, which stores user preferences such as time zone, table size, and active Dashboard widgets for the remote user. If the remote user does not log in to the appliance for more than 180 days, the appliance removes the corresponding admin user object from the database. Although the remote user can still log in to the appliance, user preferences are lost. The Grid Master performs this clean up action once a day.  
You can also authenticate users based on X.509 client certificates. You can configure NIOS to authenticate these admins through the two-factor authentication method. For more information about two-factor authentication and how to configure it, see [*Defining the Authentication Policy*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/defining-the-authentication-policy).
