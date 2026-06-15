---
title: "Adding Subscriber Sites"
source: "/space/nios90/1471218369"
pageId: "1471218369"
---
To add a subscriber site, complete the following:

1. From the **Data Management** tab -> **DNS** tab -> **Subscriber Services Deployment** tab -> **Subscriber Sites** tab, click the Add icon.
2. In the *Add Subscriber Site* wizard, complete the following:
   
   1. **Name**: Enter the name of the subscriber site.
   2. **Maximum Subscribers**: Specify the maximum number of subscribers for the subscriber site. This represents the overall size of the subscriber cache. You can enter a value between 10000 to 10000000.
   3. **Comment**: You can enter additional information about the subscriber site.
   4. **Members**: In the Members table, click the Add icon to add Grid members to the site. If there are multiple members, the *Member Selector* dialog box is displayed, from which you can select a member. Click the required member name in the dialog box. You can also delete a member from the list.  
      Note that a Grid member can support only one subscriber site.
   5. **Deterministic NAT Block Size**: The block size specifies the number of ports made available for each incoming subscriber address. In a deterministic NAT, zero means not using NAT. The value can be any number from 0 to 64512. The block size configuration is not allowed to change unless the global (subscriber service properties) IPSD is set to Deterministic-NAT-Port.
   6. **First port**: The value of the first usable port for the subscriber. The first usable port will have a default value of 1024, and the value can be any number from 1024 to 65535, both inclusive.
   7. ** Allow NATed Subscribers only**: Select this option to restrict only NATed subscribers (Subscribers with IPSD). Here the IP address and port block allocations are made dynamically for the subscriber instance and the IPSD of the first port is assigned to the subscriber port block. For example, if the block size is 8 for the site, then the IPSD must be set to 1024, 2032, 3040,  etc.  
      Note that you must select **Allow NATed Subscribers only** option when the **NAT port Block Size **is a non zero value and the parental control policy is enabled for the member.
   8. **Stop the anycast service when the subscriber service is in the interim state**: Select this option to stop the anycast service from running when the subscriber service is in the interim state. By default, this option is selected.
3. Click **Next** to select **Subscriber Collection**
4. if **Subscriber Collection **> **RADIUS** button is selected, to configure NAS gateways for the subscriber site, complete the following
   
   1. **Listen on RADIUS port number**: Enter the UDP port number that the collector member uses to collect accounting information from the NAS gateway. You can enter an integer from 1 to 65535. The default is 1813.
   2. **NAS Gateways**: You must add at least one NAS gateway to the subscriber site in order to start the subscriber collection service. You can add up to 20 NAS gateways. Click the Add icon and complete the following to add a NAS gateway:
      
      1. **Name**: Enter the name of the NAS gateway.
      2. **IP Address**: Enter the IP address of the NAS gateway.
      3. **Shared Secret**: Enter a shared secret that can be used to authenticate the communication between the RADIUS accounting server and the collector member. This shared secret must match the one you entered on the RADIUS server.
      4. **Confirm Shared Secret**: Enter the shared secret again.
      5. **Send Protocol Acknowledgment**: Select this checkbox to send an acknowledgment to the client when the collector member receives accounting information from the NAS gateway.
      6. **Comment**: Enter additional information about the NAS gateway.
      7. Click **Add** to add the NAS gateway.  
         You can select a NAS gateway configuration and click the Edit icon to modify it or click the Delete icon to delete it.
5. If **Subscriber Collection **> **API** button is selected. This feature enables NIOS to receive subscriber information through API server. To configure an API Server:
   
   1. Click the Add icon to add the **API server Members**.
   2. In the Members table, click the Add icon to add Grid members to the site. If there are multiple members, the *Member Selector* dialog box is displayed, from which you can select a member. Click the required member name in the dialog box. You can also delete a member from the list.
6. *This step is required only if Infoblox Subscriber Parental Control is enabled*. For information about enabling Parental Control, see [*Infoblox Subscriber Parental Control*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280400677). Click **Next** to configure the parental control blocking IP addresses. Complete the following:
   
   1. **Content Proxy Addresses**: You can add IP addresses of the Infoblox Harmony product. The appliance will forward the subscriber session to Infoblox Harmony for in-line processing of the subscriber session, depending on the policies. Click the Add icon. Grid Manager adds a row to the **Content Proxy Addresses** table. It is recommended that you enter two addresses in this field. The first address is considered the primary address and the second address is considered the secondary address. If you enter only one address, the same address is considered the primary and secondary address.  Click the row and enter the IP address in the **Address** field. To delete an IP address, select the checkbox and then click the Delete icon.
   2. **Enforce the global proxy list**: Select this checkbox if you want to proxy the traffic to the MSP (Multi-Services Proxy) server. If you select this checkbox, and have categorized the queried domains in the incoming traffic to the global proxy list using the [*set pc_domain add*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280789952) command (category 104), then the query resolves to an MSP virtual IP address and NIOS generates a "synthetic resolution”. This checkbox is disabled by default, and you must configure **Content Proxy Addresses** to enable it. If you do not select this checkbox, then the query resolves normally.  
      Notes:
      
      - If you have configured queries to specific domains (categorized to 104) to be proxied to the MSP server and enabled the **Enforce the global proxy list** option, queries to these domains are proxied if subscriber secure policies with the NXDOMAIN rule are not set.
      - If you want to enable and run DNS over TLS, DNS over HTTPS, and Parental Control features simultaneously on a member, ensure that the appliance meets the base memory configuration requirements defined in [*Configuration Requirements*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280665831/Configuring+DNS+over+TLS+and+DNS+over+HTTPS+Services#ConfigurationRequirementsifParentalControlisEnabled). If you try to run these features when the required memory configuration is not available, all of these features will be disabled.
   3. **Additional Blocking Servers**: Besides the IP addresses you specify in the Parental Control Blocking IP Addresses fields, you can specify additional IP addresses that will act as blocking servers for the blocking policies you defined when [*configuring blocking server policies*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280400656). Click the Add icon. Grid Manager adds a row to the **Additional Blocking Servers** table. Click the row and select a blocking policy. In the **Address **field, enter the IP address of the blocking server that will contain the selected blocking policy. To delete an IP address, select the checkbox and then click the Delete icon.
   4. **Parental Control Blocking IP Addresses**: You can configure two sets of IPv4 and IPv6 addresses that are used as blocking VIP addresses. The parental control subscribers are redirected to the following blocking IP addresses whenever the domain queried by the subscriber is blocked based in the subscriber parental control policy.  
      Complete the following:
      
      1. **IPv4 Address (primary)**: Enter the primary blocking IPv4 address.
      2. **IPv4 Address (secondary)**: Enter the secondary blocking IPv4 address.
      3. **IPv6 Address (primary)**: Enter the primary blocking IPv6 address.
      4. **IPv6 Address (secondary)**: Enter the secondary blocking IPv6 address.
   5. **Policy Management Addresses**: You can add IP addresses of the policy management servers to which the appliance sends APIs about the expired parental control policies. Click the Add icon. Grid Manager adds a row to the **Policy Management Addresses **table. Click the row and enter the IP address in the **Address **field. To delete an IP address, select the checkbox and then click the Delete icon.
7. Save the configuration, or click **Next** to continue to the next step where you define extensible attributes as described in [*Managing Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)*.*
