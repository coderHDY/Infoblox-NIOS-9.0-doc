---
title: "Enabling DDNS for IPv4 and IPv6 DHCP Clients"
source: "/space/nios90/1480949915"
pageId: "1480949915"
---
You can enable the DHCP server to send DDNS updates for IPv4 clients at the Grid, member, shared network, network, address range, DHCP template, fixed address, and roaming host levels, and for IPv6 clients at the Grid, member, network, shared network, network template and roaming host levels.  
You can specify a different domain name that the appliance uses specifically for DDNS updates. The appliance combines the hostname from the client and the domain name you specify to create the FQDN that it uses to update DNS. For IPv4 clients, you can specify the DDNS domain name at the network, network template, range, and range template levels. For IPv6 clients, you can specify the DDNS domain name at the Grid, member, network, shared network, and network template levels. You can also use the name of a roaming host record as the name of the client for DDNS updates, as described in [*Setting Properties for Roaming Hosts*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/about-roaming-hosts).  
To enable DDNS and specify a DDNS domain name:

1. **Grid:** From the **DataManagement** tab, select the **DHCP** tab, expand the Toolbar and click **GridDHCPProperties**.   
   **Member**: From the **DataManagement** tab, select the **DHCP** tab and click the **Members** tab -&gt; **Members** -&gt; *member *checkbox -&gt; Edit icon.  
   **Network**: From the **DataManagement** tab, select the **DHCP** tab and click the **Networks** tab -&gt; **Networks** -&gt; *network* checkbox -&gt; Edit icon.  
   **NetworkContainer**: From the **DataManagement** tab, select the **IPAM** tab -&gt; *network_container* checkbox, and then click the Edit icon.   
   **NetworkTemplate**: From the **DataManagement** tab, select the **DHCP** tab and click the **Templates** tab -&gt; *DHCP_template* checkbox -&gt; Edit icon.  
   **RoamingHost**: From the **DataManagement** tab, select the **DHCP** tab and click the **Networks** tab -&gt; **RoamingHosts** -&gt; *roaming_host* -&gt; Edit icon.  
   For IPv4 clients only:**IPv4AddressRange**: From the **DataManagement** tab, select the **DHCP** tab and click the **Networks** tab -&gt; **Networks** -&gt; *network* -&gt; *addr_range* checkbox -&gt; Edit icon.   
   **IPv4FixedAddress**: From the **DataManagement** tab, select the **DHCP** tab and click the **Networks** tab -&gt; **Networks** -&gt; *network* -&gt; *ip_addr* checkbox -&gt; Edit icon.  
   **IPv4AddressRange**/**FixedAddressTemplate**: From the **DataManagement** tab, select the **DHCP** tab and click the **Templates** tab -&gt; *DHCP_template* checkbox -&gt; Edit icon.  
   To override an inherited property, click **Override** next to it and complete the appropriate fields.
2. In the **IPv4DDNS** -&gt; **Basic** tab or the **IPv6DDNS** -&gt; **Basic** tab, complete the following:
   
   - **Enable DDNS Updates**: Select this checkbox to enable DDNS updates.
     
     When setting properties for DHCP objects other than the Grid, you must click **Override** and select **Enable** **DDNS** **updates **for the DDNS settings to take effect. When turning on DDNS updates, first verify if [*Option 81*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ddns-updates/about-the-client-fqdn-option) has been enabled and whether DNS is being updated. If DNS is being updated, even if the DNS zone targets are not in the Grid,  select Option 81 support and the correct sub option. For more information, see [*Enabling FQDN Option Support*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ddns-updates/about-the-client-fqdn-option/About+the+Client+FQDN+Option#EFQDOS).
     
     When the **Enable DDNS Updates** checkbox is not selected, the default behaviour is to allow the client to update DNS.
     
     When the **Enable DDNS Updates** checkbox is selected, the default behaviour is to prevent DDNS updates from the client.  
     In a dual mode Grid, if IPv6 DDNS updates is enabled at the Grid level, then when you join an IPv6 Grid member to the Grid, IPv6 DDNS updates is automatically disabled for the Grid member.
   - **DDNS domain name**: Specify the domain name of the network that the appliance uses to update DNS. For IPv4 clients, you can specify this at the network, network template, range, and range template levels. For IPv6 clients, you can specify this at the Grid, member, network, shared network, and network template levels.
   - **DDNS Update TTL**: You can set the TTL used for A or AAAA and PTR records updated by the DHCP server. The default is shown as zero. If you do not enter a value here, the appliance by default sets the TTL to half of the DHCP lease time with a maximum of 3600 seconds. For example, a lease time of 1800 seconds results in a TTL of 900 seconds, and a lease time of 86400 seconds results in a TTL of 3600 seconds. For information about how to set the lease time, see [*Defining Lease Times*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-general-ipv4-dhcp-properties).
   - **DDNS Update Method**: Select the method used by the DHCP server to send DDNS updates. You can select either **Interim** or **Standard** from the drop-down list. The default is **Interim**. When you select **Interim**, TXT record will be created for DDNS updates and when you select **Standard**, DHCID record will be created for DDNS updates. But in the **IPv4 DDNS** -&gt; **Advanced** tab or the **IPv6 DDNS** -&gt; **Advanced** tab, if you have selected **No TXT Record** mode for the DHCP server to use when handling DNS updates, then TXT record or DHCID record is not created for DDNS updates.  
     If you change the DDNS update method from **Interim** to **Standard** or vice versa, then the DHCP server changes the DHCID type used from TXT record to DHCID record or vice versa as the leases are renewed.  
     This is supported for clients that acquire both IPv4 and IPv6 leases. Infoblox recommends you to configure different DDNS update method for IPV4 leases and IPv6 leases, **Interim** for IPv4 lease and **Standard** for IPv6 lease.
   - **Update DNS on DHCP Lease Renewal**: Select this checkbox to enable the appliance to update DNS when a DHCP lease is renewed.
3. Save the configuration and click **Restart** if it appears at the top of the screen.
