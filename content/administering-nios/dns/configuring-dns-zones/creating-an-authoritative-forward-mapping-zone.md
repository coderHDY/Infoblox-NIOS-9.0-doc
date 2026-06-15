---
title: "Creating an Authoritative Forward-Mapping Zone"
source: "/space/nios90/280405638"
pageId: "280405638"
---
An authoritative forward-mapping zone is an area of domain name space for which one or more Grid members have the responsibility to respond authoritatively to name-to-address queries.

> **warning**
>
> ### Note
> 
> A single forward-mapping zone can map names to both IPv4 and IPv6 addresses.

To create an authoritative forward-mapping zone:

1. From the **Data Management** tab, select the **DNS** tab, expand the Toolbar, and click **Add** -> **Zone** -> **Add Auth Zone**.
2. In the *Add Authoritative Zone* wizard, click **Add an authoritative forward-mapping zone** and click **Next**.
3. Specify the following:
   
   - **Name:** Enter the domain name for the zone. Omit the trailing period (" . ") that signifies the root zone. You can use IDNs as well. For information about IDNs, see [*Support for Internationalized Domain Names*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280661204)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280661204)
   - **DNS View:** This field displays only when there is more than one DNS view in the current network view. Select a DNS view from the drop-down list.
   - **Comment:** Enter a descriptive comment about the zone.
   - Disable: Click this checkbox to temporarily disable this zone. For information, see [*Enabling and Disabling Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763205). Note that disabling a zone may take a longer time to complete depending on the size of the data.
   - **Lock**: Click this checkbox to lock the zone so that you can make changes to it and prevent others from making conflicting changes. For information, see [*Locking and Unlocking Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763205).
   - The **Sync to MGM** drop-down list is available only on the managed Grid when it remains joined with the Multi-Grid Master. Select one of the following from the **Sync to MGM** drop-down list:
     
     - **Use Inherited Setting**: ** **Select this is to inherit synchronization settings from the parent level, which is the DNS view.
     - **Yes**: Select this to enable synchronization of zones between the managed Grid and Multi-Grid  
       Master.
     - **No**: Select this to disable synchronization of zones between the managed Grid and Multi-Grid  
       Master.
       
       **Note: **  If you have selected **No** at the parent level i.e DNS view (disabled synchronization) and if you try to select **Yes** when adding a zone, the appliance returns an error. This means that you cannot override the settings at the child level if you have already restricted synchronization at the parent level.
4. Save the configuration, or click **Next** to continue to the next steps in the wizard as follows:
   
   - Define the name servers for the zone. For information on specifying primary and secondary servers, see [ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[*Assigning*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[*Zone*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[*Authority*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[*to*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[*Name*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599)[*Servers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599). For information on specifying authoritative name server groups, see [*Using Authoritative Name Server Groups*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272489).
   - If you have assigned a Microsoft server as the primary server for the zone and if the zone is AD-integrated, you can configure a list of domain controllers that are allowed to add NS records to the zone. For information see, [*Configuring Domain Controller List*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763152).
   - Define extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
   
   or  
   Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666).
5. Click **Restart** if it appears at the top of the screen.

# Creating a Root Zone

The NIOS appliance allows you to create an internal root zone for your organization. When the appliance receives a query for DNS data that is not in its cache or authoritative data, it can query an internal root server after querying any specified forwarders. If you do not specify an internal root server and the appliance can access the Internet, it queries the Internet root servers. For information on root name server, see [*About Root Name Servers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405807).  
To create a root zone, create an authoritative forward-mapping zone as described in Creating an Authoritative Forward-Mapping Zone above and specify the following:

1. Enter a period (.) in the **Name** field.
2. Optionally, enter a comment.
3. Select a Grid member as the primary name server for the root zone.

Once created, the root zone automatically becomes the parent of all the zones under the root zone.
