---
title: "Configuration Example: Configuring Shared Records"
source: "/space/nios90/1340802634"
pageId: "1340802634"
---
The following example shows you how to configure shared records. In this example, you do the following:

- Create a shared record group: **group1**.
- Associate it with three zones: [http://eng.com](http://eng.com) , [http://sales.com](http://sales.com) , and [http://marketing.com](http://marketing.com) .
- Create an A record **www** and an MX record **mx1**.

1. Create a shared record group called **group1** and associate it with [http://eng.com](http://eng.com) , [http://sales.com](http://sales.com) , and [http://marketing.com](http://marketing.com) .
   
   1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Shared** **Record** **Groups** tab, and then click the Add icon.
   2. In the first step of the *Shared* *Record* *Group* wizard, specify the following **Name:** Enter **group1**.
   3. Click **Next**.
   4. Click the Add icon in the Associated Zones panel.
   5. Select [http://eng.com](http://eng.com)  from the list of zones and click the select icon. Do the same for the [http://sales.com](http://sales.com) , and [http://marketing.com](http://marketing.com)  zones.
   6. Save the configuration and click **Restart** if it appears at the top of the screen.
2. Add an A record **www** to **group1**.
   
   1. Expand the Toolbar and click **Add** -&gt; **Shared** **Record** &gt; **Shared** **A** **Record.**
   2. In the *Shared* *A* *Record* wizard, specify the following:   
      **Name:** Enter **www**.  
      **Shared** **Record** **Group:** Select **group1** from the drop-down list.  
      **IP** **Address:** Enter the IP address **10.9.1.1**.
   3. Save the configuration and click **Restart** if it appears at the top of the screen.
3. Add an MX record **mx1** into **group1**.
   
   1. Expand the Toolbar and click **Add** -&gt; **Shared Record** &gt; **Shared MX Record.**
   2. In the *Shared MX Record* wizard, specify the following:  
      **Mail Destination:** Enter **mx1**.  
      **Shared** **Record** **Group:** Select **group1** from the drop-down list.   
      **Mail** **Exchanger:** Enter [http://www.infoblox.com](http://www.infoblox.com) .  
      **Preference**: Enter **10**.  
      **Comment:** Enter **mail** **exchanger** **record** **for** **shared** **record** **group1**.
   3. Save the configuration and click **Restart** if it appears at the top of the screen.
