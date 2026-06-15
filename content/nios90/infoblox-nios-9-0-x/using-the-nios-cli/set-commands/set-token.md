---
title: "set token"
source: "/space/nios90/280789802"
pageId: "280789802"
---
The `set token` command is used to set Token, Grid Masters IP address and Certificate to the token file.

# Syntax

`set token [on|off|join]`

| **Argument ** | **Description** |
| --- | --- |
| on | Sets Token, Grid Masters IP address and Certificate to the token file |
| off | Removes Token from the file and all corresponding data |
| join | To join the grid using the existing token file |

# Example

`Infoblox &gt; set token on`

> **warning**
>
> **Note**
> 
> To execute the `set token join` CLI command for a Grid member, it is recommended to use a self-signed certificate on the Grid Master instead of a CA-signed certificate.
> 
> If the Grid Master has a CA-signed certificate, it is recommended to use the [set](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-membership)[ ](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-membership)[membership](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-membership) CLI command instead of the `set ``token ``on``/`j`oin` CLI command.
