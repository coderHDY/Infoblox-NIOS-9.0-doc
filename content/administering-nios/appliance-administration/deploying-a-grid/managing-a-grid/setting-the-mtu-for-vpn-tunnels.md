---
title: "Setting the MTU for VPN Tunnels"
source: "/space/nios90/1340475586"
pageId: "1340475586"
---
You can configure the VPN MTU (maximum transmission unit) for any appliance with a network link that does not support the default MTU size (1500 bytes) and that cannot join a Grid because of this limitation. If an appliance on such a link attempts to establish a VPN tunnel with a Grid Master to join a Grid, the appliance receives a PATH-MTU error, indicating that the path MTU discovery process has failed. For information about the MTU discovery process, see *RFC* *1191,* *Path* *MTU* *Discovery*.  
To avoid this problem, you can set a VPN MTU value on the Grid Master for any appliance that cannot link to it using a 1500-byte MTU. When the appliance contacts the master during the key exchange handshake that occurs during the Grid-joining operation, the master sends the appliance the MTU setting to use.  
To set the VPN MTU for a Grid member:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -> **Members** tab -> *Grid_member* checkbox -> Edit icon.
2. Select the **Network** -> **Advanced** tab of the *Grid* *Member* *Properties* editor.
3. In the **VPN** **MTU** field, enter a value between 600 and 1500.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
