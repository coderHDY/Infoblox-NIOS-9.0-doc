---
title: "Transferring NIOS Virtual Licenses"
source: "/space/nios90/684622065"
pageId: "684622065"
---
In a Grid, you can transfer the valid licenses of a NIOS virtual appliance from one host server to another without going through the RMA (returned materials authorization) process. You can also transfer licenses from an independent NIOS virtual appliance to another. Before you transfer licenses, obtain new license keys based on the new appliance that you intend to replace the existing one with. The new licenses will replace the original ones.

> **warning**
>
> **Note**
> 
> - When you replace licenses on NIOS virtual appliances, service interruptions can occur.
> - Once licenses are removed from a NIOS virtual appliance, the appliance can no longer join the Grid. Remove the appliance from the Grid and if needed, use it as a standalone appliance.

Complete the following steps to transfer NIOS virtual licenses from one NIOS virtual appliance to another:

1. Obtain replacement license keys from Infoblox.  
   Based on the version of NIOS, see [*Managing Licenses in NIOS 9.0.0*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-licenses-in-nios-9-0-0) or [*Managing Licenses in NIOS 9.0.1 and Later*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-licenses-in-nios-9-0-1-and-later) for more information.
2. Install the new licenses on the new NIOS virtual appliance*.*  
   or  
   As a best practice to minimize service downtime, you can set up an HA pair and force a failover during a license transfer.
3. Remove the original NIOS virtual appliance from the Grid. You can skip this step for independent NIOS virtual appliances.
4. Shut down the original NIOS virtual appliance.
5. Verify that all licenses are now current.
   
   - To verify, check its status on the Dashboard and on the **Infoblox** **Grid** -&gt; **Grid** **Manager **-&gt; **Members** tab.
   - Though you can transfer licenses among NIOS virtual appliances more than once, Grid Manager displays information about the first license transfer only.

According to the version of vNIOS and the appliance model, see [*Managing Licenses in NIOS 9.0.0*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-licenses-in-nios-9-0-0) and/or [*Managing Licenses in NIOS 9.0.1 and Later*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-licenses-in-nios-9-0-1-and-later)* *for more information about managing and viewing licenses. You can also use the CLI command *show license revoked* to view information about the replaced licenses.

# Configuring HA Pairs for License Transfers

To minimize service downtime during a NIOS virtual license transfer, you can set up an HA pair and force a failover during a license transfer:

1. Create an HA member.  
   Configure the existing NIOS virtual appliance as the active node. Install temporary licenses on the new NIOS virtual appliance and configure it as the passive node, as described in *Configuring NIOS Virtual Appliances as Grid Members*. For more information about how to configure an HA pair, refer to the [*Infoblox NIOS Documentation*](https://docs.infoblox.com/).   
   Note that if you configure an HA pair with appliances running on NIOS versions earlier than 8.6.x, both nodes in the HA pair must be NIOS virtual instances. You cannot configure a physical NIOS appliance and a NIOS virtual instance in an HA pair in versions earlier than 8.6.x.
2. Provision the HA member on the Grid Master and rejoin the HA member to the Grid so that the passive node can synchronize with the Grid Master. For information, see *Provisioning NIOS Virtual Members on the Grid Master*.
3. Reboot the active node to force a failover on the HA pair. The new NIOS virtual appliance now becomes the active node.
4. Sign in to the Grid Master GUI.
5. From the **Infoblox Grid** -&gt; **Licenses** tab, click the Add icon and complete the following steps to add the new license keys to the HA pair:
   
   - **Upload** **License** **File**: Click **Select** **File** and navigate to the new license file you obtained from Infoblox.
   - **Paste** **License(s)**: Paste the new license keys in this text field. You must paste the entire string in CSV format. Note that the new license key is longer because it contains the hardware ID of the existing NIOS virtual appliance.  
     You can also use the CLI command `set license` to install the new licenses. For information, refer to the *Infoblox CLI Guide*.
6. Click **Save** **License(s)**. Grid Manager displays a confirmation dialog box listing information (license type, license string, and hardware ID) about the member you want to replace and asks if you want to continue. Click **OK** to install the licenses on the new member, or click **Cancel** to cancel the operation.  
   The new licenses automatically replace the old ones, and the passive node is evicted from the Grid.
7. Proceed to remove the replaced appliance from the Grid.

To remove the replaced appliance from the Grid:

1. From the **Infoblox** **Grid** -&gt; **Grid** **Manager** -&gt; **Members** tab, select the appliance whose licenses were removed. Grid Manager displays a license violation warning for this appliance.
2. Click the **Delete** icon to remove the appliance from the Grid.  
   You can also sign in to the NIOS virtual appliance whose licenses are being replaced, and then use the CLI command `reset licenses all` to reset the licenses and remove the appliance from the Grid.
