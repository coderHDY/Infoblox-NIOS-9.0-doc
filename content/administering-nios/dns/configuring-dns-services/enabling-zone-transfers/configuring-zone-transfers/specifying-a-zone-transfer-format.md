---
title: "Specifying a Zone Transfer Format"
source: "/space/nios90/1394933824"
pageId: "1394933824"
---
The zone transfer format determines the BIND format for a zone transfer. This provides tracking capabilities for single or multiple transfers and their associated servers.  
To specify a zone transfer format:

1. **Grid:** From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties.**  
   **Member:** From the **Data** **Management** tab, select the **DNS** tab, click the **Members** tab -> *member* checkbox -> Edit icon.  
   To override an inherited property, click **Override** next to it and complete the appropriate fields.
2. In the editor, click **Toggle** **Advanced** **Mode**.
3. When the additional tabs appear, click the **Advanced** subtab of the **Zone** **Transfers** tab to specify the zone transfer format. *S*elect one of the following options from the **Default** **Zone** **Transfer** **Format** drop-down menu:
   
   - **many-answers** (Secondaries run BIND 8/9): includes as many records as the packet size allows
   - **one-answer** (Secondaries run BIND 4): includes one record per packet
4. To exclude servers, click the Add icon in the **Zone** **Transfer** **Format** **Exceptions** table and enter the IP address of the server in the Addresses field.
5. Save the configuration and click **Restart** if it appears at the top of the screen.
