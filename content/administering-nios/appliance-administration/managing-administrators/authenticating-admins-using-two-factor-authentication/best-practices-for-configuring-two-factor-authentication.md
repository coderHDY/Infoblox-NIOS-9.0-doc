---
title: "Best Practices for Configuring Two-Factor Authentication"
source: "/space/nios90/1425342664"
pageId: "1425342664"
---
Only superusers and limited-access users with the correct permissions can configure two-factor authentication. For information about admin roles and permissions, see [*Managing Admin Groups and Admin Roles*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280408487). To configure two-factor authentication, consider the following:

- You must first set up an certificate authentication service and enable it.
- You can configure only one certificate authentication service that contains one or multiple OCSP responders to which NIOS sends requests about client certificate status. The appliance supports IPv4 and IPv6 OCSP responders.
- When you configure multiple OCSP responders, you can put them in an ordered list. The appliance contacts the first responder on the list. If the connection fails, it moves on to the second one, and so on. The result of the status check for a client certificate is based on the status reported by the first responder that replies.
- You can configure the timeout value and retry attempts that the appliance waits and tries before it moves on to the next OCSP responder.
- You can upload server certificates for each responder for OCSP response validation. You must upload an OCSP server certificate if you select the direct trust model.
- You can disable a specific responder if the server is out of service for a short period of time.
- Before you add an OCSP responder to the server group, you can test the server credentials.

To configure and enable two-factor authentication, complete the following tasks:

1. For local and remote authentication, ensure that the admin names for smart card users match the CNs (Common Names) used in the client certificates. For information about local and remote authentication, see [*About Admin Accounts*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275635).
2. Upload the CA (Certificate Authority) certificate, as described in About CA Certificates ,see [*Managing Certificates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280266962). The CA-signed certificates are used to validate OCSP server certificates and admin OCSP client certificates. Ensure that the CA certificate is in .PEM format. The .PEM file can contain more than one certificate.   
   Note that the uploaded CA certificates must be the ones that issued the client certificates to be authenticated. Otherwise, clients such as browsers, cannot establish a successful SSL/TLS client authenticated HTTPS session to the appliance.
3. Configure a certificate authentication service and enable it, as described in Configuring Certificate Authentication Services below.
4. View certificate authentication services, as described in Viewing Certificate Authentication Services below.
5. Modify certificate authentication services, as described in Modifying Certificate Authentication Services below.
6. Delete certificate authentication services, as described in Deleting Certificate Authentication Services below.

Note that once you save the certificate authentication service configuration, the appliance terminates administrative sessions for all admin users. After you enable the certificate authentication service, you can verify whether two-factor authentication is enabled. Go to the **Administration** -> **Administrators** -> **Authentication** **Policy** tab, Grid Manager displays the "Two-Factor Authentication Enabled" banner in this tab.
