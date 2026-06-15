---
title: "Enabling DNS on LAN2"
source: "/space/nios90/1480950190"
pageId: "1480950190"
---
If you enable DNS on an appliance, it always serves DNS on the LAN1 port. Optionally, you can configure the appliance to provide DNS services through the LAN2 port as well. For example, the appliance can provide DNS services through the LAN1 port for internal clients on a private network, and DNS services through the LAN2 port for external clients on a public network.  
After you configure the LAN2 port, you can enable DNS services on the LAN2 port as follows:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Members** tab -&gt; *Grid_member* checkbox, and then click the Edit icon.
2. In the **General** -&gt; **Basic** tab of the *Member* *DNS* *Configuration* editor, do the following:  
   *If* *you* *are* *running* *DNS* *for* *IPv4*: In the **General** -&gt; **Basic** tab of the *Member* *DHCP* *Configuration* editor, select the **IPv4** checkbox for **LAN2** under DNS Interfaces.   
   *If* *you* *are* *running* *DNS* *for* *IPv6*: In the **General** -&gt; **Basic** tab of the *Member* *DHCP* *Configuration* editor, select the **IPv6** checkbox for **LAN2** under DNS Interfaces. (An IPv6 address must also be provisioned for the port.)   
   You can run either or both protocols for DNS depending on your network deployment.
   
   - **Automatically create IPv4 glue A and PTR records for LAN2's address:** The NIOS appliance can automatically generate A (address) and PTR records for a primary name server whose host name belongs to the name space of the zone. Select this checkbox to enable the appliance to automatically generate an A and PTR record.
   - **Automatically** **create** **IPv6** **glue** **AAAA** **and** **PTR** **records** **for** **LAN2's** **address:** automatically generate AAAA and PTR records for the LAN2 IPv6 address. A glue record is the IP address of a name server held at the domain name registry. They are needed to set a domain's name server to a host name within the domain. Example: to set the name servers of [ns1.corpxyz.com](http://ns1.corpxyz.com) and [ns2.corpxyz.com](http://ns2.corpxyz.com), provide the glue records, which are in effect the IP addresses, for [ns1.corpxyz.com](http://ns1.corpxyz.com) and [ns2.corpxyz.com](http://ns2.corpxyz.com), within specific DNS record types.  
     Without the glue records, DNS requests never resolve to the correct IP address because the domain registry does not associate the IP with the correct records.
3. Select one of the following from the **Send** **queries** **from** and the **Send** **notify** **messages** **and** **zone** **transfer** **request** **from** drop-down lists:
   
   - **VIP**: The appliance uses the IP address of the HA port as the source for queries, notifies, and zone transfer requests.
   - **MGMT**: The appliance uses the IP address of the MGMT port as the source for queries, notifies, and zone transfer requests.
   - **LAN2:** The appliance uses the IP address of the LAN2 port as the source for queries, notifies, and zone transfer requests.
   - **Any**: The appliance chooses which port to use as the source for queries, notifies, and zone transfer requests.  
     The **Send** **queries** **from** drop-down list also includes loopback IP addresses that you configured. You can select a loopback address as the source for queries.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
5. Click **Restart** to restart services.
