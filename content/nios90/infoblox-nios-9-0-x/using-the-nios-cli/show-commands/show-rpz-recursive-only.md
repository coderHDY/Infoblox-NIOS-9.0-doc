---
title: "show rpz_recursive_only"
source: "/space/nios90/280756827"
pageId: "280756827"
---
Use the `show rpz_recursive_only`** &lt;**`view_name&gt;` command  to view whether NIOS RPZ zones are used instead of local RPZ zones to block records with private IP addresses from being queried by external users. This command is available only on the Gird Master.

For information about changing the setting, run the *[set rpz_recursive_only](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-rpz-recursive-only)* command.

# Syntax

`show rpz_recursive_only &lt;view_name&gt; [zone_name]`

| **Argument** | **Description** |
| --- | --- |
| view_name | DNS view to which the RPZ zones belong. |
| zone_name | NIOS RPZ zone name to be used |

The command can return the following output values:

- `none`: Denotes that the setting applied earlier will continue to apply.
- `yes`: Denotes that NIOS RPZ zones are used instead of local RPZ zones to block records with private IP addresses from being queried by external users.
- `no`: Denotes that local RPZ zones are used to block records with private IP addresses from being queried by external users.

If you do not specify the zone name, the command displays the output for the DNS view only.

# Example

`Infoblox &gt; show rpz_recursive_only default`

`default: recursive-only none`
