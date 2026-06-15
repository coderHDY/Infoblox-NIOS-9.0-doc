---
title: "set query_logging_warnings"
source: "/space/nios90/1577680919"
pageId: "1577680919"
---
The `set query_logging_warnings`** **command enables or disables the query logging warnings. This command has been introduced in NIOS 9.0.7.

To enable query logging, see [*Enabling Query Logging*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/member-status/dns-query-logging). After query logging is enabled, you can configure query logging warnings using the `set query_logging_warnings` command. Use the [*show query_logging_warnings*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-query-logging-warnings) command to display the current status of query logging warning.

# Syntax

`set query_logging_warnings &lt;on|off&gt;`

# Arguments

| **Argument** | **Description** |
| --- | --- |
| `on` | Enables query logging warnings |
| `off` | Disables query logging warnings |

# Example

To enable query logging warnings:

`Infoblox &gt; set query_logging_warnings on`

To disable query logging warnings:

`Infoblox &gt; set query_logging_warnings off`
