---
title: "Sample Action Template for DXL Endpoint Outbound"
source: "/space/nios90/1396408974"
pageId: "1396408974"
---
`{`  
`"version": "5.0",`  
`"name": "DXL_action_template",`  
`"type": "DXL_EVENT",`  
`"event_type": ["RPZ","DXL"],`  
`"action_type": "RPZ Action",`  
`"comment": "Outbound API phase 5",`  
`"content_type": "application/json",`  
`"vendor_identifier": "McAfee",`  
`"steps": `  
`[`  
`{`  
`"operation": "DXL_SEND_EVENT",`  
`"name": "dxl_event",`  
`"body_list": [`  
`"Hello Event"`  
`],`  
`"dxl_topic": "/outbound/demo"`  
`},`  
`{`  
`"operation": "DXL_SEND_REQUEST",`  
`"name": "dxl_request",`  
`"body_list": [`  
`"Hello Service"`  
`],`  
`"dxl_topic": "/isecg/sample/service"`  
`},`  
`{`  
`"name": "log4",`  
`"operation": "NOP",`  
`"body": "${XC:DEBUG:{R:}}"`  
`},`  
`{`  
`"name": "copy_rbody",`  
`"operation": "NOP",`  
`"body_list": [`  
`"${XC:COPY:{L:data}:{R:BODY}}"`  
`]`  
`},`  
`{`  
`"name": "debugL",`  
`"operation": "NOP",`  
`"body": "${XC:DEBUG:{L:}}"`  
`},`  
`{`  
`"operation": "DXL_SEND_EVENT",`  
`"name": "resend_to_dxl",`  
`"body_list": [`  
`"Modified ${L::data}"`  
`],`  
`"dxl_topic": "/outbound/demo"`  
`}`  
`]`  
`}`
