---
title: "Validate Certificates"
source: "/space/nios90/1320356348"
pageId: "1320356348"
---
You can view the status results of the certificates uploaded by clicking **Validate Certificates**. The **Validate Certificates** feature validates the following:

- All the certificate files will be validated through OpenSSL command on each file.
- The certificates serial number stored in the database (one.x509_certificate DB objects), and saves the certificates to temporary files.

To view the validated certificates in Grid Manager:

1. Grid: From the **Grid** tab, click **Certificates** in the Toolbar &gt; **Validate Certificates**.  
   The *Certification Validation Results* dialog displays the following:
   
   - **Filename/Serial number**: Displays the filename of the certificate files in the folder (For example, ocsp_ca_cert.pem) or the serial number of the certificates in the database ((For example, 4786438514b4fa8325d750a39ca79.... )
   - **Verification Result**: Displays the certificate result and the certificate status. For example:
     
     - Valid certificate:  
       /storage/tmp/cert1.pem: OK (folder/temporary files/certificate name.pem: OK)
     - Expired certificate:  
       /infoblox/security/certs/ocsp_ca_cert.pem: C = IN, ST= Karnataka, L = Bengaluru, 0 = lnfoblox, OU= QA, CN = [gfc33.inca.infoblox.com](http://gfc33.inca.infoblox.com), emailAddress = [ggg@infoblox.com](mailto:ggg@infoblox.com) error 10 at O depth lookup:certificate has expired OK  
       (folder/temporary files/certificate name.pem: certificate has expired message OK)
     - Invalid certificate  
       /infoblox/security/certs/ocsp_ca_cert.pem: C = IN, ST = Karnataka, O = Infoblox, OU = QA2, CN = [test.inca.infoblox.com](http://test.inca.infoblox.com) error 20 at 0 depth lookup:unable to get local issuer certificate Warning: contains CA certificate(s) without SKI   
       (folder/temporary files/certificate name.pem: issuer certificate Warning message stating contains CA certificate(s) without SKI OK)
2. Click **Close **to exit the *Certification Validation Results* dialog.

> **warning**
>
> Note
> 
> - For valid self-signed certificates, Grid Manager does not display any additional information. However, for expired and invalid certificates Grid Manager displays the issuer/subject information in the *Certification Validation Results* screen.
> - Warning messages are displayed for expired certificates and for certificates with no SKI (Subject Key Identifier) in the concatenated certificate file.
