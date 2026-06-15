---
title: "Action Template: Distinguish Between INSERT and DELETE"
source: "/space/nios90/1396310520"
pageId: "1396310520"
---
`{`

`       "operation": "CONDITION",`

`       "name": "check operation type again",`

`       "condition": {`

`  "statements": [{`

`     "op": "==",`

`     "right": "${E:A:operation_type}",`

`     "left": "INSERT"`

`  }],`

`  "condition_type": "AND",`

`  "eval":`

` "${XC:COPY:{L:network}:{E:values{network}}}${XC:NETWORKTORANGE:{L:network}:{L:range`

` }}",`

`    "next": "insert network"`

`         }`

`    }`

> **warning**
>
> ### Note
> 
> The "`check operation type again`" step determines the operation type. If the operation is "`INSERT`", the network of the inserted fixed address is copied to the L:network variable (`${XC:COPY:{L:network}:{E:values{network}}}`) and transformed to a Rapid7 range to the `L:range variable (${XC:NETWORKTORANGE:{L:network}:{L:range}})`. After the range is stored, the template execution jumps to the "`insert network`" step.
