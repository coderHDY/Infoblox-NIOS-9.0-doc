---
title: "Logging Messages"
source: "/space/nios90/1394543550"
pageId: "1394543550"
---
The appliance saves the audit log entries for insert and delete operations. If you upload keys with encryption types other than the ones that NIOS supports, the appliance displays a warning message in Grid Manager and in the syslog and also it displays the encryption type as *other* in Grid Manager and in the syslog. For more information about the syslog, see [*Using a Syslog Server*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403148).

The appliance generates an audit log when you upload a key, assign the key to a member, remove the key associated with a member or delete a key. The audit log entries are based on each key that you have uploaded. For example, NIOS saves the following in the audit log when you upload a key:

```
2014-02-14 18:17:30.531Z \[admin\]: imported DNS Kerberos key for

principal='DNS/infoblox.localdomain@abc.com', version=5, enctype=des-cbc-crc
```

For more information about audit logs, see [*Using the Audit Log*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403049). You can search Kerberos keys using the realm (domain), principal name or an encryption type.

The appliance generates a comment in the option section of the DNS configuration file for each Kerberos principal that is associated with the Grid member. These comments are for information only and it indicates the principals, their versions and encryption types that are used by the appliance.
