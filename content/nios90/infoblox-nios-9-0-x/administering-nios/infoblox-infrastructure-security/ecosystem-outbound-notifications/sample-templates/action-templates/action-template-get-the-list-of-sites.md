---
title: "Action Template: Get the List of Sites"
source: "/space/nios90/1396310488"
pageId: "1396310488"
---
`{`

`        "name": "send SiteListingRequest",`

`        "operation": "POST",`

`        "body_list": [`

`     "&lt;?xml version=\"1.0\" encoding=\"UTF-8\"?&gt;",`

`     "&lt;SiteListingRequest session-id=\"${S::SESSID}\" /&gt;"`

`        ],`

`        "parse": "XMLA"`

`     },`

`     {`

`        "operation": "CONDITION",`

`        "name": "send SiteListingRequest (error check)",`

`        "condition": {`

`     "statements": [`

`        {`

`        "op": "!=",`

`        "right": "${P:A:PARSE[[name]]}",`

`        "left": "SiteListingResponse"`

`      },`

`      {`

`        "op": "!=",`

`        "right": "1",`

`        "left": "${P:A:PARSE{{success}}}"`

`       }`

`    ],`

`    "condition_type": "OR",`

`    "error": true,`

`    "else_eval": "${XC:COPY:{L:site_list}:{P:PARSE}"`

`        }`

`    }`

> **warning**
>
> ### Note
> 
> The "`send SiteListingRequest`" and "`send SiteListingRequest (error check)`" steps request the list of sites on a Rapid7 server. If the response is successful, it copies the list to the `L:site_list variable`.
