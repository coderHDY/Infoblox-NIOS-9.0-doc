---
title: "Whitelist Rule"
source: "/space/nios90/280661566"
pageId: "280661566"
---
| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| header-analyticsdomain   whitelist | String | Yes |  |  | Example: analyticsdomainwhitelist |
| fqdn | String | Yes | Domain Name |  | Use this to match domain names. You cannot use the characters * and ,, in the domain name. The domain name cannot exceed 255 characters. Example: www.test.com |
| comment | String | No | Comment |  | Enter additional information about this domain. |
| disabled | String | Yes | Disable |  | The valid value is TRUE or FALSE. Example: FALSE |
| type | CUSTOM | Yes |  |  | Example: CUSTOM |

# Example

This section contains an example of how to create data file for whitelist rules. The example uses comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding a Whitelist Rule

This example shows how to import a whitelist rule.

`header-analyticsdomainwhitelist, fqdn*, disabled, type BlacklistRule,BlackList,foobar.com,FALSE,CUSTOM`
