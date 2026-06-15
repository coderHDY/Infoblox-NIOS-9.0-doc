---
title: "Managing Health Monitor Certificates"
source: "/space/nios90/1393559762"
pageId: "1393559762"
---
You can upload multiple certificates to the appliance and associate them with HTTP and SIP health monitors. The appliance supports certificates that are in PEM or PKCS#12 format only. A PEM file can contain more than one certificate. Note that the uploaded certificate must include both the client certificate and the private key. You can add, delete or view certificates.   
To upload a health monitor certificate:

1. From the **Data** **Management** tab, select the **DNS** tab -> **Traffic** **Control** tab, and then click **Manage** **Health** **Monitors** in the Toolbar.
2. In the Health Monitors Manager, click the Manage Health Monitor Certificates icon.
3. In the **Health** **Monitor** **Certificates** window, click the Add icon.
4. In the **Upload** window, click **Select** and navigate to the certificate you want to upload.
5. Select the file and click **Upload**.

Grid Manager displays the following information in the **Health** **Monitor** **Certificates** window:

- **Issuer**: The name of the trusted CA that issued the certificate.
- **Valid From**: The date from which the certificate becomes valid.
- **Valid To**: The date until which the certificate is valid.
- **Subject**: The name of the certificate.

To upload a certificate from a web browser:

1. Export a PEM file from a web browser.
2. Generate a private key using the following command:  
   `— openssl req -x509 -nodes -days 365 -newkey rsa:1024 -keyout mycert.pem -out mycert.pem`
3. Copy the private key section out of mycert.pem and add it to the PEM file from the web browser.
4. Or add both the PEM and the private key together as PKCS#12.

You can also do the following in the **Health** **Monitor** **Certificates** window:

- Click the checkbox next to the issuer and click the Delete icon to delete it.
