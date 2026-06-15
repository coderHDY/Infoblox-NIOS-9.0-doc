---
title: "Removing Licenses"
source: "/space/nios90/1495630130"
pageId: "1495630130"
---
You can remove licenses and reset a NIOS appliance to its factory default settings. For example, if you have a NIOS appliance running the DNSone package with the Grid upgrade, but you want to use it as an independent appliance, you can remove the Grid license. Infoblox recommends that you back up licenses before removing them, in case you decide to re-install them at a future time.  
When you remove a Grid-wide license, the licensed feature is deactivated on all the members that are affected by the license. On the other hand, when you remove a Grid member from the Grid, the member no longer has the ability to run the feature associated with the Grid-wide license now that is it not part of the Grid.

> **warning**
>
> **Note**
> 
> - Exercise caution when removing licenses; you may render an appliance unusable by removing the wrong license. Other feature sets may be affected once you remove a license; for example, removing licensing for DNS and DHCP services will also disable task packs on the **NIOS** **Dashboards** **–>** **Tasks** page.
> - Infoblox does not recommend deleting CNA temporary licenses as it may result in unexpected behavior. For example, after deleting a CNA temporary license, running a vRA workflow to create a reservation on a vNIOS setup followed by a vDiscovery job, can result in a VM affiliation conflict. To clear the conflict, as a workaround, you must install a CNA permanent license, and then delete it. For assistance, contact the Infoblox Technical Support.

To remove an active license:

1. From the **Infoblox Grid** tab, select the **Licenses** tab -> **Member** tab or **Grid Wide** tab.
2. Select the license and click the Delete icon.  
   Check the license that you are about to remove. Note that removing the wrong license can render an appliance unusable.
3. Click **Yes** when the confirmation dialog appears.
4. Close the browser window and log in to the Infoblox GUI.
