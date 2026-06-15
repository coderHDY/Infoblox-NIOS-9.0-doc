---
title: "Sample Action Template for Syslog Endpoint"
source: "/space/nios90/1396408824"
pageId: "1396408824"
---
`{`  
`"version": "5.0",`  
`"name": "syslog_action_dns_record",`  
`"type": "SYSLOG_EVENT",`  
`"event_type": ["RPZ","DXL","DNS_RECORD","DNS_ZONE"],`  
`"action_type": "Some Action",`  
`"comment": "Syslog Events",`  
`"content_type": "application/json",`  
`"vendor_identifier": "syslog",`  
`"steps":`  
`[`  
`{`  
`"name": "syslog_send",`  
`"operation": "SYSLOG_SEND_EVENT",`  
`"body": "${E::object_type} ${E::operation_type} with name ${E::values{name}} on to zone ${E::values{zone}} for member ${E::member_ip} at timestamp ${E::timestamp}"`  
`}`  
`]`  
`}`
