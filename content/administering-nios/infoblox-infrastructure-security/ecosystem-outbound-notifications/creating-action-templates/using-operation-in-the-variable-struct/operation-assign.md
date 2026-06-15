---
title: "operation ASSIGN"
source: "/space/nios90/1375044883"
pageId: "1375044883"
---
If operation is set to ASSIGN, the value in type will be simply put in the variable identified by `destination`, overwriting any value it might already have.

The following are several examples of the ASSIGN operation having namespace E as follows:

`{`

`  'some_field': 'some_value',`

`  'some_list': ['item1', 'item2']`

`}`

### **(1) When assigning a single value:**

`{`

`  'operation': 'ASSIGN',`

`  'type': 'SINGLE',`

`  'destination': 'L:var',`

`  'values': ['value']`

`}`

It returns name space L as follows:

`{'var': 'value'}`

### **(2) When assigning a list:**

`{`

`  'operation': 'ASSIGN',`

`  'type': 'LIST',`

`  'destination': 'L:list',`

`  'values': ['value', '${E:A:some_field}']`

`}`

It returns the following:

`{'list': ['value', 'some_value']}`

### **(3) When assigning a dictionary:**

`{`

`  'operation': 'ASSIGN',`

`  'type': 'DICTIONARY',`

`  'destination': 'L:dict',`

`  'keys': ['${E:A:some_field}_1', '${E:A:some_field}_2'],`

`  'values': ['${E:A:some_list[0]}', '${E:A:some_list[1]}']`

`}`

It returns the following:

`{'dict': {'some_value_2': 'item2', 'some_value_1': 'item1'}}`

### **(4) When assigning a composite value, as follows:**

`{`

`  'operation': 'ASSIGN',`

`  'type': 'COMPOSITE',`

`  'destination': 'L:composite',`

`  'name': 'tag_name',`

`  'keys': ['attr_1', 'attr_2'],`

`  'values': ['${E:A:some_field}', 'another_value'],`

`  'composite_value': 'tag_content'`

`}`

It gives the following:

`{'composite': {`

`  'index': {}, '&lt;xmla&gt;': True,`

`  'attrs': {`

`    'attr_2': 'another_value',`

`    'attr_1': 'some_value'`

`  },`

`  'value': ['tag_content'],`

`  'name': 'tag_name'`

`}}`

This composite value can be serialized to the following XML:

`&lt;tag_name attr_1="some_value" attr_2="another_value"&gt;tag_content</tagname>`
