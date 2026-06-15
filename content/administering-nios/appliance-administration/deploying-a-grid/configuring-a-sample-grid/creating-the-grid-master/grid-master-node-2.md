---
title: "Grid Master – Node 2"
source: "/space/nios90/1340737626"
pageId: "1340737626"
---
1. By making a console connection to the appliance that you want to make Node 2 of the HA pair for the Grid Master, change the default network settings of its LAN1 port to the following:
   
   - **IP Address**: **10.0.1.8**
   - **Netmask**: **255.255.255.0**
   - **Gateway**: **10.0.1.1**
2. In the login window, type **10.0.1.8** in the **Hostname** field.
3. Log in using the default username and password, **admin** and **infoblox**.
4. From the **Infoblox Grid** tab, select the **Grid** **Manager** tab -> **Members** tab -> *member* checkbox.
5. Expand the Toolbar and click **Join** **Grid** and specify the following:
   
   - **Virtual** **IP** **of** **Grid** **Master**: **10.0.1.10**
   - **Grid** **Name:** Enter **corpxyz**
   - **Grid** **Shared** **Secret:** Enter **Mg1kW17d**
6. Confirm the configuration, and then on the last screen of the wizard, click **Finish**. The HTTPS session terminates, but the login window remains open.
7. In the login window, type **10.0.1.10** (the VIP address for the Grid Master) in the **Hostname** field.
8. Log in using the default username **admin** and the password **1n85w2IF**.
9. To check the status of the two nodes of the HA Grid Master, navigate to the **Grid** tab, select the **Grid** **Manager** -> **Members** tab. This panel lists the Grid members. Check the icon in the **Status** column of the Grid Master. The colors indicate the following:
   
   1. **Green**: The appliance has joined the Grid and is functioning properly.
   2. **Yellow**: The appliance is in the process of joining the Grid
   3. **Red**: The appliance has not joined the Grid.  
      You can also use the CLI command set network to join an appliance to a Grid. Check that the status indicators are all green in the *Detailed Status* panel.

During the joining process, an appliance passes through the following four phases:

1. **Offline**: The state when a Grid member—in this case, the second node of the HA pair composing the Grid Master—is not in contact with the active node of the master.
2. **Connecting**: The state when an appliance matching a member configuration contacts the master to join the Grid and negotiates secure communications and Grid membership.
3. **Synchronizing**: The master transmits its entire database to the member.
4. **Running**: The state when a member is in contact with the master and is functioning properly.

> **warning**
>
> **Note**
> 
> Depending on the network connection speed and the amount of data that the master needs to synchronize with the member, the process can take from several seconds to several minutes to complete.
