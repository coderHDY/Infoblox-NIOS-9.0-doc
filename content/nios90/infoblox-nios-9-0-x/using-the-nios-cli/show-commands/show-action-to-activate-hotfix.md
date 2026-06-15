---
title: "show action_to_activate_hotfix"
source: "/space/nios90/1453457488"
pageId: "1453457488"
---
Use `show action_to_activate_hotfix` command to display the last successfully installed hotfix details and action to activate the hotfix on the given member. You can use this command to show action to activate hotfix changes for the Grid member.

# Syntax

`show action_to_activate_hotfix &lt;host_name&gt; [&lt;nios_version&gt;] [resync]`

| **Argument** | **Description** |
| --- | --- |
| `&lt;host_name&gt;` | Used to display the hotfix details installed on the host name for default version (active partition). |
| `&lt;nios_version&gt;` | Used to display the hotfix details installed on the given NIOS version or provide alternate partition NIOS version to display the details of the hotfix installed on an alternate partition. |
| `&lt;resync&gt;` | Used to re-synchronize the manifest file from the member to Grid Master and displays the hotfix details. |

# Example

`Infoblox &gt; show action_to_activate_hotfix`

| **Position** | **Destination** |
| --- | --- |
| 1 | member.infoblox.com |
| 2 | member.infoblox.com 9.0.2 |
| 3 | member.infoblox.com 9.0.2-50075-200eeb5107cf |
| 4 | member.infoblox.com 9.0.2 resync |
| 5 | member.infoblox.com 9.0.2-50075-200eeb5107cf resync |
