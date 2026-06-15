---
title: "Configuring IP Blocks and IP Block Groups"
source: "/space/nios90/280791592"
pageId: "280791592"
---
You can configure IP addresses, subnets, or a mix of multiple IP addresses and subnets into IP blocks, and then assign them to IP block groups for monitoring and tracking queries made to specific IP blocks. For information about adding IP addresses, see Adding IP Blocks below. You can also configure as many groups as necessary and assign them to specific clients. Note that assigning more IP block groups results in monitoring more queries, which may affect the performance of the reporting server. You can generate a report to monitor queries made to these user-defined IP block groups or IP blocks. For information about DNS Query Trend per IP Block Group, see *[Predefined Dashboards](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280758557)*.  
Guidelines while configuring IP blocks:

- You cannot configure arbitrary IP address ranges, such as 192.168.0.1 to 192.168.0.100 as an IP block.
- You cannot add or modify an IP block that overlaps with another IP block in a different group. However, you can add an IP block that overlaps with another IP block in the same IP block group.

> **warning**
>
> **Note**
> 
> The appliance restarts the DNS service after you assign or unassign an IP block group at the Grid or member level. Also, the appliance restarts the DNS service when you modify or delete an IP address or IP block group assigned to the Grid or member or when you add, modify, or delete an IP block in such IP block groups.



You can do the following in the Groups panel, as described in the following sections:

- Add IP block groups.
- Modify IP block groups.
- Add IP block.
- Modify IP blocks.
- Delete IP block groups and IP blocks.
- Print IP block groups and IP blocks.
- Export IP block groups and IP blocks.

In addition, you can also do the following:

- Use filters or the **Go**** to** function to navigate to a specific group. You can also create quick filters to save frequently used filter criteria. For information about how to use quick filters, see *[Finding and Restoring Data](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280401588)*.
- Use Global Search to search for IP block groups and IP blocks. For information about Global Search, see *[About the Grid Manager Interface](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/500861569)*.
- Use Smart Folders to organize IP block groups and IP blocks. For information, see *[Smart Folders](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280757969)*.
- Import and export groups in CSV format. For more information about CSV import feature, see *[Importing and Exporting Data using CSV Import](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90&title=Importing%20and%20Exporting%20Data%20using%20%20CSV%20Import&linkCreation=true&fromPageId=280791592)*.

# Adding IP Block Groups

To add a new group:

1. From the **Administration** tab, select the **Reporting** tab -> *Group* -> Add.   
   or  
   From the **Administration** tab, select the **Reporting** tab, expand the Toolbar and click **Add** -> IP Block Group.
2. In the *Add* *IP* *Block* *Group* wizard, complete the following:
   
   - **Name**: Enter the name of the group.
   - **Comment**: Enter useful information about the group.
3. Do one of the following:
   
   - Click **Save** **&** **Close** to add the IP block group and close the wizard.
   - Click **Save** **&** **Edit** to add the IP block group and launch the editor. You can edit the details.
   - Click **Save** **&** **New** to add the IP block group and launch the wizard again to add another group.
   - Click **Save** **&** **Open** to add the IP block group and open the IP block group.

# Modifying IP Block Groups

1. From the **Administration** tab, select the **Reporting** tab -> *Group* -> Edit.
2. In the **General** tab of the *IP* *Block* *Group* editor, you can modify the group name and comment.
3. Click **Save** **&** **Close** to save the configuration.

> **warning**
>
> **Note**
> 
> You can perform inline editing by double-clicking the row of data that you want to modify. The appliance displays the inline editing editor in the selected row. Click **Save** after modifying the data.

# Adding IP Blocks

In a group, you can add as many subnets/IP addresses as necessary. Note that adding more IP addresses results in monitoring more queries, which may affect the performance of the reporting server.

1. From the **Administration** tab, select the **Reporting** tab -> *Group* -> Add.   
   or  
   From the **Administration** tab, select the **Reporting** tab, expand the Toolbar and click **Add** -> IP Block.
2. In the *Add* *IP* *Block* wizard, complete the following:
   
   - **Group**: Click **Select** to select a group. When there are multiple groups, Grid Manager displays the *Group* *Selector* dialog box to select a group. Click a group name in the dialog box. You can use filters or the Go to function to narrow down the list.
   - **Address**: Enter the source IPv4/IPv6 addresses or the IPv4/IPv6 subnets.
   - **Comment**: Enter useful information about the IP block.
3. Do one of the following:
   
   - Click **Save** **&** **Edit** to add an IP address or IP block and launch the editor. You can edit the details.
   - Click **Save** **&** **New** to add an IP address or IP block and launch the wizard again to add another IP block.
   - Click **Save** **&** **Close** to add an IP address or IP block and close the wizard.

# Modifying IP Blocks

1. From the **Administration** tab, select the **Reporting** tab -> *Group.*
2. Select an IP address or IP block you want to modify and click the Edit icon.
3. In the **General** tab of the *IP* *Block* editor, modify the IP address or comment.
4. Click **Save** to save the configuration.

> **warning**
>
> **Note**
> 
> You can modify description by using inline editing. Double-click the row that you want to modify, the appliance displays the inline editing editor in the selected row. Click **Save** after modifying comment. You cannot modify IP address using inline editing editor.



# Deleting IP Block Groups and IP Blocks

1. For IP block groups: From the **Administration** tab, select the **Reporting** tab -> *Group.*
2. For IP blocks: From the **Administration** tab, select the **Reporting** tab -> *Group* -> *IP* *block*.
3. Click the Delete icon.
4. In the *Delete* *Confirmation* dialog box, click **Yes**.

# Exporting IP Block Groups and IP Blocks

You can export displayed data or you can export the group list in CSV (comma separated value) format. Exporting group lists or group data may take a few moments based on the amount of exported data.  
To export displayed data:

1. For IP block groups: From the **Administration** tab, select the **Reporting** tab -> *Group.*
2. For IP blocks: From the **Administration** tab, select the **Reporting** tab -> *Group* -> *IP* *block.*
3. From the **Export** drop-down menu, select **Export** **visible** **data**. For more information on how to export, see *[Importing and Exporting Data using CSV Import](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90&title=Importing%20and%20Exporting%20Data%20using%20%20CSV%20Import&linkCreation=true&fromPageId=280791592)*.

To export all data to a CSV file:

1. For IP block groups: From the **Administration** tab, select the **Reporting** tab -> *Group.*  
   For IP blocks: From the **Administration** tab, select the **Reporting** tab -> *Group* -> *IP* *block*.
2. From the Export drop-down menu, select **Export** **data** **in** **Infoblox** **CSV** **Import** **format**. For more information on how to export, see *[Importing and Exporting Data using CSV Import.](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90&title=Importing%20and%20Exporting%20Data%20using%20%20CSV%20Import&linkCreation=true&fromPageId=280791592)*

# Printing IP Block Groups and IP Blocks

1. For IP block groups: From the **Administration** tab, select the **Reporting** tab -> *Group*. For IP blocks: From the **Administration** tab, select the **Reporting** tab -> *Group* -> *IP* *block.*
2. Click the Print icon. For more information on how to print from Grid Manager, see *[About the Grid Manager Interface](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/500861569)*.
