---
title: "set reporting_user_capabilities"
source: "/space/nios90/280397565"
pageId: "280397565"
---
The `set reporting_user_capabilities` command allows you to configure the `delete` permission on reporting data to a local admin user who has superuser permissions. If you enable the `set reporting_user_capabilities` command for a user, the user can use the `delete` command using the [*Splunk API*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-subscriber-services/monitoring-subscriber-policy-violations/Monitoring+Subscriber+Policy+Violations#Handling-Splunk-REST-API-Request) or [*reporting GUI*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/about-reports)* *to delete selected events.

To see the list of users configured with the reporting delete permission, see [*show reporting_user_capabilities*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-reporting-user-capabilities).

> **warning**
>
> ### Notes
> 
> - This command is supported only on the Grid master.
> - You cannot retrieve the data once it is deleted.
> - The deleted data cannot be visualized and does not reduce any disk space.
> - Frequent deletion of data may affect the search performance.

# Syntax

`set reporting_user_capabilities [enable|disable] &lt;super-user&gt;`

| Argument | Description |
| --- | --- |
| enable | Enables the reporting delete capability |
| disable | Disables the reporting delete capability |

# Example

`Infoblox &gt; set reporting_user_capabilities enable user1`

1. `Delete reporting indexed data`

`Select capability (1) or q to quit: 1`

`The reporting Delete capability has been enabled for user user1.`

` `

`Infoblox &gt; set reporting_user_capabilities disable user1`

1. `Delete reporting indexed data`

`Select capability (1) or q to quit: 1`

`The reporting Delete capability has been disabled for user user1.`
