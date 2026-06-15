---
title: "IPv4 Option Definition"
source: "/space/nios90/280401669"
pageId: "280401669"
---
| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-OptionDefinition | String | Yes |  |  | Example: OptionDefinition |
| space | String | Yes | Option Space | space | Example: ABC-co options |
| _new_space | String | No |  |  | Add this field to overwrite the space field when you select the overwrite or merge option. |
| name | String | Yes | Name | name | Example: Option one |
| _new_name | String | No |  |  | Add this field to overwrite the name field when you select the overwrite or merge option. |
| code | String | Yes | Options: Code | code |  |
| type | String | Yes | Options: Type | type | Use any of the following values: T_FLAG, T_STRING, T_TEXT, T_IP_ADDRESS, T_ARRAY_IP_ADDRESS, T_DOMAIN, T_ARRAY_DOMAIN, T_UINT8,T_UINT16, T_UINT32, T_INT8, T_INT16   Example: T_TEXT |

# Examples

This section contains examples of how to create data files for option definitions. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding an IPv4 Option Definition

This example shows how to import an option definition to the IPv4 option space Space01.

`header-OptionDefinition,space*,name*,code*,type* OptionDefinition,Space01,Option99,99,T_IP_ADDRESS`

## Overwriting IPv4 Option Definition Data

This example shows how to overwrite the IPv4 option definition type from T_IP_ADDRESS to T_FLAG.

`header-OptionDefinition,space*,name*,code*,type* OptionDefinition,Space01,Option99,99,T_FLAG`

## Merging IPv4 Option Definition Data

This example shows how to merge a new space and a new name to an existing IPv4 option definition.

`header-OptionDefinition,space*,_new_space,name*,_new_name OptionDefinition,Space01,New_Space01,Option99,New_Option99`
