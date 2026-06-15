---
title: "Configuring Certificate Authentication Services"
source: "/space/nios90/1425440989"
pageId: "1425440989"
---
To configure and enable the certificate authentication service, complete the following:

1. From the **Administration** tab, click the **Authentication** **Server** **Groups** tab.
2. Click the **Certificate** **Authentication** **Services** subtab and click the Add icon.
3. In the *Add* *Certificate* *Authentication* *Service* wizard, complete the following:
   
   - **Name**: Enter a name for the certificate authentication service.
   - **Username/password** **request**: Select the checkbox if the certificate authentication service must request username and password from the user. When you select this checkbox, NIOS populates the username from the certificate and requests password from the user. If you do not select the checkbox, only the certificate is necessary to log in to the appliance. The appliance ignores the username and password when the user provides both. You can only see the login button and do not have to provide the password. The appliance displays the username when you click the login button.
   - **Auto-populate** **username**: Select a value from the drop-down list. You can define how the appliance must authenticate a particular user and its associated group. The values in the list are **Auto-match** and **Direct-match**. When you select **Direct-match**, NIOS searches for users with directly assigned certificates, which contains issuer details and serial attributes, in the local database. Users with directly assigned certificates can use certificate based authentication only. If you select the **Auto-match** option, users with the specific names must also be configured on Active Directory.
   - **Auto match by**: Select a value from the drop-down list. This field is enabled only when you select **Auto-match** for **Auto-populate username**. NIOS extracts the user name from the certificate and searches for it in effective authorization policies based on the configured match policies. The values in the list are:
     
     - **AD Issuer Subject**: Select this from the drop-down list to authenticate the user based on the Active Directory mentioned by the user. That is, account with the user name ‘X509:&lt;I&gt;…issuer…&lt;S&gt;…subject’ must be configured on Active Directory.
     - **SAN Email**: Select this from the drop-down list to authenticate the user based on the email address in the SAN (Subject Alternative Name). NIOS uses the corresponding attributes in the certificate for the email address.
     - **SAN UPN**: Select this from the drop-down list to authenticate the user based on the UPN (User Principal Name) in the SAN (Subject Alternative Name).
     - **Serial Number**: Select this from the drop-down list to authenticate the user based on the serial number. NIOS uses the corresponding attributes in the certificate for the serial number.
     - **Subject DN Common Name**: Select this from the drop-down list to authenticate the user based on the subject DN (Distinguished Name) common name. A Subject DN can include information about the user who is being authenticated, including common name, name of the organization, country code, and so on.
     - **Subject DN Email**: Select this from the drop-down list to authenticate a user based on the subject DN email address.
   - **Enable** **remote** **lookup** **for** **user** **membership:** Select the checkbox to enable lookup on remote servers. NIOS performs lookup against local users by default. For a remote lookup, you must specify the username and password for the authentication service. You can perform a look up for a user membership only if the remote service admin that is configured for remote lookup has enough permissions to read other user's membership information. You must also select the remote service that must be used for lookup. Note that NIOS supports remote lookup for Active Directories only.  
     Note that You can select the above checkbox, **Authentication** **Service** and **Service** **Account** **Credentials** fields only when you select **Auto-match** for **Auto-populate** **username.** You must not select the **Username/password** **request** checkbox when you select the checkbox for **Enable** **remote** **lookup** **for** **user** **membership.**
   - **Authentication Service**: Select an authentication service from the drop-down list.
   - **Service Account Credentials**: Enter a username and password for authenticating lookup on remote servers.

- **Comment**: Optionally, enter additional information about the certificate authentication service.
- **Disable**: Select this checkbox to disable the record. Clear the checkbox to enable it.

1. Click **Next** to save the configuration and add OCSP responders to the table.
2. You can add multiple OCSP responders for failover purposes.

- **OCSP Check Type**: Select a value from the drop-down list to perform OCSP checks. The values in the drop-down list are:
  
  - **AIA and Manual**: Select this from the drop-down list to use AIA (Authority Information Access) extension of X.509 certificate, when it is present, to authenticate the user. Note that AIA points to the certificate authentication service that is used to verify the certificate. If AIA is not available, then the authentication fails. If the certificate does not contain AIA, then the appliance uses manual OCSP for authentication.
  - **AIA only**: Select this from the drop-down list to use AIA only to authenticate the user. AIA points to the certificate authentication service that is used to verify the certificate. By selecting this option you restrict NIOS to use AIA only. If the certificate does not contain AIA or it is not complete, then the authentication fails.
  - **Disabled**: Select this from the drop-down list if you do not want to perform an OCSP check.
  - **Manual**: Select this from the drop-down list to define OCSP settings and upload CA certificates manually. When you select this option, NIOS ignores AIA even though it is present.
