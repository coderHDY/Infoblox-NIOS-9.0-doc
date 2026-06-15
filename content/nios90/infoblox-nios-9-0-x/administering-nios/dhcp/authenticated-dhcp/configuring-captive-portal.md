---
title: "Configuring Captive Portal"
source: "/space/nios90/280403636"
pageId: "280403636"
---
The captive portal can be used to register users for authentication, guest users, or both types of users. When a DHCP client attempts to connect to the network and its MAC address is not in any of the configured MAC filters, the member DHCP server assigns it an IP address in the quarantine range. When the quarantined client tries to reach any web site, it is redirected to the captive portal. The captive portal runs a limited DNS server that is used solely to redirect queries to the captive portal web interface.  
You can enable the captive portal as a service on any Grid member, except the Grid Master or Grid Master candidate. The Grid member that runs the captive portal cannot run any other service, such as DHCP and DNS. Note that the limited DNS service that the captive portal runs is different from the full-scale DNS service on an Infoblox appliance. The full-scale DNS service must be explicitly disabled on the member that runs the captive portal. For information on disabling DNS service, see [*Starting and Stopping the DNS Service*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/configuring-dns-service-properties/starting-and-stopping-the-dns-service).  
You can configure one or more captive portals in the Grid. You can also configure one or more member DHCP servers to use a captive portal to register users. For example, if your organization has two sites, you can configure a captive portal for each site and configure the DHCP servers in each site to use their respective captive portals to authenticate users.  
In order for clients to reach the captive portal, you must specify a route to the captive portal. In a network where all IP addresses are on the same subnet, you can configure Option 33 for the quarantine DHCP range. For additional information, see [*Quarantine DHCP Range*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/defining-ipv4-network-and-dhcp-ranges). On a routed network, you must configure a default route on the router for the subnet.  
Following are the tasks to configure a captive portal:

1. Select the Grid member that runs the captive portal and configure its properties, as described in the next section, Configuring Captive Portal Properties.
2. Optionally, customize the captive portal and registrati.
3. If you enabled SSL, generate the CA certificate, as described in Managing Captive Portal Certificates below.
4. Start the captive portal, as described in Starting the Captive Portal Service below.

# Configuring Captive Portal Properties

When you configure the captive portal properties of a member, you specify if it is used to register users for authentication, guests, or both. If it is used to register guests only, then do not associate it with an authentication server group.  
You can specify the VIP address of the Grid member or configure an additional IP address on the loopback interface as the captive portal IP address. Alternatively, if the Grid member supports the LAN2 port and it is enabled, but the NIC failover feature is disabled, you can use the IP address of the LAN2 port as the captive portal IP address. To configure an IP address on the loopback interface, see [*Configuring IP Addresses on the Loopback Interface*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ip-routing-options/configuring-ip-addresses-on-the-loopback-interfa). For information on the LAN2 port, see [*Using the LAN2 Port*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/using-the-lan2-port).  
In addition, you can configure the port on which the appliance listens for authentication requests redirected from the captive portal. When a user logs in to the captive portal, the member sends an authentication request to its associated authentication server group. The member determines future DHCP replies to client requests based on the authentication result.  
To configure the properties of the captive portal:

1. From the **Infoblox** **Grid** tab, select the **Infoblox** **Grid** **Manager** tab, and then click **Captive** **Portal**.  
   Grid Manager lists all the members, except for the Grid Master and Grid Master candidate.
2. Select the member that runs the captive portal and click the Edit icon.
3. In the **General** **Basic** tab of the *Member* *Captive* *Portal* *Properties* editor, complete the following:
   
   - **Use This Authentication Server Group for Authenticating Captive Portal Users:** Select the authentication server group that authenticates users for this captive portal. For information about authentication server groups, see [*Configuring Authentication Server Groups*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/configuring-authentication-server-groups).
   - **Captive Portal User Types:** Specify whether the captive portal is used to register **Authenticated** users only, **Guest** users only, or **Both**.
   - **Portal IP Address:** Select the IP address of the captive portal server. The appliance lists the VIP address and the IP addresses of the loopback interface and the LAN2 port, if enabled. You can select any of these addresses as the portal IP address.
   - **Enable SSL on Portal:** Select this to support encrypted web traffic through SSL/TLS. If you select this option, you must upload a certificate or generate a self-signed certificate. For information about creating and uploading a certificate for the captive portal, see Managing Captive Portal Certificates below.
   - Network View: This field displays if there are multiple network views configured. Select the network view in which the authenticated, quarantine, and guest DHCP ranges belong.
   - **Log Registration Success:** Select to enable the member to log successful registrations in syslog, and then select the logging level from the drop-down list.
   - **Log Registration Failure:** Select to enable the member to log failed registrations in syslog, and then select the logging level from the drop-down list.
