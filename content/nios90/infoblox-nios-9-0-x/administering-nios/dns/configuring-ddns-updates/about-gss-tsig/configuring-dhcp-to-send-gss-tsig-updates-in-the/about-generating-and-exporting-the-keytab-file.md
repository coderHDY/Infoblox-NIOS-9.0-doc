---
title: "About Generating and Exporting the Keytab File"
source: "/space/nios90/1412432469"
pageId: "1412432469"
---
You can use the Ktpass tool to generate and export the keytab file for the Kerberos account. Note that the version of the Ktpass tool that you use must match the Windows version of the domain controller. For example, if you are using a domain controller running Windows Server 2008 or Windows Server 2008 R2, Windows Server 2012, Windows Server 2012 R2, Windows Server 2016 or Windows Server 2019, you must use the Ktpass tool for Windows Server 2008, Windows Server 2008 R2, Windows Server 2012, Windows Server 2012 R2, Windows Server 2016 or Windows Server 2019.  
You enter different commands for generating and exporting the keytab file, depending on whether you are generating the keytab file from a server running Microsoft Windows 2000, Windows Server 2003, Windows Server 2008, Windows Server 2008 R2, Windows Server 2010, Windows Server 2012, Windows Server 2012 R2, Windows Server 2016 or Windows Server 2019.  
A Windows Server 2003 domain controller allows you to generate a keytab file with only one key for a principal. A Windows Server 2008, Windows Server 2008 R2 domain controller, Windows Server 2012, Windows Server 2012 R2, Windows Server 2016 or Windows Server 2019 allows you to generate a keytab file with multiple keys for one principal. This is useful when the KDC has principals with multiple encryption types. When the NIOS DHCP server uses a keytab with multiple keys, it negotiates a key based on those in the configured keytab file.

> **warning**
>
> ### Note
> 
> The keytab file contains highly sensitive data for the NIOS appliance account. Ensure that you store and transport its contents securely.

Infoblox strongly recommends the following encryption types for compatibility purposes:

| **Microsoft Windows Server** | **Export** **keytab** |
| --- | --- |
| Microsoft Windows 2000 | Specify **/crypto** **DES-CBC-MD5** as the export keytab. |
| Microsoft Windows 2003 | Specify **/crypto** **RC4-HMAC-NT** as the export keytab.  - Infoblox recommends that you do not use DES, but it is supported if you need it for compatibility with non-Windows systems. |
| Microsoft Windows 2008 and higher | Specify **/crypto** **RC4-HMAC-NT** as the export keytab.  - You can also use AES, but RC4 is set by default for Windows 2008 servers. - Infoblox recommends that you do not use DES, but it is supported if you need it for compatibility with non-Windows systems. |
