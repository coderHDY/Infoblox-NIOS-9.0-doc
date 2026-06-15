---
title: "Configuring Proxy Servers"
source: "/space/nios90/280765075"
pageId: "280765075"
---
If your network environment does not allow direct HTTP or HTTPS communication with the Internet through a firewall from a secure location in which the Grid Master or standalone appliance resides, you can configure your appliance to use a proxy server so you can receive automatic updates, such as DNS Infrastructure Protection rulesets and Threat Insight bundles, through this connection. You can also configure a proxy server to perform AWS related communication, such as using a proxy server as the AWS API Proxy, performing vDiscovery on AWS endpoints, and pulling DNS data from Amazon Route 53. For information about AWS deployments, refer to the *Installation* *Guide* *for* *vNIOS* *for* *AWS*. For information about vDiscovery, see* *[*Configuring vDiscovery Jobs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/704348239).

> **warning**
>
> ### Note
> 
> - Configured proxy settings are for the entire Grid. You cannot configure proxy settings for individual members.
> - Infoblox supports only basic authentication for vDiscovery jobs performed over a proxy server as not all proxy options used by customers are validated at the Infoblox lab.

Depending on the updates you want to download, you may need to install the respective licenses in your Grid. For example, to download DNS Infrastructure Protection ruleset updates, the Grid must have the Threat Protection Update license installed. To download  bundles, you must install the Threat Insight license. When you configure your appliance to obtain periodic ruleset updates, all updates go through the MGMT port on the Grid Master by default. You can, however, delegate this function to a Grid member using a different interface such as LAN1 or LAN2. For information about how to delegate updates to a Grid member and configure the interface, see Configuring Members and Interfaces for Automatic Updates below.  
To configure proxy settings for the Grid, complete the following steps:

1. From the **Infoblox Grid** tab, select the** Grid** **Manager** tab, and then click **Edit** -> **Grid** **Properties** from the Toolbar.
2. In the *Grid* *Properties* editor, select the **Proxy** **Settings** tab -> **Basic** tab, and complete the following:
   
   - **Use** **Proxy** **Server**: When you select this checkbox, the appliance uses the connection that has been established with the proxy server to establish connection with endpoints or download automatic updates, such as DNS Infrastructure Protection rulesets and Threat Insight bundles. The reporting member sends API requests to the proxy server for threat details. For more information, see [*DNS Infrastructure Protection Reports*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280408700). Similarly, the Grid Master sends API requests to the proxy server for all threat context details. For more information, see [*Viewing the RPZ Threat Details*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403148). This setting applies to the entire Grid. When you clear this checkbox, the appliance does not use the proxy server; however, the configuration will not be affected.
   - **Name** **or** **IP** **Address** and **Port**: Enter the name or IP address and port number of the proxy server you plan to use for this connection.
   - **HTTPS** **Proxy** **Content** **Inspection**: From the drop-down list, select one of the following methods the proxy server uses to inspect packet content. Note that this section does not apply to AWS deployments.
     
     - **None**: Select this to use HTTP for the connection. This method does not allow certificate authentication for the proxy server.
     - **Allow** **Deep** **Packet** **Inspection**: This option is not supported for AWS deployments. To eliminate man-in-the-middle attacks, select this to allow deep pack inspection and information extraction for non-compliant protocol, intrusions, or other criteria that determine whether the packets should be routed to an alternate destination. When you select this, you must click **Proxy** **Server** **Certificate** and navigate to the proxy server certificate to upload it to the Grid, or you must ensure that a trusted chain has been established before the proxy server can perform deep packet inspection. When you have uploaded a certificate, the appliance displays **Loaded**.
       
       - **Enable** **Strict** **Host** **Name** **Checking:** This option is enabled only when you select **Allow** **Deep** **Packet** **Inspection**. As part of the SSL handshake process, the appliance verifies that the CN (Common Name) of the public certificate of the proxy server exactly matches the host name of the proxy server.

** Credentials for Proxy Server (if configured at proxy server) **

- **Use user name and password to connect to proxy server if configured**: If you have configured user credentials on the proxy server, enter the **Username** and **Password** here. This is optional.

# Configuring Members and Interfaces for Automatic Updates

If you want to download specific rulesets or updates from external servers, you can configure members and corresponding interfaces to receive updates automatically. Note that these members must have access to external servers from where the updates are delegated automatically. For a member to access an external server, you must specify the interface that you configure here when you set up an external server.

To delegate automatic updates to a Grid member or change the interface for downloads, complete the following steps:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab, and then click **Edit** -> **Grid** **Properties** from the Toolbar.
2. In the *Grid* *Properties* editor, select the **Proxy** **Settings** tab -> **Basic** tab, and complete the following:
   
   - In the Members table, click the Add icon and select **Add** **Member**. In the *Member* *Selector*, select the member to which you want to delegate the automatic update function. The appliance adds the Grid member to the table. You can add up to five members for automatic updates. When you add multiple members, you can place the selected members in the order you prefer using the arrows next to the table. If for any reasons the first member is unable to receive updates, the appliance goes down the list in the order the members are placed until the next reachable member receives the updates.
   - Click the **Interface** column, and from the drop-down list select the interface (**Any**, **LAN2**, **MGMT** or **VIP)** you want the corresponding member to use for automatic updates. Ensure that the selected interface is configured properly on the member. The default is **Any**, which maps to the LAN1 interface for all appliance models, except for the PT models. For all PT appliances, **Any** maps to the MGMT interface. You can select **MGMT** or **Any** for DNS Infrastructure Protection members. Note that VLANs are not supported.  
     You can click the **Test connectivity to all members **icon to ensure that the connectivity between the ruleset download web site and all Grid members is properly established using the selected interface. The appliance displays a message indicating the connectivity status in the feedback panel.

The table displays the following:

- **Name**: Displays the member name. For the Grid Master, this field displays **Grid** **Master**.
- **Interface**: Displays the selected interface that is used for automatic updates.

> **warning**
>
> ### Note
> 
> The appliance generates an SNMP trap if any of the configured Grid members failed to receive updates.
