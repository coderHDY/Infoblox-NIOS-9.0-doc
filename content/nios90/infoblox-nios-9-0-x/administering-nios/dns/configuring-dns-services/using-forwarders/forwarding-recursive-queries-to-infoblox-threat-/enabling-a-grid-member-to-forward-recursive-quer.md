---
title: "Enabling a Grid Member to Forward Recursive Queries to Infoblox Threat Defense"
source: "/space/nios90/1468629105"
pageId: "1468629105"
---
To enable a Grid member to forward recursive queries to Infoblox Threat Defense, complete the following:

1. Log in to the Infoblox Portal at [*csp.infoblox.com*](https://csp.infoblox.com/home).
2. Create a join token by following the instructions in the [*Configuring Join Tokens*](https://docs.infoblox.com/space/BloxOneInfrastructure/87229997/Configuring+Join+Tokens) topic in the Infoblox Infrastructure documentation. In an HA environment, two on-prem hosts are created in the Infoblox Portal Configuration.
3. Log in to Grid Manager.
4. From the **Infoblox** **Grid** tab, select the **Grid Manager** tab -&gt; **Members** tab -&gt; *member *checkbox -&gt; click the Edit icon.
5. In the *Grid Member Properties* *Editor*, click the **Infoblox Portal Configuration **tab, and then complete the following: To override an inherited property:
   
   1. **Join Token**: Displays the join token value that is inherited from the Grid. However, if the field is empty, the cloud connection is not to be terminated. If you specify a value, the **Override** label is displayed next to the field.
   2. **Custom Resolver**: Displays the IP address of the local DNS resolver. This IP address or DNS is used to resolve Infoblox domains when the DNS Forwarding Proxy service starts. You must configure at least one external resolver that will be used to resolve all required domains. If you do not enter an IP address, 52.119.41.100 is taken as the default. If you specify a value, the **Override** label is displayed next to the field.
   3. **HTTP Proxy**: Displays the URL that is inherited from the Grid. Enter a value other than one that is displayed. If you specify a value, the **Override** label is displayed next to the field.
   4. **Test Settings**: Click this button to test the value of the join token, custom resolver, and HTTP proxy, that you entered. When you click the button, a success or a failed message is displayed along with the timestamp. You cannot save your configurations until the test settings is a success.
   5. **Clear Overrides**: This is button is available at the member level. Clicking this option clears such field values (that were updated at the member level), and inherits the values from the Grid. In this case, the **Override** label is not displayed and the **Clear Overrides** link will not appear.
   6. Click **Save & Close**.
6. In the Infoblox Portal, configure **DNS Forwarding Proxy **(DNS Forwarding Proxy) on the **Services** tab:  
   In the Infoblox Portal Configuration&gt; **Create Service**&gt; select **DNS Forwarding Proxy** from the drop-down list.  In the ***Create DNS Forwarding Proxy*** wizard enter the following, and then click **Next and Finish**:
   
   1. **Name **(required field): Provide a name for service instance.
   2. **Description**: Provide a description for the service instance.
   3. **Service State**: Set the toggle to start or stop the service.
   4. **Host**: Select the host from the drop-down list.
      
      - Note that only the available hosts are displayed in this list.
      - The DNS service restarts if the DNS Forwarding Proxy service is enabled on the NIOS member, resulting in a service interruption.
7. In the *Member DFP Properties* editor, select the **Fallback to the default resolution process if Infoblox Threat Defense Cloud does not respond **checkbox to forward recursive queries to the local root name servers in case Infoblox Threat Defense fails or if Infoblox Threat Defense fails to resolve recursive queries. For newly configured DNS Forwarding Proxies in NIOS, Infoblox recommends that you keep this option selected until you have verified that the NIOS proxies are functioning properly. In the Infoblox Portal Configuration, go to **Manage** -&gt; **On-Prem Hosts** to ensure that the statuses for the NIOS proxies that you have registered are active.

> **warning**
>
> ### Note
> 
> - If you have upgraded to NIOS 8.5.x with DNS Forwarding Proxy enabled on any node, Infoblox recommends that you do not remove the on-prem hosts from the **Infoblox Portal Configuration** tab. This is because NIOS preserves the access key during the upgrade and the NIOS Grid member connects to the **Infoblox Portal Configuration** tab using the same access key.
> - You must create a join token to authenticate a virtual DNS Forwarding Proxy for establishing a connection to the cloud. For more information refer to the [*Configuring Join Tokens*](https://docs.infoblox.com/space/BloxOneInfrastructure/87229997/Configuring+Join+Tokens) topic in the Infoblox Infrastructure documentation.
> - For HA pair, two hosts are created in the Infoblox Portal Configuration tab to configure services.
> - When Infoblox Threat Defense cloud is available and DNS Forwarding Proxy is healthy: DNS configuration files are automatically regenerated and recursive-queries are forwarded to Infoblox Threat Defense.
> - When Infoblox Threat Defense cloud is available but DNS Forwarding Proxy is unhealthy: DNS configuration files are automatically regenerated and forwarding to Infoblox Threat Defense is suspended until DNS Forwarding Proxy returns to a healthy state. This involves automatically restarting the DNS service which will lead to a short DNS service outage.
> - It is recommended to provide the join token at Grid member level and not at the Grid level (as it will try and connect all members of the Grid to the Infoblox Portal and not just NIOS members with DNS Forwarding Proxy).
