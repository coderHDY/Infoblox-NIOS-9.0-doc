---
title: "Configuring SNMPv3 Users"
source: "/space/nios90/1406500868"
pageId: "1406500868"
---
To enable SNMPv3, you must first configure SNMPv3 users on the appliance. For information about SNMPv3, see [*Understanding Simple Network Management Protocol*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662546)*.*

> **warning**
>
> ### Note
> 
> For SNMPv3 configurations using AES-192 or AES-256 privacy protocols, Infoblox recommends NET-SNMP 5.9 or later, as earlier versions do not support these protocols.

To configure an SNMPv3 user:

1. From the **Administration** tab, select the **SNMPv3** **Users** tab, and then click the Add icon.
2. In the *Add* *SNMPv3* *User* wizard, complete the following:
   
   - **Name:** Enter a user name for the SNMPv3 management system.
   - **Authentication** **Protocol:** Select one of the following. The output of the selected protocol is included as part of the SNMP message sent to the receiver.
     
     - **MD5**: Select this to use the HMAC-MD5-96 authentication protocol to authenticate the SNMPv3 user.  
       This protocol uses the MD5 (Message-Digest algorithm 5) hash function in HMAC (Hash-based Message Authentication Code) and truncates the output to 96 bits. For detailed information about the protocol, refer to *RFC1321,* *The* *MD5* *Message-Digest* *Algorithm*.
     - **SHA**: Select this to use the HMAC-SHA-96 authentication protocol to authenticate the SNMPv3 user.  
       This protocol uses the SHA (Secure Hash Algorithm) hash function and truncates the output to 96 bits. The output is included as part of the SNMP message sent to the receiver.
     - **SHA-224:**  
       Select this to use the HMAC-SHA-224 authentication protocol to authenticate the SNMPv3 user.  
       This protocol uses the SHA-224 (Secure Hash Algorithm 224-bit) hash function in HMAC (Hash-based Message Authentication Code) and truncates the output to 128 bits. For detailed information about the algorithm, refer to *RFC 7860, HMAC-SHA-2 Authentication Protocols in User-Based Security Model (USM) for SNMPv3.*
     - **SHA-256:**  
       Select this to use the HMAC-SHA-256 authentication protocol to authenticate the SNMPv3 user.  
       This protocol uses the SHA-256 (Secure Hash Algorithm 256-bit) hash function in HMAC (Hash-based Message Authentication Code) and truncates the output to 192 bits. For detailed information about the algorithm, refer to *RFC 7860, HMAC-SHA-2 Authentication Protocols in User-Based Security Model (USM) for SNMPv3.*
     - **SHA-384:**  
       Select this to use the HMAC-SHA-384 authentication protocol to authenticate the SNMPv3 user.  
       This protocol uses the SHA-384 (Secure Hash Algorithm 384-bit) hash function in HMAC (Hash-based Message Authentication Code) and truncates the output to 256 bits. For detailed information about the algorithm, refer to *RFC 7860, HMAC-SHA-2 Authentication Protocols in User-Based Security Model (USM) for SNMPv3*.
     - **SHA-512:**  
       Select this to use the HMAC-SHA-512 authentication protocol to authenticate the SNMPv3 user.  
       This protocol uses the SHA-512 (Secure Hash Algorithm 512-bit) hash function in HMAC (Hash-based Message Authentication Code) and truncates the output to 384 bits. For detailed information about the algorithm, refer to *RFC 7860, HMAC-SHA-2 Authentication Protocols in User-Based Security Model (USM) for SNMPv3*.
     - **None**: Select this to decline using any authentication protocol for this SNMPv3 user. When you select this option, you are not required to enter a password.
       
       - **Password:** Enter a password for the selected authentication protocol.
       - **Confirm** ** Password:** Enter the same password.
   - **Privacy** ** Protocol:** Select one of the following:
     
     - **DES**: Select this to use DES for data encryption. DES is a block cipher that employs a 56-bit key size and 64-bit block size in the encryption.
     - **AES**: Select this to use AES for data encryption. AES is a symmetric-key encryption standard that comprises AES-128 block cipher. The cipher has a 128-bit block size and a key size of 128 bits.
     - **AES-192**: Select this to use AES-192 for data encryption. This protocol uses the Advanced Encryption Standard (AES) with a 192-bit key size and a 128-bit block size.
     - **AES-256**: Select this to use AES-256 for data encryption. This protocol uses the Advanced Encryption Standard (AES) with a 256-bit key size and a 128-bit block size.
     - **None**: Select this to decline using any privacy protocol for this SNMPv3 user. When you select this option, you are not required to enter a password.
       
       - **Password:** Enter a password for the privacy protocol.
       - **Confirm** ** Password:** Enter the same password.
   - **Comment:** Enter useful information about the SNMP user, such as location or department.
   - **Disable:** Select this checkbox to retain an inactive profile for this SNMP user in the configuration. You can clear this checkbox to activate the profile.  
     If an SNMPv3 user is configured to send SNMP queries, you cannot delete the user.
3. Click **Next** to define extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
4. Save the configuration.
