---
title: "After Using the Data Import Wizard"
source: "/space/nios90/1341292752"
pageId: "1341292752"
---
After you import data, you must restart services on the Grid Master and delete the A records for the legacy servers from the corpxyz.com zone. You can also confirm that the imported data is correct and complete by checking the DNS configuration and the forward- and reverse-mapping zones.

1. Log in to the Grid Master (10.0.1.10), select the **Infoblox Grid** tab, expand the Toolbar, and then click the Restart Services icon.
   
   Note when importing data through the wizard rather than entering it through the GUI, the Restart Services icon does not change to indicate you must restart service for the appliance to apply the new data. Still, restarting service on the Grid Master is necessary for the imported configuration and data to take effect.
2. To remove A records for the legacy servers, from the **Data** **Management** tab, select **DNS** tab -&gt; **Zones** tab -&gt; **corpxyz.com**.
3. Expand the **Records** section, select the following A records in the *corpxyz.com* zone, and then click the Delete icon:
   
   1. ns1 (for 10.0.1.5)
   2. ns2 (for 10.0.2.5)
   3. ns3.site1.corpxyz (for 10.1.1.5)
   4. ns4.site3.corpxyz (for 10.2.1.5)
4. Remove the respective A records for legacy servers from the *site1.corpxyz* and *site3.corpxyz* subzones.
5. To check the imported DNS configuration file, from the **Data** **Management** tab, select the **DNS** tab -&gt; **Members** tab -&gt; **10.0.1.10** checkbox. Expand the Toolbar and click **View** -&gt; **View** **DNS** **Configuration**.
   
   Note that if you do not see the imported DNS configuration file, ensure that you enabled DNS and restarted the services.
6. Scroll through the DNS configuration log to check that each imported zone has an allow-update statement like the following one for the `10.1.10.in-addr.arpa` reverse-mapping zone:
   
   `zone "10.1.10.in-addr.arpa" in {`

` …`  
` allow-update { key DHCP_UPDATER; 10.0.2.10; 10.1.1.10; 10.2.1.10; };`  
` …`  
` };`

# Enabling DHCP and Switch Service to the Grid

Finally, you must enable DHCP service on the three Grid members at 10.0.2.10, 10.1.1.10, and 10.2.1.10, and switch DNS and DHCP service from the legacy DNS and DHCP servers to them.

1. Log in to the Grid Master (10.0.1.10) and from the **Data** **Management** tab, select the **DHCP** tab -&gt; **Members** tab -&gt; **10.0.2.10** checkbox. Expand the Toolbar and click **Start**.
2. Repeat step 1 to enable DHCP on 10.1.1.10 and 10.3.1.10.
   
   Note to start the DNS service, as described in [*Starting and Stopping the DNS Service*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/configuring-dns-service-properties/starting-and-stopping-the-dns-service). The Grid members are ready to serve DHCP and DNS, and send DDNS updates.
3. Take the legacy DHCP and DNS servers offline.
