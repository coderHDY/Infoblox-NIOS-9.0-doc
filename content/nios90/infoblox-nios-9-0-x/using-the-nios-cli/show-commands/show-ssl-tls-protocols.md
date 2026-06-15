---
title: "show ssl_tls_protocols"
source: "/space/nios90/415629441"
pageId: "415629441"
---
The `show ssl_tls_protocols `command shows the SSL/TLS protocols that are enabled for the NIOS appliance. You can use the `set ssl_tls_protocols` command to enable or disable SSL/TLS protocols. For information, see [*set ssl_tls_protocols*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-ssl-tls-protocols).

# Syntax

`show ssl_tls_protocols`

This command has no arguments.

# Example

## Displaying the enabled SSL/TLS protocols

For default mode:

`Infoblox` &gt; `show ssl_tls_protocols`

`TLSv1.0 TLSv1.1 TLSv1.2 TLSv1.3`

For overridden mode:

`Infoblox &gt; show ssl_tls_protocols `

`Current configuration for the HTTPS : TLSv1.1 TLSv1.2 TLSv1.3 `

`Current configuration for the SAML : TLSv1.3`
