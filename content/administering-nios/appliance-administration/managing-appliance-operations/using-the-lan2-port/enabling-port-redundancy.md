---
title: "Enabling Port Redundancy"
source: "/space/nios90/1481015710"
pageId: "1481015710"
---
Before you enable port redundancy, ensure that both LAN1 and LAN2 are enabled. To enable port redundancy:

1. From the **Infoblox Grid** tab, select the **Grid** **Manager** tab -> **Members** tab -> *Grid_member* checkbox, and then click the Edit icon.
2. In the **Network** -> **Basic** tab of the *Grid* *Member* *Properties* editor, select the **Enable** **port** **redundancy** **on** **LAN1/LAN2** checkbox.
3. Select the **Use LAN1 when available** checkbox to enable the NIOS appliance to automatically revert to the LAN1 port when it is available. In case of a connection failure, if the LAN1 port is not available, the NIOS appliance fails over to the LAN2 port. If you do not enable this option, the NIOS appliance will not automatically revert from the LAN2 port to the LAN1 port when it is available.
4. Save the configuration and click **Restart** if it appears at the top of the screen.

The *Detailed* *Status* panel displays the status of both the LAN1 and LAN2 ports. In an HA pair, both nodes display the port information when port redundancy is enabled.
