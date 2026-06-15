---
title: "Active Template Functions"
source: "/space/nios90/1396408934"
pageId: "1396408934"
---
**Example**:

`{`

`"version": "4.0",`

`"name": "example",`

`"event_type": ["RPZ"],`

`"type": "REST_EVENT",`

`"functions": {`

`"functions": {`

`"is_ipv4_address": {`

`"steps": [`

`{`

`"operation": "CONDITION",`

`"condition": {`

`"statements": [`

`{`

`"left": "${L:A:address}",`

`"op": "!~",`

`"right": ":"`

`}`

`],`

`"condition_type": "AND",`

`"eval": "${XC:ASSIGN:{L:result}:{B:true}}",`

`"else_eval": "${XC:ASSIGN:{L:result}:{B:false}}"`

`}`

`}`

`]`

`}`

`},`

`"steps": [`

`...`

`{`

`"operation": "FUNCTION",`

`"function_name": "is_ipv4_address",`

`"body": "${XC:ASSIGN:{L:address}:{S:10.0.0.1}}"`

`},`

`...`

`]`

`}`
