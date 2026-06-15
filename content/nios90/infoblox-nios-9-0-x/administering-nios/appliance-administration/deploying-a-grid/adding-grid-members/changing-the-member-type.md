---
title: "Changing the Member Type"
source: "/space/nios90/1483702575"
pageId: "1483702575"
---
When you change the **Member** **Type** from *Infoblox* to *Virtual* *NIOS*, Infoblox displays an error indicating that the network port of a vNIOS member must be set to Automatic. If you encounter this error, follow the steps mentioned below to change the **Member** **Type** to **Virtual** **NIOS**:

1. From the **Infoblox Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab.
2. Expand the **Toolbar** and click **Add** -&gt; **Add** **Grid** **Member**.
3. In the *Add* *Grid* *Member* wizard, leave the **Member** **Type** as **Infoblox,** fill other details and click **Next**.
4. In the **Network** tab select **High** **Availability** **Pair**.
5. Change the port settings to **Automatic** for **Node1** **HA**.
6. Select **Standalone** **Member**.
7. Click **Previous** and change the **Member** **Type** to **Virtual NIOS**.
