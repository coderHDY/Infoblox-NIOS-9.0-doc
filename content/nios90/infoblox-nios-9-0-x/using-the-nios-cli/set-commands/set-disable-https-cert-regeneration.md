---
title: "set disable_https_cert_regeneration"
source: "/space/nios90/280658968"
pageId: "280658968"
---
Use the `set disable_https_cert_regeneration` command to turn on or off the automatic regeneration of a self-signed HTTPS certificate.

NIOS regenerates a certificate in the following scenarios:

- If you change a host name and the new name does not match the name of the existing certificate. This is especially useful for wildcard certificates.
- If the certificate is self-signed and the regeneration is enabled (it is enabled by default) , restarting NIOS or changing the host name or IP address causes NIOS to regenerate the certificate.

# Syntax

`set disable_https_cert_regeneration`` ``[on|off]`

| **Argument** | **Description** |
| --- | --- |
| on | Disables the automatic regeneration of the self-signed HTTPS certificate. Automatic certificate regeneration is enabled by default. |
| off | Enables the automatic regeneration of the self-signed HTTPS certificate |

# Example

`Infoblox &gt; set disable_https_cert_regeneration off`  
`HTTPS certificate regeneration enabled.`
