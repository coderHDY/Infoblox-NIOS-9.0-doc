---
title: "Generating the Keytab on Windows Server 2016, Windows Server 2019, or Windows Servers 2022"
source: "/space/nios90/1412366982"
pageId: "1412366982"
---
To generate the keytab file using the Ktpass tool:

1. Start a command prompt.
2. Enter the following command to generate the keytab file for the NIOS appliance user account:

**ktpass -princ** *username****@****REALM* -**mapuser** *logon_name****@****REALM* **-pass** *password* **-out** *my.tab* **-ptype krb5_nt_principal -crypto** *encryption*  
Example:  
`ktpass -princ DNS/ns1.corpxyz.com@GSS.LOCAL -mapuser jsmith@GSS.LOCAL -pass 37Le37 -out ns1.keytab -ptype krb5_nt_principal -crypto RC4-HMAC-NT`   
where:  
**-princ** = Kerberos principal. Note that this parameter is case sensitive. Specifies the principal name for the host or service in this format: `DNS/ns1.corpxyz.com@GSS.LOCAL`

- DNS = This is an example of the service name in uppercase format.
- [ns1.corpxyz.com](http://ns1.corpxyz.com) = This is an example of the instance in FQDN (fully-qualified domain name) format; this is the same as the DNS name of the NIOS appliance.
- GSS.LOCAL = This is an example of the Kerberos realm in uppercase format. This must be the same as the AD domain name.

**-mapuser** = Maps the Kerberos principal name to the AD user account. If you omit the account name, mapping is deleted from the specified principal. You can use ksetup without any parameters or arguments to see the current settings and the default realm. Example: `ksetup /mapuser &lt;Principal&gt; &lt;Account&gt;`. To create an AD user account, see Creating an AD User Account above.

- jsmith = This is an example of the AD user name for the NIOS appliance.
- GSS.LOCAL = This is an example of the Kerberos realm in uppercase. The realm (or domain name) must be the same as that specified in the -**princ** option.

**-pass** = The AD user account password. The Ktpass command changes the account password to the specified value, thus incrementing the version number of the user account and the resulting keytab file.

- 37Le37 = This is an example of the password of the user account for the NIOS appliance.

**-out** = The name of the keytab file that is generated.

- ns1.ktb = This is an example of the name of the keytab file.

**-ptype** = Sets the principal type. This must be **krb5_nt_principal**.   
**-crypto** = Specifies the encryption type. You can specify the following encryption types:

- **DES-CBC-CRC** = Specifies DES encryption for the account. This encryption type is used for compatibility purposes.
- **DES-CBC-MD5** = Specifies DES encryption for the account. This encryption type adheres to the MIT implementation and is used for compatibility purposes.
- **RC4-HMAC-NT** = Specifies 128-bit RC4-HMAC encryption for the account. This is enabled by default.
- **AES256-SHA1** = Specifies 256-bit AES encryption for the account.
- **AES128-SHA1** = Specifies 128-bit AES encryption for the account.
- **ALL** = Specifies all of the above encryption types. Do not use this option if DES support is disabled.

After you execute the command to generate the keytab file, the AD domain controller displays a series of messages similar to the following to confirm that it successfully generated the keytab file:

```
Targeting domain controller: qacert.test.local

Using legacy password setting method

Successfully mapped DNS/ns1.corpxyz.com to ns1.

Key created.

Output keytab to ns1.keytab:

Keytab version: 0x502

keysize 80 DNS/ns1.corpxyz.com@GSS.LOCAL ptype 1 (KRB5_NT_PRINCIPAL) vno 3 etype 0x12 (AES256-SHA1)

keylength 32 (0xea8675d7abf13fd760a744088642fb917ceb6c9d267f5c54e595597846f06407)
```
