---
title: "Setting SNMP and Email Notifications"
source: "/space/nios90/1406500950"
pageId: "1406500950"
---
You can specify the event types that trigger trap and email notifications. To set SNMP trap and email notifications:

1. Grid: From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab, and then select **Grid** **Properties** -> **Edit** from the Toolbar. Member: From the **Grid** tab, select the **Grid** **Manager** -> **Members** tab -> *member*, and then click the **Edit** icon.
2. In the *Grid* *Properties* or *Grid* *Member* *Properties* editor, click **Toggle** **Advanced** **Mode,** and then select the **Notification** tab. To override Grid settings, click **Override** in the *Grid* *Member* *Properties* editor.
3. Complete the following:
   
   - **Enable** **All** **SNMP** **Notifications:** Select this checkbox if you want the appliance to send SNMP notifications (traps) for all events to the configured trap receivers. This is selected by default. To send SNMP notifications for specific events to the configured trap receiver, select the checkbox for respective event type.  
     For information on configuring trap receivers, see  *Adding* *Trap* *Receivers* in this topic.
   - **Enable** **All** **Email** **Notifications:** Select this checkbox if you want the appliance to send email notifications (traps) for all events to the configured email recipients. This is deselected by default. To send email notifications for specific events to the configured email recipients, select the checkbox for each respective event type. For information on enabling email notifications and specifying recipients, see [*Notifying Administrators*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280408252).
   - Alternatively, you can select specific event types from the table, and specify whether you want the appliance to send SNMP Notifications and Email notifications for each type of event.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
