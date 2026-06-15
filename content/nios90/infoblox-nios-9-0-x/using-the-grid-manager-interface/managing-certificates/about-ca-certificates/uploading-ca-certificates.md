---
title: "Uploading CA Certificates"
source: "/space/nios90/1321174163"
pageId: "1321174163"
---
To upload a CA-signed certificate:

1. Grid: From the **Infoblox** **Grid** tab, select the **Grid Manager** tab.  
   Member: From the **Infoblox Grid** tab, select the **Grid Manager** tab -&gt; **Members** tab -&gt; *member* checkbox.
2. Select **Certificates** -&gt; **Manage CA Certificates** from the Toolbar.
3. In the *CA Certificates* editor, click the Add icon.
4. In the *Upload* dialog box, click **Select** and navigate to the certificate you want to upload.
5. Select the file and click **Upload**.

NIOS can only upload certificates that are in PEM format. A.PEM file can contain more than one certificate. For information about how to convert CA certificates to .PEM format, see [Converting CA Certificates to PEM Format](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/managing-certificates/converting-ca-certificates-to-pem-format)*.*

Repeat the steps to add additional CA-signed certificates.

The *CA* *Certificates* dialog box displays the following information about the intermediate certificates:

- **Subject**: The name of the certificate.
- **Issuer**: The name of the trusted CA that issued the certificate.
- **Serial**: The serial number of the certificate.
- **Valid**: The validity period of the certificate.
- **Usedby**: Displays **SSL/TLS,** when CA certificate is not used for certificate authentication, or **CAS**, when CA certificate is associated with a certificate authentication service.

You can also do the following:

- Select a certificate and click the Delete icon to delete it.
- Print the data or export it in .csv format.

> **warning**
>
> **Note**
> 
> - Certificates uploaded under "CA Certificates" must have CA:TRUE flag to be identified as CA certificate.
> - Server certificates uploaded for Server health monitors must have private key bundled with the certificate.

### RFC-5280 Checks

In NIOS 9.0.2, if you try to upload a certificate to the Grid, the following checks are performed in compliance with RFC-5280:

- Mark the basicConstraints extension of CA certificates as critical.
- CA certificates must explicitly include the keyUsage extension.
- If you specify a pathlenConstraint value, you must allow the keyCertSign key usage.
- Do not specify the pathlenConstraint value for non-CA certificates.
- Do not leave the issuer name of any certificate blank.
- Do not leave the subject name of CA certificates, certificates with keyUsage crlSign, and certificates without subjectAlternativeName blank.
- If you specify a subjectAlternativeName extension, it must not be empty.
- The signatureAlgorithm field and the certificate signature must be consistent.
- Do not mark critical any given authorityKeyIdentifier and any given subjectKeyIdentifier.
- Specify the authorityKeyIdentifier for X.509v3 certificates unless they are self-signed.
- Specify the subjectKeyIdentifier for all X.509v3 CA certificates.
