---
title: "STATEMENT Structs"
source: "/space/nios90/1375568919"
pageId: "1375568919"
---
| **Variable** | **Type** | **Mandatory** | **Sub** | **Description** |
| --- | --- | --- | --- | --- |
| left | String | Yes | Yes | The left operand. Note that it is acceptable to include variables that do   not exist on the left side (to test if a variable is set in an event). Any error   during evaluation of the `left` is ignored even if it is run under debug   mode. |
| op | ENUM | Yes | No | The operation to execute. This can be one of the following: =, >, &lt;, &gt;=, &lt;=,   =~, and !~. Note that the &gt;, &lt;, &gt;=, and <= operations try to convert the   operands to numbers before executing the comparison, then = ~, and !~   are REGEX matches and the right side is considered the REGEX. |
| right | String | Yes | Yes | The right operand. |
