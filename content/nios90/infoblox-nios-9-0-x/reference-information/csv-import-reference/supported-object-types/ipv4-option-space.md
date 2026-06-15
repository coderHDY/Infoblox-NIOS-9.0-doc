---
title: "IPv4 Option Space"
source: "/space/nios90/280401692"
pageId: "280401692"
---
| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-OptionSpace | String | Yes |  |  | Example: OptionSpace |
| name | String | Yes | Name | name | Example: ABC-co options |
| _new_name | String | No |  |  | Add this field to overwrite the name field when you select the overwrite or merge option. |
| comment | String | No | Comment | comment |  |

# Examples

This section contains examples of how to create data files for option spaces. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding an IPv4 Option Space

This example shows how to import a new IPv4 option space.

`header-OptionSpace,name*,space_type OptionSpace,Optionspace01,VENDOR_SPACE`

## Overwriting IPv4 Option Space Data

This example shows how to overwrite the IPv4 option space name with Optionspace02.

`header-OptionSpace,name*,_new_name OptionSpace,Optionspace01,Optionspace02`

## Merging IPv4 Option Space Data

This example shows how to merge a comment to the IPv4 option space Optionspace02.

`header-OptionSpace,name*,comment OptionSpace,Optionspace02,This is a comment.`
