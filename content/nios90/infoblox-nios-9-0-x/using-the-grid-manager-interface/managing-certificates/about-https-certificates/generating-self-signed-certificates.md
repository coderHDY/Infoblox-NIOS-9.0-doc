---
title: "Generating Self-Signed Certificates"
source: "/space/nios90/1320356175"
pageId: "1320356175"
---
You can replace the default certificate with a self-signed certificate that you generate. When you generate a  
self-signed certificate, you can specify the correct hostname and change the public/private key size, enter valid dates and specify additional information specific to the NIOS appliance. If you have multiple appliances, you can generate a certificate for each appliance with the appropriate hostname. You can generate a self-signed certificate using the SHA-256 (SHA-2) hash algorithm.

To generate a self-signed certificate:

1. Grid: From the **Infoblox** **Grid** tab, select the **Grid Manager** tab -&gt; **Members** tab -&gt; *member* checkbox, and then click **Certificates** -&gt; **HTTPS Cert** -&gt; **Generate Self-signed Certificate** from the Toolbar. In a Grid, ensure that you select the Grid Master when generating a self-signed certificate.
2. In the *Generate Self-Signed Certificate* dialog box, complete the following:
   
   - **Secure Hash Algorithm and KeySize: **You can select one of the following: SHA-256 (SHA-2) with a RSA key size of 2048 or 4096, SHA-384 with a RSA key size of 2048 or 4096, SHA-512 with a RSA key size of 2048 or 4096. The default value is SHA-256 2048.  
     Note that if your Grid includes a reporting server, ensure that you **DO** **NOT** select a key size of 4096 bit for SHA-256. Otherwise, reporting might not function properly because Java does not support SHA-256 with a 4096 key size.
   - **Days Valid:** Specify the validity period of the certificate.
   - **Common Name:** Specify the domain name of the NIOS appliance. You can enter the FQDN (fully qualified domain name) of the appliance.
   - **Organization:** Enter the name of your company.
   - **Organizational Unit:** Enter the name of your department.
   - **Locality:** Enter a location, such as the city or town of your company.
   - **State or Province:** Enter the state or province.
   - **Country Code:** Enter the two-letter code that identifies the country, such as US.
   - **Admin E-mail Address:** Enter the email address of the appliance administrator.
   - **Comment:** Enter information about the certificate.
   - **Subject Alternative Name**: You can specify Subject Alternative Names (SAN) in order to secure additional hostnames across different domains or subdomains. You can add the following entries to be included as SAN extension to self-signed certificate: **DNS**, **Email**, **IP Address**, and **URI**. Click the Add icon and Grid Manager adds a row to the table. Click the row and select the entry from the drop-down list, and then enter the value for the SAN entry. You can add up to 30 entries. To remove an entry from the list, select the SAN entry, and then click the Delete icon.  
     For Google Chrome version 58 and later, Firefox version 101.0 and later, Safari in iOS 13 and macOS 10.15, and some other browsers, it is mandatory to enter the subject alternative name.
3. Click **OK**.
4. If the appliance already has an existing HTTPS certificate, the new certificate replaces the existing one. In the *Replace HTTPS Certificate Confirmation* dialog box, click **Yes**. The appliance logs you out, or you can manually log out. When you log in to the appliance again, it uses the new certificate you generated.
