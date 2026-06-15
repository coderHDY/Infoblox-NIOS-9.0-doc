---
title: "Viewing and Modifying SOA Records"
source: "/space/nios90/1432716449"
pageId: "1432716449"
---
The timer values in the SOA record determine when the zone data is updated. The MNAME field and the RNAME field of the SOA record display the FQDN of the primary server and the administrative email address respectively. You can view these default values and override them when necessary. For a zone that has multiple primary servers, Grid Manager displays all configured primaries for the zone. You can click **Override** to override the Grid-level settings. If the primary server is a Microsoft server however, the **Override** option does not appear. You can only change certain values in the SOA record.

To view and modify zone SOA record values:

1. From the **Data** **Management** tab, select the **DNS** tab -> **Zones** tab -> *zone* checkbox, and then click the Edit icon.
2. In the *Authoritative* *Zone* or *Stub* *Zone* editor, click the **Settings** tab to view the following values. You can also click **Override** to modify some of the values.
   
   - **Serial** **number**: The current serial number for the primary server. This number is automatically increased when changes are made to the zone or its record. The serial number plays a key role in determining when and whether zone data is updated. You can change the serial number only if the primary server of the zone is a Grid member. When the zone has multiple primary servers, each primary can have its own serial number. In this case, the serial number displayed here is always that of the Grid Master, which will also appear in the primary name server list if it is one of the primaries for the zone.
     
     Note that if you change the serial number of the Grid Master, serial numbers for all primaries will be changed to the same number. A warning is displayed when you try to decrement the serial number.
   - **Refresh:** This interval tells secondary servers how often to send a message to the primary server for a zone to check that their data is current, and retrieve fresh data if it is not. The default is three hours.
   - **Retry:** This interval tells the secondary server how long to wait before attempting to recontact the primary server after a connection failure between the two occurs. The default is one hour.
   - **Expire:** If the secondary fails to contact the primary for the specified interval, the secondary stops giving out answers about the zone because the zone data is too old to be useful. The default is 30 days.
   - **Default** **TTL:** Specifies how long name servers can cache the data. The default is eight hours.
   - **Negative-caching** **TTL** **(Time** **to** **Live):** Specifies how long name servers can cache negative responses. The default is 15 minutes.
   - **Primary** **name** **server** **(for** **SOA** **MNAME** **field):** If the primary name server of a zone is a Grid member, the MNAME is inherited from its corresponding member, and you can change the name of the primary name server that is published in the MNAME field of the SOA record. This field accepts names in native character sets. If the zone has multiple primary name servers, a list of all primaries is displayed in this section. Each primary has its own serial number and the number can be different among them. Note that the serial numbers for these primaries are read-only and you cannot modify them. If you change the serial number of the Grid Master, serial numbers for all primaries will be changed to the same number.
   - **Email** **Address** **(for** **SOA** **RNAME** **field):** If the primary name server of a zone is a Grid member, you can enter an administrator email address to the SOA record to help people determine who to contact about this zone. The appliance supports IDN for the host name of the Email address. For example, you can create [admin@инфоблокс.рф](mailto:admin@инфоблокс.рф) but not админ@инфоблокс.рф.com.
   - **Don't** **use** **forwarders** **to** **resolve** **queries** **in** **subzones:** Select this option to disable the use of forwarders to resolve queries for data in subzones.
3. Save the configuration and click **Restart** if it appears at the top of the screen.  
   To schedule this task, click the Schedule icon at the top of the wizard. In the Schedule Change panel, click **Later**, and then specify a date, time, and time zone. The Schedule icon is green when there is a pending scheduled task. You can reschedule the task if you have the applicable permissions.
