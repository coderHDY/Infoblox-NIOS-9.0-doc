---
title: "Action Template: Get Site Configuration"
source: "/space/nios90/1396376181"
pageId: "1396376181"
---
`{`

`            "parse": "XMLA",`

`            "operation": "POST",`

`            "name": "send SiteConfigRequest",`

`            "body_list": [`

`   "&lt;?xml version=\"1.0\" encoding=\"UTF-8\"?&gt;",`

`   "&lt;SiteConfigRequest session-id=\"${S::SESSID}\" site-id=\"${L:A:site_id}\"/&gt;"`

`          ]`

`   },`

`   {`

`        "operation": "CONDITION",`

`        "name": "send SiteConfigRequest (error check)",`

`        "condition": {`

`  "statements": [`

`    {`

`      "op": "!=",`

`      "right": "${P:A:PARSE[[name]]}",`

`      "left": "SiteConfigResponse"`

`  },`

`  {`

`      "op": "!=",`

`      "right": "1",`

`      "left": "${P:A:PARSE{{success}}}"`

`  }`

` ],`

` "condition_type": "OR",`

` "else_eval": "${XC:COPY:{L:Site}:{P:PARSE{SiteConfigResponse}}}",`

` "error": true`

`     }`

` }`

> **warning**
>
> ### Note
> 
> Once `site-id` is known, steps "`send SiteConfigRequest"` and "`send SiteConfigRequest (error check)"` request and store the site configuration.
