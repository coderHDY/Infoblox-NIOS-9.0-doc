---
title: "set cef_logging"
source: "/space/nios90/843645041"
pageId: "843645041"
---
The `set cef_logging` command enables or disables CEF logging for violations at both BIND and virtual DNS Acceleration . Note that the CEF logging is enabled by default.

# Syntax

`set cef_logging [on|off]`

| **Argument** | **Description** |
| --- | --- |
| `on` | Enables CEF logging for violations at both BIND and virtual DNS Acceleration. |
| `off` | Disables CEF logging for violations at both BIND and virtual DNS Acceleration. |

# Example

`Infoblox &gt; set cef_logging on`

`BIND CEF logging is turned on`

`vDCA CEF logging is turned on`
