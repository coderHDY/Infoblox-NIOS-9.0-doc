---
title: "Enabling the Configuration of RRset Orders"
source: "/space/nios90/281182263"
pageId: "281182263"
---
You can use the Infoblox GUI to configure the order that the appliance uses to return the A and AAAA records associated with an Infoblox host. This feature is useful when you want the appliance to return the A and AAAA records of a host in a specific order. For example, if you want the management address to appear first on a list of IP addresses associated with a network device, you can configure the order of the IP addresses so the management address is always returned first on the list when you look up the name of the device. For information about using the Infoblox API to configure RRset order (resource record order) of a host, refer to the *Infoblox* *API* *Documentation* at [https://docs.infoblox.com/space/NIOS/35400616/NIOS](https://docs.infoblox.com/space/NIOS/35400616/NIOS).

To specify an RRset order of a host record, you must first enable the feature at the Grid level. When you enable this feature and there are multiple IP addresses associated with the host record, you can specify one of the following RRset orders through the *Host* *Record* wizard and editor:

- **Fixed**: The A and AAAA records of the host are returned in the order that you specify in the IPv4 and IPv6 address tables.
- **Random**: The A and AAAA records of the host are returned in a random order.
- **Cyclic**: The A and AAAA records are returned in a round robin pattern.

For information about specifying RRset order of a host record, see [*Adding Host Records*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/about-host-records).  
Note that when you configure an order type for the IP addresses associated with a host record, the order type applies to both the A and AAAA records of the host. It does not apply to any non-host A or AAAA records that may have the same owner name as the host record. By default, the appliance returns resource records in a cyclic or round robin order. The return order of non-authoritative data retrieved from a recursion is not affected by the host RRset order, and that remains cyclic.

When you enable the RRset order for hosts at the Grid level, you may not be able to maintain the same DNS responses on a recursive server if it exists in the Grid. You can preserve the original cached DNS responses by configuring a fixed RRset order on the recursive server so it can return A and AAAA records associated with domain names in the original order they were received. For information about configuring the RRset order for the cached DNS responses, see  Preserving the RRset Order for Cached DNS Responses below.

To enable the configuration of RRset order for a host record:

1. From the **Data** **Management** tab -&gt; **DNS** tab, expand the Toolbar, and then click **Grid** **DNS** **Properties.**
2. In the *Grid* *DNS* *Properties* editor, click **Toggle** **Advanced** **Mode**.
3. When the additional tabs appear, click the **Advanced** subtab of the **General** tab.
4. Complete the following:
   
   - **Enable** **setting** **RRset** **order** **for** **hosts** **with** **multiple** **addresses:** Select this checkbox to enable the configuration of RRset order for a host record. After you enable this feature, you can configure the RRset order in the *Host* *Record* wizard or editor. For information, see [*Adding Host Records*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/about-host-records).
   - Preserve host RRset order for Grid secondaries that use DNS zone transfers: This is enabled only when you have enabled the setting of RRset order for host records. When you select this checkbox, the RRset order that you configure for a host record applies to the resource records of the Grid secondaries that are in the DNS transfer mode.
5. Save the configuration and click **Restart** if it appears at the top of the screen.

# Preserving the RRset Order for Cached DNS Responses

By default, when a client queries a domain name, the DNS caching appliance returns the A and AAAA records of the domain name in the cyclic order. However, this default behavior can be overridden if you have enabled and configured (at the Grid level) fixed RRset order for hosts that have multiple addresses. When you override the default behavior and preserve the fixed RRset order for cached DNS responses, the DNS caching appliance returns A and AAAA records associated with domain names in the order they were received from an upstream server. You can preserve the RRset order for the cached DNS responses and specify the fixed RRset order for A, AAAA, or both A and AAAA records at the Grid level and override at the member and DNS view levels. Note that configuring fixed RRset order for specific FQDNs might slightly affect the performance of the DNS caching appliance.   
To preserve the fixed RRset order for cached DNS responses at the Grid, member, or DNS view level:

1. **Grid**: From the **Data** **Management** tab -&gt; **DNS** tab, expand the Toolbar, and then click **Grid** **DNS** **Properties.**  
    **Member**: From the **Data** **Management** tab, select the **DNS** tab and click the **Members** tab -&gt; *member* checkbox -&gt; Edit icon.  
   **DNS** **View**: From the **Data** **Management** tab, select the **DNS** tab -&gt; **Zones** tab -&gt; *dns_view* checkbox -&gt; Edit icon.
2. In the editor, select the **RRset** **Order** tab -&gt; click the **Basic** tab, and then complete the following:
   
   - **Enable** **fixed** **RRset** **order** **for** **following** **FQDNs:** Select this checkbox to preserve the configuration of RRset order for cached DNS responses.
   - In the FQDN table, specify the list of FQDN entries for which you want to preserve the RRset order. Note that you can configure a maximum of 25 FQDNs for the specified RRset order.  
     You can click the Add icon and complete the following to add a new entry to the list:
     
     - **FQDN:** Enter the fully qualified domain name with which the A or AAAA record is associated.
     - **Record** **Type:** Select the record type from the drop-down list. You can select **A**, **AAAA**, or **Both** **A** **and** **AAAA**.
3. Save the configuration and click **Restart** if it appears at the top of the screen.
