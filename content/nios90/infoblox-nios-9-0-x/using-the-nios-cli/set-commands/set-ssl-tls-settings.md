---
title: "set ssl_tls_settings"
source: "/space/nios90/415629406"
pageId: "415629406"
---
You can use the `set ssl_tls_settings `command to override or restore the default SSL/TLS settings. When the SSL/TLS settings are set to the override mode, you can modify the default SSL/TLS protocols and ciphers. When the SSL/TLS settings are set to the default mode, you cannot override the default SSL/TLS protocols and ciphers. The appliance uses the default SSL/TLS protocols and ciphers. Use the [*show ssl_tls_settings*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-ssl-tls-settings) to see whether SSL/TLS settings are set to the default or override mode.

# Syntax

`set ssl_tls_settings [default | override]`

| **Argument** | **Description** |
| --- | --- |
| `default` | Sets the default mode for SSL/TLS settings. When the SSL/TLS settings is set to the default mode, the appliance uses the default SSL/TLS protocols and ciphers. |
| `override` | Sets the override mode for SSL/TLS settings. When the SSL/TLS settings is set to the override mode, the appliance overrides the default SSL/TLS protocols and ciphers. |

# Example

`Infoblox &gt; set ssl_tls_settings override`  
`The following services need to be restarted manually: GUI`
