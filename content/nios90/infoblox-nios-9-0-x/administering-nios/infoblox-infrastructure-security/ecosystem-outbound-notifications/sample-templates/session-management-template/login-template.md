---
title: "Login Template"
source: "/space/nios90/1396310407"
pageId: "1396310407"
---
{

`   "name": "login",`

`   "version": "2.0",`

`   "vendor_identifier": "Rapid7",`

`   "type": "REST_EVENT",`

`   "event_type": ["SESSION"],`

`   "content_type": "text/xml",`

`   "quoting": "XMLA",`

`   "steps": [`

`      {`

`         "body": "${XC:ASSIGN:{H:Authorization}:{S:}}",`

`         "operation": "NOP",`

`         "name": "login: clear basic auth"`

`      },`

`      {`

`         "parse": "XMLA",`

`         "operation": "POST",`

`         "no_connection_debug": false,`

`         "name": "login: request",`

`         "body_list": [`

`            "&lt;?xml version=\"1.0\" encoding=\"UTF-8\"?&gt;",`

`         "&lt;LoginRequest user-id=\"${UT::USERNAME}\" password=\"${UT::PASSWORD}\"/&gt;"`

`         ]`

`    },`

`    {`

`        "operation": "CONDITION",`

`        "name": "login: errorcheck",`

`        "condition": {`

`           "statements": [`

`             {`

`                "op": "!=",`

`                "right": "${P:A:PARSE[[name]]}",`

`                "left": "LoginResponse"`

`             },`

`             {`

`                 "op": "!=",`

`                 "right": "1",`

`                 "left": "${P:A:PARSE{{success}}}"`

`            }`

`        ],`

`        "condition_type": "OR",`

`        "else_eval": "${XC:COPY:{S:SESSID}:{P:PARSE{{session-id}}}}",`

`        "error": true`

`      }`

`    }`

`  ]`

`}`

> **warning**
>
> ### Note
> 
> The else_eval line copies the session-id from the parsed reply (if successful); otherwise, it returns an error.
