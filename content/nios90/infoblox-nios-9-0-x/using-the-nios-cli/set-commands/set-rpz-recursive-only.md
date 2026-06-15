---
title: "set rpz_recursive_only"
source: "/space/nios90/280658762"
pageId: "280658762"
---
Use the `set rpz_recursive_only &lt;``view_name``&gt;`  `[&lt;``zone_name``&gt;]` command to use NIOS RPZ zones instead of local RPZ zones to block records with private IP addresses from being queried by external users. This command is available only on the Gird Master.

If you do not specify an RPZ zone name after the DNS view name, all RPZ zones that belong to the specified DNS view are used to block records. If you specify an RPZ zone name, only that zone is used to block records.

> **warning**
>
> Restart the DNS service on the member after running the command.

# Syntax

`set rpz_recursive_only &lt;view_name&gt; [&lt;zone_name&gt;] &lt;none | yes | no&gt; `

| **Argument** | **Description** |
| --- | --- |
| view_name | DNS view to which the RPZ zones belong. |
| zone_name | NIOS zone name that must be used to block records with private IP addresses. If you do not specify an RPZ zone, all zones that belong to the DNS view are considered. |
| none | Uses the existing setting for the command. For example, if the `set rpz_recursive_only view_name` command was set to `yes`, specifying `none` will consider the command enabled because the earlier setting was set to `yes`. |
| yes | Enables the command. |
| no | Disables the command. |

# Example

`Infoblox &gt; set rpz_recursive_only default rpz1.com yes`  
`Restart the DNS service in order for changes to take effect.`
