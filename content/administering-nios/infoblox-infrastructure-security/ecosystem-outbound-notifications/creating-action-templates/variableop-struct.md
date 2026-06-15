---
title: "VARIABLEOP Struct"
source: "/space/nios90/1375568707"
pageId: "1375568707"
---
Note that all fields are optional, except operation and typeNo schema validation is made for variable combinations. Validation of the schema is performed when you add or modify the action template., no specific JSON schema validation is made for variable combinations as it would be too complex, the validation will be done at template conversion time (which is still done when users upload / edit templates).

> **warning**
>
> ### Note
> 
> All variables listed in the following table are applicable only for the VARIALBEOP operation in the STEP struct. The VARIABLEOP struct converts specified keys/values in a complex variable (such as LIST, DICTIONARY, or XML values with attributes) or performs operations on an existing complex variable. No schema validation is made for variable combinations. Validation of the schema is performed when you add or modify the action template.

| **Variable** | **Type** | **Mandatory** | **Sub** | **Description** |
| --- | --- | --- | --- | --- |
| source | String | No | Yes | You must specify the variable name, including the namespace. You can include nested variables. Example: L:DICT{key}{list}) |
| destination | String | No | Yes | You must specify the variable name, including the namespace. You can include nested variables. Example: L:DICT{key}{list}) |
| operation | ENUM | Yes | Yes | Specifies the operation being performed for the value defined or created in type. The valid value is one of the following: PUSH, POP, SHIFT, UNSHIFT, or ASSIGN. Note that both `operation` and `type` are mandatory for the struct. For examples, see  Using OPERATION in the VARIABLE Struct below. |
|   type |   ENUM |   Yes |   Yes | Specifies the type of variables for the operation. Valid value is one of the following: LIST, DICTIONARY, COMPOSITE, or SINGLE. This field defines how the values in `keys`, `values`, and `composite_value` are combined to create a variable while `operation` defines how the variable is being used. The appliance handles `keys`, `values` and `composite_value` differently based on the type you select, as follows:  - LIST: `keys` will be ignored; `values` will contain the required values and be serialized in a simple list of strings. - DICTIONARY: The list of `key/value` pairs in `keys` and `values` will be put in a simple dictionary. - COMPOSITE: The list of `key/value` pairs in `keys` and `values` will be put in an XMLA dictionary with a name set to `name` and a value set to either the value in `composite_value` OR the value in the variable set in `source`. See  Using the COMPOSITE Type below  for details about how to use COMPOSITE. - SINGLE: `keys` will be ignored; the value will be the first element in the `values` list. |
| name | String | No | Yes | This is applicable only if you select COMPOSITE as the variabletype. Enter the name value for this type. |
| keys | List of strings | No | Yes | This can contain arbitrary serializable constructs. |
| values | List of strings | No | Yes | This can contain arbitrary serializable constructs. When you specify this field inside any variable operation for the VARIABLEOP step type, it is possible to use the constant of a specific type, instead of using string. For details about how to  specific type, instead of using string. For details about how to use constant, see Constant Specification for values below. |
| composite_value | String | No | Yes | This can contain arbitrary serializable constructs. |
| destination_key | String | No | Yes | This can contain arbitrary serializable constructs. |
| if_exists | ENUM | No | Yes | The action taken if the variable exists. The valid value is one of the following: SKIP, ERROR, or NEXT. |
| if_exists_next | String | No | Yes | Enter the name for the next step. |
| condition | CONDITION Struct | No |  | This can be specified for POP and UNSHIFT operations. |
