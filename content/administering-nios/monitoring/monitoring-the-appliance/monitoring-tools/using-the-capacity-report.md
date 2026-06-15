---
title: "Using the Capacity Report"
source: "/space/nios90/1393918046"
pageId: "1393918046"
---
You can view the capacity usage and object type information of an appliance in a capacity report. The capacity report displays capacity and object type information of an independent appliance, a Grid Master, or a Grid member. For an HA pair, the report displays information on the active node.  
The top half of the panel displays a capacity summary, and the bottom half displays the object types the appliance supports and the total counts for each object type.  
To view a capacity report:

- From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -> **Members** tab -> *member* checkbox, and then click **Capacity** **Report** from the Toolbar.

The capacity summary contains the following information:

- **Name**: The name of the appliance.
- **Role**: The role of the appliance. The value can be **Grid** **Master**, **Grid** **Master** **Candidate**, **Grid** **Member**, or **Standalone**.
- **Hardware** **Type**: The type of hardware. For an HA pair, the report displays the hardware type for both the active and passive nodes.
- **Object** **Capacity**: The maximum number of objects the appliance can support.
- **Total** **Objects**: The total number of objects currently in the database.
- **%** **Capacity** **Used**: The percentage of the capacity in use.

The capacity report filters object types you can manage through the appliance. You can configure the object types you want to see in the following table by completing the following in the **Minimum** **Object** **Total** filter:

- **Minimum** **Object** **Total**: Enter the minimum number of objects within an object type of which Grid Manager displays. In the Object Type table, Grid Manager displays only the object types that contain at least the specified number of objects you enter in this field.

The capacity report displays the following information:

- **Object Type**: The type of objects. For example, DHCP Lease, Admin Group, or PTR Record. For objects that are only used for internal system operations, the report groups and shows them under **Other**.
- **Total**: The total number of objects for the specific object type. You can print the object type information or export it to a CSV file.
