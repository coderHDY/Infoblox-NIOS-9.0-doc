---
title: "Action Template: Locate the Site ID by Name"
source: "/space/nios90/1396408860"
pageId: "1396408860"
---
`{`

`       "operation": "CONDITION",`

`       "name": "check whether site list is empty",`

`       "condition": {`

`  "statements": [{`

`     "op": "==",`

`     "right": "${L:L:site_list}",`

`     "left": "0"`

`  }],`

`  "condition_type": "AND",`

`  "stop": true`

`     }`

`  },`

`  {`

`     "operation": "VARIABLEOP",`

`     "name": "get the next site",`

`     "variable_ops": [{`

`  "operation": "POP",`

`  "type": "COMPOSITE",`

`  "destination": "L:a_site",`

`  "source": "L:site_list"`

`     }]`

`  },`

`  {`

`      "operation": "CONDITION",`

`      "name": "check site name",`

`      "condition": {`

`  "statements": [{`

`    "op": "!=",`

`    "right": "${L:A:a_site{{name}}}",`

`    "left": "${E:A:values{extattrs}{r7_site}{value}}"`

`  }],`

`  "condition_type": "AND",`

`  "next": "check whether site list is empty",`

`  "else_eval": "${XC:COPY:{L:site_id}:{L:a_site{{id}}}}"`

`      }`

`  }`

**NOTES**:

- The "`check whether site list is empty`", "`get the next site`", and "`check site name`" steps form a loop for finding the site with specific name in the list of sites.
- The "`check whether site list is empty`" step checks to see if the list is empty. If it is empty, the site with the specific name is not found and the execution of the template stops.
- In the "`get the next site`" step, one element is copied to the `L:a_site` variable.
- In the "`check site name`" step, the "`name`" attribute of a site (`${L:A:a_site{{name}}}`) is compared to the value of the "`r7_site`" extensible attribute of the fixed address in `(${E:A:values{extattrs}{r7_site}{value}})`. If they are the same, the site ID is stored to the `L:site_id variable (${XC:COPY:{L:site_id}:{L:a_site{{id}}}})`. If they are not the same, the execution is continued by the "`check whether site list is empty`" step.
