---
title: "Generating the Keytab on Windows 2000 Servers"
source: "/space/nios90/1412432498"
pageId: "1412432498"
---
To export the keytab file using a Microsoft Windows 2000 Resource Kit:

1. Start a command prompt.
2. ```
   Enter the following command to export the keytab file for the NIOS appliance user account: 
   C:> ktpass -princ service_name/FQDN_instance@REALM -mapuser AD_username -pass password -out filename.keytab
   ```
   
   Note that the values are case-sensitive.
   
   where:
   
   - *service_name/instance*: The AD user name for the NIOS appliance and a character string. The AD user name must match the user logon name on the AD domain controller.
   - *REALM*: The Kerberos realm in uppercase. It must match the realm (or domain name) specified in the** –mapuser** option.

For example:

```
C:> ktpass -princ DNS/ns1.corpxyz.com@corpxyz.COM -mapuser ns1@corpxyz.com -pass 37Le37
-out ns1.keytab
```
