---
title: "Sample Action Template for DXL Endpoint"
source: "/space/nios90/1396408788"
pageId: "1396408788"
---
`{`  
` "vendor_identifier": "DXL",`  
` "version": "5.0",`  
` "name": "action",`  
` "type": "DXL_EVENT",`  
` "event_type": [`  
` "FIXED_ADDRESS_IPV4"`  
` ],`  
` "dxl_topic": "/outbound/action",`

`"steps": [`  
`{`  
`"operation": "DXL_SEND_EVENT",`  
`"name": "send_ip",`  
`"body": "address ${E:A:values{ipv4addr}}",`  
`"dxl_topic": "/outbound/step"`  
`},`  
`{`  
`"operation": "DXL_SEND_REQUEST",`  
`"name": "dxl_request",`  
`"body_list": "address ${E:A:values{ipv4addr}}",`  
`"dxl_topic": "/sample/service"`  
`}`  
`] `

`}`
