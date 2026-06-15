---
title: "About Sort Lists"
source: "/space/nios90/280763472"
pageId: "280763472"
---
A sort list prioritizes A and AAAA records on certain networks when those records are included in responses, sorting them to the beginning of the list in the response. For example, you can define a sort list when a server has two interfaces and you want the DNS clients to prefer one interface because it has a faster link.  
When you define a sort list on the NIOS appliance, you specify the following:

- The IP address or network of the source of the query
- The IP addresses or networks that the appliance lists first in its response when it receives a query from the corresponding source address

When the NIOS appliance receives a query from the specified IP address or network and the DNS lookup produces a response with multiple addresses, the NIOS appliance sorts the addresses so that those in the sort list are at the beginning of its response. For more information, refer to the [*Infoblox DNS Cache Acceleration Application Guide*](https://docs.infoblox.com/space/dca9x/399507884/Infoblox+DNS+Cache+Acceleration+Administrator+Guide)* .*

# Defining a Sort List

To define a sort list for a Grid, member, or DNS view:

1. **Grid:** From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties.** ** **  
   **Member:** From the **Data** **Management** tab, select the **DNS** tab &gt; **Members **tab -&gt; *member* checkbox -&gt; Edit icon. ** **  
   **DNS View**: From the **Data Management** tab, click the **DNS** tab -&gt; **Zones** tab&gt; *dns_view* checkbox -&gt; Edit icon.  
   To override an inherited property, click **Override** next to it and complete the appropriate fields.
2. In the editor, click **Toggle** **Advanced** **Mode**.
3. When the additional tabs appear, click **Sort** **List**.
4. Click the Add icon and select either Any to define a sort list for any address and network, or Address/Network to define a sort list for a particular source IP address or network.
5. Do the following in the new row:
   
   - If you selected Address/Network, enter the IP address or network of the source of the query. The feature supports IPv4 or IPv6 values.
   - Click the Add icon beside the source IP address to add the preferred IP addresses or networks for the source. You can add as many IP addresses as necessary. When you add multiple IP addresses, you can change the order of the IP addresses. Select an IP address and drag it to its new position, or click the up or down arrow, as shown in the figure Sort List below.

Sort List

*[drawio]*
