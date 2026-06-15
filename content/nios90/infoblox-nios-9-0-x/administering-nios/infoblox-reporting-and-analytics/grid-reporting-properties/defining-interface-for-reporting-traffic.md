---
title: "Defining Interface for Reporting Traffic"
source: "/space/nios90/1457193011"
pageId: "1457193011"
---
On a Grid member, you can define the network interface you want the member to use for sending reporting data to the reporting server.  
To define network interface on the Grid member for reporting traffic, complete the following:

1. From the **Infoblox** **Grid** tab -&gt; **Grid** **Manager** tab -&gt; **Services** tab, select the **Reporting** service and click the *Grid_member* checkbox, and then click the Edit icon.
2. In the *Reporting* *Member* *Properties* editor, select the **General** -&gt; **Advanced** tab, and then complete the following:
   
   1. **Forwarding** **interface** **used** **for** **reporting** **traffic**: From the drop-down list, select the interface that you want this member to use to send reporting data. Note that you must properly configure the interfaces on the member for them to appear in the drop-down list. After a NIOS upgrade to version 8.1.x or later, if you select ANY from the drop-down list, the LAN1 (or VIP for HA configurations) subnet is used as the static route. However**, **if the threat protection licenses are installed and ANY is selected from the drop-down, the MGMT subnet is used as the static route. Select MGMT if you want to continue using the management port for grid communication. Selecting MGMT enables the MGMT subnet to be used as the static route.
      
      Note that after you start the reporting service on the reporting member, you cannot reset the interface set for the reporting traffic. You may have to configure the reporting member again to modify the interface for the reporting traffic.
3. Save the configuration.
