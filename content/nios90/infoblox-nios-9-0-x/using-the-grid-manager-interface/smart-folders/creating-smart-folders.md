---
title: "Creating Smart Folders"
source: "/space/nios90/280268325"
pageId: "280268325"
---
You can create personal smart folders in My Smart Folders. You can also create global folders to share among administrators in Global Smart Folders when you log in as a superuser account. Each time you access a smart folder, you obtain up-to-date information about the core network services data that match the filter criteria you set for the folder. You can also set Group By rules to group the filtered data by extensible attributes. Grid Manager displays a hierarchical view of the data using the Group By rules you define.

To create a smart folder:

1. Click the **Smart** **Folders** tab.
2. Click the **My** **Smart** **Folders** tab to create a personal smart folder.   
   or  
   If you logged in with a superuser account, click the **Global** **Smart** **Folders** tab to create a global smart folder.
3. Click **Create**.
4. In the *SmartFolder* data panel, complete the following:
   
   - **Name**: Enter the name of the smart folder.
   - **Comment**: Optionally, enter additional information about the smart folder.
   - In the first drop-down list, select a field as the filter. You can select a network view or a record type as the filter. Grid Manager highlights extensible attributes and Active Directory Sites in gray. You can also group the default data by adding a Group By rule without adding a filter.  
     Note that Infoblox strongly recommends that you use Type as the first criterion to improve system performance.
   - In the second drop-down list, select an operator for the filter.
   - Enter or select a value for the selected field and operator. Depending on the field and operator that you select, the field can be a text or an integer field. It can also be a drop-down list or a calendar widget. For example, if you select **Network/Zone/Range/Member** in the **Type** field, Grid Manager displays all the networks, zones, DHCP ranges, and members in the results table. The results table may display the name in its native characters if the name was originally entered as an IDN (Internationalized Domain Name). For example, the **Name** column in the results table displays 网络 , a zone name in Chinese.
   - Optionally, click **+** to add another filter. You can also click **Apply** to view the filtered data in the results table.
   - Optionally, select the **Group Results** checkbox to organize the filtered data. You can also disable a **Group By** filter by deselecting the checkbox.
   - From the Group by drop-down list, select an extensible attribute or an Active Directory Site by which you want to group the filtered data. For example, if you want to group the filtered data by building number, you can select **Building** from the drop-down list. To add additional Group By rules, click the **+** icon, and then select a field from the drop-down list. You can apply up to 10 Group By rules. You can also delete a rule by selecting the rule and clicking the **-** icon.
   - After you add all filter criteria and **Group By** rules, click **Apply**. Grid Manager displays the filtered data in the results table. Note that in the **Name** field, the appliance highlights disabled DHCP objects in gray. A DHCP object can be a DHCP range, fixed address, reservation, host configured for DHCP, or roaming host with an allocated IP address. If you select to include objects with no attribute values in the **Group By** rules, the appliance may take longer to process the results. You can also choose to display Active Directory Site values in the table.
5. Click **Save** to save the smart folder.
