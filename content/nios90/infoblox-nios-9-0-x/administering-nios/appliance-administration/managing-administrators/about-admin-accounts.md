---
title: "About Admin Accounts"
source: "/space/nios90/280275635"
pageId: "280275635"
---
# Overview of Admin Accounts

You as a user must have an admin account to log in to the NIOS appliance. Each admin account belongs to an admin group, which contains roles and permissions that determine the tasks a user can perform. For information, see [*About Admin Groups*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-admin-groups).

# How Admin Authentication Works

When an admin connects to the appliance and logs in with a username and password, the appliance starts a two-step process that includes both authentication and authorization. First, the appliance tries to authenticate the admin using the username and password. Second, it determines the authorized privileges of the admin by identifying the group to which the admin belongs. It grants access to the admin only when it successfully completes this process.

# Supported Authentication Methods

## Local and Remote Authentication

The NIOS appliance can authenticate users stored on its local database as well as users stored remotely on an Active Directory domain controller, a RADIUS server, a TACACS+ server, LDAP server or an SAML Idp. The group from which the admin receives privileges and properties is stored locally.

## SAML Authentication

NIOS supports SAML 2.0 as an authentication method for administrator login. SAML allows NIOS to delegate authentication to an external Identity Provider (IdP) through Single Sign On (SSO). For a list of supported administrator authentication methods, see [*Authenticating Administrators (NIOS 9.0)*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-administrators). For details about the SAML login flow, see [*Authenticating Admins Using SAML (NIOS 9.0)*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admins-using-saml).

The following limitations apply to the use of SAML authentication in NIOS:

- **Service accounts cannot use SAML-based Single Sign-On (SSO).** SAML relies on an interactive browser redirect to an Identity Provider (IdP), which is not compatible with automated or WAPI-driven workflows. For details about the SAML authentication flow, see [*Authenticating Admins Using SAML (NIOS 9.0)*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admins-using-saml).
- **SAML configuration is supported only through the Grid Manager GUI**; configuring SAML through WAPI may not function. For information about SAML configuration requirements and limitations, see [*Enabling SAML Authentication (NIOS 9.0)*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admins-using-saml/enabling-saml-authentication).

# Certificate-Based Authentication and Two-Factor Authentication

NIOS can authenticate users based on X.509 client certificates irrespective of the client certificate source. For example, smart card holders such as U.S. Department of Defense CAC users and PIV card holders. The status of these certificates is stored remotely on OCSP (Online Certificate Status Protocol) responders. NIOS uses two-factor authentication to validate these users. For more information about two-factor authentication and how to configure it, see [*Authenticating Admins Using Two-Factor Authentication*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/authenticating-admins-using-two-factor-authentic).

# Storing Admin Accounts Locally and Remotely

The tasks involved in configuring administrator accounts locally and remotely are listed in *Storing* *Admin* *Accounts* *Locally* *and* *Remotely *table.

| NIOS Appliance | **RADIUS** **server/AD** **Domain** **Controller/TACAS+** **server/LDAP** **server/Certificate** **authentication** **service/SAML Idp** |
| --- | --- |
| **To** **store** **admin** **accounts** **locally** | - Use the default admin group ("admin-group") or define a new group - Set the privileges and properties for the group - Add admin accounts to the group |  |
| **To** **store** **admin** **accounts** **remotely** | - Configure communication settings with a RADIUS server, an Active Directory domain controller, TACACS+ server, LDAP server or SAML Idp.  If you use admin groups on the RADIUS server, Active Directory domain controller, TACACS+ server, LDAP server or SAML Idp:  - Configure admin groups that match the remote admin groups - Set the privileges and properties for the groups  If you do not use admin groups on the RADIUS server, Active Directory domain controller, TACACS+ server, LDAP server or SAML Idp:  - Assign an admin group as the default | - Configure communication settings with the NIOS appliance  If you use admin groups:  - Import Infoblox VSAs (vendor-specific attributes) (if RADIUS) - Define an admin group with the same name as that on the NIOS appliance - Define admin accounts and link them to an admin group  If you do not use admin groups:  - Define admin accounts |

# Admin Authentication Policy

The admin policy defines how the appliance authenticates the admin: with the local database, RADIUS, Active Directory, TACACS+, LDAP or SAML. You must add RADIUS, Active Directory, TACACS+, LDAP or SAML as one of the authentication methods in the admin policy to enable that authentication method for admins. See [*Defining the Authentication Policy*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/defining-the-authentication-policy) for more information about configuring the admin policy.

> **warning**
>
> ### Note
> 
> Local passwords are stored in the database as part of the user object. Password values are stored after applying a random salt and by hashing them with the SHA-512 algorithm.

The following figure illustrates the relationship of local and remote admin accounts, admin policy, admin groups, and permissions and properties.

*Privileges* *and* *Properties* *Applied* *to* *Local* *and* *Remote* *Admin* *Accounts*

*[drawio]*

# Creating Administrator Accounts

Complete the following tasks to create an admin account:

1. Use the default admin group or create an admin group. See [*About Admin Groups*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-admin-groups)*.*
2. Define the administrative permissions of the admin group. See [*About Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions).
3. Create the admin account and assign it to the admin group.
   
   - To add the admin account to the local database, see [*Creating Local Admins*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/creating-local-admins).
   - To configure the appliance to authenticate the admin account stored remotely, see [*About Remote Admins*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-remote-admins).
