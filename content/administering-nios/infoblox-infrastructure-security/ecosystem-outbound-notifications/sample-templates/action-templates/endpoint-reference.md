---
title: "Endpoint reference"
source: "/space/nios90/1396408901"
pageId: "1396408901"
---
`UT::ENDPOINT` contains WAPI reference to the current endpoint object that can be used by WAPI steps. You can make changes to the endpoint configuration during a template execution.

**Example**:

`{`

`"version": "4.0",`

`...`

`"steps": [`

`...`

`{`

`"operation": "PUT",`

`"name": "update_endpoint",`

`"transport": {"path": "${UT::ENDPOINT}"},`

`"wapi": "v2.7",`

`"body": "{\"comment\": \"outbound\"}"`

`},`

`...`

`],`

`...`

`}`
