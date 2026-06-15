---
title: "show dns_rrl"
source: "/space/nios90/280658539"
pageId: "280658539"
---
The `show`` ``dns_rrl` command provides information about the Grid or member DNS RRL (Response Rate Limiting) settings. You can use the `set`` ``dns_rrl`` `command to configure the DNS RRL settings. For more information, see *[set dns_rrl](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-dns-rrl)*.

# Syntax

`show dns_rrl [member &lt;hostname&gt; | view &lt;viewname&gt; | grid]`

> **warning**
>
> **Note**
> 
> The show dns_rrl command accepts the member option only on the Grid Master.



| **Argument** | **Description** |
| --- | --- |
| member *&lt;hostname&gt;* | The FQDN of the Grid member. |
| view *&lt;viewname&gt;* | The name of the DNS view. |
| grid | Show RRL settings for the Grid. |

# Examples

`Infoblox &gt; ``show`` ``dns_rrl`` ``grid`  
` Grid RRL configuration: `

`  responses_per_second: 200`  
`  window: 15 (default)`  
`  slip: 3`  
`  log_only: false (default) `  
` `

`Grid logging configuration:`  
`  log rate-limit: true (default)`