4. In the **General** **Advanced** tab of the editor, you can specify the port on which the member listens for authentication requests redirected from the captive portal. The default port is 4433. Depending on your firewall and network policies, you can configure an unused port greater than 1 and less than 63999.
5. Save the configuration and click **Restart** if it appears at the top of the screen.

# Customizing the Captive Portal Interface

You can customize the captive portal, and if configured, the guest registration page as well. You can upload image files to the appliance and display your own logo, header and footer. In addition, you can upload the acceptable use policies that are displayed on the captive portal and guest registration page.

Following are guidelines for each item you can customize:

- **Logo Image**: The maximum size is 200 pixels wide by 55 pixels high, and the images can be in JPEG, GIF, or PNG format. It displays on top of the header image.
- **Header** **Image:** The optimal size is 600 pixels wide by 137 pixels high. The image can be in JPEG, GIF, or PNG format. The header displays at the top of the page.
- **Footer** **Image:** The optimal size is 600 pixels wide by 20 pixels high. The image can be in JPEG, GIF, or PNG format. The footer displays at the bottom of the page.
- **Acceptable** **Use** **Policy:** The policy must be saved as a UTF-8 encoded file. It appears below the welcome message in the captive portal. Users can scroll through the policy when they review it. This is used in the captive portal and guest registrati characters, including white space.

If any of the customizable fields are not configured, then the factory defaults are displayed. To customize the captive portal:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab, and then click **Captive** **Portal**.
2. Select the member that is running the captive portal and click the Edit icon.
3. Select the **Customization** tab of the *Member* *Captive* *Portal* *Properties* editor.
4. In the **General** **Captive** **Portal** **Customization** section, complete the following:
   
   - **Company** **Name:** Enter the name of your company. The company name displays on the title bar of the browser. You can enter a maximum of 256 characters.
   - **Welcome** **Message:** Type the message that displays on the captive portal. The message can contain a maximum of 300 characters.
   - **Help** **Desk** **Message:** Type a message that provides Helpdesk information, such as contact information for technical assistance. The message can contain a maximum of 300 characters.
   - **Logo** **Image**, **Header** **Image**, **Footer** **Image**, **Acceptable** **Use** **Policy**: To display the image files and the acceptable use policy on the captive portal, click **Select** beside the item you want to upload. In the *Upload* dialog box, click **Select** **File** and navigate to the image or text file. Select the file you want to display and click **Upload**. Note that these files have size requirements, as listed earlier in this section.
5. In the **Guest Users Web Page Customization** section, complete the following:
   
   - The appliance displays certain fields on the guest registration page. Select the checkboxes of the fields that users are required to complete: Re**quire First Name, Require Middle Name, Require Last Name, Require Email,** and **Require** **Phone**.
   - **Custom Field 1 — Custom Field 4**: You can display up to four additional fields on the guest registration page. To add a field to the guest registration page, enter a label for that field. The label can have a maximum of 32 characters. Select **Require** to require users to complete the field.|  
     Users can enter a maximum of 128 characters in each of the fields in the captive portal login page and the guest registration page.
6. Save the configuration and click **Restart** if it appears at the top of the screen.

# Managing Captive Portal Certificates

When you enable support for encrypted web traffic sent over SSL/TLS, you can do any of the following:

- Generate a self-signed certificate and save it to the certificate store of your browser.
- Request a CA-signed certificate. When you receive the certificate from the CA, upload it on the member running the captive portal.

## Generating Self-Signed Certificates

You can generate a self-signed certificate for the captive portal. When you generate a self-signed certificate, you can specify the hostname and change the public/private key size, enter valid dates and specify additional information specific to the captive portal. If you have multiple captive portals, you can generate a certificate for each captive portal with the appropriate hostname.

