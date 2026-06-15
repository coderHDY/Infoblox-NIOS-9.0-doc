---
title: "Action Template: Add an IP Range"
source: "/space/nios90/1396376213"
pageId: "1396376213"
---
`{`

`         "operation": "VARIABLEOP",`

`         "name": "insert network",`

`         "variable_ops": [{`

`     "operation": "PUSH",`

`     "type": "COMPOSITE",`

`     "source": "L:range",`

`     "destination": "L:Site{Site}{Hosts}"`

`         }]`

`      }`

`The step "insert network" pushes the L:range to the list of site’s "Hosts".`

`Action Template: Saving New Configuration`

`{`

`         "parse": "XMLA",`

`         "operation": "POST",`

`         "name": "send SiteSaveRequest",`

`         "body_list": [`

`     "&lt;?xml version=\"1.0\" encoding=\"UTF-8\"?&gt;",`

`     "&lt;SiteSaveRequest session-id=\"${S::SESSID}\"&gt;",`

`     "${L:x:Site}",`

`     "&lt;/SiteSaveRequest&gt;"`

`         ]`

`      },`

`      {`

`        "operation": "CONDITION",`

`        "name": "send SiteSaveRequest (error check)",`

`        "condition": {`

`     "statements": [`

`      {`

`        "op": "!=",`

`        "right": "${P:A:PARSE[[name]]}",`

`        "left": "SiteSaveResponse"`

`      },`

`      {`

`        "op": "!=",`

`        "right": "1",`

`        "left": "${P:A:PARSE{{success}}}"`

`      }`

`],`

`"condition_type": "OR",`

`"error": true`

`    }`

` }`

> **warning**
>
> ### Note
> 
> The "`send SiteSaveRequest`" and "`send SiteSaveRequest (error check)`" steps save new site configuration to the Rapid7 server.
