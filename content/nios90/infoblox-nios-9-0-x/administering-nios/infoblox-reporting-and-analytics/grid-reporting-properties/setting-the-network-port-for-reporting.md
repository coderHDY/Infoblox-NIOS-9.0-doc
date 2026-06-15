---
title: "Setting the Network Port for Reporting"
source: "/space/nios90/1456865327"
pageId: "1456865327"
---
All Grid members use port 9997 for reporting service by default. This port is used for data transmissions between the reporting member and other members. Ensure that you configure your firewall rules to allow traffic on this port. You can designate another network port for reporting purposes.

To set the network port for reporting, complete the following:

1. From the **Administration** tab, select the **Reporting** tab -&gt; expand the Toolbar and click **Grid** **Reporting** **Properties**.  
   Or  
   From the **Infoblox** **Grid** tab -&gt; **Grid** **Manager** tab -&gt; **Services** tab, select the **Reporting** service and click the *Grid_member* checkbox, and then click **Edit** -&gt; **Grid** **Reporting** **Properties** from the Toolbar.
2. In the *Grid* *Reporting* *Properties* editor, select the **General** -&gt; **Advanced** tab and complete the following:
   
   1. **Port**: Enter the port number you want to use for reporting purposes. The default port is 9997.
3. Save the configuration.
