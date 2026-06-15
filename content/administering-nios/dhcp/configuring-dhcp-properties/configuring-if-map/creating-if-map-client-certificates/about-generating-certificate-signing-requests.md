---
title: "About Generating Certificate Signing Requests"
source: "/space/nios90/1462403530"
pageId: "1462403530"
---
You can generate a CSR (certificate signing request) that you use to obtain a signed certificate from your own trusted CA. Once you receive the signed certificate, you can import it to the member, as described in Uploading Certificates below.  
To generate a CSR:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Members** tab -> *member* checkbox, and then click **IF-MAP** **Client** **Certificate** -> **Create** **Signing** **Request** from the Toolbar.
2. In the *Create* *Certificate* *Signing* *Request* dialog box, enter the following:
   
   - **Secure** **Hash** **Algorithm** **and** **Key** **Size:** You can select SHA-1 and a RSA key size of 1024 or 2048. SHA-256 (SHA-2) can be selected together with a RSA key size of 2048 or 4096. The default value is SHA-256 2048.
   - **Common** **Name**: Specify the domain name of the member. You can enter the FQDN of the appliance.
   - **Organization**: Enter the name of your company.
   - **Organizational** **Unit**: Enter the name of your department.
   - **Locality**: Enter a location, such as the city or town of your company.
   - **State** **or** **Province**: Enter the state or province.
   - **Country** **Code**: Enter the two-letter code that identifies the country, such as US.
   - **Admin** **E-mail** **Address**: Enter the email address of the appliance administrator.
   - **Comment**: Enter information about the certificate.
3. Click **OK**.
