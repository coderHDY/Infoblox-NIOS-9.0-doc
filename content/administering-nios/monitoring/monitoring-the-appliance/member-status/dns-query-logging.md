---
title: "DNS Query Logging"
source: "/space/nios90/1580827644"
pageId: "1580827644"
---
The status icon for the **DNS Query Logging** field in the *Detailed Status* panel indicates whether the logging of DNS queries or responses is enabled and whether the visibility of the warning message related to the impact of queries/responses logging, is disabled. The message displayed on the icon suggests the action you must take to improve the DNS performance when logging is enabled and the warning is set to show in the Grid Manager UI.

The status icon can be one of the following:

| **Icon** | **Color** | **Meaning** |
| --- | --- | --- |
|  | Yellow | The DNS queries and/or responses logging is enabled on the selected member and the command `set query_logging_warnings` is set to `on`.  The following description may appear:   Disable DNS queries and responses logging to enhance DNS performance. |
|  | Grey | - The DNS queries or response logging is enabled, but the command `set query_logging_warnings` has been run to disable the warning banner.     Or - The DNS queries and response logging is disabled.  The following description may appear:   DNS queries and responses disabled or CLI command was run to disable warning. |

For instructions to enable DNS queries or responses, see the *Enabling Query Logging* section below. To manage the visibility of the warning message, see [*set query_logging_warnings*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1577680919).

# Enabling Query Logging

To enable query and/or response logging, complete the following steps:

1. From the **Data** **Management** tab, select the **DNS** tab, and then click **Grid** **DNS** **Properties** from the Toolbar.   
   or  
   From the **Data** **Management** tab, select the **DNS** tab -> **Members** tab -> *Grid_member* checkbox, and then click the Edit icon.
2. In the *Grid* *DNS* *Properties* or *Member* *DNS* *Properties* editor, click **Toggle** **Advanced Mode** if the editor is in the basic mode, select the **Logging** tab, and then complete the following:
   
   - **Logging** **Facility:** Select a facility from the drop-down list. This is the location on the syslog server to which you want to sort the DNS logging messages.
   - **Logging** **Category**: Select ‘**queries**’ and/or ‘**responses**’ of the log categories.
3. Save the configuration and click **Restart** if it appears at the top of the screen.

For more information about the `set query_logging_warnings` CLI command, see [*set query_logging_warnings*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1577680919).
