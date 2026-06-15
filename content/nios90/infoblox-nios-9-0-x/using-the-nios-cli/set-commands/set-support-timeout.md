---
title: "set support_timeout"
source: "/space/nios90/280397518"
pageId: "280397518"
---
The `set support_timeout` command allows you to specifying a custom timeout value for the support bundle download.  For information on display of the custom timeout value, see *[show support_timeout](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-support-timeout)*.

# Syntax

`set support_timeout [value/off]`

| **Argument ** | **Description** |
| --- | --- |
| value | Specify the timeout value for the support bundle download. The recommended value is between 0 to 86400 seconds, the default value is 1200. |
| off | The timeout value is set to its default value 1200. |

# Example

`Infoblox &gt;` `set support_timeout 2600`
