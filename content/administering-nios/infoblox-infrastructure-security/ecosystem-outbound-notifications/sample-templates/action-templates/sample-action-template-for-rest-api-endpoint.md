---
title: "Sample Action Template for REST API Endpoint"
source: "/space/nios90/1396376268"
pageId: "1396376268"
---
Following is a sample action template for REST API endpoint:

`{`

`   "name": "action",`

`   "vendor_identifier": "Rapid7",`

`   "version": "2.0",`

`   "content_type": "text/xml",`

`   "action_type": "add network or remove IP",`

`   "quoting": "XMLA",`

`   "type": "REST_EVENT",`

`   "event_type": [ "FIXED_ADDRESS_IPV4", "FIXED_ADDRESS_IPV6" ],`

`   "steps": [`

`     {`

`         "name": "check operation type",`

`         "operation": "CONDITION",`

`         "condition": {`

`   "statements": [`

`    {`

`         "op": "!=",`

`         "right": "${E:A:operation_type}",`

`         "left": "INSERT"`

`    },`

`    {`

`         "op": "!=",`

`         "right": "${E:A:operation_type}",`

`         "left": "DELETE"`

`    }`

`   ],`

`   "condition_type": "AND",`

`   "stop": true`

`     }`

`   },`

`   {`

`     "name": "send SiteListingRequest",`

`     "operation": "POST",`

`     "body_list": [`

`    "&lt;?xml version=\"1.0\" encoding=\"UTF-8\"?&gt;",`

`    "&lt;SiteListingRequest session-id=\"${S::SESSID}\" /&gt;"`

`     ],`

`     "parse": "XMLA"`

`   },`

`   {`

`      "operation": "CONDITION",`

`      "name": "send SiteListingRequest (error check)",`

`      "condition": {`

`   "statements": [`

`    {`

`        "op": "!=",`

`        "right": "${P:A:PARSE[[name]]}",`

`        "left": "SiteListingResponse"`

`    },`

`    {`

`        "op": "!=",`

`        "right": "1",`

`        "left": "${P:A:PARSE{{success}}}"`

`     }`

`  ],`

`  "condition_type": "OR",`

`  "error": true,`

`  "else_eval": "${XC:COPY:{L:site_list}:{P:PARSE}"`

`     }`

`  },`

`  {`

`     "operation": "CONDITION",`

`     "name": "check whether site list is empty",`

`     "condition": {`

` "statements": [{`

`   "op": "==",`

`   "right": "${L:L:site_list}",`

`   "left": "0"`

`  }],`

`  "condition_type": "AND",`

`  "stop": true`

`      }`

`  },`

`  {`

`      "operation": "VARIABLEOP",`

`      "name": "get the next site",`

`      "variable_ops": [{`

`  "operation": "POP",`

`  "type": "COMPOSITE",`

`  "destination": "L:a_site",`

`  "source": "L:site_list"`

`    }]`

`  },`

`  {`

`     "operation": "CONDITION",`

`     "name": "check site name",`

`     "condition": {`

` "statements": [{`

`   "op": "!=",`

`   "right": "${L:A:a_site{{name}}}",`

`   "left": "${E:A:values{extattrs}{r7_site}{value}}"`

`  }],`

`  "condition_type": "AND",`

`  "next": "check whether site list is empty",`

`  "else_eval": "${XC:COPY:{L:site_id}:{L:a_site{{id}}}}"`

`     }`

`  },`

`  {`

`  "parse": "XMLA",`

`  "operation": "POST",`

`  "name": "send SiteConfigRequest",`

`  "body_list": [`

`"&lt;?xml version=\"1.0\" encoding=\"UTF-8\"?&gt;",`

`"&lt;SiteConfigRequest session-id=\"${S::SESSID}\" site-id=\"${L:A:site_id}\"/&gt;"`

`    ]`

`  },`

`  {`

`     "operation": "CONDITION",`