To generate a self-signed certificate:

1. From the Grid tab, select the Grid Manager tab, and then click Captive Portal.
2. Select the member that is running the captive portal, and then click HTTPS Cert -&gt; Generate Self-signed Certificate from the Toolbar.
3. In the Generate Self-signed Certificate dialog box, complete the following:
   
   - Secure Hash Algorithm and Key Size: You can select SHA-1 and a RSA key size of 1024 or 2048. SHA-256 (SHA-2) can be selected together with a RSA key size of 2048 or 4096. The default value is SHA-256 2048.
   - **Days Valid:** Specify the validity period of the certificate.
   - **Common Name:** Specify the domain name of the captive portal.
   - **Organization:** Enter the name of your company.
   - **Organizational Unit:** Enter the name of your department.
   - **Locality:** Enter a location, such as the city or town of your company.
   - **State or Province:** Enter the state or province.
   - **Country Code:** Enter the two-letter code that identifies the country, such as US.
   - **Admin E-mail Address:** Enter the email address of the captive portal administrator.
   - **Comment:** Enter additional information about the certificate.
4. Click **OK**.

## Generating Certificate Signing Requests

You can generate a CSR (certificate signing request) that you can use to obtain a signed certificate from your own trusted CA. Once you receive the signed certificate, you can import it in to the Grid member that runs the captive portal, as described in the next section, Uploading Certificates.  
To generate a CSR:

1. From the **Infoblox** **Grid** tab, select the** Grid** **Manager** tab, and then click **Captive** **Portal**.
2. Select the member that is running the Captive Portal, and then click **HTTPS** **Cert** -&gt; **Create** **Signing** **Request** from the Toolbar.
3. In the *Create* *Signing* *Request* dialog box, enter the following:
   
   - **Secure** **Hash** **Algorithm** **and** **Key** **Size:** You can select SHA-1 and a RSA key size of 1024 or 2048. SHA-256 (SHA-2) can be selected together with a RSA key size of 2048 or 4096. The default value is SHA-256 2048.
   - **Common** **Name**: Specify the domain name of the captive portal.
   - **Organization**: Enter the name of your company.
   - **Organizational** **Unit**: Enter the name of your department.
   - **Locality**: Enter a location, such as the city or town of your company.
   - **State** **or** **Province**: Enter the state or province.
   - **Country** **Code**: Enter the two-letter code that identifies the country, such as US.
   - **Admin** **E-mail** **Address**: Enter the email address of the captive portal administrator.
   - **Comment**: Enter information about the certificate.
4. Click **OK**.

## Uploading Certificates

When you upload a certificate, the NIOS appliance finds the matching CSR and takes the private key associated with the CSR and associates it with the newly uploaded certificate. The appliance then automatically deletes the CSR.  
If the CA sends an intermediate certificate that must be installed along with the server certificate, you can upload both certificates to the appliance. The appliance supports the use of intermediate certificates to complete the chain of trust from the server certificate to a trusted root CA.  
To upload a certificate:

1. From the **Infoblox Grid** tab, select the **Grid** **Manager** tab, and then click **Captive** **Portal**.
2. Select the member that is running the captive portal, and then click **HTTPS** **Cert** -&gt; **Upload** **Certificate** from the Toolbar.
3. In the **Upload** dialog box, click **Select** **File**, navigate to the certificate location, and click **Open**.

The appliance imports the certificate . When you log in to the appliance again, it uses the certificate you imported.

## Downloading Certificates

You can download the current certificate or a self-signed certificate so users can install it in their browsers. To download a certificate:

1. From the** Infoblox** **Grid** tab, select the **Grid** **Manager** tab, and then click **Captive** **Portal**.
2. Select the member that is running the captive portal, and then click **HTTPS** **Cert** -&gt; **Download** **Certificate** from the Toolbar.
3. Navigate to where you want to save the certificate and save it.

# Starting the Captive Portal Service

Before you start the captive portal service, ensure that the member is not running any other service. To start the captive portal service:

1. From the **Infoblox Grid** tab, select the **Grid** **Manager** tab, and then click **Captive** **Portal**.
2. Select the member that is configured to run the captive portal service and click the Start icon.
