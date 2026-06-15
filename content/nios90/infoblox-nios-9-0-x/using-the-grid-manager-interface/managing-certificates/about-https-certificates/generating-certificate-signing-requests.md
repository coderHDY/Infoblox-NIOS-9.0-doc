---
title: "Generating Certificate Signing Requests"
source: "/space/nios90/1321108314"
pageId: "1321108314"
---
You can generate a CSR (certificate signing request) that you can use to obtain a signed certificate from your own trusted CA. Once you receive the signed certificate, you can import it in to the NIOS appliance, as described in this page.

To generate a CSR:

1. Grid: From the **Infoblox** **Grid** tab, select the **Grid Manager** tab -&gt; **Members** tab -&gt; *member* checkbox, and then click **Certificates** -&gt; **HTTPS Cert** -&gt; **Create Signing Request** from the Toolbar.
2. In the *Create Certificate Signing Request* dialog box, enter the following:
   
   - **Secure Hash Algorithm and KeySize:** You can select one of the following: SHA-256 (SHA-2) with a RSA key size of 2048 or 4096, SHA-384 with a RSA key size of 2048 or 4096, SHA-512 with a RSA key size of 2048 or 4096. The default value is SHA-256 2048.
   - **Common Name**: Specify the domain name of the NIOS appliance. You can enter the FQDN of the appliance.
   - **Organization**: Enter the name of your company.
   - **Organizational Unit**: Enter the name of your department.
   - **Locality**: Enter a location, such as a city or town of your company.
   - **State or Province**: Enter the state or province.
   - **Country Code**: Enter the two-letter code that identifies the country, such as US.
   - **Admin E-mail Address**: Enter the email address of the appliance administrator.
   - **Comment**: Enter information about the certificate.
   - **Subject Alternative Name**: You can specify Subject Alternative Names (SAN) in order to secure additional hostnames across different domains or subdomains. You can add the following entries to be included as SAN extension to CSR (Certificate Signing Requests): **DNS**, **Email**, **IP Address**, and **URI**. Click the Add icon and Grid Manager adds a row to the table. Click the row and select the entry from the drop-down list, and then enter the value for the SAN entry. You can add up to 30 entries. To remove an entry from the list, select the SAN entry, and then click the Delete icon.
3. Click **OK**.
