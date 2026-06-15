---
title: "Managing RPZs"
source: "/space/nios90/280402532"
pageId: "280402532"
---
You can manage RPZs that you defined earlier and modify their information. You can perform the following:

*[toc]*

# Viewing RPZs

You can view the list of RPZs, local, feed, or FireEye integrated RPZs, which are currently listed in the Grid. To view RPZs, complete the following:

1. From the **Data** **Management** tab -&gt; **DNS** tab -&gt; **Response** **Policy** **Zones** tab.
2. Grid Manager displays the following:
   
   - **Order**: Displays the order of RPZs. The order value is empty if you do not assign a primary name server when configuring a local RPZ, or if the local RPZ or the service is disabled.
   - **Name**: Displays the name of the RPZs. Click the RPZ link to view the following details:
     
     - **Name** **or** **Address:** Displays the domain name or the IP address.
     - **Policy**: Defines the policy defined for the corresponding domain name or IP address.
     - **Data**: Displays the target data of the rule.
     - **Comment**: Displays the comment specified when an RPZ is defined.
     - **Disabled**: Displays **Yes** if the RPZ rule is disabled.
     - **Site**: Displays extensible attributes that are associated with the domain name or IP address.
   - **Type**: Displays the type of RPZs, that is, **Local**, **Feed**, or **FireEye**.
   - **Primary** **Name** **Server**: Displays the primary name server that is associated with an RPZ.
   - **Last** **Updated:** Displays the last updated time. For RPZ feed, it indicates if the RPZ feed has stalled and when the last zone transfer happened. For a local and FireEye integrated RPZ, it indicates the last time the zone or data was modified.
   - The last updated time is empty, if:
     
     - A local RPZ is not associated with a primary Grid name server.
     - A zone, either a local RPZ or an RPZ feed, is not enabled.
     - An inbound zone transfer has not occurred for an RPZ feed.
     - Member's DNS service is disabled.
   - **Comment**: Displays the comment recorded when creating the zone. You can double-click on a row to edit the comment. Click **Save** after modification.  
       
     For FireEye integrated RPZs, this column displays the comment recorded when creating the FireEye integrated RPZ. The rules that are created from the FireEye alerts will have alert information in this column. This differentiates between FireEye alert created rules and user created rules. You can double-click on a row to edit the comment. Click **Save** after modification. Infoblox recommends that you do not modify any internal objects. For example, the **Comment** column has alert related information, if you modify the data, then the actual alert data will be compromised.
   - **Disabled**: Displays **Yes** if the RPZ is disabled. Otherwise, this field displays **No**.
   - **Locked**: Displays **Yes** when a zone is locked by an admin, and displays **No** when the zone is unlocked.
   - **Site**: Displays the values that were entered for this pre-defined attribute. You can double-click on a row to edit the Site. Click **Save** after modification.  
       
     You can also perform the following:
   - Use **Quick Filter** and the **Go to** function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the **Go to** field and select the object from the possible matches. Select a value from the drop-down list to filter the RPZs.
     
     - **None:** Select this to display all the RPZs that you have configured.
     - **All Local Response Policy Zones:** Select this to list only the local RPZs.
     - **All Feed Response Policy Zones:** Select this to list only the RPZ feeds.
     - **All Fire Eye Response Policy Zones**: Select this to list only the FireEye RPZs.
   - Create a quick filter to save frequently used filter criteria. For more information, see [*Using Quick Filters*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/finding-and-restoring-data).
   - You can create a bookmark for the RPZs. For more information, see [*Using Bookmarks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/finding-and-restoring-data).
   - You can modify some of the data in the table. Double-click a row of data, and either edit the data in the field or select an item from a drop-down list. Note that some fields are read-only. For more information, see [*Modifying Data in Tables*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/about-the-grid-manager-interface).
   - To export the list of RPZs to a .csv file, click the *Export* icon. For more information, see [*Importing and Exporting Data using CSV Import*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/importing-and-exporting-data-using-csv-import).
   - Click the *Print* icon to print the list of RPZs. For more information, see [*Printing from Grid Manager*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/about-the-grid-manager-interface).

# Modifying RPZs

You can modify the name servers or name server groups, update policy override details and permissions, or edit extensible attributes that are associated with an RPZ.   
  
To modify RPZs, complete the following:

