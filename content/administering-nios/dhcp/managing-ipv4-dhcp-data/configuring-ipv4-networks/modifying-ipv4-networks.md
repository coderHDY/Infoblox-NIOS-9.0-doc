---
title: "Modifying IPv4 Networks"
source: "/space/nios90/1432748425"
pageId: "1432748425"
---
You can modify existing network settings and override the Grid or member DHCP properties, with the exception of the network address and netmask.

To modify an IPv4 network, perform the following:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** section -> *network* checkbox, and then click the Edit icon.
   
   Or
   
   From the **Data** **Management** tab, select the **IPAM** tab -> *network* checkbox, and then click the Edit icon.
2. The *IPv4* *Network* editor contains the following basic tabs from which you can modify data:
   
   - **Genera** **Basic**: You can modify the following fields:
     
     - **Comment**: The information you entered for the network.
     - **Disabled**: This field is displayed only if the selected network is a network without a child network under it. You can disable and enable existing networks instead of removing them from the database, if the selected network does not have a child subnet. This feature is especially helpful when you have to move or repair the server for a particular network. Note that disabling an IPv4 network may take a longer time to complete depending on the size of the data.  
       **Restricting** **synchronization** **of** **a** **network**
   - **Disable** **sync** **to** **MGM**: Select this checkbox to disable synchronization of a network from the managed Grid to the Multi-Grid Master. This checkbox is available only on the managed Grid when it remains joined with the Multi-Grid Master.  
     When the Cloud Network Automation license is installed on the Grid Master, Grid Manager displays the following information in the **Cloud** section: **Cloud** **Usage**, **Owned** **By**, and **Delegated** **To**. You cannot modify these fields. For more information, see Viewing Networks below.
   - **Member** **Assignment**: Add or delete a Grid member that provides DHCP services for this network. For information, see Adding IPv4Networks above*.*
   - **IPv4 DHCP Options**: Keep the inherited DHCP properties or override them and enter unique settings for the network. For information, see [*Defining IPv4 DHCP Options*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1331332118).
   - **Discovery**: Checking the **Enable Discovery** checkbox informs NIOS to begin discovering the network after you click **Save and Close**. You manage discovery polling settings local to each network from this page. For a complete overview of features on this page, see [*Discovering Devices and Networks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666200)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666200)and its subsections.
   - **Discovery Exclusions**: IP Addresses and IP ranges can be locally excluded from discovery by clicking the Add icon and selecting **Add IP Address** or **Add IP Range**. These IP addresses or IP ranges are selected from within the chosen network. For related information, see [*Excluding IP Addresses from Discovery*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406210)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406210)and its subsections.
   - **Discovery** **Blackout**: Define extended time periods and regularly scheduled times when discovery and/or Port Configuration tasks will not take place on a network. Editing a network under DHCP, blackout settings apply only to the specified network. You also specify the scheduled time when the blackout period begins, and the duration of the blackout period. By default, the network inherits its discovery blackout settings from the Grid level. For related information, see [*Defining Blackout Periods*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406071)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406071)and its subsections.
     
     
     
     Note that discovery blackout settings also can be defined for DHCP ranges.
   - **RIR** **Registration**: Modify RIR network information. This tab appears only when support for RIR updates is enabled. For information, see [*Modifying RIR Network Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666942).
   - **Extensible Attributes**: Add and delete extensible attributes that are associated with a specific network. You can also modify the values of the extensible attributes. For information, see [*About Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215) You can edit values of inheritable extensible attributes by -clicking on the respective column. If an extensible attribute has an inherited value, then the cell is highlighted in blue when you perform inline editing. The *Descendant Actions* dialog box is displayed when you click **Save**. For information, see [*Managing Inheritable Extensible Attributes at the Parent and Descendant Level*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215). If you delete the value of an inheritable extensible attribute at the parent level, you can choose to preserve the descendant value or remove it. For information, see [*Deleting Inheritable Extensible Attributes Associated with Parent Objects*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
   - **Permissions**: This tab appears only if you belong to a superuser admin group. For information, see* *[*Managing Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424)* *[*Managing Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424).
3. Optionally, click **Toggle Advanced Mode** to display the following tabs from which you can modify advanced data.
   
   - **General Advanced***:* You can associate zones with a network. For information, see [*Associating Networks with Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761881/Configuring+DHCP+IPv4+and+IPv6+Common+Properties#Associating-Networks-with-Zones)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761881/Configuring+DHCP+IPv4+and+IPv6+Common+Properties#bookmark2298)
   - **IPv4 DDNS**: Keep the inherited DDNS settings or override them and enter unique settings for the network. Note that you must click **Override** and select **Enable DDNS updates** for the DDNS settings you configure in this tab to take effect. For information, see [*Enabling DDNS for IPv4 and IPv6 DHCP Clients*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762554).
   - **IPv4 BOOTP/PXE**: Keep the inherited BOOTP properties or override them and enter unique settings for the network. For information, see [Configuring IPv4 BOOTP and PXE Properties](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663785).
   - **Filters**: You can keep the inherited IPv4 logic filters or override them and add a new IPv4 logic filter. For information, see [*Applying Filters to DHCP Objects*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270743)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270743)
   - **IPv4 DHCP Thresholds**: Keep the inherited thresholds settings or override them and enter unique settings for the network. For information, see [*Configuring*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663713)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663713)[*Thresholds*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663713)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663713)[*for*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663713)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663713)[*DHCP*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663713)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663713)[*Ranges*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663713).
4. Save the configuration or click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666).
