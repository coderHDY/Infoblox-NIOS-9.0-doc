---
title: "Performing an Automatic member Reboot"
source: "/space/nios90/843481153"
pageId: "843481153"
---
You can perform an automatic member reboot for the Grid Manager and Grid Members. Automatic member reboot offers multiple options to recover NIOS nodes from dataplane unresponsiveness. You can perform a Grid Manager reboot, send SNMP alerts, and email notifications.

The dataplane is a crucial component in modern architectures, responsible for processing data and task execution for distributed systems, as directed by the control plane.

To configure an automatic member reboot:

1. From the **Infoblox Grid** tab, select the **Grid Manager** tab -&gt; click **Grid Properties** -&gt; **Edit** from the Toolbar.  
   From the **Infoblox** **Grid** tab, select the **Grid Manager** tab -&gt; **Members** tab -&gt; Select the member -&gt; click the Action icon and click **Edit**.
2. In *Grid Properties Editor (for Grid) *or* Grid Member Properties Editor* (for members), click **Monitoring** -&gt; **Advanced** tab.
3. In the **AUTOMATIC MEMBER REBOOT **option, select from any of the following options:
   
   - Select the **Immediate reboot** radio button to reboot the member immediately.
   - Select the **Never Reboot (Not recommended) **radio button, if you do not wish to reboot the member.
   - Select the **Reboot after **radio button, and enter the time interval in minutes after which the member is rebooted.
   - Select the **Pause reboot **checkbox to pause the member reboot.
   - In the **DCA bypass mode after reboot failures **field**, **enter the value for the number of reboot failures caused by dataplane unresponsiveness. If the cores do not recover after multiple reboots, the DCA bypass mode is enabled, and all incoming queries are forwarded to BIND.
4. Click **Save & Close**.
