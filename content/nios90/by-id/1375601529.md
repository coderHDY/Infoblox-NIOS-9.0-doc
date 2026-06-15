---
title: "Constant Specification for values"
source: "/space/nios90/1375601529"
pageId: "1375601529"
---
When you specify the `values` field inside any variable operation for the VARIABLEOP step type, it is possible to use the constant of a specific type, instead of string.

For example, the following describes three string values:

`‘values’: [‘True’, ‘42’, ‘${L::some_var}’]`

If you specify `values` as ‘`{X:something}’, ‘`something`’` is represented as a constant of type X. Note that this is the only allowed syntax. For example, ‘`text{X:something}`’ is treated as a string, instead of a constant specification.

The following types are supported in constant specification:

- **Bool** **type** **(B)**: Both '{B:1}' and '{B:true}' are evaluated as bool true, while '{B:0}' and '{B:false} are evaluated as bool false. Note that both 'true' and 'false' are not case-sensitive. Therefore, True, FALSE or even tRuE are all allowed. Other invalid values such as 'B:' and '{B:anythingelse}' are evaluated as bool=false (the 'default value') without further debugging; and an error is logged in the debug mode.
- **Integer** **type** **(I)**: '{I:}' is evaluated to its corresponding integer value. For example, {I:-42} is evaluated as integer -42. The default value is 0.
- **Empty type (E)**: ‘{E:}’ is evaluated as None. ‘{E:[]}’ is evaluated as an empty list. ‘{E:{}}’ is evaluated as an empty dictionary. The default value is None.
- **Float** **type** **(F)**: The float type is similar to the integer type. Float numbers can be specified as '{F:0.0}', '{F:-4.2}', '{F:-4E+2}' or '{F:+1.23e-45}. The default value is 0.0.
- **String** **type** **(S)**: '{S:}' is evaluated as string ''. For example, '{S:{I:42}}' is string '{I:42}'. There is no default value for string. For the unknown type (e.g. '{U:%^&}'), the default value is an empty string.

The following example illustrates how to use constant specification to define ipv4addr with a DHCP option:

`{`

`   “ipv4addr”: “1.2.3.4”,`

`   “options”: [`

`     {`

`       “name”: 'dhcp-lease-time”,`

`       “num”: 51,`

`       “use_option”: true,`

`       “value': '43200”,`

`       'vendor_class': “DHCP”`

`     }`

`   ]`

`}`

Note that `num` is an integer (in this string: “num”: “51”) and` use_option` is bool (in this string: “use_option”:

“true”).

In the action template, you can do the following:

`{`

`   “steps”: [`

`   {`

`     “operation': 'VARIABLEOP”,`

`     “variable_ops”: [`

`       {`

`         “operation”: “ASSIGN”,`

`         “type”: “DICTIONARY”,`

`         “destination”: “L:addr”,`

`         “keys”: [“ipv4addr”, “options”],`

`         “values': [“1.2.3.4”, “{E:[]}”]`

`      },`

`      {`

`         “operation”: “PUSH”,`

`         “type”: “DICTIONARY”,`

`         “destination”: “L:addr{options}”,`

`        “keys”: [ “name”, ”num”, “use_option”, “value”, “vendor_class”],`

`         “values': [“dhcp-lease-time”, ”{I:51}”, ”{B:true}”, “43200”, “DHCP”]`

`       }`

`     ]`

`   },`

`   {`

`   “operation”: “PUT”,`

`   “transport”: {“path”: “record:host_ipv4addr”},`

`   “body”: “${L:J:addr}”`

`   }`

`  ]`

`}`
