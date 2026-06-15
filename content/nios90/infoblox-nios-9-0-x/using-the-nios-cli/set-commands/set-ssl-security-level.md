---
title: "set ssl_security_level"
source: "/space/nios90/280790951"
pageId: "280790951"
---
The `set ssl_security_level` command is used to configure the OpenSSL security level.

# Syntax

Infoblox &gt; `set ssl_security_level [ 0 | 1 | 2 ]`

# Example

`Infoblox &gt; set ssl_security_level 0 `

`The following services need to be restarted manually: GUI`

`Infoblox &gt; set ssl_security_level 1`

`The following services need to be restarted manually: GUI`

Infoblox &gt; `set ssl_security_level 2`

`The following services need to be restarted manually: GUI`



> **warning**
>
> Note
> 
> - After a NIOS upgrade to 9.0.0, the value of the `set ssl_security_level` command is set to 1 by default. However, Infoblox recommends that you set the value to 2.
> - From NIOS 9.0.4, the default security level is set to 0. During a NIOS upgrade, if the security level is set to 1, it will be reset to 0. However, if the security level prior to the upgrade is 2, it remains unaffected.
> - Before setting the value of of the `set ssl_security_level` command to 2, it is important to note the following:
>   
>   - Certificates key size must be 2048 or greater.
>   - Certificates must not have SHA1 and MD5 signature algorithms.
>   - For CA certificates, SKI (Subject Key Identifier) is available.



The importance of using Security Level 2 is:

- Emphasizes stronger security.
- Chooses secure cipher suites for transmitting data.
- Stronger encryption methods that prevent unauthorized access.
- Prioritizes larger keys and secure algorithms to ensure better data protection.
- Provides better protection against eavesdropping, even if the older methods are not supported.
- Strict certificate verification, ensuring reliability.
- Promotes the usage of the most recent and secure communication protocols.
