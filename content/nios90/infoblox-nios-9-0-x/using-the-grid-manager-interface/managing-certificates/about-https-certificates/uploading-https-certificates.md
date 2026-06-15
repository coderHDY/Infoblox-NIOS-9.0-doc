---
title: "Uploading HTTPS Certificates"
source: "/space/nios90/1320356211"
pageId: "1320356211"
---
When you receive the certificate from the CA, and import it to the appliance, the NIOS appliance finds the matching CSR and takes the private key associated with the CSR and associates it with the newly imported certificate. The appliance then automatically deletes the CSR.

You can also upload the certificate along with its private key. When you do so, you do not need to generate a CSR on the NIOS appliance. Before you upload the certificate, Infoblox recommends that you save the certificate on the local disk and set the private key permissions to 600 and owned by root. Note that you might need to set the private key permissions to other values, depending on your business requirements. Also ensure that both the certificate and the private key are in PEM format and in the same upload file, and that the private key is not protected.

If the CA sends an intermediate certificate that must be installed along with the server certificate, you can upload both certificates to the appliance. The appliance supports the use of intermediate certificates to complete the chain of trust from the server certificate to a trusted root CA. This eliminates intermediate certificate security warnings that appear when you open a web browser and try to connect to an Infoblox appliance. For instructions to [Upload a CA certificate](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/managing-certificates/about-ca-certificates/uploading-ca-certificates).  
To import a HTTPS certificate:

1. Grid: From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab -&gt; *member* checkbox, and then click **Certificates** -&gt; **HTTPS** **Cert** -&gt; **Upload** **Certificate** from the Toolbar.
2. Navigate to where the certificate is located and click **Open**.
3. If the appliance already has an existing HTTPS certificate, the new certificate replaces the existing one. In the *Replace* *HTTPS* *Certificate* *Confirmation* dialog box, click **Yes**.

The appliance imports the certificate and logs you out. When you log in to the appliance again, it uses the certificate you imported.
