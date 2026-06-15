---
title: "About Creating an AD User Account"
source: "/space/nios90/1412432438"
pageId: "1412432438"
---
Connect to the AD domain controller and create a user account for the NIOS appliance.

> **warning**
>
> ### Note
> 
> The name that you enter in the User logon name is the name that you later use when exporting the keytab file. This is also the principal name. The text in the First name, Initials, Last name, and Full name fields is irrelevant to this task.

The AD domain controller automatically creates a Kerberos account for this user. Note the following:

- If you define an expiration date for the user account and you later create a new account when the first one expires, the keytab for the corresponding Kerberos account changes. At that point, you must update the keytab file on the NIOS appliance (see Generating and Exporting the Keytab File below and [*Enabling GSS-TSIG Authentication for DHCP*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ddns-updates/configuring-gss-tsig-keys)). Optionally, if your security policy allows it, you can set the user account for the NIOS appliance so that it never expires.
- If the AD domain controller is running Windows Server 2003, the user account must have the DES encryption type enabled. You can enable this either in the Account tab of the AD domain controller when you create the user account or by specifying **+DesOnly** when you use the Ktpass tool to generate the keytab file. For instructions, see the next section, Generating and Exporting the Keytab File below.
- The newly created AD user account must be a member of the DnsUpdateProxy group or an account that allows it to update records that have potentially been added by another DHCP server, such as DNS Admins.
