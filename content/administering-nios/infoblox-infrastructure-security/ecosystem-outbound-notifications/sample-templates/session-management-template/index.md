---
title: "Session Management Template"
source: "/space/nios90/1396376092"
pageId: "1396376092"
---
Following is a sample session management template for REST API endpoint:



` {`  
`   "name": "session",`

`   "version": "2.0", `

`   "type": "REST_ENDPOINT",`

`   "vendor_identifier": "Rapid7", `

`   "path": "/api/1.1/xml", `

`   "keepalive": true, `

`   "login_template": "login", `

`   "logout_template": "logout", `

`   "session_duration": 60000`  
` }`

> **warning**
>
> ### Note
> 
> The login_template and logout_template lines specify the templates to be executed for login and logout.  
> The session_duration line specifies the length of the session. You must upload the login and logout templates before configuring a session management template that refers them.



Following is a sample session management template for DXL endpoint:

`{"name": "session_tmplate",`  
`"version": "3.0",`  
`"type": "DXL_ENDPOINT",`  
`"vendor_identifier": "`DXL`",`  
`"dxl_keep_alive_interval": 60,`  
`"dxl_topic": "/outbound/session"`  
`}`

Following is a sample session management template for syslog endpoint:

`{`  
`"version": "5.0",`  
`"vendor_identifier": "SyslogEP",`  
`"name": "Syslog Session",`  
`"type": "SYSLOG_ENDPOINT",`  
`"comment": "Syslog session template",`  
`"path": "/wapi/v2.3/",`  
`"override_path": true,`  
`"timeout": 123,`  
`"keepalive": true,`  
`"retry": 1,`  
`"retry_template": 0,`  
`"rate_limit": 200`  
`}`
