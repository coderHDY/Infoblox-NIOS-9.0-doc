---
title: "Joining Appliances to the Grid"
source: "/space/nios90/1483604161"
pageId: "1483604161"
---
Grid members can join the Grid using IPv4 protocol in an IPv4-only Grid and using IPv6 protocol in an IPv6-only Grid. In a dual mode Grid, the Grid members may join the Grid using IPv4 or IPv6. Similarly, a Grid Master candidate can join the Grid using IPv4 in an IPv4-only Grid and using IPv6 in an IPv6-only Grid. But for a Grid Master candidate to join a dual mode Grid, it should be configured in dual mode. If you have configured the MGMT port for the Grid member, then the Grid member can join the Grid using the MGMT port. You can use the Grid Setup Wizard or access the *Join* *Grid* dialog box to join appliances to a Grid. The Grid Setup Wizard launches when you first log in to an appliance. You can also launch it from the Toolbar as described in [*Grid Setup Wizard*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/319488802).   
To join a single appliance and HA pair to a Grid using the Grid Manager GUI:

1. Log in to the appliance or HA pair that you want to add to the Grid. The appliance or HA pair must be online and able to reach the Grid Master.
2. From the **Infoblox** **Grid** tab, select the **Grid Manager** tab -> **Members** tab.
3. Expand the Toolbar and click **Join Grid**.
4. In the *Join Grid* dialog box, enter the following:
   
   - **Virtual IP of Grid Master**: Type the VIP address of the HA Grid Master or the LAN1 address of the single Grid Master for the Grid to which you want to add the appliance. Entries may be an IPv4 or IPv6 address.
   - **Grid Name**: Type the name of the Grid.
   - **Grid Shared Secret**: Type the shared secret of the Grid.   
     **Note**: The combined length of the **Shared Secret** and **Grid Name** fields must not exceed 100 characters.
5. **Use MGMT port to join Grid**: If you have already enabled the MGMT port (see [*Grid Communications*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/660144129)), this option becomes available. Select it to connect to the Grid through the MGMT port.
6. Click **OK** to begin the join operation.   
   To confirm that the appliance has successfully joined the Grid, log in to the Grid Master and navigate to the **Infoblox** **Grid** tab, select the **Grid Manager** -> **Members** tab. This panel lists the Grid members. Check the icon in the Status column of the newly added member. (green = the appliance has joined the Grid and is functioning properly; yellow = the appliance is in the process of joining the Grid; red = the appliance has not joined the Grid). You can also use the CLI command set network to join an appliance to a Grid.

To join a single appliance and HA pair to a Grid using the Grid Setup Wizard:

1. Log in to the appliance or HA pair that you want to add to the Grid. The appliance or HA pair must be online and able to reach the Grid Master.
2. From the **Infoblox** **Grid** tab, select the **Grid Manager** tab -> **Members** tab.
3. Expand the Toolbar and click **Grid Properties** -> **Setup (Grid Setup Wizard)**.
4. On the next screen, specify the Grid properties and click **Next**
   
   - **Grid Name:** Enter a text string that the two appliances use to authenticate each other when establishing a VPN tunnel between them. This must match the Grid name you entered for node 1.
   - **Grid Master's IP Address**: Enter the same VIP you entered for node 1.
   - **Shared Secret**: Enter a text string that both appliances use as a shared secret to authenticate each other when establishing a VPN tunnel between them. This must match your entry in node
5. On the next screen verify the IP address settings of the member and click **Next**.
6. The last screen displays the settings you specified in the previous panels of the wizard. Verify that the information is correct and click **Finish**.  
   To confirm that the appliance has successfully joined the Grid, log in to the Grid Master and navigate to the **Infoblox** **Grid** tab, select the **Grid** **Manager** -> **Members** tab. This panel lists the Grid members. Check the icon in the Status column of the newly added member. (Green = The appliance has joined the Grid and is functioning properly; Yellow = The appliance is in the process of joining the Grid; Red = The appliance has not joined the Grid). You can also use the CLI command set network to join an appliance to a Grid.
