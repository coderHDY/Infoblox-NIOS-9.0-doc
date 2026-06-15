---
title: "WebUI Settings"
source: "/space/nios90/280267314"
pageId: "280267314"
---
This section describes the properties that you can set to ensure the security of the Grid Manager web interface.

# Creating a Login Banner

Before establishing a user session via the WebUI, the TOE displays an initial banner regarding unauthorized use. The message is displayed before the session is established. You can change this message to your organization's specific advisory notice and warning message regarding unauthorized use of the system. For information about defining the login banner, see [*Creating a Login Banner*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/setting-login-options/creating-a-login-banner).

# Modifying the Session Timeout Setting

You can set the length of idle time before an administrative session to the WebUI times out. The default timeout value is 600 seconds (10 minutes). If an admin does not interact with the application for the specified time, the TOE displays a message that a timeout has occurred. The admin is then required to lag back in to Grid Manager. For information about setting the session timeout, see [*Modifying the Session Timeout Setting*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-security-operations/Managing+Security+Operations#Modifying-the-Session-Timeout-Setting).

# Managing Certificates

The TOE generates a self-signed certificate when it first starts. Because the default certificate is self-signed, your browser does not have a trusted CA certificate or a cached NIOS appliance server certificate (saved from an earlier connection) to authenticate the NIOS appliance certificate. Also, the hostname in the default certificate is[ www.infoblox.com,|http://www.infoblox.com/] which is unlikely to match the hostname of your NIOS appliance. Consequently, a message appears warning that the certificate is not from a trusted certifying authority and that the hostname on the certificate is either invalid or does not match the name of the site that sent the certificate. To eliminate certificate warnings, you can replace the default self-signed certificate with a different certificate.  
After the initial login, you can do one of the following:

- Generate another self-signed certificate with the correct hostname and save it to the certificate store of your browser.
- Request a CA-signed certificate with the correct hostname by generating a Certificate Signing Request (CSR) and sending it to your trusted Certificate Authority (CA). Then when you receive the certificate from the CA, import it to the appliance.

For information about these tasks, see [*Managing Certificates*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/managing-certificates).  
For Common Criteria compliance, superusers must not use CSRs or certificates with keys smaller than 2048 bits. Limited access users are not allowed to upload a certificate with a key that is smaller than 2048 bits, or create a certificate signing request or self-signed certificate with a key size that is smaller than 2048 bits.
