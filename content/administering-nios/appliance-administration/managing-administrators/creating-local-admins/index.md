---
title: "Creating Local Admins"
source: "/space/nios90/280766011"
pageId: "280766011"
---
When you create an admin account, you must specify the authentication type, name, password, and admin group of the administrator. You can also control in which time zone the appliance displays the time in the audit log and the DHCP and IPAM tabs of Grid Manager, such as the *DHCP* *Lease* *History* and *DHCP* *Leases* panels. The appliance can use the time zone that it automatically detects from the management system that the admin uses to log in.  
  
Alternatively, you can override the time zone auto-detection feature and specify the time zone. To create an admin account and add it to an admin group:

1. Log in as a superuser.
2. From the **Administration** tab, select the **Administrators** tab -> **Admins** tab, and then click the Add icon.  
   or  
   From the **Administration** tab, select the **Administrators** tab -> **Groups** tab -> *admin_group*, and then click the Add icon.
3. In the *Add* *Administrator* wizard, complete the following:
   
   - **Authentication** **Type:** The default is **Local**. When you select **Local**, NIOS authenticates admins against the local database.   
     **Local:** The following fields are displayed when you select **Local** authentication type. Enter the following:
     
     - **Login:** Enter a name for the administrator. This is the user name that the administrator uses to log in to the appliance. This user name is stored in the NIOS local database.  
       Infoblox recommends that you enter a user name with a maximum length of 32 characters. Infoblox also recommends that the user name be POSIX-compliant. The user name can comprise lowercase and uppercase characters, numeric characters and hyphen. User names on UNIX systems are case-sensitive. Infoblox recommends not using slashes (forward or backward) in user names. To prevent security vulnerabilities, starting with NIOS 9.0.8, admin usernames must not contain forward slashes or backward slashes*.* It applies to all authentication method types.
     - **Password:** Enter a password for the administrator. This is the password that the administrator uses to log in to the appliance. This password is stored in the NIOS local database.
     - **Confirm ** **Password:** Enter the same password.
       
       When you set up the account for a Grid Master or a standalone vNIOS instance that is deployed on AWS, the minimum password length must be four characters. The password must consist of at least one uppercase character, one lowercase character, one numeric character, and one symbol character. Example: Infoblox1!
       
       If the symbol character is at the beginning of the password, then include the password within quotes (''). Example: '@Infoblox123'.  
         
       The Local admin authentication policy remains fixed at the top of the Authentication Policy list and cannot be reordered. The up/down arrow controls are disabled (grayed out) for this entry. Local authentication is always attempted first to prevent conflicts when the same user name exists in both local and remote databases. If a user name exists only in a remote authentication source (for example, Active Directory, RADIUS, or LDAP), NIOS automatically skips local authentication and forwards the login request to the next configured method.
   - **Use AWS SSH authentication keys**: To prevent CLI login failures after upgrading, you will need to enable **Use AWS SSH authentication keys** for each user that needs CLI access to AWS appliances. When you select **Use AWS SSH authentication keys**, NIOS allows you to access the CLI either by using a key pair and entering a password, or only by using the key pair which means the password-only authentication is blocked for the user. You can upload the SSH key by using the **Manage SSH Public Keys** field. It is mandatory to upload a valid SSH public key if you select the **Use AWS SSH authentication keys **option.   
     If you use the **User data** field in the AWS console to install a NIOS license, the **Use AWS SSH authentication key** option is enabled by default. For more information about the **User data** field, see the *Initializing New Infoblox vNIOS for AWS Instances with the AWS User Data Field* section in the [*Installation Guide for vNIOS for AWS documentation*](https://docs.infoblox.com/space/Appliances/35364966/Virtual+Appliances).
     
     **Note**:  
     If the Grid Master in a Grid is a vNIOS for AWS instance, according to the **Authentication Method** configured for AWS SSH access for the admin account, you must use the key pair or key pair and password as the SSH login for all members in that Grid.
   - **Authentication Method**: You can choose **Key pair** or **Key pair + Password **methods from the **Authentication Method** drop-down list. A server generates two distinct, but related keys: a public key that you upload and a corresponding private key that is stored in the system. A Key pair is the combination of these two related keys and is the default authentication method. If you select **Key pair **as the authentication method, then a user can access the CLI with a valid key pair. If you select **Key pair + Password** as the authentication method, the user must provide a password to access the CLI even after a successful key pair authentication. For information on defining and managing passwords, see Managing Passwords below.
   - **Manage SSH Public Keys**: You need to upload a valid SSH public key file. The supported key types are RSA, EDSA, and ED25519. The **Key Type **and **Key Value **fields in the **MANAGE SSH PUBLIC KEYS** are automatically updated once you upload a valid SSH key.  
     The **Use AWS SSH authentication keys**, **Authentication Method**, and **Manage SSH Public Keys** fields are not available for the **Remote** and **SAML Only** authentication types. That is, you cannot use the CLI to access vNIOS for AWS if you are a remote user or a SAML user.   
     Starting from NIOS 9.0.8, SSH key names cannot contain forward slashes, backward slashes, control characters, bash
     
     executable commands, or special characters. SSH key names must also be 64 characters or fewer. This holds good across
     
     all the authentication methods.
   - **Remote:** When you select **Remote**, NIOS authenticates admins based on the user credentials stored remotely on authentication servers, such as RADIUS servers, AD domain controllers, LDAP servers, or TACACS+ servers. The **Login** field is displayed when you select **Remote**  authentication type. Enter a name for the administrator that is stored in the database of the remote server. This is the user name that the administrator uses to log in to the appliance.
   - **SAML Only**: When you select **SAML Only**, NIOS authenticates admins based on the user credentials stored in the IDP (Identity Provider). An admin can log in to NIOS only by clicking the **SSO Login** button and if the user credentials exist in the IDP account.
   - **SAML/Local**: When you select **SAML/Local**, NIOS authenticates admins based on the user credentials stored in the IDP, when the SSO Login button is clicked or against the local database when the User name and Password is supplied and the Login button is clicked. For **SSO Login**, the user name and password need not be supplied in the NIOS GUI, rather it should be supplied in the **IDP's** login prompt. For information about SAML authentication, see [*Authenticating Admins Using SAML*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/194446232).  
     Note that you cannot configure the **Remote** authentication type for NIOS admin users who belong to the **fireeye-group** admin groups.
   - **Email** **Address:** Enter the email address for this administrator. The appliance uses this email address to send scheduling notifications.
   - **Admin** ** Group:** Click **Select** to specify an admin group. If there are multiple admin groups, Grid Manager displays the *Admin * *Group* * Selector* dialog box from which you can select one. An admin can belong to only one admin group at a time.  
     NIOS appliance creates a new group, **fireeye-group**, when you add the first FireEye zone. The FireEye admin group is read-only and you cannot assign permissions to it. Select **fireeye-group** for the admin group and add users to this group. For more information, see [ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662094)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662094)[*About*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662094)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662094)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662094)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662094)[*FireEye*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662094)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662094)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662094)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662094)[*Integrated*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662094)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662094)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662094)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662094)[*RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662094)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662094)  
     Note that you cannot add a NIOS admin user that uses the Remote authentication type to the **fireeye-group** admin group.
   - **Comment:** Enter useful information about the administrator.
   - **Disable:** Select this checkbox to retain an inactive profile for this administrator in the configuration. For example, you might want to define a profile for a recently hired administrator who has not yet started work. Then when he or she does start, you simply need to clear this checkbox to activate the profile.
   - **Status**: Displays the status of the administrator. The status can be one of the following:
     
     - **Active**: The administrator account is active. This is the default status.
     - **Disabled**: The administrator account is disabled.
     - **Locked**: The administrator account is locked because the password has been entered incorrectly a specified number of times.
     - **Inactive**: The administrator account is inactive because the account has not been logged in to for a specified period of time. For more information about configuring security features , see [*Managing Security Operations*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280407257).
4. Optionally, click **Next** to add extensible attributes to the admin account. For information, see  [*About  Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
5. Save the configuration and click **Restart** if it appears at the top of the screen.
