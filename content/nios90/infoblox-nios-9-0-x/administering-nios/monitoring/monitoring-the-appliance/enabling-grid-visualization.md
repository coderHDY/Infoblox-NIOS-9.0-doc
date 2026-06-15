---
title: "Enabling Grid Visualization"
source: "/space/nios90/280662692"
pageId: "280662692"
---
To enable Grid visualization:

1. From the **Infoblox** **Grid** tab, select the **Grid ****Manager** tab -&gt; **Members** tab, and then click **Grid ****Properties** -&gt; **Edit** from the Toolbar.
2. In the *Grid **Properties* editor, click the **Advanced** tab.
3. Select the **Show ****Grid ****Visualization** checkbox.
4. Click **Save** to save the changes. The **Visualization** tab appears and displays a graphical representation of the Grid. This may take a long time depending on the number of members you have in the Grid. When you deselect this checkbox, you disable Grid visualization for all users.

# Grid Status

You can monitor the overall status of the Grid using the *Infoblox* *Grid* *Status* widget on the Dashboard.

You can also view the Infoblox Grid status from the** Grid** **Manager** tab. To view Grid status, from the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab. Grid Manger displays the overall Infoblox Grid status and status of all Grid services. The Infoblox Grid status represents the status of the most critical members or services in the Grid. When all Grid members are running properly, the overall Grid status is green. When one of the members has operational problems, the overall Grid status is red. Grid Manager lists all Grid members in the **Members** tab so you can identify which member has issues. For information, see *[Member Status](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/member-status)*.

In addition, the service bar below the Grid status lists the status of all licensed services on your Grid. This can include DHCP, DNS, Cloud-API, TFTP, HTTP (File Distribution), FTP, NTP, bloxTools, Captive Portal, DNS Accelerator, Reporting, Discovery and others, depending on the active licenses you have installed. When you click a service link, Grid Manager displays detailed information about the selected service running on all members. For information, see *[Monitoring Services](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/monitoring-services)*.

Grid Manager also provides icons you can use to edit Grid properties and bookmark the page.
