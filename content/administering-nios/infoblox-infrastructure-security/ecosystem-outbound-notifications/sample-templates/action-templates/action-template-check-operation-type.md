---
title: "Action Template: Check Operation Type"
source: "/space/nios90/1396310453"
pageId: "1396310453"
---
`{`

`           "name": "check operation type",`

`           "operation": "CONDITION",`

`           "condition": {`

`           "statements": [`

`            {`

`             "op": "!=",`

`             "right": "${E:A:operation_type}",`

`             "left": "INSERT"`

`            },`

`            {`

`             "op": "!=",`

`             "right": "${E:A:operation_type}",`

`             "left": "DELETE"`

`            }`

`        ],`

`        "condition_type": "AND",`

`        "stop": true`

`}`

> **warning**
>
> ### Note
> 
> The "`check operation type`" step checks the operation type. If it is neither INSERT nor DELETE, the template execution stops.
