---
title: "CONDITION Structs"
source: "/space/nios90/1375142993"
pageId: "1375142993"
---
| **Variable** | **Type** | **Mandatory** | **Sub** | **Description** |
| --- | --- | --- | --- | --- |
| condition_type | String | Yes | No | This can be one of the following: AND, OR, NAND, or NOR. NAND means not (st1, st2, etc.) |
| next | String | No | No | The name of the step to jump to if the condition is successful. |
| eval | String | No | Yes | This is executed if the condition is successful. Generally, it will be an XC: set of operations. |
| else_eval | String | No | Yes | This is executed if the condition is NOT successful. Generally, it will be an XC: set of operations. |
| else_next | String | No | Yes | The execution will jump to specified step if the condition is NOT successful. |
| else_stop | String | No | Yes | The template execution will be stopped if the condition is NOT successful. |
| else_error | String | No | Yes | Generates an error if the condition is NOT successful. |
| stop | Boolean | No | No | If the condition is successful the execution will be stopped without any error. |
| error | Boolean | No | No | If the condition is successful the execution will be stopped with an error. |
| statements | List of STATEMENT    structs | Yes | Yes | The statements to evaluate. |
