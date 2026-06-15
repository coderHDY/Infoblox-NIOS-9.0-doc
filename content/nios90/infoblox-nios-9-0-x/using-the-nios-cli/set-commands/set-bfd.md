---
title: "set bfd"
source: "/space/nios90/280659095"
pageId: "280659095"
---
You can use the set bfd command to set the BFD logging level. The default logging level is 'informational'. Changing the BFD logging level might cause disruption in advertising due to `bfdd.conf` change. To view the BFD session details, see *[show bfd](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-bfd)*.

# Syntax

`set bfd log [ debugging | informational | notifications | warnings | errors | critical | alerts | emergencies ]`  
This command has no arguments.

# Example

`Infoblox &gt; set bfd log debugging`
