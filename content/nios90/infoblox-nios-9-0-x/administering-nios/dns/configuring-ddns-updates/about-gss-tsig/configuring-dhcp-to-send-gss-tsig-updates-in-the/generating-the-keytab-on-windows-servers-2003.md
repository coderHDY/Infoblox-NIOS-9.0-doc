---
title: "Generating the Keytab on Windows Servers 2003"
source: "/space/nios90/1412432531"
pageId: "1412432531"
---
The Ktpass tool is included in the Windows Server 2003 Support Tools. To export the keytab file using a Microsoft Windows 2003 Resource Kit:

1. Start a command prompt.
2. Enter the following command to generate the keytab file for the NIOS appliance user account:  
   **ktpass** **-princ** *service_name/FQDN_instance@REALM* **-mapuser** *AD_username@REALM* **-pass** *password* **-ou*****t ****filename*.ktb **-ptype** KRB5_NT_PRINCIPAL **-crypto** **RC4-HMAC-NT**
   
   Note that the values are case-sensitive.

The following are some examples of keytab file:

```
ktpass -princ HOST/ns1.corpxyz.com@GSS.LOCAL -mapuser gssuser@GSS.LOCAL -pass 37Le37
-out ns1.keytab -ptype krb5_nt_principal -crypto all
ktpass -princ gssuser@GSS.LOCAL -mapuser gssuser@GSS.LOCAL -pass 37Le37 -out gssuser.keytab -ptype krb5_nt_principal -crypto all
ktpass -princ DNS/ns1.corpxyz.com@GSS.LOCAL -mapuser jsmith@GSS.LOCAL -pass 37Le37 -out ns1.ktb -ptype KRB5_NT_PRINCIPAL -crypto des-cbc-md5 +DesOnly
```

where  
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
**-crypto** = Specifies the encryption type. You can use the following encryption types:

- DES-CBC-CRC = Specifies DES encryption for the account. This encryption type is used for compatibility.
- DES-CBC-MD5 = Specifies DES encryption for the account. This encryption type adheres to the MIT implementation and is used for compatibility.
- RC4-HMAC-NT = Specifies 128-bit RC4-HMAC encryption for the account. This is enabled by default.

**+DesOnly** = Specifies DES encryption for the account.

> **warning**
>
> ### Note
> 
> Windows Server 2003 does not support AES encryption.

After you execute the command to generate the keytab file, the AD domain controller displays a series of messages similar to the following to confirm that it successfully generated the keytab file:

```
Targeting domain controller: ibtest-xu5nxd56.corpxyz.local

Using legacy password setting method

Successfully mapped dns/anywhere to dns.

Key created.

Output keytab to dns.ktb:

Keytab version: 0x502

keysize 56 dns/anywhere@GSS.LOCAL ptype 1 (KRB5_NT_PRINCIPAL) vno 5 etype 0x3 (DES-CBC-MD5)

keylength 8 (0xbae610f11552c80b)
```
