---
title: "About Generating Self-Signed Certificates"
source: "/space/nios90/1462436336"
pageId: "1462436336"
---
You can replace the default certificate with a self-signed certificate that you generate. When you generate a  
self-signed certificate, you can specify the correct hostname and change the public/private key size, enter valid dates and specify additional information specific to the member. If you have multiple members, you can generate a certificate for each appliance with the appropriate hostname.  
To generate a self-signed certificate:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Members** tab -> *member* checkbox, and then click **IF-MAP** **Client** **Certificate** -> **Generate** **Self-signed** **Certificate** from the Toolbar.
2. In the *Generate* *Self-Signed* *Certificate* dialog box, complete the following:
   
   - **Secure** **Hash** **Algorithm** **and** **Key** **Size:** You can select SHA-1 and a RSA key size of 1024 or 2048. SHA-256 (SHA-2) can be selected together with a RSA key size of 2048 or 4096. The default value is SHA-256 2048.
   - **Days** **Valid:** Specify the validity period of the certificate.
   - **Common** **Name:** Specify the domain name of the member. You can enter the FQDN (fully qualified domain name) of the appliance.
   - **Organization:** Enter the name of your company.
   - **Organizational** **Unit:** Enter the name of your department.
   - **Locality:** Enter a location, such as the city or town of your company.
   - **State** **or** **Province:** Enter the state or province.
   - **Country** **Code:** Enter the two-letter code that identifies the country, such as US.
   - **Admin** **E-mail** **Address:** Enter the email address of the appliance administrator.
   - **Comment:** Enter information about the certificate.
3. Click **OK**.
4. If the appliance already has an existing client certificate, the new certificate replaces the existing one. In the* Replace IFMAP Certificate Confirmation* dialog box, click **Yes**.
