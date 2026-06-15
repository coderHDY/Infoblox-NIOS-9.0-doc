---
title: "Upgrade Groups and Schedules"
source: "/space/nios90/280791954"
pageId: "280791954"
---
Consider the following when you import upgrade groups and their distribution and upgrade schedules:

- The appliance imports a new upgrade group only when both the distribution and upgrade schedules are inactive.
- You can modify members and the comment field of an existing upgrade group only when both the distribution and upgrade schedules are inactive.
- You can modify distribution related fields of an existing upgrade group only when the distribution schedule is inactive.
- You can modify upgrade related fields of an existing upgrade group only when the upgrade schedule is inactive.
- The Grid Master is the only member of the Grid Master group. You cannot move it to another upgrade group.
- You cannot change the members of the Reporting Member group nor move them to another upgrade group.
- When you remove a member from its original group, it will be placed in the Default group. You may notice additional members in the Default group if you remove members from any upgrade groups.
- When you specify both dependency and distribution or upgrade time for an upgrade group, dependency takes precedence.

> **warning**
>
> **Note**
> 
> When you import an upgrade group and its distribution and upgrade schedules, you cannot control the activation and deactivation of the schedules. You can activate and deactivate the schedules through the GUI after the import.

| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-upgrade_group | String | Yes |  | UpgradeGroup | Example: UpgradeGroup |
| name | String | Yes | Name |  | Example: UpgradeGp |
| comment | String | No | Comment | comment | Add this field to overwrite the comment you entered for the upgrade group. |
| members | Grid member list | No | Member Assignment Name | members | Enter a list of Grid members separated by commas. Use the FQDNs of the Grid members. Enclose the entire string in double quotes.   Example:   “corp100.mktg.com,corp100.dev.com” |
| time_zone | String | No | Time Zone | time_zone | The value in this field applies to both distribution_time and upgrade_time. If you do not specify a time zone, the Grid level time zone is used. |
| distribution_dependent_group | String | No | Name | distribution_dependent_group | Enter the name of the preceding upgrade group that this group depends on during a distribution. |
| distribution_policy | String | No | Distribute to Members | distribution_policy | Valid values are: SIMULTANEOUSLY or SEQUENTIALLY. |
| distribution_time | Time | No | Start Distribution (Date/Time) | distribution_time | Enter the distribution start date and time in YYYY-MM-DDTHH:MM:SS format. |
| upgrade_dependent_group | String | No | Name | upgrade_dependent_group | Enter the name of the upgrade group that this group depends on during an upgrade. |
| upgrade_policy | String | No | Upgrade Members | upgrade_policy | Valid values are: SIMULTANEOUSLY or SEQUENTIALLY. |
| upgrade_time | Time | No | Start Upgrade | upgrade_time | Enter the upgrade start date and time in YYYY-MM-DDTHH:MM:SS format. |
