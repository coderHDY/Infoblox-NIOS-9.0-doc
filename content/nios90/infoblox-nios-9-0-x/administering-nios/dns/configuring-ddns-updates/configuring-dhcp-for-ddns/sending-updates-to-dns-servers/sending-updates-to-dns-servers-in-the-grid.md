---
title: "Sending Updates to DNS Servers in the Grid"
source: "/space/nios90/1480917103"
pageId: "1480917103"
---
You must specify the DNS view to be updated for each network view.  
To configure the DHCP server to send updates to DNS servers in the same Grid:

1. If there are multiple network views in the Grid, select a network view.
2. From the **Data Management** tab, select the **DHCP** tab, and then click **Configure DDNS** from the Toolbar.
3. In the *DDNS* *Properties* editor, complete the following:
   
   - **DNS** **View**: If a network view has more than one DNS view, this field lists the associated DNS views. From the drop-down list, select the DNS view to which the DHCP server sends DDNS updates. Otherwise, the appliance uses the default DNS view.
4. Save the configuration and click **Restart** if it appears at the top of the screen.

The appliance sends DDNS updates to the appropriate zones in the selected DNS view. Note that you cannot delete a DNS view that has been selected for DDNS updates. By default, the DHCP server sends DDNS updates to zones using the domain name that you define for DHCP objects, such as networks and DHCP ranges.
