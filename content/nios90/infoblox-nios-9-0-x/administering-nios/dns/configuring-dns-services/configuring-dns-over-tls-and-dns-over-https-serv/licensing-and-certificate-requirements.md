---
title: "Licensing and Certificate Requirements"
source: "/space/nios90/1420231263"
pageId: "1420231263"
---
DNS over TLS and DNS over HTTPS require the vDCA (virtual DNS Cache Acceleration) or DNS Infrastructure Protection service to be licensed and enabled. If the DNS Cache Acceleration and/or DNS Infrastructure Protection Software services are not enabled, the DNS over TLS and DNS over HTTPS features will not work even if they are enabled. For more information about DNS Cache Acceleration and DNS Infrastructure Protection Software, see [*Configuring DNS Cache Acceleration*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/configuring-dns-cache-acceleration) and [*About Infoblox DNS Infrastructure Protection*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/about-infoblox-dns-infrastructure-protection) respectively.

The DNS over TLS or the DNS over HTTPS service uses the same self-signed certificate that NIOS generates for HTTPS communication when it first starts. You can also generate a certificate signing request (CSR) and use it to obtain a signed certificate from your own trusted certificate authority (CA). For more information, see [*Generating Certificate Signing Requests*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/managing-certificates/about-https-certificates/generating-certificate-signing-requests).

The certificate is provisioned for each member. For more information about certificates, see [*Managing Certificates*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/managing-certificates).

> **warning**
>
> **Note**
> 
> NIOS generates a new self-signed certificate when the host name or the IP address of the member is changed or when a Grid Master Candidate is promoted. If the DNS over TLS or DNS over HTTPS feature is enabled on a member, then every time a new certificate (self-signed certificate, HTTPS certificate, or CA certificate) is generated, the DNS over TLS service or the DNS over HTTPS service (depending on which feature is enabled) automatically restarts to upload the new certificate.
