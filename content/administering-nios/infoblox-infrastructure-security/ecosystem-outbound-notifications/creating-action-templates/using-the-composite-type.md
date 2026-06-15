---
title: "Using the COMPOSITE Type"
source: "/space/nios90/1375142902"
pageId: "1375142902"
---
When you use COMPOSITE as the type in the VARIABLE struct, the list of key/value pairs in `keys` and `values` is put in an XMLA dictionary with a name set to `name` and a value set to either the value in `composite_value` OR to the value in the variable set in `source`.

Here is an example of using COMPOSITE as the type when you use the following variables and values:

| **Field** | **Value** |
| --- | --- |
| type | COMPOSITE |
| name | varname |
| keys | ["a1", "a2"] |
| values | ["value is ${L::SOMEVAR}", "2"] |
| composite_value | "123" |

It results in the following:

`{`

`   "&lt;xmla&gt;": true,`

`   "attrs": {`

`      "a1": "value is 123",`

`      "a2": "2",`

`   },`

`   "index": {},`

`   "value": ["123"],`

`   "name": "varname"`

`}`

> **warning**
>
> ### Note
> 
> If source is set, the value in source is used as is (this can be seen especially for PUSH operations).
