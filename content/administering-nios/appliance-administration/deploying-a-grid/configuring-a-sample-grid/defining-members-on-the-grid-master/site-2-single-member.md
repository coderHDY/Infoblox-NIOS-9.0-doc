---
title: "Site 2 – Single Member"
source: "/space/nios90/1340475763"
pageId: "1340475763"
---
1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** -> **Members** tab.
2. Expand the Toolbar and click **Add** -> **Add** **Grid** **Member**.
3. In the *Add* *Grid* *Member* wizard, enter the following and click **Next**:
   
   - **Member** **Type**: Select **Infoblox**  
     If this member is a NIOS virtual appliance, then select **Virtual NIOS**.
   - **Host** **Name:** [**ns4.site2.corpxyz.com**](http://ns4.site2.corpxyz.com)
   - **Comment:** **Site 2- **[**ns4.site2.corpxyz.com**](http://ns4.site2.corpxyz.com)
4. Specify the following information about the member that you are adding to the Grid and click **Next**:
   
   - **Type** **of** **Network** **Connectivity:** Select **IPv4** from the drop-down list.
   - **Standalone** **Member:** Select this option.
   - **Required** **Ports** **and** **Addresses:** Click the empty fields and enter the following information:
     
     - **Address:** Enter **10.2.1.10**.
     - **Subnet** **Mask** **(IPv4)** **or** **Prefix** **Length** **(IPv6)**: Enter **255.255.255.0**
     - **Gateway**: Enter **10.2.1.1**
     - **Port** **Settings**: Select **AUTOMATIC**.
5. Save the configuration and click **Restart** if it appears at the top of the screen.
6. Log out from the Grid Master.
