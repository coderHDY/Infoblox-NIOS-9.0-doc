---
title: "Managing Certificates"
source: "/space/nios90/280266962"
pageId: "280266962"
---
This section covers the following:

*[children]*



> **warning**
>
> **Note**
> 
> NIOS does not support SHA1 certificates. Do not generate Apache and CA certificates by using the SHA1 option although the option is available in the Grid Manager UI.

The NIOS appliance generates a self-signed certificate when it first starts. A self-signed certificate is signed by the subject of the certificate, and not by a CA (Certificate Authority). This is the default certificate. When your computer first connects to the NIOS appliance, it sends this certificate to authenticate itself to your browser.  
Because the default certificate is self-signed, your browser does not have a trusted CA certificate or a cached NIOS appliance server certificate (saved from an earlier connection) to authenticate the NIOS appliance certificate. Also, the hostname in the default certificate is *www.infoblox.com,* which is unlikely to match the hostname of your NIOS appliance. Consequently, messages appear warning that the certificate is not from a trusted certifying authority and that the hostname on the certificate is either invalid or does not match the name of the site that sent the certificate. Either accept the certificate just for this session or save it to the certificate store of your browser.  
To eliminate certificate warnings, you can replace the default self-signed certificate with a different certificate that has the hostname of your NIOS appliance. The NIOS appliance supports X.509 certificates in .PEM format. After the initial login, you can do one of the following:

- Generate another self-signed certificate with the correct hostname and save it to the certificate store of your browser.
- Request a CA-signed certificate with the correct hostname and load it on the NIOS appliance. For more information, see [Generating Certificate Signing Requests](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/managing-certificates/about-https-certificates/generating-certificate-signing-requests).
- When you receive the certificate from the CA, upload it to the appliance. Additionally, you can upload a certificate along with the private key, as described in [Uploading HTTPS Certificates](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/managing-certificates/about-https-certificates/uploading-https-certificates).
- Download the certificate from a trusted CA, as described in [Downloading Certificates](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/managing-certificates/about-https-certificates/downloading-https-certificates).
