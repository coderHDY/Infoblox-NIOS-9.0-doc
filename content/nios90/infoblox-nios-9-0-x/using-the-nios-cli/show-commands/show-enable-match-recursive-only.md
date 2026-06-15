---
title: "show enable_match_recursive_only"
source: "/space/nios90/280822446"
pageId: "280822446"
---
Use the `show`` ``enable_match_recursive_only` command to view the status of the match-recursive-only option for all DNS views on a specific Grid member. For information about how to use the match-recursive-only feature, see *[set enable_match_recursive_only](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-enable-match-recursive-only)**,* and also refer to the *Infoblox* *NIOS* *Administrator* *Guide*.  
The `show`` ``enable_match_recursive_only` command reports one of three possible states:

- `True:` The DNS view is set to use the match-recursive-only setting to restrict and filter client access for the view.
- `False:` The DNS view does not use the match-recursive-only setting.
- `Inherit:` The default, where the DNS view inherits its match-recursive-only setting from the Grid.

# Syntax

`show enable_match_recursive_only`

This command has no arguments.

# Example

`Infoblox &gt; ``show`` ``enable_match_recursive_only`  
`   View 'default': false `  
`   View 'dnsview1': true`  
`   View 'external': inherit`
