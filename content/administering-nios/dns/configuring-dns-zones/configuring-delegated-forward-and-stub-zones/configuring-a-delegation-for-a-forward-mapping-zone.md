---
title: "Configuring a Delegation for a Forward-Mapping Zone"
source: "/space/nios90/1432716273"
pageId: "1432716273"
---
To create a delegation for a forward-mapping zone:

1. From the **Data Management** tab, select the **DNS** tab -> **Zones** tab.
2. Click the parent zone to open it.  
   Grid Manager displays the **Records** and **Subzones** tabs of the zone.
3. From the **Subzones** tab, click the Add icon -> **Zone** -> **Add Delegation**.
4. In the *Add Delegation* wizard, specify the following:
   
   - **Name:** This field displays a dot followed by the domain name of the current zone. Enter one or more labels before the dot to specify the domain name of the subzone.
   - **DNS View:** This field displays only when there is more than one DNS view in the network view. Displays the DNS view of the current zone.
   - **Comment:** Optionally, enter additional text about the zone.
   - Disable: Click this checkbox to temporarily disable this zone. For information, see [*Enabling and Disabling Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763205). Note that disabling a zone may take a longer time to complete depending on the size of the data.
   - **Lock**: Click this checkbox to lock the zone so that you can make changes to it, and also prevent others from making conflicting changes. For information, see [*Locking and Unlocking Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763205).
   - The **Sync to MGM** is used for synchronizing the selected zone from the managed Grid to the Multi-Grid Master and is available only on the managed Grid when it remains joined with the Multi-Grid Master. Select one of the following from the **Sync to MGM** drop-down list:
     
     - **Use Inherited Setting**: ** **Select this to inherit synchronization settings from the parent level, i.e. the DNS view.
     - **Yes**: Select this to enable synchronization of zones between the managed Grid and Multi-Grid Master.
     - **No**: Select this to disable synchronization of zones between the managed Grid and Multi-Grid Master.
       
       **Note: **  If you have selected **No** at the parent level i.e DNS view (disabled synchronization) and if you try to select **Yes** when adding a zone, the appliance returns an error. This means that you cannot override the settings at the child level if you have already restricted synchronization at the parent level.
5. Click **Next** to assign a delegation name server group or define the name servers for the zone. Select one of the following:
   
   - **Use this nameserver group**: Select this to assign a delegation NS group for the delegated zone. You can select the delegation NS group from the drop-down list.
   - **Use this set of nameservers**: Select this to define name servers for the delegated zone. In the *Name Servers* panel, click the Add icon and specify the following information**:**
     
     - **Name:** Enter the name of a remote name server to which you want the local server to redirect queries for zone data. This is a name server that is authoritative for the delegated zone.
     - **Address:** Enter the IP address of the delegated server.
   
   For information about delegation NS group, see [*Using Delegation Name Server Groups*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272489).
6. Save the configuration and click **Restart** if it appears at the top of the screen, or click **Next** to define extensible attributes as described in [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)*.* or  
   Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666).

> **warning**
>
> Note
> 
> The DNS server resolves the FQDN of the delegated name server and does not use the IP address that you specify when assigning the delegated name servers.
