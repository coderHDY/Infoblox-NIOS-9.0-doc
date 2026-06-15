---
title: "Authenticating Admins Using Two-Factor Authentication"
source: "/space/nios90/280668355"
pageId: "280668355"
---
You can configure NIOS to use the two-factor authentication method to authenticate users based on X.509 client certificates. In two-factor authentication, NIOS first negotiates SSL/TLS client authentication to validate client certificates. It then authenticates the admins based on the configured authentication policy. You must first configure an authentication policy, and then configure and enable the certificate authentication service for the two-factor authentication to take effect. NIOS uses certificate authentication service as the authentication policy. For information about how to set up an authentication policy, see [*Defining the Authentication Policy.*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275233)

Using the certificate authentication service, you can choose how the client certificate associates with the CA certificate. NIOS allows you to associate the client certificate manually and automatically. With manual certificate binding option, you must associate a certificate for a particular user manually, which is verified with the CA certificate. With automatic match policy, NIOS extracts the username from the client certificate, which is then matched with the certificate authentication service. When you configure certificate authentication service, NIOS searches the CA certificates associated with each admin group to detect a valid certificate authentication service for the client's certificate. You can either select a direct match or an automatic match for a certificate authentication service. To configure whether client certificate authentication is optional or enforced, see [*set cas*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1200160781)*.*

The Infoblox certificate authentication service uses the OCSP, which is an internet protocol that validates certificate status for X.509 digital certificates that are assigned to specific admins. NIOS allows you to choose Authority Information Access (AIA) extension from a certificate as a source of OCSP configuration or define OCSP servers manually. You can also disable OCSP check for a particular certificate authentication service. For more information about OCSP, refer to RFC 2560 at [*https://tools.ietf.org/html/rfc2560*](https://tools.ietf.org/html/rfc2560_).

The status of these client certificates is stored on OCSP responders to which NIOS sends requests about certificate status. A certificate status can be "good," revoked," or "unknown." After a successful SSL/TLS client authentication, NIOS authenticates the admin based on the configured authentication policy. If the authentication fails at this point, the appliance denies access to the admin. If the authentication policy has passed, the appliance sends a request to the OCSP responder for client certificate status about the admin. If the appliance receives a "good" status from the OCSP responder, the two-factor authentication is successful. The admin can now access the appliance. If the appliance receives a "revoked" or "unknown" status from the OCSP responder, the two-factor authentication fails. The admin cannot access the appliance even though the admin authentication policy has passed.

When there are multiple OCSP responders configured, the appliance contacts the responders based on their configured order. For the same client certificate, the appliance always takes the status reported by the first responder on the list that actually responds, even when there are different OCSP replies from different responders. When the appliance cannot contact the first responder or if the first responder does not reply, the appliance then takes the OCSP reply from the second responder and so on.

> **warning**
>
> ### Note
> 
> - Authentication for both the admin authentication policy and OCSP validation must be successful on NIOS.
> - If a Grid Master has either a Cloud Network Automation or a Cloud API license or if any of the members or passive nodes of an HA Grid Master has a Cloud API license, then certificate-based WAPI authentication will not work; only user name and password -based authentication works.

The following figure *Authenticating Admin Accounts Using TACACS+* illustrates the two-factor authentication and authorization process.

*[drawio]*
