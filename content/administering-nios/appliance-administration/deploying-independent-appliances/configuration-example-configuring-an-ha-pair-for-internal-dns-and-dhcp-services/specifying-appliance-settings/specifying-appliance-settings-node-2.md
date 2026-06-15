---
title: "Specifying Appliance Settings: Node 2"
source: "/space/nios90/1343717480"
pageId: "1343717480"
---
1. From the **System** tab, select the **System** **Manager** tab, and then click **System** **Properties** -> **Setup** **Wizard** from the Toolbar.
2. In the first screen of the *NIOS* *Setup* wizard, complete the following:
   
   - **Type** **of** **Network** **Connectivity**: Select **IPv4** as the communication protocol from the drop-down list.
   - Select **Configuring** **an** **HA** **pair** and click **Yes** for configuring node 2 of the HA pair.
3. In the *NIOS* *Startup* wizard, select **Configuring** **an** **HA** **pair** to configure an independent HA pair. Click **No** for configuring node 2 of the HA pair.
4. Click **Next**, and then complete the following to configure network settings:
   
   - **HA** **Virtual** **IP** **address**: Enter **10.1.4.10**.
   - **HA** **Pair** **Name**: Use the default name **Infoblox**.
   - **Shared** **Secret**: Enter **37eeT1d**.
   - **Show** **Password**: Click this to display the shared secret.
5. Click **Next**, and then complete the following to set properties for the second appliance:
   
   - **IP** **Address**: Enter **10.1.4.8**.
   - **Subnet** **Mask**: Enter **255.255.255.0**.
   - **Gateway**: Enter **10.1.4.1**.
6. Click **Next** to view the summary of the configuration. Review the information and verify that it is correct. You can change the information you entered by clicking **Previous** to go back to a previous step.
7. Click **Finish**.

The setup of the HA pair is complete. From now on, when you make an HTTPS connection to the HA pair, use the VIP address 10.1.4.10.