`     "name": "send SiteConfigRequest (error check)",`

`     "condition": {`

`  "statements": [`

`     {`

`       "op": "!=",`

`       "right": "${P:A:PARSE[[name]]}",`

`       "left": "SiteConfigResponse"`

`     },`

`     {`

`       "op": "!=",`

`       "right": "1",`

`       "left": "${P:A:PARSE{{success}}}"`

`      }`

`  ],`

`  "condition_type": "OR",`

`  "else_eval": "${XC:COPY:{L:Site}:{P:PARSE{SiteConfigResponse}}}",`

`  "error": true`

`      }`

`  },`

`  {`

`      "operation": "CONDITION",`

`      "name": "check operation type again",`

`      "condition": {`

`   "statements": [{`

`    "op": "==",`

`    "right": "${E:A:operation_type}",`

`    "left": "INSERT"`

`  }],`

`  "condition_type": "AND",`

`  "eval":`

`"${XC:COPY:{L:network}:{E:values{network}}}${XC:NETWORKTORANGE:{L:network}:{L:range`

`}}",`

`  "next": "insert network"`

`    }`

`  },`

`  {`

`     "operation": "CONDITION",`

`     "name": "remove ip",`

`     "condition": {`

`  "statements": [{`

`    "op": "==",`

`    "right": "${E:A:event_type}",`

`    "left": "FIXED_ADDRESS_IPV4"`

`  }],`

`  "condition_type": "AND",`

`  "eval":`

`"${XC:COPY:{L:ip}:{E:values{ipv4addr}}}${XC:REMOVEIP:{L:ip}:{L:Site{Hosts}}}",`

`  "else_eval":`

`"${XC:COPY:{L:ip}:{E:values{ipv6addr}}}${XC:REMOVEIP:{L:ip}:{L:Site{Hosts}}}"`

`     }`

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

`     }`

`  },`

`  {`

`     "operation": "VARIABLEOP",`

`     "name": "insert network",`

`     "variable_ops": [{`

`  "operation": "PUSH",`

`  "type": "COMPOSITE",`

`  "source": "L:range",`

`  "destination": "L:Site{Site}{Hosts}"`

`      }]`

`  },`

`  {`

`       "parse": "XMLA",`

`       "operation": "POST",`

`       "name": "send SiteSaveRequest",`

`       "body_list": [`

`  "&lt;?xml version=\"1.0\" encoding=\"UTF-8\"?&gt;",`

`  "&lt;SiteSaveRequest session-id=\"${S::SESSID}\"&gt;",`

`  "${L:x:Site}",`

`  "</SiteSaveRequest>"`

`     ]`

`  },`

`  {`

`     "operation": "CONDITION",`

`     "name": "send SiteSaveRequest (error check)",`

`     "condition": {`

`  "statements": [`

`   {`

`     "op": "!=",`

`     "right": "${P:A:PARSE[[name]]}",`

`     "left": "SiteSaveResponse"`

`   },`

`   {`

`     "op": "!=",`

`     "right": "1",`

`     "left": "${P:A:PARSE{{success}}}"`

`   }`

`  ],`

`  "condition_type": "OR",`

`  "error": true`

`     }`

`  },`

`  {`

`     "operation": "CONDITION",`

`     "name": "check operation type once more",`

`     "condition": {`

`  "statements": [{`

`    "op": "!=",`

`    "right": "${E:A:operation_type}",`

`     "left": "INSERT"`

`  }],`

`  "condition_type": "AND",`

`  "stop": true`

`     }`

`  },`

`  {`

`     "operation": "PUT",`

`     "name": "add an attribute with WAPI",`

`     "transport": {"path": "${E:A:values{_ref}}"},`

`     "wapi": "v2.6",`

`     "body": "{\"extattrs+\": {\"r7_added\": {\"value\": \"Added to the Rapid7 ${UT:A:TIME}\"}}}"`

`   }`

` ]`

`}`
