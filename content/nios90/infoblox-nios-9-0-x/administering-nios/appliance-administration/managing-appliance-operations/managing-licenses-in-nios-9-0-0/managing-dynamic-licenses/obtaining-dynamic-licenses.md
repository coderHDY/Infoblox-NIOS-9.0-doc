---
title: "Obtaining Dynamic Licenses"
source: "/space/nios90/1495237134"
pageId: "1495237134"
---
When you purchase licenses for specific features and services, you may deploy the licenses as dynamic licenses. License information is stored in a license file with the following information for each license: LSN-P (License Serial Number - Proxy), LK-P (License Key Proxy, LSN (License Serial Number) and LK (License Key). License keys are generated based on the LPC_UID (License Pool Container Unique ID) of the Grid Master. You must first obtain the LPC_UID of the Grid, also called the Grid license UID from the Grid Master and then contact Infoblox Technical Support to obtain dynamic licenses.  
Infoblox stores information related to dynamic licenses in a license file. When you install dynamic licenses, you must upload the entire license file to the Grid Master, as described in the *Adding Permanent or Subscription Licenses* section.  
To obtain dynamic licenses:

1. Log in to Grid Manager and obtain the LPC_UID from the Grid Master:
   
   1. From the **Infoblox Grid** tab, select the **Licenses** tab -&gt; **Pool** tab, and then click **Export** **All** **Licenses** in the Toolbar.
   2. Save the CSV file.
   3. Open the CSV file. The LPC_UID is displayed in the **SIGNATURE** row. Copy this ID. You will need this ID when contacting Infoblox Technical Support.
      
      Note that you can also use the show `license_pool_container` CLI command to display the `LPC_UID`.
2. Contact Infoblox Technical Support or your Infoblox representative to obtain the dynamic licenses.
