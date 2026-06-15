---
title: "IPv6 Option Definition"
source: "/space/nios90/280268525"
pageId: "280268525"
---
> **warning**
>
> **Note**
> 
> This object is supported in CSV export only.

| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-IPv6OptionDefinition | String | Yes |  |  | Example: IPv6OptionDefinition |
| space | String | Yes | Option Space | space | Example: MySpace |
| _new_space | String | No |  |  | Add this field to overwrite the space field when you select the overwrite or merge option. |
| name | String | Yes | Name | name | Example: MyOption1 |
| _new_name | String | No |  |  | Add this field to overwrite the name field when you select the overwrite or merge option. |
| code | String | Yes | Options: Code | code | Example: 10 |
| type | String | Yes | Options: Type | type | Use any of the following values:   'T_ARRAY_DOMAIN', 'T_ARRAY_INT16', 'T_ARRAY_INT32', 'T_ARRAY_INT8', 'T_ARRAY_IP_ADDRESS', 'T_ARRAY_IP_ADDRESS_PAIR', 'T_ARRAY_UINT16', 'T_ARRAY_UINT32',  'T_ARRAY_UINT8', 'T_DOMAIN', 'T_FLAG', 'T_FLAG_IP_ADDRESS', 'T_FLAG_TEXT', 'T_INT16', 'T_INT32', 'T_INT8', 'T_IP_ADDRESS', 'T_STRING', 'T_TEXT', 'T_UINT16', 'T_UINT32', 'T_UINT8', 'T_UINT8_1_2_4_8'    Example: T_INT8 |
