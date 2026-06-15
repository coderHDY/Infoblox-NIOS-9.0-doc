---
title: "Action Template: Delete an IP Address"
source: "/space/nios90/1396343282"
pageId: "1396343282"
---
`{`

`         "operation": "CONDITION",`

`         "name": "remove ip",`

`         "condition": {`

`     "statements": [{`

`        "op": "==",`

`        "right": "${E:A:event_type}",`

`        "left": "FIXED_ADDRESS_IPV4"`

`     }],`

`     "condition_type": "AND",`

`     "eval":`

` "${XC:COPY:{L:ip}:{E:values{ipv4addr}}}${XC:REMOVEIP:{L:ip}:{L:Site{Hosts}}}",`

`    "else_eval":`

` "${XC:COPY:{L:ip}:{E:values{ipv6addr}}}${XC:REMOVEIP:{L:ip}:{L:Site{Hosts}}}"`

`      }`

`  },`

`  {`

`     "operation": "CONDITION",`

`     "name": "jump to send",`

`     "condition": {`

`  "statements": [{`

`    "op": "==",`

`    "right": "",`

`    "left": ""`

`  }],`

`  "condition_type": "AND",`

`  "next": "send SiteSaveRequest"`

`     }`

`   }`

**NOTES**:

- If the operation is not "`INSERT`" (i.e. "`DELETE`"), the "`remove ip`" step is executed. The step determines the type of fixed address. The corresponding address (`{E:values{ipv4addr}`} or `{E:values{ipv6addr}}`) is copied to the `L:ip` variable, and then the `L:ip` address is removed from the list of hosts in the site `(${XC:REMOVEIP:{L:ip}:{L:Site{Hosts}}})`.
- The step "`jump to send`" skips the "`inserting`" step and jumps directly to the "`send SiteSaveRequest`" step.
