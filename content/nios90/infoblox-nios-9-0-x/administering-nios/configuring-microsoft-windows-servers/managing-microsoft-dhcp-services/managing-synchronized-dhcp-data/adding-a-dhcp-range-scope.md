---
title: "Adding a DHCP Range/Scope"
source: "/space/nios90/1467056332"
pageId: "1467056332"
---
After you add a network for a scope, you must then define its DHCP range. You can create the DHCP range from scratch or use a DHCP Range template. For information about DHCP templates, see [About IPv4 Range Templates](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-dhcp-templates/about-ipv4-dhcp-templates).  
You can add multiple ranges to the same network, as long as each range is served by a different Microsoft server and the ranges do not overlap.  
When you add a split-scope, you must specify the Microsoft servers that serve the scopes and their exclusion ranges. Each scope inherits its options from its respective Microsoft server. Note that the enabled/disabled setting of the first range automatically applies to the second range. Therefore, if the first range is initially disabled, then the second range is initially disabled as well.  
To add a DHCP range for a scope:

1. From the **Data** **Management** tab, select the **DHCP** tab.
2. Navigate to the network to which you want to add a DHCP range, and then click **Add** -&gt; **DHCP** **Range** from the Toolbar. You can also add a DHCP range from any panel in the DHCP tab.
3. In the *Add* *Range* wizard, select one of the following and click **Next**:
   
   - **Add DHCP Range**  
     or
   - **Add** **DHCP** **Range** **using** **Template**  
     Click **Select Template** and select the template that you want to use. Note that when you use a template to create a DHCP range, the configurations of the template apply to the new range. The appliance automatically populates the DHCP range properties in the wizard. You can then edit the pre-populated properties.
4. Complete the following:
   
   - **Network**: Click **Select Network** to select the network to which you want to add the DHCP range. The network must be served by a Microsoft server. If you are adding a DHCP range while viewing the contents of a specific network, the appliance displays the network address here. You can still select a different network by clicking **Select Network**.
   - **Start:** Enter the first IP address in the range.
   - **End:** Enter the last IP address in the range.
   - **Name**: You can enter a name for the DHCP range.
   - **Comment:** You can enter additional information. After the range is synchronized to the Microsoft server as a scope, this text appears in the Description field of the scope on the Microsoft server.
   - **Disable for DHCP:** Select this if you do not want the DHCP server to allocate IP addresses from this DHCP range at this time. If you select this, the Grid member synchronizes the range to the Microsoft server as an inactive scope.
5. Click **Next** and select one of the following to provide DHCP services for the DHCP range:
   
   **None**: Select this if you do not want to synchronize this range to the Microsoft DHCP server.  
   **Microsoft Server**: This field displays the Microsoft server that you selected for the network. If several servers were assigned to the network, you can select one from the list.
   
   - **Microsoft** **Split-Scope:** Select this to create a split-scope, and then complete the following:
     
     - **Microsoft** **Server** **#1:** Read-only field that displays the Microsoft server that you specified in the preceding step.
     - **Microsoft** **Server** **#2:** Select the Microsoft server that will serve the split-scope.
     - **Split** **Percentage:** Specify the percentage of IP addresses in the scope that is allocated to the exclusion range of each Microsoft server. The default is 50%. You can either move the slider or enter the percentages in the text fields. When you use the slider, you are specifying the percentage of addresses in the exclusion range of the first server. A tooltip window displays the percentage as you adjust the slider. When you set the slider, the **Split** **Percentage**, **Exclusion** **Starting** **Address**, and **Exclusion** **Ending** **Address** fields are updated accordingly.
   - **Exclusion** **Starting** **Address:** When you set the split percentages, these fields automatically displays the starting address of the exclusion range of each Microsoft server. Alternatively, you can enter the starting address of the exclusion range of the first Microsoft server, and the **Split** **Percentage** and **Exclusion** **Ending** **Address** values adjust accordingly.
   - **Exclusion** **Ending** **Range:** When you set the split percentage, these fields automatically display the ending address of the exclusion range of each Microsoft server. Alternatively, you can enter the ending address of the exclusion range of the second Microsoft server, and the **Split** **Percentage** and **Exclusion** **Starting** **Address** values adjust accordingly.
6. Click **Next**, and optionally set operational parameters for the scope. Otherwise, the scope inherits its parameters from the first Microsoft DHCP server.
   
   - **Lease** **Time**: Specify the lease time. The default is 8 days. When the range is served by a Microsoft server and you enter a lease time of 1000 days or more, Grid Manager automatically grays out this field and checks the **Unlimited** **Lease** **Time** option after you save your entries.
     
     - **Unlimited** **Lease** **Time**: Select this option to set an infinite lease time for the IP addresses leased from this range.
     - **Routers**: In the table, enter the IP address of the router that is connected to the same network as the DHCP clients. Click the Add icon to add more routers.
     - **Domain** **Name**: Enter the name of the domain for which the Microsoft server serves DHCP data. The DHCP server includes this domain name in Option 15 when it responds with a DHCPOFFER packet to a DHCPDISCOVER packet from a client.
     - **DNS** **Servers**: In the table, enter the IP address of the DNS server to which the DHCP clients send name resolution requests. The DHCP server includes this information in the DHCPOFFER and DHCPACK messages.
     - **Broadcast** **Address**: Enter the broadcast IP address of the network to which the DHCP server is attached.
7. Click **Next** to enter values for required extensible attributes or add optional extensible attributes. For information, see [*Using*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)[*Extensible*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)[*Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)[.](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)
8. Save the configuration and click **Restart** if it appears at the top of the screen.  
   or  
   Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule Change* panel, enter a date, time, and time zone. For information, see [*Scheduling*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks)[ ](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks)[*Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks).
