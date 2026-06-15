---
title: "show crl_uris"
source: "/space/nios90/1580892885"
pageId: "1580892885"
---
This command displays the list of URIs in the Certificate Revocation List that is located in the NIOS database. For information about managing the URIs in the Certificate Revocation List, see [*set crl_uris*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-crl-uris).

# Syntax

`show crl_uris`

This command has no arguments.

# Example

`Infoblox &gt; show crl_uris `  
`http://10.120.22.129:5004/revoked.crl.der`  
`http://10.120.22.129:8000/revoked.crl.der`
