---
title: "Logout Template"
source: "/space/nios90/1396376121"
pageId: "1396376121"
---
`{`

`   "name": "logout",`

`   "version": "2.0",`

`   "type": "REST_EVENT",`

`   "vendor_identifier": "Rapid7",`

`   "event_type": ["SESSION"],`

`   "content_type": "text/xml",`

`   "quoting": "XMLA",`

`   "steps": [`

`      {`

`          "parse": "XMLA",`

`          "operation": "POST",`

`          "no_connection_debug": false,`

`          "name": "logout: request",`

`          "body_list": [`

`             "&lt;?xml version=\"1.0\" encoding=\"UTF-8\"?&gt;",`

`             "&lt;LogoutRequest session-id=\"${S::SESSID}\"/&gt;"`

`          ]`

`       },`

`       {`

`          "operation": "CONDITION",`

`          "name": "logout: errorcheck",`

`          "condition": {`

`             "statements": [`

`               {`

`                  "op": "!=",`

`                  "right": "${P:A:PARSE[[name]]}",`

`                  "left": "LogoutResponse"`

`               },`

`               {`

`                  "op": "!=",`

`                  "right": "1",`

`                  "left": "${P:A:PARSE{{success}}}"`

`               }`

`            ],`

`            "condition_type": "OR",`

`            "error": true`

`         }`

`      }`

`   ]`

`}`
