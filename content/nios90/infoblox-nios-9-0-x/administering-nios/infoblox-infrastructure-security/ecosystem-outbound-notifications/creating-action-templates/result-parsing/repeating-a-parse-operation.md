---
title: "Repeating a Parse Operation"
source: "/space/nios90/1375569289"
pageId: "1375569289"
---
You can use the `XC:PARSE` operation to parse the body once again using another method. `R:BODY` contains the body of the response.

**Example**:

Having the L namespace as:

`{`

`"config": {`

`"parse": "JSON"`

`},`

`}`

`L:data` contains the result of the parsing operation after the following step:

`{`

`"version": "4.0",`

`...`

`"steps": [`

`...`

`{`

`"name": "repeat_parse",`

`"operation": "NOP",`

`"body_list": [`

`"${XC:COPY:{L:data}:{R:BODY}}",`

`"${XC:PARSE:{L:config}:{L:data}}"`

`]`

`},`

`...`

`],`

`...`

`}`
