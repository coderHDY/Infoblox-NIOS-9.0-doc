---
title: "set ssl_tls_protocols"
source: "/space/nios90/414059223"
pageId: "414059223"
---
The `set ssl_tls_protocols `command allows you to enable or disable the SSL/TLS protocols for APACHE and SAML services only. By default, TLSv1.0, TLSv1.1, TLSv1.2 and TLSv1.3 are enabled. Note that for SAML, if any, of the protocols is disabled, eventually only the highest protocol in the sequence is enabled. You cannot change the SSL/TLS protocol when the SSL/TLS setting is set to default mode. You must set the SSL/TLS setting in override mode to change the SSL/TLS protocol. For information about SSL/TLS settings, see [*set ssl_tls_settings*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-ssl-tls-settings).

You can use the `show ssl_tls_protocols` command to view the enabled SSL/TLS protocols. For information, see [*show ssl_tls_protocols*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-ssl-tls-protocols).



> **warning**
>
> Note
> 
> - From NIOS 9.0.4, to ensure system integrity, it is necessary to enable one of its respective cipher suites prior to enabling any TLS protocol.
> 
> For example:
> 
> `Infoblox &gt; set ssl_tls_protocols enable TLSv1.3 `
> 
> `Impossible to enable TLSv1.3 - Atleast 1 cipher suite which belongs to the requested protocol must be enabled`
> 
> `TLSv1.3 specific allowed ciphers in NIOS are : `
> 
> `TLS_AES_256_GCM_SHA384 `
> 
> `TLS_CHACHA20_POLY1305_SHA256 `
> 
> `TLS_AES_128_GCM_SHA256`
> 
> ` TLS_AES_128_CCM_8_SHA256 `
> 
> `TLS_AES_128_CCM_SHA256`
> 
> - From NIOS 9.0.4, enabling or disabling any TLS protocol automatically adds or removes its corresponding enabled cipher suites for the Apache server.

# Syntax

`set ssl_tls_protocols [ enable | disable ] [ TLSv1.0 | TLSv1.1 | TLSv1.2 | TLSv1.3 ]`

| **Argument** | **Description** |
| --- | --- |
| `enable` | Enables the SSL/TLS protocols. |
| `TLSv1.0` | Enables the TLSv1.0 protocol. |
| `TLSv1.1` | Enables the TLSv1.1 protocol. |
| `TLSv1.2` | Enables the TLSv1.2 protocol. |
| `TLSv1.3` | Enables the TLSv1.3 protocol. |
| `disable` | Disables the SSL/TLS protocols. Note that you cannot disable all the SSL/TLS protocols. At least one protocol must be enabled. |

# Examples

## Enable TLSv1.0 protocol

`Infoblox &gt; set ssl_tls_protocols enable TLSv1.0`

`TLSv1.0 was enabled.`  
`Current configuration for the HTTPS : TLSv1.0 TLSv1.1 TLSv1.2 TLSv1.3`  
`Current configuration for the SAML : TLSv1.0 TLSv1.1 TLSv1.2 TLSv1.3`  
`The following services need to be restarted manually: GUI`

## Disable TLSv1.0 protocol

`Infoblox &gt; set ssl_tls_protocols disable TLSv1.0`

`TLSv1.0 was disabled.`  
`Current configuration for the HTTPS : TLSv1.1 TLSv1.2 TLSv1.3`  
`Current configuration for the SAML : TLSv1.3`  
`The following services need to be restarted manually: GUI`
