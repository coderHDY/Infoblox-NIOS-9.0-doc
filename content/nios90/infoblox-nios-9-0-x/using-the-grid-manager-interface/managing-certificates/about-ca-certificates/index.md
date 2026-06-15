---
title: "About CA Certificates"
source: "/space/nios90/1321108376"
pageId: "1321108376"
---
*[children]*

If the CA sends an intermediate certificate that must be installed along with the server certificate, you can upload both certificates to the appliance. The appliance supports the use of intermediate certificates to complete the chain of trust from the server certificate to a trusted root CA. This eliminates intermediate certificate security warnings that appear when you open a web browser and try to connect to an Infoblox appliance.  
When you configure two-factor authentication for smart card users, ensure that you upload the required CA certificates before you enable the certificate authentication service. For information about two factor authentication and how to configure it, see [Defining the Authentication Policy](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/defining-the-authentication-policy). Only superusers and limited-access users with the required permissions can manage CA certificates. For information about admin permissions, see [*Administrative Permissions for Certificate Authentication Services and CA Certificates*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permissions-for-certificate-authe).

Also, see [About CA Certificates for CISCO APIC](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/managing-certificates/about-ca-certificates/about-ca-certificates-for-cisco-aci).
