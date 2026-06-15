---
title: "Generating the Keytab on Windows Servers 2008 or Windows Servers 2008 R2"
source: "/space/nios90/1412366949"
pageId: "1412366949"
---
To generate the keytab file using the Ktpass tool:

1. Start a command prompt.
2. ```
   Enter the following command to generate the keytab file for the NIOS appliance user account:
   ktpass -princ username@REALM -mapuser logon_name@REALM -pass password -out my.tab -ptype krb5_nt_principal -crypto encryption
   ```
   
   

Example:

```
ktpass -princ DNS/ns1.corpxyz.com@GSS.LOCAL -mapuser jsmith@GSS.LOCAL -pass 37Le37 -out ns1.keytab -ptype krb5_nt_principal -crypto RC4-HMAC-NT
```

where:  
**-princ** = Kerberos principal. Note that this parameter is case sensitive. Specifies the principal name for the host or service in this format: DNS/ns1.corpxyz.com@GSS.LOCAL

- DNS = Service name in uppercase format.
- [ns1.corpxyz.com](http://ns1.corpxyz.com) = Instance in FQDN (fully-qualified domain name) format; this is the same as the DNS name of the NIOS appliance.
- GSS.LOCAL = The Kerberos realm in uppercase format. This must be the same as the AD domain name.

**-mapuser** = Maps the Kerberos principal name to the AD user account. If you omit the account name, mapping is deleted from the specified principal. You can use ksetup without any parameters or arguments to see the current mapped settings and the default realm. Example: ksetup /mapuser &lt;Principal&gt; &lt;Account&gt;. To create an AD user account, see Creating an AD User Account above.

- jsmith = The AD user name for the NIOS appliance.
- GSS.LOCAL = The Kerberos realm in uppercase. The realm (or domain name) must be the same as that specified in the **-princ** option.

**-pass** = The AD user account password. The Ktpass command changes the account password to the specified value, thus incrementing the version number of the user account and the resulting keytab file.

- 37Le37 = The password of the user account for the NIOS appliance.

**-out** = The name of the keytab file that is generated.

- ns1.ktb = The name of the keytab file

**-ptype** = Sets the principal type. This must be **krb5_nt_principal**.  
**-crypto** = Specifies the encryption type. Note that the **RC4-HMAC-NT** encryption type is enabled by default. You can also use the following:

- **DES-CBC-CRC** = Specifies DES encryption for the account. This encryption type is used for compatibility.
- **DES-CBC-MD5** = Specifies DES encryption for the account. This encryption type adheres to the MIT implementation and is used for compatibility.
- **RC4-HMAC-NT** = Specifies 128-bit RC4-HMAC encryption for the account. This is enabled by default.
- **AES256-SHA1** = Specifies 256-bit AES encryption for the account.
- **AES128-SHA1** = Specifies 128-bit AES encryption for the account.
- **ALL** = Specifies all of the above encryption types. Do not use this option if DES support is disabled.

You can optionally specify the following:  
**+DesOnly** = Specifies DES encryption for the account. You must use this only when you use DES-CBC-MD5 for compatibility. Note that Windows 7 and Windows Server 2008 R2 do not support DES by default. However, you can enable DES on the Windows 2008 server. Include this option if you did not enable DES encryption for the account. For more information, refer to the information available in a third-party portal at:[* http://weblogic-wonders.com/weblogic/2010/11/30/windows-7-des-encryption-support-for-kerberos-authentication/*](http://weblogic-wonders.com/weblogic/2010/11/30/windows-7-des-encryption-support-for-kerberos-authentication/)

> **warning**
>
> ### Note
> 
> You must not use +Desonly with /crypto all or other non-DES encryption types.

- **+setpass** = Sets a new AD user account password. This is required if the **+DesOnly** option is specified. When you use this encryption type, you must change the user's password. Otherwise, the ticket issued for the principal becomes unusable.

After you execute the command to generate the keytab file, the AD domain controller displays a series of messages similar to the following to confirm that it successfully generated the keytab file:

```
Targeting domain controller: qacert.test.local

Using legacy password setting method

Successfully mapped DNS/ns1.corpxyz.com to ns1.

Key created.

Output keytab to ns1.ktb: Keytab version: 0x502

keysize 80 DNS/ns1.corpxyz.com@GSS.LOCAL ptype 1 (KRB5_NT_PRINCIPAL) vno 3 etype 0x12 (AES256-SHA1)

keylength 32 (0xea8675d7abf13fd760a744088642fb917ceb6c9d267f5c54e595597846f06407)
```
