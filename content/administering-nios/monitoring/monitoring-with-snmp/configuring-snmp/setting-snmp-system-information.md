---
title: "Setting SNMP System Information"
source: "/space/nios90/1406566411"
pageId: "1406566411"
---
You can enter values for certain managed objects in MIB-II, the standard MIB defined in *RFC* *1213*. Management systems that are allowed to send queries to the appliance can query these values. You can enter these values for the Grid and specific members. You can also override the Grid values at a member level.  
To enter system information:

1. Grid: From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab, and then select **Grid** **Properties** -> **Edit** from the Toolbar. Member: From the **Grid** tab, select the **Grid** **Manager** -> **Members** tab -> *member*, and then click the **Edit** icon.
2. In the *Grid* *Properties* or *Grid* *Member* *Properties* editor, select the **SNMP** tab. To override Grid settings, click **Override** in the *Grid* *Member* *Properties* editor.
3. Complete the following in the **SNMP** tab. For an HA member, click **Override** **Node** **2** **settings** to enter information for node 2 of the HA pair.
   
   - **sysContact:** Enter the name of the contact person for the appliance.
   - **sysLocation:** Enter the physical location of the appliance.
   - **sysName:** Enter the fully qualified domain name of the appliance.
   - **sysDescr:** Enter useful information about the appliance, such as the software version it is running.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
