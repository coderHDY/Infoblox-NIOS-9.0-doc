---
title: "Action Template: Add Extensible Attributes Using WAPI"
source: "/space/nios90/1396310564"
pageId: "1396310564"
---
`{`

`           "operation": "CONDITION",`

`           "name": "check operation type once more",`

`           "condition": {`

`       "statements": [{`

`         "op": "!=",`

`         "right": "${E:A:operation_type}",`

`         "left": "INSERT"`

`     }],`

`     "condition_type": "AND",`

`     "stop": true`

`        }`

`    },`

`    {`

`       "operation": "PUT",`

`       "name": "add an attribute with WAPI",`

`       "transport": {"path": "${E:A:values{_ref}}"},`

`       "wapi": "v2.6",`

`       "body": "{\"extattrs+\": {\"r7_added\": {\"value\": \"Added to the Rapid7 ${UT:A:TIME}\"}}}"`

`           }`

**NOTES**:

- The "`check operation type once more`" step determines the operation type. If the operation is not "`INSERT`" (i.e. "`DELETE`"), the template execution stops.
- For the "`INSERT`" operation, the last step "`add an attribute with WAPI`" is executed. This step adds an extensible attribute "`r7_added`" to the fixed address through RESTful API. The value of the attribute has the current timestamp (`${UT:A:TIME}`).
