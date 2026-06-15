---
title: "Defining Interface for SNMP Traps"
source: "/space/nios90/1406566462"
pageId: "1406566462"
---
By default, the NIOS appliance sends SNMP traps through the MGMT interface to specific trap receivers, or through the LAN1 interface when the MGMT interface is disabled. However, you can choose an interface, instead of the default interface, to send SNMP traps to the trap receivers. For example, if you select LAN2 interface from the drop-down list, the traps are sent from the LAN2 interface instead of the default MGMT interface.

To choose an interface, other than MGMT or LAN1, for a Grid member and a standalone Grid:

1. **Grid**: From the **Infoblox** **Grid **tab, select the **Grid Manager **tab -&gt; **Members **tab -&gt; *Grid_member *checkbox.  
   **Standalone**: From the **System **tab, select the **System Manager** tab, expand the Toolbar and click **System Properties** -&gt; **Edit.**
2. In the editor, click **Toggle Advanced Mode**.
3. When the additional tabs appear, click the **Advanced **subtab of the **SNMP **tab.
4. Complete the following:
   
   - **Interface**: Select an interface from the drop-down list:
     
     - **ANY**: The default value is **ANY**. SNMP traps are sent through the MGMT interface, if it is enabled, when you select this option. If the interface is disabled, the traps are sent through the LAN1 interface.
     - **LAN1**: Select this option to send SNMP traps through the LAN1 interface.
     - **LAN2**: Select this option to send SNMP traps through the LAN2 interface.
     - **MGMT**: Select this option to send SNMP traps through the MGMT interface.
5. Click **Save & Close** to save the changes or **Cancel **to exit.
