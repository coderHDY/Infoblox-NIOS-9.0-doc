---
title: "set dns-accel"
source: "/space/nios90/280790097"
pageId: "280790097"
---
The` ``set`` ``dns-accel`` `command enables you to set certain parameters for the **DNS Cache Acceleration** feature. This command is available for:

- IB-FLEX only if the **Flex Grid Activation** license is present in the Grid.

# Syntax

`set dns-accel log &lt;level&gt;`  
`set dns-accel log &lt;emergency|alert|critical|error|warning|notice|info|debug&gt;`



| **Argument** | **Description** |
| --- | --- |
| `level` | The DNS Cache Acceleration log level, where log level is between 0 and 7, and the default value is 6. |
| `&lt;emergency\|alert\|critical\|`   `error\|warning\|notice\|info\|`   `debug&gt;` | Specifies one of these log levels. |

# Example

`Infoblox &gt; ``set`` ``dns-accel log 2`

`Infoblox &gt; ``set dns-accel log notice`
