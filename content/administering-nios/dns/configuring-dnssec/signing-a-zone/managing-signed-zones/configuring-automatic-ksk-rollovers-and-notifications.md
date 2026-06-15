---
title: "Configuring Automatic KSK Rollovers and Notifications"
source: "/space/nios90/1454997618"
pageId: "1454997618"
---
You can configure automatic KSK rollovers at the Grid level and override the settings at the zone level. You can also configure notifications for KSK rollovers. The appliance sends one notification, SNMP, or email, or both based on the selection, for each event. For example, if the KSK of two zones are rolled over in the same batch, the appliance sends two notifications, one for each zone. Note that the appliance sends these notifications only once, and they are not recurring. Apart from the notifications that you receive, Grid Manager also displays a banner when you log in to the Grid indicating that the KSK rollover is due within the next seven days.  
These notifications are not applicable to an ZSK, as the ZSK rollover is an automated process. The appliance generates numerous notifications.  
To configure KSK rollover, complete the following:

1. **Grid:** From the **Data** **Management** tab, select the **DNS** tab. Expand the Toolbar and click **Grid** **DNS** **Properties**.  
   **Zone:** From the **Data** **Management** tab, select the **DNS** tab -> **Zones** tab -> *zone* checkbox, and click the Edit icon. Click **Override** to override the values at the zone level.  
   **Standalone** **appliance**: From the **Data** **Management** tab, select the **DNS** tab. Expand the Toolbar and click **System** **DNS** **Properties**.
2. Select the **DNSSEC** tab and complete the following in the **Basic** tab:
   
   - KSK Notification Configuration: You can choose to receive notifications for KSK rollover events.
     
     - **No** **Notifications**: Select this if you do not want to receive any notifications for KSK rollover events.
     - **Notifications** **for** **all** **KSK** **rollover** **events**: Select this if you want to receive notifications for all KSK rollover events. The appliance sends notifications after the rollover.
     - **Notifications** **only** **for** **KSK** **rollover** **events** **requiring** **manual** **DS** **update** **to** **parent** **zone**: Select this if you want to receive notifications only for KSK rollover events that require manual DS updates to parent zone. This is selected by default.
     - **Enable** **KSK** **Email** **Notification**: Select this to receive email notifications about DNSSEC keys.
     - **Enable** **KSK** **SNMP** **Notification**: Select this to receive SNMP trap alerts about DNSSEC keys.
3. **Enable** **automatic** **KSK** **rollover:** This is selected by default. When you select this option, the appliance will automatically roll over KSKs when they are due. The appliance starts the rollover process at most six hours after the due date. The appliance logs the messages in the syslog.
   
   Note that the appliance enables notifications and automatic KSK rollover by default for NIOS latest releases.  
   These are not available for earlier releases. Similar to automatic ZSK rollover, the appliance automatically restarts the DNS service after a KSK is rolled over.
4. Save the configuration.