1. From the **Data** **Management** tab -&gt; **DNS** tab -&gt; **Response** **Policy** **Zones** tab -&gt; *Response* *Policy* *Zone* checkbox and then click the *Edit* icon.
2. The RPZ editor provides the following tabs from which you can modify data:
   
   - **General: **In this tab, you can change the information you previously entered through the wizard, as described in [*Configuring Local RPZs*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/configuring-local-rpzs). For FireEye integrated RPZs, you can update the policy type, comments, enable or disable, or lock the zone. For more information, see [*Configuring FireEye RPZs*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/about-fireeye-integrated-rpzs).
   - For a FireEye integrated RPZ, the **FireEye** tab is displayed. This tab is displayed only after you install the Security Ecosystem license. You can modify or override the rule mapping for FireEye alerts or APT events. For more information, see [*Configuring FireEye RPZs*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/about-fireeye-integrated-rpzs).
   - You can also enter or edit information in the **Name** **Servers**, **Extensible** **Attributes**, **Settings**, and **Permissions** tabs. For more information, see [*Modifying, Disabling, and Deleting Host and Resource Records*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-resource-records/managing-resource-records).
   - **Logging:** In this tab, you can enable or disable logging at the zone level for RPZ zones. You can **Override the** **RPZ logging **option only** **if the **RPZ/Security log** is enabled at the Grid or member level. The values are inherited from the Grid or member by default. To view RPZ logs at the Grid level, see [*Setting DNS Logging Categories*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/using-a-syslog-server). Selecting the **Override** option allows you to disable RPZ logging for the particular zone. However, if the **RPZ logging** is not enabled at the Grid or member level, you cannot **Override** or **Inherit** logging at the zone level.

3. Save the configuration and click **Restart** if it appears at the top of the screen.

# Reordering RPZs

You can change the order of RPZs, local feeds, or FireEye integrated RPZs, in each view. When you add a new local RPZ, it is added to the top of the zone list and an RPZ feed is automatically added to the bottom of the zone list. You can change the order of each through the re-ordering process.  
  
The policy override works based on zone ordering. The zone at the top has the highest priority and it overrides the lower priority zone. To override an RPZ feed with a local RPZ, place the local feed at the top before an RPZ feed. You cannot reorder zones if they are disabled or do not have any primary name server assigned.  
  
To reorder RPZs, complete the following:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Response** **Policy** **Zones** tab, click **Order** **Response** **Policy** **Zones** from the **Toolbar**.
2. The following are displayed in the *Order* *Response* *Policy* *Zones* wizard:
   
   - **Ordering**: Use the up and down arrows to move the RPZ to the desired order.
   - **Response** **Policy** **Zone:** Displays all the RPZs.
   - **Priority**: Displays the order of RPZs.
3. Click **OK** to save the changes.

# Locking and Unlocking RPZs

You can lock an RPZ so only you can make changes to it, which prevents others from making conflicting changes. When you lock an RPZ, the Grid Manager displays LOCKED beside the RPZ. When other administrators try to make changes to a locked RPZ, the system displays a warning message that the RPZ is locked and the name of the admin who locked the RPZ.  
  
Only a superuser or the administrator who locked the RPZ can unlock it. RPZ locks do not expire and you must manually unlock a locked RPZ.  
  
To lock or unlock RPZs, complete the following:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Response** **Policy** **Zones** tab, select the *Response* *Policy* *Zone* -&gt; *Ruleset.*
2. You can do the following:
   
   - **To** **Lock:** Click the *Lock* icon to lock the zone.
   - **To Unlock:** Click the *Unlock* icon to unlock the zone.

# Deleting RPZs

You can delete RPZs or schedule them for deletion at a later date. The NIOS appliance moves the deleted RPZs to the Recycle Bin if enabled. When you restore the zone from the Recycle Bin, it will be restored to the bottom of the zone list.  
  
To delete RPZs, complete the following:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Response** **Policy** **Zones** tab -&gt; *Response* *Policy* *Zone* checkbox.
2. To delete an RPZ immediately, click the *Delete* icon, and then click **Yes** to confirm the delete request.
3. To schedule the deletion, click **Schedule** **Deletion** and in the *Schedule* *Change* panel, enter a date, time, and time zone. For more information, see [*Scheduling Deletions*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-new-ipam-dhcp-objects-and-associated-).

The Grid Manager moves the RPZ to the Recycle Bin, from which you can restore it or permanently delete it.
