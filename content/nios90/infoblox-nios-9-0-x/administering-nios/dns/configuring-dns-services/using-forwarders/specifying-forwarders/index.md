---
title: "Specifying Forwarders"
source: "/space/nios90/1468465491"
pageId: "1468465491"
---
To configure forwarders for a Grid, member, or DNS view, complete the following:

1. **Grid:** From the **Data Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid DNS Properties.**  
   **Member:** From the **Data Management** tab, select the **DNS** tab -&gt; **Members** tab -&gt; *member *checkbox -&gt; **Edit** icon.  
   **DNS View:** From the **Data Management** tab, select the **DNS** tab -&gt; **Zones** tab -&gt; *dns_view *checkbox -&gt; Edit icon. Note that if there is only one DNS view— for example, the predefined default view—you can just click the Edit icon beside it.  
   To override an inherited property, select **Override** next to it and complete the appropriate fields.
2. Click the **Forwarders** tab.
3. Click the Add icon.
4. Enter an IP address in the text field. The field supports entry for both IPv4 and IPv6 values.
   
   1. To remove a forwarder, select the IP address from the Forwarders list, and then click the Delete icon.
   2. To move a forwarder up or down on the list, select it and click the **Up** or **Down** arrow. Note: The option to change the order of forwarders configured no longer has any operational impact on the NIOS member’s choice of forwarder.

1. To use only forwarders on your network (and not root servers), select the **Use Forwarders Only** checkbox.  
   Note that:
   
   - If **Use forwarders Only** option is enabled, UDP/TCP port 53 should be opened between the NIOS and the configured forwarders.
   - If **Use Forwarders Only** option is not enabled, UDP/TCP 53 should be opened from NIOS to the configured forwarders and from NIOS to the Internet.This is because if NIOS fails to resolve a query using the forwarder(s) configured, then it will revert to using iterative resolution using root hints. To resolve the query using root hints, the NIOS server will have to contact the root servers first, then the top-level domain DNS servers and then the authoritative servers. Authoritative servers can be anywhere on the Internet depending on the domain queried.
   - In general, if the resolving member has to forward recursive queries to a forwarder because it does not have direct access to the Internet, select **Use Forwarders Only**.
2. Select the **Add client IP, MAC addresses, and DNS View name to outgoing recursive queries** checkbox to include the client IP address, MAC address, and DNS view name of the client from which the DNS query was initiated, to outgoing recursive queries. For information on recursive queries, see* *[*Enabling Recursive Queries*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/enabling-recursive-queries). Selecting this option includes EDNS0 custom options.Data is not included in outgoing recursive queries if root hints are being used rather than global forwarders. The source IP address added is the source IP address seen by the NIOS appliance. This could be the true client or it could be a DNS forwarder that has forwarded the original query. The MAC address is not added if the source IP is not in the same subnet as the NIOS appliance’s interface.
3. Select the **Copy client IP, MAC addresses, and DNS View name to outgoing recursive queries** checkbox to copy and validate the client IP address, MAC address, DNS view name from incoming queries to outgoing queries. Data is not included in outgoing recursive queries if root hints are being used rather than global forwarders. If this checkbox is selected and:
   
   - One or more custom options are present, the custom options are copied to the outgoing query. Any missing options are left missing and not added. An incoming query can contain only one IP address and only one MAC address and only one DNS view name. If one or more custom options are present, the status of the **Add client IP, MAC addresses, and DNS View name to outgoing recursive queries**  checkbox is ignored and nothing extra is added.
   - No custom option is present, there is nothing to copy. If the **Add client IP, MAC addresses, and DNS View name to outgoing recursive queries** checkbox is selected, then the source IP address, MAC address, and DNS view name EDNS0 options are added to the outgoing recursive query. The source IP address added is the source IP address seen by the NIOS appliance. This could be the true client or it could be a DNS forwarder that has forwarded the original query. The MAC address is not added if the source IP is not in the same subnet as the NIOS appliance’s interface. If the **Add client IP, MAC addresses, and DNS View name to outgoing recursive queries** checkbox is not selected, no options are added to outgoing recursive queries. For more information about EDNS0 options, see [*Configuring DNS Traffic Control Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/configuring-dns-traffic-control-properties) and [*Using Extension Mechanisms for DNS (EDNS0)*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/configuring-dns-service-properties/using-extension-mechanisms-for-dns-edns0).
4. Save the configuration and click **Restart** if it appears at the top of the screen.

> **warning**
>
> ### Note
> 
> - Infoblox recommends that you do not include client IP addresses and MAC addresses in queries directed to non-Infoblox DNS servers and that you include the addresses in only those queries directed at Infoblox DNS servers. This means that you should not enable this setting when DNS Forwarding Proxy fallback is a forwarder to a non-Infoblox server (e.g. 8.8.8.8)
> - Infoblox recommends that you do not use fetches per server and fetches per zone with forwarders.
> - NIOS-X has option **Add client IP, MAC addresses, and DNS View name to outgoing recursive queries. **If enabled, this will also enable copying of client IP, MAC address and DNS View name when forwarding. DNS View name from NIOS-X is in UUID format.
