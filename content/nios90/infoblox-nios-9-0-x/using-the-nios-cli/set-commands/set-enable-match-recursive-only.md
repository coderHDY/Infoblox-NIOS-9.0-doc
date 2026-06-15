---
title: "set enable_match_recursive_only"
source: "/space/nios90/280790045"
pageId: "280790045"
---
Use the `set` **enable_match_recursive_only** command to enable or disable the match-recursive-only option for a specific DNS view on a specific Grid member. You can also use the match-recursive-only option in combination with the Match Clients and Match Destinations settings to restrict and filter client access for specific DNS views on specific Grid members. For information about how to use these features, refer to the *Infoblox* *NIOS* *Administrator* *Guide*.  
If you want to enable this setting for a DNS view, ensure that the **Enable** **Recursion** setting is enabled for the DNS view on the specified member.  
To check the status of this setting for all DNS views on a Grid member, use the `show enable-match-recursive-only` CLI command. For information, see *[show enable_match_recursive_only](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-enable-match-recursive-only)*.

# Syntax

`set enable_match_recursive_only &lt;true|false|inherit&gt; [``dns_view``]`

| **Argument** | **Description** |
| --- | --- |
| `&lt;true\|false\|inherit&gt;`` ` | Set the `enable_match_recursive_only `setting to `true`, `false``,` or `inherit``.` The default value is inherit. The `true` setting enables the match-recursive-only option for the specified DNS view on the specific member; `false` disables it for the specified DNS view on the specific member. `Inherit` represents the setting for the DNS view `(``true` or `false``)` that is populated across all members serving that DNS view. By specifying `true` or `false``,` you override the `inherit` setting for the specific member. Specifying `inherit` restores the inherited setting for the specific member. |
| `dns_view`` ` | Optional parameter to specify the DNS view. If this parameter is omitted, the setting affects only the default DNS view. If the specific Grid member does not serve the default DNS view, you will receive an error message by omitting this parameter. |

# Example

`Infoblox &gt; ``set`` ``enable_match_recursive_only`` ``true`` (affects default DNS view only if default DNS view is served by member)`  
` Infoblox &gt; ``set`` ``enable_match_recursive_only`` ``true`` ``external`` `  
`Infoblox &gt; ``set`` ``enable_match_recursive_only`` ``false`` ``corp100sales`` `  
`Infoblox &gt; ``set`` ``enable_match_recursive_only`` ``inherit`` ``external`
