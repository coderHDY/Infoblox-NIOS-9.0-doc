---
title: "Defining Multiple Forwarders"
source: "/space/nios90/1343881353"
pageId: "1343881353"
---
Since [ns3.corpxyz.com](http://ns3.corpxyz.com) is an internal DNS server, you configure it to forward DNS queries for external DNS name resolution to the primary and secondary DNS servers—[ns1.corpxyz.com](http://ns1.corpxyz.com) at 10.1.5.2 and [ns2.corpxyz.com](http://ns2.corpxyz.com) at 2.2.2.2.

1. From the **Data** **Management** tab, select the **DNS** tab, and then select **System** **DNS** **Properties** from the Toolbar.
2. In the *System* *DNS* *Properties* editor, click the Add icon on the **Forwarders** tab. Grid Manager adds a row to the table. Complete the following:
   
   - **Address:** Type **2.2.2.2**. Click **Add** again to add another forwarder.
   - **Address:** Type** 10.1.5.2**.
3. Save the configuration and click **Restart** if it appears at the top of the screen.

Each of the forwarders is assigned a random response time. The appliance sends the initial outbound query to the forwarder that has the lowest response time. If the first forwarder does not reply, the appliance tries the one with the next lowest random response time. The appliance adjusts and keeps track of the response times of the forwarders and uses the quicker one for future queries. If the quicker forwarder does not respond, the appliance then uses another one.
