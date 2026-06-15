---
title: "Creating an AD User Account"
source: "/space/nios90/1333887152"
pageId: "1333887152"
---
Connect to the AD domain controller and create a user account for the NIOS appliance.

> **warning**
>
> ### Note
> 
> The name you enter in the User logon name is the name that you later use when exporting the keytab file.  
> This is also the principal name. The text in the First name, Initials, Last name, and Full name fields is irrelevant to this task.

The AD domain controller automatically creates a Kerberos account for this user with an accompanying keytab. Note the following:

- If you define an expiration date for the user account and you later create a new account when the first one expires, the keytab for the corresponding Kerberos account changes. At that point, you must update the keytab file on the NIOS appliance (see Generating and Exporting the Keytab File and Importing the Keytab File and Enabling GSS-TSIG Authentication below). Optionally, if your security policy allows it, you can set the user account for the NIOS appliance so that it never expires.
- If the AD domain controller is running Windows Server 2003, the user account must have the DES encryption type enabled. You can enable this either in the Account tab when you create the user account or by specifying** +DesOnly** when you use the Ktpass tool to generate the keytab file.
- The newly created AD user account must be a member of the DnsUpdateProxy group or an account that allows it to update records that have potentially been added by another DHCP server, such as DNS Admins.
