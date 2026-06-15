---
title: "Blacklist Rule"
source: "/space/nios90/231505971"
pageId: "231505971"
---
| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-blacklistrule | String | Yes |  |  | Example: BlacklistRule |
| parent | String | Yes | Name | blacklist_rulesets | Example: blacklist-ruleset1 |
| domain_name | String | Yes | Domain Name |  | Use this to match domain names. You cannot use the characters * and ,, in the domain name. The domain name cannot exceed 255 characters. Example: www.foo.com |
| _new_domain_name | String | No |  |  | Example: www.bar.com |
| action | String | Yes | Action | blacklist_action | The valid value is PASS or REDIRECT.   Example: PASS |

# Examples

This section contains examples of how to create data files for blacklist rules. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding a Blacklist Rule

This example shows how to import a blacklist rule.

`header-blacklistrule,parent*,domain_name*,action*`

` BlacklistRule,BlackList,foobar.com,REDIRECT`

## Overwriting Blacklist Rule Data

This example shows how to overwrite the action of a blacklist rule.

`header-blacklistrule,parent*,domain_name*,action*`

` BlacklistRule,BlackList,foobar.com,PASS`
