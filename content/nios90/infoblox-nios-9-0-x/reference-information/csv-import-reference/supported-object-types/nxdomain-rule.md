---
title: "NXDOMAIN Rule"
source: "/space/nios90/280661592"
pageId: "280661592"
---
| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-nxdomainrule | String | Yes |  |  | Example: NxdomainRule |
| parent | String | Yes | Name | nxdomain_rules | This field indicates the ruleset to which the NXDOMAIN rule belongs. Example: nxdomain-ruleset1 |
| pattern | String | Yes | Pattern | pattern | Use this to match domain names. You cannot use the characters * and ,, in the domain name. Example: foo |
| _new_pattern | String | No |  |  | Example: foo-new |
| action | String | Yes | Action | action | The valid value is PASS, MODIFY or REDIRECT. Example: PASS |

# Examples

This section contains examples of how to create data files for NXDOMAIN rules. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding an NXDOMAIN Rule

This example shows how to import an NXDOMAIN rule.

`header-nxdomainrule,action*,parent*,pattern* nxdomainrule,REDIRECT,NXD,*foo.com`

## Overwriting NXDOMAIN Rule Data

This example shows how to overwrite the action of an NXDOMAIN rule.

`header-nxdomainrule,action*,parent*,pattern* nxdomainRule,REDIRCT,NXD,*bar.com`
