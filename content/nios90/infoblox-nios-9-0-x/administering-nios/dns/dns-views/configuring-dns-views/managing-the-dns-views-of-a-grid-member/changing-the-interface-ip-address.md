---
title: "Changing the Interface IP Address"
source: "/space/nios90/1416301198"
pageId: "1416301198"
---
By default, a Grid member publishes its LAN address in glue A records in the DNS view. You can change this default for each DNS view associated with a member. You can specify the NAT IP address or another IP address.  
To specify the interface IP address for glue A records in a view:

1. From the **Data** ** Management** tab, click the **DNS** tab -&gt; **Members** tab -&gt; *member* checkbox, and then click the Edit icon.
2. In the *Member* * DNS* * Configuration* editor, click **Toggle ** **Expert** ** Mode** if the editor is in basic mode, and then select the **DNS** ** Views** tab.  
   The *Address* * Of* * Member * *Used* * in * *DNS* * Views* table lists the default DNS view and DNS views with zones that are served by the member.
3. To change the address, click the entry in the Interface column of a DNS view, and select one of the following:
   
   - **NAT** ** IP ** **Address**: Select this to use the member NAT address for glue A records in a Grid setting. Select this when you want to notify the Grid Master that it should expect packets from this member on the NAT address, not the configured interface address. The Grid Master broadcasts this NAT address to all NAT members outside of its NAT group. Do not use this option for an independent appliance serving as a DNS server. Select **Other ** **IP ** **Address** to publish the NAT address for the independent appliance. For information about NAT compatibility, see [*NAT Groups*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/nat-groups)*.*
   - **Other** ** IP ** **Address**: Select this to specify another address for glue A records, or to publish the NAT address for an independent appliance. Enter the address in the **Address** field.
     
     Note that the 255.255.255.255 limited broadcast address is reserved. The appliance does not automatically create glue A records for this address. You can however create an NS record without the associated glue records.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