- **OCSP Responders**: Click the Add icon and complete the following in the **Add OCSP Responder** section:
  
  - **Server Name or IP Address**: Enter the FQDN or the IP address of the OCSP responder that is used for authentication. The appliance supports IPv4 and IPv6 OCSP responders.
  - **Comment**: Enter useful information about the OCSP responder.
  - **Port**: Enter the port number on the OCSP responder to which the appliance sends authentication requests. The default is 80.
  - **Server Certificate**: Click **Select** to upload a server certificate. In the *Upload* dialog box, click **Select** to navigate to the certificate, and then click **Upload**. The appliance validates the certificate when you save the configuration. A server certificate is required for the direct trust model.
  - **Disable Server**: Select this checkbox to disable the OCSP responder if, for example, the connection to the server is down and you want to stop the NIOS appliance from trying to connect to this server.  
    Note that you cannot save the OCSP configuration when you disable all OCSP responders, thus the certificate authentication service is disabled and two-factor authentication is no longer in effect. You cannot add OCSP responders when you select **AIA** **only** or **Disabled** from the drop-down list for **OCSP** **Check** **Type**.

Click **Add** to save the configuration and add the responder to the table. You can add multiple OCSP responders for failover purposes. You can use the up and down arrows to place the responders in the order you desire. The appliance tries to connect with the first responder on the list. If the connection fails, it tries the next responder on the list, and so on. Grid Manager displays the following for each responder:

- **Responder**: The FQDN or the IP address of the OCSP responder.
- **Comment**: Information you entered about the OCSP responder.
- **Port**: The port number on the OCSP responder to which the appliance sends authentication requests.
- **Disabled**: Indicates whether the OCSP responder is disabled or not. Note that you must enable at least one responder to enable the certificate authentication service.

You can also click **Test** to test the configuration. If the appliance connects to the responder using the configuration you entered, it displays a message confirming the configuration is valid. If it is unable to connect to the responder, the appliance displays a message indicating an error in the configuration.

- **Response Timeout (s)**: Enter the time the appliance waits for a response from the specified OCSP responder.

The default is 1 second. You can select the time unit from the drop-down list.

- **Retries**: Enter the number of times the appliance tries to connect to the responders after a failed attempt.  
  The default is 5.
- **Recovery Interval**: Enter the time the appliance waits to recover from the last failed attempt in connecting to an OCSP responder. Select the time unit from the drop-down list. The default is 30 seconds. This is the time interval that NIOS waits before it tries to contact the responder again since the last attempt when the appliance could not connect with the responder or when the responder did not send a reply within the configured response timeouts and retry attempts.
- **Trust Model**: Select **Direct** or **Delegated** from the drop-down list as the trust model for OCSP responses. In a direct trust model, OCSP responses are signed with an explicitly trusted OCSP responder certificate. You must upload the OCSP responder certificate if you select **Direct**. In a delegated trust model, OCSP responses are signed with a trusted CA certificate. A server certificate is not required when you select **Delegated**. The default is **Direct**.

1. Click **Next** to save the configuration and associate CA Certificates with the respective certificate authentication service. You can associate multiple CA certificates with the service.

Note that enabling the certificate authentication service terminates administrative services for all users. Ensure that you have uploaded the correct CA certificates before enabling the service. Your login names must also match the common name used in the certificate. When you configure multiple OCSP responders, ensure that you place them in the correct order because the status check for a client certificate is based on the OCSP reply sent by the first OCSP responder that replies.  
NIOS detects a valid certificate authentication service for a client's certificate by searching through the assigned CA certificates for each group. NIOS matches issuer field in the client's certificate with the CA certificate to find the appropriate match. Note that the subject in CA certificate must match the issuer in the client's certificate and corresponding certificate authentication service.  
Note the following about the certificate authentication service:

- You cannot assign the same CA certificate to the same group twice or to a different certificate authentication service. However, different certificate authentication services can contain CA certificates with the same subject. To distinguish such groups you can use **Client** **Subject** **name** to determine which certificate must match the CA certificate to be associated with the certificate authentication service. If the client certificate does not match any certificate authentication service, then the authentication fails. A CA certificate verifies the client certificate.

1. Click **Add** to associate CA certificates with the certificate authentication service. The following information is displayed when you associate a CA certificate:

- **Subject**: The name of the certificate.
- **Issuer**: The name of the trusted CA that issued the certificate.
- **Valid From**: The date from which the certificate becomes valid.
- **Valid To:** The date until which the certificate is valid. You can do the following:
- Select a certificate and click the Delete icon to delete it.
- Print the data or export it in .csv format.

You can also do the following for a certificate authentication service:

- Use **Global** **Search** to search for certificate authentication services. For information about Global search, see [*About the Grid Manager Interface*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/500861569)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/500861569/About+the+Grid+Manager+Interface#bookmark72)
- View audit log entries for the certificate authentication service. For information about viewing the audit log, see [*Monitoring Tools*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403049)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403049/Monitoring+Tools#bookmark2814)
- Select a certificate authentication service and click the Delete icon to delete it. In the *Delete Confirmation* dialog box, click **Yes** to confirm deletion.
- Modify a certificate authentication service as mentioned in Modifying Certificate Authentication Services below.
- Print the data or export it in .csv format.

> **warning**
>
> Starting from NIOS 9.0.0, client certificates must not contain non-ASCII characters or the following characters in the Common Name (CN) field. Use of such characters can lead to validation failures or undefined system behavior.
> 
> - Backslash (`\`)
> - Null byte (`\0`)
> - Newline or carriage return characters (`\n`, `\r`)
> - Tab character (`\t`)
> - Leading or trailing whitespace (including spaces at the beginning, middle or end of the CN)
