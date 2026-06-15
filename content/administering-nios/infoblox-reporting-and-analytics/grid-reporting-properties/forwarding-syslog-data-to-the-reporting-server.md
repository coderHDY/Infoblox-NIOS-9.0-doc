---
title: "Forwarding Syslog Data to the Reporting Server"
source: "/space/nios90/1457389889"
pageId: "1457389889"
---
You can control the kind of syslog data forwarded to the indexer from the Grid members. You can search for syslog events (search string) in the **Reporting** tab -> **Search** tab. The syslog events you see in the **Search** tab depend on the syslog categories that you specify in both the Grid Reporting and Member Reporting Properties. The **Search** tab displays syslog events for the selected syslog categories at both the Grid Reporting Properties and Member Reporting Properties.

To specify syslog data categories, complete the following:

1. From the **Administration** tab, select the **Reporting** tab -> expand the Toolbar and click **Grid** **Reporting** **Properties**.   
   Or  
   **Member**: From the **Infoblox Grid** tab, select the **Grid** **Manager** tab and click the **Services** tab. In the **Services** tab, select the **Reporting** tab -> *member* checkbox and then click the Edit icon.
2. In the *Grid* *Reporting* *Properties* or *Reporting* *Member* *Properties* editor, select the **Syslog** **Data** tab and complete the following:  
   Click **Override** in the *Reporting* *Member* *Properties* editor to override the settings configured at the Grid reporting level. To inherit the same properties as the Grid, click **Inherit**.
   
   1. **Source:** From the drop-down list, select which syslog messages the appliance sends to the external syslog server:
      
      1. **Any:** The appliance sends both internal and external syslog messages.
      2. **Internal:** The appliance sends syslog messages that it generates.
      3. **External:** The appliance sends syslog messages that it receives from other devices, such as syslog servers and routers.
   2. **Severity:** Choose a severity filter from the drop-down list. When you choose a severity level, the appliance sends log messages with the selected level and the levels above it. The severity levels range from the lowest, **debug**, to the highest, **emerg**. For example, if you choose** debug**, the appliance sends all syslog messages to the server. If you choose** err**, the appliance sends messages with severity levels **err**, **crit**, **alert**, and **emerg**.
      
      1. **emerg**: Panic or emergency conditions. The system may be unusable.
      2. **alert**: Alerts, such as NTP service failures, that require immediate actions.
      3. **crit**: Critical conditions, such as hardware failures.
      4. **err**: Error messages, such as client update failures and duplicate leases.
      5. **warning**: Warning messages, such as missing keepalive options in a server configuration.
      6. **notice**: Informational messages regarding routine system events, such as "starting BIND".
      7. **info**: Informational messages, such as DHCPACK messages and discovery status.
      8. **debug**: Messages that contain information for debugging purposes, such as changes in the latency timer settings and AD authentication failures for specific users.
   3. **Logging Category**: Select one of the following logging categories:
      
      1. **Send all**: Select this to log all syslog messages, irrespective of categories to which it belongs. When you select this option, the appliance logs syslog messages for all the events, including all DNS and Infoblox related events. However, the syslog messages are not prefixed when you select this option.
      2. **Send selected categories**: Select this to configure logging categories from the list of available logging categories. Use the arrows to move logging categories from the **Available** table to the **Selected** table and vice versa. The appliance sends syslog messages for the categories that are in the **Selected** table. When you select this option, you must add at least one logging category. The syslog messages are prefixed with a category name to which it belongs. Also, the RPZ events logged in the syslog messages uses specific prefixes for the selected categories. Note that the syslog messages are prefixed when you set logging categories for at least one external syslog server, even if you set other external syslog servers as **Send All**.

1. Save the configuration and click **Restart** if it appears at the top of the screen.
