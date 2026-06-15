---
title: "Configuration Example: Configuring a Stub Zone in a Grid"
source: "/space/nios90/1432781604"
pageId: "1432781604"
---
This example illustrates how to configure a stub zone and assign it to a Grid member. You configure a Grid, corpxyz, with a single Grid Master and Grid member. The Grid member, [member1.corpxyz.com](http://member1.corpxyz.com), is the primary name server for the [corpxyz.com](http://corpxyz.com) zone in the internal view. The Grid Master, [gm-corpxyz.com](http://gm-corpxyz.com), hosts the stub zone for [corpxyz.com](http://corpxyz.com) in the external view. Thus, when the Grid Master receives a query for the [corpxyz.com](http://corpxyz.com) zone, it sends it directly to [member1.corpxyz.com](http://member1.corpxyz.com), the primary name server for the zone.

In this example, you configure the following:

1. Turn off minimal responses on [member1.corpxyz.com](http://member1.corpxyz.com), the primary name server for the [corpxyz.com](http://corpxyz.com) zone. See Disable Minimal Responses below.
2. Create the internal and external views. See  Create the Views below.
3. Create the [corpxyz.com](http://corpxyz.com) authoritative zone and stub zone. See  Create the Zones below.



**Disable** **Minimal** **Responses**   
After you create the Grid, turn off minimal responses for [member1.corpxyz.com](http://member1.corpxyz.com). Disabling minimal responses ensures that [member1.corpxyz.com](http://member1.corpxyz.com) propagates the required data to the server hosting the stub zone.

1. From the **Data** **Management** tab, select the **DNS** tab, click **Members** -> [**member1.corpxyz.com**](http://member1.corpxyz.com) checkbox -> Edit icon.
2. In the *Member* *DNS* *Configuration* editor, click the **General** -> **Basic** tab.
3. Clear the **Return** **minimal** **responses** checkbox.
4. Save the configuration and click **Restart** if it appears at the top of the screen.



**Create the** **Views**   
Create the internal and external views. To create each view:

1. From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Add** **DNS** **View**.
2. In the *Add* *DNS* *View* wizard, enter the name of the view. In this example, enter either **External** or **Internal**.
3. Click **Save** **&** **New** and create the other DNS view.



**Create the** **Zones**   
Create the [corpxyz.com](http://corpxyz.com) zone in the internal view and assign [member1.corpxyz.com](http://member1.corpxyz.com) as the Grid primary server:

1. From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Add** -> **Zone** -> **Add** **Auth** **Zone**.
2. In the *Forward* *Authoritative* *Zone* wizard, do the following:
   
   - Select **Add** **an** **authoritative** **forward-mapping** **zone** and click **Next**.
   - Enter the zone name, [**corpxyz.com**](http://corpxyz.com) and select the **Internal** DNS view. Click **Next.**
   - Select **Use** **this** **set** **of** **name** **servers** and select [**member1.corpxyz.com**](http://member1.corpxyz.com) as the Grid primary server.
3. Save the configuration and click **Restart** if it appears at the top of the screen.

After you create the zone, you can view the NS and A records which were automatically created.  
Create the stub zone, [corpxyz.com](http://corpxyz.com), in the external view, assign [gm-corpxyz.com](http://gm-corpxyz.com) as the stub member and [member1.corpxyz.com](http://member1.corpxyz.com) as the stub primary server.

1. From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Add** -> **Zone** -> **Add** **Stub** **Zone**.
2. In the *Stub* *Zone* wizard, do the following:
   
   - Select **Add** **a** **stub** **forward-mapping** **zone** and click **Next**.
   - Enter the name of the stub zone, [**corpxyz.com**](http://corpxyz.com) and select the **External** DNS view. Click **Next**.
   - In the *Master* *Name* *Servers* panel, click the Add icon and enter the following for the primary name server, and then click **Next**:
     
     - **Name**: [member1.corpxyz.com](http://member1.corpxyz.com)
     - **Address**: 10.35.0.222
   - In the *Name* *Servers* panel, click the Add icon and select [**gm-corpxyz.com**](http://gm-corpxyz.com).
3. Save the configuration and click **Restart** if it appears at the top of the screen.

After you create the stub zone, the server hosting the stub zone, [gm-corpxyz.com](http://gm-corpxyz.com), sends queries to the primary server, [member1.corpxyz.com](http://member1.corpxyz.com), for the SOA and NS records. [member1.corpxyz.com](http://member1.corpxyz.com) then returns its NS records and A (address) records.
